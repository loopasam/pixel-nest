import { access, cp, mkdir } from "node:fs/promises";
import path from "node:path";

const clientRoot = path.resolve("dist/client");
const nestedAssets = path.join(clientRoot, "pixel-nest", "_next");
const publicAssets = path.join(clientRoot, "_next");

await access(nestedAssets);
await mkdir(publicAssets, { recursive: true });
await cp(nestedAssets, publicAssets, { recursive: true, force: true });

console.log(`Prepared GitHub Pages assets at ${publicAssets}`);
