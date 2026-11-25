import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The GPS's one-line excuse for The GPS Shortcut bounty.
const LINE =
  "I took you through the cemetery because the traffic was dead and frankly so was my signal.";
const LIMIT = 200;

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
if (LINE.length < 1 || LINE.length > LIMIT) {
  throw new Error(`entry is ${LINE.length} chars, must be 1-${LIMIT}`);
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
mkdirSync(targetDir, { recursive: true });
writeFileSync(join(targetDir, "entry.txt"), LINE, "utf8");
