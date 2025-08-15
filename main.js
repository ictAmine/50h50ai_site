// Año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

// i18n ES/EN/NL
const i18n = {
  ES: {
    nav_services: "Servicios",
    nav_portfolio: "Portafolio",
    nav_pricing: "Precios",
    nav_contact: "Contacto",
    hero_title: "Websites a medida: 50% humano, 50% inteligencia artificial",
    hero_sub: "Diseño con alma. Datos con cerebro. Sitios rápidos, elegantes y listos para vender.",
    cta_primary: "Pide tu demo",
    cta_secondary: "Ver trabajos",
    svc_title: "Servicios",
    svc_1: "Webs a medida (landing, e-commerce, dashboard).",
    svc_2: "Automatización con IA (chatbots, emails, asistentes).",
    svc_3: "Performance & SEO (Core Web Vitals, esquema, metadata).",
    svc_4: "Mantenimiento (hosting, backups, mejoras).",
    svc_note: "“Hecho a tu gusto, sin plantillas rígidas. Lo que imaginas, lo programamos.”",
    how_title: "¿Cómo trabajamos?",
    how_1: "Brief 15’ (objetivo y estilo).",
    how_2: "Wireframe rápido + copy IA.",
    how_3: "Diseño vivo + revisión humana.",
    how_4: "Entrega + medición (analytics).",
    pf_title: "Portafolio",
    pf_sub: "Selección de proyectos reales",
    price_title: "Precios simples",
    p_basic: "Starter",
    p_pro: "Pro",
    p_custom: "A medida",
    cta_select: "Elegir",
    price_note: "Precios orientativos. Facturamos en NL. IVA según normativa.",
    ct_title: "Contacto",
    ct_sub: "Cuéntanos tu idea. Te mandamos una demo rápida.",
    f_name: "Nombre",
    f_msg: "Proyecto",
    f_send: "Enviar",
    foot_line: "Hecho con café y algoritmos."
  },
  EN: {
    nav_services: "Services",
    nav_portfolio: "Portfolio",
    nav_pricing: "Pricing",
    nav_contact: "Contact",
    hero_title: "Bespoke websites: 50% human, 50% AI",
    hero_sub: "Design with soul. Data with brains. Fast, elegant, sales-ready sites.",
    cta_primary: "Request a demo",
    cta_secondary: "See work",
    svc_title: "Services",
    svc_1: "Custom sites (landing, e-commerce, dashboards).",
    svc_2: "AI automation (chatbots, emails, assistants).",
    svc_3: "Performance & SEO (Core Web Vitals, schema, metadata).",
    svc_4: "Maintenance (hosting, backups, improvements).",
    svc_note: "“Made to your taste. No rigid templates.”",
    how_title: "How we work",
    how_1: "15’ brief (goals & style).",
    how_2: "Quick wireframe + AI copy.",
    how_3: "Live design + human review.",
    how_4: "Delivery + analytics.",
    pf_title: "Portfolio",
    pf_sub: "Selected real projects",
    price_title: "Simple pricing",
    p_basic: "Starter",
    p_pro: "Pro",
    p_custom: "Custom",
    cta_select: "Select",
    price_note: "Indicative pricing. Invoicing in NL. VAT as applicable.",
    ct_title: "Contact",
    ct_sub: "Tell us your idea. We’ll send a quick demo.",
    f_name: "Name",
    f_msg: "Project",
    f_send: "Send",
    foot_line: "Built with coffee and algorithms."
  },
  NL: {
    nav_services: "Diensten",
    nav_portfolio: "Portfolio",
    nav_pricing: "Prijzen",
    nav_contact: "Contact",
    hero_title: "Maatwerk websites: 50% mens, 50% kunstmatige intelligentie",
    hero_sub: "Design met ziel. Data met hersens. Razendsnelle, elegante sites die verkopen.",
    cta_primary: "Vraag een demo aan",
    cta_secondary: "Werk bekijken",
    svc_title: "Diensten",
    svc_1: "Maatwerk websites (landing, e-commerce, dashboard).",
    svc_2: "AI-automatisering (chatbots, e-mails, assistenten).",
    svc_3: "Performance & SEO (Core Web Vitals, schema, metadata).",
    svc_4: "Onderhoud (hosting, back-ups, verbeteringen).",
    svc_note: "“Op jouw smaak gemaakt. Geen rigide templates.”",
    how_title: "Onze werkwijze",
    how_1: "Briefing 15’ (doel & stijl).",
    how_2: "Snelle wireframe + AI-copy.",
    how_3: "Live design + menselijke review.",
    how_4: "Oplevering + analytics.",
    pf_title: "Portfolio",
    pf_sub: "Selectie van echte projecten",
    price_title: "Eenvoudige prijzen",
    p_basic: "Starter",
    p_pro: "Pro",
    p_custom: "Op maat",
    cta_select: "Kiezen",
    price_note: "Indicatieve prijzen. Facturatie in NL. BTW volgens regelgeving.",
    ct_title: "Contact",
    ct_sub: "Vertel je idee. We sturen een snelle demo.",
    f_name: "Naam",
    f_msg: "Project",
    f_send: "Verzenden",
    foot_line: "Gemaakt met koffie en algoritmen."
  }
};

const switchBtn = document.getElementById('langSwitch');
let lang = 'NL';

function applyLang(l){
  const dict = i18n[l];
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(dict[key]) el.textContent = dict[key];
  });
  switchBtn.textContent = l;
}

switchBtn.addEventListener('click', ()=>{
  lang = lang === 'ES' ? 'EN' : (lang === 'EN' ? 'NL' : 'ES');
  applyLang(lang);
});

applyLang(lang);
