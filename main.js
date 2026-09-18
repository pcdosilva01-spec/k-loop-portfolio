const projects = [
  {
    title: "Tayna Xavier Boutique",
    category: "E-commerce / Nuvemshop",
    description: "Desenvolvimento completo de uma loja virtual para uma boutique de moda feminina, da identidade visual à configuração do e-commerce.",
    url: "https://txmodafeminina.lojavirtualnuvem.com.br/",
    technologies: ["Nuvemshop", "SEO", "E-commerce"],
    featured: true,
    image: "public/projects/tayna-xavier/desktop.webp",
    imageLabel: "Screenshot do projeto Tayna Xavier Boutique",
    context: "Uma boutique precisava transformar seus produtos e sua presença digital em uma loja virtual organizada, clara e pronta para vender.",
    role: "Desenvolvimento completo da loja, direção visual e configuração do e-commerce.",
    scope: ["Tema e identidade visual", "Cadastro e configuração de produtos", "Títulos, descrições e tags para SEO", "Pagamentos e estrutura da loja"],
  },
];

const services = [
  ["01", "Lojas Nuvemshop", "Criação e configuração de lojas virtuais com identidade própria, produtos organizados e estrutura pronta para vender."],
  ["02", "Landing Pages", "Páginas objetivas para apresentar uma ideia, serviço, produto ou campanha e conduzir até a próxima ação."],
  ["03", "Sites Institucionais", "Sites para marcas, profissionais e negócios que precisam explicar quem são e mostrar seu trabalho com clareza."],
  ["04", "Web Design", "Direção visual, layout e experiência para transformar uma ideia em uma interface bonita e fácil de usar."],
  ["05", "E-mail profissional", "Configuração e orientação para a comunicação digital da sua marca parecer mais organizada e confiável."],
  ["06", "Desenvolvimento Web", "Construção de páginas e experiências digitais que tiram o layout do papel e colocam o projeto no ar."],
  ["07", "Identidade Visual", "Cores, tipografia e elementos visuais para sua marca ter personalidade e consistência na tela."],
  ["08", "Projetos Personalizados", "Uma solução sob medida para qualquer ideia que precise de estratégia, design, conteúdo ou desenvolvimento."],
];

const creativeCategories = [
  { icon: "orbit", title: "Projetos pessoais", description: "Experimentos autorais, conceitos e ideias que viram forma.", items: ["Conceitos visuais", "Microsites", "Experimentos interativos"] },
  { icon: "image", title: "Imagens & designs", description: "Direção visual para comunicar uma ideia em poucos segundos.", items: ["Direção de arte", "Peças para redes", "Composições digitais"] },
  { icon: "campaign", title: "Banners & campanhas", description: "Banners com hierarquia, impacto e espaço para a mensagem respirar.", items: ["Banners promocionais", "Campanhas sazonais", "Peças para e-commerce"] },
  { icon: "window", title: "Sites & produtos", description: "Estruturas digitais pensadas para explorar, escolher e agir.", items: ["Sites institucionais", "Lojas virtuais", "Landing pages"] },
  { icon: "cursor", title: "Interfaces e protótipos", description: "Fluxos, telas e protótipos para testar uma experiência antes do código.", items: ["Wireframes", "Protótipos navegáveis", "Design systems"] },
  { icon: "shop", title: "E-commerce e vitrines", description: "Peças e experiências para apresentar produtos com clareza e desejo.", items: ["Vitrines digitais", "Banners de loja", "Campanhas de produto"] },
];

const icon = (src, alt = "") => `<img class="contact-link__icon" src="${src}" alt="${alt}" />`;

const labIcon = (name) => {
  const paths = {
    orbit: '<circle cx="12" cy="12" r="3"/><path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8Z"/><path d="M7 5.2c3.8-2.2 8.7-.9 10.9 2.9s.9 8.7-2.9 10.9"/>',
    image: '<rect x="3.5" y="4" width="17" height="16" rx="2"/><circle cx="8.5" cy="9" r="1.5"/><path d="m5.5 17 4.2-4.2 2.8 2.8 2.2-2.2 3.8 3.8"/>',
    campaign: '<path d="M4 6.5h16v11H4z"/><path d="m7 14 3-4 2.5 3 2-2 2.5 3"/><path d="M7 4v2.5M17 4v2.5"/>',
    window: '<rect x="3.5" y="4" width="17" height="16" rx="2"/><path d="M3.5 8h17M7 6h.01M10 6h.01"/>',
    cursor: '<path d="m6 3 11 9.5-5.4 1.2 2.7 5-2.4 1.2-2.7-5-3.2 4.4Z"/>',
    shop: '<path d="M4 10h16v10H4zM3 10l2-5h14l2 5"/><path d="M8 10v2a2 2 0 0 0 4 0v-2a2 2 0 0 0 4 0v-2"/><path d="M9 20v-5h6v5"/>',
  };
  return `<svg class="lab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.orbit}</svg>`;
};

const arrowIcon = '<svg class="lab-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 18 18 6M8 6h10v10"/></svg>';

function renderProjects() {
  const target = document.querySelector("#projectShowcase");
  if (!target) return;
  target.innerHTML = projects.map((project) => `
    <article class="case-feature">
      <div class="case-visual ${project.image ? "case-visual--image" : "case-visual--empty"}">
        ${project.image ? `<img src="${project.image}" alt="${project.imageLabel}" loading="lazy" />` : `<div class="asset-placeholder"><span>imagem do case</span><strong>${project.imageLabel}</strong><small>Adicione um screenshot real na pasta de assets do case</small></div>`}
        <div class="browser-bar" aria-hidden="true"><i></i><i></i><i></i><span>txmodafeminina.lojavirtualnuvem.com.br</span></div>
      </div>
      <div class="case-details">
        <div class="case-meta"><span>case principal</span><span>${project.category}</span></div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="case-story"><div><strong>Contexto</strong><span>${project.context}</span></div><div><strong>Meu papel</strong><span>${project.role}</span></div></div>
        <div class="case-scope"><strong>O que foi feito</strong><ul>${project.scope.map((item) => `<li>${item}</li>`).join("")}</ul></div>
        <div class="tech-list">${project.technologies.map((tech) => `<span>${tech}</span>`).join("")}</div>
        <a class="button button-outline" href="${project.url}" target="_blank" rel="noopener noreferrer">Visitar projeto <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  `).join("");
}

function renderServices() {
  const target = document.querySelector("#servicesList");
  if (!target) return;
  target.innerHTML = services.map(([number, title, description], index) => `
    <article class="service-row ${index === 0 ? "service-row--featured" : ""}">
      <span class="service-number">${number}</span><h3>${title}</h3><p>${description}</p><span class="service-arrow" aria-hidden="true">↗</span>
    </article>
  `).join("");
}

function renderCreativeLab() {
  const target = document.querySelector("#creativeGrid");
  if (!target) return;
  target.innerHTML = creativeCategories.map((category, index) => `
    <article class="creative-card ${index === 0 ? "is-open" : ""}">
      <button class="creative-trigger" type="button" aria-expanded="${index === 0 ? "true" : "false"}" aria-controls="creative-panel-${index}">
        <span class="creative-card__icon">${labIcon(category.icon)}</span><span class="creative-card__title">${category.title}</span><span class="creative-card__arrow">${arrowIcon}</span>
      </button>
      <div class="creative-panel" id="creative-panel-${index}" role="region" aria-label="${category.title}" style="grid-template-rows:${index === 0 ? "1fr" : "0fr"}"><div class="creative-card__body"><p>${category.description}</p><div class="creative-items">${category.items.map((item) => `<span>${item}</span>`).join("")}</div><a href="#contato" class="creative-card__action">Solicitar orçamento <span aria-hidden="true">↘</span></a></div></div>
    </article>
  `).join("");
  const setPanelState = (card, open, immediate = false, done = () => {}) => {
    const panel = card.querySelector(".creative-panel");
    const body = panel.querySelector(".creative-card__body");
    const chips = panel.querySelectorAll(".creative-items span");
    const action = panel.querySelector(".creative-card__action");
    if (immediate) { panel.style.height = open ? "auto" : "0px"; return; }
    if (window.gsap) {
      const tl = card._labTimeline || window.gsap.timeline({ paused: true });
      card._labTimeline = tl;
      tl.clear();
      if (open) {
        panel.style.height = "0px";
        body.style.opacity = "0";
        body.style.transform = "translateY(-18px)";
        window.gsap.set([chips, action], { autoAlpha: 0, y: 14 });
        tl.to(panel, { height: panel.scrollHeight, duration: .52, ease: "power3.out" })
          .to(body, { autoAlpha: 1, y: 0, duration: .25, ease: "power2.out" }, "-=.18")
          .to(chips, { autoAlpha: 1, y: 0, duration: .2, stagger: .045, ease: "power2.out" }, "-=.08")
          .to(action, { autoAlpha: 1, x: 0, duration: .22, ease: "power2.out" }, "-=.1")
          .set(panel, { height: "auto" });
        tl.play();
      } else {
        panel.style.height = `${panel.scrollHeight}px`;
        tl.to(action, { autoAlpha: 0, y: 3, duration: .1, ease: "power2.in" })
          .to(chips, { autoAlpha: 0, y: 3, duration: .1, stagger: .025, ease: "power2.in" }, "-=.06")
          .to(body, { autoAlpha: 0, y: -4, duration: .14, ease: "power2.in" }, "-=.05")
          .to(panel, { height: 0, duration: .3, ease: "power2.in" }, "-=.04")
          .call(() => { card.classList.remove("is-open"); done(); });
        tl.play(0);
      }
      return;
    }
    panel.style.height = open ? `${panel.scrollHeight}px` : "0px";
  };
  target.querySelectorAll(".creative-card.is-open").forEach((card) => setPanelState(card, true, true));
  target.querySelectorAll(".creative-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const card = trigger.closest(".creative-card");
      const panel = card.querySelector(".creative-panel");
      const isOpen = card.classList.contains("is-open");
      target.querySelectorAll(".creative-card.is-open").forEach((other) => {
        if (other === card) return;
        other.querySelector(".creative-trigger").setAttribute("aria-expanded", "false");
        setPanelState(other, false);
      });
      trigger.setAttribute("aria-expanded", String(!isOpen));
      if (isOpen) {
        setPanelState(card, false);
      } else {
        card.classList.add("is-open");
        setPanelState(card, true);
        card.classList.remove("is-opening");
        requestAnimationFrame(() => card.classList.add("is-opening"));
      }
    });
  });
}

function configuredContact(label, iconSrc, href, emptyLabel) {
  if (!href) return `<span class="contact-link contact-link--disabled" aria-label="${label} ainda não configurado">${icon(iconSrc, "")}<span><strong>${label}</strong><small>${emptyLabel}</small></span></span>`;
  return `<a class="contact-link" href="${href}" target="_blank" rel="noopener noreferrer">${icon(iconSrc, label)}<span><strong>${label}</strong><small>abrir canal ↗</small></span></a>`;
}

function renderContact() {
  const target = document.querySelector("#contactLinks");
  if (!target) return;
  const config = window.KLoopConfig || {};
  const whatsapp = config.WHATSAPP_NUMBER ? `https://wa.me/${config.WHATSAPP_NUMBER.replace(/\D/g, "")}` : "";
  target.innerHTML = configuredContact("WhatsApp", "whatsapp.svg", whatsapp, "configure o número");
  const fab = document.querySelector("#whatsappFab");
  if (fab && whatsapp) { fab.href = whatsapp; fab.target = "_blank"; fab.rel = "noopener noreferrer"; fab.removeAttribute("aria-label"); fab.setAttribute("aria-label", "Falar pelo WhatsApp"); fab.title = "Falar pelo WhatsApp"; }
  if (fab && !whatsapp) fab.classList.add("whatsapp-fab--disabled");
}

function initNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  toggle?.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    toggle.setAttribute("aria-label", open ? "Abrir menu de navegação" : "Fechar menu de navegação");
    nav.classList.toggle("is-open", !open);
    toggle.textContent = open ? "Menu" : "Fechar";
  });
  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    toggle?.setAttribute("aria-expanded", "false"); toggle?.setAttribute("aria-label", "Abrir menu de navegação"); nav?.classList.remove("is-open"); if (toggle) toggle.textContent = "Menu";
  }));
}

function initReveal() {
  const items = document.querySelectorAll(".case-feature, .service-row, .about, .contact");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const observer = new IntersectionObserver((entries, current) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); current.unobserve(entry.target); } }), { threshold: 0.12 });
  items.forEach((item, index) => { item.style.setProperty("--reveal-delay", `${Math.min(index * 70, 280)}ms`); item.classList.add("reveal"); observer.observe(item); });
}

function initAdvancedMotion() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const root = document.documentElement;
  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  document.body.appendChild(progress);
  const updateScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    root.style.setProperty("--scroll-progress", max > 0 ? `${(window.scrollY / max) * 100}%` : "0%");
    document.body.classList.toggle("is-scrolling", window.scrollY > 24);
  };
  updateScroll();
  window.addEventListener("scroll", updateScroll, { passive: true });
  if (reduced) return;
  const hero = document.querySelector(".hero");
  const art = document.querySelector(".hero-art");
  hero?.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    hero.style.setProperty("--pointer-x", `${x * 18}px`); hero.style.setProperty("--pointer-y", `${y * 14}px`); art?.style.setProperty("--art-tilt", `${x * 2}deg`);
  });
  hero?.addEventListener("pointerleave", () => { hero.style.setProperty("--pointer-x", "0px"); hero.style.setProperty("--pointer-y", "0px"); art?.style.setProperty("--art-tilt", "0deg"); });
  document.querySelectorAll(".case-visual, .about-mark").forEach((surface) => {
    surface.addEventListener("pointermove", (event) => { const rect = surface.getBoundingClientRect(); const x = (event.clientX - rect.left) / rect.width - 0.5; const y = (event.clientY - rect.top) / rect.height - 0.5; surface.style.setProperty("--tilt-x", `${y * -3}deg`); surface.style.setProperty("--tilt-y", `${x * 3}deg`); });
    surface.addEventListener("pointerleave", () => { surface.style.setProperty("--tilt-x", "0deg"); surface.style.setProperty("--tilt-y", "0deg"); });
  });
}

document.addEventListener("DOMContentLoaded", () => { renderProjects(); renderServices(); renderCreativeLab(); renderContact(); initNavigation(); initReveal(); initAdvancedMotion(); });
