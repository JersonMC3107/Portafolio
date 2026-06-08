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
                summary: "Sitio para restaurante/cafeter&iacute;a con carta, reservas, platos destacados, galer&iacute;a, testimonios y contacto.",
                includes: ["Carta", "Reservas", "Galer&iacute;a", "Ubicaci&oacute;n"],
                actionMessage: "Hola Jerson, quiero una web gastronomica como Mesa Brava.",
                demo: {
                    nav: [
                        { label: "Men&uacute;", href: "#menu" },
                        { label: "Reservas", href: "#reservas" },
                        { label: "Galer&iacute;a", href: "#galeria" },
                        { label: "Ubicaci&oacute;n", href: "#contacto" }
                    ],
                    kicker: "Caf&eacute; de especialidad y cocina de temporada",
                    heroTitle: "Mesa Brava Caf&eacute; & Cocina",
                    heroText: "Brunch artesanal, caf&eacute; de origen peruano y platos de temporada en un espacio c&aacute;lido para trabajar, reunirse o celebrar.",
                    primaryCta: "Reservar mesa",
                    secondaryCta: "Ver carta",
                    stats: [
                        { value: "4.8/5", label: "rese&ntilde;as de clientes" },
                        { value: "18", label: "platos de temporada" },
                        { value: "20 min", label: "delivery promedio" }
                    ],
                    filters: ["Brunch", "Caf&eacute;", "Pastas", "Postres", "Delivery"],
                    visualTitle: "Brunch Brava",
                    visualText: "Tostada sourdough, huevos pochados, palta cremosa y cappuccino de origen.",
                    visualMeta: ["S/ 32", "M&aacute;s pedido", "Disponible hasta 1:00 p.m."],
                    featured: {
                        id: "menu",
                        kicker: "Carta destacada",
                        title: "Favoritos de la casa",
                        text: "Una carta corta, visual y f&aacute;cil de revisar desde el celular.",
                        items: [
                            { title: "Brunch Brava", meta: "Huevos, palta, sourdough", price: "S/ 32", text: "Plato estrella para media ma&ntilde;ana con caf&eacute; incluido." },
                            { title: "Pasta al pesto andino", meta: "Albahaca, queso, nueces", price: "S/ 39", text: "Receta de temporada con ingredientes locales." },
                            { title: "Cold brew naranja", meta: "Caf&eacute; filtrado 18 horas", price: "S/ 15", text: "Bebida refrescante para llevar o acompa&ntilde;ar el brunch." }
                        ]
                    },
                    benefits: {
                        id: "reservas",
                        kicker: "Reservas y pedidos",
                        title: "Todo listo para comer aqu&iacute; o pedir desde casa",
                        text: "La experiencia conecta carta, horarios, reservas y delivery sin pasos innecesarios.",
                        items: [
                            { icon: "bx-calendar-check", title: "Reserva r&aacute;pida", text: "Bot&oacute;n directo para separar mesa por WhatsApp con fecha, hora y cantidad de personas." },
                            { icon: "bx-cycling", title: "Delivery por zonas", text: "Bloque de cobertura, tiempos estimados y platos recomendados para llevar." },
                            { icon: "bx-map-pin", title: "Ubicaci&oacute;n visible", text: "Direcci&oacute;n, horarios, estacionamientos cercanos y enlace a mapa." }
                        ]
                    },
                    gallery: {
                        id: "galeria",
                        kicker: "Galer&iacute;a",
                        title: "Ambiente, platos y caf&eacute; de origen",
                        text: "Secciones visuales para que el cliente sienta el lugar antes de visitarlo.",
                        items: [
                            { title: "Barra de caf&eacute;", text: "Molienda al momento, m&eacute;todos filtrados y bebidas de autor." },
                            { title: "Mesa compartida", text: "Espacio c&oacute;modo para trabajar, reunirse o leer." },
                            { title: "Postres diarios", text: "Vitrina rotativa con tortas, galletas y opciones sin az&uacute;car." }
                        ]
                    },
                    testimonials: [
                        { quote: "Reservamos por WhatsApp y la carta estaba clar&iacute;sima. El brunch lleg&oacute; perfecto.", author: "Valeria M.", role: "Cliente frecuente" },
                        { quote: "La web muestra el ambiente real del local y hace muy f&aacute;cil decidir qu&eacute; pedir.", author: "Renzo A.", role: "Rese&ntilde;a local" }
                    ],
                    faq: [
                        { question: "Atienden sin reserva?", answer: "S&iacute;, pero los fines de semana se recomienda reservar para evitar espera." },
                        { question: "Tienen opciones vegetarianas?", answer: "S&iacute;, la carta incluye brunch, pastas y postres vegetarianos." },
                        { question: "Hacen delivery?", answer: "S&iacute;, con cobertura por distritos y pedidos coordinados por WhatsApp." }
                    ],
                    contact: {
                        title: "Vis&iacute;tanos en Barranco",
                        text: "Av. Primavera 248, Barranco. Lunes a s&aacute;bado de 8:00 a.m. a 10:00 p.m.",
                        items: ["Reservas por WhatsApp", "Delivery de 9:00 a.m. a 8:30 p.m.", "Caf&eacute; de origen peruano"],
                        ctaTitle: "Reserva una mesa en Mesa Brava",
                        ctaText: "El sitio est&aacute; pensado para convertir visitas en reservas, pedidos y clientes recurrentes."
                    }
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
                summary: "Sitio para cl&iacute;nica est&eacute;tica con tratamientos, especialistas, beneficios, testimonios, FAQ y agenda.",
                includes: ["Tratamientos", "Especialistas", "FAQ", "Agenda"],
                actionMessage: "Hola Jerson, quiero una web para clinica o estetica como Aura Clinic.",
                demo: {
                    nav: [
                        { label: "Tratamientos", href: "#tratamientos" },
                        { label: "Equipo", href: "#equipo" },
                        { label: "Testimonios", href: "#testimonios" },
                        { label: "Agenda", href: "#contacto" }
                    ],
                    kicker: "Dermocosm&eacute;tica avanzada en San Isidro",
                    heroTitle: "Aura Clinic",
                    heroText: "Tratamientos faciales y corporales personalizados con evaluaci&oacute;n profesional, tecnolog&iacute;a segura y seguimiento cercano.",
                    primaryCta: "Agendar evaluaci&oacute;n",
                    secondaryCta: "Ver tratamientos",
                    stats: [
                        { value: "+1,200", label: "pacientes atendidos" },
                        { value: "6", label: "especialistas" },
                        { value: "45 min", label: "evaluaci&oacute;n inicial" }
                    ],
                    filters: ["Facial", "Corporal", "L&aacute;ser", "Post tratamiento", "Paquetes"],
                    visualTitle: "Evaluaci&oacute;n facial integral",
                    visualText: "Diagn&oacute;stico de piel, plan de tratamiento y recomendaciones de cuidado en casa.",
                    visualMeta: ["Desde S/ 120", "Cita previa", "Plan personalizado"],
                    featured: {
                        id: "tratamientos",
                        kicker: "Tratamientos",
                        title: "Programas dise&ntilde;ados por objetivo",
                        text: "Cada tratamiento explica beneficios, duraci&oacute;n y pr&oacute;ximo paso para agendar.",
                        items: [
                            { title: "Limpieza facial premium", meta: "Piel sensible y mixta", price: "S/ 180", text: "Higiene profunda, hidrataci&oacute;n y protecci&oacute;n final." },
                            { title: "Rejuvenecimiento l&aacute;ser", meta: "Manchas y textura", price: "Desde S/ 350", text: "Plan progresivo con evaluaci&oacute;n m&eacute;dica previa." },
                            { title: "Moldeo corporal", meta: "Paquetes de 6 sesiones", price: "S/ 690", text: "Acompa&ntilde;amiento y mediciones por sesi&oacute;n." }
                        ]
                    },
                    benefits: {
                        id: "equipo",
                        kicker: "Especialistas",
                        title: "Atenci&oacute;n profesional antes, durante y despu&eacute;s",
                        text: "La web permite mostrar respaldo m&eacute;dico, protocolos y orientaci&oacute;n clara al paciente.",
                        items: [
                            { icon: "bx-user-check", title: "Equipo certificado", text: "Perfiles de especialistas, experiencia y enfoque de cada &aacute;rea." },
                            { icon: "bx-shield-quarter", title: "Protocolos seguros", text: "Indicaciones, contraindicaciones y cuidados posteriores visibles." },
                            { icon: "bx-message-rounded-check", title: "Seguimiento", text: "Canal directo para dudas y control posterior al tratamiento." }
                        ]
                    },
                    gallery: {
                        id: "testimonios",
                        kicker: "Confianza",
                        title: "Resultados comunicados con criterio",
                        text: "Espacios para testimonios, preguntas frecuentes y casos explicados sin promesas exageradas.",
                        items: [
                            { title: "Cabina facial", text: "Ambiente limpio, moderno y preparado para tratamientos personalizados." },
                            { title: "Plan de cuidado", text: "Rutinas recomendadas y control de avance por objetivo." },
                            { title: "Paquetes claros", text: "Precios, duraci&oacute;n y beneficios explicados antes de agendar." }
                        ]
                    },
                    testimonials: [
                        { quote: "Me explicaron el tratamiento antes de agendar y llegu&eacute; con mucha m&aacute;s confianza.", author: "Camila R.", role: "Paciente facial" },
                        { quote: "La informaci&oacute;n de cuidados y preguntas frecuentes evita mensajes repetidos.", author: "Dra. Ana Ruiz", role: "Especialista est&eacute;tica" }
                    ],
                    faq: [
                        { question: "Necesito evaluaci&oacute;n previa?", answer: "S&iacute;, todos los tratamientos inician con evaluaci&oacute;n para definir objetivos y seguridad." },
                        { question: "Cu&aacute;ntas sesiones necesito?", answer: "Depende del diagn&oacute;stico. La web puede mostrar rangos y paquetes recomendados." },
                        { question: "Puedo agendar por WhatsApp?", answer: "S&iacute;, el bot&oacute;n de agenda abre una conversaci&oacute;n directa con el equipo." }
                    ],
                    contact: {
                        title: "Agenda tu evaluaci&oacute;n",
                        text: "Calle Las Begonias 510, San Isidro. Lunes a viernes de 9:00 a.m. a 7:00 p.m.",
                        items: ["Evaluaci&oacute;n inicial", "Recordatorios por WhatsApp", "Protocolos post tratamiento"],
                        ctaTitle: "Agenda una cita en Aura Clinic",
                        ctaText: "El sitio est&aacute; orientado a generar confianza, explicar tratamientos y facilitar el agendamiento."
                    }
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
                summary: "Sitio para inmobiliaria con propiedades destacadas, filtros visuales, fichas, beneficios y contacto con asesor.",
                includes: ["Propiedades", "Filtros", "Fichas", "Asesor"],
                actionMessage: "Hola Jerson, quiero una web inmobiliaria como Habita Norte.",
                demo: {
                    nav: [
                        { label: "Propiedades", href: "#propiedades" },
                        { label: "Beneficios", href: "#beneficios" },
                        { label: "Zonas", href: "#zonas" },
                        { label: "Asesor", href: "#contacto" }
                    ],
                    kicker: "Departamentos y casas listas para visitar",
                    heroTitle: "Habita Norte Inmobiliaria",
                    heroText: "Propiedades seleccionadas en zonas con alta demanda, asesor&iacute;a clara y visitas coordinadas con un equipo comercial especializado.",
                    primaryCta: "Hablar con un asesor",
                    secondaryCta: "Ver propiedades",
                    stats: [
                        { value: "86", label: "propiedades activas" },
                        { value: "12", label: "zonas cubiertas" },
                        { value: "24 h", label: "respuesta comercial" }
                    ],
                    filters: ["Departamentos", "Casas", "Estreno", "Entrega inmediata", "Financiamiento"],
                    visualTitle: "Dpto. Vista Alameda",
                    visualText: "Miraflores, 92 m2, 3 dormitorios, balc&oacute;n y estacionamiento incluido.",
                    visualMeta: ["US$ 168,000", "3 dorm.", "Visita virtual"],
                    featured: {
                        id: "propiedades",
                        kicker: "Propiedades destacadas",
                        title: "Opciones listas para comparar",
                        text: "Fichas resumidas para revisar precio, zona, metraje y siguiente paso.",
                        items: [
                            { title: "Vista Alameda", meta: "Miraflores | 92 m2 | 3 dorm.", price: "US$ 168,000", text: "Balc&oacute;n, estacionamiento y entrega inmediata." },
                            { title: "Casa Los Olivos", meta: "Los Olivos | 160 m2 | 4 dorm.", price: "US$ 210,000", text: "Patio interior, estudio y zona residencial." },
                            { title: "Proyecto Boreal", meta: "San Miguel | Desde 68 m2", price: "Desde US$ 96,000", text: "Departamentos en preventa con bono de separaci&oacute;n." }
                        ]
                    },
                    benefits: {
                        id: "beneficios",
                        kicker: "Asesor&iacute;a inmobiliaria",
                        title: "Una b&uacute;squeda m&aacute;s simple y ordenada",
                        text: "La web ayuda a filtrar inter&eacute;s, mostrar fichas y conectar al comprador con el asesor adecuado.",
                        items: [
                            { icon: "bx-filter-alt", title: "Filtros visuales", text: "Tipo, zona, presupuesto, metraje y estado de entrega visibles." },
                            { icon: "bx-file-find", title: "Fichas completas", text: "Galer&iacute;a, planos, beneficios, ubicaci&oacute;n y condiciones de compra." },
                            { icon: "bx-phone-call", title: "Contacto con asesor", text: "WhatsApp directo desde cada propiedad para coordinar visita." }
                        ]
                    },
                    gallery: {
                        id: "zonas",
                        kicker: "Zonas y proyectos",
                        title: "Explora por ubicaci&oacute;n y estilo de vida",
                        text: "Bloques visuales para destacar distritos, cercan&iacute;a a servicios y ventajas de cada zona.",
                        items: [
                            { title: "Miraflores", text: "Departamentos modernos cerca a malecones, parques y centros comerciales." },
                            { title: "San Miguel", text: "Proyectos familiares con buena conexi&oacute;n y precios competitivos." },
                            { title: "Lima Norte", text: "Casas y departamentos para compradores que buscan m&aacute;s espacio." }
                        ]
                    },
                    testimonials: [
                        { quote: "Pude comparar propiedades sin pedir informaci&oacute;n repetida por WhatsApp.", author: "Luis P.", role: "Comprador" },
                        { quote: "Las fichas ayudan a filtrar mejor los leads antes de una visita.", author: "Mariela S.", role: "Asesora inmobiliaria" }
                    ],
                    faq: [
                        { question: "Puedo separar una propiedad desde la web?", answer: "La demo contempla CTA para coordinar separaci&oacute;n o visita con un asesor." },
                        { question: "Se pueden agregar filtros reales?", answer: "S&iacute;, el dise&ntilde;o permite crecer hacia filtros por precio, zona y tipo de inmueble." },
                        { question: "Incluye ficha individual?", answer: "La estructura est&aacute; preparada para fichas con galeria, planos y contacto directo." }
                    ],
                    contact: {
                        title: "Coordina una visita guiada",
                        text: "Atenci&oacute;n comercial de lunes a domingo, con agenda para visitas presenciales o virtuales.",
                        items: ["Asesor asignado", "Ficha por WhatsApp", "Visita presencial o virtual"],
                        ctaTitle: "Encuentra tu siguiente propiedad",
                        ctaText: "El sitio est&aacute; pensado para ordenar inventario, captar leads y acelerar visitas calificadas."
                    }
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
                summary: "Sitio para consultora/agencia con servicios, proceso, casos, autoridad y CTA a reuni&oacute;n.",
                includes: ["Servicios", "Proceso", "Casos", "Reuni&oacute;n"],
                actionMessage: "Hola Jerson, quiero una web para servicios profesionales como Nexo Consultores.",
                demo: {
                    nav: [
                        { label: "Servicios", href: "#servicios" },
                        { label: "Proceso", href: "#proceso" },
                        { label: "Casos", href: "#casos" },
                        { label: "Reuni&oacute;n", href: "#contacto" }
                    ],
                    kicker: "Consultor&iacute;a comercial y operaciones digitales",
                    heroTitle: "Nexo Consultores",
                    heroText: "Acompa&ntilde;amos a empresas de servicios a ordenar su oferta, optimizar procesos y convertir m&aacute;s oportunidades en clientes.",
                    primaryCta: "Agendar reuni&oacute;n",
                    secondaryCta: "Ver servicios",
                    stats: [
                        { value: "+38%", label: "mejora promedio en conversi&oacute;n" },
                        { value: "24", label: "proyectos implementados" },
                        { value: "4 sem.", label: "primer plan de acci&oacute;n" }
                    ],
                    filters: ["Estrategia", "Procesos", "CRM", "Ventas", "Automatizaci&oacute;n"],
                    visualTitle: "Diagn&oacute;stico de crecimiento",
                    visualText: "Mapa de oportunidades, priorizaci&oacute;n comercial y plan de implementaci&oacute;n por etapas.",
                    visualMeta: ["Sprint 4 semanas", "Equipo senior", "Reporte ejecutivo"],
                    featured: {
                        id: "servicios",
                        kicker: "Servicios",
                        title: "Consultor&iacute;a enfocada en resultados",
                        text: "Servicios claros, con alcance, entregables y siguiente paso definidos.",
                        items: [
                            { title: "Diagn&oacute;stico comercial", meta: "Oferta, embudo y canales", price: "Desde S/ 1,200", text: "An&aacute;lisis inicial con oportunidades priorizadas." },
                            { title: "Implementaci&oacute;n CRM", meta: "Pipeline y seguimiento", price: "Desde S/ 2,800", text: "Configuraci&oacute;n, automatizaciones y capacitaci&oacute;n." },
                            { title: "Optimizar operaciones", meta: "Procesos y reportes", price: "A medida", text: "Mapeo, indicadores y mejoras de flujo interno." }
                        ]
                    },
                    benefits: {
                        id: "proceso",
                        kicker: "Proceso",
                        title: "Un m&eacute;todo claro para tomar decisiones",
                        text: "La web muestra c&oacute;mo trabaja la consultora antes de que el cliente solicite una reuni&oacute;n.",
                        items: [
                            { icon: "bx-search-alt", title: "Diagn&oacute;stico", text: "Revisi&oacute;n de oferta, canales, procesos y datos disponibles." },
                            { icon: "bx-git-branch", title: "Roadmap", text: "Priorizaci&oacute;n por impacto, dificultad y urgencia comercial." },
                            { icon: "bx-line-chart", title: "Implementaci&oacute;n", text: "Sprints, indicadores y seguimiento semanal con el equipo." }
                        ]
                    },
                    gallery: {
                        id: "casos",
                        kicker: "Casos y autoridad",
                        title: "Evidencia para vender servicios de alto valor",
                        text: "Espacio para resultados, logos, sectores atendidos y recursos descargables.",
                        items: [
                            { title: "SaaS B2B", text: "Nuevo pipeline comercial y tablero de seguimiento para ventas." },
                            { title: "Estudio legal", text: "Oferta de servicios reordenada y mejor calificaci&oacute;n de leads." },
                            { title: "Agencia creativa", text: "Proceso de discovery y propuesta comercial estandarizados." }
                        ]
                    },
                    testimonials: [
                        { quote: "La propuesta qued&oacute; clara desde la primera visita. Llegan prospectos con mejor contexto.", author: "Daniel M.", role: "Director comercial" },
                        { quote: "El proceso explicado en la web reduce mucho las reuniones exploratorias innecesarias.", author: "Paola G.", role: "Socia consultora" }
                    ],
                    faq: [
                        { question: "Trabajan por proyecto o mensualidad?", answer: "La web puede presentar ambos modelos: diagn&oacute;stico puntual, implementaci&oacute;n o acompa&ntilde;amiento mensual." },
                        { question: "El cliente puede solicitar una llamada?", answer: "S&iacute;, el CTA principal dirige a WhatsApp o agenda externa." },
                        { question: "Se pueden mostrar casos reales?", answer: "S&iacute;, hay bloques para casos, resultados, logos y testimonios." }
                    ],
                    contact: {
                        title: "Agenda una reuni&oacute;n de diagn&oacute;stico",
                        text: "Atenci&oacute;n remota para empresas de Per&uacute; y LATAM. Primera sesi&oacute;n de 30 minutos.",
                        items: ["Revisi&oacute;n inicial", "Plan por etapas", "Propuesta comercial clara"],
                        ctaTitle: "Conversemos sobre tu siguiente etapa",
                        ctaText: "El sitio est&aacute; pensado para explicar servicios complejos y convertir visitas en reuniones calificadas."
                    }
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
                summary: "Sitio de tienda online con categor&iacute;as, productos destacados, beneficios, confianza y CTA de compra.",
                includes: ["Categor&iacute;as", "Productos", "Checkout", "Confianza"],
                actionMessage: "Hola Jerson, quiero una tienda especializada como Nativa Store.",
                demo: {
                    nav: [
                        { label: "Productos", href: "#productos" },
                        { label: "Beneficios", href: "#beneficios" },
                        { label: "Colecciones", href: "#colecciones" },
                        { label: "Comprar", href: "#contacto" }
                    ],
                    kicker: "Tienda online de productos naturales",
                    heroTitle: "Nativa Store",
                    heroText: "Productos de cuidado personal, bienestar y regalos conscientes con env&iacute;o r&aacute;pido, pago seguro y asesor&iacute;a antes de comprar.",
                    primaryCta: "Comprar ahora",
                    secondaryCta: "Ver productos",
                    stats: [
                        { value: "+240", label: "productos activos" },
                        { value: "24 h", label: "despacho Lima" },
                        { value: "4.9/5", label: "satisfacci&oacute;n" }
                    ],
                    filters: ["Skincare", "Aromas", "Regalos", "Kits", "Ofertas"],
                    visualTitle: "Kit Ritual Andino",
                    visualText: "Set de jab&oacute;n artesanal, aceite esencial y crema hidratante con empaque para regalo.",
                    visualMeta: ["S/ 89", "Top ventas", "Env&iacute;o 24 h"],
                    featured: {
                        id: "productos",
                        kicker: "Productos destacados",
                        title: "Compra por necesidad o colecci&oacute;n",
                        text: "Tarjetas de producto con precio, beneficio, disponibilidad y CTA claro.",
                        items: [
                            { title: "Kit Ritual Andino", meta: "Cuidado personal", price: "S/ 89", text: "Incluye jab&oacute;n, aceite esencial y crema hidratante." },
                            { title: "Difusor Bosque", meta: "Aromas para casa", price: "S/ 59", text: "Fragancia herbal con varillas de bamb&uacute;." },
                            { title: "Box regalo bienestar", meta: "Regalos corporativos", price: "S/ 129", text: "Caja premium lista para entregar." }
                        ]
                    },
                    benefits: {
                        id: "beneficios",
                        kicker: "Compra segura",
                        title: "Todo lo que el cliente necesita antes de pagar",
                        text: "La tienda muestra confianza, env&iacute;os, garant&iacute;as y soporte para reducir dudas.",
                        items: [
                            { icon: "bx-package", title: "Env&iacute;o r&aacute;pido", text: "Tiempos por zona, costo de delivery y seguimiento de pedido." },
                            { icon: "bx-credit-card", title: "Pago seguro", text: "Pasarela, transferencias, cupones y confirmaci&oacute;n autom&aacute;tica." },
                            { icon: "bx-support", title: "Asesor&iacute;a", text: "Recomendaciones por tipo de piel, uso o presupuesto." }
                        ]
                    },
                    gallery: {
                        id: "colecciones",
                        kicker: "Colecciones",
                        title: "Categor&iacute;as visuales para explorar mejor",
                        text: "Bloques pensados para temporada, regalos, productos nuevos y m&aacute;s vendidos.",
                        items: [
                            { title: "Nuevos ingresos", text: "Lanzamientos con etiquetas, beneficios y stock visible." },
                            { title: "Kits de regalo", text: "Combos listos para fechas especiales o empresas." },
                            { title: "M&aacute;s vendidos", text: "Productos validados por rese&ntilde;as y recompra." }
                        ]
                    },
                    testimonials: [
                        { quote: "Encontr&eacute; el regalo en minutos y el checkout fue muy simple.", author: "Sof&iacute;a L.", role: "Cliente online" },
                        { quote: "Las categor&iacute;as ayudan a comprar por necesidad, no solo por producto.", author: "Marco T.", role: "Comprador recurrente" }
                    ],
                    faq: [
                        { question: "Cu&aacute;nto demora el env&iacute;o?", answer: "Lima puede despacharse en 24 horas y provincias seg&uacute;n operador log&iacute;stico." },
                        { question: "Puedo pedir recomendaci&oacute;n?", answer: "S&iacute;, el CTA de WhatsApp permite consultar antes de comprar." },
                        { question: "La tienda puede usar WooCommerce?", answer: "S&iacute;, la estructura est&aacute; lista para cat&aacute;logo, carrito y pasarela de pago." }
                    ],
                    contact: {
                        title: "Compra con asesor&iacute;a personalizada",
                        text: "Atenci&oacute;n online de lunes a s&aacute;bado. Env&iacute;os a Lima y provincias.",
                        items: ["Pago seguro", "Cambios coordinados", "Promos por temporada"],
                        ctaTitle: "Haz tu pedido en Nativa Store",
                        ctaText: "El sitio est&aacute; pensado para vender productos con categor&iacute;as claras, confianza y una ruta de compra simple."
                    }
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
                summary: "Sitio para academia o curso con programas, temario, docentes, beneficios, precios e inscripci&oacute;n.",
                includes: ["Programas", "Temario", "Docentes", "Precios"],
                actionMessage: "Hola Jerson, quiero una web para cursos como Aula Prisma.",
                demo: {
                    nav: [
                        { label: "Programas", href: "#programas" },
                        { label: "Temario", href: "#temario" },
                        { label: "Docentes", href: "#docentes" },
                        { label: "Inscripci&oacute;n", href: "#contacto" }
                    ],
                    kicker: "Academia online de habilidades digitales",
                    heroTitle: "Aula Prisma",
                    heroText: "Programas cortos y pr&aacute;cticos para aprender dise&ntilde;o, marketing y herramientas digitales con docentes activos en la industria.",
                    primaryCta: "Inscribirme",
                    secondaryCta: "Ver programas",
                    stats: [
                        { value: "+3,500", label: "alumnos egresados" },
                        { value: "6 sem.", label: "duraci&oacute;n promedio" },
                        { value: "92%", label: "finalizaci&oacute;n" }
                    ],
                    filters: ["Dise&ntilde;o", "Marketing", "No-code", "Frontend", "Empleabilidad"],
                    visualTitle: "Bootcamp UI Web",
                    visualText: "Aprende a dise&ntilde;ar interfaces, crear prototipos y publicar una landing responsive.",
                    visualMeta: ["S/ 380", "Inicio 15 julio", "Certificado"],
                    featured: {
                        id: "programas",
                        kicker: "Programas",
                        title: "Cursos con ruta clara de aprendizaje",
                        text: "Cada programa presenta objetivo, modalidad, duraci&oacute;n, precio y pr&oacute;ximo inicio.",
                        items: [
                            { title: "Bootcamp UI Web", meta: "6 semanas | En vivo", price: "S/ 380", text: "Dise&ntilde;o visual, responsive y publicaci&oacute;n de landing." },
                            { title: "Marketing para negocios", meta: "4 semanas | Online", price: "S/ 290", text: "Oferta, contenido, pauta b&aacute;sica y medici&oacute;n." },
                            { title: "Automatizaci&oacute;n no-code", meta: "5 semanas | Taller", price: "S/ 420", text: "Flujos, formularios, CRM ligero y reportes." }
                        ]
                    },
                    benefits: {
                        id: "temario",
                        kicker: "Temario y beneficios",
                        title: "Informaci&oacute;n completa antes de inscribirse",
                        text: "La web resuelve dudas sobre contenido, modalidad, docentes, precio y resultado esperado.",
                        items: [
                            { icon: "bx-list-check", title: "M&oacute;dulos visibles", text: "Temario por semana, proyectos y habilidades que se desarrollan." },
                            { icon: "bx-user-voice", title: "Docentes", text: "Perfiles, experiencia, clases en vivo y acompa&ntilde;amiento." },
                            { icon: "bx-award", title: "Certificado", text: "Criterios de finalizaci&oacute;n, proyecto final y constancia digital." }
                        ]
                    },
                    gallery: {
                        id: "docentes",
                        kicker: "Docentes y comunidad",
                        title: "Aprendizaje acompa&ntilde;ado, no solo videos",
                        text: "Bloques para presentar profesores, proyectos de alumnos y beneficios de comunidad.",
                        items: [
                            { title: "Clases en vivo", text: "Sesiones semanales con ejercicios y revisi&oacute;n de avances." },
                            { title: "Proyecto final", text: "Cada alumno construye una pieza aplicable a su portafolio." },
                            { title: "Comunidad privada", text: "Canal para consultas, recursos y oportunidades." }
                        ]
                    },
                    testimonials: [
                        { quote: "La p&aacute;gina me dej&oacute; claro el temario, precio y fechas antes de escribir.", author: "Andrea C.", role: "Alumna UI Web" },
                        { quote: "Mostrar proyectos y docentes aumenta la confianza para inscribirse.", author: "Miguel F.", role: "Coordinador acad&eacute;mico" }
                    ],
                    faq: [
                        { question: "Necesito experiencia previa?", answer: "Cada programa puede indicar requisitos y nivel recomendado." },
                        { question: "Las clases quedan grabadas?", answer: "S&iacute;, la estructura permite mostrar modalidad, grabaciones y recursos incluidos." },
                        { question: "Puedo separar vacante?", answer: "S&iacute;, el CTA dirige a inscripci&oacute;n o consulta por WhatsApp." }
                    ],
                    contact: {
                        title: "Inscripciones abiertas",
                        text: "Pr&oacute;ximo inicio: 15 de julio. Cupos limitados por programa y asesor&iacute;a previa por WhatsApp.",
                        items: ["Pago en cuotas", "Certificado digital", "Proyecto final guiado"],
                        ctaTitle: "Reserva tu vacante en Aula Prisma",
                        ctaText: "El sitio est&aacute; pensado para presentar programas, resolver dudas y captar alumnos interesados."
                    }
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

function renderCatalogPreviewItems(items) {
    return items.map((item) => `<span>${item.title}</span>`).join("");
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

function renderMetrics(metrics) {
    return metrics.map((item) => `
        <span>
            <strong>${item.value}</strong>
            <small>${item.label}</small>
        </span>
    `).join("");
}

function renderNav(nav) {
    return nav.map((item) => `<a href="${item.href}">${item.label}</a>`).join("");
}

function renderFeaturedItems(items) {
    return items.map((item) => `
        <article class="site-offer-card">
            <div>
                <span class="site-card-meta">${item.meta}</span>
                <h3>${item.title}</h3>
                <p>${item.text}</p>
            </div>
            <strong>${item.price}</strong>
        </article>
    `).join("");
}

function renderBenefitItems(items) {
    return items.map((item) => `
        <article class="site-benefit-card">
            <i class="bx ${item.icon}" aria-hidden="true"></i>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        </article>
    `).join("");
}

function renderGalleryItems(items) {
    return items.map((item, index) => `
        <article class="site-gallery-card">
            <div class="site-gallery-visual" aria-hidden="true"><span>0${index + 1}</span></div>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        </article>
    `).join("");
}

function renderTestimonials(items) {
    return items.map((item) => `
        <article class="site-testimonial">
            <i class="bx bxs-quote-left" aria-hidden="true"></i>
            <p>${item.quote}</p>
            <strong>${item.author}</strong>
            <span>${item.role}</span>
        </article>
    `).join("");
}

function renderFaq(items) {
    return items.map((item) => `
        <details class="site-faq-item">
            <summary>${item.question}</summary>
            <p>${item.answer}</p>
        </details>
    `).join("");
}

function renderContactItems(items) {
    return items.map((item) => `<li>${item}</li>`).join("");
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
                        <div class="visual-grid">${renderCatalogPreviewItems(rubro.themes[0].demo.featured.items)}</div>
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
    document.title = `${theme.name} | ${lowerFirst(rubro.pageTitle)} | Jerson Mercado`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute("content", decodeHtml(theme.summary));
    }

    root.innerHTML = `
        <div class="site-shell">
            <nav class="site-nav" aria-label="Navegaci&oacute;n del sitio demo">
                <a class="site-brand" href="${rubro.path}" aria-label="Volver al cat&aacute;logo de ${rubro.pageTitle}">
                    <span>${theme.name.split(" ").map((word) => word.charAt(0)).join("")}</span>
                    <strong>${theme.name}</strong>
                </a>
                <div class="site-menu">${renderNav(demo.nav)}</div>
                <a class="site-nav-cta" href="${whatsappUrl(theme.actionMessage)}" target="_blank" rel="noopener noreferrer">${demo.primaryCta}</a>
            </nav>

            <main>
                <header class="site-hero">
                    <div class="site-hero-copy">
                        <p class="kicker">${demo.kicker}</p>
                        <h1>${demo.heroTitle}</h1>
                        <p class="lead">${demo.heroText}</p>
                        <div class="site-actions">
                            <a class="theme-button primary" href="${whatsappUrl(theme.actionMessage)}" target="_blank" rel="noopener noreferrer"><i class="bx bxl-whatsapp" aria-hidden="true"></i> ${demo.primaryCta}</a>
                            <a class="theme-button secondary" href="${demo.featured.id ? `#${demo.featured.id}` : "#oferta"}">${demo.secondaryCta}</a>
                        </div>
                        <div class="site-metrics">${renderMetrics(demo.stats)}</div>
                    </div>

                    <aside class="site-visual" aria-label="Producto o servicio destacado">
                        <div class="site-visual-main">
                            <span>${theme.label}</span>
                            <h2>${demo.visualTitle}</h2>
                            <p>${demo.visualText}</p>
                        </div>
                        <div class="site-visual-meta">${renderTags(demo.visualMeta)}</div>
                    </aside>
                </header>

                <div class="site-filterbar" aria-label="Categor&iacute;as principales">${renderTags(demo.filters)}</div>

                <section class="site-section" id="${demo.featured.id}">
                    <div class="site-section-heading">
                        <p class="kicker">${demo.featured.kicker}</p>
                        <h2>${demo.featured.title}</h2>
                        <p>${demo.featured.text}</p>
                    </div>
                    <div class="site-offer-grid">${renderFeaturedItems(demo.featured.items)}</div>
                </section>

                <section class="site-section site-split" id="${demo.benefits.id}">
                    <div class="site-section-heading">
                        <p class="kicker">${demo.benefits.kicker}</p>
                        <h2>${demo.benefits.title}</h2>
                        <p>${demo.benefits.text}</p>
                    </div>
                    <div class="site-benefit-grid">${renderBenefitItems(demo.benefits.items)}</div>
                </section>

                <section class="site-section" id="${demo.gallery.id}">
                    <div class="site-section-heading">
                        <p class="kicker">${demo.gallery.kicker}</p>
                        <h2>${demo.gallery.title}</h2>
                        <p>${demo.gallery.text}</p>
                    </div>
                    <div class="site-gallery-grid">${renderGalleryItems(demo.gallery.items)}</div>
                </section>

                <section class="site-section site-proof" id="opiniones">
                    <div class="site-section-heading">
                        <p class="kicker">Testimonios</p>
                        <h2>Lo que dicen los clientes</h2>
                    </div>
                    <div class="site-testimonial-grid">${renderTestimonials(demo.testimonials)}</div>
                </section>

                <section class="site-section site-faq" id="faq">
                    <div class="site-section-heading">
                        <p class="kicker">FAQ</p>
                        <h2>Preguntas frecuentes</h2>
                    </div>
                    <div class="site-faq-list">${renderFaq(demo.faq)}</div>
                </section>

                <section class="site-section site-contact" id="contacto">
                    <div>
                        <p class="kicker">Contacto</p>
                        <h2>${demo.contact.title}</h2>
                        <p>${demo.contact.text}</p>
                        <ul>${renderContactItems(demo.contact.items)}</ul>
                    </div>
                    <div class="site-contact-card">
                        <h3>${demo.contact.ctaTitle}</h3>
                        <p>${demo.contact.ctaText}</p>
                        <a class="theme-button primary" href="${whatsappUrl(theme.actionMessage)}" target="_blank" rel="noopener noreferrer"><i class="bx bxl-whatsapp" aria-hidden="true"></i> ${demo.primaryCta}</a>
                        <a class="theme-button secondary" href="${rubro.path}">Ver otros temas</a>
                    </div>
                </section>
            </main>
        </div>
        <footer class="site-footer">
            <strong>${theme.name}</strong>
            <span>Tema por Jerson Mercado</span>
        </footer>
    `;
}

renderCatalogPage();
renderDemoPage();
