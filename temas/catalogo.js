const CONTACT_LINKEDIN = "https://www.linkedin.com/in/jersonmc3107/";
const CONTACT_WHATSAPP = "51947317024";

const CATALOG = [
    {
        slug: "restaurantes-cafeterias",
        path: "restaurantes-cafeterias.html",
        className: "restaurant",
        kicker: "Rubro gastronomico",
        pageTitle: "Restaurantes y cafeter&iacute;as",
        description: "Temas web para restaurantes, cafeter&iacute;as, dark kitchens, bares y pasteler&iacute;as.",
        intro: "Elige una base visual preparada para mostrar carta, reservas, delivery, horarios, ubicaci&oacute;n y una experiencia de marca que ayude a vender desde el primer pantallazo.",
        proof: ["Carta visual", "Reservas", "Delivery", "WhatsApp directo"],
        themes: [
            {
                id: "mesa-brava",
                name: "Mesa Brava",
                label: "Restaurante moderno",
                className: "restaurant",
                icon: "bx-restaurant",
                summary: "Tema para restaurantes y cafeter&iacute;as con carta destacada, reservas, delivery y galer&iacute;a del local.",
                includes: ["Carta", "Reservas", "Delivery", "Galer&iacute;a"],
                actionMessage: "Hola Jerson, quiero una web gastronomica como Mesa Brava.",
                demo: {
                    kicker: "Restaurante | Cafeter&iacute;a | Delivery",
                    heroTitle: "Una web gastron&oacute;mica lista para vender reservas, carta y pedidos",
                    heroText: "Mesa Brava muestra c&oacute;mo podr&iacute;a verse una p&aacute;gina para restaurante: hero comercial, carta por categor&iacute;as, reservas, delivery, testimonios, ubicaci&oacute;n y CTA directo a WhatsApp.",
                    primaryCta: "Reservar mesa",
                    secondaryCta: "Ver carta",
                    stats: ["Men&uacute; por categor&iacute;as", "CTA a reservas", "Delivery integrado"],
                    showcaseTitle: "Especiales de la casa",
                    showcaseText: "Presentaci&oacute;n visual de platos, precios, horarios y beneficios clave para decidir r&aacute;pido.",
                    showcaseItems: ["Brunch de autor", "Caf&eacute; especial", "Pastas frescas", "Delivery express"],
                    sectionTitle: "Secciones pensadas para vender",
                    sectionText: "El visitante puede revisar la carta, conocer el ambiente y reservar sin perderse entre pantallas.",
                    cards: [
                        { icon: "bx-food-menu", title: "Carta clara", text: "Categor&iacute;as, precios, destacados y platos recomendados para guiar la decisi&oacute;n." },
                        { icon: "bx-calendar-check", title: "Reservas", text: "Bloque para reservar por WhatsApp, formulario o herramienta externa." },
                        { icon: "bx-map", title: "Ubicaci&oacute;n", text: "Mapa, horarios, zonas de delivery y datos de contacto visibles." }
                    ],
                    processTitle: "Recorrido del cliente",
                    steps: ["Descubre el concepto y los platos destacados.", "Revisa carta, horarios y opciones de pedido.", "Reserva mesa o escribe por WhatsApp en un clic."],
                    proofTitle: "Confianza antes de la visita",
                    proofText: "Espacio para rese&ntilde;as, fotos reales del local, beneficios de compra y enlaces a redes sociales.",
                    testimonial: "La carta y las reservas quedan visibles desde el inicio, ideal para locales que quieren recibir consultas m&aacute;s r&aacute;pido.",
                    ctaTitle: "Quiero una web gastron&oacute;mica como esta",
                    ctaText: "Se puede adaptar a cafeter&iacute;as, restaurantes, bares, pasteler&iacute;as o dark kitchens."
                }
            }
        ]
    },
    {
        slug: "clinicas-estetica",
        path: "clinicas-estetica.html",
        className: "clinic",
        kicker: "Rubro salud y belleza",
        pageTitle: "Cl&iacute;nicas y est&eacute;tica",
        description: "Temas web para cl&iacute;nicas, consultorios, centros est&eacute;ticos, spas y bienestar.",
        intro: "Selecciona un tema preparado para transmitir confianza, ordenar servicios, mostrar especialistas, resolver dudas y dirigir al visitante hacia una cita.",
        proof: ["Servicios", "Especialistas", "Testimonios", "Agenda"],
        themes: [
            {
                id: "aura-clinic",
                name: "Aura Clinic",
                label: "Cl&iacute;nica y est&eacute;tica",
                className: "clinic",
                icon: "bx-plus-medical",
                summary: "Tema sobrio para tratamientos, especialistas, paquetes, testimonios y agenda de citas.",
                includes: ["Tratamientos", "Especialistas", "Citas", "FAQ"],
                actionMessage: "Hola Jerson, quiero una web para clinica o estetica como Aura Clinic.",
                demo: {
                    kicker: "Salud | Est&eacute;tica | Bienestar",
                    heroTitle: "Una web profesional para convertir visitas en citas",
                    heroText: "Aura Clinic organiza tratamientos, beneficios, especialistas, testimonios y preguntas frecuentes para que el paciente entienda la propuesta y agende con confianza.",
                    primaryCta: "Agendar evaluaci&oacute;n",
                    secondaryCta: "Ver tratamientos",
                    stats: ["Agenda visible", "Servicios claros", "Prueba social"],
                    showcaseTitle: "Tratamientos destacados",
                    showcaseText: "Cada servicio puede mostrar objetivo, duraci&oacute;n, beneficios y llamada a evaluaci&oacute;n.",
                    showcaseItems: ["Facial premium", "Tratamiento corporal", "Evaluaci&oacute;n inicial", "Plan personalizado"],
                    sectionTitle: "Contenido que transmite confianza",
                    sectionText: "La estructura prioriza claridad, respaldo profesional y una ruta directa hacia la cita.",
                    cards: [
                        { icon: "bx-clinic", title: "Servicios", text: "Tratamientos por objetivo, beneficios, duraci&oacute;n y resultados esperados." },
                        { icon: "bx-user-check", title: "Especialistas", text: "Perfiles profesionales, experiencia, certificaciones y enfoque de atenci&oacute;n." },
                        { icon: "bx-message-rounded-check", title: "FAQ y testimonios", text: "Respuestas a dudas frecuentes y prueba social para reducir fricci&oacute;n." }
                    ],
                    processTitle: "Recorrido del paciente",
                    steps: ["Identifica el tratamiento que necesita.", "Revisa beneficios, especialista y preguntas frecuentes.", "Agenda una evaluaci&oacute;n por WhatsApp o formulario."],
                    proofTitle: "Citas con m&aacute;s contexto",
                    proofText: "El dise&ntilde;o ayuda a que el paciente llegue con dudas resueltas y mejor percepci&oacute;n del servicio.",
                    testimonial: "Ideal para centros que necesitan verse confiables, ordenar su oferta y recibir consultas mejor calificadas.",
                    ctaTitle: "Quiero una web de salud o est&eacute;tica",
                    ctaText: "Se puede adaptar a cl&iacute;nicas, consultorios, centros est&eacute;ticos, spas o wellness."
                }
            }
        ]
    },
    {
        slug: "inmobiliarias",
        path: "inmobiliarias.html",
        className: "realestate",
        kicker: "Rubro inmobiliario",
        pageTitle: "Inmobiliarias",
        description: "Temas web para inmobiliarias, agentes, constructoras y proyectos de propiedades.",
        intro: "Elige una base preparada para presentar propiedades, destacar zonas, filtrar opciones y captar leads interesados en visitar o solicitar informaci&oacute;n.",
        proof: ["Propiedades", "Filtros", "Leads", "Visitas"],
        themes: [
            {
                id: "habita-norte",
                name: "Habita Norte",
                label: "Inmobiliaria comercial",
                className: "realestate",
                icon: "bx-building-house",
                summary: "Tema para cat&aacute;logo inmobiliario con propiedades destacadas, filtros visuales y contacto r&aacute;pido.",
                includes: ["Cat&aacute;logo", "Filtros", "Ficha", "Agenda"],
                actionMessage: "Hola Jerson, quiero una web inmobiliaria como Habita Norte.",
                demo: {
                    kicker: "Inmobiliaria | Propiedades | Leads",
                    heroTitle: "Una web inmobiliaria para mostrar propiedades y captar visitas",
                    heroText: "Habita Norte presenta propiedades por tipo, zona y presupuesto, con fichas claras y botones para coordinar visitas o pedir informaci&oacute;n.",
                    primaryCta: "Coordinar visita",
                    secondaryCta: "Ver propiedades",
                    stats: ["Fichas claras", "Filtros visuales", "Leads por WhatsApp"],
                    showcaseTitle: "Propiedades destacadas",
                    showcaseText: "Vista r&aacute;pida de inmuebles con precio, zona, metraje y estado de disponibilidad.",
                    showcaseItems: ["Departamentos", "Casas", "Proyectos", "Oficinas"],
                    sectionTitle: "Secciones para captar interesados",
                    sectionText: "La estructura facilita comparar opciones y contactar al asesor correcto sin pasos innecesarios.",
                    cards: [
                        { icon: "bx-home-alt-2", title: "Cat&aacute;logo", text: "Tarjetas con zona, precio, metraje, habitaciones y estado de cada inmueble." },
                        { icon: "bx-filter-alt", title: "Filtros", text: "Orden por tipo de propiedad, presupuesto, ubicaci&oacute;n o etapa del proyecto." },
                        { icon: "bx-phone-call", title: "Asesor&iacute;a", text: "CTA para WhatsApp, formulario o agenda de visita con un asesor." }
                    ],
                    processTitle: "Recorrido del comprador",
                    steps: ["Explora propiedades por zona y tipo.", "Revisa ficha, beneficios y detalles clave.", "Agenda visita o solicita informaci&oacute;n comercial."],
                    proofTitle: "Mejor seguimiento comercial",
                    proofText: "El sitio puede ordenar leads por inter&eacute;s, propiedad o etapa para responder con m&aacute;s contexto.",
                    testimonial: "Una base visual ideal para inmobiliarias que necesitan mostrar inventario y activar contacto r&aacute;pido.",
                    ctaTitle: "Quiero una web inmobiliaria",
                    ctaText: "Se puede adaptar a inmobiliarias, agentes independientes, constructoras o proyectos puntuales."
                }
            }
        ]
    },
    {
        slug: "servicios-profesionales",
        path: "servicios-profesionales.html",
        className: "services",
        kicker: "Rubro servicios",
        pageTitle: "Servicios profesionales",
        description: "Temas web para consultores, agencias, estudios, abogados, contadores y servicios B2B.",
        intro: "Selecciona una base visual para explicar tu oferta, mostrar proceso, generar autoridad y convertir visitantes en reuniones comerciales.",
        proof: ["Oferta", "Proceso", "Casos", "Reuni&oacute;n"],
        themes: [
            {
                id: "nexo-consultores",
                name: "Nexo Consultores",
                label: "Servicios B2B",
                className: "services",
                icon: "bx-briefcase-alt-2",
                summary: "Tema consultivo para explicar servicios, metodolog&iacute;a, casos y llamada a diagn&oacute;stico.",
                includes: ["Servicios", "Proceso", "Casos", "CTA"],
                actionMessage: "Hola Jerson, quiero una web para servicios profesionales como Nexo Consultores.",
                demo: {
                    kicker: "Consultor&iacute;a | Agencia | Servicio B2B",
                    heroTitle: "Una web para explicar servicios y conseguir reuniones comerciales",
                    heroText: "Nexo Consultores muestra una estructura clara para vender servicios de alto valor: problema, soluci&oacute;n, metodolog&iacute;a, casos, preguntas y llamada a diagn&oacute;stico.",
                    primaryCta: "Agendar diagn&oacute;stico",
                    secondaryCta: "Ver servicios",
                    stats: ["Oferta ordenada", "Proceso visible", "CTA comercial"],
                    showcaseTitle: "Servicios de alto valor",
                    showcaseText: "Bloques para explicar qu&eacute; haces, para qui&eacute;n es, qu&eacute; resultado busca y c&oacute;mo empieza el trabajo.",
                    showcaseItems: ["Diagn&oacute;stico", "Implementaci&oacute;n", "Optimizar procesos", "Acompa&ntilde;amiento"],
                    sectionTitle: "Contenido para vender confianza",
                    sectionText: "La p&aacute;gina ayuda a que el cliente entienda tu enfoque antes de pedir una reuni&oacute;n.",
                    cards: [
                        { icon: "bx-target-lock", title: "Oferta clara", text: "Servicios por objetivo, problema que resuelven y perfil de cliente ideal." },
                        { icon: "bx-git-branch", title: "Metodolog&iacute;a", text: "Etapas, entregables y forma de trabajo para reducir incertidumbre." },
                        { icon: "bx-calendar-star", title: "Agenda", text: "Bot&oacute;n hacia llamada, WhatsApp o formulario de diagn&oacute;stico." }
                    ],
                    processTitle: "Recorrido del prospecto",
                    steps: ["Entiende el problema que puedes resolver.", "Revisa servicios, proceso y evidencia.", "Agenda una llamada con mejor contexto."],
                    proofTitle: "Autoridad sin saturar",
                    proofText: "La web puede incluir casos, logos, m&eacute;tricas, recursos y respuestas a objeciones comunes.",
                    testimonial: "Funciona para vender servicios donde la confianza y la claridad pesan m&aacute;s que un precio inmediato.",
                    ctaTitle: "Quiero una web para vender servicios",
                    ctaText: "Se puede adaptar a consultores, abogados, contadores, agencias, estudios creativos o servicios B2B."
                }
            }
        ]
    },
    {
        slug: "tiendas-especializadas",
        path: "tiendas-especializadas.html",
        className: "store",
        kicker: "Rubro e-commerce",
        pageTitle: "Tiendas especializadas",
        description: "Temas web para tiendas, cat&aacute;logos, productos especiales y e-commerce con WooCommerce.",
        intro: "Elige una base pensada para productos espec&iacute;ficos, categor&iacute;as claras, beneficios de compra y una ruta lista para convertirse en tienda WooCommerce.",
        proof: ["Categor&iacute;as", "Productos", "Beneficios", "Checkout"],
        themes: [
            {
                id: "nativa-store",
                name: "Nativa Store",
                label: "Tienda especializada",
                className: "store",
                icon: "bx-cart",
                summary: "Tema para cat&aacute;logos y tiendas con productos destacados, beneficios, categor&iacute;as y compra guiada.",
                includes: ["Productos", "Categor&iacute;as", "Beneficios", "Compra"],
                actionMessage: "Hola Jerson, quiero una tienda especializada como Nativa Store.",
                demo: {
                    kicker: "E-commerce | Cat&aacute;logo | WooCommerce",
                    heroTitle: "Una tienda online para vender productos con mejor presentaci&oacute;n",
                    heroText: "Nativa Store muestra productos destacados, categor&iacute;as, beneficios de compra, confianza y una ruta clara hacia consulta o checkout.",
                    primaryCta: "Comprar ahora",
                    secondaryCta: "Ver productos",
                    stats: ["Cat&aacute;logo visual", "Beneficios visibles", "Pago integrado"],
                    showcaseTitle: "Colecciones destacadas",
                    showcaseText: "Bloques para presentar productos por necesidad, uso, colecci&oacute;n o temporada.",
                    showcaseItems: ["Nuevos", "M&aacute;s vendidos", "Kits", "Ofertas"],
                    sectionTitle: "Secciones para vender mejor",
                    sectionText: "El dise&ntilde;o ayuda a encontrar productos r&aacute;pido y refuerza confianza antes del pago.",
                    cards: [
                        { icon: "bx-category", title: "Categor&iacute;as", text: "Organizaci&oacute;n por necesidad, colecci&oacute;n, precio o tipo de cliente." },
                        { icon: "bx-cart-add", title: "Productos", text: "Tarjetas con imagen, beneficio, precio, etiqueta y CTA de compra." },
                        { icon: "bx-shield-quarter", title: "Confianza", text: "Env&iacute;os, medios de pago, garant&iacute;as y soporte previo a la compra." }
                    ],
                    processTitle: "Recorrido del comprador",
                    steps: ["Explora colecciones y productos recomendados.", "Compara beneficios, precios y condiciones.", "Consulta por WhatsApp o finaliza compra online."],
                    proofTitle: "Base lista para WooCommerce",
                    proofText: "La estructura puede integrarse con productos, pasarela de pago, cupones y automatizaciones.",
                    testimonial: "Una tienda especializada necesita ordenar la oferta y mostrar razones de compra sin perder velocidad.",
                    ctaTitle: "Quiero una tienda online mejor presentada",
                    ctaText: "Se puede adaptar a tiendas gourmet, moda, tecnolog&iacute;a, productos naturales, regalos o cat&aacute;logos especializados."
                }
            }
        ]
    },
    {
        slug: "cursos-educacion",
        path: "cursos-educacion.html",
        className: "education",
        kicker: "Rubro educativo",
        pageTitle: "Cursos y educaci&oacute;n",
        description: "Temas web para cursos, academias, programas online, talleres y capacitaciones.",
        intro: "Selecciona una base para explicar programas, temarios, docentes, fechas, precios, modalidad e inscripciones de forma clara.",
        proof: ["Programas", "Temario", "Docentes", "Inscripci&oacute;n"],
        themes: [
            {
                id: "aula-prisma",
                name: "Aula Prisma",
                label: "Cursos y programas",
                className: "education",
                icon: "bx-book-open",
                summary: "Tema para academias y cursos con temario, docentes, precios, calendario e inscripci&oacute;n.",
                includes: ["Temario", "Docentes", "Horarios", "Inscripci&oacute;n"],
                actionMessage: "Hola Jerson, quiero una web para cursos como Aula Prisma.",
                demo: {
                    kicker: "Cursos | Academia | Programas",
                    heroTitle: "Una web educativa para presentar programas y captar alumnos",
                    heroText: "Aula Prisma organiza temario, beneficios, docentes, modalidad, fechas y CTA de inscripci&oacute;n para que el alumno decida con claridad.",
                    primaryCta: "Inscribirme",
                    secondaryCta: "Ver temario",
                    stats: ["Temario visible", "Docentes", "Vacantes"],
                    showcaseTitle: "Programa destacado",
                    showcaseText: "Presentaci&oacute;n de m&oacute;dulos, modalidad, calendario, beneficios y resultados esperados.",
                    showcaseItems: ["M&oacute;dulo 1", "M&oacute;dulo 2", "Clases en vivo", "Certificado"],
                    sectionTitle: "Secciones para vender aprendizaje",
                    sectionText: "La estructura reduce dudas sobre contenido, horarios, modalidad, precio y proceso de inscripci&oacute;n.",
                    cards: [
                        { icon: "bx-book-open", title: "Temario", text: "M&oacute;dulos, habilidades, duraci&oacute;n, recursos y objetivos del programa." },
                        { icon: "bx-user-voice", title: "Docentes", text: "Perfil de profesores, experiencia, metodolog&iacute;a y respaldo." },
                        { icon: "bx-edit-alt", title: "Inscripci&oacute;n", text: "CTA para reservar vacante, consultar horarios o separar cupo." }
                    ],
                    processTitle: "Recorrido del alumno",
                    steps: ["Entiende el resultado del programa.", "Revisa temario, docentes, modalidad y fechas.", "Consulta o reserva vacante por WhatsApp."],
                    proofTitle: "Inscripciones con m&aacute;s claridad",
                    proofText: "La web puede incluir precios, beneficios, bonos, preguntas frecuentes y testimonios de alumnos.",
                    testimonial: "Un programa educativo necesita explicar valor y proceso de inscripci&oacute;n de forma directa.",
                    ctaTitle: "Quiero una web para cursos o educaci&oacute;n",
                    ctaText: "Se puede adaptar a academias, talleres, infoproductos, bootcamps, colegios o programas de capacitaci&oacute;n."
                }
            }
        ]
    }
];

function whatsappUrl(message) {
    return `https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function decodeHtml(value) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = value;
    return textarea.value;
}

function lowerFirst(value) {
    const decoded = decodeHtml(value);
    return decoded.charAt(0).toLocaleLowerCase("es-PE") + decoded.slice(1);
}

function findTheme(themeId) {
    for (const rubro of CATALOG) {
        const theme = rubro.themes.find((item) => item.id === themeId);
        if (theme) {
            return { rubro, theme };
        }
    }

    return { rubro: CATALOG[0], theme: CATALOG[0].themes[0] };
}

function renderTags(items) {
    return items.map((item) => `<span>${item}</span>`).join("");
}

function renderCards(cards) {
    return cards.map((card) => `
        <article class="demo-card">
            <i class="bx ${card.icon}" aria-hidden="true"></i>
            <h3>${card.title}</h3>
            <p>${card.text}</p>
        </article>
    `).join("");
}

function renderSteps(steps) {
    return steps.map((step, index) => `
        <article class="flow-card">
            <i class="bx bx-check-circle" aria-hidden="true"></i>
            <span class="step-number">0${index + 1}</span>
            <p>${step}</p>
        </article>
    `).join("");
}

function renderShowcaseItems(items) {
    return items.map((item) => `<span>${item}</span>`).join("");
}

function renderCatalogCard(theme) {
    return `
        <a class="catalog-card" href="demo.html?tema=${theme.id}" aria-label="Abrir demo completa del tema ${theme.name}">
            <div class="catalog-card-top">
                <div class="theme-icon"><i class="bx ${theme.icon}" aria-hidden="true"></i></div>
                <span class="catalog-badge">${theme.label}</span>
            </div>
            <h3>${theme.name}</h3>
            <p>${theme.summary}</p>
            <div class="mini-preview" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="catalog-tags">${renderTags(theme.includes)}</div>
            <span class="catalog-link">Abrir web demo completa</span>
        </a>
    `;
}

function renderCatalogPage() {
    const root = document.getElementById("rubro-root");
    if (!root) {
        return;
    }

    const rubro = CATALOG.find((item) => item.slug === document.body.dataset.rubro) || CATALOG[0];
    document.body.classList.add(rubro.className);
    document.title = `Temas para ${lowerFirst(rubro.pageTitle)} | Jerson Mercado`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute("content", decodeHtml(rubro.description));
    }

    root.innerHTML = `
        <section class="theme-hero catalog-hero">
            <div>
                <p class="kicker">${rubro.kicker}</p>
                <h1>${rubro.pageTitle}</h1>
                <p class="lead">${rubro.intro}</p>
                <div class="theme-actions">
                    <a class="theme-button primary" href="#temas-disponibles"><i class="bx bx-layout" aria-hidden="true"></i> Ver temas</a>
                    <a class="theme-button secondary" href="${whatsappUrl(`Hola Jerson, quiero una web para el rubro ${decodeHtml(rubro.pageTitle)}.`)}" target="_blank" rel="noopener noreferrer">Pedir una propuesta</a>
                </div>
                <div class="theme-proof">${renderTags(rubro.proof)}</div>
            </div>

            <aside class="preview catalog-overview" aria-label="Vista previa del rubro">
                <div class="preview-top"><span class="preview-dot"></span><span class="preview-dot"></span><span class="preview-dot"></span></div>
                <div class="preview-body">
                    <div class="visual-panel">
                        <h3>${rubro.themes[0].name}</h3>
                        <p>${rubro.themes[0].summary}</p>
                        <div class="visual-grid">${renderShowcaseItems(rubro.themes[0].demo.showcaseItems)}</div>
                    </div>
                </div>
            </aside>
        </section>

        <section class="section-block" id="temas-disponibles">
            <div class="section-heading">
                <h2>Temas disponibles para este rubro</h2>
                <p>Por ahora hay un tema completo publicado para este rubro. La estructura ya queda lista para agregar m&aacute;s variantes y que cada cliente compare antes de elegir.</p>
            </div>
            <div class="catalog-grid">${rubro.themes.map(renderCatalogCard).join("")}</div>
        </section>

        <section class="section-block">
            <div class="cta-panel">
                <h2>Quiero adaptar este rubro a mi negocio</h2>
                <p>Se puede ajustar contenido, colores, secciones y flujo comercial seg&uacute;n el tipo de cliente, producto o servicio.</p>
                <div class="theme-actions">
                    <a class="theme-button primary" href="${whatsappUrl(`Hola Jerson, quiero adaptar un tema para ${decodeHtml(rubro.pageTitle)}.`)}" target="_blank" rel="noopener noreferrer"><i class="bx bxl-whatsapp" aria-hidden="true"></i> Escribir por WhatsApp</a>
                    <a class="theme-button secondary" href="${CONTACT_LINKEDIN}" target="_blank" rel="noopener noreferrer">Contactar en LinkedIn</a>
                </div>
            </div>
        </section>
    `;
}

function renderDemoPage() {
    const root = document.getElementById("demo-root");
    if (!root) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const { rubro, theme } = findTheme(params.get("tema"));
    const demo = theme.demo;

    document.body.classList.add(theme.className);
    document.title = `${theme.name} | Demo para ${lowerFirst(rubro.pageTitle)} | Jerson Mercado`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute("content", decodeHtml(theme.summary));
    }

    root.innerHTML = `
        <div class="demo-shell">
            <nav class="demo-nav" aria-label="Navegaci&oacute;n de la demo">
                <a class="demo-brand" href="${rubro.path}"><i class="bx bx-arrow-back" aria-hidden="true"></i> ${theme.name}</a>
                <div class="demo-menu">
                    <a href="#oferta">Oferta</a>
                    <a href="#proceso">Proceso</a>
                    <a href="#confianza">Confianza</a>
                    <a href="#contacto">Contacto</a>
                </div>
            </nav>

            <main>
                <header class="demo-hero">
                    <div class="demo-copy">
                        <p class="kicker">${demo.kicker}</p>
                        <h1>${demo.heroTitle}</h1>
                        <p class="lead">${demo.heroText}</p>
                        <div class="theme-actions">
                            <a class="theme-button primary" href="${whatsappUrl(theme.actionMessage)}" target="_blank" rel="noopener noreferrer"><i class="bx bxl-whatsapp" aria-hidden="true"></i> ${demo.primaryCta}</a>
                            <a class="theme-button secondary" href="#oferta">${demo.secondaryCta}</a>
                        </div>
                        <div class="demo-strip">${renderTags(demo.stats)}</div>
                    </div>

                    <aside class="demo-browser" aria-label="Vista de sitio armado">
                        <div class="preview-top"><span class="preview-dot"></span><span class="preview-dot"></span><span class="preview-dot"></span></div>
                        <div class="demo-browser-body">
                            <div class="demo-browser-hero">
                                <span>${theme.label}</span>
                                <h2>${demo.showcaseTitle}</h2>
                                <p>${demo.showcaseText}</p>
                            </div>
                            <div class="demo-browser-grid">${renderShowcaseItems(demo.showcaseItems)}</div>
                        </div>
                    </aside>
                </header>

                <section class="demo-section" id="oferta">
                    <div class="section-heading">
                        <h2>${demo.sectionTitle}</h2>
                        <p>${demo.sectionText}</p>
                    </div>
                    <div class="demo-card-grid">${renderCards(demo.cards)}</div>
                </section>

                <section class="demo-section" id="proceso">
                    <div class="section-heading">
                        <h2>${demo.processTitle}</h2>
                        <p>Una ruta simple para que el visitante entienda la propuesta y llegue al contacto con menos fricci&oacute;n.</p>
                    </div>
                    <div class="flow-grid">${renderSteps(demo.steps)}</div>
                </section>

                <section class="demo-section demo-split" id="confianza">
                    <div>
                        <p class="kicker">Confianza</p>
                        <h2>${demo.proofTitle}</h2>
                        <p>${demo.proofText}</p>
                    </div>
                    <aside class="demo-quote">
                        <i class="bx bxs-quote-left" aria-hidden="true"></i>
                        <p>${demo.testimonial}</p>
                    </aside>
                </section>

                <section class="section-block" id="contacto">
                    <div class="cta-panel">
                        <h2>${demo.ctaTitle}</h2>
                        <p>${demo.ctaText}</p>
                        <div class="theme-actions">
                            <a class="theme-button primary" href="${whatsappUrl(theme.actionMessage)}" target="_blank" rel="noopener noreferrer"><i class="bx bxl-whatsapp" aria-hidden="true"></i> Pedir este tema</a>
                            <a class="theme-button secondary" href="${CONTACT_LINKEDIN}" target="_blank" rel="noopener noreferrer">Contactar en LinkedIn</a>
                            <a class="theme-button secondary" href="${rubro.path}">Volver al rubro</a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
        <footer class="footer">Demo visual de ${theme.name} por Jerson Mercado</footer>
    `;
}

renderCatalogPage();
renderDemoPage();
