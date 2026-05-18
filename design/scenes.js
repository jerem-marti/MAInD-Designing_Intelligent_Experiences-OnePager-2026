// ============================================================
// WeMatch V3 — scrollytelling engine + scene timelines.
// Stack: Lenis (smooth scroll) + GSAP ScrollTrigger (orchestration).
// Custom DOM-safe word-splitter (no SplitText dependency).
// ============================================================

(function () {
  // 0. Reduced motion: CSS handles end-state; JS exits early so no listeners fire.
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    console.info('[scenes] Reduced motion active. Animations skipped.');
    return;
  }

  // 1. Guard: required globals must be loaded from CDN by index.html.
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined' || typeof Lenis === 'undefined') {
    console.error('[scenes] Missing dependency (gsap / ScrollTrigger / Lenis).');
    return;
  }

  const isMobile = matchMedia('(max-width: 1023px)').matches;

  // 2. Register GSAP plugins.
  gsap.registerPlugin(ScrollTrigger);

  // 3. Lenis smooth scroll. Skip on mobile — native scroll is smoother there.
  if (!isMobile) {
    const lenis = new Lenis({
      duration: 1.2,
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
      smoothWheel: true,
      smoothTouch: false,
    });
    // Single-source tick: drive Lenis from the GSAP ticker only.
    // GSAP passes time in seconds; Lenis expects ms — convert.
    // (A separate requestAnimationFrame loop would double-tick Lenis.)
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  // 4. Wait for fonts so word measurements settle before splitting.
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(boot);
  } else {
    boot();
  }

  function boot() {
    splitAllWords();
    splitAllChars();
    splitMatchyCopies();
    splitAfterAgentCopy();
    wireMatchyInteractions();
    try {
      buildTimelines();
    } catch (err) {
      console.error('[scenes] Timeline build failed; restoring text visibility.', err);
      restoreVisibility();
    }
  }

  // Char-split utility — DOM-safe. Wraps each non-space character in <span class="char">.
  // Used for color-stagger animations where a coral wave reads left-to-right across text.
  function splitAllChars() {
    const targets = document.querySelectorAll('[data-split-chars]');
    targets.forEach(function (el) {
      const text = el.textContent;
      el.textContent = '';
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === ' ') {
          el.appendChild(document.createTextNode(' '));
        } else {
          const span = document.createElement('span');
          span.className = 'char';
          span.textContent = ch;
          el.appendChild(span);
        }
      }
    });
  }

  // Word-split utility — DOM-safe, no innerHTML.
  // Wraps each whitespace-separated word in <span class="word"><span>WORD</span><span class="placeholder"></span></span>.
  // NOTE: placeholder MUST be <span>, not <div> — div-inside-span is invalid HTML
  // and Chrome auto-corrects by closing the span first, breaking inline flow.
  function splitAllWords() {
    const targets = document.querySelectorAll('[data-split]');
    targets.forEach(function (el) {
      const text = el.textContent;
      const words = text.split(/\s+/).filter(function (w) { return w.length > 0; });
      el.textContent = '';
      words.forEach(function (w, i) {
        const wordEl = document.createElement('span');
        wordEl.className = 'word';
        const textSpan = document.createElement('span');
        textSpan.textContent = w;
        const placeholder = document.createElement('span');
        placeholder.className = 'placeholder';
        wordEl.appendChild(textSpan);
        wordEl.appendChild(placeholder);
        el.appendChild(wordEl);
        if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
      });
    });
  }

  function restoreVisibility() {
    document.querySelectorAll('.split .word > span').forEach(function (el) {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    document.querySelectorAll('.split .word .placeholder').forEach(function (el) {
      el.style.opacity = '0';
    });
    document.querySelectorAll('.hook__groups, .hook__sub, .invitation__accent, .invitation__rest, .invitation__cta, .invitation__micro, .truth__phase, .truth__lede-accent, .truth__problem-accent, .truth__review--positive, .truth__review--critical, .truth__stat-figure, .truth__stat-copy, .journey__phase, .journey__dna, .journey__dna-slider, .journey__match, .journey__why, .journey__matchy, .journey__matchy-bubble, .journey__matchy-copy, .journey__matchy-char, .after__phase, .after__review, .after__story-line--turn, .after__signal-title, .after__agent, .after__agent-avatar, .after__agent-avatar img, .after__agent-bubble, .after__agent-char, .after__sofia').forEach(function (el) {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    document.querySelectorAll('.journey__dna-fill').forEach(function (el) {
      el.style.width = getDnaTarget(el);
    });
    document.querySelectorAll('.journey__dna-knob').forEach(function (el) {
      el.style.left = getDnaTarget(el);
    });
    // Accent chars end coral.
    document.querySelectorAll('.truth__lede-accent .char, .truth__problem-accent .char, #scene-after .after__story-line--turn .char, #scene-after .after__signal-title .char, #scene-invitation .invitation__accent .char').forEach(function (el) {
      el.style.color = 'var(--color-accent)';
    });
    const strike = document.querySelector('.hook__strike-line');
    if (strike) strike.style.transform = 'scaleX(1)';
    const fallbackStat = document.querySelector('#scene-truth .truth__stat-num');
    if (fallbackStat) fallbackStat.textContent = fallbackStat.dataset.countTo || '0';
  }

  function splitMatchyCopies() {
    document.querySelectorAll('#scene-journey .journey__matchy-copy').forEach(function (el) {
      const text = el.textContent;
      el.dataset.fullText = text;
      el.setAttribute('aria-label', text);
      el.textContent = '';
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === ' ') {
          el.appendChild(document.createTextNode(' '));
        } else {
          const span = document.createElement('span');
          span.className = 'journey__matchy-char';
          span.textContent = ch;
          el.appendChild(span);
        }
      }
    });
  }

  function splitAfterAgentCopy() {
    document.querySelectorAll('#scene-after .after__agent-copy').forEach(function (el) {
      const text = el.textContent;
      el.dataset.fullText = text;
      el.setAttribute('aria-label', text);
      el.textContent = '';
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === ' ') {
          el.appendChild(document.createTextNode(' '));
        } else {
          const span = document.createElement('span');
          span.className = 'after__agent-char';
          span.textContent = ch;
          el.appendChild(span);
        }
      }
    });
  }

  function wireMatchyInteractions() {
    document.querySelectorAll('#scene-journey .journey__matchy-avatar').forEach(function (button) {
      button.addEventListener('click', function () {
        const matchy = button.closest('.journey__matchy');
        if (!matchy) return;
        matchy.classList.remove('is-engaged');
        // Restart the nudge animation even on repeated taps.
        void matchy.offsetWidth;
        matchy.classList.add('is-engaged');
        window.setTimeout(function () {
          matchy.classList.remove('is-engaged');
        }, 900);
      });
    });
  }

  function getDnaTarget(el) {
    const slider = el.closest('.journey__dna-slider');
    return (slider && slider.style.getPropertyValue('--target').trim()) || '70%';
  }

  function getMatchScale(el) {
    return el.classList.contains('journey__match--top') ? 1.05 : 1;
  }

  function getMatchyTop(mode) {
    const matchy = document.querySelector('#scene-journey .journey__matchy');
    if (!matchy) return undefined;
    const previousTop = matchy.style.top;
    matchy.style.top = mode === 'step'
      ? 'var(--journey-matchy-step-top)'
      : 'var(--journey-matchy-entrance-top)';
    const computedTop = getComputedStyle(matchy).top;
    matchy.style.top = previousTop;
    return computedTop;
  }

  function buildTimelines() {
    // Initial state for split words and unsplit reveal elements.
    gsap.set('.split .word > span', { opacity: 0, y: 20 });
    gsap.set('.split .word .placeholder', { opacity: 1 });
    gsap.set('.hook__groups', { opacity: 0 });
    gsap.set('.hook__sub, .invitation__cta, .invitation__micro', { opacity: 0, y: 20 });
    // Scene 02 Truth — phase-based layout. Phase 1 starts visible; 2/3/4 hidden.
    gsap.set('#scene-truth .truth__phase', { opacity: 0 });
    gsap.set('#scene-truth .truth__phase--lede', { opacity: 1 });
    // Sub-element initial states for within-phase animations.
    // Accent lines hide as whole elements (not per-char) so chars can flow inline
    // and line-break at word boundaries naturally. Color wave runs on chars only.
    gsap.set('#scene-truth .truth__lede-accent', { opacity: 0, y: 10 });
    gsap.set('#scene-truth .truth__problem-accent', { opacity: 0, y: 10 });
    gsap.set('#scene-truth .truth__review--positive', { x: -60, opacity: 0 });
    gsap.set('#scene-truth .truth__review--critical', { x:  60, opacity: 0 });
    gsap.set('#scene-truth .truth__stat-figure', { opacity: 0 });
    gsap.set('#scene-truth .truth__stat-copy', { opacity: 0, y: 20 });
    const truthStatNum = document.querySelector('#scene-truth .truth__stat-num');
    if (truthStatNum) truthStatNum.textContent = '0';
    // Resolve the coral color once so GSAP can tween to it (it can't tween var()).
    const coralColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-accent').trim() || '#F7374F';
    const inkColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-text-primary').trim() || '#1F1B16';
    const inverseColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-text-inverse').trim() || '#FAF6F0';

    // Scene 05 Invitation — first phrase resolves into coral before the CTA.
    gsap.set('#scene-invitation .invitation__accent', { opacity: 0, y: 10 });
    gsap.set('#scene-invitation .invitation__accent .char', { color: inverseColor });
    gsap.set('#scene-invitation .invitation__rest', { opacity: 0, y: 10 });

    // Scene 03 Journey — phase-based layout, like Scene 02.
    gsap.set('#scene-journey .journey__phase', { opacity: 0 });
    gsap.set('#scene-journey .journey__phase--entrance', { opacity: 1 });
    gsap.set('#scene-journey .journey__dna', { opacity: 0, y: 20 });
    gsap.set('#scene-journey .journey__dna-slider', { opacity: 0, y: 10 });
    gsap.set('#scene-journey .journey__dna-fill', { width: '0%' });
    gsap.set('#scene-journey .journey__dna-knob', { left: '0%' });
    gsap.set('#scene-journey .journey__match', {
      y: 40,
      opacity: 0,
      scale: function (_index, el) { return getMatchScale(el) - 0.04; }
    });
    gsap.set('#scene-journey .journey__why', { y: 30, opacity: 0 });
    gsap.set('#scene-journey .journey__sofia-image--curious', { opacity: 1 });
    gsap.set('#scene-journey .journey__sofia-image--surprised', { opacity: 0 });
    // Matchy — desktop initial state: persistent assistant hidden, entrance copy ready.
    // (Mobile CSS already handles position:static + opacity:1; skip JS set.)
    if (!isMobile) {
      gsap.set('#scene-journey .journey__matchy', { opacity: 0, y: 12 });
      gsap.set('#scene-journey .journey__matchy-copy', { opacity: 0 });
      gsap.set('#scene-journey .journey__matchy-char', { opacity: 0 });
      gsap.set('#scene-journey .journey__matchy-copy--entrance', { opacity: 1 });
    }

    // Scene 04 After — story, review, then profile-evolved signal.
    gsap.set('#scene-after .after__phase', { opacity: 0 });
    gsap.set('#scene-after .after__phase--story', { opacity: 1 });
    gsap.set('#scene-after .after__story-line--turn, #scene-after .after__signal-title', { opacity: 0, y: 10 });
    gsap.set('#scene-after .after__story-line--turn .char, #scene-after .after__signal-title .char', { color: inkColor });
    gsap.set('#scene-after .after__review', { opacity: 0, y: 30 });
    gsap.set('#scene-after .after__agent', { opacity: 0, y: 16 });
    gsap.set('#scene-after .after__agent-avatar', { opacity: 0, y: 10, scale: 0.92 });
    gsap.set('#scene-after .after__agent-bubble', { opacity: 0, y: 10, scale: 0.985 });
    gsap.set('#scene-after .after__agent-char', { opacity: 0 });
    gsap.set('#scene-after .after__sofia', { opacity: 0, y: 16 });

    if (isMobile) {
      // Mobile: phases are not absolutely-positioned (CSS overrides under 1024px),
      // so they stack and scroll naturally. All phases must be visible from start —
      // override the phase initial states that the desktop path needs.
      gsap.set('#scene-truth .truth__phase', { opacity: 1 });
      // Accent lines on mobile: show fully, with chars already coral.
      gsap.set('#scene-truth .truth__lede-accent, #scene-truth .truth__problem-accent', { opacity: 1, y: 0 });
      gsap.set('#scene-truth .truth__lede-accent .char, #scene-truth .truth__problem-accent .char', { color: coralColor });

      // Scene 03 on mobile: phases visible, all sub-elements visible from start.
      gsap.set('#scene-journey .journey__phase', { opacity: 1 });
      gsap.set('#scene-journey .journey__dna, #scene-journey .journey__dna-slider', { opacity: 1, y: 0 });
      gsap.set('#scene-journey .journey__dna-fill', { width: function (_index, el) { return getDnaTarget(el); } });
      gsap.set('#scene-journey .journey__dna-knob', { left: function (_index, el) { return getDnaTarget(el); } });
      gsap.set('#scene-journey .journey__match', { y: 0, opacity: 1, scale: 1 });
      gsap.set('#scene-journey .journey__why', { y: 0, opacity: 1 });
      gsap.set('#scene-journey .journey__sofia-image--curious', { opacity: 1 });
      gsap.set('#scene-journey .journey__sofia-image--surprised', { opacity: 0 });
      // Mobile matchy: CSS handles position + visibility; ensure no inline overrides.
      gsap.set('#scene-journey .journey__matchy', { clearProps: 'opacity,transform' });
      gsap.set('#scene-journey .journey__matchy-copy', { clearProps: 'opacity' });
      gsap.set('#scene-journey .journey__matchy-char', { opacity: 1 });

      // Scene 04 on mobile: stack all after beats in order.
      gsap.set('#scene-after .after__phase', { opacity: 1 });
      gsap.set('#scene-after .after__story-line--turn, #scene-after .after__signal-title', { opacity: 1, y: 0 });
      gsap.set('#scene-after .after__story-line--turn .char, #scene-after .after__signal-title .char', { color: coralColor });
      gsap.set('#scene-after .after__review', { opacity: 1, y: 0 });
      gsap.set('#scene-after .after__agent', { opacity: 1, y: 0 });
      gsap.set('#scene-after .after__agent-avatar, #scene-after .after__agent-bubble', { opacity: 1, y: 0, scale: 1 });
      gsap.set('#scene-after .after__agent-char', { opacity: 1 });
      gsap.set('#scene-after .after__sofia', { opacity: 1, y: 0 });
      gsap.set('#scene-invitation .invitation__accent', { opacity: 1, y: 0 });
      gsap.set('#scene-invitation .invitation__accent .char', { color: coralColor });
      gsap.set('#scene-invitation .invitation__rest', { opacity: 1, y: 0 });

      // Mobile: simple IO-driven one-shot reveals; no pinning, no scrub.
      const ioOpts = { threshold: 0.25, rootMargin: '0px 0px -10% 0px' };
      const onEnter = function (entries, observer) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          const target = e.target;
          if (target.classList.contains('word')) {
            gsap.to(target.querySelector('span'), { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
            gsap.to(target.querySelector('.placeholder'), { opacity: 0, duration: 0.5, ease: 'power2.out' });
          } else if (target.classList.contains('hook__strike-line')) {
            gsap.to(target, { scaleX: 1, duration: 0.6, ease: 'power2.inOut' });
          } else if (target.classList.contains('hook__groups')) {
            gsap.to(target, { opacity: 1, duration: 0.5, ease: 'power2.out' });
          } else if (target.classList.contains('truth__review--positive') || target.classList.contains('truth__review--critical')) {
            gsap.to(target, { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' });
          } else {
            gsap.to(target, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
          }
          observer.unobserve(target);
        });
      };
      const io = new IntersectionObserver(onEnter, ioOpts);
      document.querySelectorAll('.split .word').forEach(function (w) { io.observe(w); });
      document.querySelectorAll('.hook__groups, .hook__sub, .invitation__cta, .invitation__micro, .hook__strike-line, .truth__review--positive, .truth__review--critical, .truth__stat-figure, .truth__stat-copy').forEach(function (el) { io.observe(el); });
      // Mobile count-up: trigger once when the stat enters view.
      // Uses the same proxy-object pattern as the desktop path; target read from data-count-to.
      const mobileStatNum = document.querySelector('#scene-truth .truth__stat-num');
      if (mobileStatNum) {
        const mobileTarget = parseInt(mobileStatNum.dataset.countTo || '0', 10);
        const mobileCount = { value: 0 };
        const counterObs = new IntersectionObserver(function (entries, obs) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              gsap.to(mobileCount, {
                value: mobileTarget,
                duration: 1.2,
                ease: 'power2.out',
                onUpdate: function () {
                  mobileStatNum.textContent = Math.round(mobileCount.value).toString();
                }
              });
              obs.unobserve(mobileStatNum);
            }
          });
        }, { threshold: 0.5 });
        counterObs.observe(mobileStatNum);
      }
      return;
    }

    // --- Desktop: pin + scrub per scene. ---

    // Scene 01 — Hook.
    // One sentence: "Today, WeRoad's travelers search for [trip+strike] [groups]."
    // Sequence: strike animates across "trip" → "groups" fades in → subline fades in.
    const hookScene = document.querySelector('#scene-hook');
    if (hookScene) {
      gsap.timeline({
        scrollTrigger: {
          trigger: hookScene,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: hookScene.querySelector('.scene__sticky'),
        }
      })
      .to('#scene-hook .hook__strike-line', { scaleX: 1, ease: 'power2.inOut', duration: 0.6 })
      .to('#scene-hook .hook__groups', { opacity: 1, ease: 'power2.out', duration: 0.5 })
      .to('#scene-hook .hook__sub', { opacity: 1, y: 0, ease: 'power2.out', duration: 0.4 });
    }

    // Scene 02 — Truth.
    // Phase-based crossfade: lede → reviews → stat → problem. Only one phase
    // visible at a time so each gets full column to breathe. Sofia stays
    // visible throughout in the right column.
    const truthScene = document.querySelector('#scene-truth');
    if (truthScene) {
      const statNum = truthScene.querySelector('.truth__stat-num');
      const countState = { value: 0 };
      const FADE = 0.5;   // crossfade duration between phases
      const HOLD = 1.5;   // dwell duration per phase

      gsap.timeline({
        scrollTrigger: {
          trigger: truthScene,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: truthScene.querySelector('.scene__sticky'),
        }
      })
      // PHASE 1 — Lede word-reveal (main), pause, kicker appears in ink, then coral wave L→R.
      .to('#scene-truth .truth__lede .word > span', { opacity: 1, y: 0, stagger: 0.04, ease: 'power2.out', duration: 0.6 })
      .to('#scene-truth .truth__lede .word .placeholder', { opacity: 0, stagger: 0.04, ease: 'power2.out', duration: 0.6 }, '<')
      .to({}, { duration: 0.6 })
      // Kicker appears as a whole line (text flows naturally, no per-char break).
      .to('#scene-truth .truth__lede-accent', { opacity: 1, y: 0, ease: 'power2.out', duration: 0.5 })
      .to({}, { duration: 0.4 })
      // Coral wave sweeps left to right across the kicker chars (color only, no transforms).
      .to('#scene-truth .truth__lede-accent .char', { color: coralColor, stagger: 0.035, ease: 'power2.out', duration: 0.5 })
      .to({}, { duration: HOLD })

      // Crossfade lede → reviews.
      .to('#scene-truth .truth__phase--lede', { opacity: 0, ease: 'power2.in', duration: FADE })
      .to('#scene-truth .truth__phase--reviews', { opacity: 1, ease: 'power2.out', duration: FADE }, '<')

      // PHASE 2 — Reviews slide in from opposite sides.
      .to('#scene-truth .truth__review--positive', { x: 0, opacity: 1, ease: 'power2.out', duration: 0.8 }, '<+0.1')
      .to('#scene-truth .truth__review--critical', { x: 0, opacity: 1, ease: 'power2.out', duration: 0.8 }, '<+0.2')
      .to({}, { duration: HOLD })

      // Crossfade reviews → stat.
      .to('#scene-truth .truth__phase--reviews', { opacity: 0, ease: 'power2.in', duration: FADE })
      .to('#scene-truth .truth__phase--stat', { opacity: 1, ease: 'power2.out', duration: FADE }, '<')

      // PHASE 3 — Reveal stat figure (hidden so "0" doesn't show), count up.
      .to('#scene-truth .truth__stat-figure', { opacity: 1, ease: 'power2.out', duration: 0.3 }, '<+0.1')
      .to(countState, {
        value: parseInt((statNum && statNum.dataset.countTo) || '0', 10),
        duration: 1,
        ease: 'power2.out',
        onUpdate: function () {
          if (statNum) statNum.textContent = Math.round(countState.value).toString();
        }
      }, '<')
      .to('#scene-truth .truth__stat-copy', { opacity: 1, y: 0, ease: 'power2.out', duration: 0.5 }, '<')
      .to({}, { duration: HOLD })

      // Crossfade stat → problem.
      .to('#scene-truth .truth__phase--stat', { opacity: 0, ease: 'power2.in', duration: FADE })
      .to('#scene-truth .truth__phase--problem', { opacity: 1, ease: 'power2.out', duration: FADE }, '<')

      // PHASE 4 — Problem statement: diagnosis appears as a line, coral wave sweeps it,
      // then the consequence (default ink, word-reveal) lands.
      .to('#scene-truth .truth__problem-accent', { opacity: 1, y: 0, ease: 'power2.out', duration: 0.5 }, '<+0.2')
      .to({}, { duration: 0.4 })
      .to('#scene-truth .truth__problem-accent .char', { color: coralColor, stagger: 0.04, ease: 'power2.out', duration: 0.5 })
      .to({}, { duration: 0.4 })
      .to('#scene-truth .truth__problem-rest .word > span', { opacity: 1, y: 0, stagger: 0.05, ease: 'power2.out', duration: 0.6 })
      .to('#scene-truth .truth__problem-rest .word .placeholder', { opacity: 0, stagger: 0.05, ease: 'power2.out', duration: 0.6 }, '<')
      .to({}, { duration: HOLD });
    }

    // Scene 03 — Journey. Four phases: Entrance → Read → Match → Explain.
    // Same crossfade pattern as Scene 02; longer scene (1000lvh) for richer content.
    const journeyScene = document.querySelector('#scene-journey');
    if (journeyScene) {
      const J_FADE = 0.5;
      const J_HOLD = 2.0;
      const matchyStepTop = getMatchyTop('step');

      gsap.timeline({
        scrollTrigger: {
          trigger: journeyScene,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: journeyScene.querySelector('.scene__sticky'),
        }
      })
      // PHASE 1 — Entrance: single declarative line word-reveal.
      .to('#scene-journey .journey__entrance--solo .word > span', { opacity: 1, y: 0, stagger: 0.05, ease: 'power2.out', duration: 0.6 })
      .to('#scene-journey .journey__entrance--solo .word .placeholder', { opacity: 0, stagger: 0.05, ease: 'power2.out', duration: 0.6 }, '<')
      .to('#scene-journey .journey__matchy', { opacity: 1, y: 0, ease: 'power2.out', duration: 0.45 }, '<+0.35')
      .to('#scene-journey .journey__matchy-copy--entrance .journey__matchy-char', { opacity: 1, stagger: 0.018, ease: 'none', duration: 0.02 }, '<+0.2')
      .to({}, { duration: J_HOLD })

      // Crossfade entrance → read.
      .to('#scene-journey .journey__phase--entrance', { opacity: 0, ease: 'power2.in', duration: J_FADE })
      .to('#scene-journey .journey__phase--read', { opacity: 1, ease: 'power2.out', duration: J_FADE }, '<')
      .to('#scene-journey .journey__matchy', { top: matchyStepTop, ease: 'power2.inOut', duration: J_FADE }, '<')
      .to('#scene-journey .journey__matchy-bubble', { scale: 0.985, ease: 'power1.out', duration: 0.12 }, '<')
      .to('#scene-journey .journey__matchy-bubble', { scale: 1, ease: 'power2.out', duration: 0.18 })
      .to('#scene-journey .journey__matchy-copy--entrance', { opacity: 0, ease: 'power2.in', duration: J_FADE * 0.7 }, '<')
      .set('#scene-journey .journey__matchy-copy--read .journey__matchy-char', { opacity: 0 }, '<')
      .to('#scene-journey .journey__matchy-copy--read', { opacity: 1, ease: 'power2.out', duration: J_FADE * 0.7 }, '<+0.1')
      .to('#scene-journey .journey__matchy-copy--read .journey__matchy-char', { opacity: 1, stagger: 0.012, ease: 'none', duration: 0.02 }, '<')

      // PHASE 2 — Read: title and behavioral_dna artifact reveal.
      .to('#scene-journey .journey__phase--read .journey__title .word > span', { opacity: 1, y: 0, stagger: 0.04, ease: 'power2.out', duration: 0.5 })
      .to('#scene-journey .journey__phase--read .journey__title .word .placeholder', { opacity: 0, stagger: 0.04, ease: 'power2.out', duration: 0.5 }, '<')
      // behavioral_dna artifact: container rises, then sliders move as Matchy analyzes.
      .to('#scene-journey .journey__dna', { opacity: 1, y: 0, ease: 'power2.out', duration: 0.5 })
      .to('#scene-journey .journey__dna-slider', { opacity: 1, y: 0, stagger: 0.06, ease: 'power2.out', duration: 0.35 }, '<+0.08')
      .to('#scene-journey .journey__dna-fill', { width: function (_index, el) { return getDnaTarget(el); }, stagger: 0.08, ease: 'power2.out', duration: 0.9 }, '<+0.05')
      .to('#scene-journey .journey__dna-knob', { left: function (_index, el) { return getDnaTarget(el); }, stagger: 0.08, ease: 'power2.out', duration: 0.9 }, '<')
      .to({}, { duration: J_HOLD })

      // Crossfade read → match.
      .to('#scene-journey .journey__phase--read', { opacity: 0, ease: 'power2.in', duration: J_FADE })
      .to('#scene-journey .journey__phase--match', { opacity: 1, ease: 'power2.out', duration: J_FADE }, '<')
      .to('#scene-journey .journey__sofia-image--curious', { opacity: 0, ease: 'power2.inOut', duration: J_FADE }, '<')
      .to('#scene-journey .journey__sofia-image--surprised', { opacity: 1, ease: 'power2.inOut', duration: J_FADE }, '<')
      .to('#scene-journey .journey__matchy-bubble', { scale: 0.985, ease: 'power1.out', duration: 0.12 }, '<')
      .to('#scene-journey .journey__matchy-bubble', { scale: 1, ease: 'power2.out', duration: 0.18 })
      .to('#scene-journey .journey__matchy-copy--read', { opacity: 0, ease: 'power2.in', duration: J_FADE * 0.7 }, '<')
      .set('#scene-journey .journey__matchy-copy--match .journey__matchy-char', { opacity: 0 }, '<')
      .to('#scene-journey .journey__matchy-copy--match', { opacity: 1, ease: 'power2.out', duration: J_FADE * 0.7 }, '<+0.1')
      .to('#scene-journey .journey__matchy-copy--match .journey__matchy-char', { opacity: 1, stagger: 0.01, ease: 'none', duration: 0.02 }, '<')

      // PHASE 3 — Match: title, then percentage cards rise in.
      .to('#scene-journey .journey__phase--match .journey__title .word > span', { opacity: 1, y: 0, stagger: 0.04, ease: 'power2.out', duration: 0.5 })
      .to('#scene-journey .journey__phase--match .journey__title .word .placeholder', { opacity: 0, stagger: 0.04, ease: 'power2.out', duration: 0.5 }, '<')
      .to('#scene-journey .journey__match', {
        y: 0,
        opacity: 1,
        scale: function (_index, el) { return getMatchScale(el); },
        stagger: 0.12,
        ease: 'power2.out',
        duration: 0.7
      })
      .to({}, { duration: J_HOLD })

      // Crossfade match → explain.
      .to('#scene-journey .journey__phase--match', { opacity: 0, ease: 'power2.in', duration: J_FADE })
      .to('#scene-journey .journey__phase--explain', { opacity: 1, ease: 'power2.out', duration: J_FADE }, '<')
      .to('#scene-journey .journey__matchy-bubble', { scale: 0.985, ease: 'power1.out', duration: 0.12 }, '<')
      .to('#scene-journey .journey__matchy-bubble', { scale: 1, ease: 'power2.out', duration: 0.18 })
      .to('#scene-journey .journey__matchy-copy--match', { opacity: 0, ease: 'power2.in', duration: J_FADE * 0.7 }, '<')
      .set('#scene-journey .journey__matchy-copy--explain .journey__matchy-char', { opacity: 0 }, '<')
      .to('#scene-journey .journey__matchy-copy--explain', { opacity: 1, ease: 'power2.out', duration: J_FADE * 0.7 }, '<+0.1')
      .to('#scene-journey .journey__matchy-copy--explain .journey__matchy-char', { opacity: 1, stagger: 0.012, ease: 'none', duration: 0.02 }, '<')

      // PHASE 4 — Explain: title and why panel slide up.
      .to('#scene-journey .journey__phase--explain .journey__title .word > span', { opacity: 1, y: 0, stagger: 0.04, ease: 'power2.out', duration: 0.5 })
      .to('#scene-journey .journey__phase--explain .journey__title .word .placeholder', { opacity: 0, stagger: 0.04, ease: 'power2.out', duration: 0.5 }, '<')
      .to('#scene-journey .journey__why', { y: 0, opacity: 1, ease: 'power2.out', duration: 0.7 })
      .to({}, { duration: J_HOLD });
    }

    // Scene 04 — After. Sofia settles; the review lands; the profile signal closes.
    const afterScene = document.querySelector('#scene-after');
    if (afterScene) {
      const A_FADE = 0.5;
      const A_HOLD = 1.4;

      gsap.timeline({
        scrollTrigger: {
          trigger: afterScene,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: afterScene.querySelector('.scene__sticky'),
        }
      })
      // PHASE 1 — Story turn.
      .to('#scene-after .after__sofia', { opacity: 1, y: 0, ease: 'power2.out', duration: 0.7 }, 0)
      .to('#scene-after .after__phase--story .word > span', { opacity: 1, y: 0, stagger: 0.04, ease: 'power2.out', duration: 0.6 }, 0.1)
      .to('#scene-after .after__phase--story .word .placeholder', { opacity: 0, stagger: 0.04, ease: 'power2.out', duration: 0.6 }, '<')
      .to('#scene-after .after__story-line--turn', { opacity: 1, y: 0, ease: 'power2.out', duration: 0.5 }, '<+0.45')
      .to('#scene-after .after__story-line--turn .char', { color: coralColor, stagger: 0.035, ease: 'power2.out', duration: 0.5 }, '<+0.15')
      .to({}, { duration: A_HOLD })

      // Crossfade story → review.
      .to('#scene-after .after__phase--story', { opacity: 0, ease: 'power2.in', duration: A_FADE })
      .to('#scene-after .after__phase--review', { opacity: 1, ease: 'power2.out', duration: A_FADE }, '<')
      .to('#scene-after .after__review', { opacity: 1, y: 0, ease: 'power2.out', duration: 0.8 }, '<+0.1')
      .to({}, { duration: A_HOLD * 1.45 })

      // Crossfade review → profile signal.
      .to('#scene-after .after__phase--review', { opacity: 0, ease: 'power2.in', duration: A_FADE })
      .to('#scene-after .after__phase--signal', { opacity: 1, ease: 'power2.out', duration: A_FADE }, '<')
      .to('#scene-after .after__signal-title', { opacity: 1, y: 0, ease: 'power2.out', duration: 0.5 }, '<+0.15')
      .to('#scene-after .after__signal-title .char', { color: coralColor, stagger: 0.04, ease: 'power2.out', duration: 0.5 }, '<+0.15')
      .to('#scene-after .after__agent', { opacity: 1, y: 0, ease: 'power2.out', duration: 0.35 }, '<+0.25')
      .to('#scene-after .after__agent-avatar', { opacity: 1, y: 0, scale: 1, ease: 'back.out(1.7)', duration: 0.35 }, '<')
      .to('#scene-after .after__agent-avatar img', { rotation: -4, scale: 1.04, ease: 'power2.out', duration: 0.22 }, '<+0.05')
      .to('#scene-after .after__agent-avatar img', { rotation: 0, scale: 1, ease: 'power2.out', duration: 0.24 })
      .to('#scene-after .after__agent-bubble', { opacity: 1, y: 0, scale: 0.985, ease: 'power2.out', duration: 0.2 }, '<-0.1')
      .to('#scene-after .after__agent-bubble', { scale: 1, ease: 'power2.out', duration: 0.18 })
      .to('#scene-after .after__agent-char', { opacity: 1, stagger: 0.012, ease: 'none', duration: 0.02 }, '<+0.05')
      .to({}, { duration: A_HOLD });
    }

    // Scene 05 — Invitation.
    const invitationScene = document.querySelector('#scene-invitation');
    if (invitationScene) {
      gsap.timeline({
        scrollTrigger: {
          trigger: invitationScene,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: invitationScene.querySelector('.scene__sticky'),
        }
      })
      .to('#scene-invitation .invitation__accent', { opacity: 1, y: 0, ease: 'power2.out', duration: 0.6 }, 0)
      .to('#scene-invitation .invitation__accent .char', { color: coralColor, stagger: 0.05, ease: 'power2.out', duration: 1.1 }, 0.15)
      .to('#scene-invitation .invitation__rest', { opacity: 1, y: 0, ease: 'power2.out', duration: 0.35 }, 0.9)
      .to('#scene-invitation .invitation__rest .word > span', { opacity: 1, y: 0, stagger: 0.08, ease: 'power2.out', duration: 1.2 }, 0.9)
      .to('#scene-invitation .invitation__rest .word .placeholder', { opacity: 0, stagger: 0.08, ease: 'power2.out', duration: 1.2 }, 0.9)
      .to('#scene-invitation .invitation__cta', { opacity: 1, y: 0, ease: 'power2.out', duration: 0.65 }, 1.85)
      .to('#scene-invitation .invitation__micro', { opacity: 1, y: 0, ease: 'power2.out', duration: 0.55 }, 3.05);
    }
  }
})();
