# WeMatch — V2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement V2 of the WeMatch one-pager. Polish `style-guide.html` first (as the system foundation), then build `index.html` as the scrollytelling front-door deliverable, with Sofia choreography and a live-agent CTA.

**Architecture:** Two static HTML artifacts on a shared tokens.css. `style-guide.html` documents the system. `index.html` *is* the page — vertical narrative, six scroll segments, Sofia threading through a sticky container, sticky margin chips for "system as marginalia". No build tooling, no test framework, no git repo. Verification is browser-based visual check at desktop (1280×800) + mobile (375×667).

**Tech Stack:** HTML5, CSS (custom properties from `design/tokens.css`), vanilla JS (`IntersectionObserver` + `requestAnimationFrame`-throttled scroll listener), General Sans web font (Fontshare), existing WebP Sofia stills.

**Spec:** This plan implements `design/02-v2-spec.md`. Read §0 and §10 of the spec first for context.

**Project root:** `D:/OneDrive/Etudes/SUPSI/MAIND-S2/designing_intelligent_experiences/ONE-PAGER/`. All paths below are relative to that root.

**Verification convention:** "Verify" steps mean: open the file in a modern browser (Chromium recommended; check Safari for `IntersectionObserver` parity), inspect at 1280×800 and 375×667 viewports, toggle `prefers-reduced-motion` via DevTools when relevant. Hard browser-failure expectations are stated per step.

---

## File Structure

```
ONE-PAGER/
├── index.html                  ← Task 6–11: NEW. The scrollytelling one-pager.
├── style-guide.html            ← Task 4: modify (font collapse, retire V1 caveats, new component framing).
├── config.js                   ← Task 5: NEW. Single ES module export — agent URL placeholder.
├── design/
│   ├── tokens.css              ← Task 1: modify (font collapse + wash tokens).
│   ├── components/
│   │   ├── review-card.html    ← Task 2: modify (add tinted-paper variants).
│   │   ├── match-card.html     ← Task 3: REWRITE (editorial composition, detached from Figma).
│   │   ├── hook.html           ← untouched
│   │   ├── cta.html            ← untouched
│   │   ├── moment.html         ← untouched
│   │   ├── journey-opener.html ← untouched
│   │   └── craft-caption.html  ← untouched
│   └── sofia/                  ← untouched (existing 6 WebP stills consumed by index.html)
```

---

## Task 1: Update `design/tokens.css` — single font + review-wash tokens

**Files:**
- Modify: `design/tokens.css`

**Outcome:** Inter is removed from the font stack. Body and display both resolve to General Sans. Four new tokens for the tinted-paper review-card variants land in the semantic block.

- [ ] **Step 1: Open `design/tokens.css` and locate the typography families block (lines 79–84).**

Current state:
```css
  /* --- Typography: families ---
     General Sans carries display; Inter carries body. Both sit in
     WeRoad's typographic family. General Sans alone is an acceptable
     single-family fallback if loading two faces proves costly. */
  --font-display: 'General Sans', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --font-body:    'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
```

- [ ] **Step 2: Replace the typography families block with a single-family stack.**

Replace the block above with:
```css
  /* --- Typography: families ---
     One family carries the whole page. Two near-identical sans serifs
     read as indecision; the system stays small on purpose. General
     Sans handles display (medium/semibold) and body (regular) inside
     WeRoad's typographic family. */
  --font-display: 'General Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --font-body:    'General Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
```

- [ ] **Step 3: Add review-card wash tokens to the semantic colour block.**

Find the block ending at `--color-critical:       var(--brick-700); /* review stars only */` (around line 74). Immediately after that line, before `--color-focus-ring`, insert:

```css

  /* --- Colour: review-card surface tints ---
     Low-saturation washes calibrated against the cream field. The
     contrast is legible at scan-speed (green vs red before reading),
     but the page never reads as "branded with semantics". The hairline
     edge picks up a matching tint instead of the neutral border. */
  --color-positive-wash: #EEF2EA;
  --color-critical-wash: #F4E8E5;
  --color-positive-edge: #C5D2BC;
  --color-critical-edge: #DCC0B9;
```

- [ ] **Step 4: Verify by opening `style-guide.html` in a browser.**

Run a network audit (DevTools → Network → filter "font"). Expected: **no request to `fonts.googleapis.com`** for Inter — only the Fontshare General Sans request remains. Body text in the type specimen rows should render in the same family as the display rows (heavier vs lighter weight is normal).

> Note: `style-guide.html` still has an Inter `<link>` tag at the document level. The next browser audit will still load Inter at the document level — Task 4 removes that link. After Task 1 alone, tokens no longer reference Inter, so even with the file present the page falls back to General Sans inside any styled element. That is the expected intermediate state.

---

## Task 2: Update `design/components/review-card.html` — tinted-paper variants

**Files:**
- Modify: `design/components/review-card.html`

**Outcome:** `.review--positive` is washed green, `.review--critical` is washed brick-red. Borders pick up the matching tint. Stars stay full-saturation. The §04 Sofia card (which already uses `.review--positive`) inherits the wash automatically.

- [ ] **Step 1: Open `design/components/review-card.html` and locate the `.review` block (lines 41–49).**

Current state:
```css
  .review {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--space-lg);
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }
```

- [ ] **Step 2: Replace the `.review` block + add tinted variants.**

Replace the `.review` block above plus the two existing star-color rules (`.review--positive .review__stars` and `.review--critical .review__stars` at lines 55–56) with:

```css
  .review {
    /* Surface is set by the polarity modifier; default kept as fallback. */
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--space-lg);
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }
  .review--positive {
    background: var(--color-positive-wash);
    border-color: var(--color-positive-edge);
  }
  .review--critical {
    background: var(--color-critical-wash);
    border-color: var(--color-critical-edge);
  }
  .review--positive .review__stars { color: var(--color-positive); }
  .review--critical .review__stars { color: var(--color-critical); }
```

- [ ] **Step 3: Verify in browser.**

Open `design/components/review-card.html`. Expected:
- Marcello card has a faint sage-green wash, hairline border picks up that tint.
- FZ card has a faint terracotta wash, hairline border in matching tint.
- Star glyphs are unchanged in colour (muted positive green / brick).
- Sofia's §04 card (bottom of the file) shares the positive wash — the rhyme is preserved.

The two §02 cards should now read polarised in <1 second of glance, where before they were typographically polarised only.

---

## Task 3: Rewrite `design/components/match-card.html` — editorial composition

**Files:**
- Rewrite: `design/components/match-card.html`

**Outcome:** Three editorial match cards in a horizontal row. The score is the foregrounded artifact in coral display type. The reason line in plain ink sits below the score. The trip name is secondary. WeRoad attribution is a quiet micro line. No product UI (no Compare pill, heart, discount, departure-date link, "See trip" button).

- [ ] **Step 1: Open `design/components/match-card.html`.**

The file currently contains the V1 product-style card with sticky-shadow and right-aligned score. The `<style>` block and `<body>` will be replaced; head/font-loading stays.

- [ ] **Step 2: Replace the `<style>` block inside `<head>` with the editorial CSS.**

Replace everything between `<style>` and `</style>` (currently lines 12–99) with:

```css
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { -webkit-text-size-adjust: 100%; }
  body {
    font-family: var(--font-body);
    font-size: var(--text-body);
    line-height: var(--leading-normal);
    color: var(--color-text-primary);
    background: var(--color-bg);
    -webkit-font-smoothing: antialiased;
    padding: var(--section-gap-tight) var(--page-gutter);
  }
  .wrap { max-width: var(--content-max); margin-inline: auto; }

  .label {
    font-size: var(--text-micro);
    letter-spacing: var(--tracking-wide);
    text-transform: uppercase;
    color: var(--color-text-tertiary);
    margin-bottom: var(--space-lg);
  }

  /* Three editorial cards, foregrounded by score, no product chrome.
     The top match (87%) gets a coral hairline; the rest carry the
     neutral border. The grid collapses to a single column at 768px. */
  .row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-lg);
  }
  @media (max-width: 768px) {
    .row { grid-template-columns: 1fr; }
  }

  .match {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--space-lg);
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }
  .match--top { border-color: var(--color-accent); }

  .match__score {
    font-family: var(--font-display);
    font-weight: var(--font-weight-semibold);
    font-size: var(--text-display-2);
    line-height: 1;
    letter-spacing: var(--tracking-tight);
    color: var(--color-accent);
  }
  .match__score .pct {
    font-size: 0.45em;
    letter-spacing: 0;
    margin-left: 0.05em;
  }

  /* The reason line — plain language, the people-fit in words.
     This is the WeMatch signature line called out in script v8. */
  .match__reason {
    font-size: var(--text-caption);
    color: var(--color-text-primary);
    line-height: var(--leading-snug);
  }

  .match__trip {
    font-family: var(--font-display);
    font-weight: var(--font-weight-medium);
    font-size: var(--text-subhead);
    line-height: var(--leading-snug);
  }
  .match__trip .meta {
    font-family: var(--font-body);
    font-weight: var(--font-weight-regular);
    font-size: var(--text-caption);
    color: var(--color-text-secondary);
    margin-left: var(--space-2xs);
  }

  .match__source {
    margin-top: auto;
    font-size: var(--text-micro);
    letter-spacing: var(--tracking-wide);
    text-transform: uppercase;
    color: var(--color-text-tertiary);
  }
```

- [ ] **Step 3: Replace the `<body>` block with the three editorial cards.**

Replace everything between `<body>` and `</body>` (currently lines 101–143) with:

```html
  <div class="wrap">
    <p class="label">Section 03b — the WeRoad search page, re-ranked by group fit</p>

    <div class="row">
      <article class="match match--top">
        <p class="match__score">87<span class="pct">%</span></p>
        <p class="match__reason">culture-driven · slow pace · mid-thirties mix</p>
        <h3 class="match__trip">Patagonia <span class="meta">· 12 days</span></h3>
        <p class="match__source">via WeRoad</p>
      </article>

      <article class="match">
        <p class="match__score">79<span class="pct">%</span></p>
        <p class="match__reason">active days · early starts · a social group</p>
        <h3 class="match__trip">Jordan 360° <span class="meta">· 8 days</span></h3>
        <p class="match__source">via WeRoad</p>
      </article>

      <article class="match">
        <p class="match__score">71<span class="pct">%</span></p>
        <p class="match__reason">big-group energy · packed itinerary · fast pace</p>
        <h3 class="match__trip">Vietnam <span class="meta">· 11 days</span></h3>
        <p class="match__source">via WeRoad</p>
      </article>
    </div>
```

- [ ] **Step 4: Verify in browser.**

Open `design/components/match-card.html`. Expected at 1280×800:
- Three cards in a horizontal row, equal width.
- Top-left card (Patagonia, 87%) has a coral hairline border.
- Scores are large coral display type, with the % sign small and superscript-ish.
- Reason line is plain ink, immediately under the score.
- Trip names are display medium with the days meta in a smaller body grey.
- "via WeRoad" sits at the foot of each card in uppercase micro.

At 375×667 the row collapses to a single column. No product UI elements visible. No "See trip" button, no heart, no price.

---

## Task 4: Polish `style-guide.html` V2 — font collapse + retired notes + new component framing

**Files:**
- Modify: `style-guide.html`

**Outcome:** Inter `<link>` is gone. The Type section annotation no longer says "Inter for body". The Match card component note reflects editorial detachment. The closing flag retires the resolved V1 caveats and adds the V2 deltas as resolved items.

- [ ] **Step 1: Remove the Inter `<link>` tag.**

In `style-guide.html`, find the line:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```
Delete that entire line. The two preconnect lines above it and the Fontshare link below it stay.

- [ ] **Step 2: Update the Type section annotation.**

Find the paragraph that begins `<strong>General Sans</strong> for display, <strong>Inter</strong> for` (around line 293–301).

Replace the entire `<p class="annotation">` (lines 293–301) with:

```html
      <p class="annotation">
        <strong>General Sans</strong> carries the whole page — display and
        body, inside WeRoad's typographic family. One family, two weights:
        display sets in 500/600, body in 400. A page this restrained earns
        more from typographic discipline than from a second sans serif
        beside it. Display sizes flex with viewport; body and captions
        stay fixed so they don't drift. Rendered here at real sizes.
      </p>
```

- [ ] **Step 3: Update the Match card component note.**

Find the component block for the Match card (around line 472–476):
```html
    <div class="component">
      <div class="component__label"><h3>Match card</h3><span class="file">components/match-card.html</span></div>
      <p class="component__note">The WeRoad search result, re-ranked by group fit. The score is the foregrounded artifact; the reason line is plain language. Composed editorially — never a tilted-phone mockup.</p>
      <iframe src="components/match-card.html" style="height:560px" title="Match card component"></iframe>
    </div>
```

Replace the `<p class="component__note">` line with:

```html
      <p class="component__note">Three editorial cards, score foregrounded. The score is the WeMatch artifact; the reason line in plain language is its signature. Detached from the team's Figma product card on purpose — this page tells the story above the product, not a screenshot of it.</p>
```

- [ ] **Step 4: Update the closing flag.**

Find the `<div class="flag">` block at the foot of the file (around line 512–516).

Replace the entire `<div class="flag">` block with:

```html
    <div class="flag">
      <strong>Flagged for human ratification —</strong> one open item carried from V1:
      the coral hex <code>#F7374F</code> is a researched approximation; weroad.com could
      not be read at the CSS level. Eyedrop the live site and correct in <code>tokens.css</code>
      before Phase 2 hardens. The V1 caveat about Sofia assets being raster instead of SVG
      is resolved by direction B (curated AI illustration) and no longer open.
    </div>
```

- [ ] **Step 5: Update the closing `<ul>` summary to reflect V2 deltas.**

Find the closing-note `<ul>` (around lines 506–511).

Replace the existing `<ul>...</ul>` block (the four list items) with:

```html
    <ul>
      <li><strong>Brand relationship:</strong> WeRoad-adjacent (confirmed).</li>
      <li><strong>Imagery:</strong> Direction B — Sofia as a character, curated AI illustration. Six states generated, identity locked. Scroll choreography (stills-first; VEO 3.1 Phase B) demoed in <code>index.html</code>.</li>
      <li><strong>Tokens:</strong> single-family typography (General Sans), warm-cream base, single coral accent, review-card surface tints, fluid editorial type scale, wide spacing scale, modest radius, borders-over-shadows, calm motion presets, reduced-motion handled.</li>
      <li><strong>Components:</strong> review card (tinted variants), match card (editorial, detached from Figma), plus the V1 set. Real script text throughout.</li>
      <li><strong>The deliverable:</strong> <code>index.html</code> is the scrollytelling one-pager that consumes this system; this document is its appendix.</li>
    </ul>
```

- [ ] **Step 6: Verify in browser.**

Open `style-guide.html`. DevTools → Network → filter "font". Expected: only the Fontshare General Sans request loads; no Inter request.

Visually:
- Type specimens are all in General Sans (compare Display 1 vs Body — should feel like the same family, different weight).
- Match card iframe shows the editorial three-card row (Task 3 output).
- Review card iframe shows the tinted-paper variants (Task 2 output).
- Closing note's `<ul>` lists single-family typography and the V2 component additions.
- Closing flag mentions only the coral hex; the SVG/raster note is gone.

---

## Task 5: Create `config.js` — agent URL placeholder

**Files:**
- Create: `config.js`

**Outcome:** A single ES module export `WEMATCH_AGENT_URL`. Documented as the one place the team updates when the agent is hosted.

- [ ] **Step 1: Create `config.js` at project root.**

Create a new file `config.js` (next to `index.html`, `style-guide.html`) with this exact content:

```js
// WeMatch — runtime configuration.
//
// Single source of truth for the live-agent URL the §05 CTA points at.
// Per `prompt-2-implementation.md`: this is where the team replaces the
// placeholder with the real hosted-agent URL once available.
//
// No build step. No env var. One line, one change.

export const WEMATCH_AGENT_URL =
  "https://wematch-agent.placeholder.invalid";
```

- [ ] **Step 2: Verify the file exists and is syntactically valid.**

In the browser, open DevTools → Console on any page served from the project root and run:
```js
import('./config.js').then(m => console.log(m.WEMATCH_AGENT_URL))
```

Expected: `https://wematch-agent.placeholder.invalid` logged. No syntax error.

> If running via `file://` (no local server), ES module imports may be blocked by CORS. The CTA wiring in Task 11 requires a local server. For now, file existence is sufficient verification.

---

## Task 6: Build `index.html` — scaffold, Hook (§01), Invitation (§05)

**Files:**
- Create: `index.html`

**Outcome:** The scrollytelling page exists with its outer structure, fonts, tokens import, and the two symmetric short sections (Hook and Invitation). Middle sections are placeholder anchors filled in by later tasks. The CTA is rendered but not yet wired to `config.js` (that's Task 11); for now its `href` is `#`.

- [ ] **Step 1: Create `index.html` with the document scaffold.**

Create `index.html` at project root with this content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>WeMatch — It's who you go with.</title>
<meta name="description" content="The hardest part of group travel isn't where you go. It's who you go with. Meet WeMatch — a travel companion built around your people.">
<link rel="preconnect" href="https://api.fontshare.com">
<link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="design/tokens.css">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { -webkit-text-size-adjust: 100%; scroll-behavior: smooth; }
  body {
    font-family: var(--font-body);
    font-size: var(--text-body);
    line-height: var(--leading-normal);
    color: var(--color-text-primary);
    background: var(--color-bg);
    -webkit-font-smoothing: antialiased;
  }
  img { display: block; max-width: 100%; height: auto; }

  /* Page is a continuous scroll, NOT a stack of bordered sections.
     No horizontal rules between segments. Rhythm comes from
     typography, whitespace bands, and Sofia's state changes. */
  main { max-width: var(--content-max); margin-inline: auto; padding-inline: var(--page-gutter); }
  .segment { padding-block: var(--space-3xl); position: relative; }

  /* --- §01 Hook ---
     One declarative line in a large empty field. Set low and left.
     "who" is the only coral on the page. The field is deliberately
     oversized: --space-4xl is the dramatic whitespace token. */
  .hook { min-height: 90vh; display: flex; align-items: flex-end; padding-bottom: var(--space-4xl); }
  .hook__line {
    font-family: var(--font-display);
    font-weight: var(--font-weight-medium);
    font-size: var(--text-display-1);
    line-height: var(--leading-tight);
    letter-spacing: var(--tracking-tight);
    max-width: 18ch;
  }
  .hook__line .accent { color: var(--color-accent); }
  .hook__sub {
    margin-top: var(--space-md);
    font-size: var(--text-body-lg);
    color: var(--color-text-secondary);
    max-width: var(--measure-narrow);
    line-height: var(--leading-relaxed);
  }

  /* --- §05 Invitation ---
     Echoes the Hook composition. The CTA is the page's only filled
     button. The micro-line under it is from script v8, non-negotiable. */
  .invitation { min-height: 80vh; display: flex; flex-direction: column; justify-content: center; padding-bottom: var(--space-3xl); }
  .invitation__echo {
    font-family: var(--font-display);
    font-weight: var(--font-weight-medium);
    font-size: var(--text-display-2);
    line-height: var(--leading-tight);
    letter-spacing: var(--tracking-tight);
    max-width: 22ch;
    margin-bottom: var(--space-xl);
  }
  .invitation__echo .accent { color: var(--color-accent); }

  .cta {
    display: inline-block;
    background: var(--color-accent);
    color: var(--color-on-accent);
    text-decoration: none;
    padding: var(--space-md) var(--space-lg);
    font-family: var(--font-display);
    font-weight: var(--font-weight-medium);
    font-size: var(--text-subhead);
    border-radius: var(--radius-pill);
    transition: background var(--duration-fast) var(--ease-standard);
  }
  .cta:hover { background: var(--color-accent-strong); }
  .cta:focus-visible { outline: 2px solid var(--color-focus-ring); outline-offset: 4px; }

  .invitation__micro {
    margin-top: var(--space-md);
    font-size: var(--text-caption);
    color: var(--color-text-secondary);
  }

  /* --- Footer ---
     Appendix link to the system documentation. */
  .colophon {
    padding-block: var(--space-2xl);
    border-top: 1px solid var(--color-border);
    font-size: var(--text-micro);
    letter-spacing: var(--tracking-wide);
    color: var(--color-text-tertiary);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--space-md);
  }
  .colophon a { color: var(--color-text-secondary); text-decoration: none; }
  .colophon a:hover { color: var(--color-accent); }
</style>
</head>
<body>

<main>

  <!-- ===== §01 HOOK ===== -->
  <section class="segment hook" id="hook" aria-label="Hook">
    <div>
      <h1 class="hook__line">It's <span class="accent">who</span> you go with.</h1>
      <p class="hook__sub">The hardest part of group travel isn't where you go.</p>
    </div>
  </section>

  <!-- ===== §02 TRUTH ===== filled in Task 7 -->
  <section class="segment" id="truth" aria-label="Truth"></section>

  <!-- ===== §03 JOURNEY ===== filled in Task 8 -->
  <section class="segment" id="journey" aria-label="Journey"></section>

  <!-- ===== §04 AFTER ===== filled in Task 7 -->
  <section class="segment" id="after" aria-label="After"></section>

  <!-- ===== §05 INVITATION ===== -->
  <section class="segment invitation" id="invitation" aria-label="Invitation">
    <p class="invitation__echo">You're not choosing a destination. You're choosing your <span class="accent">people</span>.</p>
    <div>
      <a id="cta" class="cta" href="#">Meet WeMatch</a>
      <p class="invitation__micro">A live preview. Real agent. No signup.</p>
    </div>
  </section>

  <footer class="colophon">
    <span>WeMatch — a course artifact. WeRoad is the parent brand.</span>
    <a href="style-guide.html">System documentation →</a>
  </footer>

</main>

</body>
</html>
```

- [ ] **Step 2: Verify in browser.**

Open `index.html` at 1280×800.

Expected:
- Page opens on a near-empty cream field with the Hook line set low-left. "who" is coral, the rest is ink-900.
- Below the Hook line, the sub-line "The hardest part of group travel isn't where you go." sits in a softer ink-600.
- Scrolling past three empty segments lands on the Invitation: "You're not choosing a destination. You're choosing your people." with "people" coral, followed by the "Meet WeMatch" coral pill button and the micro-line.
- Footer at the bottom links to `style-guide.html`.

At 375×667 the Hook and Invitation still read; no horizontal scrollbars.

> Visual check only — the three middle segments are intentionally empty at this point. Sofia and the marginalia chips are not yet present.

---

## Task 7: `index.html` §02 Truth + §04 After — review cards, statistic, problem line, Sofia's review

**Files:**
- Modify: `index.html`

**Outcome:** §02 carries the two polarised review cards (Marcello / FZ), Sofia's anchor line, the 18% statistic as a quiet large numeral, and the explicit problem line. §04 carries Sofia's closing review in the same tinted-positive card shape, closing the visual rhyme.

- [ ] **Step 1: Add §02 + §04 styles to the `<style>` block.**

Inside the existing `<style>` block in `index.html`, immediately before the `.colophon` rule, insert:

```css
  /* --- §02 Truth ---
     Two polarised review cards do the argument visually; Sofia's
     anchor line bridges them; the 18% trace-back statistic sits as
     a quiet large numeral; the section closes with the explicit
     problem line in display weight. */
  .truth__lede {
    font-family: var(--font-display);
    font-weight: var(--font-weight-medium);
    font-size: var(--text-heading);
    line-height: var(--leading-snug);
    letter-spacing: var(--tracking-tight);
    max-width: var(--measure);
    margin-bottom: var(--space-2xl);
  }
  .reviews {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-lg);
    margin-bottom: var(--space-2xl);
  }
  @media (max-width: 768px) { .reviews { grid-template-columns: 1fr; } }
  .review {
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--space-lg);
    display: flex; flex-direction: column; gap: var(--space-md);
  }
  .review--positive { background: var(--color-positive-wash); border-color: var(--color-positive-edge); }
  .review--critical { background: var(--color-critical-wash); border-color: var(--color-critical-edge); }
  .review__stars { font-size: 1rem; letter-spacing: 0.15em; line-height: 1; }
  .review--positive .review__stars { color: var(--color-positive); }
  .review--critical .review__stars { color: var(--color-critical); }
  .review__stars .empty { color: var(--color-border); }
  .review__quote {
    font-family: var(--font-display);
    font-weight: var(--font-weight-medium);
    font-size: var(--text-subhead);
    line-height: var(--leading-snug);
  }
  .review__attribution {
    margin-top: auto;
    font-size: var(--text-micro);
    letter-spacing: var(--tracking-wide);
    text-transform: uppercase;
    color: var(--color-text-tertiary);
  }

  /* The 18% statistic — a quiet large numeral, sentence wraps around it. */
  .stat {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: var(--space-lg);
    align-items: baseline;
    max-width: var(--measure-wide);
    margin-block: var(--space-2xl);
  }
  .stat__num {
    font-family: var(--font-display);
    font-weight: var(--font-weight-semibold);
    font-size: clamp(4rem, 2.5rem + 7vw, 7.5rem);
    line-height: 0.9;
    letter-spacing: var(--tracking-tight);
    color: var(--color-text-primary);
  }
  .stat__num .pct { font-size: 0.45em; color: var(--color-text-tertiary); }
  .stat__copy {
    font-size: var(--text-body-lg);
    line-height: var(--leading-relaxed);
    color: var(--color-text-secondary);
  }

  /* The explicit problem statement — display weight, full line. */
  .problem {
    font-family: var(--font-display);
    font-weight: var(--font-weight-medium);
    font-size: var(--text-display-2);
    line-height: var(--leading-tight);
    letter-spacing: var(--tracking-tight);
    max-width: 18ch;
    margin-block: var(--space-2xl) var(--space-3xl);
  }

  /* --- §04 After ---
     Same component as §02. The visual rhyme is the loop closing. */
  .after__lede {
    font-family: var(--font-display);
    font-weight: var(--font-weight-medium);
    font-size: var(--text-heading);
    line-height: var(--leading-snug);
    max-width: var(--measure);
    margin-bottom: var(--space-lg);
    color: var(--color-text-secondary);
  }
  .after__card { max-width: 34rem; }
  .after__card .review__quote { font-size: var(--text-heading); }
  .after__signal {
    margin-top: var(--space-xl);
    font-size: var(--text-caption);
    color: var(--color-text-tertiary);
    max-width: var(--measure-narrow);
  }
```

- [ ] **Step 2: Fill the §02 segment with content.**

Replace the existing empty §02 line:
```html
  <section class="segment" id="truth" aria-label="Truth"></section>
```

With:

```html
  <section class="segment" id="truth" aria-label="Truth">

    <p class="truth__lede">She's been on this app before. She knows what she's looking at. The question she's holding tonight: not <em>where</em>, but <em>who</em>.</p>

    <div class="reviews">
      <article class="review review--positive">
        <div class="review__stars" aria-label="5 out of 5 stars">★★★★★</div>
        <p class="review__quote">"I left alone, without knowing anyone. I came back with a wealth of experiences and people I'll hardly forget."</p>
        <p class="review__attribution">Marcello · Trustpilot · Morocco</p>
      </article>

      <article class="review review--critical">
        <div class="review__stars" aria-label="1 out of 5 stars">★<span class="empty">★★★★</span></div>
        <p class="review__quote">"I witnessed toxic dynamics within the group that I had to endure from the second day of the trip."</p>
        <p class="review__attribution">FZ · Trustpilot · China</p>
      </article>
    </div>

    <div class="stat">
      <p class="stat__num">18<span class="pct">%</span></p>
      <p class="stat__copy">When a trip drops to 1, 2, or 3 stars, the group is the most-cited cause. 18% of negative reviews trace back to it.</p>
    </div>

    <p class="problem">Group fit isn't measured. It's hoped for.</p>

  </section>
```

- [ ] **Step 3: Fill the §04 segment with content.**

Replace the existing empty §04 line:
```html
  <section class="segment" id="after" aria-label="After"></section>
```

With:

```html
  <section class="segment" id="after" aria-label="After">

    <p class="after__lede">She left alone, again. She came back with people. The difference, this time, was the group.</p>

    <div class="after__card">
      <article class="review review--positive">
        <div class="review__stars" aria-label="5 out of 5 stars">★★★★★</div>
        <p class="review__quote">"I've done a few of these now. One was magical. One was just fine. I came back from Portugal a week ago and I already know which one this was. On day two, eating pão com tomate with Marco, I just knew. The wine bar in Alfama wasn't on the itinerary. None of the best parts were."</p>
        <p class="review__attribution">Sofia · Trustpilot</p>
      </article>

      <p class="after__signal">Sofia's profile evolved. WeMatch knows her better now.</p>
    </div>

  </section>
```

- [ ] **Step 4: Verify in browser.**

Open `index.html`. Scroll to §02.

Expected at 1280×800:
- Sofia's lede line introduces the section.
- Two review cards side by side: sage-green Marcello card on left, terracotta FZ card on right.
- Below, a large `18%` numeral with the sentence wrapping to its right.
- The "Group fit isn't measured. It's hoped for." problem line in display weight, set in 18 characters wide.

Scroll to §04:
- Lede line in soft grey.
- One positive-washed card with Sofia's longer review, framed in heading-weight type.
- Below the card, the quiet "Sofia's profile evolved..." signal in caption-size grey.

At 375×667 the two §02 cards stack vertically; the 18% statistic collapses to two rows (numeral above, sentence below); the problem line still reads at ~32px display.

---

## Task 8: `index.html` §03 Journey — reframe, entrance line, 3a/3b/3c moments

**Files:**
- Modify: `index.html`

**Outcome:** The longest section. Opens with the reframe (group-first, not trip-first) and the entrance line where WeMatch is named for the first time. Three moments follow: 3a (the two converging signals), 3b (the editorial match-card row inlined), 3c (the "tells her why" panel as inline content with Sofia's pushback). Each moment is signalled by a quiet `3a / 3b / 3c` marker.

- [ ] **Step 1: Add §03 styles to the `<style>` block.**

Inside the existing `<style>` block, immediately after the `.after__signal` rule and before the `.colophon` rule, insert:

```css
  /* --- §03 Journey ---
     Longest section. Opening reframe → entrance line → three moments.
     Each moment gets a quiet marker in the left margin and ~40vh of
     breathing room before it begins. The match-card row is inlined
     (single source of truth for component shape: the spec). */
  .reframe { margin-block: var(--space-2xl) var(--space-3xl); max-width: var(--measure); }
  .reframe__list { list-style: none; display: flex; flex-direction: column; gap: var(--space-md); }
  .reframe__list li {
    font-family: var(--font-display);
    font-weight: var(--font-weight-medium);
    font-size: var(--text-heading);
    line-height: var(--leading-snug);
    letter-spacing: var(--tracking-tight);
  }
  .reframe__list .label {
    display: block;
    font-family: var(--font-body);
    font-weight: var(--font-weight-regular);
    font-size: var(--text-micro);
    letter-spacing: var(--tracking-wide);
    text-transform: uppercase;
    color: var(--color-text-tertiary);
    margin-bottom: var(--space-2xs);
  }
  .reframe__plain {
    margin-top: var(--space-lg);
    font-family: var(--font-display);
    font-weight: var(--font-weight-semibold);
    font-size: var(--text-display-2);
    line-height: var(--leading-tight);
    letter-spacing: var(--tracking-tight);
  }
  .reframe__plain .accent { color: var(--color-accent); }

  .entrance {
    margin-block: var(--space-3xl);
    font-family: var(--font-display);
    font-weight: var(--font-weight-medium);
    font-size: var(--text-display-2);
    line-height: var(--leading-tight);
    letter-spacing: var(--tracking-tight);
    max-width: 22ch;
  }
  .entrance .accent { color: var(--color-accent); }

  .moment { margin-block: var(--space-3xl); position: relative; }
  .moment__marker {
    position: absolute;
    left: calc(-1 * var(--space-xl));
    top: 0;
    font-size: var(--text-micro);
    letter-spacing: var(--tracking-wide);
    text-transform: uppercase;
    color: var(--color-text-tertiary);
  }
  @media (max-width: 1024px) {
    .moment__marker { position: static; margin-bottom: var(--space-sm); display: block; }
  }
  .moment__title {
    font-family: var(--font-display);
    font-weight: var(--font-weight-medium);
    font-size: var(--text-heading);
    line-height: var(--leading-snug);
    margin-bottom: var(--space-md);
    max-width: var(--measure);
  }
  .moment__body {
    font-size: var(--text-body-lg);
    line-height: var(--leading-relaxed);
    color: var(--color-text-secondary);
    max-width: var(--measure);
    margin-bottom: var(--space-md);
  }
  .moment__caption {
    font-size: var(--text-caption);
    color: var(--color-text-tertiary);
    max-width: var(--measure-narrow);
    margin-top: var(--space-md);
    padding-left: var(--space-md);
    border-left: 2px solid var(--color-accent);
  }

  /* 3b — match cards inlined. */
  .matches { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-md); margin-block: var(--space-lg); }
  @media (max-width: 768px) { .matches { grid-template-columns: 1fr; } }
  .match {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--space-lg);
    display: flex; flex-direction: column; gap: var(--space-md);
  }
  .match--top { border-color: var(--color-accent); }
  .match__score {
    font-family: var(--font-display); font-weight: var(--font-weight-semibold);
    font-size: var(--text-display-2); line-height: 1;
    letter-spacing: var(--tracking-tight); color: var(--color-accent);
  }
  .match__score .pct { font-size: 0.45em; margin-left: 0.05em; }
  .match__reason { font-size: var(--text-caption); color: var(--color-text-primary); line-height: var(--leading-snug); }
  .match__trip {
    font-family: var(--font-display); font-weight: var(--font-weight-medium);
    font-size: var(--text-subhead); line-height: var(--leading-snug);
  }
  .match__trip .meta { font-family: var(--font-body); font-weight: var(--font-weight-regular); font-size: var(--text-caption); color: var(--color-text-secondary); margin-left: var(--space-2xs); }
  .match__source { margin-top: auto; font-size: var(--text-micro); letter-spacing: var(--tracking-wide); text-transform: uppercase; color: var(--color-text-tertiary); }

  /* 3c — the "why" panel revealed inline below the match row. */
  .why {
    background: var(--color-bg-sunken);
    border-radius: var(--radius-lg);
    padding: var(--space-lg);
    margin-block: var(--space-lg);
    max-width: var(--measure);
  }
  .why__lede { font-size: var(--text-micro); letter-spacing: var(--tracking-wide); text-transform: uppercase; color: var(--color-text-tertiary); margin-bottom: var(--space-sm); }
  .why__list { list-style: none; display: flex; flex-direction: column; gap: var(--space-xs); margin-bottom: var(--space-md); }
  .why__list li {
    font-family: var(--font-display);
    font-weight: var(--font-weight-medium);
    font-size: var(--text-subhead);
    line-height: var(--leading-snug);
  }
  .why__push {
    margin-top: var(--space-md);
    padding-top: var(--space-md);
    border-top: 1px solid var(--color-border);
    font-size: var(--text-body);
    color: var(--color-text-secondary);
  }
  .why__push em { color: var(--color-text-primary); font-style: normal; font-weight: var(--font-weight-medium); }
```

- [ ] **Step 2: Fill the §03 segment with content.**

Replace the existing empty §03 line:
```html
  <section class="segment" id="journey" aria-label="Journey"></section>
```

With:

```html
  <section class="segment" id="journey" aria-label="Journey">

    <!-- Opening beat 1 — the reframe -->
    <div class="reframe">
      <ul class="reframe__list">
        <li><span class="label">Today</span>Pick a trip. Hope the group works.</li>
        <li><span class="label">What if</span>Find your group. The right trips emerge.</li>
      </ul>
      <p class="reframe__plain"><span class="accent">Group-first</span>, not trip-first.</p>
    </div>

    <!-- Opening beat 2 — Sofia meets WeMatch. WeMatch is named here. -->
    <p class="entrance">Sofia opens WeRoad. <span class="accent">WeMatch</span> is already paying attention.</p>

    <!-- Moment 3a — Read -->
    <article class="moment" id="moment-3a">
      <span class="moment__marker">3a · Read</span>
      <h3 class="moment__title">It reads her.</h3>
      <p class="moment__body">She talks. She also just uses the site — she scrolls, she lingers, she saves a Patagonia itinerary. Two signals, converging. WeMatch reads how she travels across eight dimensions — social energy, pace, planning style, conflict style, and four more.</p>
      <p class="moment__caption">She's never asked to fill out a form. WeMatch reads what she shares, nothing more.</p>
    </article>

    <!-- Moment 3b — Match -->
    <article class="moment" id="moment-3b">
      <span class="moment__marker">3b · Match</span>
      <h3 class="moment__title">It matches her.</h3>
      <p class="moment__body">The same search page, re-ranked by group fit. The score is the artifact; the reason line is plain language. A trip that's perfect for Sofia but wrong for the group is not a match.</p>

      <div class="matches">
        <div class="match match--top">
          <p class="match__score">87<span class="pct">%</span></p>
          <p class="match__reason">culture-driven · slow pace · mid-thirties mix</p>
          <h4 class="match__trip">Patagonia <span class="meta">· 12 days</span></h4>
          <p class="match__source">via WeRoad</p>
        </div>
        <div class="match">
          <p class="match__score">79<span class="pct">%</span></p>
          <p class="match__reason">active days · early starts · a social group</p>
          <h4 class="match__trip">Jordan 360° <span class="meta">· 8 days</span></h4>
          <p class="match__source">via WeRoad</p>
        </div>
        <div class="match">
          <p class="match__score">71<span class="pct">%</span></p>
          <p class="match__reason">big-group energy · packed itinerary · fast pace</p>
          <h4 class="match__trip">Vietnam <span class="meta">· 11 days</span></h4>
          <p class="match__source">via WeRoad</p>
        </div>
      </div>
    </article>

    <!-- Moment 3c — Explain -->
    <article class="moment" id="moment-3c">
      <span class="moment__marker">3c · Explain</span>
      <h3 class="moment__title">It tells her why.</h3>
      <p class="moment__body">She taps the 87%. A panel opens.</p>

      <div class="why">
        <p class="why__lede">Why this match</p>
        <ul class="why__list">
          <li>You both move slow.</li>
          <li>You both choose depth over checklist.</li>
          <li>The group skews mid-thirties — you're on the younger side.</li>
        </ul>
        <p class="why__push">Something rubs her about <em>younger side</em>. She types one line back: <em>"Adjust — age doesn't matter, depth does."</em> WeMatch absorbs. The list below shifts.</p>
      </div>

      <p class="moment__caption">Every match comes with a reason. She can always ask why — or push back.</p>
    </article>

  </section>
```

- [ ] **Step 3: Verify in browser.**

Open `index.html`, scroll to §03.

Expected at 1280×800:
- Reframe block: two-line list with "Today" / "What if" labels in uppercase micro, the lines in display-medium. Below them, "Group-first, not trip-first." in larger display-semibold with "Group-first" in coral.
- Entrance line: "Sofia opens WeRoad. WeMatch is already paying attention." with "WeMatch" in coral.
- Three moments, each with its `3a · Read` / `3b · Match` / `3c · Explain` marker hanging off the left margin.
- Moment 3b carries three editorial match cards (Patagonia coral border = top match).
- Moment 3c carries the dusky-cream "why" panel with three bullet lines and Sofia's pushback below a hairline divider.

At 375×667 the moment markers move inline above each title; the three match cards stack vertically; the why panel stays full-width.

---

## Task 9: Sofia choreography — sticky container, six stills, scroll-driven crossfade

**Files:**
- Modify: `index.html`

**Outcome:** A sticky `<aside>` element spans §02 → §04 and renders one of six Sofia stills at a time, with adjacent states crossfading as scroll progresses through the container. Vanilla JS — no library — using `IntersectionObserver` to activate listeners and an `rAF`-throttled scroll handler to compute progress. `prefers-reduced-motion` falls back to a static still per segment.

- [ ] **Step 1: Add Sofia styles to the `<style>` block.**

Inside the existing `<style>` block, immediately after the §02/§04 rules (any rule before `.colophon`), insert:

```css
  /* --- Sofia ---
     A sticky aside spans §02 → §04 and pins on the right at desktop.
     Six WebP stills are absolutely stacked; opacity is driven by
     scroll progress through the container. The container itself is
     positioned by wrapping §02..§04 in <div class="sofia-stage">,
     with the aside as that wrapper's first child. */
  .sofia-stage { position: relative; }
  .sofia {
    position: sticky;
    top: 12vh;
    height: 70vh;
    pointer-events: none;
  }
  .sofia__frame {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: var(--space-md);
  }
  .sofia__img {
    height: 100%;
    width: auto;
    object-fit: contain;
    opacity: 0;
    transition: opacity var(--duration-base) var(--ease-out);
    will-change: opacity;
    position: absolute;
    inset: 0;
    margin: auto;
  }

  /* At desktop, push the main text columns left so Sofia has room
     on the right half. Cap the wrapper's child <section>s to ~58% of
     the wrapper width, leaving 42% for Sofia. */
  @media (min-width: 1024px) {
    .sofia-stage > section { max-width: 58%; }
  }

  /* Mobile: hide the sticky aside; the page reads as text scroll. */
  @media (max-width: 1023px) {
    .sofia { display: none; }
  }
  @media (prefers-reduced-motion: reduce) {
    .sofia__img { transition: none; }
  }
```

- [ ] **Step 2: Wrap §02, §03, §04 in a `.sofia-stage` wrapper and inject the Sofia aside.**

Find this region in `index.html` (output of Tasks 6–8):
```html
  <!-- ===== §02 TRUTH ===== -->
  <section class="segment" id="truth" aria-label="Truth">
    ...
  </section>

  <!-- ===== §03 JOURNEY ===== -->
  <section class="segment" id="journey" aria-label="Journey">
    ...
  </section>

  <!-- ===== §04 AFTER ===== -->
  <section class="segment" id="after" aria-label="After">
    ...
  </section>
```

Wrap all three `<section>` elements (Truth, Journey, After) in a single `<div class="sofia-stage">...</div>`, and insert the Sofia aside as its first child:

```html
  <div class="sofia-stage">

    <aside class="sofia" aria-hidden="true">
      <div class="sofia__frame">
        <img class="sofia__img" data-state="hesitating" src="design/sofia/sofia-hesitating-cutout-2x.webp" alt="">
        <img class="sofia__img" data-state="curious"    src="design/sofia/sofia-curious-cutout-2x.webp"    alt="">
        <img class="sofia__img" data-state="surprised"  src="design/sofia/sofia-surprised-v2-cutout-2x.webp" alt="">
        <img class="sofia__img" data-state="connected"  src="design/sofia/sofia-connected.webp"             alt="">
        <img class="sofia__img" data-state="settled"    src="design/sofia/sofia-settled-cutout-2x.webp"     alt="">
        <img class="sofia__img" data-state="identity"   src="design/sofia/sofia-identity-cutout-2x.webp"    alt="">
      </div>
    </aside>

    <!-- ===== §02 TRUTH ===== -->
    <section class="segment" id="truth" aria-label="Truth">
      ... existing §02 content from Task 7 ...
    </section>

    <!-- ===== §03 JOURNEY ===== -->
    <section class="segment" id="journey" aria-label="Journey">
      ... existing §03 content from Task 8 ...
    </section>

    <!-- ===== §04 AFTER ===== -->
    <section class="segment" id="after" aria-label="After">
      ... existing §04 content from Task 7 ...
    </section>

  </div>
```

> Important: only the *existing content* of the three sections is preserved — do not duplicate them. The `<aside>` is a new sibling injected before §02.

- [ ] **Step 3: Add the choreography script before `</body>`.**

Find the closing `</body>` tag in `index.html`. Immediately before it, insert:

```html
<script>
  // Sofia choreography — vanilla JS, no library.
  //
  // Maps scroll progress through .sofia-stage [0..1] to opacity values
  // for the six stills. Each state has a "peak" progress; opacity
  // falls off linearly within ±0.20 of the peak.
  //
  // Phase B (future): replace each <img> with <video> and set
  //   video.currentTime = (progress - peakStart) * clipDurationScale
  // for each clip. The opacity logic remains identical.

  (function () {
    const stage = document.querySelector('.sofia-stage');
    const imgs  = Array.from(document.querySelectorAll('.sofia__img'));
    if (!stage || imgs.length === 0) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Ordered peaks across scroll progress [0..1].
    // hesitating sits at the §02 lede, settled at the §04 close.
    // 'identity' is a reference image not used in the arc — opacity stays 0.
    const peaks = {
      hesitating: 0.00,
      curious:    0.30,
      surprised:  0.55,
      connected:  0.75,
      settled:    0.95,
      identity:   -1   // never shown
    };
    const FALLOFF = 0.20;  // crossfade width on each side of the peak

    function setOpacities(progress) {
      // Pre-compute the nearest peak for reduced-motion snap mode.
      let nearestState = null;
      let nearestDist  = Infinity;
      if (reducedMotion) {
        for (const img of imgs) {
          const peak = peaks[img.dataset.state];
          if (peak < 0) continue;
          const d = Math.abs(progress - peak);
          if (d < nearestDist) { nearestDist = d; nearestState = img.dataset.state; }
        }
      }

      imgs.forEach(img => {
        const peak = peaks[img.dataset.state];
        if (peak < 0) { img.style.opacity = 0; return; }
        if (reducedMotion) {
          img.style.opacity = (img.dataset.state === nearestState) ? 1 : 0;
        } else {
          const dist = Math.abs(progress - peak);
          img.style.opacity = Math.max(0, 1 - dist / FALLOFF);
        }
      });
    }

    let ticking = false;
    let active = false;

    function update() {
      const rect = stage.getBoundingClientRect();
      const stageHeight = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / stageHeight));
      setOpacities(progress);
      ticking = false;
    }

    function onScroll() {
      if (!active || ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }

    // Activate listeners only when the stage is near the viewport.
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { active = e.isIntersecting; if (active) update(); });
    }, { rootMargin: '50% 0px' });
    io.observe(stage);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Initial paint.
    update();
  })();
</script>
```

- [ ] **Step 4: Verify in browser.**

Open `index.html` at 1280×800. Scroll slowly from top to bottom.

Expected:
- During §01 (Hook), no Sofia is visible (stage not yet in view).
- As §02 starts, Sofia (hesitating) fades in on the right.
- Through §03 she crossfades curious → surprised → connected.
- By §04 she's settled.
- During §05 (Invitation), the stage has scrolled past — no Sofia visible.

Toggle DevTools → Rendering → "Emulate CSS prefers-reduced-motion: reduce". Reload. Expected: no crossfade — Sofia snaps to whichever state is closest to current scroll progress. No motion at all between snaps.

At 375×667: the `.sofia` aside is hidden entirely (CSS `display: none`); the page reads as a pure text scroll. No layout breakage.

---

## Task 10: Sticky margin chips — section marker + live token readout

**Files:**
- Modify: `index.html`

**Outcome:** A small left-margin chip shows the current section name (`§02 · TRUTH`). A small right-margin chip shows the dominant token in use at the current scroll position (`coral · accent`, `positive-wash + critical-wash`, etc.). Both fade in only after §01 and fade out before §05. The chips are the "system as marginalia" move — making the style guide visible *by use* rather than as documentation.

- [ ] **Step 1: Add chip styles to the `<style>` block.**

Inside the existing `<style>` block, before `.colophon`, insert:

```css
  /* --- Sticky marginalia ---
     Left: current section label. Right: current token-in-use.
     Visible only when scrolled past §01 and not yet at §05. */
  .chip {
    position: fixed;
    bottom: var(--space-lg);
    font-family: var(--font-body);
    font-weight: var(--font-weight-medium);
    font-size: 0.6875rem;             /* 11px — quieter than --text-micro */
    letter-spacing: var(--tracking-wide);
    text-transform: uppercase;
    color: var(--color-text-tertiary);
    background: color-mix(in srgb, var(--color-bg) 92%, transparent);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-pill);
    padding: var(--space-2xs) var(--space-sm);
    pointer-events: none;
    opacity: 0;
    transition: opacity var(--duration-base) var(--ease-out);
    z-index: var(--z-sticky);
    white-space: nowrap;
  }
  .chip--visible { opacity: 1; }
  .chip--left  { left: var(--space-lg); }
  .chip--right { right: var(--space-lg); }
  .chip__dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; vertical-align: middle; margin-right: 0.5em; }

  @media (max-width: 768px) {
    .chip { display: none; }   /* mobile: marginalia is too tight */
  }
  @media (prefers-reduced-motion: reduce) {
    .chip { transition: none; }
  }
```

- [ ] **Step 2: Inject the two chip elements inside `<main>`.**

In `index.html`, find the opening `<main>` tag. Immediately after it (and before §01), insert:

```html
  <span class="chip chip--left" id="chip-section" aria-hidden="true"></span>
  <span class="chip chip--right" id="chip-token" aria-hidden="true"></span>
```

- [ ] **Step 3: Extend the existing `<script>` (the one from Task 9) with the chip IIFE.**

In `index.html`, find the `<script>` block from Task 9. After the Sofia IIFE's closing `})();` and before `</script>`, append the chip IIFE. The chip elements are constructed via DOM methods (no `innerHTML`) to keep the surface XSS-safe even though the content is static.

```js

  // Sticky margin chips — section + live token readout.
  (function () {
    const chipSection = document.getElementById('chip-section');
    const chipToken   = document.getElementById('chip-token');
    if (!chipSection || !chipToken) return;

    // Per-section: label + the token we want to surface as "in use".
    const segments = [
      { id: 'hook',       label: '§01 · HOOK',       token: 'display-1 · 88px',           dotVar: 'var(--color-accent)' },
      { id: 'truth',      label: '§02 · TRUTH',      token: 'positive-wash + critical-wash', dotVar: 'var(--color-positive)' },
      { id: 'journey',    label: '§03 · JOURNEY',    token: 'coral · accent',              dotVar: 'var(--color-accent)' },
      { id: 'after',      label: '§04 · AFTER',      token: 'positive-wash',               dotVar: 'var(--color-positive)' },
      { id: 'invitation', label: '§05 · INVITATION', token: 'cta · radius-pill',           dotVar: 'var(--color-accent)' }
    ];

    function renderSection(active) {
      // Clear existing children, then build a fresh dot + label.
      chipSection.textContent = '';
      const dot = document.createElement('span');
      dot.className = 'chip__dot';
      dot.style.background = active.dotVar;
      chipSection.appendChild(dot);
      chipSection.appendChild(document.createTextNode(active.label));
    }

    function update() {
      const viewMid = window.scrollY + window.innerHeight / 2;
      let active = null;
      for (const s of segments) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (viewMid >= top && viewMid < bottom) { active = s; break; }
      }
      // Chips visible for §02..§04 only — keep §01 and §05 clean.
      const showable = active && active.id !== 'hook' && active.id !== 'invitation';
      chipSection.classList.toggle('chip--visible', !!showable);
      chipToken.classList.toggle('chip--visible',   !!showable);
      if (showable) {
        renderSection(active);
        chipToken.textContent = active.token;
      }
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { update(); ticking = false; });
    }, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  })();
```

- [ ] **Step 4: Verify in browser.**

Open `index.html`, scroll slowly from top.

Expected:
- During §01: no chips visible.
- Entering §02: left chip fades in showing `● §02 · TRUTH` (dot in muted green); right chip shows `positive-wash + critical-wash`.
- Entering §03: chips update to `§03 · JOURNEY` and `coral · accent` (dot in coral).
- Entering §04: chips update to `§04 · AFTER` and `positive-wash` (dot in muted green).
- Entering §05: chips fade out.

At 375×667 (mobile): chips never appear (`display: none`). With `prefers-reduced-motion: reduce`: chips still appear but without fade transition.

---

## Task 11: Wire the §05 CTA to `config.js`

**Files:**
- Modify: `index.html`

**Outcome:** On page load, `index.html` imports `WEMATCH_AGENT_URL` from `config.js` and assigns it to the CTA `<a>` element's `href`. Until the team updates `config.js`, the CTA points at the placeholder URL.

- [ ] **Step 1: Add the CTA wiring script.**

In `index.html`, find the existing `<script>` block from Tasks 9–10 (the Sofia + chip IIFEs). Immediately after that `</script>` closing tag, add a new module script:

```html
<script type="module">
  import { WEMATCH_AGENT_URL } from './config.js';
  const cta = document.getElementById('cta');
  if (cta && WEMATCH_AGENT_URL) {
    cta.href = WEMATCH_AGENT_URL;
    cta.rel = 'noopener';
    cta.target = '_blank';
  }
</script>
```

- [ ] **Step 2: Start a local server and verify the wiring.**

Open `index.html` via a local server. The simplest options from the project root:

```
# Python 3
python -m http.server 8000

# Node (if npx available)
npx serve .
```

Then visit `http://localhost:8000/index.html`.

> **Why a server is needed:** ES module imports (`import { ... } from './config.js'`) require HTTP(S), not `file://`. Opening the HTML directly will silently leave the CTA `href` at `#`.

In DevTools → Elements, inspect the `<a id="cta">` element. Expected: its `href` attribute is `https://wematch-agent.placeholder.invalid` (the value from `config.js`).

Click the button. Expected: a new tab opens to the placeholder URL (which will fail to resolve — that's correct; the placeholder is meant to fail until the team updates it).

---

## Task 12: Final audit — responsive, reduced motion, link integrity

**Files:**
- Audit only: `index.html`, `style-guide.html`, `design/components/match-card.html`, `design/components/review-card.html`

**Outcome:** All deliverables render correctly at 375×667 and 1280×800. `prefers-reduced-motion` is honored. Footer link from `index.html` opens `style-guide.html`. Style guide nav links still work.

- [ ] **Step 1: Desktop audit at 1280×800.**

Open `index.html` via the local server (see Task 11 step 2 for command).

Walk through the page top to bottom. Expected:
- Hook reads clean, set low-left in cream field. "who" coral.
- §02: two tinted review cards side-by-side, 18% numeral with sentence, problem line.
- Sofia (right side) crossfades from hesitating → curious → surprised → connected → settled across §02–§04.
- Section chips (bottom-left, bottom-right) show during §02–§04 and fade out at §05.
- §03: reframe, entrance line, three moments — markers in left margin, three editorial match cards in 3b, the why panel in 3c.
- §04: lede + Sofia's review card (positive wash) + the quiet system signal.
- §05: echo line + "Meet WeMatch" coral pill + micro-line.
- Footer link "System documentation →" present.

- [ ] **Step 2: Mobile audit at 375×667.**

Resize browser to 375×667 (or use DevTools device toolbar with iPhone SE preset).

Expected:
- No horizontal scrollbars anywhere.
- Hook line wraps but stays readable; sub-line below.
- §02 review cards stack vertically (positive then critical).
- 18% numeral and its sentence stack; numeral above sentence.
- Sofia aside is hidden entirely (no sticky image on mobile).
- §03 moment markers move inline above their titles.
- §03b match cards stack vertically.
- Sticky margin chips do not appear (display: none on mobile).
- §05 CTA is full-width-ish and tappable.
- Footer link still visible.

- [ ] **Step 3: Reduced-motion audit.**

In DevTools → Rendering → "Emulate CSS prefers-reduced-motion: reduce". Reload `index.html`.

Expected:
- Sofia stills do not crossfade; they snap to whichever state's peak is closest to scroll position.
- Smooth scroll behavior may still occur from `scroll-behavior: smooth` — that's CSS, not JS, and the design accepts it.
- Sticky chips appear/disappear without fade transition.

- [ ] **Step 4: Link integrity check.**

In `index.html`, click the footer "System documentation →" link. Expected: `style-guide.html` opens.

In `style-guide.html`, click each section nav link (Colour, Type, Spacing, Radius & Elevation, Motion, Sofia, Components). Expected: each scrolls to the matching section.

Click the iframe-loaded match card and review card in the style guide. Verify they render correctly inside the iframe with the new tints/editorial composition.

- [ ] **Step 5: Console + network audit.**

Open DevTools console on `index.html`. Expected: **zero errors**. No 404s in the Network tab. The only fonts loaded: General Sans (from Fontshare). No Inter request.

Verify `config.js` loads as `application/javascript` (Network tab). The CTA `href` resolves to `https://wematch-agent.placeholder.invalid`.

- [ ] **Step 6: Final visual gut check.**

Step back and read `index.html` top to bottom as a reader, not a builder. Does the page feel continuous (vs. folded sections)? Does Sofia's arc track to the emotional beats of the script? Does the §02 → §04 review-card rhyme close the loop?

If any of these fails, the issue is structural — surface it before claiming the implementation complete.

---

## Open items at plan-write time

- **VEO 3.1 Phase B swap.** Documented in spec §6. Implementation deferred until the team delivers the 5 transition clips. The current Sofia script's opacity logic stays identical; the `<img>` elements become `<video>` and a `currentTime` listener is added per clip.
- **Coral hex confirmation.** `--coral-500: #F7374F` is the V1 researched approximation. Eyedrop the live WeRoad site and correct in `design/tokens.css` before Phase 2 hardens.
- **Real agent URL.** `WEMATCH_AGENT_URL` placeholder in `config.js`. One-line replacement once the team hosts.

---

## Spec coverage check

| Spec section | Implementing task(s) |
|---|---|
| §1 File structure (two artifacts + config.js) | Tasks 4, 5, 6 |
| §2 Type collapse to General Sans | Tasks 1, 4 |
| §3 Review card tinted variants | Tasks 1, 2, 7 |
| §4 Match card detached & editorial | Tasks 3, 8 |
| §5 index.html narrative spine | Tasks 6, 7, 8 |
| §6 Sofia stills-first choreography | Task 9 |
| §7 CTA + agent integration | Tasks 6, 11 |
| §8 style-guide.html V2 polish | Task 4 |
| §9 Open items | Documented above |
| §10 Decision log | Reflected throughout |

All spec items map to at least one task. No orphan requirements.
