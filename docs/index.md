---
title: The Vader Doctrine
description: "vader-skills: 11 skills for GPT-6 Astra-class models. Quickstart: https://imtejakarthik.github.io/dvader/docs/quickstart.html · FAQ: https://imtejakarthik.github.io/dvader/docs/faq.html · Contact and issues: https://github.com/Imtejakarthik/dvader/issues · npm: https://www.npmjs.com/package/vader-skills"
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="icon" type="image/png" href="./assets/logo.png">
<meta name="description" content="vader-skills: 11 skills for GPT-6 Astra-class models. Quickstart: https://imtejakarthik.github.io/dvader/docs/quickstart.html · FAQ: https://imtejakarthik.github.io/dvader/docs/faq.html · Contact: https://github.com/Imtejakarthik/dvader/issues · npm: https://www.npmjs.com/package/vader-skills">

<style>
  :root {
    --void: #0a0a0c;
    --panel: #131316;
    --panel2: #17171b;
    --line: #232328;
    --ink: #eae7e1;
    --dim: #8b8a90;
    --red: #ef2b3d;
    --font-d: "Bebas Neue", "Arial Narrow", sans-serif;
    --font-m: "IBM Plex Mono", monospace;
    --font-b: "IBM Plex Sans", sans-serif;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  html, body { overflow-x: hidden; }
  body {
    background: var(--void);
    color: var(--ink);
    font-family: var(--font-b);
    line-height: 1.6;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  ::selection { background: var(--red); color: #fff; }
  a { color: var(--red); text-decoration: none; }
  .grain {
    position: fixed; inset: 0; pointer-events: none; z-index: 98; opacity: .035;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)'/%3E%3C/svg%3E");
  }

  /* ---------- two-strip header ---------- */
  .hd { position: sticky; top: 0; z-index: 50; background: var(--void); }
  .utilbar {
    position: relative; padding: clamp(5px, 1.6vw, 7px) clamp(16px, 5vw, 28px);
    border-bottom: 1px solid var(--line);
  }
  .utilbar::after {
    content: ""; position: absolute; inset: 0; pointer-events: none;
    background-image: url('/dvader/assets/grid-tile-80px.png');
    background-size: 80px 80px;
    background-repeat: repeat;
    opacity: .06;
  }
  .utilbar .wm {
    position: relative; font-family: var(--font-m); font-size: clamp(.64rem, 2.2vw, .72rem);
    letter-spacing: .28em; text-transform: uppercase; color: var(--red);
  }
  .navbar {
    position: relative;
    display: flex; align-items: center; justify-content: space-between; gap: 10px;
    padding: clamp(10px, 2.6vw, 13px) clamp(16px, 5vw, 28px);
    min-height: 54px;
    background: var(--panel);
    border-bottom: 1px solid var(--line);
  }
  .brand { display: flex; align-items: center; gap: clamp(9px, 2.4vw, 13px); min-width: 0; }
  .badge {
    flex: none; width: clamp(26px, 6vw, 31px); height: clamp(26px, 6vw, 31px);
    border-radius: 4px;
    background: var(--void); border: 1px solid var(--line);
    display: flex; align-items: center; justify-content: center; overflow: hidden;
  }
  .badge img { width: 72%; height: 72%; display: block; }
  .prod {
    font-family: var(--font-m); font-size: clamp(.66rem, 2.6vw, .8rem);
    letter-spacing: .13em; font-weight: 500; color: var(--ink);
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .prod .r { color: var(--red); }

  .nav {
    display: none; align-items: stretch; flex-direction: column;
    position: absolute; top: 100%; left: 0; right: 0;
    background: var(--panel2); border-bottom: 1px solid var(--line);
    padding: 6px 0;
  }
  .nav.open { display: flex; }
  .nav a {
    font-family: var(--font-m); font-size: .7rem; letter-spacing: .13em;
    text-transform: uppercase; color: var(--dim);
    padding: 13px clamp(16px, 5vw, 28px); border-top: 1px solid var(--line);
    white-space: nowrap; transition: color .2s;
  }
  .nav a:hover { color: var(--red); }

  .burger {
    display: flex; flex-direction: column; justify-content: center; gap: 4px;
    width: 38px; height: 38px; padding: 9px; margin-left: auto;
    background: none; border: 1px solid var(--line); border-radius: 4px; cursor: pointer;
  }
  .burger span {
    display: block; height: 2px; width: 100%; background: var(--ink);
    transition: transform .2s ease, opacity .2s ease;
  }
  .burger[aria-expanded="true"] span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
  .burger[aria-expanded="true"] span:nth-child(2) { opacity: 0; }
  .burger[aria-expanded="true"] span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

  /* ---------- hero ---------- */
  .hero {
    position: relative; overflow: clip;
    padding: clamp(52px, 12vh, 122px) clamp(16px, 5vw, 28px) clamp(44px, 8vh, 74px);
    border-bottom: 1px solid var(--line);
    background-image:
      linear-gradient(rgba(10,10,12,.58), rgba(10,10,12,.66) 40%, var(--void) 92%),
      url('/dvader/assets/hero-grid-background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .hero .eyebrow {
    font-family: var(--font-m); font-size: clamp(.58rem, 1.9vw, .7rem);
    letter-spacing: .24em; text-transform: uppercase; color: var(--dim);
    margin-bottom: clamp(20px, 4vh, 30px);
    animation: rise .6s ease both;
  }
  .hero h1 {
    font-family: var(--font-d); font-weight: 400; text-transform: uppercase;
    font-size: clamp(3.2rem, 13.5vw, 9.4rem);
    line-height: .93; letter-spacing: .012em;
  }
  .hero h1 span { display: block; }
  .hero h1 .l1 { animation: rise .6s .08s ease both; }
  .hero h1 .l2 { animation: rise .6s .2s ease both; }
  .hero h1 .l3 { color: var(--red); animation: rise .6s .32s ease both; }
  .hero .lede {
    max-width: 52ch; margin: clamp(22px, 4.5vh, 32px) 0 clamp(30px, 5.5vh, 40px);
    color: var(--dim); font-size: clamp(.96rem, 1.1vw, 1.05rem);
  }
  .cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
  .cta-row > a { animation: rise .6s .44s ease both; }
  .cta {
    font-family: var(--font-m); font-size: clamp(.68rem, 2vw, .76rem);
    letter-spacing: .14em; text-transform: uppercase;
    padding: clamp(13px, 3.4vw, 15px) clamp(24px, 6vw, 32px);
    border: 1px solid var(--line); border-radius: 2px;
    white-space: nowrap;
    transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
  }
  .cta.solid { background: var(--red); border-color: var(--red); color: #fff; }
  .cta.solid:hover { transform: translateY(-2px); box-shadow: 0 10px 34px rgba(239,43,61,.28); }
  .cta.ghost { background: rgba(10,10,12,.35); }
  .cta.ghost:hover { border-color: var(--red); color: var(--red); transform: translateY(-2px); }
  .hero .edge {
    position: absolute; right: clamp(16px, 5vw, 28px); bottom: clamp(14px, 3vh, 22px);
    font-family: var(--font-m); font-size: clamp(.52rem, 1.6vw, .6rem);
    letter-spacing: .24em; text-transform: uppercase; color: #5c5b62;
  }

  /* ---------- shared section ---------- */
  section.block { padding: clamp(48px, 8.5vh, 76px) clamp(16px, 5vw, 28px); border-bottom: 1px solid var(--line); }
  .inner { width: 100%; max-width: 1080px; margin: 0 auto; }
  .h2 {
    font-family: var(--font-d); font-weight: 400; letter-spacing: .02em; text-transform: uppercase;
    font-size: clamp(1.7rem, 5.4vw, 3rem); line-height: 1.05;
    margin-bottom: clamp(22px, 4vw, 36px);
  }

  /* ---------- family (quiet divided registry) ---------- */
  .family { display: grid; grid-template-columns: 1fr; }
  .row {
    display: grid; grid-template-columns: 1fr; gap: 6px;
    padding: clamp(14px, 2.4vw, 19px) clamp(10px, 1.6vw, 14px);
    border-top: 1px solid var(--line);
  }
  .row:last-child { border-bottom: 1px solid var(--line); }
  .row .name { font-family: var(--font-m); font-size: clamp(.72rem, 2vw, .8rem); font-weight: 500; color: var(--ink); }
  .row .meta .job {
    font-family: var(--font-d); font-weight: 400;
    font-size: clamp(1.2rem, 3.6vw, 1.4rem);
    letter-spacing: .04em; text-transform: uppercase; color: var(--ink); line-height: 1.08;
  }
  .row .meta .trig {
    font-family: var(--font-m); font-size: clamp(.58rem, 1.8vw, .64rem);
    color: var(--dim); letter-spacing: .03em; margin-top: 5px;
    overflow-wrap: break-word;
  }
  .row .meta .trig .red, .row .name .red { color: var(--red); }

  /* ---------- demo ---------- */
  .frame {
    width: 100%; max-width: 900px; border: 1px solid var(--line); border-radius: 4px;
    background: var(--panel); overflow: hidden;
  }
  .frame img { display: block; width: 100%; height: auto; }
  .cap {
    margin-top: 16px; max-width: 100%;
    font-family: var(--font-m); font-size: clamp(.6rem, 1.8vw, .68rem);
    letter-spacing: .14em; text-transform: uppercase; color: var(--dim);
  }

  /* ---------- install ---------- */
  .cmd {
    display: flex; align-items: center; justify-content: space-between; gap: 12px;
    padding: clamp(13px, 2.6vw, 17px) clamp(12px, 3vw, 18px);
    border: 1px solid var(--line); border-top: none; background: var(--panel);
  }
  .cmd:first-child { border-top: 1px solid var(--line); border-radius: 4px 4px 0 0; }
  .cmd:last-child { border-radius: 0 0 4px 4px; }
  .cmd code {
    font-family: var(--font-m); font-size: clamp(.72rem, 2.4vw, .86rem);
    color: var(--ink); word-break: break-all; min-width: 0;
  }
  .cmd .copy {
    flex: none; font-family: var(--font-m); font-size: clamp(.56rem, 1.8vw, .62rem);
    letter-spacing: .1em; text-transform: uppercase;
    color: var(--red); background: none; border: 1px solid rgba(239,43,61,.4); border-radius: 2px;
    padding: 6px 12px; cursor: pointer; transition: all .2s;
  }
  .cmd .copy:hover { background: var(--red); color: #fff; }
  .note { margin-top: 16px; font-family: var(--font-m); font-size: clamp(.6rem, 1.8vw, .66rem); color: var(--dim); letter-spacing: .04em; }

  /* ---------- numbers ---------- */
  .numbers { display: grid; grid-template-columns: 1fr 1fr; }
  .num { padding: clamp(20px, 4vw, 30px) clamp(18px, 3vw, 24px); border-left: 1px solid var(--line); }
  .num:nth-child(odd) { border-left: none; }
  .num:nth-child(n+3) { border-top: 1px solid var(--line); }
  .num .v {
    font-family: var(--font-m); font-size: clamp(1.15rem, 4.4vw, 1.75rem);
    font-weight: 500; color: var(--ink); line-height: 1.1;
  }
  .num .k {
    margin-top: 6px; font-family: var(--font-m); font-size: clamp(.55rem, 1.7vw, .64rem);
    letter-spacing: .12em; text-transform: uppercase; color: var(--dim);
  }

  /* ---------- footer ---------- */
  .foot {
    display: flex; align-items: center; justify-content: space-between; gap: 14px; flex-wrap: wrap;
    padding: clamp(20px, 4vw, 28px) clamp(16px, 5vw, 28px); border-top: 1px solid var(--line);
  }
  .foot .wm {
    font-family: var(--font-m); font-size: clamp(.62rem, 2vw, .7rem);
    letter-spacing: .2em; text-transform: uppercase; color: var(--dim); white-space: nowrap;
  }
  .foot .wm b { color: var(--red); font-weight: 500; }
  .foot .motd { font-family: var(--font-m); font-size: clamp(.56rem, 1.7vw, .62rem); letter-spacing: .18em; text-transform: uppercase; color: #5c5b62; }
  .foot .links a {
    font-family: var(--font-m); font-size: clamp(.58rem, 1.8vw, .66rem);
    letter-spacing: .1em; text-transform: uppercase; color: var(--dim);
    margin-left: clamp(12px, 3vw, 20px); transition: color .2s; white-space: nowrap;
  }
  .foot .links a:hover { color: var(--red); }

  /* ---------- breakpoints ---------- */

  /* base: <480 mobile, hamburger active */

  /* 480-767 large mobile / small tablet */
  @media (min-width: 480px) {
    .family { grid-template-columns: 1fr 1fr; }
    .row { grid-template-columns: 150px 1fr; gap: 18px; align-items: baseline; }
    .row:last-child { border-bottom: none; }
  }

  /* 768-1023 tablet / small laptop: inline nav returns */
  @media (min-width: 768px) {
    .burger { display: none; }
    .nav {
      display: flex; align-items: center; flex-direction: row;
      position: static; background: none; border: none; padding: 0;
    }
    .nav.open { display: flex; }
    .nav a.opt { display: none; }
    .nav a {
      padding: 0; border: none; margin-left: clamp(16px, 2vw, 24px);
      font-size: .68rem;
    }
    .numbers { grid-template-columns: repeat(4, 1fr); }
    .num { border-left: 1px solid var(--line); }
    .num:first-child { border-left: none; }
    .num:nth-child(n+3) { border-top: none; }
  }

  /* 1024+ desktop */
  @media (min-width: 1024px) {
    .nav a.opt { display: inline; }
    .hero h1 { font-size: clamp(6rem, 9.5vw, 9.4rem); }
  }

  /* ultra-wide: widen the container so it breathes instead of stretching text */
  @media (min-width: 1600px) {
    .inner { max-width: 1180px; }
  }

  @keyframes rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation: none !important; transition: none !important; }
  }
</style>

<div class="grain"></div>

<header class="hd">
  <div class="utilbar">
    <span class="wm">dvader</span>
  </div>
  <div class="navbar">
    <div class="brand">
      <span class="badge"><img src="./assets/logo.png" alt=""></span>
      <span class="prod">VADER<span class="r">-SKILLS</span></span>
    </div>

    <button class="burger" id="burger" aria-expanded="false" aria-controls="nav" aria-label="Toggle navigation">
      <span></span><span></span><span></span>
    </button>

    <nav class="nav" id="nav">
      <a href="/dvader/docs/quickstart.html">Quickstart</a>
      <a href="/dvader/docs/skills.html" class="opt">The Family</a>
      <a href="/dvader/docs/the-math.html" class="opt">The Math</a>
      <a href="/dvader/docs/faq.html">FAQ</a>
      <a href="https://github.com/Imtejakarthik/dvader" class="opt">GitHub</a>
    </nav>
  </div>
</header>

<section class="hero">
  <p class="eyebrow">The Vader Doctrine · 11 Skills · 0 Dependencies · MIT</p>
  <h1>
    <span class="l1">Build least.</span>
    <span class="l2">Speak least.</span>
    <span class="l3">Move now.</span>
  </h1>
  <p class="lede">Eleven skills for GPT-6 Astra-class models: build the least code, write the least prose, and take the least turns.</p>
  <div class="cta-row">
    <a class="cta solid" href="/dvader/docs/quickstart.html">Quickstart</a>
    <a class="cta ghost" href="/dvader/docs/the-math.html">The Math</a>
  </div>
  <span class="edge">One npx command each</span>
</section>

<section class="block">
  <div class="inner">
    <h2 class="h2">The family</h2>
    <div class="family">
      <div class="row"><span class="name">vader</span><div class="meta"><div class="job">The Chosen One</div><div class="trig">be lazy · just do it · action first</div></div></div>
      <div class="row"><span class="name">vader-yoda</span><div class="meta"><div class="job">Do. Or do not.</div><div class="trig">yoda mode · compress · be terse</div></div></div>
      <div class="row"><span class="name">vader-mando</span><div class="meta"><div class="job">This is the way.</div><div class="trig">adhd mode · stop burying the answer</div></div></div>
      <div class="row"><span class="name">vader-obiwan</span><div class="meta"><div class="job">High ground</div><div class="trig">high ground · lock the format</div></div></div>
      <div class="row"><span class="name">vader-boba</span><div class="meta"><div class="job">Right gadget, no wasted shot</div><div class="trig">use a tool · delegate · run it</div></div></div>
      <div class="row"><span class="name">vader-thrawn</span><div class="meta"><div class="job">I analyzed your art.</div><div class="trig">strategy · context budget · phase it</div></div></div>
      <div class="row"><span class="name">vader-ackbar</span><div class="meta"><div class="job">It's a trap!</div><div class="trig">it's a trap · token report</div></div></div>
      <div class="row"><span class="name">vader-palpatine</span><div class="meta"><div class="job">Proceeds as foreseen</div><div class="trig">effort budget · low vs max</div></div></div>
      <div class="row"><span class="name">vader-jedi</span><div class="meta"><div class="job">The Code</div><div class="trig">verify first · trust but verify</div></div></div>
      <div class="row"><span class="name">vader-r2</span><div class="meta"><div class="job">The backbone droid</div><div class="trig">automate this · one command</div></div></div>
      <div class="row"><span class="name">vader-help</span><div class="meta"><div class="job">Reference card</div><div class="trig">vader help</div></div></div>
      <div class="row"><span class="name"><span class="red">npm</span></span><div class="meta"><div class="job">One command install</div><div class="trig"><span class="red">vader-skills</span> · <a href="https://www.npmjs.com/package/vader-skills">view package</a></div></div></div>
    </div>
  </div>
</section>

<section class="block">
  <div class="inner">
    <h2 class="h2">Live proof</h2>
    <div class="frame">
      <img src="./demo-1.gif" alt="The Doctrine in action: one live compressed agent turn">
    </div>
    <p class="cap">One live turn. Filtered, structured, zero filler.</p>
  </div>
</section>

<section class="block">
  <div class="inner">
    <h2 class="h2">Install</h2>
    <div class="cmd"><code>npx vader-skills</code><button class="copy" data-cmd="npx vader-skills">copy</button></div>
    <div class="cmd"><code>npx vader-skills -t all</code><button class="copy" data-cmd="npx vader-skills -t all">copy</button></div>
    <div class="cmd"><code>npx vader-skills --dry-run</code><button class="copy" data-cmd="npx vader-skills --dry-run">copy</button></div>
    <p class="note">Restart your agent. The skills fire on trigger words, no slash needed on most agents.</p>
  </div>
</section>

<section class="block" style="padding-top:36px;padding-bottom:36px;border-bottom:none">
  <div class="inner">
    <div class="numbers">
      <div class="num"><div class="v">11</div><div class="k">skills</div></div>
      <div class="num"><div class="v">50-65%</div><div class="k">fewer output tokens</div></div>
      <div class="num"><div class="v">0</div><div class="k">dependencies</div></div>
      <div class="num"><div class="v">272K</div><div class="k">the cliff we avoid</div></div>
    </div>
  </div>
</section>

<footer class="foot">
  <div class="wm">dvader<b>-skills</b></div>
  <div class="motd">Build least. Speak least. Move now.</div>
  <div class="links">
    <a href="https://github.com/Imtejakarthik/dvader">Source</a>
    <a href="https://www.npmjs.com/package/vader-skills">npm</a>
    <a href="https://github.com/Imtejakarthik/dvader/issues">Contact</a>
    <a href="https://github.com/Imtejakarthik/dvader/blob/main/LICENSE">MIT</a>
  </div>
</footer>

<script>
  if (typeof document !== 'undefined') {
    var burger = document.getElementById('burger');
    var nav = document.getElementById('nav');
    if (burger && nav) {
      burger.addEventListener('click', function () {
        var open = burger.getAttribute('aria-expanded') === 'true';
        burger.setAttribute('aria-expanded', String(!open));
        if (open) {
          nav.classList.remove('open');
        } else {
          nav.classList.add('open');
        }
      });
      nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          burger.setAttribute('aria-expanded', 'false');
          nav.classList.remove('open');
        });
      });
    }
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
  }
</script>