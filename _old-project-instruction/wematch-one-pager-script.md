# WeMatch — One-Pager Content Script (v5)

> **What this document is:** the narrative and substantive content for the WeMatch one-pager, designed as a scrollytelling experience. Purpose, message, and must-include content per section.
>
> **What this document is not:** a design spec, a copy deck, or a layout. Final wording, visual hierarchy, imagery, motion, scroll choreography, and structure are the designer's territory. This script defines *what must be communicated and felt* — not how it should look, sound, or move.
>
> **Changes from v4.**
> - **Section 02 reviews updated.** Previous pair (Giulia / Flavia) replaced with a sharper, polarized pair (Marcello / FZ) carried over from the project's earlier presentation work. Rationale: short + opposite + same variable does the visual-contrast work of section 02 better than longer, more nuanced quotes. Both reviews verified in the source CSV.

---

## Context for the designer

**Audience.** Course examiners evaluating a "compelling story of a unique intelligent service." Secondary audience: design and product readers who may use this as portfolio evidence later. Primarily a service story; craft visible underneath.

**Action after reading.** Reader thinks: *"I want to try this — or at least understand more."* Closes a narrative loop; doesn't pitch.

**Core message.** Group travel isn't a destination problem. It's a people problem. WeMatch is the first travel companion built around that truth.

**Protagonist — Sofia.** Late 20s, solo traveler. **The locked anchoring detail:**

> Sofia has done a WeRoad-style group trip before. Maybe two. One was magical — she still messages someone from it. One was forgettable. She can't fully explain the difference, but she knows it wasn't the destination or the itinerary. It was the group. That's why she's hesitating tonight: she's been on both sides of the coin.

This detail does not need to be stated explicitly in copy. It's the underlying truth shaping her voice across the page. She's not a worried first-timer — she's a competent solo traveler with a specific, earned anxiety. She knows what the variable is. She just can't predict it from a search page.

**Sofia's emotional arc.** Hesitating (02) → reframed (03 opening) → curious (3a) → surprised (3b) → understood (3c) → connected (transition) → confirmed (04). Note: "confirmed" not "transformed" — she already knew the variable; this time the system handled it for her.

**Narrative spine.** Hook → Truth → Journey → On the trip → After → Invitation.

**Tone.** Story, not pitch. Warm, observant, confident. Never "Introducing…" Never "AI-powered." Never feature lists as a hero element. The reader should feel pulled, not sold.

**On structure.** Scrollytelling experience, not a print fold sequence. Five narrative sections plus one transition pulse. Section 03 (Journey) is the longest and most layered. Others are tighter. **Pacing is part of the story.** Whitespace, scroll velocity, and reveal timing are content-bearing.

**On production reality.** HTML build for hostability. **Where scrollytelling is suggested, treat it as preferable but not mandatory.** Every scene must read as a coherent flow if rendered statically. Graceful degradation is a design constraint, not an afterthought.

**On "must-include."** The content listed is the substance of the story. The designer writes the final copy and decides the form. Proposed phrases, Hook variants, and the sample closing review are starting points and references — refine, sharpen, or replace as long as the *message to respect* survives. The two Trustpilot reviews are real source material to be used as-is — see section 02.

---

## SECTION 01 — Hook

**Purpose.** Stop the scroll in under three seconds. Reframe the entire category in one line.

**Message to respect.** Group travel is a people problem, not a destination problem.

**Scan-mode lead.** The hook line itself, full-bleed. Nothing else on screen competing with it.

**Must-include content.** One declarative, counterintuitive line that reframes group travel.

**Hook variants — pick one, refine, or write a fifth in the same spirit.**

1. **Counterintuitive (original, wittiest).** *"When you book a group trip, you're not choosing a destination. You're choosing roommates for ten days."*
   - *Risk:* "roommates" is a partial misread — group trips don't always mean shared rooms. Strong but semantically loose. Adjust if it stings.
2. **Plain (direct, safest).** *"The hardest part of group travel isn't where you go. It's who you go with."*
3. **Lyrical (stakes-forward).** *"Ten days. Strangers at the start. A trip you'll either love or regret."*
4. **Question (boldest reframe).** *"What if the group was the trip?"*

**Free zone.** Final phrasing, rhythm, length. Whether the brand mark appears here or later. Type-only, image-only, or hybrid. Scroll behavior on the first beat.

---

## SECTION 02 — Truth (Sofia and the reviews)

**Purpose.** Move from category insight to human recognition. Two real Trustpilot voices confirm the truth empirically — and the contrast between them does the argument visually, in seconds.

**Message to respect.** The group, not the destination, makes or breaks a group trip — and right now it's a coin flip.

**Scan-mode lead.** Two contrasting review cards (5★ / 1★), with Sofia's voice as the anchor between or beside them. The contrast must be visible at a glance — opposite outcomes, same variable.

**Selection strategy.** These reviews are intentionally polarized — 5★ vs 1★, both short, both centered on the people. The page does not need the reviewers to *state the argument*; the contrast between them *makes* the argument. Short + opposite + same variable beats long + articulate for scan-mode work.

**Must-include content.**

*Sofia introduction.*
- Sofia, late 20s, solo, scrolling WeRoad late at night.
- She's been on this app before. She's booked before. She knows what she's looking at.
- The question she's holding: not "where" but "who." She's read these reviews many times. She knows which kind of trip she got last time. She doesn't know which kind she'll get tonight.

*Two Trustpilot reviews — selected and verified from the WeRoad CSV (1660 reviews, all Italian).*

---

### Review A — Positive (Marcello · 5★ · Morocco 360°)

**Why selected.** The 5★ pull-quote is a ten-word arc compression — solo → people. *"I left alone. I came back with people."* That's the entire WeRoad value proposition in one sentence, said by a real traveler. Pairs sharply against the 1★.

**Recommended pull-quote (Italian):**
> *"Sono partito da solo, senza conoscere nessuno, e sono tornato con un bagaglio di esperienze e di persone che difficilmente dimenticherò."*

**Recommended pull-quote (English):**
> *"I left alone, without knowing anyone. I came back with a wealth of experiences and people I'll hardly forget."*

**Attribution:** *Marcello · Trustpilot ★★★★★ · Morocco*

**Full original (Italian) — for context, not for the page:**
> *"Sono partito da solo, senza conoscere nessuno, e sono tornato con un bagaglio di esperienze e di persone che difficilmente dimenticherò. Il Marocco 360° è un viaggio che mantiene quello che promette: ritmi sostenuti, cambi continui di scenario e una varietà di esperienze che difficilmente si riesce a condensare in nove giorni. […] Il gruppo era composto da persone con la stessa voglia di viaggiare, che avevano scelto WeRoad proprio perché non sempre si ha un gruppo di amici disponibile per un'avventura del genere. Quel mix crea una dinamica particolare: ci si ritrova subito su una lunghezza d'onda comune."*

The full review (above, abridged) contains a line about WeRoad user psychology that the designer may find useful as supplementary copy elsewhere on the page or in supporting materials: *people choose WeRoad precisely because they don't always have a group of friends available for an adventure.* This is the real category insight — and it makes Marcello's transformation land harder.

---

### Review B — Negative (FZ · 1★ · China, July 2025)

**Why selected.** The 1★ pull-quote is visceral — *toxic dynamics from day two*. No ambiguity about what the variable is. The bitterness reads as authentic; the second-day timing reads as specific. Pairs sharply against the 5★.

**Recommended pull-quote (Italian):**
> *"Ho assistito a dinamiche tossiche all'interno del gruppo che ho dovuto sopportare sin dal secondo giorno di viaggio."*

**Recommended pull-quote (English):**
> *"I witnessed toxic dynamics within the group that I had to endure from the second day of the trip."*

**Attribution:** *FZ · Trustpilot ★☆☆☆☆ · China*

**Editorial note on source.** FZ's original review is a multi-part complaint that also covers coordinator decisions and category-level skepticism ("travel alone is better"). The recommended pull-quote isolates the group-dynamics sentence — which is a real and verbatim part of the review. This is standard editorial pull-quote practice. The omission is transparent and the quoted sentence is not distorted. If the page might be audited at source, the producer should be ready to defend the pull as a faithful extract, not a misrepresentation.

**Note on "dinamiche tossiche."** In Italian, this typically signals bad chemistry, cliques, power plays — not literal abuse. The WeMatch fit argument holds: better matching → fewer toxic dynamics.

---

*Closing beat for the section.*
- A line or signal — short — that says: *the group is the variable. Today, it's a coin flip.* Or sharper, paired to Sofia's locked detail: *she's flipped this coin before. Tonight, she doesn't want to flip it again.*

**Free zone.** Whether to display Italian originals, English translations, or both. Whether reviews appear side-by-side, stacked, scroll-revealed, or styled as raw Trustpilot cards. Whether Trustpilot is named/credited or visually implied. Star ratings must be visible somehow (visible stars, "5★ / 1★", or styling that reads as positive/negative without text) — the rating contrast is part of the argument.

**Attribution requirement.** Each review must credit Trustpilot and use the reviewer's first name or initials only (Marcello / FZ — both already in that form in the source). Display the star rating. Date is optional.

**Do not paraphrase.** Use the pull-quotes verbatim (Italian, English, or both). If translation is used, the English versions above are the recommended translations — refine only if a more natural rendering is found.

---

## SECTION 03 — The Journey (extended scrollytelling section)

**Purpose.** Reframe the booking logic, then walk Sofia through WeMatch in motion. Longest, densest section of the page. Three scene-moments preceded by a two-beat opening: the **reframe** (group-first, not trip-first), then **Sofia meets WeMatch in the scene**.

**Message to respect.** The reader's mental model of group travel flips here, and WeMatch shows what that flip looks like in practice. WeMatch is not a chatbot — it's an ambient companion that learns from how Sofia talks *and* how she moves, and turns that into a search experience built around her people, not her keywords.

**Scan-mode lead.** The match score artifact — e.g., **87% · culture-driven · slow pace · mid-thirties mix** — appearing on a re-ranked WeRoad page. The scanner should see *trip cards with people-fit scores* and understand instantly that this isn't normal search.

---

### Opening beat — the reframe + the entrance *(non-negotiable)*

This section opens with a one-two:

**Beat 1 — the reframe.** A clean before/after of the booking logic:
- **Today:** pick a trip → hope the group works.
- **What if:** find your group → the right trips emerge.
- Stated plainly: **group-first, not trip-first**.

**Beat 2 — Sofia meets WeMatch.** A short emotional pivot — Sofia opens WeRoad, but something feels different. WeMatch is named here for the first time. Proposed shape: *"Sofia opens WeRoad. WeMatch is already paying attention."* The line is a starting point; the function is to introduce the brand inside the scene, not before it.

Two breaths, one opener. The reader gets the insight, then meets WeMatch. Then the three moments begin.

---

### Moment 3a — It reads her *(Explore + Interpret)*

**Purpose.** Show that WeMatch learns from two converging signals: what Sofia *says* and what she *does*. Counter the "it's a chatbot" misread.

**Must-include content.**
- Sofia talks to WeMatch (conversation input). The exchange feels warm, curious, observational — not transactional. WeMatch isn't asking *where do you want to go*. It's getting to know *how she travels*.
- Sofia also just… uses the site (behavioral input). She scrolls. She lingers on certain trips, skips others. She saves a Patagonia itinerary. WeMatch reads all of it.
- The two signals converge into a behavioral profile. **Name three or four dimensions evocatively, then signal there are eight in total** — *"WeMatch reads how she travels across eight dimensions — social energy, pace, planning style, conflict style, and four more."*
- Sofia's emotional beat: she didn't realize how much she was being heard.

**Craft caption (in-line, low-key).** Privacy by design — *"She's never asked to fill out a form. WeMatch reads what she shares, nothing more."*

**Free zone.** How the dual input is rendered. Whether the conversation is a faux chat, a quote, a voice-over fragment. Whether behavioral signal is shown as a visual (click trails, dwell pulses) or just described.

---

### Moment 3b — It matches her *(Curate)*

**Purpose.** Show the core mechanic: WeMatch scores *the group*, not just the trip. The match is people-fit, computed.

**Must-include content.**
- WeRoad's search page — the same page Sofia would normally use — is now re-ranked by group fit.
- Trip cards carry a match score (e.g. **87%**) and a one-line reason. The reason is plain language: *"culture-driven, slow pace, mid-thirties mix."*
- The principle stated plainly: **group fit is a computation, not a conversation.** No follow-up questionnaire. The match just appears.
- Sofia's emotional beat: surprise. She's not browsing trips anymore. She's seeing *people she'd fit with*, with trips attached.

**Craft caption (in-line, low-key).** Group-first scoring — *"A trip that's perfect for Sofia but wrong for the group is not a match."*

**Free zone.** How match cards are rendered, what numbers appear, how the re-ranking is visualized (does the page rearrange on scroll? a before/after?). Whether the score is foregrounded or quiet.

---

### Moment 3c — It tells her why *(Explain)*

**Purpose.** Close the trust gap. WeMatch shows its work — and listens back when she disagrees.

**Must-include content — render this as a scene, not as feature description.**

Sofia taps the 87% match. A small panel opens with the *why*:
- *"You both move slow."*
- *"You both choose depth over checklist."*
- *"The group skews mid-thirties — you're on the younger side."*

She reads it. Something rubs her about *"younger side"* — she doesn't mind older travelers, but she doesn't want to feel like a kid either. She types one line back: *"Adjust — age doesn't matter, depth does."*

WeMatch absorbs. The match list below shifts. The next ranking reflects what she just said.

Her emotional beat: not just matched. Listened to.

**Craft caption (in-line, low-key).** Transparency by design — *"Every match comes with a reason. She can always ask why — or push back."*

**Free zone.** How the panel is rendered. Whether her correction is shown as typed text, voice, or implied. Whether the list visibly re-ranks in the scene or the change is suggested. Designer can write a different scene with the same shape — *match → friction point → her correction → system adjusts* — if the proposed one doesn't land.

---

### Designer notes for Section 03

- The three moments must be **distinguishable** as scroll beats. The reader should feel three reveals, not one long block.
- The **opening beat** (reframe + Sofia opens WeRoad / WeMatch is paying attention) is non-negotiable. Without it, the section reads as an explainer instead of a scene with an insight.
- The three **craft captions** are valued but cuttable. If forced to cut, cut in this order: 3c first, 3b second, 3a last (privacy is the most defensible to keep).
- **Mobile pacing.** On a 375px viewport, the three moments will stack vertically and risk reading as one long undifferentiated scroll. Use clear visual breaks between moments (whitespace, a transitional element, a punctuating phrase). Craft captions should not orphan as floating sentences — they need to visually attach to their moment.
- **If scrollytelling can't be built reliably,** the section should render as three sequential static scenes with clear visual differentiation. The story must hold either way.
- Do not turn this into a feature grid. The moments must read as *Sofia experiencing the system*, not as *the system explained*.

---

## TRANSITION — On the trip *(Check-in)*

**Purpose.** Bridge the journey (booking) and the after (return). Show that WeMatch doesn't disappear at checkout — it stays with Sofia. Single narrative pulse, not a full section.

**Message to respect.** WeMatch is a companion across the whole trip, not just before it.

**Scan-mode lead.** A single image, line, or notification fragment that signals "time has passed, Sofia is on the trip."

**Must-include content.**
- A brief beat: Sofia is on the trip. WeMatch checks in — gently, once. How's the group? Energy holding up?
- Her answers feed the system. The loop is alive.
- One image or line is enough. Connective tissue, not a chapter.

**Free zone.** Single line, small photograph, notification mock, parallax moment, animated transition. Whether it has a visual identity at all or simply marks time passing.

---

## SECTION 04 — The After (Sofia's voice)

**Purpose.** Emotional close. Show what changes when the matching is right — through Sofia's own words, not through narration about her. Because Sofia has *been on both sides of the coin*, this isn't a transformation — it's a confirmation. She finally got the group right. She knows the difference because she's lived both.

**Message to respect.** When the group is right, the trip is unforgettable — and someone who's done this before recognizes the difference instantly.

**Scan-mode lead.** A review card — visually rhyming with the Trustpilot cards from section 02 — but signed *Sofia*. The visual rhyme is the entire argument: she scrolled through Marcello and FZ at the start. She's writing one now.

**Must-include content.**

*Sofia's words, in the same visual shape as the Trustpilot reviews from section 02.*
- Her review is the moment. The reader reads it the way they read the reviews at the top — same convention, same form.
- The text must be **specific** — name a person from the group, name a small moment (a meal, a laugh, a silence). Not "amazing trip!" — a real voice.
- The voice must reflect her locked anchoring detail: she's done this before, she knows the difference. The review carries the quiet certainty of someone who has compared.

*Sample closing review — reference only, do not lift verbatim.*

> *"I've done a few of these now. One was magical. One was just fine. I came back from Portugal a week ago and I already know which one this was. On day two, eating pão com tomate with Marco, I just knew. He taught me to argue properly over dinner. The wine bar in Alfama wasn't on the itinerary. None of the best parts were. This is what it feels like when the group is the right one."*
>
> — Sofia, Trustpilot ★★★★★

This is what "good" looks like at the emotional peak of the page: specific, named, warm, anti-promotional. Leans on Sofia's prior experience without explaining it. Names a person (Marco). Names a moment (arguing over dinner, the wine bar). Closes with quiet recognition.

The visual rhyme with section 02 closes the page's loop: Sofia was scrolling Trustpilot at the start, anxious. She's now one of those voices. The reader sees the system work without being told it worked.

*One quiet system signal, after her words.*
- A single short line. Proposed shape: *"Sofia's profile evolved. WeMatch knows her better now."*
- This is the *only* system reference in the close. It is the payoff for the feedback loop the reader saw in the transition. It is not an explanation.

**What this section must not do.**
- Never label this as a review, feedback, or testimonial. The shape does the work.
- Never show a review-submission interface. No stars, no form, no "rate your trip" UI.
- Never explain the Evolve phase. The one line is the entire allusion.
- Never use the word "transformation." Sofia wasn't transformed; she was confirmed.

**Free zone.** Visual rhyme with section 02 is encouraged but not mandatory — designer can find another way to signal that Sofia is now one of those voices. Whether the system-signal line appears as a caption, a footer, a fade-in, or a parallax fragment.

---

## SECTION 05 — Invitation

**Purpose.** Close the loop. Issue a clear, warm, low-friction next step. Bring the Hook back so the arc closes.

**Message to respect.** This isn't just better matching. It's a new kind of travel — and the way in is simple.

**Scan-mode lead.** The CTA button itself, with a closing line above it that echoes the Hook.

**Must-include content.**
- A closing line that echoes the Hook, answering it. If the Hook reframed the question, the Invitation supplies the answer. Proposed starting point (refine to match the final Hook variant chosen): *"You're not choosing a destination. You're choosing your people. Start with who."*
- A single, clear CTA. The verb matters — favor *"Find your group"* / *"Start with who"* / *"Discover your match"* over generic *"Get started"* / *"Sign up."*
- One short reassurance line that lowers the activation barrier (e.g. *"Five minutes. No commitment."* — refine to match WeRoad's actual onboarding promise).
- Brand sign-off and any necessary attribution (WeRoad parent brand, course context, team credits).

**Free zone.** Whether the CTA is a single button, a chat prompt mock, a phone-number-style input, or a scroll-to-app moment. Whether the closing line is verbatim Hook or paraphrased. Whether this section also serves as the page footer.

---

## Designer notes (overall)

**On naming.** First clear use of **WeMatch** is in the opening beat of section 03 (Beat 2). Earlier sections can hint, but the brand lands at the Journey entrance. The reader meets the *idea* (sections 01–02 + Beat 1 of 03) before the *brand* (Beat 2 of 03).

**On pacing.**
- **Sections 01, 05** = short, punchy. Land in a glance.
- **Transition** = single pulse.
- **Section 02** = medium. Two reviews + Sofia need room to breathe.
- **Section 03** = the longest by far. Two-beat opener + three scene-moments. This is where the reader spends the most time.
- **Section 04** = medium-short. Sofia's words, one quiet signal. Don't over-render.

**On scroll choreography.** Reveal-on-scroll, sticky text, parallax, animation, fade-ins, horizontal pivots — all available, none mandatory. The expectation is that *something* in section 03 differentiates the three moments. **All scrollytelling must degrade gracefully** — every scene must work as a static composition if scroll behavior fails or the device is incapable.

**On Sofia.** Thread, not mascot. Don't over-render. Her locked anchoring detail (been on both sides of the coin) shapes her voice across the page — it does not need to be visually depicted or explained. Designer's call whether she appears as a name, a voice, a quote, or a silhouette.

**On language.** The two Trustpilot reviews are Italian-origin. Display them in Italian, English, or both — designer's call. If the rest of the page is in English, parallel Italian/English presentation can read as authentic ("these are real Italian travelers"). If the page is fully English, use the English pull-quotes alone with a Trustpilot attribution. Don't paraphrase the reviews — use them as-is.

**On reordering.** Sections cannot be reordered. Inside section 03, the order is: Opening (Beat 1 reframe → Beat 2 entrance) → Moment 3a → Moment 3b → Moment 3c. The emotional arc (curious → surprised → understood) breaks if reordered.

**On craft signals.** Dignity / privacy / transparency principles live as captions inside section 03 rather than as a separate proof section. Deliberate trade: better story integrity, slightly quieter craft signal for hiring-panel readers. If you want the craft signal louder, the captions can graduate into a small dedicated "principles" strip between section 03 and the transition — but this risks turning the page into a brochure. Default: keep them as captions.

**On success tests.** A working page passes these:
- A scanner who spends 10 seconds total can answer: *"What problem does this solve?"*
- A scroller who reads in 60 seconds can answer: *"How does it work?"* in one sentence.
- A reader who reads in full can answer: *"Why is this different from regular travel search?"* without using the word AI.
- A reader of any depth should leave wanting to try it, not feeling sold to.

**On what to never do.**
- Never open with "Introducing WeMatch."
- Never list features as a hero element.
- Never use "AI-powered" or "intelligent" as a headline value prop. The intelligence is *in* the story, not labeled.
- Never explain methodology, process, or architecture. Craft shows through restraint, not exposition.
- Never frame Sofia's closing words as a feature, review form, or feedback mechanism.
- Never paraphrase the Trustpilot reviews. Use the pull-quotes verbatim (Italian, English, or both).
