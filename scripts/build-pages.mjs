import { spawnSync } from "node:child_process";

const isCustomDomain = process.env.CUSTOM_DOMAIN === "true";

const build = spawnSync(
  process.execPath,
  ["node_modules/next/dist/bin/next", "build", "--webpack"],
  {
  env: {
    ...process.env,
    GITHUB_PAGES: "true",
    CUSTOM_DOMAIN: isCustomDomain ? "true" : "false",
    NEXT_PUBLIC_BASE_PATH: isCustomDomain ? "" : "/Talia",
  },
  shell: false,
  stdio: "inherit",
  },
);

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
