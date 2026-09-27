import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, cpSync, rmSync, readFileSync, writeFileSync, symlinkSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

const sourceRoot = path.resolve(import.meta.dirname, "..", "..");

function copyStudio() {
  const target = mkdtempSync(path.join(tmpdir(), "dexter-studio-harness-"));
  cpSync(sourceRoot, target, {
    recursive: true,
    // These fixtures exercise harness contracts/indexing, not historical media.
    filter: (source) => !path.relative(sourceRoot, source).split(path.sep)
      .some((part) => [".git", ".runtime", "EVIDENCE", "node_modules"].includes(part))
  });
  return target;
}

function run(root, args) {
  try {
    return JSON.parse(execFileSync("node", ["harness/cli.mjs", ...args], {
      cwd: root,
      encoding: "utf8"
    }));
  } catch (error) {
    return JSON.parse(error.stdout);
  }
}

test("locally accepted example validates without a push gate", () => {
  const root = copyStudio();
  try {
    const result = run(root, ["run", "validate", "--file", "harness/templates/lite-run.example.json"]);
    assert.equal(result.ok, true);
    const manifest = JSON.parse(readFileSync(path.join(root, 'harness/templates/lite-run.example.json'), 'utf8'));
    assert.equal(manifest.status, 'accepted');
    assert.ok(!manifest.requiredGates.includes('finalizePush'));
    assert.equal(manifest.gates.finalizePush, undefined);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test('explicitly requested push gate remains required', () => {
  const root = copyStudio();
  try {
    const file = 'harness/templates/lite-run.example.json';
    const manifest = JSON.parse(readFileSync(path.join(root, file), 'utf8'));
    manifest.requiredGates.push('finalizePush');
    writeFileSync(path.join(root, file), JSON.stringify(manifest));
    const result = run(root, ['run', 'validate', '--file', file]);
    assert.equal(result.ok, false);
    assert.ok(result.errors.some((error) => error.includes('finalizePush')));
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('delivery finalize still rejects a repository without an upstream', () => {
  const root = copyStudio();
  try {
    execFileSync('git', ['init', '--quiet'], { cwd: root });
    const result = run(root, ['run', 'finalize', '--file', 'harness/templates/lite-run.example.json']);
    assert.equal(result.ok, false);
    assert.ok(result.errors.some((error) => error.includes('upstream')));
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test("accepted run rejects stale evidence hash", () => {
  const root = copyStudio();
  try {
    const manifestPath = path.join(root, "harness/templates/lite-run.example.json");
    const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
    manifest.gates.contractScope.evidence[0].sha256 = "bad";
    writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
    const result = run(root, ["run", "validate", "--file", "harness/templates/lite-run.example.json"]);
    assert.equal(result.ok, false);
    assert(result.errors.some((error) => error.includes("hash mismatch")));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("index and retrieve include studio docs", () => {
  const root = copyStudio();
  try {
    const index = run(root, ["index", "build"]);
    assert.equal(index.ok, true);
    assert(index.indexedDocuments > 0);
    mkdirSync(path.join(root, 'products', 'sample'), { recursive: true });
    const retrieved = run(root, ["retrieve", "--project", "sample", "--query", "standing orders"]);
    assert.equal(retrieved.ok, true);
    assert(retrieved.documents.length > 0);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test('CLI uses its studio root when launched from nested app with its own markers', () => {
  const root = copyStudio();
  try {
    const nested = path.join(root, 'products', 'example-project', 'app');
    mkdirSync(nested, { recursive: true });
    writeFileSync(path.join(nested, 'AGENTS.md'), '# App instructions');
    writeFileSync(path.join(nested, 'package.json'), '{}');
    const result = JSON.parse(execFileSync('node', [path.join(root, 'harness', 'cli.mjs'), 'retrieve', '--project', 'example-project', '--query', 'standing orders'], { cwd: nested, encoding: 'utf8' }));
    assert.equal(result.ok, true);
    assert.ok(result.constraints.some((record) => record.path === 'operating-system/STANDING_ORDERS.md'));
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('lite evidence rejects a sibling directory sharing the studio path prefix', () => {
  const root = copyStudio();
  const sibling = `${root}-other`;
  try {
    mkdirSync(sibling);
    writeFileSync(path.join(sibling, 'evidence.md'), 'Outside evidence');
    const file = 'harness/templates/lite-run.example.json';
    const manifest = JSON.parse(readFileSync(path.join(root, file), 'utf8'));
    manifest.gates.contractScope.evidence = [{ path: path.relative(root, path.join(sibling, 'evidence.md')) }];
    writeFileSync(path.join(root, file), JSON.stringify(manifest));
    const result = run(root, ['run', 'validate', '--file', file]);
    assert.equal(result.ok, false);
    assert.ok(result.errors.some((error) => error.includes('evidence path')));
    symlinkSync(sibling, path.join(root, 'linked-evidence'), process.platform === 'win32' ? 'junction' : 'dir');
    manifest.gates.contractScope.evidence = [{ path: 'linked-evidence/evidence.md' }];
    writeFileSync(path.join(root, file), JSON.stringify(manifest));
    const linked = run(root, ['run', 'validate', '--file', file]);
    assert.equal(linked.ok, false);
    assert.ok(linked.errors.some((error) => error.includes('evidence path')));
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(sibling, { recursive: true, force: true });
  }
});
