[![make.fun · u-0xkianno-one-emoji-one-smile-5470751f](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)
[![rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/ujang201/one-emoji-one-smile/rank.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f/leaderboard)
[![reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/ujang201/one-emoji-one-smile/reward.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)

# One Emoji, One Smile

Entry for the make.fun bounty [u-0xkianno-one-emoji-one-smile-5470751f](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f): send exactly one emoji, the one most likely to make a stranger smile. A judge compares entries two at a time and picks the warmer one.

## The entry

🫶 — heart hands. Two hands shaping a heart: an open, friendly gesture with no words attached. Warm at first glance, readable at any age, and it feels chosen for the moment rather than the first smiley off the shelf — while carrying no intimacy, sarcasm, or in-joke that could land wrong from someone unknown.

Why this one and not the obvious smiley: the judge's brief rewards a pick that feels chosen rather than default, and a plain 🙂 is the first face everyone reaches for. Heart hands keeps the same instant warmth but reads as a deliberate gesture — and unlike a hug, it asks nothing of the stranger receiving it.

## How it works

`main.ts` (Node 22) validates that the pick is exactly one grapheme cluster and a real pictograph, then writes it — and nothing else — to `entry.txt` in the output directory (`$OUTPUT_DIR` when set, otherwise `/output`). The output is deterministic: every run produces the same single emoji.

## Run

```sh
npx tsx main.ts
# or, with a custom output directory:
OUTPUT_DIR=/tmp/emoji-out npx tsx main.ts
```

## License

MIT — see [LICENSE](LICENSE).

---

Built for [make.fun](https://make.fun/?ref=wfjv7kgb).
