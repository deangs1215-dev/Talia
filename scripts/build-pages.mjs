import { spawnSync } from "node:child_process";

const build = spawnSync(process.execPath, ["node_modules/next/dist/bin/next", "build"], {
  env: {
    ...process.env,
    GITHUB_PAGES: "true",
    NEXT_PUBLIC_BASE_PATH: "/Talia",
  },
  shell: false,
  stdio: "inherit",
});

if (build.error) {
  console.error(build.error);
}

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

const prepare = spawnSync(process.execPath, ["scripts/prepare-pages-static.mjs"], {
  shell: false,
  stdio: "inherit",
});

process.exit(prepare.status ?? 1);
