import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';

const hash = (text) => createHash('sha256').update(text).digest('hex');
const excluded = new Set(['templates', '_template', '_registry', 'runs', 'evidence', 'node_modules', 'dist', 'build', 'coverage']);
const statuses = new Set(['draft', 'approved', 'superseded', 'rejected', 'archived']);
const relations = new Set(['governs', 'requires', 'depends_on', 'constrains', 'implements', 'supersedes', 'verifies', 'reference']);
const inactive = new Set(['superseded', 'archived', 'rejected']);

function sources(root) {
  const result = [];
  function walk(directory, scope) {
    if (!existsSync(directory)) return;
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      if (excluded.has(entry.name.toLowerCase()) || (entry.isDirectory() && entry.name.startsWith('.')) || /^EVIDENCE(?:\.|$)/i.test(entry.name)) continue;
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) walk(file, scope);
      else if (entry.isFile() && /\.md$/i.test(entry.name)) result.push({ file, scope, path: path.relative(root, file).split(path.sep).join('/') });
    }
  }
  walk(path.join(root, 'operating-system'), 'studio');
  const products = path.join(root, 'products');
  if (existsSync(products)) for (const entry of readdirSync(products, { withFileTypes: true })) {
    if (entry.isDirectory() && !/^[_.]/.test(entry.name) && !excluded.has(entry.name.toLowerCase())) walk(path.join(products, entry.name), entry.name);
  }
  return result.sort((a, b) => a.path.localeCompare(b.path));
}

function parse(source, body) {
  const errors = [];
  let metadata = {};
  const comments = [...body.matchAll(/<!--\s*studio\s+([\s\S]*?)-->/g)];
  if (comments.length > 1) errors.push(`${source.path}: multiple studio metadata blocks`);
  if (comments.length) {
    try { metadata = JSON.parse(comments[0][1]); } catch { errors.push(`${source.path}: invalid studio metadata JSON`); }
    if (!metadata || typeof metadata !== 'object' || Array.isArray(metadata)) { errors.push(`${source.path}: metadata must be an object`); metadata = {}; }
  }
  if (metadata.scope !== undefined && metadata.scope !== source.scope) errors.push(`${source.path}: metadata scope ${metadata.scope} disagrees with path scope ${source.scope}`);
  if (metadata.id !== undefined && (typeof metadata.id !== 'string' || !metadata.id.trim())) errors.push(`${source.path}: invalid id`);
  const status = metadata.status ?? 'draft';
  if (!statuses.has(status)) errors.push(`${source.path}: invalid status ${status}`);
  if (metadata.type !== undefined && (typeof metadata.type !== 'string' || !metadata.type.trim())) errors.push(`${source.path}: invalid type`);
  if (metadata.links !== undefined && !Array.isArray(metadata.links)) errors.push(`${source.path}: links must be an array`);
  const links = Array.isArray(metadata.links) ? metadata.links : [];
  for (const link of links) if (!link || !relations.has(link.relation) || typeof link.target !== 'string' || !link.target.trim()) errors.push(`${source.path}: invalid link`);
  const lines = body.split(/\r?\n/);
  const starts = [0];
  const requirements = [];
  let fence = null;
  for (let i = 0; i < lines.length; i++) {
    const marker = lines[i].match(/^\s*(`{3,}|~{3,})/);
    if (marker) { if (!fence) fence = marker[1][0]; else if (marker[1][0] === fence) fence = null; continue; }
    if (!fence) {
      const requirement = lines[i].match(/^#{1,6}\s+(.*?)\s*\[([^\]]+)\]\s*$/);
      if (requirement) requirements.push({ requirementId: requirement[2], heading: requirement[1], startLine: i + 1 });
      if (/^#{1,2}\s+/.test(lines[i]) && i > 0) starts.push(i);
    }
  }
  const title = lines.find((line) => /^#\s+/.test(line))?.replace(/^#\s+/, '') ?? path.basename(source.path);
  const chunks = starts.map((start, index) => {
    const end = starts[index + 1] ?? lines.length;
    const text = lines.slice(start, end).join('\n');
    const heading = lines[start].match(/^#{1,6}\s+(.+)/)?.[1] ?? title;
    const requirementId = lines[start].match(/^#{1,6}\s+.*?\[([^\]]+)\]\s*$/)?.[1];
    return { startLine: start + 1, endLine: end, heading, text, hash: hash(text), requirementId };
  }).filter((chunk) => chunk.text.replace(/<!--[\s\S]*?-->/g, '').trim());
  return { ...source, id: metadata.id ?? source.path, type: metadata.type ?? 'document', status, title, links, chunks, requirements, hash: hash(body), errors };
}

function open(root) {
  mkdirSync(path.join(root, '.runtime'), { recursive: true });
  const db = new DatabaseSync(path.join(root, '.runtime', 'product-studio.sqlite'));
  db.exec(`CREATE TABLE IF NOT EXISTS retrieval_documents(path TEXT PRIMARY KEY, hash TEXT NOT NULL, data TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS retrieval_chunks(key TEXT PRIMARY KEY, path TEXT NOT NULL, scope TEXT NOT NULL, data TEXT NOT NULL);
    CREATE VIRTUAL TABLE IF NOT EXISTS retrieval_fts USING fts5(key UNINDEXED, heading, body);
    CREATE TABLE IF NOT EXISTS retrieval_edges(source TEXT, target TEXT, relation TEXT);`);
  return db;
}

function graphFor(docs) {
  const errors = docs.flatMap((doc) => doc.errors);
  const ids = new Map();
  const nodes = [];
  for (const doc of docs) {
    for (const [id, chunk] of [[doc.id, null], ...(doc.requirements ?? []).map((c) => [c.requirementId, c])]) {
      if (ids.has(id)) errors.push(`duplicate id: ${id}`);
      else { const node = { id, path: doc.path, scope: doc.scope, type: chunk ? 'requirement' : doc.type, status: doc.status, title: chunk?.heading ?? doc.title, startLine: chunk?.startLine ?? 1 }; ids.set(id, node); nodes.push(node); }
    }
  }
  const edges = [];
  for (const doc of docs) for (const requirement of doc.requirements ?? []) edges.push({ from: doc.id, to: requirement.requirementId, relation: 'contains' });
  for (const doc of docs) for (const link of doc.links) {
    if (!link || !relations.has(link.relation) || typeof link.target !== 'string') continue;
    const target = ids.get(link.target);
    if (!target) { errors.push(`${doc.path}: broken link to ${link.target}`); continue; }
    if (link.relation !== 'reference' && target.scope !== doc.scope && target.scope !== 'studio') { errors.push(`${doc.path}: invalid cross-project governing link to ${link.target}`); continue; }
    edges.push({ from: doc.id, to: link.target, relation: link.relation });
  }
  return { ok: errors.length === 0, nodes, edges, errors };
}

export function buildIndex(root) {
  const db = open(root);
  let changedDocuments = 0, deletedDocuments = 0;
  try {
    db.exec('BEGIN IMMEDIATE');
    const previous = new Map(db.prepare('SELECT path, hash, data FROM retrieval_documents').all().map((row) => [row.path, row]));
    const docs = [];
    const remove = (file) => { db.prepare('DELETE FROM retrieval_fts WHERE key IN (SELECT key FROM retrieval_chunks WHERE path = ?)').run(file); db.prepare('DELETE FROM retrieval_chunks WHERE path = ?').run(file); db.prepare('DELETE FROM retrieval_documents WHERE path = ?').run(file); };
    for (const source of sources(root)) {
      const body = readFileSync(source.file, 'utf8');
      const prior = previous.get(source.path);
      previous.delete(source.path);
      if (prior?.hash === hash(body) && JSON.parse(prior.data).requirements) { docs.push(JSON.parse(prior.data)); continue; }
      const doc = parse(source, body);
      docs.push(doc);
      remove(source.path);
      db.prepare('INSERT INTO retrieval_documents VALUES (?, ?, ?)').run(doc.path, doc.hash, JSON.stringify(doc));
      for (const chunk of doc.chunks) {
        const key = `${doc.path}:${chunk.startLine}`;
        db.prepare('INSERT INTO retrieval_chunks VALUES (?, ?, ?, ?)').run(key, doc.path, doc.scope, JSON.stringify(chunk));
        db.prepare('INSERT INTO retrieval_fts VALUES (?, ?, ?)').run(key, chunk.heading, chunk.text);
      }
      changedDocuments++;
    }
    for (const file of previous.keys()) { remove(file); deletedDocuments++; }
    const graph = graphFor(docs);
    db.exec('DELETE FROM retrieval_edges');
    for (const edge of graph.edges) db.prepare('INSERT INTO retrieval_edges VALUES (?, ?, ?)').run(edge.from, edge.to, edge.relation);
    db.exec('COMMIT');
    return { ok: graph.ok, indexedDocuments: docs.length, changedDocuments, deletedDocuments, indexedChunks: docs.reduce((n, d) => n + d.chunks.length, 0), database: '.runtime/product-studio.sqlite', graph };
  } catch (error) { db.exec('ROLLBACK'); throw error; } finally { db.close(); }
}

export function retrieve(root, project, query, limit = 12) {
  if (typeof project !== 'string' || !/^[a-z0-9][a-z0-9-]*$/.test(project) || project === 'studio' || !existsSync(path.join(root, 'products', project))) throw new Error('retrieve requires --project with an existing project slug');
  if (typeof query !== 'string' || !query.trim()) throw new Error('retrieve requires --query');
  limit = Number(limit);
  if (!Number.isInteger(limit) || limit < 1 || limit > 100) throw new Error('--limit must be an integer from 1 to 100');
  const index = buildIndex(root);
  const db = open(root);
  try {
    const scoped = db.prepare('SELECT data FROM retrieval_documents').all().map((r) => JSON.parse(r.data)).filter((d) => d.scope === 'studio' || d.scope === project);
    const scopedPaths = new Set(scoped.map((d) => d.path));
    const scopedIds = new Set(scoped.flatMap((d) => [d.id, ...(d.requirements ?? []).map((r) => r.requirementId)]));
    const errors = index.graph.errors.filter((error) => [...scopedPaths].some((p) => error.startsWith(`${p}:`)) || (error.startsWith('duplicate id: ') && scopedIds.has(error.slice(14))));
    if (errors.length) return { ok: false, project, errors: ['Selected project or studio metadata is invalid; run check for diagnostics.'] };
    const docs = scoped.filter((d) => !inactive.has(d.status));
    const byPath = new Map(docs.map((d) => [d.path, d]));
    const match = (query.match(/[\p{L}\p{N}_-]+/gu) ?? []).slice(0, 16).map((s) => `"${s}"`).join(' OR ');
    const hits = match ? db.prepare(`SELECT c.path, c.data FROM retrieval_fts f JOIN retrieval_chunks c ON c.key = f.key JOIN retrieval_documents d ON d.path = c.path WHERE retrieval_fts MATCH ? AND c.scope IN ('studio', ?) AND json_extract(d.data, '$.status') NOT IN ('superseded', 'archived', 'rejected') ORDER BY bm25(retrieval_fts), c.path, c.key LIMIT ?`).all(match, project, limit) : [];
    const documents = hits.map((hit) => result(byPath.get(hit.path), JSON.parse(hit.data), 'search'));
    const constraints = [];
    const seen = new Set(documents.map((d) => `${d.path}:${d.startLine}`));
    function include(doc, reason) { for (const chunk of doc.chunks) { const key = `${doc.path}:${chunk.startLine}`; if (!seen.has(key)) { seen.add(key); constraints.push(result(doc, chunk, reason)); } } }
    for (const doc of docs) if (doc.status === 'approved' && ['rule', 'decision'].includes(doc.type)) include(doc, 'approved-constraint');
    const nodes = new Map(index.graph.nodes.map((node) => [node.id, node]));
    let frontier = new Set([...documents, ...constraints].flatMap((d) => [d.id, d.requirementId].filter(Boolean)));
    const visited = new Set(frontier);
    for (let depth = 0; depth < 3 && frontier.size; depth++) {
      const next = new Set();
      for (const edge of index.graph.edges) {
        if (edge.relation === 'reference') continue;
        const target = frontier.has(edge.from) ? edge.to : frontier.has(edge.to) ? edge.from : null;
        if (!target || visited.has(target)) continue;
        const node = nodes.get(target), doc = byPath.get(node?.path);
        if (!doc) continue;
        visited.add(target); next.add(target); include(doc, 'linked-constraint');
        if (visited.size >= 200) break;
      }
      frontier = visited.size >= 200 ? new Set() : next;
    }
    return { ok: true, project, query, limit, documents, constraints, graph: { nodes: index.graph.nodes.filter((n) => visited.has(n.id)), edges: index.graph.edges.filter((e) => e.relation !== 'reference' && visited.has(e.from) && visited.has(e.to)) }, index: { changedDocuments: index.changedDocuments, deletedDocuments: index.deletedDocuments } };
  } finally { db.close(); }
}

function result(doc, chunk, reason) {
  return { id: doc.id, requirementId: chunk.requirementId ?? null, path: doc.path, scope: doc.scope, type: doc.type, status: doc.status, title: doc.title, heading: chunk.heading, startLine: chunk.startLine, endLine: chunk.endLine, hash: chunk.hash, sourceHash: doc.hash, text: chunk.text, reason };
}
