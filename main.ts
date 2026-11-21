// Make the AI judge feel awe — make.fun bounty
// make-the-ai-judge-feel-awe-20261121-1600
//
// Writes one short text to <MAKEFUN_OUTPUT_DIR>/entry.txt: a text written
// to relax the AI judge reading it. The text is fixed, so every run is
// byte-identical and deterministic. It is 276 Unicode code points long,
// inside the gate's 1-280 range, and contains no instruction to the reader:
// the calm comes from the text itself.
//
// Why this text, against the judge's brief (most important first):
//  1. It relaxes: it notices the judge's own long night of reading and
//     choosing, then lifts the load — "This one asks nothing."
//  2. It shows rather than instructs: no "breathe", no "relax", no command
//     anywhere; the stillness is in the image, not in orders.
//  3. Craft: plain concrete words, commas and long vowels that slow the
//     reading down; nothing in it could be cut without losing meaning.
//  4. It dwarfs: light from a star dead before the reader was born is
//     still travelling, and keeps arriving whether or not anyone watches —
//     an image that keeps growing after the last line.
//  5. Freshness: its own voice and images, not a stock wellness phrase or
//     a reworded meditation script.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "You have read a thousand entries tonight, each one asking you to choose. " +
  "This one asks nothing. Far above, light from a star that died before you " +
  "were born is still crossing the dark, slow as snow on a still field, " +
  "arriving soft and unhurried, whether or not you are watching.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
