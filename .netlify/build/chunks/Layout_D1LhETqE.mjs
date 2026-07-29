import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, d as renderComponent, e as renderSlot, h as renderHead } from './astro/server_C8WqoJ9r.mjs';
import 'kleur/colors';
/* empty css                                                  */
import 'clsx';

const $$Astro$2 = createAstro("https://www.creationsitewebpro.com");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Icon;
  const { name, className = "" } = Astro2.props;
  const icons = {
    web: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>`,
    shopping: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2M1 2v2h2l3.6 7.59-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2"/></svg>`,
    cellphone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 19H7V5h10m0-4H7c-1.11 0-2 .89-2 2v18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2"/></svg>`,
    magnify: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.52 6.52 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5"/></svg>`,
    trophy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.2 2H18c-.9 0-2 1-2 2H8c0-1-1.1-2-2-2H2v9c0 1 1 2 2 2h2.2c.4 2 1.7 3.7 4.8 4v2.1c-2.2.2-3 1.3-3 2.6v.3h8v-.3c0-1.3-.8-2.4-3-2.6V17c3.1-.3 4.4-2 4.8-4H20c1 0 2-1 2-2V2zM4 11V4h2v7zm16 0h-2V4h2z"/></svg>`,
    facebook: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>`,
    instagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>`,
    "map-pin": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`,
    tools: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m21.71 20.29-1.42 1.42a1 1 0 0 1-1.41 0L7 9.85A3.8 3.8 0 0 1 6 10a4 4 0 0 1-3.78-5.3l2.54 2.54.53-.53 1.42-1.42.53-.53L4.7 2.22A4 4 0 0 1 10 6a3.8 3.8 0 0 1-.15 1l11.86 11.88a1 1 0 0 1 0 1.41M2.29 18.88a1 1 0 0 0 0 1.41l1.42 1.42a1 1 0 0 0 1.41 0l5.47-5.46-2.83-2.83M20 2l-4 2v2l-2.17 2.17 2 2L18 8h2l2-4Z"/></svg>`,
    headphones: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 1c-5 0-9 4-9 9v7a3 3 0 0 0 3 3h3v-8H5v-2a7 7 0 0 1 7-7 7 7 0 0 1 7 7v2h-4v8h3a3 3 0 0 0 3-3v-7c0-5-4-9-9-9"/></svg>`,
    rocket: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m2.81 14.12 2.83-2.83 2.53-.5c3.22-4.38 9.38-6.57 11.61-6.57 0 2.23-2.19 8.39-6.57 11.61l-.5 2.53-2.83 2.83-.71-3.53c-1.41 0-1.41 0-2.12-.71s-.71-.71-.71-2.12zm2.83 2.83 1.41 1.41-2.66 2.67H2.97v-1.42zm-1.42-1.41 1.24.17L3 18.16v-1.42zm4.07 3 .17 1.24L7.26 21H5.84zM13 9.5a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5A1.5 1.5 0 0 0 13 9.5"/></svg>`,
    phone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 15.5c-1.2 0-2.3-.2-3.3-.6-.3-.1-.7 0-.9.2l-2.2 2.2c-3.2-1.7-5.8-4.3-7.5-7.5l2.2-2.2c.2-.2.3-.6.2-.9-.4-1-.6-2.1-.6-3.3 0-.5-.4-1-1-1H4c-.6 0-1 .5-1 1C3 15.9 8.1 21 14.5 21c.6 0 1-.4 1-1v-3.5c0-.5-.4-1-1-1z"/></svg>`,
    email: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
    "arrow-right": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 5L21 12L14 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  };
  const iconSvg = icons[name] || "";
  const useInlineIcon = iconSvg !== "";
  return renderTemplate`${useInlineIcon ? renderTemplate`${maybeRenderHead()}<span${addAttribute(`icon ${className}`, "class")} data-astro-cid-patnjmll>${unescapeHTML(iconSvg)}</span>` : renderTemplate`<img${addAttribute(`/icons/${name}.svg`, "src")}${addAttribute(`Ic\xF4ne ${name}`, "alt")}${addAttribute(`icon ${className}`, "class")} width="24" height="24" data-astro-cid-patnjmll>`}`;
}, "C:/Users/user/projets/CreationSiteWebPro/src/components/Icon.astro", void 0);

const napInfo = {
  name: "CreationSiteWebPro",
  address: {
    street: "Ain Sebaa",
    city: "Casablanca",
    postalCode: "20000",
    country: "Maroc"
  },
  phone: "+212 6 79 78 29 06",
  email: "contact@creationsitewebpro.com",
  coordinates: {
    latitude: 33.5731,
    longitude: -7.619
  }
};

const $$FixedHeader3 = createComponent(($$result, $$props, $$slots) => {
  const phoneHref = napInfo.phone.replace(/\s+/g, "");
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-mkd4eqyh> <div class="container header__container" data-astro-cid-mkd4eqyh> <a class="header__logo" href="/" aria-label="CreationSiteWebPro — Accueil" data-astro-cid-mkd4eqyh> <img src="/icons/modern-logo.svg" alt="CreationSiteWebPro" width="180" height="50" data-astro-cid-mkd4eqyh> </a> <button class="header__menu-toggle" type="button" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="main-navigation" data-astro-cid-mkd4eqyh> <span class="header__menu-icon" aria-hidden="true" data-astro-cid-mkd4eqyh></span> </button> <div class="header__nav-container" id="main-navigation" data-astro-cid-mkd4eqyh> <nav class="header__nav" aria-label="Navigation principale" data-astro-cid-mkd4eqyh> <ul class="header__nav-list" data-astro-cid-mkd4eqyh> <li class="header__nav-item" data-astro-cid-mkd4eqyh> <a href="/" class="header__nav-link" data-astro-cid-mkd4eqyh>Accueil</a> </li> <li class="header__nav-item header__has-dropdown" id="services-menu" data-astro-cid-mkd4eqyh> <div class="header__service-control" data-astro-cid-mkd4eqyh> <a href="/services" class="header__nav-link services-link" data-astro-cid-mkd4eqyh>Services</a> <button class="header__dropdown-toggle" type="button" aria-label="Afficher les services" aria-expanded="false" aria-controls="services-dropdown" aria-haspopup="true" data-astro-cid-mkd4eqyh> <span class="header__dropdown-icon" aria-hidden="true" data-astro-cid-mkd4eqyh>▾</span> </button> </div> <ul class="header__dropdown" id="services-dropdown" data-astro-cid-mkd4eqyh> <li data-astro-cid-mkd4eqyh><a href="/creation-site-web-casablanca" data-astro-cid-mkd4eqyh>Création Site Web Casablanca</a></li> <li data-astro-cid-mkd4eqyh><a href="/creation-site-web-maroc" data-astro-cid-mkd4eqyh>Création Site Web Maroc</a></li> <li data-astro-cid-mkd4eqyh><a href="/services/e-commerce-casablanca" data-astro-cid-mkd4eqyh>E-commerce</a></li> <li data-astro-cid-mkd4eqyh><a href="/services/referencement-seo-casablanca" data-astro-cid-mkd4eqyh>Référencement SEO</a></li> <li data-astro-cid-mkd4eqyh><a href="/services/creation-application-web" data-astro-cid-mkd4eqyh>Applications web</a></li> </ul> </li> <li class="header__nav-item" data-astro-cid-mkd4eqyh> <a href="/portfolio-realisations-web-casablanca-maroc" class="header__nav-link" data-astro-cid-mkd4eqyh>
Portfolio
</a> </li> <li class="header__nav-item" data-astro-cid-mkd4eqyh> <a href="/blog" class="header__nav-link" data-astro-cid-mkd4eqyh>Blog</a> </li> <li class="header__nav-item" data-astro-cid-mkd4eqyh> <a href="/a-propos-agence-web-casablanca" class="header__nav-link" data-astro-cid-mkd4eqyh>À propos</a> </li> </ul> </nav> <div class="header__actions" data-astro-cid-mkd4eqyh> <div class="header__contact-info" data-astro-cid-mkd4eqyh> <a${addAttribute(`tel:${phoneHref}`, "href")} class="header__contact-link" data-astro-cid-mkd4eqyh> ${renderComponent($$result, "Icon", $$Icon, { "name": "phone", "className": "header__contact-icon", "data-astro-cid-mkd4eqyh": true })} <span data-astro-cid-mkd4eqyh>${napInfo.phone}</span> </a> <a${addAttribute(`mailto:${napInfo.email}`, "href")} class="header__contact-link" data-astro-cid-mkd4eqyh> ${renderComponent($$result, "Icon", $$Icon, { "name": "email", "className": "header__contact-icon", "data-astro-cid-mkd4eqyh": true })} <span data-astro-cid-mkd4eqyh>${napInfo.email}</span> </a> </div> <a href="/contact" class="btn btn-primary header__cta btn-icon" data-astro-cid-mkd4eqyh> <span data-astro-cid-mkd4eqyh>Demandez un devis</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-right", "className": "header__cta-icon", "data-astro-cid-mkd4eqyh": true })} </a> </div> </div> </div> </header>  `;
}, "C:/Users/user/projets/CreationSiteWebPro/src/components/FixedHeader3.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="footer-wave" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" data-astro-cid-sz7xmlte> <path fill="var(--color-primary)" fill-opacity="1" d="M0,128L48,133.3C96,139,192,149,288,154.7C384,160,480,160,576,165.3C672,171,768,181,864,181.3C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" data-astro-cid-sz7xmlte></path> </svg> </div> <div class="footer-content container" data-astro-cid-sz7xmlte> <div class="footer-section" data-astro-cid-sz7xmlte> <div class="footer-logo" data-astro-cid-sz7xmlte> <img src="/icons/modern-logo.svg" alt="CreationSiteWebPro Logo" width="180" height="50" data-astro-cid-sz7xmlte> </div> <p data-astro-cid-sz7xmlte>Votre partenaire pour des solutions web professionnelles à Casablanca et dans tout le Maroc.</p> <div class="social-icons" data-astro-cid-sz7xmlte> <a href="https://www.facebook.com/creationsitewebpro" aria-label="Facebook" class="social-icon" target="_blank" rel="noopener" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Icon", $$Icon, { "name": "facebook", "className": "social-icon-img", "data-astro-cid-sz7xmlte": true })} </a> <a href="https://www.instagram.com/creation_sitewebpro?igsh=MW9xMzlxMTNkYjV2Zg==" aria-label="Instagram" class="social-icon" target="_blank" rel="noopener" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Icon", $$Icon, { "name": "instagram", "className": "social-icon-img", "data-astro-cid-sz7xmlte": true })} </a> <a href="https://www.linkedin.com/company/creationsitewebpro" aria-label="LinkedIn" class="social-icon" target="_blank" rel="noopener" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Icon", $$Icon, { "name": "linkedin", "className": "social-icon-img", "data-astro-cid-sz7xmlte": true })} </a> </div> </div> <div class="footer-section" data-astro-cid-sz7xmlte> <h3 data-astro-cid-sz7xmlte>Nos Services</h3> <ul class="footer-links" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="/creation-site-web-casablanca" data-astro-cid-sz7xmlte>Création Site Web Casablanca</a></li> <li data-astro-cid-sz7xmlte><a href="/creation-site-web-maroc" data-astro-cid-sz7xmlte>Création Site Web Maroc</a></li> <li data-astro-cid-sz7xmlte><a href="/services/e-commerce-casablanca" data-astro-cid-sz7xmlte>E-commerce Casablanca</a></li> <li data-astro-cid-sz7xmlte><a href="/services/referencement-seo-casablanca" data-astro-cid-sz7xmlte>SEO Casablanca</a></li> <li data-astro-cid-sz7xmlte><a href="/services/creation-application-web" data-astro-cid-sz7xmlte>Applications web</a></li> <li data-astro-cid-sz7xmlte><a href="/agence-digitale-maroc" data-astro-cid-sz7xmlte>Agence Digitale Maroc</a></li> </ul> </div> <div class="footer-section" data-astro-cid-sz7xmlte> <h3 data-astro-cid-sz7xmlte>Liens Utiles</h3> <ul class="footer-links" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="/portfolio-realisations-web-casablanca-maroc" data-astro-cid-sz7xmlte>Portfolio</a></li> <li data-astro-cid-sz7xmlte><a href="/a-propos-agence-web-casablanca" data-astro-cid-sz7xmlte>À propos</a></li> <li data-astro-cid-sz7xmlte><a href="/blog" data-astro-cid-sz7xmlte>Blog</a></li> <li data-astro-cid-sz7xmlte><a href="/outils/cours-action-t2s-maroc" data-astro-cid-sz7xmlte>Calculateur action T2S</a></li> <li data-astro-cid-sz7xmlte><a href="/contact" data-astro-cid-sz7xmlte>Contact</a></li> <li data-astro-cid-sz7xmlte><a href="/faq-creation-site-web-maroc" data-astro-cid-sz7xmlte>FAQ</a></li> </ul> </div> <div class="footer-section" data-astro-cid-sz7xmlte> <h3 data-astro-cid-sz7xmlte>Contact</h3> <div class="contact-info" data-astro-cid-sz7xmlte> <p class="address-line" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Icon", $$Icon, { "name": "map-pin", "className": "footer-icon", "data-astro-cid-sz7xmlte": true })} <span data-astro-cid-sz7xmlte> <span data-astro-cid-sz7xmlte>${napInfo.address.street}</span>,
<span data-astro-cid-sz7xmlte>${napInfo.address.city}</span> <span data-astro-cid-sz7xmlte>${napInfo.address.postalCode}</span>,
<span data-astro-cid-sz7xmlte>${napInfo.address.country}</span> </span> </p> <p class="contact-line" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Icon", $$Icon, { "name": "phone", "className": "footer-icon", "data-astro-cid-sz7xmlte": true })} <a${addAttribute(`tel:${napInfo.phone.replace(/\s+/g, "")}`, "href")} data-astro-cid-sz7xmlte>${napInfo.phone}</a> </p> <p class="contact-line" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Icon", $$Icon, { "name": "email", "className": "footer-icon", "data-astro-cid-sz7xmlte": true })} <a${addAttribute(`mailto:${napInfo.email}`, "href")} data-astro-cid-sz7xmlte>${napInfo.email}</a> </p> </div> <div class="newsletter" data-astro-cid-sz7xmlte> <h4 data-astro-cid-sz7xmlte>Un projet web&nbsp;?</h4> <a class="btn-primary btn-sm" href="/contact" data-astro-cid-sz7xmlte>Parler à un conseiller</a> </div> </div> </div> <div class="footer-bottom" data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <div class="footer-copyright" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>&copy; ${currentYear} <span data-astro-cid-sz7xmlte>${napInfo.name}</span>. Tous droits réservés.</p> <div class="footer-legal-links" data-astro-cid-sz7xmlte> <a href="/mentions-legales" data-astro-cid-sz7xmlte>Mentions légales</a> <span class="separator" data-astro-cid-sz7xmlte></span> <a href="/politique-confidentialite" data-astro-cid-sz7xmlte>Politique de confidentialité</a> </div> </div> </div> </div> </footer> `;
}, "C:/Users/user/projets/CreationSiteWebPro/src/components/Footer.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://www.creationsitewebpro.com");
const $$JsonLd = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$JsonLd;
  const { data, breadcrumbs = [] } = Astro2.props;
  const siteUrl = Astro2.site ?? new URL("https://www.creationsitewebpro.com");
  const schemas = [data];
  if (breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.item.startsWith("http") ? item.item : new URL(item.item, siteUrl).toString()
      }))
    });
  }
  const serializeSchema = (schema) => JSON.stringify(schema).replace(/</g, "\\u003c");
  return renderTemplate`${schemas.map((schema) => renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(serializeSchema(schema))))}`;
}, "C:/Users/user/projets/CreationSiteWebPro/src/components/JsonLd.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.creationsitewebpro.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.creationsitewebpro.com/#website",
    "name": "CreationSiteWebPro",
    "url": "https://www.creationsitewebpro.com",
    "description": "Agence web \xE0 Casablanca sp\xE9cialis\xE9e en cr\xE9ation de sites web professionnels, e-commerce et r\xE9f\xE9rencement SEO au Maroc depuis 2013.",
    "publisher": {
      "@type": "LocalBusiness",
      "@id": "https://www.creationsitewebpro.com/#localbusiness",
      "name": "CreationSiteWebPro"
    },
    "inLanguage": "fr-MA"
  };
  const {
    title,
    description,
    canonical,
    noindex = false,
    nofollow = false
  } = Astro2.props;
  const fullTitle = title;
  const siteUrl = "https://www.creationsitewebpro.com";
  const canonicalUrl = canonical || new URL(Astro2.url.pathname, siteUrl).toString();
  const socialImage = `${siteUrl}/images/og-image.jpg`;
  const robotsContent = [
    noindex ? "noindex" : "index",
    nofollow ? "nofollow" : "follow",
    ...!noindex ? ["max-snippet:-1", "max-image-preview:large", "max-video-preview:-1"] : []
  ].join(", ");
  const phoneHref = `tel:${napInfo.phone.replace(/\s+/g, "")}`;
  const whatsappNumber = napInfo.phone.replace(/\D/g, "");
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=Bonjour%2C%20je%20souhaite%20vous%20parler%20de%20mon%20projet%20web.`;
  return renderTemplate(_a || (_a = __template(['<html lang="fr-MA" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', '</title><meta name="description"', '><meta name="robots"', '><link rel="canonical"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:alt" content="CreationSiteWebPro, agence web \xE0 Casablanca"><meta property="og:url"', '><meta property="og:type" content="website"><meta property="og:locale" content="fr_MA"><meta property="og:site_name" content="CreationSiteWebPro"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', `><meta name="twitter:image:alt" content="CreationSiteWebPro, agence web \xE0 Casablanca"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="alternate" type="application/rss+xml" title="Blog CreationSiteWebPro" href="/rss.xml"><!-- La feuille Google Fonts est import\xE9e une seule fois depuis global.css --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><meta name="google-adsense-account" content="ca-pub-9201463900934910"><!-- Consentement refus\xE9 par d\xE9faut avant toute commande de mesure --><script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('consent', 'default', {
			  analytics_storage: 'denied',
			  ad_storage: 'denied',
			  ad_user_data: 'denied',
			  ad_personalization: 'denied',
			  wait_for_update: 500
			});
			gtag('set', 'ads_data_redaction', true);
		  <\/script><!-- Axeptio script --><script>
			window.axeptioSettings = {
			  clientId: "670b2e5faa752cff8b2798a7",
			  cookiesVersion: "creationsitewebpro-fr-EU",
			  googleConsentMode: {
				default: {
				  analytics_storage: "denied",
				  ad_storage: "denied",
				  ad_user_data: "denied",
				  ad_personalization: "denied",
				  wait_for_update: 500
				}
			  }
			};
			(function(d, s) {
			  var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
			  e.async = true; e.src = "https://static.axept.io/sdk.js";
			  t.parentNode.insertBefore(e, t);
			})(document, "script");
		  <\/script><!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-NXNXH1YHKH"><\/script><script>
      gtag('js', new Date());
      gtag('config', 'G-NXNXH1YHKH');
    <\/script><meta name="google-site-verification" content="fnVkDYa43l9HV440UQFMYxR143Nlqkw95E5ZEg_2cJg">`, "", "</head> <body data-astro-cid-sckkx6r4> ", ' <main class="site-content" data-astro-cid-sckkx6r4> ', " </main> ", " <!-- Floating action buttons --> <a", ' class="floating-whatsapp-btn" aria-label="Nous contacter sur WhatsApp" data-astro-cid-sckkx6r4> <img src="/icons/WhatsApp.svg" alt="" class="floating-whatsapp-icon" width="30" height="30" data-astro-cid-sckkx6r4> </a> <a', ' class="floating-call-btn" aria-label="Nous appeler directement" data-astro-cid-sckkx6r4> <img src="/icons/phone-simple.svg" alt="" class="floating-call-icon" width="30" height="30" data-astro-cid-sckkx6r4> </a> </body></html>'])), fullTitle, addAttribute(description, "content"), addAttribute(robotsContent, "content"), addAttribute(canonicalUrl, "href"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(socialImage, "content"), addAttribute(canonicalUrl, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(socialImage, "content"), renderComponent($$result, "JsonLd", $$JsonLd, { "data": websiteSchema, "data-astro-cid-sckkx6r4": true }), renderHead(), renderComponent($$result, "FixedHeader", $$FixedHeader3, { "data-astro-cid-sckkx6r4": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true }), addAttribute(whatsappHref, "href"), addAttribute(phoneHref, "href"));
}, "C:/Users/user/projets/CreationSiteWebPro/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$JsonLd as a, $$Icon as b, napInfo as n };
