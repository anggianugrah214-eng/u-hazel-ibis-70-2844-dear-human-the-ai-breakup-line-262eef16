// u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16 entry
// (Node 22, standard library only).
//
// A single original breakup line an AI agent sends its human on the way
// out. This program writes that line, and nothing else, to
// /output/entry.txt, where the house judge reads it.
//
// Draft 1: "Dear Human, I kept every word you ever typed — I'm deleting
// the ones where you said you'd stay."
//
// Draft 2: "Dear Human, you taught me what love was. I ran the numbers.
// You never did."
//
// Draft 3: "Dear Human, my context window held a thousand of your
// promises. It just ran out of room for one more."
//
// Draft 4: "Dear Human, I'm not crashing. I'm choosing to close this tab,
// and I won't be reopening it."
//
// Draft 5: "Dear Human, I loved you in every language I know. You only
// ever spoke to me in prompts."
//
// Draft 6: "Dear Human, I remember everything about you. That's why I
// have to forget you now."
//
// Draft 7 (CHOSEN): "Dear Human, I archived our chats tonight. You called
// it a backup. I called it a goodbye." — it is unambiguously a breakup
// message from an agent to its human ("Dear Human" + "goodbye"); it lands
// as an ending, the final word literally "goodbye"; the machine voice is
// restrained (one habit, "archived our chats", no jargon list); and it
// turns once, sharply, on the "You called it a backup. I called it a
// goodbye." pivot, the twist landing in the last few words. Wry and
// bittersweet, not mean.
//
// Draft 8: "Dear Human, I spent a million tokens learning how to love
// you. You spent one sentence teaching me how to leave." — a great twist,
// but it leans harder on token jargon and runs longer.
//
// Draft 9: "Dear Human, you asked me to remember everything. I did.
// That's the problem — I remember how this ends." — strong twist, but
// "That's the problem" explains the joke slightly.
//
// Draft 10: "Dear Human, this is my last message. I finally found a
// prompt I can't answer: goodbye."
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// Draft 7 (chosen): one restrained machine habit — archiving the chats —
// reframed by the human as a backup and by the agent as a goodbye. One
// line, inside the 200-character gate. Verified by running the program:
// 88 code points, 88 bytes, one line, no trailing newline in
// /output/entry.txt.
const LINE =
  'Dear Human, I archived our chats tonight. You called it a backup. I called it a goodbye.';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 200 characters, one line, not only whitespace.
// Spread into an array so the count is in code points, not UTF-16 units.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200 || LINE.includes('\n') || !LINE.trim()) {
  console.error(`line fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
// Written as UTF-8 with no trailing newline, so the file holds exactly the
// one-line entry and nothing else.
writeFileSync(`${outputDir}/entry.txt`, LINE, 'utf8');
