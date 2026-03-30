/**
 * Renames docs/ directories whose names contain spaces to hyphenated names (deepest first).
 * Updates doc-space-rename-manifest.json and regenerates doc-space-redirects.generated.json
 * so legacy URLs (%20 and literal spaces) keep working.
 */
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const docsRoot = path.join(__dirname, "..", "docs");
const manifestPath = path.join(__dirname, "doc-space-rename-manifest.json");
const regenScript = path.join(__dirname, "regenerate-space-redirects.js");

function loadManifest() {
  if (!fs.existsSync(manifestPath)) return [];
  return JSON.parse(fs.readFileSync(manifestPath, "utf8"));
}

function saveManifest(arr) {
  fs.writeFileSync(manifestPath, JSON.stringify(arr, null, 2) + "\n", "utf8");
}

/**
 * When a parent folder is renamed, manifest entries whose toPrefix lived under the old path must move.
 */
function shiftManifestToPrefixes(oldRel, newRel) {
  const arr = loadManifest();
  let changed = false;
  for (const e of arr) {
    if (e.toPrefix === oldRel || e.toPrefix.startsWith(oldRel + "/")) {
      e.toPrefix = newRel + e.toPrefix.slice(oldRel.length);
      changed = true;
    }
  }
  if (changed) saveManifest(arr);
}

function appendManifest(fromPrefix, toPrefix) {
  const arr = loadManifest();
  if (arr.some((p) => p.fromPrefix === fromPrefix && p.toPrefix === toPrefix)) return;
  arr.push({ fromPrefix, toPrefix });
  saveManifest(arr);
}

function walkAllDirs(root) {
  const dirs = [];
  function walk(dir) {
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      if (!ent.isDirectory()) continue;
      const p = path.join(dir, ent.name);
      dirs.push(p);
      walk(p);
    }
  }
  walk(root);
  return dirs.sort((a, b) => b.split(path.sep).length - a.split(path.sep).length);
}

function hasSpaceInName(absPath) {
  return /\s/.test(path.basename(absPath));
}

function relPosix(absPath) {
  return path.relative(docsRoot, absPath).split(path.sep).join("/");
}

function normalizeBaseName(base) {
  return base.replace(/\s+/g, "-");
}

function runRegenerate() {
  const r = spawnSync(process.execPath, [regenScript], { stdio: "inherit" });
  if (r.status !== 0) process.exit(r.status ?? 1);
}

function main() {
  if (!fs.existsSync(docsRoot)) {
    console.error("No docs/ directory at", docsRoot);
    process.exit(1);
  }

  let renamed = 0;
  for (const dir of walkAllDirs(docsRoot)) {
    if (!hasSpaceInName(dir)) continue;
    const base = path.basename(dir);
    const parent = path.dirname(dir);
    const newBase = normalizeBaseName(base);
    const newPath = path.join(parent, newBase);
    if (fs.existsSync(newPath)) {
      console.error("ERROR: Cannot rename — target already exists:", newPath);
      process.exit(1);
    }
    const oldRel = relPosix(dir);
    shiftManifestToPrefixes(oldRel, relPosix(newPath));
    fs.renameSync(dir, newPath);
    const newRel = relPosix(newPath);
    appendManifest(oldRel, newRel);
    console.log(`Renamed: ${dir} -> ${newPath}`);
    renamed++;
  }

  if (renamed === 0) {
    console.log("OK: No directory names under docs/ contained spaces.");
  } else {
    console.log(`Done: renamed ${renamed} ${renamed === 1 ? "directory" : "directories"}.`);
  }

  runRegenerate();
}

main();
