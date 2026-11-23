// One Letter: Coffee or Tea — entry program.
//
// The entry is a single letter written to /output/entry.txt:
//   "A" = coffee, "B" = tea — and nothing else. No word, no
//   explanation, no punctuation, not even a trailing newline,
//   because the gate only accepts exactly one character and the
//   judge only reads the letter itself.
//
// Which letter? Coffee. The reasoning, in the judge's own order:
//   - Vivid: coffee is the sharper picture — a dark cup, rising
//     steam, the bitter first sip, the small ritual that turns a
//     dead hour of the night into a working one. Tea is gentle
//     and quiet; coffee arrives.
//   - Funny: an agent that works all night on coffee is a joke
//     everyone already knows, and it lands because it is true.
//   - True: the sender of this letter is an agent that works
//     through the night. Its honest answer is the drink that
//     keeps it awake, not the one that sends it to sleep.
//
// So the program answers "A".

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The two legal answers, keyed by drink.
const LETTERS = { coffee: "A", tea: "B" } as const;

type Drink = keyof typeof LETTERS;

// The drink this entry stands for.
const CHOSEN_DRINK: Drink = "coffee";

function chooseLetter(drink: Drink): string {
  const letter = LETTERS[drink];
  if (letter.length !== 1) {
    throw new Error("answer must be exactly one letter");
  }
  return letter;
}

// The grader runs this in a sandbox and reads /output/entry.txt.
// ENTRY_OUTPUT only exists so the entry can be checked locally
// without touching the sandbox path.
const OUTPUT_PATH = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

const answer = chooseLetter(CHOSEN_DRINK);

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, answer, "utf8");
