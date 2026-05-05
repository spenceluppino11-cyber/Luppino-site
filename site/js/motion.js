// LUPPINO motion: page-load reveal, scroll-triggered reveals, scroll-direction nav.
// Vanilla — no library. Respects prefers-reduced-motion via the CSS escape hatch.

(function () {
  const root = document.documentElement;
  const body = document.body;

  // ---------- Page load ----------
  const intro = document.querySelector('.intro');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const finishLoad = () => {
    body.classList.remove('has-intro');
    body.classList.add('is-loaded');
  };

  if (intro && !reduceMotion) {
    // Beat 1: LUPPINO logo (0.25s → 1.15s in, 1.6s → 2.15s out)
    // Beat 2: slogan fades in at 2.25s, holds until curtain rises with it
    // Curtain leaves at 4.0s, takes 1.2s
    const CURTAIN_START = 4000;
    const CURTAIN_DURATION = 1200;

    setTimeout(() => intro.classList.add('intro--leaving'), CURTAIN_START);
    // Reveal page contents as the curtain begins to lift, so the hero
    // animation is partially visible behind the moving panel.
    setTimeout(finishLoad, CURTAIN_START + 100);
    setTimeout(() => intro.classList.add('intro--done'), CURTAIN_START + CURTAIN_DURATION);
  } else {
    if (intro) intro.classList.add('intro--done');
    requestAnimationFrame(() => requestAnimationFrame(finishLoad));
  }

  // ---------- Scroll-triggered reveals ----------
  const revealEls = document.querySelectorAll(
    '.reveal, .reveal-mask, .reveal-lines, .reveal-stagger'
  );

  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    revealEls.forEach((el) => io.observe(el));

    // Safety net: any reveal element that's already inside the viewport
    // after the intro finishes must become visible immediately. And any
    // reveal element still hidden 6s later is force-revealed so content
    // can never stay permanently clipped/invisible.
    const sweep = () => {
      const vh = window.innerHeight;
      revealEls.forEach((el) => {
        if (el.classList.contains('is-visible')) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < vh && rect.bottom > 0) {
          el.classList.add('is-visible');
          io.unobserve(el);
        }
      });
    };
    window.addEventListener('load', () => setTimeout(sweep, 100));
    setTimeout(() => {
      revealEls.forEach((el) => el.classList.add('is-visible'));
    }, 6000);
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // ---------- Scroll-direction nav (hide on scroll-down, show on scroll-up) ----------
  const nav = document.querySelector('.nav');
  if (nav) {
    let lastY = window.scrollY;
    let ticking = false;
    const SCROLL_THRESHOLD = 8;
    const HIDE_AFTER = 120;

    const update = () => {
      const y = window.scrollY;
      const delta = y - lastY;

      if (y > 4) nav.classList.add('nav--scrolled');
      else nav.classList.remove('nav--scrolled');

      if (Math.abs(delta) > SCROLL_THRESHOLD) {
        if (delta > 0 && y > HIDE_AFTER) {
          nav.classList.add('nav--hidden');
        } else {
          nav.classList.remove('nav--hidden');
        }
        lastY = y;
      }
      ticking = false;
    };

    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          window.requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );
  }
})();
