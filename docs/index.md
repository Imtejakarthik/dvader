---
title: The Vader Doctrine
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="icon" type="image/png" href="/dvader/assets/logo.png">

<style>
  :root {
    --bg: #07070a;
    --panel: #0d0d13;
    --panel2: #11111a;
    --line: #1e1e29;
    --ink: #e7e6ea;
    --dim: #8d8c97;
    --red: #e50914;
    --red2: #ff2b34;
    --gold: #d4af37;
    --font-d: "Bebas Neue", "Arial Narrow", sans-serif;
    --font-b: "IBM Plex Sans", sans-serif;
    --font-m: "IBM Plex Mono", monospace;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    background: var(--bg);
    color: var(--ink);
    font-family: var(--font-b);
    line-height: 1.6;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
  }
  ::selection { background: var(--red); color: #fff; }
  .grain {
    position: fixed; inset: 0; pointer-events: none; z-index: 99; opacity: .05;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)'/%3E%3C/svg%3E");
  }
  .mono { font-family: var(--font-m); }
  .red { color: var(--red); }
  .gold { color: var(--gold); }
  a { color: var(--red2); text-decoration: none; }

  /* ---------- top bar ---------- */
  .top {
    position: sticky; top: 0; z-index: 50;
    display: flex; align-items: center; justify-content: space-between;
    padding: 14px 28px;
    background: rgba(7,7,10,.82);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid var(--line);
  }
  .brand { display: flex; align-items: center; gap: 10px; }
  .brand img { height: 30px; width: auto; display: block; }
  .brand .wm { font-family: var(--font-d); font-size: 1.35rem; letter-spacing: .12em; }
  .top .nav a {
    font-family: var(--font-m); font-size: .72rem; letter-spacing: .08em;
    text-transform: uppercase; color: var(--dim); margin-left: 22px; transition: color .2s;
  }
  .top .nav a:hover { color: var(--red2); }

  /* ---------- hero ---------- */
  .hero {
    position: relative;
    padding: 110px 28px 90px;
    text-align: center;
    overflow: hidden;
    border-bottom: 1px solid var(--line);
    background:
      radial-gradient(60% 60% at 80% -10%, rgba(229,9,20,.16), transparent 60%),
      radial-gradient(50% 50% at 12% 0%, rgba(212,175,55,.07), transparent 55%),
      linear-gradient(rgba(30,30,41,.55) 1px, transparent 1px),
      linear-gradient(90deg, rgba(30,30,41,.55) 1px, transparent 1px);
    background-size: auto, auto, 56px 56px, 56px 56px;
  }
  .hero .kicker {
    font-family: var(--font-m); font-size: .72rem; letter-spacing: .34em;
    text-transform: uppercase; color: var(--gold); margin-bottom: 26px;
    animation: rise .7s ease both;
  }
  .hero h1 {
    font-family: var(--font-d); font-weight: 400;
    font-size: clamp(3.4rem, 11vw, 8.2rem);
    line-height: .92; letter-spacing: .01em; text-transform: uppercase;
  }
  .hero h1 .l1 { display: block; animation: rise .7s .1s ease both; }
  .hero h1 .l2 { display: block; animation: rise .7s .22s ease both; }
  .hero h1 .l3 { display: block; color: var(--red2); animation: rise .7s .34s ease both; }
  .hero .lede {
    max-width: 560px; margin: 30px auto 38px;
    color: var(--dim); font-size: 1.02rem;
    animation: rise .7s .46s ease both;
  }
  .hero .lede b { color: var(--ink); font-weight: 600; }
  .cta-row { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; animation: rise .7s .58s ease both; }
  .cta {
    font-family: var(--font-m); font-size: .78rem; letter-spacing: .12em; text-transform: uppercase;
    padding: 15px 30px; border: 1px solid var(--line); border-radius: 2px;
    transition: all .2s ease;
  }
  .cta.solid { background: var(--red); border-color: var(--red); color: #fff; }
  .cta.solid:hover { background: var(--red2); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(229,9,20,.35); }
  .cta.ghost:hover { border-color: var(--red2); color: var(--red2); transform: translateY(-2px); }
  .hero .tick {
    margin-top: 46px; font-family: var(--font-m); font-size: .68rem; letter-spacing: .22em;
    text-transform: uppercase; color: #5c5b66;
    animation: rise .7s .7s ease both;
  }
  @keyframes rise { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }

  /* ---------- manifesto ---------- */
  .strip { display: grid; grid-template-columns: repeat(4, 1fr); border-bottom: 1px solid var(--line); }
  .mcard {
    padding: 40px 30px; border-right: 1px solid var(--line); background: var(--panel);
    transition: background .25s ease;
  }
  .mcard:last-child { border-right: none; }
  .mcard:hover { background: var(--panel2); }
  .mcard .tag {
    display: inline-block; font-family: var(--font-m); font-size: .62rem; letter-spacing: .14em;
    text-transform: uppercase; color: var(--red2); padding: 4px 10px; border: 1px solid rgba(229,9,20,.4);
    border-radius: 2px; margin-bottom: 18px;
  }
  .mcard h3 { font-family: var(--font-d); font-weight: 400; font-size: 1.8rem; letter-spacing: .06em; text-transform: uppercase; margin-bottom: 10px; }
  .mcard p { color: var(--dim); font-size: .92rem; }

  /* ---------- family ---------- */
  section.block { padding: 88px 28px; border-bottom: 1px solid var(--line); }
  .section-h { text-align: center; margin-bottom: 54px; }
  .section-h .eyebrow { font-family: var(--font-m); font-size: .68rem; letter-spacing: .3em; text-transform: uppercase; color: var(--gold); }
  .section-h h2 { font-family: var(--font-d); font-weight: 400; font-size: clamp(2.4rem, 5.4vw, 4rem); letter-spacing: .02em; text-transform: uppercase; margin-top: 8px; }
  .grid { max-width: 1080px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
  .skill {
    position: relative; padding: 26px 22px; background: var(--panel);
    border: 1px solid var(--line); border-left: 3px solid var(--line);
    transition: all .22s ease;
  }
  .skill:hover { transform: translateY(-4px); border-left-color: var(--red2); border-color: rgba(229,9,20,.45); }
  .skill .name { font-family: var(--font-m); font-size: .8rem; font-weight: 500; color: var(--ink); }
  .skill .job { font-family: var(--font-d); font-weight: 400; font-size: 1.5rem; letter-spacing: .05em; line-height: 1.05; color: var(--ink); margin: 8px 0 14px; text-transform: uppercase; }
  .skill .trig { font-family: var(--font-m); font-size: .62rem; color: var(--red2); letter-spacing: .04em; line-height: 1.5; }
  .skill .trig::before { content: "▸ "; color: var(--gold); }

  /* ---------- demo ---------- */
  .demo figcaption {
    margin-top: 18px; text-align: center; font-family: var(--font-m);
    font-size: .7rem; letter-spacing: .18em; text-transform: uppercase; color: var(--dim);
  }
  .demo figcaption b { color: var(--red2); }
  .frame {
    max-width: 900px; margin: 0 auto; border: 1px solid var(--line); border-radius: 8px;
    overflow: hidden; box-shadow: 0 30px 80px rgba(0,0,0,.55);
  }
  .frame img { display: block; width: 100%; height: auto; }

  /* ---------- install ---------- */
  .cmd-box {
    max-width: 640px; margin: 0 auto; display: flex; flex-direction: column; gap: 10px;
  }
  .cmd {
    display: flex; align-items: center; justify-content: space-between; gap: 14px;
    background: var(--panel); border: 1px solid var(--line); border-radius: 4px; padding: 16px 20px;
  }
  .cmd code {
    font-family: var(--font-m); font-size: .84rem; color: var(--ink);
    word-break: break-all;
  }
  .cmd .copy {
    flex: none; font-family: var(--font-m); font-size: .64rem; letter-spacing: .1em; text-transform: uppercase;
    color: var(--gold); background: none; border: 1px solid rgba(212,175,55,.4); border-radius: 2px;
    padding: 6px 12px; cursor: pointer; transition: all .2s;
  }
  .cmd .copy:hover { background: var(--gold); color: #111; }
  .cmd-note { text-align: center; margin-top: 18px; font-family: var(--font-m); font-size: .68rem; color: var(--dim); letter-spacing: .06em; }

  /* ---------- numbers ---------- */
  .numbers { display: grid; grid-template-columns: repeat(4, 1fr); max-width: 1080px; margin: 0 auto; gap: 14px; }
  .num {
    padding: 34px 24px; text-align: center; border: 1px solid var(--line); background: var(--panel);
  }
  .num .v { font-family: var(--font-d); font-size: 3rem; font-weight: 400; color: var(--red2); line-height: 1; }
  .num .k { margin-top: 8px; font-family: var(--font-m); font-size: .66rem; letter-spacing: .16em; text-transform: uppercase; color: var(--dim); }

  /* ---------- footer ---------- */
  .foot {
    display: flex; align-items: center; justify-content: space-between; gap: 16px;
    padding: 34px 28px; flex-wrap: wrap;
  }
  .foot .wm { font-family: var(--font-d); font-size: 1.2rem; letter-spacing: .14em; }
  .foot .motd { font-family: var(--font-m); font-size: .66rem; letter-spacing: .22em; text-transform: uppercase; color: var(--dim); }
  .foot a { color: var(--dim); font-family: var(--font-m); font-size: .7rem; letter-spacing: .1em; text-transform: uppercase; margin-left: 20px; }
  .foot a:hover { color: var(--gold); }

  @media (max-width: 960px) {
    .strip, .numbers { grid-template-columns: repeat(2, 1fr); }
    .grid { grid-template-columns: repeat(2, 1fr); }
    .mcard:nth-child(2) { border-right: none; }
  }
  @media (max-width: 640px) {
    .grid { grid-template-columns: 1fr; }
    .top .nav { display: none; }
    .hero { padding: 76px 18px 60px; }
  }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation: none !important; transition: none !important; }
  }
</style>

<div class="grain"></div>

<header class="top">
  <div class="brand">
    <img src="/dvader/assets/logo.png" alt="vader-skills logo">
    <span class="wm">vader<span class="red">-skills</span></span>
  </div>
  <nav class="nav">
    <a href="/dvader/docs/quickstart.html">Quickstart</a>
    <a href="/dvader/docs/skills.html">The Family</a>
    <a href="/dvader/docs/the-math.html">The Math</a>
    <a href="/dvader/docs/faq.html">FAQ</a>
    <a href="https://www.npmjs.com/package/vader-skills">npm</a>
    <a href="https://github.com/Imtejakarthik/dvader">GitHub</a>
  </nav>
</header>

<section class="hero">
  <p class="kicker">The Vader Doctrine &mdash; 11 skills &middot; 0 dependencies &middot; MIT</p>
  <h1>
    <span class="l1">Build least.</span>
    <span class="l2">Speak least.</span>
    <span class="l3">Move now.</span>
  </h1>
  <p class="lede">
    Eleven skills that fuse <b>minimum code</b>, <b>minimum prose</b>, and <b>minimum turns</b> &mdash;
    then charge your reasoning model <b>less</b> for the privilege.
  </p>
  <div class="cta-row">
    <a class="cta solid" href="/dvader/docs/quickstart.html">Quickstart &rarr;</a>
    <a class="cta ghost" href="/dvader/docs/the-math.html">The Math</a>
  </div>
  <p class="tick">Operate like the blade ▚▚▚</p>
</section>

<div class="strip">
  <div class="mcard">
    <span class="tag">1 / Doctrine</span>
    <h3>Build least</h3>
    <p>The best code is the code never written. The YAGNI ladder: stdlib first, native platform next, one line before fifty.</p>
  </div>
  <div class="mcard">
    <span class="tag">2 / Doctrine</span>
    <h3>Speak least</h3>
    <p>All substance, no fluff. Roughly 50&ndash;65% fewer output tokens, with every name, number, and error string exact.</p>
  </div>
  <div class="mcard">
    <span class="tag">3 / Doctrine</span>
    <h3>Move now</h3>
    <p>Action first. Numbered steps. One concrete next step. No preamble, no recap, no closers.</p>
  </div>
  <div class="mcard">
    <span class="tag">4 / Doctrine</span>
    <h3>Charge you less</h3>
    <p>Reasoning tokens bill at output rates and the 272K cliff re-prices everything. The Doctrine budgets all of it.</p>
  </div>
</div>

<section class="block">
  <div class="section-h">
    <p class="eyebrow">The Family</p>
    <h2>Eleven skills, one doctrine</h2>
  </div>
  <div class="grid">
    <div class="skill"><div class="name">vader</div><div class="job">The Chosen One</div><div class="trig">be lazy &middot; just do it &middot; action first</div></div>
    <div class="skill"><div class="name">vader-yoda</div><div class="job">Do. Or do not.</div><div class="trig">yoda mode &middot; compress &middot; be terse</div></div>
    <div class="skill"><div class="name">vader-mando</div><div class="job">This is the way.</div><div class="trig">adhd mode &middot; stop burying the answer</div></div>
    <div class="skill"><div class="name">vader-obiwan</div><div class="job">High ground</div><div class="trig">high ground &middot; lock the format</div></div>
    <div class="skill"><div class="name">vader-boba</div><div class="job">Right gadget, no wasted shot</div><div class="trig">use a tool &middot; delegate &middot; run it</div></div>
    <div class="skill"><div class="name">vader-thrawn</div><div class="job">I analyzed your art.</div><div class="trig">strategy &middot; context budget &middot; phase it</div></div>
    <div class="skill"><div class="name">vader-ackbar</div><div class="job">It&rsquo;s a trap!</div><div class="trig">it&rsquo;s a trap &middot; token report</div></div>
    <div class="skill"><div class="name">vader-palpatine</div><div class="job">Proceeds as foreseen</div><div class="trig">effort budget &middot; low vs max &middot; predict the cost</div></div>
    <div class="skill"><div class="name">vader-jedi</div><div class="job">The Code</div><div class="trig">verify first &middot; trust but verify</div></div>
    <div class="skill"><div class="name">vader-r2</div><div class="job">The backbone droid</div><div class="trig">automate this &middot; one command</div></div>
    <div class="skill"><div class="name">vader-help</div><div class="job">Reference card</div><div class="trig">vader help</div></div>
    <div class="skill"><div class="name">npm</div><div class="job">One command install</div><div class="trig"><a href="https://www.npmjs.com/package/vader-skills" style="color:var(--gold)">vader-skills &uarr;</a></div></div>
  </div>
</section>

<section class="block demo">
  <div class="section-h">
    <p class="eyebrow">Live proof</p>
    <h2>The Doctrine, in action</h2>
  </div>
  <div class="frame">
    <img src="/dvader/demo-1.gif" alt="The Doctrine in action &mdash; a live compressed turn">
  </div>
  <figcaption><b>One agent turn</b> &middot; filtered &middot; structured &middot; zero filler</figcaption>
</section>

<section class="block">
  <div class="section-h">
    <p class="eyebrow">One command</p>
    <h2>Install</h2>
  </div>
  <div class="cmd-box">
    <div class="cmd"><code>npx vader-skills</code><button class="copy" data-cmd="npx vader-skills">copy</button></div>
    <div class="cmd"><code>npx vader-skills -t all</code><button class="copy" data-cmd="npx vader-skills -t all">copy</button></div>
    <div class="cmd"><code>npx vader-skills --dry-run</code><button class="copy" data-cmd="npx vader-skills --dry-run">copy</button></div>
  </div>
  <p class="cmd-note">Restart your agent. The skills fire on trigger words &mdash; no slash needed on most agents.</p>
</section>

<section class="block" style="padding-top:0;border-bottom:none">
  <div class="numbers">
    <div class="num"><div class="v">11</div><div class="k">skills</div></div>
    <div class="num"><div class="v">50&ndash;65%</div><div class="k">fewer output tokens</div></div>
    <div class="num"><div class="v">0</div><div class="k">dependencies</div></div>
    <div class="num"><div class="v">272K</div><div class="k">cliff&nbsp;&mdash;&nbsp;the reason</div></div>
  </div>
</section>

<footer class="foot">
  <div class="wm">vader<span class="red">-skills</span></div>
  <div class="motd">Build least &middot; Speak least &middot; Move now</div>
  <div>
    <a href="https://github.com/Imtejakarthik/dvader">Source</a>
    <a href="https://www.npmjs.com/package/vader-skills">npm</a>
    <a href="https://github.com/Imtejakarthik/dvader/blob/main/LICENSE">MIT</a>
  </div>
</footer>

<script>
  document.querySelectorAll('.copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var t = btn.dataset.cmd;
      navigator.clipboard.writeText(t).then(function () {
        var old = btn.textContent;
        btn.textContent = 'copied';
        setTimeout(function () { btn.textContent = old; }, 1400);
      });
    });
  });
</script>