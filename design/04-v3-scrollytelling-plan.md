# WeMatch V3 — Scrollytelling Redesign

**PM brief. Design style: nvg8.io. Story: ours.**

> **What this plan is.** A re-grounding after the previous draft over-corrected toward the presentation deck. The correct direction: keep the V2 narrative (script v8 — Marcello/FZ, 18%, "Group fit isn't measured", Sofia's arc, the 87% match card, "Meet WeMatch") and **adopt nvg8.io's design language** — display typography, sticky 300svh scroll sections, word-by-word reveals with placeholder pills, scroll-scrubbed video/image sequences, vibrant accent on cream/ink.
>
> **What stays from V2.** The story (`02-v2-spec.md`), the tokens (`tokens.css`), the style-guide (`style-guide.html`). The component CSS (`review-card.html`, `match-card.html`) remains a reference; the actual page rebuilds.
>
> **What changes.** `index.html` is rebuilt. New display font added (Clash Display, same foundry as General Sans). New scrollytelling primitives (sticky 300svh, word-split, scroll-scrub) replace the static-segment scaffold V2 shipped.
>
> **Improvements we cherry-pick from the presentation.** Only those that strengthen the story without rewriting it. Specifically: the *"groups disguised as trips"* strike-through reframe (a sharper visual than V2's "It's who you go with"), and the *"WeMatch finds your group before you find your trip"* closing phrase (stronger than V2's CTA echo). The 58% statistic, Compatibility Seeker archetype, six phases, and eight named DNA dimensions belong to the deck — not the one-pager — unless we extend scope later.

---

## §0 Context correction

The previous version of this plan (`04-v3-scrollytelling-plan.md` prior to this rewrite) treated the deck script as canonical and proposed re-cutting the page narrative to match. That was wrong. The deck is the live, graded artifact. The one-pager is its scrolly companion. They share the brand and the visual register; they do not have to share the script. Reverting to script v8 as the source narrative and applying nvg8.io's design vocabulary on top.

### nvg8.io is reference, not template

nvg8 is a **Web3 brand** — its register is loud, multi-coloured, decorative, character-anchored. WeMatch's register is **editorial restraint** — cream field, single coral accent, type doing the work. Same scrollytelling *engine*; different *volume*.

This plan separates the two layers explicitly:

- **Universal scrollytelling techniques** (we adopt) — sticky scroll containers, scroll-driven content state, word-by-word reveals with placeholders, scroll-scrubbed media, smooth-scroll smoothing.
- **nvg8-specific brand choices** (we do NOT copy) — multi-accent palette, wedge-shaped chapter pills, decorative mouse-parallax tags, Rive character animations, 5–13rem display sizes used at full saturation everywhere.

If a design choice in §4 below sounds like "do what nvg8 does," push back on it. The right test is: *does this serve WeMatch's editorial register, or am I just copying a nvg8 affordance?*

---

## §1 UX Researcher (Marta) — nvg8.io style decode

The full `outerHTML` from nvg8.io reveals every load-bearing pattern. Synthesising:

### Type system
- **Display:** `OldschoolGrotesk` Heavy (900) — fluid scale **5rem → 13rem** (80px → 208px), letter-spacing −0.04em, line-height 0.8–0.9. The display *dominates* — three words on a viewport is normal.
- **Body:** `Aeonik` Medium (500) — fluid **1.4rem → 1.8rem** (~17 → 22px), letter-spacing +0.01em, line-height 1.2.
- Two fonts only. Display is heavy and editorial; body is geometric and neutral.

**Equivalent for WeMatch:** **Stay single-family.** Keep General Sans as the only family on the page, but add the **700 (Bold)** weight to the existing 400/500/600 we already load. The display work happens at 700 weight + fluid clamp scale (≤ ~136px). This honours the V2 decision to consolidate to one family, gives display a heavier register without introducing a second face, and costs ~6 KB instead of ~25 KB.

If after seeing M3 the display still feels under-weighted at viewport scale, the fallback is to add Clash Display 700 (same Fontshare publisher) — but that's a deferred call, not a launch-day decision.

### Color system
- One paper background `#FDF9F0` (warm cream), one ink `#141414`. Sections alternate between them.
- Five saturated accent colors — `#FF6D38` orange, `#7A78FF` purple, `#C7FF69` lime, `#FFC412` yellow, `#478BFF` blue — each tied to a chapter/section, never blended.
- Pale tints (`-300`, `-100` variants) for secondary surfaces.

**Equivalent for WeMatch:** Our existing token palette already does this — warm cream `#FAF6F0`, ink `#1F1B16`, single coral `#F7374F` accent, muted greens/bricks for review-card function. We do **not** adopt nvg8's multi-accent system — we have one accent (coral) and we keep it. The nvg8 lesson is *how* accents are deployed (sparingly, as the visual punctuation of cream/ink fields), not *which* accents.

### Layout / scroll primitives
The nvg8 CSS is dense; the operative patterns:

1. **`height: 300svh` sticky sections.** A scroll container is 3× viewport tall; the visible content is `position: sticky; top: 0; height: 100svh`. As the reader scrolls *through* the container, the sticky content stays pinned and its inner state animates against scroll progress.
2. **Negative `margin-top` for overlap.** `section-intro` carries `margin-top: -200svh` — the next section starts *inside* the previous one's scroll window, allowing one scene to crossfade/morph into the next without a hard cut.
3. **`100lvh` (large viewport)** everywhere instead of `100vh` — handles iOS Safari's URL bar collapsing correctly.
4. **`clip-path: inset(... round 80px)`** with animated `inset` — the section appears to grow rounded corners as you scroll, giving it a card-like reveal.
5. **`scrollyVideo`** — `<video>` element absolutely positioned, played via scroll-driven `currentTime` scrubbing. Looping fallback `<video>` carries the rest position.
6. **Lenis smooth scroll** — `class="lenis lenis-smooth"` on `<html>`. All the timing math assumes Lenis is taking over from the browser's native scroll.

### Reveal mechanics (the signature nvg8 move)
The `split-lines` / `split` / `word` / `placeholder` pattern:

```html
<div class="split">
  <div class="word">
    <span style="opacity: 0;">groups</span>
    <div class="placeholder"></div>
  </div>
  <!-- repeated per word -->
</div>
```

CSS:
```css
.placeholder { background: rgba(0,0,0,0.12); border-radius: 1000px; height: 2.2rem; }
```

Behaviour: until the word reveals, a soft pill stands in for it. As scroll progresses, each word's `<span>` fades from opacity 0 → 1 (and translates 0–50px upward), while the `<div class="placeholder">` pill behind it fades from 1 → 0. The result is text that *materialises* word-by-word into a layout that was already holding its shape. The page never reflows — it just fills in.

This is the single most copyable nvg8 technique and the one that will give our page the most immediate uplift.

### Chapter system
nvg8 labels each scrolly chapter with a brightly-coloured wedge pill: `[1 ◢] Introduction`. The *principle* — a quiet spatial marker so the reader knows where they are — is worth borrowing. The *form* (vivid wedge, branded colour) is nvg8 dressing.

**For WeMatch:** a much quieter version — a small number + label set in uppercase micro type, in `--color-text-tertiary`, in the top-left margin of each scene. No wedge, no fill, no accent colour. Closer to an editorial chapter heading than a Web3 badge.

### Mouse parallax
Small `mouse-parallax` containers translate by mouse delta. Used decoratively on icons/illustrations only — not on text. Subtle. Adds aliveness without distraction.

### Stack signature
- **Nuxt 3 / Vue** — irrelevant to us; we're static.
- **Lenis** — use.
- **GSAP + ScrollTrigger** — they're not declared in the HTML but every behaviour above is a textbook ScrollTrigger pattern. Use.
- **Rive** for the dense character animations — we don't need it; we have WebP stills and (eventually) VEO video clips.

---

## §2 UX Critic (Loïc) — what to keep, what to replace

What V2 got right and V3 keeps:
- The token system (`tokens.css`). The decision to collapse to one font *family* (General Sans) was correct in principle; V3 adds a *second weight tier* with Clash Display for the display register, keeping the single-family-feel but giving display the heft it needs.
- The Sofia stills (6 WebP) and her narrative arc.
- The §02 review-card pair and the §03b match-card row.
- The CTA + `config.js` + `WEMATCH_AGENT_URL` integration.
- The footer link to `style-guide.html` as appendix.

What V2 got wrong and V3 replaces:
- **The page is a static document.** Sections stack with `padding-block: var(--space-3xl)`. No `position: sticky`, no scroll-driven content state changes. → V3: every section is a sticky 300svh container.
- **Sofia is a crossfaded portrait, not a character.** Six stills crossfade on the right side at fixed scroll progress, regardless of what content is on screen. → V3: Sofia transitions are bound to *narrative beats* via ScrollTrigger labels, and the crossfade itself becomes a scroll-scrubbed image sequence inside a sticky window (Phase B substitutes VEO clips at the same callsites).
- **Text appears all at once.** No word-level animation, no placeholder pills, no scroll-revealed reading. → V3: every display-weight headline uses the `.split` + `.word` + `.placeholder` pattern.
- **Section transitions are hard cuts.** Each section has a top border / large padding band. → V3: overlapping scroll windows (`margin-top: -200svh`) — one scene crossfades into the next.
- **The marginalia chips are a clever idea the reader won't notice.** Confirmed in the previous critique pass. Cut.
- **`scroll-behavior: smooth`** is browser-native and fights the scrolly engine. → V3: remove, Lenis takes over.

What V2 got wrong and is **already correct in the cherry-picked deck improvements**:
- The Hook "It's who you go with." is fine on its own but flat as a scrolly opener — replaced by the **"groups disguised as trips"** typographic strike-through reframe (drawn from deck slide 07).
- The CTA echo "You're not choosing a destination, you're choosing your people" is fine but does not echo what the *reader will repeat after they leave*. → Replace with the **"WeMatch finds your group before you find your trip"** close (drawn from deck slide 13). This is the line we want the reader to hold; the deck script makes that explicit.

These two phrasing swaps are the only narrative changes. Everything else (Marcello / FZ, 18% trace-back, "Group fit isn't measured. It's hoped for.", the §03 reframe → 3a → 3b → 3c flow, Sofia's closing review, Sofia's profile signal line) stays verbatim from script v8.

---

## §3 Editorial Director (Alessia) — narrative preserved + two improvements

The locked content is `02-v2-spec.md` §0 (the inputs absorbed there). For unambiguous reference, V3 ships with these strings verbatim:

**§01 Hook (replaces the "It's who you go with" line)**
- Display line 1: *"Today, WeRoad's solo travelers search for"* ~~trips~~ — strike animates across as the reader scrolls into the section.
- Display line 2: *"What they're actually searching for is"* **groups disguised as trips.**
- Sub-line: *"It's who you go with."* — V2's original Hook becomes the subhead, set in body-lg, low-left under the display block.

This is the strongest scrolly-opener move available: the strike-through is a scroll-bound animation (`stroke-dashoffset` on an SVG path), the word substitution feels like a discovery, and the original Hook line still appears as the moral.

**§02–§04** — unchanged from script v8:
- §02 Truth: Sofia anchor, Marcello (5★) / FZ (1★) tinted review cards, 18% trace-back stat, problem line "Group fit isn't measured. It's hoped for."
- §03 Journey: reframe + entrance + 3a (Read) + 3b (Match — the 87% Patagonia row) + 3c (Explain — the "why" panel)
- §04 After: Sofia's closing review card + "Sofia's profile evolved" signal

**§05 Invitation (replaces the CTA echo)**
- Display line: **"WeMatch finds your group before you find your trip."** (typewriter-style scroll reveal)
- CTA: **Meet WeMatch** (verbatim from script v8; do not change)
- Micro-line: *"A live preview. Real agent. No signup."* (verbatim from script v8)

This is the line the deck script names as the takeaway. Borrowing it for the one-pager keeps the page's parting impression aligned with the deck's, with zero scope expansion.

---

## §4 Senior Designer (Théo) — design system update + scenes

### 4.1 Design system additions (delta on tokens.css)

```css
:root {
  /* Existing tokens stay. Additions: */

  /* Display family — General Sans, 700 (Bold) added to the existing
     400/500/600 weights. One family, four weights. No new font face. */
  --font-display: 'General Sans', system-ui, sans-serif;
  --font-weight-bold: 700;

  /* Display sizes — fluid, viewport-scaled. Match nvg8 register. */
  --text-display-xl:  clamp(4rem, 2.5rem + 7vw, 8.5rem);   /* 64 → 136 — Hook, Close */
  --text-display-1:   clamp(2.75rem, 1.6rem + 5.6vw, 5.5rem); /* unchanged */

  /* Reveal placeholder color — matches body text but quieter. */
  --placeholder-light: rgba(31, 27, 22, 0.12);
  --placeholder-dark:  rgba(254, 252, 249, 0.15);

  /* Inverted (dark) section background — already exists as bg-inverse. */
  /* Already in tokens.css: --color-bg-inverse: var(--ink-900); */
}
```

Fontshare CDN: extend the existing General Sans request from `general-sans@400,500,600` to `general-sans@400,500,600,700`. One extra weight, ~6 KB. No new font family.

### 4.2 Scrollytelling primitives (CSS class library, new)

```css
/* The scrolly section. 3× viewport tall, sticky inside. */
.scene { height: 300lvh; position: relative; }
.scene__sticky { position: sticky; top: 0; height: 100lvh; overflow: hidden; }

/* Overlapping sections — one scene's tail enters the next. */
.scene--overlap { margin-top: -200lvh; }

/* Word reveal — the nvg8 signature. */
.split { display: inline; }
.split .word { display: inline-block; position: relative; }
.split .word > span { display: inline-block; opacity: 0; transform: translateY(20px); }
.split .word .placeholder {
  position: absolute; inset: 0;
  background: var(--placeholder-light);
  border-radius: 999px;
  pointer-events: none;
}
.scene--dark .split .word .placeholder { background: var(--placeholder-dark); }

/* Chapter label — quiet editorial marker (NOT the nvg8 wedge pill). */
.chapter-num {
  display: inline-flex; align-items: baseline; gap: 0.5rem;
  font-family: var(--font-body);
  font-size: var(--text-micro);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-text-tertiary);
}
.chapter-num__num { color: var(--color-text-secondary); }

/* Scrolly video / image sequence container. */
.scrolly-canvas { position: absolute; inset: 0; }
.scrolly-canvas > * { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; }
```

### 4.3 Scene-by-scene composition

The page has six scenes. Each scene is one `.scene` block (300lvh), with sticky content (100lvh) and a chapter pill in the top-left. Adjacent scenes overlap via `.scene--overlap` so transitions feel like crossfades, not cuts.

```
[ HOOK ]  →  [ TRUTH ]  →  [ JOURNEY · 3 sub-beats ]  →  [ AFTER ]  →  [ INVITATION ]
 cream         cream            cream (sub-beat 3b pins darker)         cream             cream
                                                                                          → ink
```

**Scene 01 · HOOK** (cream)

ASCII sketch of the sticky frame at three scroll progress points:

```
PROGRESS 0%                       PROGRESS 50%                       PROGRESS 100%

  1 ◢ HOOK                          1 ◢ HOOK                            1 ◢ HOOK

                                  Today, WeRoad's solo               Today, WeRoad's solo
                                  travelers search for               travelers search for
                                                                     ╱╱trips╱╱
  [all words are pill                                                What they're actually
   placeholders, nothing                                             searching for is
   yet visible]                                                      g r o u p s
                                                                     disguised as trips.

  scroll ↓                                                           It's who you go with.
                                                                     ↓
```

Animation: words fade in left-to-right; the strike-through SVG path animates with `stroke-dashoffset`; "groups" arrives in display-xl with a slight up-translation; the original Hook subline appears last, low-left.

**Scene 02 · TRUTH** (cream, overlaps Hook)

```
  2 ◢ TRUTH

  She's been on this app
  before. The question:                                     [SOFIA — hesitating]
  not where, but who.                                       (sticky right column,
                                                            scroll-scrubbed)

  ┌──────────────┐  ┌──────────────┐
  │ ★★★★★         │  │ ★             │
  │ Marcello      │  │ FZ            │
  │ "I came back  │  │ "Toxic dynamics
  │ with people." │  │ from day two." │
  └──────────────┘  └──────────────┘

      ╔════════════════════════════╗
      ║  18%                       ║   ← scrubbed count-up
      ║  of negative reviews trace ║
      ║  back to the group.        ║
      ╚════════════════════════════╝

  Group fit isn't measured. It's hoped for.    ← display-xl, the moral
```

Animations: lede line word-reveals → review cards slide in from opposite sides (positive from left, critical from right) → 18% counts up in scroll progress 0 → 18 → problem statement reveals in display-xl with the placeholder-pill effect.

**Scene 03 · JOURNEY** (cream → ink, three sub-beats)

The longest scene. Internally split into three pinned sub-beats inside one big container. The match-card row (3b) is the scan-mode lead.

```
SUB-BEAT 3a — READ              SUB-BEAT 3b — MATCH                  SUB-BEAT 3c — EXPLAIN
(cream)                         (ink — the "engineering" beat)        (ink)

  3 ◢ JOURNEY                     3 ◢ JOURNEY                          3 ◢ JOURNEY
  3a · READ                        3b · MATCH                            3c · EXPLAIN

  It reads her.                    It matches her.                       It tells her why.

  She talks. She also              The WeRoad search page,               She taps 87%.
  uses the site.                   re-ranked by group fit.               A panel opens.

  Two signals,                     ┌─────┬─────┬─────┐                   ┌─────────────────┐
  converging.                      │ 87% │ 79% │ 71% │ ←  cards          │ Why this match  │
                                   │ ─── │ ─── │ ─── │   slide-in        │ • move slow     │
  ╱ caption: she's never           │ ... │ ... │ ... │   from offscreen  │ • depth > checks│
    asked to fill out a            └─────┴─────┴─────┘                   │ • mid-thirties  │
    form.                          ↑ 87% card scales to                  │                 │
                                   focal at end of sub-beat              │ "Adjust — age   │
                                                                         │  doesn't matter,│
                                                                         │  depth does."   │
                                                                         └─────────────────┘
                                                                         (the why panel
                                                                         slides up over
                                                                         the 87% card)
```

Each sub-beat pins for ~100lvh. Sofia transitions: curious → surprised → connected, scrubbed across the sub-beats.

**Scene 04 · AFTER** (cream)

```
  4 ◢ AFTER

  She left alone, again.
  She came back with people.
  The difference, this time,
  was the group.

  ┌──────────────────────────────────────────┐
  │ ★★★★★                                     │
  │ "I've done a few of these now.            │
  │  One was magical. One was just fine.      │
  │  On day two, eating pão com tomate        │
  │  with Marco, I just knew. The wine bar    │
  │  in Alfama wasn't on the itinerary.       │
  │  None of the best parts were."            │
  │                                           │
  │  Sofia · Trustpilot                       │
  └──────────────────────────────────────────┘

  Sofia's profile evolved.
  WeMatch knows her better now.       ← caption, low-key

                                                                      [SOFIA — settled]
                                                                      (phone dark)
```

**Scene 05 · INVITATION** (ink — the only dark scene, mirroring deck slide 01)

```
  5 ◢ INVITATION

  WeMatch finds your group
  before you find your trip.        ← display-xl, typewriter-style
                                       scroll-revealed phrase by phrase

  ┌─────────────────────────┐
  │      Meet WeMatch       │       ← single coral pill
  └─────────────────────────┘

  A live preview. Real agent. No signup.

  ─────────────────────────────────────────
  System documentation →             (footer link to style-guide.html)
```

Reversed contrast (cream → ink). The page closes the way the deck opens. The reader holds the takeaway line as the page goes black.

### 4.4 Sofia rebound

Sofia's six stills are now bound to **scene boundaries**, not continuous scroll progress:

| Scene | Sofia state |
|---|---|
| 01 Hook | hidden (the type is the moment) |
| 02 Truth | hesitating |
| 03a Read | curious |
| 03b Match | surprised |
| 03c Explain | connected |
| 04 After | settled |
| 05 Invitation | hidden (the line is the moment) |

The transitions happen *between scenes* during the overlap windows. Phase B (VEO clips) slots in seamlessly: each transition becomes a ~2-second video that scrubs as the reader crosses the overlap.

### 4.5 Mobile (< 1024px)

Sticky 300lvh sections do not work well at mobile widths — iOS Safari's URL bar collapse mid-scroll breaks the pin math. Mobile uses an alternate layout:

- Each scene becomes a normal-flow block.
- Word-reveal animations still fire (triggered by `IntersectionObserver` instead of scroll progress).
- Sofia is hidden (already a V2 decision; preserved).
- Strike-through animation still fires.
- Chapter pills become small block-level labels above each scene.

---

## §5 Frontend Engineer (Hassan) — stack + implementation

### 5.1 Stack

| Layer | Choice | Reason |
|---|---|---|
| Smooth scroll | **Lenis** (CDN) | What nvg8 uses. Hijacks scroll so `gsap.ticker` can drive everything off a single rAF. ~6 KB. |
| Scroll orchestration | **GSAP 3 + ScrollTrigger** (CDN) | The de-facto scrolly engine. Handles pinning, scrubbing, timelines, label-bound transitions. ~45 KB total. |
| Text splitting | **GSAP SplitText** (CDN, free since GSAP 3.13) | Splits headlines into word/char spans without a custom utility. ~6 KB. |
| Image sequences | **Custom** (~30 LOC) | Use existing six Sofia WebP stills. Phase B swaps in `<video>` per scene. |
| Build tooling | **None** | Static. Vendored from `cdn.jsdelivr.net` and `api.fontshare.com`. |

Total third-party JS: ~57 KB gzipped. Acceptable for a portfolio one-pager.

### 5.2 File structure

```
ONE-PAGER/
├── index.html              ← rebuilt
├── config.js               ← unchanged
├── design/
│   ├── tokens.css          ← additive (Clash Display + 4 new tokens, §4.1)
│   ├── scenes.css          ← NEW. Scrollytelling primitives + per-scene styles.
│   ├── scenes.js           ← NEW. GSAP timelines, one per scene.
│   ├── style-guide.html    ← unchanged
│   └── sofia/              ← unchanged (six WebP stills)
```

Three new files: a small CSS module, a small JS module, and a rewritten `index.html`. `tokens.css` gets additive changes only (no breaking edits).

### 5.3 Per-scene timeline shape

For each scene, the work is the same:

```js
gsap.timeline({
  scrollTrigger: {
    trigger: '.scene-01',
    start: 'top top',
    end: '+=300%',       // 300lvh container
    pin: '.scene-01__sticky',
    scrub: 1,            // smooth scrubbing
  }
})
.from('.scene-01 .word > span',   { opacity: 0, y: 20, stagger: 0.05 })
.from('.scene-01 .word .placeholder', { opacity: 1, stagger: 0.05 }, '<')
.to('.scene-01 .strike',          { drawSVG: '0% 100%' })   // Hook strike-through
.from('.scene-01 .hook__sub',     { opacity: 0, y: 20 });
```

Each scene's timeline is ~20–40 lines. Six scenes = ~200 lines of orchestration code.

### 5.4 Sofia image sequence (Phase A)

```js
// Sticky container holds 6 absolutely-stacked <img> elements.
const SOFIA_STATES = ['hesitating', 'curious', 'surprised', 'connected', 'settled'];

// One ScrollTrigger per cross-fade band.
SOFIA_STATES.forEach((state, i) => {
  if (i === 0) return;
  gsap.to(`#sofia-${state}`, {
    opacity: 1,
    scrollTrigger: {
      trigger: `.scene-${sceneFor(state)}`,
      start: 'top center',
      end: 'top top',
      scrub: 1,
    }
  });
});
```

Phase B swap: replace each `<img>` with `<video>` and the `opacity` tween becomes a `currentTime` tween. The ScrollTrigger config is unchanged.

### 5.5 Mobile fallback (< 1024px)

```css
@media (max-width: 1023px) {
  .scene { height: auto; }
  .scene__sticky { position: static; height: auto; }
  .scene--overlap { margin-top: 0; }
}
```

JS detects width and switches to `IntersectionObserver`-driven reveals:

```js
const isMobile = window.matchMedia('(max-width: 1023px)').matches;
if (isMobile) {
  // Disable ScrollTrigger pin/scrub. Use IO-driven one-shot reveals.
  document.querySelectorAll('.word > span').forEach(el => {
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting) gsap.to(el, { opacity: 1, y: 0, duration: 0.6 });
    }).observe(el);
  });
}
```

### 5.6 Reduced motion

`prefers-reduced-motion: reduce` → bypass all timelines, set every animated element to its end state on load. One-line guard at the top of `scenes.js`:

```js
if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.set('.word > span', { opacity: 1, y: 0 });
  gsap.set('.word .placeholder', { opacity: 0 });
  gsap.set('.scene-01 .strike', { drawSVG: '100% 100%' });
  // ... etc
  return;
}
```

---

## §6 PM consolidation

### Milestones

| # | Milestone | Output | Approval gate |
|---|---|---|---|
| **M1** | Spec lock | This document. User approves direction. | Sign-off on §3 phrasing changes + §4 scene compositions. |
| **M2 + M3 (bundled)** | **Foundation + bookend scenes — the proof point** | Lenis + GSAP + ScrollTrigger + SplitText wired. General Sans 700 loaded. `scenes.css` + `scenes.js` scaffold. Scene 01 (Hook with strike-through) and Scene 05 (Invitation with dark inversion + typewriter close) fully animated. Scenes 02–04 are empty 300lvh placeholders. | **Critical gate.** User sees the actual scrollytelling behaviour + typographic register at viewport scale. Decision: continue building scenes 02–04 in this style, or pivot if the result doesn't land. This is the moment the user said "difficult to say without seeing the result." |
| **M4** | Truth | Scene 02 fully animated. Review cards slide in. 18% counts up. Problem statement reveals. | User approves the §02 rhythm. |
| **M5** | Journey | Scene 03 with three sub-beats. The 87% card scales to focal. The why panel slides up. | User approves the longest scene's pacing. |
| **M6** | After + Sofia | Scene 04 plus Sofia's full state arc bound to scenes. | User approves the closing rhyme. |
| **M7** | Polish + audit | Mobile fallback verified. Reduced motion verified. Browser pass (Chromium, Firefox, Safari). Style-guide.html footer link confirmed. | Hand to user for final visual review. |

> **Why bundle M2+M3.** The user has reasonable hesitation about the design direction without seeing it rendered. Empty scrolly scaffolding (M2 alone) is not a useful proof point — it just shows scrolling works. Bookend scenes (M3) plus the engine (M2) together show: how display type holds at viewport scale, how the word-reveal animations feel, how dark inversion lands, how the strike-through plays. After M2+M3 the user can say "more of this" or "less of this" with real evidence. Before that, opinions are speculation.

### Risks

| Risk | Probability | Mitigation |
|---|---|---|
| Sticky pinning fights iOS Safari's URL bar collapse | High at mobile | Mobile fallback (5.5) — no pinning under 1024px. |
| GSAP SplitText on dynamic web fonts can lay out before fonts load | Medium | `document.fonts.ready` gate before ScrollTrigger initialises. |
| Lenis + scroll-behavior smooth in CSS double-bounce | Medium | Remove `scroll-behavior: smooth` from `index.html` and `tokens.css` if present. |
| Total JS bundle weight grows past 60 KB | Low | We've budgeted ~57 KB. Sprite/icon work is SVG inline, no extra weight. |
| The reader skips so fast that pinned scenes feel like layout bugs | Low | `scrub: 1` (1-second smoothing on scrub) gives motion a perceptible duration even on aggressive scrolling. |

### What is **not** in scope

- VEO 3.1 clip generation. Phase B substitution is structurally pre-wired; clips arrive later.
- The Compatibility Seeker archetype, the six-phase agent, the eight named DNA dimensions. These belong to the deck. If we want to introduce them on the page, that's a V4 scope expansion.
- A multi-accent color system. We have one accent (coral). Discipline holds.
- The marginalia chips from V2. Confirmed cut.

### Approvals received from the user (2026-05-18)

1. ✅ **§3 phrasing changes** — the Hook becomes the "groups disguised as trips" reframe; the Invitation gets the "WeMatch finds your group before you find your trip" close. Everything else stays verbatim from script v8.
2. ✅ **§4.1 type system** — single family preserved. Add General Sans **700 (Bold)** to the existing 400/500/600 weights. ~6 KB extra, no new font face. Clash Display deferred — only revisited if 700 weight feels under-powered at viewport scale after M3.
3. ✅ **§4.5 mobile alternate layout** — sticky 300lvh under 1024px would break; mobile becomes a normal-flow block layout with the same animations triggered by IO.
4. ✅ **§5.1 stack** — Lenis + GSAP + ScrollTrigger + SplitText, CDN-vendored, no build step.
5. ✅ **Cut**: the marginalia chips from V2.

### User's concerns flagged at approval time

- **Over-fitting to nvg8.** Addressed in §0.1 "Reference, not template" and §4's chapter-marker downgrade from wedge pill to quiet editorial label. Will keep dialling back nvg8 mannerisms during implementation; nvg8's *engine* is universal, nvg8's *voice* isn't ours.
- **"Difficult to say without seeing the result."** Addressed by bundling M2+M3 into one delivery so the user evaluates with real evidence, not the spec.

---

*End of PM brief. Five POVs, one plan. Story preserved. Style imported. Awaiting M1 approval.*
