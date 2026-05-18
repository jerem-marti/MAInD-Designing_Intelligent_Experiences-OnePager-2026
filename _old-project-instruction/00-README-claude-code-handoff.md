# WeMatch One-Pager — Claude Code Handoff

**Project.** WeMatch is a speculative AI service for WeRoad, the Italian group-travel platform. WeMatch matches solo travelers to compatible groups rather than to destinations. This handoff produces a single-page scrollytelling website telling that service's story.

**Context.** This is a SUPSI × Spark Reply student project. The deliverable is a publicly shareable one-pager (hosted on Vercel / Netlify / similar) that demonstrates the service's value through narrative, not features. Audience: course examiners primarily, design/product readers secondarily.

**The two-phase workflow.**

1. **Phase 1 — Design system & visual concept.** Run `prompt-1-design-system.md` first. Output: a `/design` directory with design tokens, a Sofia character concept (if pursued), key component prototypes, and a single-page visual style guide. **Pause for human review** before Phase 2.

2. **Phase 2 — Implementation.** Run `prompt-2-implementation.md` after the design system is approved. Output: a working Nuxt 3 + GSAP project implementing all sections from the script, mobile-responsive, deployable.

**Files in this handoff.**

| File | What it is | When to read |
|---|---|---|
| `wematch-one-pager-script.md` | Content per section. The substance. | Both phases. |
| `wematch-creative-brief.md` | Visual register, anti-patterns, production guidance. The frame. | Both phases. Read this first in each phase. |
| `00-README-claude-code-handoff.md` | This file. | Orientation. |
| `prompt-1-design-system.md` | Phase 1 prompt. | When starting Phase 1. |
| `prompt-2-implementation.md` | Phase 2 prompt. | When starting Phase 2, after Phase 1 outputs exist. |

**Recommended reading order at the start of any session.**
1. This README.
2. `wematch-creative-brief.md` (register, anti-patterns, production stack).
3. `wematch-one-pager-script.md` (the actual content, section by section).
4. The phase prompt for the current phase.

**Working principles for both phases.**
- The brief and script are authoritative. Where they conflict with prior assumptions, defer to them.
- WeRoad's actual brand should be researched live (fetch `weroad.com`), not assumed from training data.
- Stop and present at the checkpoints defined in each phase prompt. Do not charge through without review.
- When uncertain about a creative call, name the options and recommend one — don't ask vague questions.
