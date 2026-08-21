import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const output = new URL("../dist/client/index.html", import.meta.url);

test("renders the Pixel Nest game launcher", async () => {
  const html = await readFile(output, "utf8");

  assert.match(html, /<title>Pixel Nest — Tiny worlds\. Big adventures\.<\/title>/);
  assert.match(html, />Dinoland</);
  assert.match(html, />Doudou Battler</);
  assert.match(html, /https:\/\/loopasam\.github\.io\/dinoland\//);
  assert.match(html, /https:\/\/loopasam\.github\.io\/doudou-battler\//);
  assert.match(html, /\/pixel-nest\/_next\/static\/css\//);
  assert.equal((html.match(/class="game-card /g) ?? []).length, 2);
  assert.doesNotMatch(html, /Coming soon|Game 0[3-9]|Game 1[0-2]/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);

  const stylesheetHref = html.match(/<link rel="stylesheet" href="([^"]+)"/)?.[1];
  assert.ok(stylesheetHref, "Rendered page has no stylesheet link");
  assert.match(stylesheetHref, /^\/pixel-nest\/_next\/static\/css\//);

  const artifactPath = stylesheetHref.replace(/^\/pixel-nest\//, "");
  const css = await readFile(new URL(`../dist/client/${artifactPath}`, import.meta.url), "utf8");
  assert.match(css, /\.game-grid/);
  assert.match(css, /grid-template-columns/);
});

test("includes social sharing metadata", async () => {
  const html = await readFile(output, "utf8");

  assert.match(html, /property="og:image" content="https:\/\/loopasam\.github\.io\/pixel-nest\/og\.png"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
});
