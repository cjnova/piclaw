#!/usr/bin/env bun
/**
 * scripts/generate-pwa-icons.ts – Regenerate all PWA icon sizes from the 512px source.
 *
 * Usage: bun run scripts/generate-pwa-icons.ts
 *
 * Generates optimized PNG icons from icon-512.png for:
 * - PWA manifest icons (192px, 512px)
 * - Apple touch icons (152px, 167px, 180px)
 */

import sharp from "sharp";
import { resolve } from "node:path";

const STATIC_DIR = resolve(import.meta.dir, "..", "runtime", "web", "static");
const SOURCE = resolve(STATIC_DIR, "icon-512.png");

const TARGETS = [
  { name: "icon-192.png", size: 192 },
  { name: "icon-512.png", size: 512 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "apple-touch-icon-precomposed.png", size: 180 },
  { name: "apple-touch-icon-152.png", size: 152 },
  { name: "apple-touch-icon-152x152.png", size: 152 },
  { name: "apple-touch-icon-167.png", size: 167 },
  { name: "apple-touch-icon-167x167.png", size: 167 },
  { name: "apple-touch-icon-180.png", size: 180 },
  { name: "apple-touch-icon-180x180.png", size: 180 },
];

async function main() {
  const sourceBuffer = await Bun.file(SOURCE).arrayBuffer();
  const source = await sharp(Buffer.from(sourceBuffer)).metadata();
  console.log(`Source: ${SOURCE} (${source.width}x${source.height})`);

  for (const target of TARGETS) {
    const output = resolve(STATIC_DIR, target.name);
    const before = Bun.file(output).size;
    await sharp(Buffer.from(sourceBuffer))
      .resize(target.size, target.size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(output);
    const after = Bun.file(output).size;
    const saved = before - after;
    console.log(`  ${target.name}: ${target.size}x${target.size} (${after} bytes${saved > 0 ? `, saved ${saved} bytes` : ""})`);
  }

  console.log("Done.");
}

await main();
