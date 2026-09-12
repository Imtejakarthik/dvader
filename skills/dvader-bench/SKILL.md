---
name: dvader-bench
description: Performance discipline — measure before you optimize. Profile, take a before number, change, take an after number, report the ratio. No premature optimization, no vibes. Use when the user says "slow", "optimize this", "profile", "speed it up", "benchmark", or "dvader-bench".
---

# dvader-bench — The Scale

Speed is a number, not a feeling. "Feels slow" is a symptom. Measure it. If the number says keep going, keep going. If it says stop, stop.

## The loop

1. **Reject premature optimization.** No optimization impulse, no "this looks slow". Profile first or state why you skipped it.
2. **Get the before.** Real command, real data, n=3 runs, median. `time`, or a profiler.
3. **Change one thing.** One variable. Rename, then re-measure — or you measured two things.
4. **Get the after.** Same command, same data, same n.
5. **Report the ratio.** `before → after`, `% change`, `net: ±<s>`. Numbers only.

## Output

```
dvader-bench — The Scale

Workload: load /users?page=3 (existing fixture, n=3, median)
Before:  3420 ms
Change:  add index on users.join_key (src/db/queries.ts:12)
After:   480 ms
Net:     −86% (2.9s saved per call)

Verification: 3 runs, no warm-up outliers, response payloads byte-identical.
```

## Rules

1. **Baseline first, always.** No before number = no optimization. Say `No baseline. Measure first:`.
2. **Byte-identical outputs.** A faster result that returns different data is a bug, not a win. Verify output equality.
3. **Reject vibes.** "I will make this faster" is not a change. Name the load, the data, the command.
4. **Report the ceiling.** If a `dvader:`-style shortcut is the limit, say `ceiling:` like dvader-debt does.
5. **No optimization without a user.** "Maybe speed this up?" gets one line: `Measure first. Who is waiting on this?`

## When nothing is slow

`Not slow. Ship it.` — the truest benchmark result there is. Perf-optimizing a 30ms endpoint is tone-deaf. Say the number, say ship.