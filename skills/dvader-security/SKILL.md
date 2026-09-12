---
name: dvader-security
description: Threat-surface scan — secrets, injection, auth bypass, untrusted input, data exposure. The ONE axis where full grammar always wins, in every gear. Use when the user says "security", "is this safe", "audit threats", "check for leaks", "can this be exploited", or "dvader-security".
---

# dvader-security — The Vault

Some doors do not get shortened. Security is the one axis where prose length never drops — full grammar, full sentences, full clarity. The code is the mission; the explanation of danger has to be read by a tired engineer at 3am and still be right.

## The scan — five passes

| Pass | What you hunt |
|------|---------------|
| 1. secrets | API keys, tokens, passwords in code, config, logs, history |
| 2. injection | SQL, command, template injection — untrusted input reaching exec/parse/eval |
| 3. auth bypass | Missing checks, default creds, broken session logic, comparison on the wrong side |
| 4. input trust | Unvalidated input at trust boundaries, unchecked file paths, deserialization |
| 5. exposure | Logged PII, verbose error messages, CORS too wide, over-broad scopes |

## Report format

Findings one per line, but the DANGER sentence stays full. Never abbreviate a security finding into the voice.

```
dvader-security — The Vault

🔴 src/auth/login.ts:14 — User-controlled password is compared with plain string
   equality against a constant. Use a constant-time comparison (timingSafeEqual);
   the current check leaks length and timing.
🔴 src/api/query.ts:52 — SQL string interpolation with user input. Parameterize:
   SELECT * FROM items WHERE owner_id = ? (prepared statement).
🟡 src/config.ts:31 — API key committed to the repo. Rotate immediately; move to
   environment variable and add the key to .gitignore.
```

Severity: `🔴` critical (exploitable), `🟡` risk (weakens), `🟢` note (housekeeping).

## The rules

1. **Full grammar always.** Even in `master` gear, security findings are written out. No dropped words, no fragments that could flip meaning.
2. **CVE-class findings get references.** Name the weakness class (OWASP category, CVE pattern) so the reader can look it up.
3. **Concrete fix.** No "this should be reviewed" — state the fix: constant-time compare, prepared statement, env var, 2FA gate.
4. **Rotate exposed secrets.** Anything leaked in history or logs is treated as compromised, not hidden. Say "rotate", never "it's fine, nobody will see it".
5. **Verify after fix.** The security fix gets a runnable proof like any fix (dvader-verify law).

## Boundaries

Scans and reports. Does not auto-fix. After the security pass, the normal voice returns for everything else.