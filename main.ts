// Deletes one word from the dictionary: "utilize".
// The word exists only to make the plain word "use" sound complicated.
// Erase it, and everyone has to say what they mean.
// No caption, no defence: the gap the word leaves behind is the joke.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "utilize";

function main(): void {
  // The entry must be exactly one word, spelled correctly.
  if (!/^[A-Za-z]+$/.test(WORD)) {
    throw new Error("entry must be exactly one word");
  }
  // Gate: 1 to 77 characters of UTF-8 text, not only whitespace.
  const length = Buffer.byteLength(WORD, "utf8");
  if (length < 1 || length > 77 || WORD.trim().length === 0) {
    throw new Error(`entry length ${length} is outside the 1-77 gate`);
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
}

main();
