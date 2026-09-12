---
name: dvader-compress
description: Compress prose files while preserving technical content. Use for compress file, save tokens, memory file shrink.
---

# dvader-compress

Back up first: `FILE.original.md`.

Compress prose only:
- remove filler, hedging, pleasantries
- shorten phrases
- keep structure

Never change:
- code blocks
- inline code
- URLs
- paths/commands
- technical names
- dates/versions/env vars
- tables/frontmatter

Allowed files: `.md`, `.txt`, `.typ`, `.tex`, extensionless prose.

Report:
`compressed: file old -> new (% saved). backup: path.`
