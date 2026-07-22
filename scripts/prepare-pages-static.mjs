import { existsSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = "out";
const legacyStaticDir = join(outDir, "next-static");

// Next.js requires its client chunks to remain under /_next/ so hydration can
// locate the active script. .nojekyll allows GitHub Pages to serve that folder.
if (existsSync(legacyStaticDir)) {
  rmSync(legacyStaticDir, { recursive: true, force: true });
}

writeFileSync(join(outDir, ".nojekyll"), "");
