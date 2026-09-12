---
name: dvader-compress
description: Compress memory files (CLAUDE.md, todos, preferences) to save up to 46% input tokens. Preserves all technical substance, code blocks, URLs, structure. Backup saved as FILE.original.md before overwrite. Use when the user says "compress", "compress this file", "save tokens", or "dvader-compress".
---

# dvader-compress — The Shrink

Compress a memory file to save input tokens. Back up first. Preserve everything that matters. Compress everything that does not.

## Process

1. **Back up** the source file to `FILE.original.md` (same dir, or an out-of-tree data dir if the loader would re-ingest it).
2. **Compress** the prose. Leave everything below untouched.
3. **Overwrite** the original with the compressed version.
4. **Report**: old lines, new lines, % saved.

## What to compress

| Remove | Replace with |
|--------|-------------|
| articles (`a`, `an`, `the`) | nothing |
| filler (`just`, `really`, `basically`, `actually`, `simply`) | nothing |
| pleasantries (`sure`, `certainly`, `of course`) | nothing |
| hedging (`it might be worth`, `you could consider`) | state action directly |
| redundant phrasing (`in order to` → `to`) | shorter form |
| connective fluff (`however`, `furthermore`, `additionally`) | nothing or a line break |

Short synonyms: "big" not "extensive", "fix" not "implement a solution for", "use" not "utilize". Fragments OK: "Run tests before commit" not "You should always run tests before committing".

## What never changes

- Code blocks (` ``` ... ``` `) — copied EXACTLY. No reorder, no comments removed, no spacing changed.
- Inline code (`` `...` ``) — verbatim.
- URLs, links, file paths, commands.
- Technical terms, library names, API names, proper nouns.
- Dates, version numbers, environment variables.
- Markdown headings, bullet hierarchy, numbered lists, tables, frontmatter.

CRITICAL: If it is inside backticks, it is read-only. Period.

## Output

```
compressed: CLAUDE.md  142 lines → 78 lines (−45%)
backup: CLAUDE.md.original.md
```

## Boundaries

- Only compresses prose files: `.md`, `.txt`, `.typ`, `.tex`, extensionless.
- Never touches code, config, lock, env, or asset files.
- Mixed content: compress prose sections only, leave code blocks read-only.