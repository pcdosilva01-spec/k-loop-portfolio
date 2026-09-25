const services = [
  ['01', 'Lojas Nuvemshop', 'Lojas virtuais com direção visual própria e uma experiência de compra clara.'],
  ['02', 'Landing Pages', 'Páginas que organizam uma ideia e conduzem o visitante até a próxima ação.'],
  ['03', 'Sites Institucionais', 'Presença digital com conteúdo, ritmo e personalidade para a marca.'],
  ['04', 'Web Design', 'Interfaces que equilibram intenção, beleza e facilidade de uso.'],
  ['05', 'Design de Interfaces', 'Sistemas visuais que dão consistência a produtos e experiências digitais.'],
  ['06', 'Desenvolvimento Web', 'Código limpo para transformar uma direção visual em uma experiência real.'],
  ['07', 'Identidade Visual Digital', 'Paleta, tipografia e elementos que fazem a marca continuar na tela.'],
  ['08', 'Projetos Personalizados', 'Uma combinação sob medida de estratégia, design e desenvolvimento.'],
];

const navLinks = [
  ['/trabalhos/', 'Trabalhos'], ['/servicos/', 'Serviços'], ['/processo/', 'Processo'],
  ['/sobre/', 'Sobre'], ['/contato/', 'Contato'],
];

function renderServices() {
  const target = document.querySelector('#servicesList');
  if (!target) return;
  target.innerHTML = services.map(([number, title, description]) => `<article class="service-row reveal"><span class="service-number">${number}</span><h3>${title}</h3><p>${description}</p><span class="service-arrow" aria-hidden="true">↗</span></article>`).join('');
}

function renderContact() {
  const target = document.querySelector('#contactLinks');
  if (!target) return;
  const config = window.KLoopConfig || {};
  const whatsapp = config.WHATSAPP_NUMBER ? `https://wa.me/${config.WHATSAPP_NUMBER.replace(/\D/g, '')}` : '';
  const links = [];
  if (whatsapp) links.push(`<a class="contact-link" href="${whatsapp}" target="_blank" rel="noopener noreferrer"><img class="contact-link__icon" src="/whatsapp.svg" alt="" /><span><strong>WhatsApp</strong><small>abrir canal ↗</small></span></a>`);
  if (config.INSTAGRAM_URL) links.push(`<a class="contact-link" href="${config.INSTAGRAM_URL}" target="_blank" rel="noopener noreferrer"><img class="contact-link__icon" src="/instagram.svg" alt="" /><span><strong>Instagram</strong><small>abrir perfil ↗</small></span></a>`);
  if (config.EMAIL) links.push(`<a class="contact-link" href="mailto:${config.EMAIL}"><img class="contact-link__icon" src="/gmail.svg" alt="" /><span><strong>E-mail</strong><small>${config.EMAIL}</small></span></a>`);
  target.innerHTML = links.length ? links.join('') : '<p class="empty-channel">Os canais de contato serão configurados em breve. Enquanto isso, você pode voltar aos trabalhos e conhecer o que já está no ar.</p>';
  const fab = document.querySelector('#whatsappFab');
  if (fab && whatsapp) { fab.href = whatsapp; fab.target = '_blank'; fab.rel = 'noopener noreferrer'; fab.classList.remove('whatsapp-fab--disabled'); }
}

function closeMenu() {
  const toggle = document.querySelector('.menu-toggle'); const nav = document.querySelector('.main-nav');
  toggle?.setAttribute('aria-expanded', 'false'); toggle?.setAttribute('aria-label', 'Abrir menu de navegação');
  nav?.classList.remove('is-open'); if (toggle) toggle.textContent = 'Menu'; document.body.classList.remove('menu-open');
}

function initNavigation() {
  const toggle = document.querySelector('.menu-toggle'); const nav = document.querySelector('.main-nav');
  toggle?.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!open)); toggle.setAttribute('aria-label', open ? 'Abrir menu de navegação' : 'Fechar menu de navegação'); toggle.textContent = open ? 'Menu' : 'Fechar'; nav?.classList.toggle('is-open', !open); document.body.classList.toggle('menu-open', !open); });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.querySelector('.menu-backdrop')?.addEventListener('click', closeMenu);
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
}

function initTransitions() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced) document.body.classList.add('page-enter');
  document.querySelectorAll('a[href^="/"]:not([target])').forEach((link) => link.addEventListener('click', (event) => {
    const url = new URL(link.href, location.href); if (url.origin !== location.origin || url.pathname === location.pathname) return;
    if (reduced || !document.startViewTransition) return;
    event.preventDefault(); document.body.classList.add('page-leave'); setTimeout(() => { location.href = url.href; }, 220);
  }));
}

function initMotion() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const progress = document.createElement('div'); progress.className = 'scroll-progress'; progress.setAttribute('aria-hidden', 'true'); document.body.appendChild(progress);
  const update = () => { const max = document.documentElement.scrollHeight - innerHeight; document.documentElement.style.setProperty('--scroll-progress', max > 0 ? `${scrollY / max * 100}%` : '0%'); };
  update(); addEventListener('scroll', update, { passive: true });
  const items = document.querySelectorAll('.reveal, .page-hero > *, .case-feature, .story-block, .process-step');
  if (reduced || !('IntersectionObserver' in window)) { items.forEach((item) => item.classList.add('is-visible')); return; }
  const observer = new IntersectionObserver((entries, current) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); current.unobserve(entry.target); } }), { threshold: .12, rootMargin: '0px 0px -6% 0px' });
  items.forEach((item, index) => { item.style.setProperty('--reveal-delay', `${Math.min(index * 45, 240)}ms`); item.classList.add('reveal'); observer.observe(item); });
}

document.addEventListener('DOMContentLoaded', () => { renderServices(); renderContact(); initNavigation(); initTransitions(); initMotion(); });
