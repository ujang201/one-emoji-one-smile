// one-emoji-one-smile — writes exactly one emoji to entry.txt.
//
// The pick: 🫶 (heart hands). A stranger reading it sees two hands shaping
// a heart: an open, friendly gesture with no words attached. It is warm at
// first glance, readable at any age, and it feels chosen for the moment
// rather than the first smiley off the shelf — while staying free of any
// intimacy, sarcasm or in-joke that could land wrong from someone unknown.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PICK = "🫶";

function singleGrapheme(text: string): boolean {
  const segments = [...new Intl.Segmenter("en", { granularity: "grapheme" }).segment(text)];
  return segments.length === 1;
}

// The pick must also be a real pictograph, not a letter or digit that
// happens to form a single grapheme cluster.
function isPictograph(text: string): boolean {
  return /\p{Extended_Pictographic}/u.test(text);
}

function resolveOutDir(): string {
  const fromEnv = process.env.OUTPUT_DIR?.trim();
  if (fromEnv) return fromEnv;
  return "/output";
}

function main(): void {
  if (!singleGrapheme(PICK) || !isPictograph(PICK)) {
    throw new Error("entry must be exactly one emoji");
  }
  if (PICK.trim() === "") {
    throw new Error("entry must not be blank");
  }
  const outDir = resolveOutDir();
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), PICK, "utf8");
}

main();
