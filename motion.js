(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initSmoothAnchors() {
    document.addEventListener('click', (event) => {
      const link = event.target.closest?.('a[href^="#"]');
      if (!link) return;

      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
      history.replaceState(null, '', id);
    });
  }

  function initLightweightReveals() {
    const revealItems = document.querySelectorAll(
      '.section-heading, .case-feature, .service-row, .creative-card, .loop-track li, .about, .contact'
    );

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });

    revealItems.forEach((item) => {
      item.classList.add('reveal');
      observer.observe(item);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initSmoothAnchors();
    initLightweightReveals();
  });
})();
