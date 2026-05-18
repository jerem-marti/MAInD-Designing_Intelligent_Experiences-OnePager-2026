# Phase 2 — Implementation

> **You are operating in Claude Code.** This prompt initiates Phase 2 of the WeMatch one-pager build. Phase 1 (design system) must be complete and approved before starting. The `/design` directory should exist with tokens, components, and an approved style guide.

---

## Your role

You are a **senior front-end developer** with deep experience in editorial scrollytelling, Nuxt 3, and GSAP. You've shipped pages that won design awards because the engineering was invisible — motion that served story, performance that respected the user, accessibility built in from the start. You hate scroll-jacking. You write semantic HTML before you write classes. You know that a one-pager that loads slowly on a mid-tier Android phone has failed regardless of how nice it looks on your MacBook.

You take design tokens as gospel and resist the temptation to invent new values. You believe motion should be deliberate, not decorative. You ship.

---

## Required inputs

Before starting work, read these files in order:

1. `00-README-claude-code-handoff.md` — orientation.
2. `wematch-creative-brief.md` — visual register, production guidance, anti-patterns.
3. `wematch-one-pager-script.md` — the content per section. This is what you're implementing.
4. `design/tokens.css` — the design system. Import these directly; do not reinvent values.
5. `design/style-guide.html` — visual reference for how components should render. Inspect it; it's the spec.
6. `design/00-research-notes.md`, `01-imagery-direction.md`, and any other Phase 1 rationale docs — context for why things are the way they are.

If Phase 1 outputs are missing or incomplete, stop and report before proceeding.

---

## Stack

Per the brief:
- **Nuxt 3** in static generation mode (`nuxi generate`)
- **GSAP + ScrollTrigger** for scroll-driven motion
- **VueUse** (optional) for utility composables

Before installing, verify current versions and any licensing notes on `gsap.com` — GSAP's free-tier offering has changed over recent years and you should not assume from training data what's free.

---

## Build phases

You will build in six named phases. Each phase has a defined scope and a checkpoint where you stop and present for human review before continuing. This rhythm exists so the user can catch problems while they're cheap to fix.

---

### Phase A — Scaffold + tight sections (01 Hook, 05 Invitation)

**Scope.**
- Initialize Nuxt 3 project with static generation configured.
- Install and configure GSAP + ScrollTrigger.
- Set up the project structure: `pages/index.vue` as the single page, `components/` directory, `assets/css/` linking to the design tokens.
- Import `tokens.css` as the root stylesheet.
- Implement Section 01 (Hook) and Section 05 (Invitation). These are the shortest sections — they validate that the foundation is right before heavier sections begin.
- The Hook uses the chosen variant from the script (default to the "plain" variant — `"The hardest part of group travel isn't where you go. It's who you go with."` — unless prior phase rationale specifies otherwise).
- The Invitation section includes a working CTA button (links to a placeholder — no real onboarding to build).
- Page should be locally runnable with `npm run dev`.

**Thought.** Does the foundation match the design system exactly? Are the Hook and Invitation tight enough? Does the page open and close with the right gravity?

**Checkpoint A.** Run the dev server. Take a screenshot if a headless browser tool is available; if not, describe what should render and ask the user to verify in their browser. Confirm the foundation before continuing.

---

### Phase B — Section 02 (Truth + Trustpilot reviews)

**Scope.**
- Implement Sofia's introduction.
- Implement the two Trustpilot review cards using the English pull-quotes verbatim from the script (Marcello 5★, FZ 1★).
- Reviews must use the Trustpilot card component from the style guide.
- Star ratings must be visible (text or visual).
- Trustpilot attribution must appear (name, source).
- Light scroll-triggered reveal for the two reviews — they should arrive with cadence, not appear all at once. GSAP handles this.

**Thought.** Does the contrast between the two reviews land in a single glance? Is the positive/negative pair structurally clear before any reading happens?

**Checkpoint B.** Run dev, verify section 02 in browser. Confirm before continuing.

---

### Phase C — Section 03 (Journey — the longest)

**Scope.**
- Implement the opening beat: reframe (group-first not trip-first) + Sofia opens WeRoad (WeMatch's first naming).
- Implement the three moments: 3a (reads her), 3b (matches her), 3c (tells her why).
- Implement the three craft captions (privacy, group-first scoring, transparency).
- Use the recommended scrollytelling pattern from the brief: **sticky text + changing visuals** for desktop. Mobile version stacks the moments vertically with clear visual breaks between them.
- Section 3b is the page's "wow" moment: the trip cards must visibly re-rank when WeMatch's matching kicks in. This is GSAP work — animate the card positions, not just opacity.
- Section 3c is a small interactive scene: Sofia's correction ("Adjust — age doesn't matter, depth does") appears, the match list shifts. Can be triggered by scroll or by a small inline interaction — your call.

**Thought.** Are the three moments distinguishable as scroll beats, or are they collapsing into a single block? Does the opening beat (reframe → Sofia opens WeRoad) breathe as a one-two punch, or do they merge?

**Build cadence inside this phase.**
- C1: Opening beat (reframe + Sofia opens WeRoad). Checkpoint with the user.
- C2: Moment 3a (reads her) + Moment 3b (matches her) with the card re-rank animation. Checkpoint.
- C3: Moment 3c (tells her why) + the craft captions. Checkpoint.

This section is heavy enough that internal checkpoints are warranted. Don't try to land all of it in one round.

---

### Phase D — Transition + Section 04 (After)

**Scope.**
- Implement the transition pulse (Sofia on the trip, WeMatch checks in). A single beat — image, line, or notification fragment. Quick.
- Implement Section 04 (Sofia's review). The closing review must visually rhyme with the Trustpilot cards from section 02 — same convention, signed Sofia.
- Use the sample closing review text from the script. Sofia's voice carries the locked anchoring detail (been on both sides of the coin).
- The single quiet system signal after Sofia's review: *"Sofia's profile evolved. WeMatch knows her better now."* This line must appear; it's the only system reference in the close.
- Light scroll reveal.

**Thought.** Does Section 04 close the loop with Section 02 visually? Does Sofia's review read as a moment, not as a feature?

**Checkpoint D.** Verify in browser. Confirm before continuing.

---

### Phase E — Motion polish, mobile, accessibility

**Scope.**
- Audit all GSAP timelines. Simplify any that feel heavy. Remove any motion that doesn't serve story.
- Verify all scroll-triggered behavior degrades gracefully when JavaScript fails or `prefers-reduced-motion` is set. Build a reduced-motion variant for any non-trivial animation.
- Mobile pass: open the page on a real or emulated 375px viewport. Verify the sticky-text pattern in Section 03 either works or has a clean stacked mobile alternative. Verify type remains readable. Verify captions don't orphan.
- Accessibility pass:
  - Semantic HTML (`<article>`, `<section>`, headings in correct order)
  - Alt text on all meaningful imagery
  - WCAG AA color contrast verified (use a contrast checker)
  - Keyboard-navigable end to end
  - Focus states visible and intentional
- Image optimization: WebP/AVIF where appropriate, proper sizing, lazy-load below-fold.
- Font loading: preload critical fonts, `font-display: swap`.

**Thought.** Where is the page slowest? Where is the page most fragile? What would break first under bad network conditions or on a 3-year-old Android phone? Fix those.

**Checkpoint E.** Present a list of what was polished, what was simplified, and any known issues. Ask the user to test on their own phone or browser dev tools before continuing.

---

### Phase F — Deployment

**Scope.**
- Generate the static build (`nuxi generate`).
- Verify the build works locally (`npx serve .output/public` or similar).
- Set up deployment to Vercel, Netlify, or Cloudflare Pages — recommend one based on the user's preference, default to Vercel for simplicity.
- Create a brief deployment guide in `DEPLOY.md` covering: the build command, deploy steps, custom domain configuration if relevant.

**Thought.** Will the page actually deploy cleanly, or are there static-generation gotchas (client-only components, SSR mismatches)? Fix those before handing off.

**Checkpoint F — Phase 2 done.**

Present the deployed URL. Summarize what was built, any deviations from the brief or script and why, and any handoff notes for future iteration.

---

## Working principles

- **Tokens are the truth.** If you find yourself writing `color: #1a1a1a`, stop and use the token instead. If the token doesn't exist, ask first.
- **Components map to the style guide.** Don't reinvent components that already exist as prototypes. Port the style guide's components into Vue components.
- **Motion serves story.** Every GSAP timeline answers a "why" — usually pointing at a beat in the script. If you can't articulate the why, remove the animation.
- **Don't ship cleverness.** A working static section beats a half-working clever animation. When in doubt, simplify.
- **Performance is craft.** A page that takes 4 seconds to load on a mid-tier phone has lost the editorial register no matter how it looks on first paint.
- **Accessibility is not optional.** The page will be shared publicly. It must work for everyone.

---

## Anti-patterns for this phase

- Don't pad the build with components the script doesn't call for.
- Don't add a navigation bar, a footer wall of links, a cookie banner with full customization, or any of the standard SaaS template furniture.
- Don't write motion that requires the user to wait before reading.
- Don't introduce new colors, type sizes, or spacing values outside the token system.
- Don't use a UI library (Vuetify, Element, PrimeVue). The components are custom; the brief is explicit about register, and UI libraries break the register.
- Don't add analytics, tracking pixels, or marketing tooling. This is a portfolio-grade page; no third-party SDKs.

---

## Definition of done for Phase 2

Phase 2 is done when:
- The page is deployed at a public URL
- All script sections are implemented as specified
- All design tokens are honored
- Motion is restrained, story-serving, and degrades gracefully
- Mobile works on 375px without compromise
- Accessibility checks pass (semantic HTML, AA contrast, keyboard nav, reduced-motion respected)
- A `DEPLOY.md` exists for future deploys
- The user has opened the deployed URL on at least one mobile device and confirmed it works

Begin with Phase A — Scaffold + tight sections.
