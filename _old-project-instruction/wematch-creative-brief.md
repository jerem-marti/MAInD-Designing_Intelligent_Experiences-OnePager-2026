# WeMatch — One-Pager Creative Brief (v2)

> **What this document is:** the operating frame for the WeMatch one-pager. Register, voice, visual feel, anti-patterns, production constraints, references.
>
> **What this document is not:** a content script. Section-by-section content lives in `wematch-one-pager-script.md`. Read this brief first, then the script.
>
> **How constraints are marked.**
> - **MUST** — non-negotiable. Deviating breaks the page.
> - **SHOULD** — strong default. Deviate only with explicit reason.
> - **CONSIDER** — option worth thinking about. Not required.
>
> **Changes from v1.**
> - **Page language: English only.** Italian Trustpilot originals stay in the script for context, but the rendered page displays the English pull-quotes only.
> - **Typography: WeRoad family alignment.** Inter and General Sans recommended (was previously discouraged).
> - **Imagery: AI imagery permitted at expert quality.** SVG character for Sofia surfaced as a strong direction.
> - **Motion: GSAP-permissive.** Concrete list of supported patterns; principle (motion serves story) kept.
> - **Brand relationship: narrowed to Full WeRoad or WeRoad-adjacent.** Standalone dropped.
> - **Production: Nuxt + GSAP recommended.** Astro retained as lighter alternative. Performance micro-targets removed.

---

## The brief in one paragraph

WeMatch is a travel companion that solves a people problem. The one-pager tells that story through Sofia — a competent solo traveler who knows the variable in group travel is the group itself. The page should read like a quiet, confident editorial piece, not a SaaS landing page or a travel ad. It should feel hand-crafted, restrained, and observant — adjacent to WeRoad's brand world but with its own personality. The intelligence in WeMatch is shown, not labeled. The page wins by being something the reader wants to send to a friend, not by converting them.

---

## 1. Voice

### Register

**MUST** be: warm, observant, confident, specific.
**MUST NOT** be: hyped, promotional, jargon-y, performatively quirky.

The voice is closer to longform editorial than to marketing copy. Think travel journalism, not travel brochure. The reader should feel they're being shown something, not sold something.

### Reading level

**SHOULD** target plain English at roughly an 8th-grade reading level. Short sentences. Concrete nouns. Active voice. No words that would feel out of place in a conversation between two people who travel a lot. If a sentence sounds like it belongs in a deck, rewrite it.

### Sample lines — what good sounds like

Tonal references, not copy to lift.

- *"She's been on this app before. She's booked before. She knows what she's looking at."*
- *"WeMatch isn't asking where she wants to go. It's getting to know how she travels."*
- *"A trip that's perfect for Sofia but wrong for the group is not a match."*
- *"Sofia opens WeRoad. WeMatch is already paying attention."*

### Sample lines — what bad sounds like

Failure modes. Recognize and reject.

- ❌ *"Introducing WeMatch — your AI-powered travel companion."*
- ❌ *"Discover personalized matches with our intelligent matching engine."*
- ❌ *"Say goodbye to bad group trips."*
- ❌ *"Powered by advanced behavioral AI."*
- ❌ *"Unlock your perfect travel tribe."*
- ❌ *"Travel smarter. Travel better. Travel WeMatch."*

If you find yourself writing copy that sounds like a launch tweet, rewrite.

### Vocabulary to avoid

**MUST NOT** use, anywhere on the page:
- *AI-powered, intelligent, smart, powered by*
- *Revolutionary, game-changing, disrupting, redefining*
- *Tribe, fam, squad, your people* (as a label — "your people" is fine in the closing line because it's organic to the argument)
- *Unlock, discover, elevate, transform*
- *Seamless, frictionless, effortless*

**SHOULD** avoid:
- *Algorithm, matching engine, neural network* (the intelligence is shown through behavior, never named as a system)
- *Personalized, tailored, customized* (these are tells that the writer is pitching, not narrating)
- *Solution, platform, ecosystem*

### Page language

The page renders in **English only**. The two Trustpilot reviews in section 02 use the English pull-quotes recommended in the script. The Italian originals are preserved in the script for context and source verification but do not appear on the rendered page. Trustpilot attribution stays visible (reviewer name, star rating, source).

---

## 2. Visual register

### Feel

The page **SHOULD** feel:
- Editorial, not promotional
- Restrained, not exuberant
- Considered, not improvised
- Human, not technological
- Travel, not SaaS

Closer to a thoughtfully designed travel feature than a typical tech startup landing page. Generous whitespace. Confident typography. Imagery that earns its place. Color used sparingly and deliberately.

### Typography

**SHOULD** stay in WeRoad's typographic family for brand coherence. Two viable choices:

- **Inter** — already used in the WeRoad presentation work. Clean, neutral, broadly readable. Safe default for body and UI.
- **General Sans** — sister sans with more character than Inter. Stronger candidate for headlines and large-type moments.

**CONSIDER** pairing them: General Sans for display, Inter for body. Or using General Sans alone (it handles both registers).

**SHOULD** use strong typographic hierarchy. On a page this restrained, type carries more weight than imagery. Big type for moments that need to land (Hook, Section 03 opening, Section 04 closing line); generous body sizes (17–19px on desktop minimum); deliberate line-height (1.4–1.6 for body, tighter for display).

**MUST NOT** use more than two typefaces. Single-family is fine and often stronger.

### Imagery

The page's visual identity will be shaped largely by how imagery is handled. Three credible directions, none mandated:

**Direction A — Photography.**
Real, candid, slightly imperfect. The "documentary travel" register, not the "travel brand stock" register. Hard to source well; easy to source badly. If photography is used, **MUST** avoid: posed groups laughing at the camera, sunset silhouettes with arms outstretched, drone shots of generic landmarks, anything that looks like a Booking.com hero.

**Direction B — Illustration (Sofia as a character).**
A signature element. Sofia appears as a small character mark across the page — scrolling Trustpilot in section 02, opening WeRoad in 03, on the trip in the transition, writing in 04. The character carries the emotional thread visually. **CONSIDER** this as the strongest direction for the page — it solves the casting problem (no real face limits reader projection), gives the page a recognizable signature, and lets Sofia flex states across the narrative.

The character **SHOULD** be:
- SVG or SVG-derived (scalable, performant, hand-editable)
- Stylistically committed — line work, flat color, semi-figurative, abstract — but consistent throughout
- Capable of flexing emotional states (anxious → curious → settled) without changing identity
- Distinct from generic illustration libraries (no Storyset, no unDraw, no Notion-style isometric)

**Direction C — Editorial illustration / collage / texture.**
No character; the page uses considered illustration, texture, photographic detail (a hand, a coffee cup, a passport stamp — fragments rather than scenes), or print-derived collage. Editorially mature, harder to execute, can be exceptional.

### On AI-generated imagery

AI-generated imagery is permitted **at expert quality**. The discriminator is not the tool, it's the style discipline:

- **MUST** commit to a single visual frame across the page. One model, one prompt family, one post-processing approach. Mixed styles read as AI slop instantly.
- **MUST** post-process or curate. Raw AI output has tells (mesh gradients, plastic skin, anatomical errors, "Discover the future" aesthetic). Edited and curated output does not.
- **MUST NOT** use AI imagery as filler. Every image earns its placement, AI-generated or not.
- **SHOULD** consider AI-assisted illustration over AI-photography. Illustration registers as deliberate stylization; AI photography registers as fake unless extremely well done.
- **CONSIDER** AI as the means of producing the Sofia character (Direction B) — this is a legitimate craft choice in 2026, provided the style is committed and consistent.

If the team isn't confident in expert-quality AI handling, **SHOULD** prefer Direction C (illustration / texture) or no imagery at all in sections where good imagery isn't achievable. Less imagery is always better than worse imagery.

### Color

**SHOULD** be sparing. A neutral base (off-white, warm cream, or near-black) with one or two accent colors. WeRoad's red is the natural primary accent — used as accent moments, not page-wide flooding. **MUST** avoid: blue-purple AI gradients, neon, anything that telegraphs "tech product."

### Composition

**SHOULD** lean to asymmetry and editorial composition over centered SaaS layouts. Hangers, ragged margins, type that sits where the eye wants it rather than where the grid puts it. Generous negative space. Section 01 (Hook) **SHOULD** sit in dramatic whitespace — small line in a big empty field, not a packed hero.

---

## 3. Motion

### Principle

Motion **MUST** serve the story or the user's reading experience. Motion for its own sake reads as portfolio-piece insecurity.

### Stack

**SHOULD** use **GSAP + ScrollTrigger** as the motion library. Industry-standard for editorial-grade scroll-driven motion, well-documented, performance-conscious, plays well with any frontend stack. CSS-only motion is fine for small touches (hovers, fades); GSAP handles everything more ambitious.

### Patterns that fit the register

These are credible directions, all GSAP-feasible:

- **Type reveals on scroll.** Lines or words fading in or sliding into place as they enter the viewport. Works especially well for Hook, section transitions, and the Journey opening beats.
- **Sticky-text + changing visual.** In section 03, the narration text pins on one side while the visual changes through 3a → 3b → 3c (NYT-style). The strongest scrolly pattern for the Journey section.
- **Section 02 review reveal.** The two Trustpilot cards animate in with a deliberate cadence — positive first, negative second, contrast lands.
- **Section 3b re-ranking.** The trip cards visibly re-rank when WeMatch's matching kicks in. This is the page's most "wow" moment if executed well.
- **Sofia character motion.** If using Direction B for imagery, Sofia's character can shift between sections — subtle state changes (posture, expression, position) tied to scroll. Used sparingly, this carries the emotional thread.
- **Parallax — restrained.** Background images moving at 0.3–0.5x the foreground is fine if used quietly. Aggressive parallax that fights the user's scroll is not.
- **Number / score counters.** The 87% match score can count up on reveal. Small touch, adds vitality.
- **SVG path drawing.** Map lines, the connecting flow between profile → match → group, illustrated as drawn-on-scroll. Often beautiful.

### Patterns to avoid

- **Scroll-jacking.** Hijacking the user's scroll for cinematic effect. Breaks the reading contract, reads as designer ego.
- **Looping background animations.** Continuous motion competing with text for attention.
- **Heavy entrance animations on every element.** Every paragraph individually fading in becomes tedious by the second section.
- **Motion that delays content.** If the user has to wait for an animation to finish before they can read or interact, the motion is wrong.
- **Motion as the message.** If the page would lose its meaning when motion is disabled, the message lives in the wrong layer.

### Reduced motion

**MUST** respect `prefers-reduced-motion`. Users with motion sensitivity see a static or near-static version. This is craft, not compliance.

### Performance

GSAP scrolltrigger setups can get heavy. **SHOULD** keep the page snappy on mid-tier mobile devices. If a specific animation tanks performance, simplify it — the story comes first.

---

## 4. Brand relationship — WeMatch and WeRoad

Two viable positions:

- **Full WeRoad.** WeMatch uses WeRoad's existing brand identity directly — red, typography, photography style, voice conventions. Reads as "WeRoad's new feature shipping."
- **WeRoad-adjacent.** WeMatch borrows signals from WeRoad (red as accent, Inter / General Sans typography, family-feeling visual treatment) but develops its own personality — slightly more thoughtful, less travel-influencer, more editorial. Reads as "WeRoad's next chapter."

**SHOULD** default to **WeRoad-adjacent.** Reasons:
- A speculative future service feels credible when it sits next to its parent brand without being absorbed by it.
- Full WeRoad inheritance flattens the page into "another WeRoad marketing page" and erodes the design discipline of the project.
- WeRoad-adjacent demonstrates that the team understands what WeRoad *is* and what WeMatch *adds* — visible craft.

**Full WeRoad** is a credible alternative if the team prefers to demonstrate they can work cleanly within an existing brand system rather than evolve one. Both choices defensible.

### WeRoad assets

**SHOULD NOT** lift WeRoad's logo as WeMatch's primary brand mark. The page is WeMatch's, with WeRoad credited (footer, attribution area, "From WeRoad" at small scale).

---

## 5. Anti-patterns — things that will kill the page

These are concrete failure modes. If any of them appear, the page has lost the register.

### Structural anti-patterns

- **The three-column feature grid.** Section 03's three moments must not become a feature grid (icon + bold word + supporting sentence). The moments are scenes; if they read as features, the page has reverted to SaaS.
- **The metric strip.** No "1,660 travelers · 60 destinations · 4.8★ rating" counter row. Metric stripes are filler — they signal the writer didn't know what else to say. The page argues with story, not numbers.
- **The logo wall.** No "As featured in" or "Trusted by" logo rows. WeMatch isn't featured anywhere — it's a project. Fabricated logos would be both dishonest and visually corrupting.
- **The press-release lede.** "Introducing WeMatch — a new way to travel" is the death of the hook.
- **The hero with split image and CTA.** The standard SaaS hero (left text + right product screenshot + signup form) is exactly what the page must not look like.

### Tonal anti-patterns

- **Promise stacking.** Lists like "smart, intuitive, personal" are tonal poison. One clear claim beats three vague ones.
- **The reassurance pile.** "Safe. Private. Trusted." stripes are filler. The privacy commitment lives as a craft caption inside section 03 — once, quietly. Not as a section header.
- **The cute name for the AI.** WeMatch is the service. There is no anthropomorphic mascot, no first-name AI ("Hi, I'm Mia, your travel companion"), no robot avatar. The companion framing is in the behavior, not the personification. **Note:** a Sofia character (Direction B above) is the *user's* representation, not the AI's. Different role, different rules.
- **The hero quote that says nothing.** "The future of travel is here" floating above an empty composition is worse than no quote at all.

### Visual anti-patterns

- **AI gradient hero.** Mesh gradients in blue/purple read as "generic AI startup, 2023." Avoid.
- **Floating UI screenshots on tilted phones.** The SaaS hero cliché. Trip cards can appear in the page, but composed editorially, not floated on a 3D-tilted phone mockup.
- **Emoji-as-icon.** Using emojis as section bullets (🧳 🗺️ ✨) reads as casual and undercuts the editorial register.
- **AI slop imagery.** Raw, unprocessed AI output without style discipline. (See section 2 — AI imagery is permitted at expert quality, refused at default quality.)
- **The mid-page CTA scattering.** One CTA, at the end. Multiple CTAs scattered through the page signal a writer who didn't trust the story to do the work.

---

## 6. Scrollytelling craft

Scrollytelling is its own discipline. The brief here is *use it where it earns its place* — not "only in the Journey section." Strong scroll moments elsewhere are welcome.

### Principles

- **MUST** degrade gracefully. Every scene works as a static composition if scroll behavior fails, the device is limited, or JavaScript is disabled.
- **SHOULD** treat the Journey section (03) as the place where scrollytelling does the heaviest narrative work. Other sections (02 review reveal, 04 closing review reveal) can use scroll triggers more lightly.
- **SHOULD** prioritize legibility over choreography. If a scroll behavior makes content harder to read or interact with, simplify.

### Patterns worth considering for section 03

- **Sticky text + changing visuals.** Sofia's narration sticks on the left; the right side cycles through the three moments. Strong on desktop, requires care on mobile.
- **Step-scroll waypoints.** The viewport snaps to each moment with a moment of pause. Strong rhythm but can feel constraining.
- **Continuous reveal.** Each moment appears as the user scrolls past, no snapping. Most graceful, least dramatic.
- **Horizontal pivot.** The page scrolls down to section 03, then pivots horizontally through the three moments. Striking but breaks expectations and is mobile-unfriendly.

**SHOULD** default to **sticky text + changing visuals** for section 03 — the strongest pattern for narrating a process. **CONSIDER continuous reveal** if production capacity is limited.

### Mobile

**MUST** work on a 375px viewport. The Journey section will stack vertically — design for that as the primary case, not as the fallback. Captions must visually attach to their moment (not orphan as floating sentences). Type must remain readable without zooming.

Sticky-text patterns often need a different mobile treatment — stacked, with visual transitions tied to scroll position rather than sticking elements. Plan this from the start, not as a port.

---

## 7. Production

### Stack — recommended

**Nuxt 3 (static generation mode) + GSAP + ScrollTrigger.**

- **Nuxt 3** in static mode (`nuxi generate`). The team knows Vue, which matters more than picking the theoretically lightest stack. Nuxt is slight overhead for a one-pager but offers component reuse, modern DX, and trivial static deploy. Image optimization built in.
- **GSAP + ScrollTrigger** for all scroll-driven motion. Industry standard, stack-agnostic, well-documented. Works inside Nuxt without friction.
- **VueUse** (optional) for utility composables — `useScroll`, `useElementVisibility`, etc. Good companion to GSAP.

### Alternative stacks

- **Astro.** Lighter weight than Nuxt for a static one-pager. Excellent if the team wants to try something new — Vue components run natively in Astro via the Vue integration. Astro's "islands" model fits a one-pager well. Worth considering, not required.
- **Vanilla HTML/CSS/JS.** Viable for a true minimal build. Works fine with GSAP. Skip if the team prefers component structure.
- **Framer or Webflow.** Visual builders. Faster for non-developers but limit custom scroll work. **SHOULD NOT** use if the team has any frontend developer capacity — the constraints will frustrate.

### Hosting

**SHOULD** use Vercel, Netlify, or Cloudflare Pages. All three offer free tiers, custom domains, and instant deploys from a Git repo. **CONSIDER** a custom subdomain (e.g. `wematch.yourdomain.com`) — looks more polished than a generic `*.vercel.app` URL when sharing.

### Performance

**SHOULD** keep the page snappy on mid-tier mobile. Specific moves:

- Modern image formats (WebP, AVIF) with proper sizing
- Fonts loaded efficiently (preload, font-display: swap, subset if practical)
- GSAP timelines kept tidy — don't animate hundreds of elements at once
- Lazy-load heavy assets below the fold

No hard kB or Lighthouse target. Hit the principles, judge by feel on a real phone.

### Accessibility

**MUST**:
- Semantic HTML (`<article>`, `<section>`, `<h1>`–`<h3>` used correctly)
- Alt text on every meaningful image
- WCAG AA color contrast at minimum
- Keyboard-navigable end to end
- `prefers-reduced-motion` respected

These are not optional. The page is publicly shareable; it needs to work for everyone.

### Browser support

**SHOULD** target current Chrome, Safari, Firefox, Edge. **CONSIDER** safe degradation one version back. **MUST NOT** spend time on Internet Explorer or older WebKit.

---

## 8. References — what to study before designing

Register references, not templates to copy.

### Tone & editorial voice

- **The New York Times Magazine** — longform feature pages. Restraint, breath, imagery earning placement.
- **The Atlantic** — long-form articles. Editorial register without marketing tonal tells.
- **Patagonia — *The Cleanest Line* blog.** Brand storytelling without brand voice clichés.

### Scrollytelling craft

- **The Pudding** ([pudding.cool](https://pudding.cool)) — gold standard for editorial scrollytelling. Notice how their best pieces use scroll only where it serves the story.
- **NYT — *The Year in Visual Stories.*** Annual roundups of NYT scrollytelling. Study the restraint.
- **Polygon — long-form game features** (e.g. *Death Stranding*, *The Witness* features). Editorial scrollytelling in a non-news context.
- **GSAP showcase** ([gsap.com/showcase](https://gsap.com/showcase)) — for technique reference, not aesthetic. Pick examples where motion clearly serves story.

### One-page service / product pages

- **Linear** ([linear.app](https://linear.app)) — confident, restrained, type-led product marketing.
- **The Browser Company / Arc** ([thebrowser.company](https://thebrowser.company)) — story-led product pages with personality.
- **Are.na** ([are.na](https://are.na)) — editorial voice, restrained visuals.

### Character-led illustration

If pursuing Direction B (Sofia as a character):
- **Stripe Press** book covers and chapter illustrations — committed, signature, recognizable.
- **The New Yorker** spot illustrations — restrained character work.
- **Reform Collective**, **Hellohello**, or similar studio portfolios — modern character work used in product pages.

### Travel-adjacent inspiration

- **Airbnb's editorial work** — when they're being thoughtful, not when they're pitching.
- **Hidden Worlds, Atlas Obscura long-reads** — travel writing that respects the reader.

### What NOT to study (anti-references)

- Generic Y Combinator startup landing pages.
- AI startup launch pages from 2023–2024 (gradient hero + "Introducing X" + waitlist).
- Booking.com, Expedia, or any OTA aesthetic.
- WeRoad's current site as a *template* (useful for brand color and the Italian travel category, but the WeMatch page should not look like a WeRoad subpage).

---

## 9. Locked vs. free — quick reference

| Element | Status | Notes |
|---|---|---|
| Narrative arc (Hook → Truth → Journey → Transition → After → Invitation) | **LOCKED** | Cannot be reordered. |
| Sofia's anchoring detail (been on both sides of the coin) | **LOCKED** | Voice across the page. |
| Trustpilot reviews (Marcello 5★, FZ 1★) — English pull-quotes verbatim | **LOCKED** | No paraphrasing. |
| Order of Section 03 moments (3a → 3b → 3c) | **LOCKED** | Emotional arc breaks if reordered. |
| Section 03 opening beat (reframe + Sofia opens WeRoad) | **LOCKED** | Non-negotiable structurally. |
| Page language | **LOCKED** | English only. |
| Typography family (Inter / General Sans) | **CHOOSE** | Within WeRoad family alignment. |
| The Hook line | **CHOOSE** | One of four variants in script, or refine. |
| Final copy in every section | **FREE** | Designer writes, script gives substance. |
| Visual identity, color, imagery direction | **FREE** | Within the register of this brief. |
| Imagery approach (photo / character / editorial) | **CHOOSE** | Direction B (character) recommended but not required. |
| Use of AI-generated imagery | **CHOOSE** | Permitted at expert quality, refused at default quality. |
| Scroll choreography | **FREE** | Within the scrollytelling principles above. |
| Stack choice (Nuxt / Astro / vanilla) | **CHOOSE** | Nuxt recommended for the team's existing skillset. |
| Motion library | **CHOOSE** | GSAP + ScrollTrigger recommended. |
| Sofia's visual depiction | **FREE** | Or no depiction at all. |
| Brand mark for WeMatch | **FREE** | Designer can develop one or work in pure type. |
| WeRoad relationship | **CHOOSE** | WeRoad-adjacent (default) or Full WeRoad. |

---

## 10. The brief's final ask

The page should make a reader who never heard of WeMatch want to send the link to a friend who travels solo. Not because they were pitched. Because they were told a story that lingered.

If a section feels like marketing, rewrite. If a visual feels like a stock asset, replace. If a scroll behavior feels like a demo, remove. The brief's whole job is to give you the permission to keep cutting back to the thing that matters: a quiet, confident story about why group travel is a people problem, and what changes when the people are right.

The script is the substance. This brief is the air around it. Both are deliverables to you; the work is yours.
