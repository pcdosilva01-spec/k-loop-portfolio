(() => {
  const gsap = window.gsap;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ease = 'power3.out';

  function initGsapMotion() {
    document.documentElement.style.scrollBehavior = 'auto';
    const wind = document.createElement('div');
    wind.className = 'travel-wind';
    wind.setAttribute('aria-hidden', 'true');
    wind.innerHTML = '<i></i><i></i><i></i><i></i><i></i><i></i>';
    document.body.appendChild(wind);
    let scrollTween;
    const smoothFallback = (destination, target) => {
      const start = window.scrollY;
      const distance = destination - start;
      const duration = Math.min(900, Math.max(420, Math.abs(distance) * .72));
      const started = performance.now();
      const frame = (now) => {
        const progress = Math.min(1, (now - started) / duration);
        const eased = progress < .5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        window.scrollTo(0, start + distance * eased);
        if (progress < 1) requestAnimationFrame(frame);
        else history.replaceState(null, '', `#${target.id}`);
      };
      requestAnimationFrame(frame);
    };
    const travel = (target) => {
      const start = window.scrollY;
      const destination = Math.max(0, target.getBoundingClientRect().top + window.scrollY - 84);
      const distance = Math.abs(destination - start);
      const isContact = target.id === 'contato';
      if (reduced) { window.scrollTo(0, destination); return; }
      if (!gsap) { smoothFallback(destination, target); return; }
      if (scrollTween) scrollTween.kill();
      const proxy = { value: start };
      const duration = Math.min(1.05, Math.max(.42, distance / 1450));
      document.body.classList.add('is-traveling');
      const windIn = gsap.timeline();
      windIn.fromTo(wind, { autoAlpha: 0 }, { autoAlpha: .72, duration: .12, ease: 'power2.out' });
      windIn.fromTo('.travel-wind i', { y: '-18vh', scaleY: .35 }, { y: '118vh', scaleY: 1.3, duration: duration * .8, stagger: .035, ease: 'power1.in' }, 0);
      scrollTween = gsap.to(proxy, {
        value: destination,
        duration,
        ease: 'power3.inOut',
        overwrite: 'auto',
        onUpdate: () => window.scrollTo(0, proxy.value),
        onComplete: () => {
          history.replaceState(null, '', `#${target.id}`);
          if (isContact) {
            gsap.fromTo(target.querySelectorAll('.contact-copy > *, .contact-links > *, .contact-stamp'),
              { autoAlpha: 0, y: 18 },
              { autoAlpha: 1, y: 0, duration: .55, stagger: .07, ease: 'power3.out', overwrite: 'auto' });
          }
          gsap.to(wind, { autoAlpha: 0, duration: .22, ease: 'power2.out', onComplete: () => document.body.classList.remove('is-traveling') });
        },
      });
    };
    document.addEventListener('click', (event) => {
      const link = event.target.closest?.('a[href^="#"]');
      if (!link) return;
      const selector = link.getAttribute('href');
      if (!selector || selector === '#') return;
      const target = document.querySelector(selector);
      if (!target) return;
      event.preventDefault();
      event.stopPropagation();
      travel(target);
    }, true);
    if (!gsap || reduced) return;
    gsap.set('.hero-copy > *, .hero-art__core, .hero-tags span', { autoAlpha: 0 });
    const intro = gsap.timeline({ defaults: { ease } });
    intro
      .fromTo('.hero-copy > *', { y: 26, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .72, stagger: .08 })
      .fromTo('.hero-art__core', { scale: .78, rotation: -7, autoAlpha: 0 }, { scale: 1, rotation: -7, autoAlpha: 1, duration: .9, ease: 'back.out(1.15)' }, '-=.72')
      .fromTo('.hero-tags span', { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .42, stagger: .035 }, '-=.42');

    const reveals = document.querySelectorAll('.section-heading, .case-feature, .service-row, .creative-card, .loop-track li, .about, .contact');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        gsap.fromTo(entry.target, { y: 28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .72, ease, delay: entry.target.matches('.loop-track li') ? .06 * [...entry.target.parentNode.children].indexOf(entry.target) : 0, onComplete: () => entry.target.classList.add('motion-ready') });
        observer.unobserve(entry.target);
      });
    }, { threshold: .12 });
    reveals.forEach((item) => revealObserver.observe(item));

    const hoverItems = document.querySelectorAll('.button, .contact-link, .service-row');
    hoverItems.forEach((item) => {
      item.addEventListener('mouseenter', () => gsap.to(item, { y: -3, duration: .18, ease: 'power2.out', overwrite: 'auto' }));
      item.addEventListener('mouseleave', () => gsap.to(item, { y: 0, duration: .28, ease: 'power2.out', overwrite: 'auto' }));
    });
  }

  document.addEventListener('DOMContentLoaded', () => { initGsapMotion(); });
})();
