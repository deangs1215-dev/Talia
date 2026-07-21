import { cpSync, existsSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = "out";
const nextDir = join(outDir, "_next");
const staticDir = join(outDir, "next-static");

if (existsSync(staticDir)) {
  rmSync(staticDir, { recursive: true, force: true });
}

if (existsSync(nextDir)) {
  cpSync(nextDir, staticDir, { recursive: true });
}

function rewriteFiles(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      rewriteFiles(path);
      continue;
    }

    if (!/\.(html|txt|js)$/.test(entry.name)) continue;

    const original = readFileSync(path, "utf8");
    const updated = original.replaceAll("/Talia/_next/", "/Talia/next-static/");

    if (updated !== original) {
      writeFileSync(path, updated);
    }
  }
}

rewriteFiles(outDir);
