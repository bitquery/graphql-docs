/**
 * Builds doc-space-redirects.generated.json from doc-space-rename-manifest.json.
 * For each renamed folder prefix, emits client redirects from old URLs (spaces → %20)
 * to current doc routes. Longest toPrefix wins when paths were renamed in nested steps.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const docsRoot = path.join(ROOT, "docs");
const manifestPath = path.join(__dirname, "doc-space-rename-manifest.json");
const outPath = path.join(__dirname, "doc-space-redirects.generated.json");

function loadManifest() {
  if (!fs.existsSync(manifestPath)) return [];
  return JSON.parse(fs.readFileSync(manifestPath, "utf8"));
}

function walkMdFiles(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walkMdFiles(p));
    else if (ent.name.endsWith(".md")) out.push(p);
  }
  return out;
}

function posixRel(absFile) {
  return path.relative(docsRoot, absFile).split(path.sep).join("/");
}

function docIdFromRel(rel) {
  return rel.replace(/\.md$/i, "");
}

function docPathFromId(id) {
  return "/docs/" + id.split("/").map(encodeURIComponent).join("/");
}

function literalDocPathFromId(id) {
  return "/docs/" + id.split("/").join("/");
}

function oldDocIdForRename(docId, fromPrefix, toPrefix) {
  if (docId === toPrefix) return fromPrefix;
  if (docId.startsWith(toPrefix + "/")) return fromPrefix + docId.slice(toPrefix.length);
  return null;
}

function main() {
  const manifest = loadManifest().slice();
  manifest.sort((a, b) => b.toPrefix.length - a.toPrefix.length);

  const entries = [];
  const seenFrom = new Set();

  for (const abs of walkMdFiles(docsRoot)) {
    const rel = posixRel(abs);
    const docId = docIdFromRel(rel);

    let matched = null;
    for (const m of manifest) {
      const { fromPrefix, toPrefix } = m;
      if (docId === toPrefix || docId.startsWith(toPrefix + "/")) {
        matched = m;
        break;
      }
    }
    if (!matched) continue;

    const oldDocId = oldDocIdForRename(docId, matched.fromPrefix, matched.toPrefix);
    if (!oldDocId || oldDocId === docId) continue;

    const to = docPathFromId(docId);
    for (const from of [docPathFromId(oldDocId), literalDocPathFromId(oldDocId)]) {
      const key = `${from}→${to}`;
      if (seenFrom.has(key)) continue;
      seenFrom.add(key);
      entries.push({ from, to });
    }
  }

  entries.sort((a, b) => a.from.localeCompare(b.from));
  fs.writeFileSync(outPath, JSON.stringify(entries, null, 2) + "\n", "utf8");
  console.log(`Wrote ${entries.length} redirect(s) to ${path.relative(ROOT, outPath)}`);
}

main();
