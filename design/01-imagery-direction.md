# Stage 2 — Imagery Direction

> Phase 1, WeMatch one-pager. Makes the A/B/C imagery call and commits an initial Sofia concept as a written style brief.

---

## Recommendation: Direction B — Sofia as a character

Confirming the brief's flagged-strongest direction. The other two were genuinely weighed:

- **Direction A — Photography.** Rejected. The brief is blunt that this is "hard to source well, easy to source badly," and Stage 1 confirmed WeRoad's own photography is the stock-travel register WeMatch must avoid. A student team cannot reliably commission or shoot documentary-grade travel photography across five sections with one consistent voice.
- **Direction C — Editorial illustration / collage / texture.** Respected, not chosen. It can be exceptional, but it abandons the strongest narrative device available — a single figure the reader follows across the locked emotional arc.
- **Direction B — Sofia as a character.** Chosen. Sofia is the narrative spine. She has a locked arc (hesitating → curious → understood → confirmed). A character can *carry* that arc visually; photography and collage can only decorate around it.

### Why B serves the narrative thread specifically

The script's emotional arc *is* the page. Sofia recurs in every section. A character that flexes posture and expression across sections lets the page **show** the arc instead of narrating it. That is the single highest-value visual move available, and only Direction B delivers it.

---

## Production route — CORRECTED

**Recommended: produce Sofia through expert-quality AI image generation, curated and post-processed by a human. Not hand-drawn SVG.**

> **This reverses my earlier recommendation in this document.** The first version of this file argued for hand-drawn SVG over AI generation, on the reasoning that a minimal line style would be "faster to draw cleanly by hand." A test sketch proved that argument wrong — the hand-drawn output was crude. The honest position: nobody on this workflow has demonstrated hand-illustration capability, and the brief *explicitly* sanctions AI as a legitimate means of producing the Sofia character in 2026 ("CONSIDER AI as the means of producing the Sofia character — this is a legitimate craft choice"). The right tool here is a current image model with strong instruction-following and character-consistency features, driven by a disciplined prompt and curated hard.

### What this changes about the character

- **More figurative.** The earlier "no rendered face" abstraction was partly a hedge against my own poor draftsmanship and against 2023-era AI-face uncanniness. With a current model and human curation, a **semi-figurative Sofia with a real, stylized face** is achievable and warmer — and the team has asked for more figurative. So: Sofia has a face, an expression, a wardrobe. She reads as an illustrated *person*, not a pictogram.
- **Still stylized, never photoreal.** The discriminator from the brief stands: illustration registers as deliberate; AI *photography* of a person registers as fake. Sofia stays firmly in illustration — flat or lightly shaded color, visible stylization — so she never falls into the uncanny valley.

---

## Sofia — initial concept (style brief)

This written style brief **is** the Stage 2 concept artifact. It is the source of truth a designer or an image model works from. No sketch is included — a bad sketch would mislead more than help; the words below are the commitment.

### Who she is, visually

Late 20s. Competent, not fragile — the brief is explicit she is *not* a worried first-timer. She should look like someone who travels well and often: unfussy, self-possessed, a little tired tonight. Not a influencer, not a mascot, not cute. An illustrated person you'd believe.

### Style commitment — what is LOCKED

- **Medium:** illustration — flat color or lightly shaded, with a visible, committed line or shape language. One model, one prompt family, one post-processing pass across every appearance (the brief's "single visual frame" rule).
- **Palette on the character:** restrained, warm, in the page's family — ink linework, muted warm neutrals for skin/clothing, and **coral used exactly once on her: the phone glow.** Nothing else competes for the accent.
- **The phone is the through-line.** The whole narrative is Sofia on WeRoad. She holds a phone in every appearance, and its screen-glow is her one coral touchpoint. In the final state the phone goes dark and drops to her side — the arc resolving in one object.
- **Emotion through posture first, face second.** Even with a face now in play, body language does the heavy lifting: spine curve, shoulder height, how drawn-in the arms are. The face confirms what the posture already says. This keeps her readable at small sizes and in motion.
- **Identity anchors that never change:** hairstyle, wardrobe, the line/shape language, and the phone — all fixed below. Everything else flexes.

### Sofia — locked identity anchors

Defined here as the design call, so the prompt package below has a single fixed description to reuse. These do not change between states or sections.

- **Face & colouring.** Warm mid-tone skin, dark brown eyes, dark brown hair. Plausibly Mediterranean without being hyper-specific — enough to stay consistent, not so much that reader projection closes off. Expressive but clearly *illustrated*, never photoreal.
- **Hairstyle.** Dark brown hair in a **low, slightly undone bun**, a few loose strands escaped at the temples. Reasoning: it reads as a clean, recognisable silhouette at any size (the identity anchor must survive small scale), it signals *competent traveller, not influencer* — done quickly, not styled — and the escaped strands keep it human and a little tired-tonight rather than crisp.
- **Wardrobe — one outfit across the whole page.** A **relaxed oatmeal knit sweater, sleeves pushed up**, over **simple dark trousers**. Small stud earrings. Reasoning: the oatmeal top sits inside the page's warm-neutral family so she never fights the palette; the dark trousers ground her; pushed-up sleeves read as unfussy and settled-in. No logos, no patterns — it's what a real competent traveller wears, not a fashion choice. One outfit holds her identity steady across the evening and the trip.
- **The phone.** Always in hand. Its screen-glow is her single coral touchpoint. In the final state the screen is **off** — dark phone, no glow — and that absence *is* the arc closing.

### Emotional states to produce

Following the script's arc — at minimum these, all from the *same* character:

1. **Hesitating** (§02) — closed, hunched over the phone, late-night, drawn in.
2. **Curious** (§03 opening / 3a) — upright, head lifting, attention turning outward.
3. **Surprised → understood** (3b–3c) — engaged, leaning in, a flicker of being seen.
4. **Connected** (transition / on the trip) — with others implied, phone checked-in not gripped.
5. **Settled / confirmed** (§04) — open, at ease, phone dark and down. The arc closed.

### What is still FLEXIBLE

- How figurative the face goes — recommend *clearly illustrated*, expressive but not detailed-realistic. Final call lands when the first generations come back.
- Whether she's ever shown full-figure vs. bust vs. fragment in tighter sections.
- Whether states are animated (GSAP) or static-per-section — a Phase 2 motion call.

---

## Production guidance

**Workflow for AI-generated Sofia (the real risk is consistency — manage it deliberately):**

1. **Lock the character first.** Generate and curate a single "turnaround" / reference set — Sofia, neutral pose, the locked hairstyle + wardrobe — *before* producing any scene. This reference becomes the identity anchor.
2. **Use character-reference / consistency features.** Current models support feeding a reference image so the same character recurs. Use it for every state. Do not free-generate each state and hope — that is the classic identity-drift failure.
3. **Generate all states in one disciplined session**, one prompt family, so lighting, line weight, and palette stay identical.
4. **Curate hard, then post-process.** Expect to discard most outputs. The keepers get a consistent post pass (color grade to the page palette, clean stray artifacts, drop backgrounds). Raw output never ships.
5. **Verify as a set.** Lay all states side by side. If one doesn't read as the *same person*, it's out.

### The prompt package

Built from three fixed blocks plus one variable line. The **IDENTITY** and **STYLE** blocks are pasted verbatim into *every* prompt — never reworded between states. Only the **POSE** line changes. This is what holds consistency.

**IDENTITY block (fixed — paste verbatim every time):**

> *Sofia — a self-possessed woman in her late twenties, warm mid-tone skin, dark brown eyes, dark brown hair in a low slightly undone bun with a few loose strands at the temples, small stud earrings. She wears a relaxed oatmeal knit sweater with the sleeves pushed up, over simple dark trousers. She is holding a smartphone.*

**STYLE block (fixed — paste verbatim every time):**

> *Contemporary editorial character illustration. Flat colour with subtle soft shading, clean confident linework, warm muted palette — ink, oatmeal, warm neutrals — with a single coral-red accent. The phone's screen reads as a soft warm coral glow of light, never a flat hard saturated rectangle. Plain warm off-white background, no scene clutter, no text. Magazine-quality, restrained, considered. Not corporate, not cute, not a mascot, not 3D, not isometric, no logos, not photorealistic.*

**Step 1 — generate the identity reference FIRST (do this before any state):**

> `[IDENTITY block]` *Neutral standing pose, three-quarter view, calm neutral expression, arms relaxed, holding the phone in one hand at her side, phone screen dark. Full figure, centred — this is a character reference.* `[STYLE block]`

Curate this down to one keeper. That keeper becomes the **character reference image** you feed into every subsequent generation (via the model's character-reference / consistency feature). Every state below is generated *with that reference attached*.

**Step 2 — the five state prompts** (each = IDENTITY + the POSE line + STYLE, with the reference image attached):

1. **Hesitating** (§02) — `[IDENTITY]` *Seated, hunched forward over the phone held in both hands, shoulders drawn up, head down, her face lit from below by the coral glow of the phone screen. Late-night, pensive, closed and drawn-in body language.* `[STYLE]`
2. **Curious** (§03 opening / 3a) — `[IDENTITY]` *Seated upright, head lifting away from the phone, attention turning outward, the phone lowered slightly in one hand, its screen glowing coral. A flicker of quiet interest in her expression.* `[STYLE]`
3. **Surprised → understood** (3b–3c) — `[IDENTITY]` *Leaning in toward the phone, held in one hand and tilted at an angle so the screen is not a flat slab facing the viewer. Its glow lights her face softly. Her eyebrows are raised and her lips slightly parted — the clear, warm expression of someone caught pleasantly off guard at being understood. Engaged, open, animated posture — not neutral, not blank.* `[STYLE]`
4. **Connected** (transition / on the trip) — `[IDENTITY]` *Standing relaxed in soft daylight, half-turned as if toward other people just out of frame, an easy small smile. She holds the phone loosely at her side, its screen on and clearly visible with a soft, warm coral glow — present, not faint.* `[STYLE]`
5. **Settled → confirmed** (§04) — `[IDENTITY]` *Seated, leaning back, open and relaxed posture, a calm contented expression. The phone is dark and resting in her lap — the screen is off, no coral glow anywhere in the image.* `[STYLE]`

> Note on state 5: the **absence** of coral is deliberate and load-bearing — do not let the model add a glow back in. If it does, that generation is rejected.

**Step 3 — asset format: keep raster, optimise it. (Decision after first generation.)**

The first generation pass came back as soft-shaded, lightly painterly illustration (visible knit texture, a real coral *glow* rather than a flat fill). It is high quality and consistent — but that style does **not** trace to clean SVG. *Image Trace* on a shaded illustration produces either a blobby mess or thousands of paths; forcing it would degrade exactly the quality that was just validated.

**This is a conscious deviation from the brief's literal text** ("SVG or SVG-derived") and is flagged here per the working principle of surfacing conflicts. The reasoning:
- The "SVG-derived" line in Direction B was written before AI generation was the confirmed route. Its *intent* — scalable enough, performant, consistent, no AI-slop — is fully met by well-curated, properly-optimised raster.
- The brief's own imagery section says the discriminator for AI imagery is *style discipline, not format*. Style discipline is satisfied here.
- Regenerating in a genuinely flat, trace-friendly style risks losing the character consistency the team just confirmed. Not worth it.

**Raster production path:**
- Cut each figure out to a **transparent background** (the generated off-white is close to the page cream but not exact; transparency gives compositing freedom). Auto background-removal tools handle this cleanly on a plain-background figure.
- Source is 1408×768. Export each figure at **~2× its largest on-page display size**, then convert to **WebP / AVIF with a PNG fallback**. Lazy-load the below-the-fold states (the brief's performance guidance).
- Curate hex: the baked-in coral glow won't be the exact token value — that's acceptable for a soft glow, but keep it visually in the `--color-accent` family.

**Where SVG still belongs:** genuinely *geometric* elements — connecting lines (profile → match → group), map paths, the drawn-on-scroll flourishes the brief mentions — are authored separately as hand-built SVG. Sofia is raster; the diagrammatic line-work is vector. Clean split.

**Refine, don't restructure:** tune wording against whichever model is chosen, but keep the three-block structure — fixed IDENTITY + fixed STYLE + variable POSE is the mechanism that prevents identity drift.

**What to avoid:**
- Generic illustration libraries — no Storyset, unDraw, Notion-style isometric. The brief names these explicitly.
- Photoreal AI rendering of Sofia — stays illustration, always.
- Mixed styles across sections — instant "AI slop" tell. One frame, enforced.
- Letting Sofia drift into mascot territory — she's a *thread, not a mascot*. Never waving at the reader, never a sticker pose, never a logo lockup.
- A second character for WeMatch / the AI — the brief and script both forbid it. The agent is ambient, never personified.

**References to study before generating** (named in the brief — register, not templates to copy): Stripe Press book/chapter illustrations, The New Yorker spot illustrations, and modern studio character work in the vein of Reform Collective / Hellohello. The target is *committed, signature, recognizable* character illustration.

---

## Open items for human review

- Direction B — **confirmed**.
- Production route (AI generation + curation, more figurative) — **confirmed**.
- Hairstyle and wardrobe — **locked by the designer** (above). React if either reads wrong, but they are decided, not open questions.
- **Validation gate — PASSED.** All six assets (identity + five states) generated and reviewed. The character is consistent across every state — hairstyle, wardrobe, colouring, style all hold — and reads at expert quality. Production route confirmed by evidence.
- **Format decision — raster, not SVG** (see Step 3 above). Logged as a conscious, reasoned deviation from the brief's literal "SVG or SVG-derived" text, to be ratified by the human at the Checkpoint 5 Phase 1 review.
- **Minor curation notes for the asset pass:** (1) `sofia-surprised` renders the phone screen as a hard red rectangle and her expression reads closer to neutral than surprised — worth a touch-up or a re-roll of that one state. (2) `sofia-connected`'s phone glow is faint/ambiguous at her side — fine, but check it composites well. Neither blocks Stage 3.
