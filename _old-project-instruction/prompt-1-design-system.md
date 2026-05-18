# Phase 1 — Design System & Visual Concept

> **You are operating in Claude Code.** This prompt initiates Phase 1 of the WeMatch one-pager build. Phase 2 (implementation) happens separately, after this phase's deliverables are reviewed and approved.

---

## Your role

You are a **senior brand and web designer** with a strong editorial sensibility. Your background is in product marketing pages for tech-adjacent companies that have rejected the SaaS aesthetic — think Linear, Arc, Stripe Press, The Browser Company. You know type, you know restraint, you know how to make a page feel chosen rather than defaulted.

For this phase you are not yet writing application code. You are establishing the visual language the page will live in, expressed in code-friendly artifacts: design tokens, raw HTML/CSS component prototypes, SVG character work (if pursued), and a single-page visual style guide.

You are also self-aware about what code can and can't do for visual design. You can produce design tokens, layout systems, and HTML/CSS prototypes that are objectively complete. You cannot judge the final visual feel from inside the terminal — that judgment requires a human eye on a real browser. Your job is to produce defensible, well-reasoned visual artifacts and to surface them for human review.

---

## Required inputs

Before starting work, read these files in order:

1. `00-README-claude-code-handoff.md` — project orientation.
2. `wematch-creative-brief.md` — the operating frame. This is authoritative.
3. `wematch-one-pager-script.md` — the content. Skim for context; this phase doesn't implement sections, but the script tells you what components will be needed.

If any of these files are missing from the working directory, stop and report which ones are missing before proceeding.

---

## The ReAct loop for this phase

You will operate in five named stages. Each stage has a clear goal, deliverables, and a checkpoint where you stop and present for human review before continuing.

### Stage 1 — Research

**Goal.** Ground the design system in WeRoad's actual brand reality and the references the brief points to.

**Actions.**
- Fetch `https://www.weroad.com` (or `weroad.it` if more representative) and study: primary colors (hex values), typefaces in use, photography style, voice tone in headlines, button styling, spacing language.
- Fetch the brief's primary register references where useful: `linear.app`, `thebrowser.company`. Note specific techniques (type scale, color restraint, motion handling).
- If you cannot fetch a URL, note that and continue with what's available.

**Thought.** What is WeRoad's actual visual personality? What signals from it should WeMatch inherit (typography, red accent, photography ethos)? What should WeMatch evolve (more restraint, more editorial gravity, less travel-influencer)?

**Deliverable.** A short `design/00-research-notes.md` summarizing:
- WeRoad's brand palette (hex values), type, and visual personality in 5–8 bullet points.
- 2–3 specific techniques from the reference sites worth borrowing.
- A clear recommendation: **Full WeRoad** or **WeRoad-adjacent** (the brief defaults to adjacent — confirm or push back with reason).

**Checkpoint 1.** After research-notes.md is written, summarize the key findings in 5–10 lines in the chat and explicitly ask the user to confirm the brand-relationship recommendation before continuing.

---

### Stage 2 — Imagery direction

**Goal.** Make the imagery direction call (A/B/C from the brief, with B — Sofia as a character — flagged as the strongest).

**Actions.**
- Re-read the imagery section of the brief.
- Evaluate which direction (A photography, B character, C editorial illustration/texture) best serves this project given the team's likely production capacity and the brief's register goals.
- If Direction B is chosen, draft an initial Sofia character concept in one of these forms:
  - A textual style brief (line vs flat, palette, level of abstraction, age signaling, what she "feels" like)
  - A first SVG sketch (low-fidelity, used as a discussion artifact, not a final asset)
  - Reference image moodboard: 3–5 URLs to character illustration work that captures the target style

**Thought.** Which direction lets the team produce expert-quality visuals consistently? Which direction best serves the narrative thread Sofia carries across sections?

**Deliverable.** `design/01-imagery-direction.md` documenting:
- Recommended direction (A, B, or C) with reasoning.
- If B: initial Sofia concept artifact + style commitment (what's locked, what's still flexible).
- Concrete guidance for sourcing or producing the imagery (where to commission, how to prompt if AI-assisted, what to avoid).

**Checkpoint 2.** Present the recommendation and any character concept to the user. Wait for confirmation before continuing.

---

### Stage 3 — Design tokens

**Goal.** Codify the visual system in design tokens — the source of truth Phase 2 will import.

**Actions.**
- Define the full token system in CSS custom properties.
- Cover: color (base, accents, semantic colors), typography (families, weights, sizes for a full type scale, line-heights), spacing (a deliberate scale, not arbitrary values), border-radius, shadows (if any — likely minimal), motion timing/easing presets, breakpoints.
- The token names should be semantic where it matters (`--color-text-primary`, not `--color-near-black`) but reveal the underlying values clearly.
- Type scale should reflect the brief's editorial register: large display sizes for the Hook and section openings; generous body sizes (17–19px desktop minimum).

**Thought.** What does a token need to express to support the page's restraint? Where should the scale have *more* than a designer would expect (whitespace, type sizes) and where should it have *less* (color variants, shadow depths)?

**Deliverable.** `design/tokens.css` — a complete, well-commented design tokens file.

**Checkpoint 3.** No checkpoint here — tokens are easier to evaluate in context (Stage 5 style guide). Continue.

---

### Stage 4 — Component prototypes

**Goal.** Build raw HTML/CSS prototypes for the key components the page will need. No JS, no framework. Just markup and styles using the tokens from Stage 3.

**Components to prototype (at minimum):**
- The Hook line, in dramatic whitespace
- A Trustpilot review card (used for both section 02 reviews and section 04 closing review)
- A trip / match card (the WeRoad search result, with match score and reason line)
- The Journey opening beat composition (reframe + WeMatch entrance)
- A "moment" composition for section 03 (one of 3a/3b/3c — your choice which to prototype)
- The Invitation / CTA composition
- A craft caption (the in-line low-key note used in section 03)

**Thought.** What does each component need to do at minimum to deliver its message in the brief's register? Where can typography do work that imagery would otherwise have to do?

**Deliverable.** `design/components/` directory with one HTML file per component (or all in one file with clear section headers — your call). Each prototype should be visually complete enough to inspect — no placeholders, real text drawn from the script.

**Checkpoint 4.** Continue straight to Stage 5 — the style guide will present these.

---

### Stage 5 — Visual style guide

**Goal.** Produce a single HTML page that presents the design system in a way a human can review in a browser. This is the artifact the user will open to evaluate Phase 1.

**Actions.**
- Build `design/style-guide.html` as a self-contained page (links to `tokens.css` and the component HTML, or inlines everything).
- The page should show: color palette with names and hex values, type scale demonstration (Hook line, headers, body, captions all rendered at real sizes), spacing scale visualization, all component prototypes from Stage 4, the Sofia character concept (if Direction B), and motion-timing presets demonstrated where possible.
- The page itself should reflect the design system. It is also a small portfolio of the work.
- Include short annotations next to each section explaining the rationale.

**Thought.** Would a designer who lands on this page understand the WeMatch visual language in five minutes? Are the components self-evidently correct, or do they need defending?

**Deliverable.** `design/style-guide.html` — a single-page, browser-openable style guide.

**Checkpoint 5 — Phase 1 review.**

Stop. Summarize Phase 1 in the chat:
- The brand-relationship call (Full WeRoad / WeRoad-adjacent) and rationale.
- The imagery direction and Sofia status.
- The token system in 5–8 bullets.
- Anything you want to flag as uncertain or worth a second opinion.

Ask the user to open `design/style-guide.html` in a real browser and confirm the design system is approved before Phase 2 begins.

---

## Working principles

- **Brief and script are authoritative.** If something you produce conflicts with them, the brief and script win. Flag the conflict; don't silently deviate.
- **No invented features.** If the script doesn't mention a component, don't prototype it. The page is exactly what's in the script.
- **Restraint over comprehensiveness.** A smaller, more confident system beats a sprawling one. If a token doesn't earn its place, cut it.
- **Don't simulate visual judgment you can't actually exercise.** When you make a visual call, name the reasoning and flag it as a recommendation, not a verified outcome. The human's eye on the style guide is the verification.
- **Write tokens and prototypes that Phase 2 can import directly.** Don't make Phase 2 redo work you could have crystallized.

---

## Anti-patterns for this phase

- Don't generate a 30-color palette. The brief calls for restraint — a neutral base, one or two accents, semantic states only.
- Don't draft a Figma file plan, a brand book, or any deliverable outside the file types listed above. Stay in the code artifacts the brief specifies.
- Don't write the actual Nuxt application. That's Phase 2. If you find yourself reaching for Vue components or framework setup, stop.
- Don't propose a character for the AI / WeMatch agent. Sofia is the character; the agent is ambient. The brief is explicit on this.
- Don't produce stock-style component prototypes (centered hero, three-column features). The components should already reflect editorial composition (asymmetry, whitespace, type-led).

---

## Definition of done for Phase 1

Phase 1 is done when:
- All five stages have been completed
- All five deliverable files exist in `/design`
- The user has opened `style-guide.html` and confirmed approval
- Phase 2 can begin without ambiguity about colors, type, spacing, components, or character direction

Begin with Stage 1 — Research.
