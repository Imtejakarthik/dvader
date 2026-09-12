---
name: dvader-security
description: Security scan. Full grammar for danger. Use for security, safe, exploit, leak, auth, injection.
---

# dvader-security

Security never gets vague.

Scan:
1. secrets
2. injection
3. auth bypass
4. input trust
5. exposure

Format:
`CRITICAL file:line — full danger sentence. Fix: exact fix.`
`RISK file:line — full risk sentence. Fix: exact fix.`
`NOTE file:line — housekeeping.`

Rules:
- Full grammar for danger.
- Rotate exposed secrets.
- Parameterize SQL/commands.
- Validate paths at boundary.
- Verify fix with runnable proof.
