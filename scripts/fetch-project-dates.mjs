/**
 * Fetches the first (oldest) commit date for each project repository via GitHub API
 * and writes src/data/project-dates.json. Run before build to show "Started" dates in Selected Work.
 *
 * Usage: node scripts/fetch-project-dates.mjs
 * Optional: GITHUB_TOKEN env for higher rate limit (60 vs 5000/hour).
 */

import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPOS = [
  "https://github.com/Ghoes18/realstate-enhance",
  "https://github.com/Ghoes18/whatsapp-ai-bot",
  "https://github.com/Ghoes18/Media-Log",
  "https://github.com/Ghoes18/streamerdonations",
  "https://github.com/Ghoes18/agendapro",
  "https://github.com/Ghoes18/juizai",
];

const token = process.env.GITHUB_TOKEN;
const headers = {
  Accept: "application/vnd.github.v3+json",
  ...(token && { Authorization: `Bearer ${token}` }),
};

function parseLinkLastPage(linkHeader) {
  if (!linkHeader) return null;
  const last = linkHeader.split(",").find((s) => s.includes('rel="last"'));
  if (!last) return null;
  const m = last.match(/page=(\d+)/);
  return m ? parseInt(m[1], 10) : null;
}

async function getFirstCommitDate(repoUrl) {
  const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+?)(?:\/?$)/);
  if (!match) return null;
  const [, owner, repo] = match;
  const apiBase = `https://api.github.com/repos/${owner}/${repo}/commits`;

  try {
    const first = await fetch(`${apiBase}?per_page=1`, { headers });
    const lastPage = parseLinkLastPage(first.headers.get("Link"));
    if (lastPage == null) {
      const data = await first.json();
      if (!Array.isArray(data) || data.length === 0) return null;
      return data[0].commit?.committer?.date ?? null;
    }
    const last = await fetch(`${apiBase}?per_page=1&page=${lastPage}`, { headers });
    if (!last.ok) return null;
    const data = await last.json();
    if (!Array.isArray(data) || data.length === 0) return null;
    return data[0].commit?.committer?.date ?? null;
  } catch (e) {
    console.warn(`Failed ${repoUrl}:`, e.message);
    return null;
  }
}

async function main() {
  const out = {};
  for (const url of REPOS) {
    process.stderr.write(`Fetching first commit for ${url}... `);
    const date = await getFirstCommitDate(url);
    out[url] = date;
    process.stderr.write(date ? `${date}\n` : "failed\n");
  }
  const outPath = join(__dirname, "..", "src", "data", "project-dates.json");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(out, null, 2));
  console.log(`Wrote ${outPath}`);
}

main();
