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
    gsap.set('.hero-copy > *, .hero-art__core, .hero-art__ring, .hero-tags span', { autoAlpha: 0 });
    const intro = gsap.timeline({ defaults: { ease } });
    intro
      .fromTo('.hero-copy > *', { y: 26, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .72, stagger: .08 })
      .fromTo('.hero-art__ring', { scale: .82, rotation: -12, autoAlpha: 0 }, { scale: 1, rotation: 0, autoAlpha: .62, duration: 1.1, stagger: .12 }, '-=.52')
      .fromTo('.hero-art__core', { scale: .78, rotation: -18, autoAlpha: 0 }, { scale: 1, rotation: -7, autoAlpha: 1, duration: .9, ease: 'back.out(1.15)' }, '-=.72')
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

  function initHeroThree() {
    const canvas = document.querySelector('#heroCanvas');
    const THREE = window.THREE;
    if (!canvas || !THREE || reduced || window.innerWidth < 801) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, 1, .1, 100);
    camera.position.z = 8;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    const group = new THREE.Group();
    scene.add(group);

    const material = new THREE.MeshBasicMaterial({ color: 0xff7a18, wireframe: true, transparent: true, opacity: .22 });
    const violet = new THREE.MeshBasicMaterial({ color: 0x5b2eff, wireframe: true, transparent: true, opacity: .28 });
    const orb = new THREE.Mesh(new THREE.IcosahedronGeometry(1.35, 2), material);
    const orbit = new THREE.Mesh(new THREE.TorusGeometry(1.85, .012, 8, 96), violet);
    orbit.rotation.set(.8, .2, -.4);
    group.add(orb, orbit);

    let pointerX = 0; let pointerY = 0;
    const onPointer = (event) => { pointerX = (event.clientX / window.innerWidth - .5) * .22; pointerY = (event.clientY / window.innerHeight - .5) * .16; };
    window.addEventListener('pointermove', onPointer, { passive: true });
    const resize = () => { const rect = canvas.getBoundingClientRect(); renderer.setSize(rect.width, rect.height, false); camera.aspect = rect.width / rect.height; camera.updateProjectionMatrix(); };
    resize(); window.addEventListener('resize', resize, { passive: true });
    const clock = new THREE.Clock(); let frame = 0; let active = true;
    const observer = new IntersectionObserver(([entry]) => { active = entry.isIntersecting; });
    observer.observe(canvas);
    const render = () => {
      if (active) {
        const t = clock.getElapsedTime();
        group.rotation.y += (pointerX - group.rotation.y) * .025;
        group.rotation.x += (pointerY - group.rotation.x) * .025;
        orb.rotation.x = t * .08; orb.rotation.z = t * .055;
        orbit.rotation.z = t * .12; orbit.position.y = Math.sin(t * .7) * .08;
        renderer.render(scene, camera);
      }
      frame = requestAnimationFrame(render);
    };
    render();
    window.addEventListener('pagehide', () => { cancelAnimationFrame(frame); observer.disconnect(); renderer.dispose(); });
  }

  document.addEventListener('DOMContentLoaded', () => { initGsapMotion(); initHeroThree(); });
})();
