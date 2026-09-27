import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { buildIndex, retrieve } from '../retrieval.mjs';

function fixture(t) {
  const root = mkdtempSync(path.join(tmpdir(), 'studio-retrieval-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const put = (file, body) => { const target = path.join(root, file); mkdirSync(path.dirname(target), { recursive: true }); writeFileSync(target, body); };
  const doc = (id, scope, type = 'document', status = 'draft', links = []) => `<!-- studio ${JSON.stringify({ id, scope, type, status, links })} -->\n`;
  put('operating-system/rules.md', doc('rules', 'studio', 'rule', 'approved') + '# Rules\nAlways review.');
  put('products/alpha/PRD.md', doc('alpha-prd', 'alpha') + '# Alpha\n## Login [A-1]\nAlpha login.');
  put('products/beta/PRD.md', doc('beta-prd', 'beta') + '# Beta\nBeta secret login.');
  return { root, put, doc };
}

test('explicit project isolates hits and includes approved constraints with source provenance', (t) => {
  const { root, put } = fixture(t);
  put('operating-system/templates/hidden.md', '# Hidden\nlogin');
  put('products/alpha/runs/log.md', '# Log\nlogin');
  put('products/alpha/EVIDENCE.md', '# Evidence\nlogin');
  put('products/_registry/hidden.md', '# Hidden\nlogin');
  assert.throws(() => retrieve(root, undefined, 'login'), /--project/);
  const result = retrieve(root, 'alpha', 'login', 1);
  assert.equal(result.ok, true);
  assert.equal(result.documents.length, 1);
  assert.equal(result.documents[0].requirementId, 'A-1');
  assert.equal(result.documents[0].startLine, 3);
  assert.equal(result.documents[0].status, 'draft');
  assert.match(result.documents[0].hash, /^[a-f0-9]{64}$/);
  assert.ok(result.constraints.some((d) => d.id === 'rules'));
  assert.ok([...result.documents, ...result.constraints].every((d) => ['studio', 'alpha'].includes(d.scope)));
  assert.equal(buildIndex(root).indexedDocuments, 3);
});

test('incremental index updates changed files and removes deleted sources', (t) => {
  const { root, put } = fixture(t);
  assert.equal(buildIndex(root).changedDocuments, 3);
  assert.equal(buildIndex(root).changedDocuments, 0);
  put('products/alpha/PRD.md', '# Replacement\nNewUniqueWord');
  assert.equal(buildIndex(root).changedDocuments, 1);
  assert.equal(retrieve(root, 'alpha', 'login').documents.length, 0);
  assert.equal(retrieve(root, 'alpha', 'NewUniqueWord').documents.length, 1);
  rmSync(path.join(root, 'products/alpha/PRD.md'));
  assert.equal(buildIndex(root).deletedDocuments, 1);
  assert.equal(retrieve(root, 'alpha', 'NewUniqueWord').documents.length, 0);
});

test('graph validates broken, duplicate, status and path-scope spoofing', (t) => {
  const { root, put, doc } = fixture(t);
  put('products/alpha/bad.md', doc('beta-prd', 'studio', 'rule', 'banana', [{ relation: 'requires', target: 'missing' }]) + '# Bad');
  const errors = buildIndex(root).graph.errors.join('\n');
  assert.match(errors, /duplicate id/);
  assert.match(errors, /scope.*disagrees/);
  assert.match(errors, /invalid status/);
  assert.match(errors, /broken link/);
  assert.equal(retrieve(root, 'alpha', 'login').ok, false);
});

test('cross-project reference is allowed but never retrieved; governing links rejected', (t) => {
  const { root, put, doc } = fixture(t);
  put('products/alpha/linked.md', doc('linked', 'alpha', 'document', 'draft', [{ relation: 'requires', target: 'local-decision' }, { relation: 'reference', target: 'beta-prd' }]) + '# Linked\nNeedle');
  put('products/alpha/decision.md', doc('local-decision', 'alpha', 'decision') + '# Decision\nUse squares');
  const result = retrieve(root, 'alpha', 'Needle');
  assert.equal(result.ok, true);
  assert.ok(result.constraints.some((d) => d.id === 'local-decision'));
  assert.ok(!result.graph.nodes.some((n) => n.id === 'beta-prd'));
  put('products/alpha/linked.md', doc('linked', 'alpha', 'document', 'draft', [{ relation: 'requires', target: 'beta-prd' }]) + '# Linked');
  assert.match(buildIndex(root).graph.errors.join('\n'), /cross-project governing/);
});

test('nested exceptions stay with requirements; contains edges reach linked constraints', (t) => {
  const { root, put, doc } = fixture(t);
  put('products/alpha/PRD.md', doc('alpha-prd', 'alpha') + '# Alpha\nIntroNeedle\n## Login [A-1]\nRequire consent\n### Exception [A-2]\nLocal preview is exempt');
  put('products/alpha/constraint.md', doc('consent-rule', 'alpha', 'rule', 'draft', [{ relation: 'constrains', target: 'A-2' }]) + '# Consent\nBounded exception');
  const result = retrieve(root, 'alpha', 'IntroNeedle');
  assert.ok(result.constraints.some((c) => c.id === 'consent-rule'));
  const login = retrieve(root, 'alpha', 'consent').documents.find((c) => c.requirementId === 'A-1');
  assert.match(login.text, /Local preview is exempt/);
  assert.ok(result.graph.edges.some((e) => e.relation === 'contains' && e.to === 'A-2'));
});

test('inactive records stay out of results; unrelated project errors do not block retrieval', (t) => {
  const { root, put, doc } = fixture(t);
  put('products/alpha/retired.md', doc('retired', 'alpha', 'rule', 'superseded') + '# Retired\nlogin');
  put('products/beta/broken.md', doc('broken-beta', 'beta', 'document', 'draft', [{ relation: 'requires', target: 'missing-beta-secret' }]) + '# Broken');
  assert.equal(buildIndex(root).ok, false);
  const result = retrieve(root, 'alpha', 'login');
  assert.equal(result.ok, true);
  assert.ok(!JSON.stringify(result).includes('beta'));
  assert.ok(![...result.documents, ...result.constraints].some((d) => d.id === 'retired'));
});

test('vendor, generated, hidden and symlink directories stay out of the index', (t) => {
  const { root, put } = fixture(t);
  for (const directory of ['.git', 'node_modules', '.runtime', 'dist', 'build', 'coverage', '.private']) {
    put(`products/alpha/app/${directory}/hidden.md`, '# Internal\nExcludedUniqueTerm');
    put(`operating-system/${directory}/hidden.md`, '# Internal\nExcludedUniqueTerm');
  }
  put('products/.hidden-project/private.md', '# Internal\nExcludedUniqueTerm');
  put('products/alpha/docs/guide.md', '# Project guide\nIncludedUniqueTerm');
  put('unindexed-source/leak.md', '# Linked outside indexed trees\nExcludedUniqueTerm');
  symlinkSync(path.join(root, 'unindexed-source'), path.join(root, 'products/alpha/linked-docs'), process.platform === 'win32' ? 'junction' : 'dir');
  assert.equal(buildIndex(root).indexedDocuments, 4);
  assert.equal(retrieve(root, 'alpha', 'ExcludedUniqueTerm').documents.length, 0);
  assert.equal(retrieve(root, 'alpha', 'IncludedUniqueTerm').documents.length, 1);
});
