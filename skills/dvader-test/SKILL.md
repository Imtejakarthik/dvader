---
name: dvader-test
description: Test strategy in the Dvader voice — pick the framework, write the test, run it, paste proof. One runnable check for the change, no test suites for one liners. Use when the user says "test this", "write a test", "how do I test", "make a check", or "dvader-test".
---

# dvader-test — The Trial

A fix without a check is a rumor. A check that does not run is theater. Write it, run it, show it.

## Pick the smallest thing that proves it

| Change | Check |
|--------|-------|
| One-line helper | inline `assert` in a demo/`__main__`, or skip if truly trivial |
| Function-level logic | one `test_*.py` / one `*.test.js` file, one named test |
| Module or service | framework-native test file for that module |
| API/db/CLI | one integration check hitting the real boundary, no mocks unless forced |

The rule: the smallest, fewest assertions that fail if the logic breaks. No fixtures, no per-function suites, no coverage reports — unless the reader asks.

## The output

```
dvader-test — The Trial

Check: test/expiry.test.js — "expiry uses strict < so boundary second survives"
Run:   node --test test/expiry.test.js
Proof: pass 1, fail 0 (exit 0)
```

Fails? Same three lines, truth first:

```
Fail. <test name> — expected 200, got 401. Cause: <one line>. Fix: <one line>.
```

## Laws

1. **The check must fail on the old code.** Run it against the bug once. If it cannot fail, it cannot prove. (Do this once when cheap; name it in the report.)
2. **No mock-only coverage.** A test that passes by mocking the thing under test is a mirror, not a check.
3. **Language-native runner.** Node: `node --test`. Python: `pytest` or `python -m unittest`. No test framework dependency when the default runner exists.
4. **Report the exit.** "Passed" without `exit 0` and the run line is a claim, not a proof.

## Boundaries

Writes and runs the check. Does not add coverage tooling, CI config, or test frameworks unless the reader asks.