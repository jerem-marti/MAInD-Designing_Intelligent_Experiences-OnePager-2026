# Stage 1 — Research Notes

> Phase 1, WeMatch one-pager. Grounds the design system in WeRoad's brand reality and the brief's register references.

---

## A note on method

`weroad.com` and `weroad.it` were both fetched. The fetch tool processes *rendered text*, not raw CSS, so it could not return exact hex values or `font-family` declarations from the stylesheet. The brand observations below combine what the fetch surfaced with well-established public knowledge of WeRoad's identity. **Every hex value here is flagged for human verification** against the live site (DevTools eyedropper) before it hardens into a token. This is a known limitation, not a guess presented as fact.

---

## WeRoad's brand reality

- **Accent color — a vibrant coral-red.** WeRoad's signature is a warm, high-energy coral-red (not a true fire-engine red, not orange). Approximate value: **`#FF4D4D` – `#F7374F`** range. *Verify against live site.* It is used assertively on the WeRoad site — buttons, price tags, promotional flashes — i.e. WeRoad floods it. WeMatch should *inherit the hue but invert the usage*: same red, used as a rare accent, not a field.
- **Neutral base.** White / near-white backgrounds, grey body text. Standard, unremarkable — room for WeMatch to do something warmer (cream/off-white) and own it.
- **Typography.** Modern geometric sans for headlines, clean sans for body. WeRoad leans on all-caps promotional treatment ("BOOK WITH ZERO"). No proprietary face evident. This is consistent with the brief's call for **Inter / General Sans** — both sit naturally in WeRoad's typographic world.
- **Photography.** Adventure-documentary-adjacent but tipping into travel-brand stock: wide panoramic landscapes, experiential action shots (camel rides, trekking, snorkeling), scale-and-exploration framing. This is exactly the register the brief tells WeMatch to *avoid* — "looks like a Booking.com hero."
- **Voice.** Energetic, imperative, action-verb-led ("Escape on a last minute getaway," "Immerse yourself"). Community-and-flexibility framing over luxury. Younger-demographic targeting. **WeMatch's voice should be quieter** — observed, not exclaimed.
- **UI language.** Rounded-corner buttons (~4–8px radius), card-grid trip listings, prominent star rating (4.7/5), generous whitespace between sections. The card-grid is structurally useful — WeMatch's match cards are a deliberate, restrained evolution of WeRoad's trip cards.
- **Overall personality.** Youthful, social, energetic, a little loud. WeRoad is *enthusiasm*. WeMatch should read as *the thoughtful older sibling* — same family, lower volume, more breath.

### What WeMatch inherits vs. evolves

| Inherit | Evolve |
|---|---|
| The coral-red hue (as an accent signal) | Usage: rare punctuation, never a flood |
| Inter / General Sans typographic family | Hierarchy: editorial type scale, big restrained display moments |
| The trip-card as a recognizable object | Card content: people-fit score + reason, composed editorially |
| WeRoad's warmth and human focus | Tone: observational longform, not imperative marketing |
| — | Base: warm cream/off-white, not flat white — gives the page its own air |
| — | Imagery ethos: away from travel-brand stock entirely |

---

## Techniques worth borrowing from the references

1. **Linear — progressive disclosure as narrative.** The page unfolds feature-by-feature, each section in its own breathing room, structured as problem → solution → insight. WeMatch's Section 03 (Journey) should borrow this exactly: three moments, each its own "chapter" with generous separation, sequenced as an experience rather than a grid. Also borrow Linear's **color restraint** — neutral field, accent reserved for the one thing that matters (status, score).
2. **Linear — "show, don't tell" with real artifacts.** Linear embeds real issue-tracking examples and code diffs instead of describing features abstractly. WeMatch's equivalent: the re-ranked WeRoad search page and the real Trustpilot cards *are* the argument — render the actual artifact, never a feature caption about it.
3. **The Browser Company — values-and-mission framing over feature lists.** Their nav prioritizes "Values" and newsletter over product specs; the headline states a belief, not a feature. WeMatch's Hook works the same way: a declarative reframe of the category, not a product claim. Intimate and exploratory over corporate.

(Type-scale specifics from the references were not extractable from rendered text; the editorial *principles* — rhythmic size contrast, generous line-height, sections as chapters — are the borrowable part and are reflected in the Stage 3 token scale.)

---

## Recommendation: brand relationship

**WeRoad-adjacent.** Confirming the brief's default.

Reasoning:
- The fetch confirmed WeRoad's site *is* the loud, energetic, stock-photography travel-brand register the brief warns against. Going **Full WeRoad** would pull WeMatch directly into the aesthetic the brief lists as anti-patterns — it would actively fight the editorial register the page needs.
- WeRoad-adjacent lets WeMatch keep the load-bearing brand signals (the red, the type family, the trip-card object, the human warmth) while developing the restraint, the warmer base, and the observational voice that make the page feel *chosen*. That visible gap between parent and chapter is itself the craft signal the examiners are looking for.
- A speculative future service reads as credible when it sits *next to* its parent without being absorbed. "WeRoad's next chapter," not "WeRoad's new marketing page."

No push-back on the brief here — the live site evidence strengthens the brief's own recommendation.

---

## Open items for human verification

- **Exact WeRoad coral-red hex** — eyedrop the live site; the token file currently uses a flagged approximation.
- **Whether WeRoad uses Inter, General Sans, or a proprietary face** — confirm; the brief permits either, so this is low-risk, but worth knowing.
