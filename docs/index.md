---
title: Dvader Skills
description: "Darth Vader-flavored skills for coding agents: short replies, smaller diffs, proof before Work done."
---

<link rel="icon" type="image/png" href="./assets/favicon-80.png">

<section class="dv-hero">
  <div class="dv-hero__copy">
    <p class="dv-kicker">18 skills · 74% benchmark average · MIT</p>
    <h1>Dvader Skills</h1>
    <p class="dv-line">Vader mind. Small words. Builder heart.</p>
    <p class="dv-sub">Short replies, smaller diffs, proof before <code>Work done</code>.</p>
    <div class="dv-actions">
      <a href="/dvader/docs/quickstart.html">Quickstart</a>
      <a href="/dvader/docs/skills.html">Skill Map</a>
      <a href="https://www.npmjs.com/package/dvader-skills">npm</a>
    </div>
  </div>
  <div class="dv-panel">
    <img src="./assets/dvader-logo.png" alt="Dvader helmet" />
    <pre><code>(Hhh-Perrr...) Work done.
Proof ran.
Next: ship.</code></pre>
  </div>
</section>

<section class="dv-grid">
  <div>
    <h2>Speak Less</h2>
    <p>Cut filler, hedging, repeated state, and ceremonial narration. Keep names, numbers, paths, commands, and error lines exact.</p>
  </div>
  <div>
    <h2>Build Less</h2>
    <p>Use what already exists. Prefer stdlib, native platform features, and the smallest working diff.</p>
  </div>
  <div>
    <h2>Prove More</h2>
    <p>No <code>Work done</code> without a runnable check. Test, benchmark, inspect, or show the proof that fits the change.</p>
  </div>
</section>

<section class="dv-band">
  <h2>The Daily Core</h2>
  <p>Most days need only six cards: <code>dvader-do</code>, <code>dvader-build</code>, <code>dvader-hunt</code>, <code>dvader-test</code>, <code>dvader-verify</code>, and <code>dvader-review</code>.</p>
  <p>Everything else is specialized: security scans, benchmark loops, commit messages, PR shipping, memory compression, debt ledgers, and usage stats.</p>
</section>

<section class="dv-install">
  <h2>Install</h2>
  <pre><code>npx dvader-skills -t codex
npx dvader-skills -t all
npx dvader-skills --dry-run</code></pre>
  <p>Restart your agent after install. Say <code>dvader</code>, <code>shorter</code>, <code>review this diff</code>, or <code>work done</code>.</p>
</section>

<section class="dv-media">
  <img src="./assets/dvader-power.gif" alt="Dvader power demo" />
  <img src="./assets/dvader-shadow.gif" alt="Dvader shadow demo" />
</section>

<style>
  :root {
    --dv-red: #ef2b3d;
    --dv-ink: #f3f0ea;
    --dv-muted: #aaa6a0;
    --dv-panel: #141416;
    --dv-line: #2b2b30;
  }
  .Layout {
    background:
      linear-gradient(180deg, rgba(239,43,61,.08), transparent 38rem),
      url('./assets/hero-grid-background.png') top center / cover no-repeat fixed,
      #09090b;
  }
  .dv-hero {
    min-height: 68vh;
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(18rem, .8fr);
    gap: 2rem;
    align-items: center;
    padding: 5rem 0 3rem;
  }
  .dv-kicker {
    color: var(--dv-red);
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    letter-spacing: .14em;
    text-transform: uppercase;
    font-size: .78rem;
  }
  .dv-hero h1 {
    margin: 0;
    color: var(--dv-ink);
    font-size: clamp(3.8rem, 12vw, 8rem);
    line-height: .86;
    letter-spacing: 0;
  }
  .dv-line {
    margin: 1.2rem 0 .4rem;
    color: var(--dv-ink);
    font-size: clamp(1.4rem, 4vw, 2.4rem);
    font-weight: 700;
  }
  .dv-sub {
    max-width: 44rem;
    color: var(--dv-muted);
    font-size: 1.1rem;
  }
  .dv-actions {
    display: flex;
    flex-wrap: wrap;
    gap: .8rem;
    margin-top: 2rem;
  }
  .dv-actions a {
    border: 1px solid var(--dv-line);
    color: var(--dv-ink);
    border-radius: 6px;
    padding: .8rem 1.05rem;
    text-decoration: none;
    font-weight: 700;
  }
  .dv-actions a:first-child {
    background: var(--dv-red);
    border-color: var(--dv-red);
  }
  .dv-panel {
    border: 1px solid var(--dv-line);
    background: linear-gradient(180deg, #18181c, #101012);
    border-radius: 8px;
    padding: 1.2rem;
    box-shadow: 0 22px 80px rgba(0,0,0,.35);
  }
  .dv-panel img {
    display: block;
    width: min(16rem, 70%);
    margin: 0 auto 1rem;
  }
  .dv-panel pre,
  .dv-install pre {
    margin: 0;
    white-space: pre-wrap;
  }
  .dv-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1px;
    border: 1px solid var(--dv-line);
    background: var(--dv-line);
    margin: 2rem 0;
  }
  .dv-grid > div,
  .dv-band,
  .dv-install {
    background: var(--dv-panel);
    padding: 1.4rem;
  }
  .dv-grid h2,
  .dv-band h2,
  .dv-install h2 {
    margin-top: 0;
    color: var(--dv-ink);
  }
  .dv-grid p,
  .dv-band p,
  .dv-install p {
    color: var(--dv-muted);
  }
  .dv-install {
    margin: 2rem 0 4rem;
    border: 1px solid var(--dv-line);
    border-radius: 8px;
  }
  .dv-media {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    margin-bottom: 4rem;
  }
  .dv-media img {
    width: 100%;
    border: 1px solid var(--dv-line);
    border-radius: 8px;
    background: #000;
  }
  @media (max-width: 780px) {
    .dv-hero,
    .dv-grid,
    .dv-media {
      grid-template-columns: 1fr;
    }
    .dv-hero {
      padding-top: 3rem;
    }
  }
</style>
