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
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("includes social sharing metadata", async () => {
  const html = await readFile(output, "utf8");

  assert.match(html, /property="og:image" content="https:\/\/loopasam\.github\.io\/pixel-nest\/og\.png"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
});
