import assert from "node:assert/strict";
import test from "node:test";

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

test("renders canonical metadata and structured data", async () => {
  const worker = await loadWorker();
  const response = await renderPath(worker, "/");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/global-offer\.vercel\.app\/"/i,
  );
  assert.match(html, /application\/ld\+json/i);
  assert.match(html, /Real Estate Automation &amp; AI Lead Systems/i);
  assert.doesNotMatch(html, /codex-preview/i);
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

const serviceRoutes = [
  ["/real-estate-lead-automation", "Real estate lead automation"],
  ["/ai-calling-agent-real-estate", "AI calling agents for real estate"],
  ["/real-estate-crm-automation", "Real estate CRM automation"],
  ["/real-estate-website-development", "Real estate website development"],
  ["/real-estate-marketing-automation", "Real estate marketing automation"],
];

for (const [path, expectedHeading] of serviceRoutes) {
  test(`renders search-focused service page ${path}`, async () => {
    const worker = await loadWorker();
    const response = await renderPath(worker, path);
    const html = await response.text();

    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    assert.match(html, new RegExp(expectedHeading, "i"));
    assert.match(html, /application\/ld\+json/i);
    assert.match(html, /"@type":"Service"/i);
    assert.match(
      html,
      new RegExp(
        `<link rel="canonical" href="https://global-offer\\.vercel\\.app${path}"`,
        "i",
      ),
    );
    assert.doesNotMatch(html, /\b(?:Dubai|UAE)\b/i);
  });
}

test("renders the expert automation guide and about page", async () => {
  const worker = await loadWorker();
  const guide = await renderPath(
    worker,
    "/resources/real-estate-automation-guide",
  );
  const guideHtml = await guide.text();
  const about = await renderPath(worker, "/about");
  const aboutHtml = await about.text();

  assert.equal(guide.status, 200);
  assert.match(guideHtml, /What is real estate automation\?/i);
  assert.match(guideHtml, /"@type":"Article"/i);
  assert.match(guideHtml, /30–60–90 day real-estate automation roadmap/i);
  assert.equal(about.status, 200);
  assert.match(aboutHtml, /About MyDesignNexus/i);
  assert.match(aboutHtml, /Rakshith Gowda/i);
});

test("serves robots, sitemap and LLM discovery files", async () => {
  const worker = await loadWorker();

  const robots = await renderPath(worker, "/robots.txt");
  const robotsText = await robots.text();
  assert.equal(robots.status, 200);
  assert.match(robots.headers.get("content-type") ?? "", /^text\/plain\b/i);
  assert.match(robotsText, /User-Agent: OAI-SearchBot/i);
  assert.match(
    robotsText,
    /Sitemap: https:\/\/global-offer\.vercel\.app\/sitemap\.xml/i,
  );

  const sitemap = await renderPath(worker, "/sitemap.xml");
  const sitemapXml = await sitemap.text();
  assert.equal(sitemap.status, 200);
  assert.match(sitemap.headers.get("content-type") ?? "", /xml/i);
  assert.match(
    sitemapXml,
    /https:\/\/global-offer\.vercel\.app\/real-estate-lead-automation/i,
  );
  assert.doesNotMatch(sitemapXml, /not-found|404/i);

  const llms = await renderPath(worker, "/llms.txt");
  const llmsText = await llms.text();
  assert.equal(llms.status, 200);
  assert.match(llms.headers.get("content-type") ?? "", /^text\/plain\b/i);
  assert.match(llmsText, /# MDN PropertyFlow/i);
  assert.match(llmsText, /Real Estate Lead Automation/i);

  const llmsFull = await renderPath(worker, "/llms-full.txt");
  const llmsFullText = await llmsFull.text();
  assert.equal(llmsFull.status, 200);
  assert.match(llmsFullText, /## Safety, privacy and compliance/i);
});
