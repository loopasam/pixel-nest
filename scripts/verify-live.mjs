import assert from "node:assert/strict";

const siteUrl = process.argv[2] ?? "https://loopasam.github.io/pixel-nest/";
const pageResponse = await fetch(`${siteUrl}?smoke=${Date.now()}`);

assert.equal(pageResponse.status, 200, `Page returned ${pageResponse.status}`);
assert.match(pageResponse.headers.get("content-type") ?? "", /^text\/html\b/i);

const html = await pageResponse.text();
assert.equal((html.match(/class="game-card /g) ?? []).length, 2);
assert.match(html, /https:\/\/loopasam\.github\.io\/dinoland\//);
assert.match(html, /https:\/\/loopasam\.github\.io\/doudou-battler\//);
assert.doesNotMatch(html, /Coming soon|Game 0[3-9]|Game 1[0-2]/);

const stylesheetHref = html.match(/<link rel="stylesheet" href="([^"]+)"/)?.[1];
assert.ok(stylesheetHref, "Rendered page has no stylesheet link");

const stylesheetResponse = await fetch(new URL(stylesheetHref, siteUrl));
assert.equal(
  stylesheetResponse.status,
  200,
  `Stylesheet ${stylesheetHref} returned ${stylesheetResponse.status}`,
);

const css = await stylesheetResponse.text();
assert.match(css, /\.game-grid/);
assert.match(css, /grid-template-columns/);

console.log(`Live smoke test passed: ${siteUrl}`);
