# WeMatch — One-Pager Content Script (v8)

> **What this document is:** the narrative and substantive content for the WeMatch one-pager, designed as a scrollytelling experience. Purpose, message, and must-include content per section.
>
> **What this document is not:** a design spec, a copy deck, or a layout. Final wording, visual hierarchy, imagery, motion, scroll choreography, and structure are the designer's territory.
>
> **Changes from v7.** The Trustpilot statistic in section 02 has been replaced with the **18% trace-back stat** used in the team's presentation: *"When a trip drops to 1, 2, or 3 stars, the group is the most-cited cause. 18% of negative reviews trace back to it."* This is sharper (causation, not just salience), more memorable, and consistent with the presentation — same number, same wording across deliverables. The earlier 44% / 59% mention-rate stat is retired. Methodology reproducible from source CSV.

---

## Context for the designer

**Audience.** Course examiners evaluating a "compelling story of a unique intelligent service." Secondary audience: design and product readers who may use this as portfolio evidence later. Primarily a service story; craft visible underneath.

**Action after reading.** Reader thinks: *"I want to try this."* And then — because the CTA links to a real, working agent — they can. The artifact closes a narrative loop and offers a hands-on payoff. It doesn't pitch.

**Course brief alignment (v7).** The page carries all three storytelling pillars (problem statement, business opportunity, solution) and all four storytelling principles (hook, impact, visual, working). The *"working"* principle is satisfied **outside the page** by the live agent that the CTA links to — the team's actual product deliverable, not a simulation.

**Core message.** Group travel isn't a destination problem. It's a people problem. WeMatch is the first travel companion built around that truth.

**Protagonist — Sofia.** Late 20s, solo traveler. **The locked anchoring detail:**

> Sofia has done a WeRoad-style group trip before. Maybe two. One was magical — she still messages someone from it. One was forgettable. She can't fully explain the difference, but she knows it wasn't the destination or the itinerary. It was the group. That's why she's hesitating tonight: she's been on both sides of the coin.

This detail does not need to be stated explicitly in copy. It's the underlying truth shaping her voice across the page.

**Sofia's emotional arc.** Hesitating (02) → reframed (03 opening) → curious (3a) → surprised (3b) → understood (3c) → connected (transition) → confirmed (04). Note: "confirmed" not "transformed."

**Narrative spine.** Hook → Truth → Journey → On the trip → After → Invitation.

**Tone.** Story, not pitch. Warm, observant, confident. Never "Introducing…" Never "AI-powered." Never feature lists as a hero element. The reader should feel pulled, not sold.

**On structure.** Scrollytelling experience, not a print fold sequence. Five narrative sections + one transition pulse. Section 03 (Journey) is the longest and most layered. **Pacing is part of the story.**

**On production reality.** HTML build for hostability. Scrollytelling preferred but not mandatory. Every scene must read as a coherent flow if rendered statically.

**On "must-include."** The content listed is the substance of the story. Proposed phrases, Hook variants, and the sample closing review are starting points and references. The two Trustpilot reviews and the headline statistic are real source material and must be used as-is.

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

## SECTION 02 — Truth (Sofia, the reviews, and the data)

**Purpose.** Move from category insight to human recognition. Two real Trustpilot voices confirm the truth empirically; one verified statistic establishes the business opportunity; one explicit line names the unaddressed problem.

**Message to respect.** The group, not the destination, makes or breaks a group trip — and right now it's a coin flip. The market knows it; the platforms don't measure for it.

**Scan-mode lead.** Two contrasting review cards (5★ / 1★), with Sofia's voice as the anchor between or beside them.

**Selection strategy.** These reviews are intentionally polarized — 5★ vs 1★, both short, both centered on the people. The contrast does the argument.

**Must-include content.**

*Sofia introduction.*
- Sofia, late 20s, solo, scrolling WeRoad late at night.
- She's been on this app before. She's booked before. She knows what she's looking at.
- The question she's holding: not "where" but "who." She's read these reviews many times. She knows which kind of trip she got last time. She doesn't know which kind she'll get tonight.

*Two Trustpilot reviews — selected and verified from the WeRoad CSV (1,660 reviews, all Italian).*

---

### Review A — Positive (Marcello · 5★ · Morocco 360°)

**Why selected.** The 5★ pull-quote is a ten-word arc compression — solo → people.

**Recommended pull-quote (English):**
> *"I left alone, without knowing anyone. I came back with a wealth of experiences and people I'll hardly forget."*

**Attribution:** *Marcello · Trustpilot ★★★★★ · Morocco*

**Full Italian original — source verification only:**
> *"Sono partito da solo, senza conoscere nessuno, e sono tornato con un bagaglio di esperienze e di persone che difficilmente dimenticherò."*

---

### Review B — Negative (FZ · 1★ · China)

**Why selected.** The 1★ pull-quote is visceral — *toxic dynamics from day two*. No ambiguity about what the variable is.

**Recommended pull-quote (English):**
> *"I witnessed toxic dynamics within the group that I had to endure from the second day of the trip."*

**Attribution:** *FZ · Trustpilot ★☆☆☆☆ · China*

**Full Italian original — source verification only:**
> *"Ho assistito a dinamiche tossiche all'interno del gruppo che ho dovuto sopportare sin dal secondo giorno di viaggio."*

**Editorial note.** FZ's original review is a multi-part complaint. The recommended pull-quote isolates the group-dynamics sentence — a real and verbatim part of the review. Standard pull-quote practice; faithful, not distortive.

**Note on "toxic dynamics" / "dinamiche tossiche."** In Italian usage this signals bad chemistry, cliques, power plays — not literal abuse.

---

### The data point — empirical evidence

After the two reviews land, surface the headline statistic. This is the business opportunity, embedded without breaking the editorial register. **The same statistic was used in the team's presentation — keeping it consistent across deliverables strengthens the audit story.**

**The statistic — verified from the source CSV:**

> **When a trip drops to 1, 2, or 3 stars, the group is the most-cited cause. 18% of negative reviews trace back to it.**

This is the team's headline presentation stat. Use this exact wording on the page. The framing is sharp, attributive, and survives scrutiny: it's not about how often the group is *mentioned* — it's about how often the group is *named as the failure*.

**What this data is doing.**
- Establishes the business opportunity (causation, not just salience).
- Satisfies the course-brief pillar without becoming a "metric strip."
- Sharper than a mention-rate figure: "1 in 5 trip failures trace back to the group" is memorable, actionable, and defensible.
- Matches the presentation — readers who see both deliverables encounter the same number, told the same way.

**Provenance for audit defense.** Of 1,660 reviews in the WeRoad Trustpilot CSV scraped by the team, 92 are 1–3★ (negative band). Of those 92, **17 (18.5%, rounded to 18%) name the group, group dynamics, group composition, or coordinator-led group management as a stated problem.** The methodology can be reproduced from the source CSV using the same Italian keyword set (group / dynamics / management / exclusion / coordinator language). Methodology details available in the team's analysis script.

---

*Closing beat for the section — the explicit problem statement.*

One line that names the problem outright. Proposed:

> **Group fit isn't measured. It's hoped for.**

This is the explicit problem statement. It sits at the end of section 02, just before the page pivots into section 03's reframe. It is the bridge that turns *"the group is the variable"* (descriptive) into *"this is unaddressed"* (prescriptive).

**Free zone.** Whether reviews appear side-by-side, stacked, scroll-revealed. How the statistic is rendered (large number? quiet inline? annotated chart fragment?). How the problem-statement line lands (full-bleed? quiet caption? typographic emphasis?). Star ratings must remain visible — they are part of the visual argument.

**Attribution requirement.** Each review must credit Trustpilot and use the reviewer's first name or initials only (Marcello / FZ). Display the star rating. Date is optional. The 1,660-figure must remain credited to Trustpilot and verifiable.

**Do not paraphrase the reviews.** Use the pull-quotes verbatim.

---

## SECTION 03 — The Journey (extended scrollytelling section)

**Purpose.** Reframe the booking logic, then walk Sofia through WeMatch in motion. Longest, densest section of the page.

**Message to respect.** The reader's mental model of group travel flips here, and WeMatch shows what that flip looks like in practice. WeMatch is not a chatbot — it's an ambient companion that learns from how Sofia talks *and* how she moves, and turns that into a search experience built around her people, not her keywords.

**Scan-mode lead.** The match score artifact — e.g., **87% · culture-driven · slow pace · mid-thirties mix** — appearing on a re-ranked WeRoad page.

---

### Opening beat — the reframe + the entrance *(non-negotiable)*

**Beat 1 — the reframe.** A clean before/after of the booking logic:
- **Today:** pick a trip → hope the group works.
- **What if:** find your group → the right trips emerge.
- Stated plainly: **group-first, not trip-first**.

**Beat 2 — Sofia meets WeMatch.** A short emotional pivot. Proposed shape: *"Sofia opens WeRoad. WeMatch is already paying attention."*

Two breaths, one opener.

---

### Moment 3a — It reads her *(Explore + Interpret)*

**Purpose.** Show that WeMatch learns from two converging signals: what Sofia *says* and what she *does*. Counter the "it's a chatbot" misread.

**Must-include content.**
- Sofia talks to WeMatch (conversation input). Warm, curious, observational — not transactional. WeMatch isn't asking *where do you want to go*. It's getting to know *how she travels*.
- Sofia also just uses the site (behavioral input). She scrolls. She lingers. She saves. WeMatch reads it all.
- The two signals converge into a behavioral profile. **Name three or four dimensions evocatively, signal eight total** — *"WeMatch reads how she travels across eight dimensions — social energy, pace, planning style, conflict style, and four more."*
- Sofia's emotional beat: she didn't realize how much she was being heard.

**Craft caption (in-line, low-key).** Privacy by design — *"She's never asked to fill out a form. WeMatch reads what she shares, nothing more."*

---

### Moment 3b — It matches her *(Curate)*

**Purpose.** Show the core mechanic: WeMatch scores *the group*, not just the trip.

**Must-include content.**
- WeRoad's search page is now re-ranked by group fit.
- Trip cards carry a match score (e.g. **87%**) and a one-line reason: *"culture-driven, slow pace, mid-thirties mix."*
- The principle: **group fit is a computation, not a conversation.**
- Sofia's emotional beat: surprise. She's not browsing trips anymore. She's seeing *people she'd fit with*, with trips attached.

**Craft caption (in-line, low-key).** Group-first scoring — *"A trip that's perfect for Sofia but wrong for the group is not a match."*

---

### Moment 3c — It tells her why *(Explain)*

**Purpose.** Close the trust gap. WeMatch shows its work — and listens back when she disagrees.

**Must-include content — render this as a scene.**

Sofia taps the 87% match. A small panel opens with the *why*:
- *"You both move slow."*
- *"You both choose depth over checklist."*
- *"The group skews mid-thirties — you're on the younger side."*

She reads it. Something rubs her about *"younger side."* She types one line back: *"Adjust — age doesn't matter, depth does."*

WeMatch absorbs. The match list below shifts.

Her emotional beat: not just matched. Listened to.

**Craft caption (in-line, low-key).** Transparency by design — *"Every match comes with a reason. She can always ask why — or push back."*

---

### Designer notes for Section 03

- The three moments must be **distinguishable** as scroll beats.
- The **opening beat** is non-negotiable.
- The three **craft captions** are valued but cuttable. Order if forced: 3c first, 3b second, 3a last.
- **Mobile pacing.** Visual breaks between moments; captions must visually attach to their moment.
- **If scrollytelling can't be built reliably,** render as three sequential static scenes.
- Do not turn this into a feature grid.

---

## TRANSITION — On the trip *(Check-in)*

**Purpose.** Bridge the journey (booking) and the after (return). Single narrative pulse.

**Message to respect.** WeMatch is a companion across the whole trip, not just before it.

**Must-include content.**
- Sofia is on the trip. WeMatch checks in — gently, once.
- Her answers feed the system. The loop is alive.
- One image or line is enough.

**Free zone.** Single line, small photograph, notification mock, parallax moment.

---

## SECTION 04 — The After (Sofia's voice)

**Purpose.** Emotional close. Show what changes when the matching is right — through Sofia's own words. Because she's been on both sides of the coin, this isn't a transformation — it's a confirmation.

**Message to respect.** When the group is right, the trip is unforgettable — and someone who's done this before recognizes the difference instantly.

**Scan-mode lead.** A review card — visually rhyming with the Trustpilot cards from section 02 — but signed *Sofia*.

**Must-include content.**

*Sofia's words, in the same visual shape as the Trustpilot reviews from section 02.*

*Sample closing review — reference only, do not lift verbatim.*

> *"I've done a few of these now. One was magical. One was just fine. I came back from Portugal a week ago and I already know which one this was. On day two, eating pão com tomate with Marco, I just knew. He taught me to argue properly over dinner. The wine bar in Alfama wasn't on the itinerary. None of the best parts were. This is what it feels like when the group is the right one."*
>
> — Sofia, Trustpilot ★★★★★

*One quiet system signal, after her words.*
- Proposed shape: *"Sofia's profile evolved. WeMatch knows her better now."*
- The only system reference in the close. Not an explanation.

**What this section must not do.**
- Never label this as a review, feedback, or testimonial.
- Never show a review-submission interface.
- Never explain the Evolve phase.
- Never use the word "transformation."

---

## SECTION 05 — Invitation *(updated in v7 — CTA links to live agent)*

**Purpose.** Close the loop. Issue a clear, warm, low-friction next step — and deliver a real working payoff. The CTA does not link to a marketing signup; it links to the team's **live testable agent**. This is what makes the course-brief *"engage with something working"* principle land honestly.

**Message to respect.** This isn't just better matching. It's a new kind of travel — and you can talk to it right now.

**Scan-mode lead.** The CTA button itself, with a closing line above it that echoes the Hook, and a short expectation-setting line below it.

**Must-include content.**

*A closing line that echoes the Hook, answering it.* Proposed (refine to match the chosen Hook variant):
- *"You're not choosing a destination. You're choosing your people."*
- Or if the Hook leans question-form: *"The group was the trip after all."*

*The CTA — verb shift for v7.*

Because the CTA links to a real working agent (not a signup), the verb must signal *try*, not *enroll*. Strong options:
- **"Meet WeMatch."**
- **"Talk to WeMatch."**
- **"Try WeMatch."**

Avoid: *"Get started," "Sign up," "Find your group," "Start with who"* — all of these imply onboarding into a product. The CTA is doing something different: inviting the reader into a conversation with a working agent.

*Expectation-setting micro-line below the CTA — non-negotiable.*

A single short line that prevents the click from feeling like a marketing transaction. Proposed:
- **"A live preview. Real agent. No signup."**

This line does three jobs in eight words: signals it's working (live), signals it's the real product (real agent), and removes the friction barrier (no signup). The micro-line is what turns the CTA from a marketing button into a story beat.

*Scope-honesty note.* If what the agent lets the reader test is a slice of the full WeMatch experience (one phase, one scenario) rather than the entire system, the micro-line should reflect that without breaking confidence. Variants:
- *"A live preview. Real agent. No signup."* — best when the slice represents the system honestly.
- *"Preview the agent. No signup."* — quieter, more accurate if the slice is narrow.
- *"Talk to a slice of WeMatch."* — most honest, slightly less compelling.

Pick based on the actual scope of the testable agent. **Over-promising a partial demo creates disappointment on click; under-promising leaves portfolio signal on the table. Calibrate accurately.**

*Brand sign-off and attribution.* WeRoad parent brand, course context, team credits.

**Free zone.** Whether the CTA is a single button, a chat prompt mock, or something more bespoke. Whether the closing line is verbatim Hook or paraphrased. Whether this section also serves as the page footer. Whether there is any visual signal that the agent is "live" (subtle pulse? minimal indicator?).

---

## How the page satisfies the course-brief storytelling principles

For audit defense — a quick reference mapping the course-brief requirements to where they're satisfied in the page.

| Course-brief requirement | Where it lives in the page |
|---|---|
| **Problem statement** (why important / how unaddressed) | Section 02 — the two reviews show the problem; the 44%/59% statistic shows its scale; *"Group fit isn't measured. It's hoped for."* states it explicitly. |
| **Business opportunity** (data showing market interest) | Section 02 — 44% of 1,660 verified reviews name the group as a factor, rising to 59% in negative reviews. Unsolicited evidence at platform scale. |
| **The solution** (how it solves / value prop / scenario of use / role of AI) | Section 03 — three moments of Sofia using WeMatch (reads her, matches her, tells her why) carry the scenario, value proposition, and role of AI. |
| **1 — Begin with strongest hook** | Section 01 — counterintuitive reframe of the category in one line. |
| **2 — Showcase the impact** (real stories / quotes / testimonials) | Section 02 (Marcello + FZ Trustpilot reviews) + Section 04 (Sofia's review). |
| **3 — Leverage visuals to simplify complex ideas** | Section 03 visual treatment — sticky-text scrolly, match score artifact, visible re-ranking, character work (if Direction B chosen). |
| **4 — Engage with something "working"** | Section 05 CTA — links to the team's live testable agent. Real product, not a simulation. |

---

## Designer notes (overall)

**On naming.** First clear use of **WeMatch** is in the opening beat of section 03 (Beat 2).

**On pacing.**
- **Sections 01, 05** = short, punchy.
- **Transition** = single pulse.
- **Section 02** = medium-long (Sofia + two reviews + statistic + problem statement).
- **Section 03** = the longest. Two-beat opener + three scene-moments.
- **Section 04** = medium-short.

**On scroll choreography.** Reveal-on-scroll, sticky text, parallax, animation — all available, none mandatory. **All scrollytelling must degrade gracefully.**

**On Sofia.** Thread, not mascot. Don't over-render.

**On reordering.** Sections cannot be reordered. Section 03 moment order is fixed: 3a → 3b → 3c.

**On craft signals.** Dignity / privacy / transparency principles live as captions inside section 03. Default: keep them as captions.

**On success tests.** A working page passes these:
- A scanner who spends 10 seconds total can answer: *"What problem does this solve?"*
- A scroller who reads in 60 seconds can answer: *"How does it work?"* in one sentence.
- A reader who reads in full can answer: *"Why is this different from regular travel search?"* without using the word AI.
- A reader who clicks the CTA reaches a live working agent within one navigation step.
- A reader of any depth should leave wanting to try it — and the CTA delivers that try, not a marketing funnel.

**On what to never do.**
- Never open with "Introducing WeMatch."
- Never list features as a hero element.
- Never use "AI-powered" or "intelligent" as a headline value prop.
- Never explain methodology, process, or architecture.
- Never frame Sofia's closing words as a feature, review form, or feedback mechanism.
- Never paraphrase the Trustpilot reviews.
- Never make the CTA a generic signup. It must link to the live agent.
- Never link the CTA without the expectation-setting micro-line. The "no signup" promise is what makes the click feel like a story beat, not a sales transaction.
