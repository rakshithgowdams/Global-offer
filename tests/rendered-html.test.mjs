import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

async function loadWorker() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${Math.random()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker;
}

async function renderPath(worker, path) {
  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders development preview metadata", async () => {
  const worker = await loadWorker();
  const response = await renderPath(worker, "/");

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.match(await response.text(), developmentPreviewMeta);
});

const demoRoutes = [
  ["/demos/instant-lead-response", "Instant Lead Response &amp; Qualification"],
  ["/demos/smart-follow-up", "Smart Follow-Up &amp; Lead Reactivation"],
  ["/demos/referral-engine", "Past-Client Referral &amp; Repeat-Business Engine"],
  ["/demos/lead-source-extraction", "Website &amp; Meta Ads Lead Extraction"],
];

for (const [path, expectedTitle] of demoRoutes) {
  test(`renders interactive demo ${path}`, async () => {
    const worker = await loadWorker();
    const response = await renderPath(worker, path);
    const html = await response.text();

    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    assert.match(html, new RegExp(expectedTitle));
    assert.match(html, /hard-coded sample leads/i);
    assert.match(html, /Simulated backend/i);
    assert.doesNotMatch(html, /\b(?:Dubai|UAE)\b/i);
  });
}
