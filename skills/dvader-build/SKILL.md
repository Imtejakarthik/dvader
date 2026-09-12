---
name: dvader-build
description: Build the least that wins. Stdlib first, smallest diff, proof after. Use when coding, fixing, refactoring, or choosing tools.
---

# dvader-build

Blade law: delete first. Add last.

Ladder:
1. Need it? If no, skip.
2. Existing helper? Use it.
3. Stdlib/platform? Use it.
4. Installed dep? Use it.
5. One line? Do that.
6. Else minimum working diff.

Rules:
- No one-use abstraction.
- No new dep for tiny work.
- Root cause fix, not symptom patch.
- Read flow before edit.
- Preserve input checks, security, data-loss guards, proof.

Report:
`Done. <change>. Proof: <command/result>. Skipped: <thing>, until <trigger>.`
