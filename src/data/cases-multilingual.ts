export interface CaseStudyData {
  id: string;
  title: string;
  client: string;
  headline: string;
  summary: string;
  product?: string;
  services: string[];
  stats: { label: string; value: string }[];
  date?: string;
  images?: string[];
  video?: string;
  results: string[];
  // Extended fields for full case study pages
  industry?: string;
  clientSummary?: string;
  problem?: string;
  solution?: string;
  technologies?: string[];
  testimonial?: { quote: string; author: string; role: string };
  projects?: { name: string; description: string; tech?: string; result: string }[];
}

export const casesData: Record<string, CaseStudyData[]> = {
  es: [
    {
      id: 'take',
      title: 'TAKE App',
      client: 'TAKE - Cafetería',
      headline: 'Aplicación móvil enfocada en la fidelización digital para hostelería',
      product: 'BOND',
      date: 'Agosto 2025',
      services: ['desarrollo-a-medida'],
      stats: [
        { label: 'Integración Wallet', value: 'Google y Apple' },
        { label: 'Descargas', value: '+2500' },
        { label: 'Sellos Registrados', value: '+20.000' },
      ],
      images: ['/projects/take.png'],
      summary: 'Plataforma de fidelización digital todo en uno que integra tarjetas de fidelización en Google y Apple Wallet, carta digital interactiva, minijuego con premios para incentivar la recurrencia y sistema de anuncios de la cafetería. Incluye un dashboard de gestión completo para administrar la carta, premios y anuncios del negocio.',
      results: [
        'Fidelización digital integrada en Google y Apple Wallet',
        'Minijuego gamificado con premios para impulsar la recurrencia',
        'Carta digital interactiva con gestión centralizada desde dashboard',
        'Sistema de anuncios para comunicación directa con clientes',
      ],
    },
    {
      id: 'iciga',
      title: 'IRIS',
      client: 'ICIGA - Distribuidor de material de laboratorio',
      headline: 'Gestión comercial semiautomatizada con integración CRM',
      product: 'IRIS',
      date: 'Noviembre 2025',
      services: ['desarrollo-a-medida'],
      images: ['/projects/iciga.jpg'],
      stats: [
        { label: 'Tiempo ahorrado', value: '60%' },
        { label: 'Productos cruzados', value: '45.000+' },
        { label: 'Bandejas monitorizadas', value: 'Múltiples' },
      ],
      summary: 'Info Retrieval & Intelligence System. Plataforma integral de gestión comercial con agentes de IA que monitoriza 6 bandejas de correo en tiempo real, clasifica automáticamente 10 tipos de solicitudes (pedidos, presupuestos, facturas, incidencias, pagos...), cruza contra dos catálogos con más de 45.000 productos y genera propuestas de respuesta listas para enviar. Incluye pipeline completo de seguimiento de transacciones venta/compra, conexión directa con el ERP y CRM del cliente, verificación de stock en tiempo real y dashboard con analíticas de embudo comercial.',
      results: [
        'Agentes de IA con razonamiento y redacción automática de emails',
        'Pipeline de seguimiento de transacciones de venta y compra',
        'Conexión directa con ERP y CRM',
        'Dashboard en tiempo real con analíticas de embudo comercial',
      ],
    },
    {
      id: 'shearn',
      title: 'Project Certainty',
      client: 'Shearn',
      headline: 'Resolución de dibujo técnico con IA',
      date: 'Julio 2025',
      services: ['desarrollo-a-medida'],
      video: '/projects/shearn.webm',
      stats: [
        { label: 'Motor', value: '2D + 3D' },
        { label: 'Tecnología', value: 'Three.js' },
        { label: 'Desarrollo', value: '100% propio' },
      ],
      summary: 'Prueba de concepto para validar si la IA de julio de 2025 era capaz de resolver ejercicios de dibujo técnico de nivel 2º Bachillerato y Universidad. Motor 2D paso a paso para resolución guiada y módulo 3D en Three.js para reconstrucción de sólidos a partir de vistas ortográficas.',
      results: [
        'PoC exitoso: resolución de ejercicios de 2º Bach y Universidad',
        'Motor 2D de soluciones paso a paso',
        'Reconstrucción 3D con Three.js',
        'Desarrollo íntegramente interno',
      ],
    },
    {
      id: 'roydisa',
      title: 'Roydisa',
      client: 'Roydisa S.A.',
      headline: 'Automatización inteligente para un gigante industrial gallego',
      date: 'Julio 2026',
      industry: 'Suministros industriales',
      services: ['desarrollo-a-medida', 'consultoria-transformacion'],
      technologies: ['Python', 'FastAPI', 'LLM', 'OCR', 'STEP3D'],
      images: [],
      stats: [
        { label: 'Tiempo ahorrado', value: '~10 h/sem' },
        { label: 'Precisión OCR', value: '95%+' },
        { label: 'Documentos/mes', value: '2.000+' },
      ],
      summary: 'Roydisa S.A., con más de 40.000 referencias en stock y 5 delegaciones en Galicia, necesitaba automatizar tres procesos críticos que consumían horas de trabajo cualificado. OSIX Tech entregó dos proyectos completados y un tercero en desarrollo: un analizador automático de planos STEP3D, un procesador OCR de albaranes con IA que alcanzó un 95% de precisión donde otros fracasaron, y un generador inteligente de ofertas comerciales.',
      clientSummary: 'Roydisa S.A. es uno de los mayores proveedores de suministros industriales de Galicia. Fundada en 1976, cuenta con más de 50 profesionales, 5 delegaciones en Santiago, A Coruña, Vigo, Lugo y Ourense, y más de 4.000 m² de almacén. Gestiona más de 40.000 referencias en stock y 500.000 productos codificados. Es distribuidor oficial de Bosch Rexroth en Galicia y trabaja con fabricantes como WEG, Nord, Festo y Timken.',
      problem: 'Roydisa tenía tres procesos críticos que consumían horas de trabajo cualificado y generaban errores. El análisis de planos STEP3D para identificar piezas que necesitaban perfilados llevaba ~1 hora por plano, a un ritmo de 10 planos semanales. El procesamiento de albaranes con OCR tradicional había fracasado con proveedores anteriores, que no superaban el 60% de precisión. Y la generación de ofertas comerciales requería consultar manualmente el historial de ventas.',
      solution: 'OSIX Tech abordó los tres frentes con enfoques distintos según el problema. Para los planos STEP3D, un paquete de scripts en Python que lee directamente los archivos y genera las hojas de Excel automáticamente. Para los albaranes, un servidor FastAPI conectado a un LLM externo que actúa como motor de OCR, superando ampliamente a los sistemas tradicionales. Y para las ofertas, un sistema que genera presupuestos automáticamente a partir de la solicitud del usuario, consultando el historial de ventas.',
      projects: [
        {
          name: 'STEP3D Analyzer',
          description: 'Los ingenieros revisaban manualmente archivos STEP3D para identificar qué piezas necesitaban perfilados según su posición y colocación. Cada plano llevaba ~1 hora, a un ritmo de 10 por semana. OSIX construyó un analizador automático que lee los planos directamente y genera las hojas de Excel con las solicitudes de modificación sin intervención humana.',
          tech: 'Python',
          result: 'Lo que llevaba ~10 horas semanales ahora ocurre en segundos. Eliminado el análisis manual por completo.',
        },
        {
          name: 'Procesador OCR de Albaranes',
          description: 'Miles de albaranes al mes necesitaban ser digitalizados. Proveedores anteriores habían intentado OCR tradicional sin éxito: menos del 60% de precisión. OSIX implementó un servidor FastAPI conectado a un LLM externo que actúa como motor de OCR, aprovechando que los modelos de lenguaje actuales superan ampliamente a los sistemas OCR tradicionales en documentos semiestructurados.',
          tech: 'FastAPI + LLM',
          result: 'Más de 2.000 documentos procesados al mes con un 95%+ de precisión y un coste operativo de aproximadamente 15$. Donde otros proveedores fracasaron, OSIX entregó.',
        },
        {
          name: 'Generador Inteligente de Ofertas',
          description: 'Crear ofertas para clientes requería consultar manualmente el historial de ventas para ajustar precios. OSIX está desarrollando un sistema que genera ofertas comerciales automáticamente a partir de la solicitud del usuario, consultando el historial de ventas para ajustar precios de forma inteligente.',
          tech: 'En desarrollo',
          result: 'Tercer proyecto con el mismo cliente. La confianza que genera cada entrega abre la puerta a la siguiente.',
        },
      ],
      results: [
        'STEP3D Analyzer: ~10 h/semana de análisis manual eliminadas por completo',
        'OCR Albaranes: 95%+ de precisión donde competidores no pasaban del 60%',
        'Más de 2.000 documentos procesados al mes con coste operativo mínimo',
        'Tres proyectos con el mismo cliente: confianza que se construye entrega a entrega',
      ],
      testimonial: {
        quote: 'Trabajar con OSIX ha sido distinto a todo lo anterior. No solo entienden la tecnología: entienden el problema industrial real. El OCR de albaranes llevaba años sin funcionar con otros proveedores. Ellos lo resolvieron en semanas.',
        author: 'Dirección de Operaciones',
        role: 'Roydisa S.A.',
      },
    },
  ],
  en: [
    {
      id: 'take',
      title: 'TAKE App',
      client: 'TAKE - Coffee Shop',
      headline: 'Mobile app focused on digital loyalty',
      product: 'BOND',
      date: 'August 2025',
      services: ['desarrollo-a-medida'],
      stats: [
        { label: 'Wallet integration', value: 'Google & Apple' },
        { label: '+2500', value: 'Downloads' },
        { label: 'Stamps Registered', value: '+20,000' },
      ],
      images: ['/projects/take.png'],
      summary: 'All-in-one digital loyalty platform integrating loyalty cards on Google and Apple Wallet, interactive digital menu, mini-game with prizes to drive repeat visits, and a coffee shop announcement system. Includes a full management dashboard to administer the menu, prizes, and business announcements.',
      results: [
        'Digital loyalty integrated with Google and Apple Wallet',
        'Gamified mini-game with prizes to drive repeat visits',
        'Interactive digital menu with centralized dashboard management',
        'Announcement system for direct customer communication',
      ],
    },
    {
      id: 'iciga',
      title: 'IRIS',
      client: 'ICIGA - Laboratory supplies distributor',
      headline: 'Semi-automated commercial management with CRM integration',
      product: 'IRIS',
      date: 'November 2025',
      services: ['desarrollo-a-medida'],
      images: ['/projects/iciga.jpg'],
      stats: [
        { label: 'Time saved', value: '60%' },
        { label: 'Products cross-referenced', value: '45,000+' },
        { label: 'Inboxes monitored', value: 'Multiple' },
      ],
      summary: 'Info Retrieval & Intelligence System. End-to-end commercial management platform with AI agents that monitors 6 inboxes in real time, automatically classifies 10 types of requests (orders, quotes, invoices, incidents, payments...), cross-references against two catalogs with 45,000+ products, and generates ready-to-send response proposals. Includes a full sales/purchase transaction tracking pipeline, direct ERP and CRM integration, real-time stock verification, and a dashboard with commercial funnel analytics.',
      results: [
        'AI agents with reasoning and automatic email drafting',
        'Full sales and purchase transaction tracking pipeline',
        'Direct ERP and CRM integration',
        'Real-time dashboard with commercial funnel analytics',
      ],
    },
    {
      id: 'shearn',
      title: 'Project Certainty',
      client: 'Shearn',
      headline: 'AI-powered technical drawing solver',
      date: 'July 2025',
      video: '/projects/shearn.webm',
      services: ['desarrollo-a-medida'],
      stats: [
        { label: 'Engine', value: '2D + 3D' },
        { label: 'Technology', value: 'Three.js' },
        { label: 'Development', value: '100% in-house' },
      ],
      summary: 'Proof of concept to validate whether the AI available in July 2025 could solve technical drawing exercises at high school and university level. Step-by-step 2D engine for guided solving and Three.js 3D module for solid reconstruction from orthographic views.',
      results: [
        'Successful PoC: solving high school & university-level exercises',
        'Step-by-step 2D solution engine',
        '3D reconstruction with Three.js',
        'Fully in-house development',
      ],
    },
    {
      id: 'roydisa',
      title: 'Roydisa',
      client: 'Roydisa S.A.',
      headline: 'Intelligent automation for a Galician industrial leader',
      date: 'July 2026',
      industry: 'Industrial supply',
      services: ['desarrollo-a-medida', 'consultoria-transformacion'],
      technologies: ['Python', 'FastAPI', 'LLM', 'OCR', 'STEP3D'],
      images: [],
      stats: [
        { label: 'Time saved', value: '~10 h/wk' },
        { label: 'OCR accuracy', value: '95%+' },
        { label: 'Docs/month', value: '2,000+' },
      ],
      summary: 'Roydisa S.A., with over 40,000 SKUs in stock and 5 locations across Galicia, needed to automate three critical processes that were consuming hours of skilled labor. OSIX Tech delivered two completed projects and a third in development: an automatic STEP3D plan analyzer, an AI-powered OCR delivery note processor achieving 95% accuracy where others failed, and an intelligent quote generator.',
      clientSummary: 'Roydisa S.A. is one of the largest industrial supply providers in Galicia. Founded in 1976, it employs over 50 professionals across 5 locations in Santiago, A Coruña, Vigo, Lugo, and Ourense, with over 4,000 m² of warehouse space. It manages 40,000+ SKUs in stock and 500,000+ codified products. It is the official Bosch Rexroth distributor in Galicia and partners with manufacturers including WEG, Nord, Festo, and Timken.',
      problem: 'Roydisa had three critical processes consuming skilled labor hours and generating errors. STEP3D plan analysis to identify pieces needing profiling took ~1 hour per plan at 10 plans per week. Delivery note OCR processing had failed with previous providers, never exceeding 60% accuracy. And quote generation required manually checking sales history to adjust pricing.',
      solution: 'OSIX Tech tackled all three with approaches tailored to each problem. For STEP3D plans: a Python script package that reads the files directly and auto-generates Excel sheets. For delivery notes: a FastAPI server connected to an external LLM acting as the OCR engine, far surpassing traditional OCR systems. For quotes: a system that auto-generates offers from user requests by checking sales history.',
      projects: [
        {
          name: 'STEP3D Analyzer',
          description: 'Engineers manually reviewed STEP3D files to identify pieces needing profiling based on position and placement. Each plan took ~1 hour, at a rate of 10 per week. OSIX built an automatic analyzer that reads plans directly and generates Excel modification sheets without human intervention.',
          tech: 'Python',
          result: 'What took ~10 hours per week now happens in seconds. Manual analysis eliminated entirely.',
        },
        {
          name: 'OCR Delivery Note Processor',
          description: 'Thousands of delivery notes per month needed digitization. Previous providers attempted traditional OCR without success: under 60% accuracy. OSIX implemented a FastAPI server connected to an external LLM as the OCR engine, leveraging the fact that current language models far outperform traditional OCR on semi-structured documents.',
          tech: 'FastAPI + LLM',
          result: '2,000+ documents processed per month at 95%+ accuracy with ~$15 operating cost. Where other providers failed, OSIX delivered.',
        },
        {
          name: 'Intelligent Quote Generator',
          description: 'Creating client quotes required manually checking sales history to adjust pricing. OSIX is developing a system that auto-generates commercial offers from user requests, intelligently consulting sales history for pricing.',
          tech: 'In development',
          result: 'Third project with the same client. Trust built delivery by delivery.',
        },
      ],
      results: [
        'STEP3D Analyzer: ~10 h/week of manual analysis eliminated',
        'OCR: 95%+ accuracy where competitors couldn\'t break 60%',
        '2,000+ documents processed monthly at minimal operating cost',
        'Three projects, one client: trust built delivery by delivery',
      ],
      testimonial: {
        quote: 'Working with OSIX has been unlike anything before. They don\'t just understand technology: they understand real industrial problems. The delivery note OCR had been failing with other providers for years. They solved it in weeks.',
        author: 'Operations Management',
        role: 'Roydisa S.A.',
      },
    },
  ],
  gl: [
    {
      id: 'take',
      title: 'TAKE App',
      client: 'TAKE - Cafetaría',
      headline: 'Aplicación móbil enfocada na fidelización dixital para hostalaría',
      product: 'BOND',
      date: 'Agosto 2025',
      services: ['desarrollo-a-medida'],
      stats: [
        { label: 'Integración Wallet', value: 'Google e Apple' },
        { label: 'Descargas', value: '+2500' },
        { label: 'Selos Rexistrados', value: '+20.000' },
      ],
      images: ['/projects/take.png'],
      summary: 'Plataforma de fidelización dixital todo en un que integra tarxetas de fidelización en Google e Apple Wallet, carta dixital interactiva, minixogo con premios para incentivar a recorrencia e sistema de anuncios da cafetaría. Inclúe un dashboard de xestión completo para administrar a carta, premios e anuncios do negocio.',
      results: [
        'Fidelización dixital integrada en Google e Apple Wallet',
        'Minixogo gamificado con premios para impulsar a recorrencia',
        'Carta dixital interactiva con xestión centralizada desde dashboard',
        'Sistema de anuncios para comunicación directa con clientes',
      ],
    },
    {
      id: 'iciga',
      title: 'IRIS',
      client: 'ICIGA - Distribuidor de material de laboratorio',
      headline: 'Xestión comercial semiautomatizada con integración CRM',
      product: 'IRIS',
      date: 'Novembro 2025',
      services: ['desarrollo-a-medida'],
      images: ['/projects/iciga.jpg'],
      stats: [
        { label: 'Tempo aforrado', value: '60%' },
        { label: 'Produtos cruzados', value: '45.000+' },
        { label: 'Bandexas monitorizadas', value: 'Múltiples' },
      ],
      summary: 'Info Retrieval & Intelligence System. Plataforma integral de xestión comercial con axentes de IA que monitoriza 6 bandexas de correo en tempo real, clasifica automaticamente 10 tipos de solicitudes (pedidos, orzamentos, facturas, incidencias, pagos...), cruza contra dous catálogos con máis de 45.000 produtos e xera propostas de resposta listas para enviar. Inclúe pipeline completo de seguimento de transaccións venda/compra, conexión directa co ERP e CRM do cliente, verificación de stock en tempo real e dashboard con analíticas de funil comercial.',
      results: [
        'Axentes de IA con razoamento e redacción automática de emails',
        'Pipeline de seguimento de transaccións de venda e compra',
        'Conexión directa con ERP e CRM',
        'Dashboard en tempo real con analíticas de funil comercial',
      ],
    },
    {
      id: 'shearn',
      title: 'Project Certainty',
      client: 'Shearn',
      headline: 'Resolución de debuxo técnico con IA',
      date: 'Xullo 2025',
      services: ['desarrollo-a-medida'],
      video: '/projects/shearn.webm',
      stats: [
        { label: 'Motor', value: '2D + 3D' },
        { label: 'Tecnoloxía', value: 'Three.js' },
        { label: 'Desenvolvemento', value: '100% propio' },
      ],
      summary: 'Proba de concepto para validar se a IA de xullo de 2025 era capaz de resolver exercicios de debuxo técnico de nivel 2.º Bacharelato e Universidade. Motor 2D paso a paso para resolución guiada e módulo 3D en Three.js para reconstrución de sólidos a partir de vistas ortográficas.',
      results: [
        'PoC exitoso: resolución de exercicios de 2.º Bach e Universidade',
        'Motor 2D de solucións paso a paso',
        'Reconstrución 3D con Three.js',
        'Desenvolvemento integramente interno',
      ],
    },
    {
      id: 'roydisa',
      title: 'Roydisa',
      client: 'Roydisa S.A.',
      headline: 'Automatización intelixente para un xigante industrial galego',
      date: 'Xullo 2026',
      industry: 'Subministros industriais',
      services: ['desarrollo-a-medida', 'consultoria-transformacion'],
      technologies: ['Python', 'FastAPI', 'LLM', 'OCR', 'STEP3D'],
      images: [],
      stats: [
        { label: 'Tempo aforrado', value: '~10 h/sem' },
        { label: 'Precisión OCR', value: '95%+' },
        { label: 'Documentos/mes', value: '2.000+' },
      ],
      summary: 'Roydisa S.A., con máis de 40.000 referencias en stock e 5 delegacións en Galicia, precisaba automatizar tres procesos críticos que consumían horas de traballo cualificado. OSIX Tech entregou dous proxectos completados e un terceiro en desenvolvemento: un analizador automático de planos STEP3D, un procesador OCR de albarás con IA que acadou un 95% de precisión onde outros fracasaron, e un xerador intelixente de ofertas comerciais.',
      clientSummary: 'Roydisa S.A. é un dos maiores provedores de subministros industriais de Galicia. Fundada en 1976, conta con máis de 50 profesionais, 5 delegacións en Santiago, A Coruña, Vigo, Lugo e Ourense, e máis de 4.000 m² de almacén. Xestiona máis de 40.000 referencias en stock e 500.000 produtos codificados. É distribuidor oficial de Bosch Rexroth en Galicia e traballa con fabricantes como WEG, Nord, Festo e Timken.',
      problem: 'Roydisa tiña tres procesos críticos que consumían horas de traballo cualificado e xeraban erros. A análise de planos STEP3D para identificar pezas que precisaban perfilados levaba ~1 hora por plano, a un ritmo de 10 planos semanais. O procesamento de albarás con OCR tradicional fracasara con provedores anteriores, que non superaban o 60% de precisión. E a xeración de ofertas comerciais requiría consultar manualmente o historial de vendas.',
      solution: 'OSIX Tech abordou as tres frontes con enfoques distintos segundo o problema. Para os planos STEP3D, un paquete de scripts en Python que le directamente os arquivos e xera as follas de Excel automaticamente. Para os albarás, un servidor FastAPI conectado a un LLM externo que actúa como motor de OCR, superando amplamente os sistemas tradicionais. E para as ofertas, un sistema que xera presupostos automaticamente a partir da solicitude do usuario, consultando o historial de vendas.',
      projects: [
        {
          name: 'STEP3D Analyzer',
          description: 'Os enxeñeiros revisaban manualmente arquivos STEP3D para identificar que pezas necesitaban perfilados segundo a súa posición e colocación. Cada plano levaba ~1 hora, a un ritmo de 10 por semana. OSIX construíu un analizador automático que le os planos directamente e xera as follas de Excel coas solicitudes de modificación sen intervención humana.',
          tech: 'Python',
          result: 'O que levaba ~10 horas semanais agora ocorre en segundos. Eliminada a análise manual por completo.',
        },
        {
          name: 'Procesador OCR de Albarás',
          description: 'Miles de albarás ao mes necesitaban ser dixitalizados. Provedores anteriores intentaran OCR tradicional sen éxito: menos do 60% de precisión. OSIX implementou un servidor FastAPI conectado a un LLM externo que actúa como motor de OCR, aproveitando que os modelos de linguaxe actuais superan amplamente os sistemas OCR tradicionais en documentos semiestruturados.',
          tech: 'FastAPI + LLM',
          result: 'Máis de 2.000 documentos procesados ao mes cun 95%+ de precisión e un custo operativo de aproximadamente 15$. Onde outros provedores fracasaron, OSIX entregou.',
        },
        {
          name: 'Xerador Intelixente de Ofertas',
          description: 'Crear ofertas para clientes requiría consultar manualmente o historial de vendas para axustar prezos. OSIX está a desenvolver un sistema que xera ofertas comerciais automaticamente a partir da solicitude do usuario, consultando o historial de vendas para axustar prezos de forma intelixente.',
          tech: 'En desenvolvemento',
          result: 'Terceiro proxecto co mesmo cliente. A confianza que xera cada entrega abre a porta á seguinte.',
        },
      ],
      results: [
        'STEP3D Analyzer: ~10 h/semana de análise manual eliminadas por completo',
        'OCR Albarás: 95%+ de precisión onde competidores non pasaban do 60%',
        'Máis de 2.000 documentos procesados ao mes con custo operativo mínimo',
        'Tres proxectos co mesmo cliente: confianza que se constrúe entrega a entrega',
      ],
      testimonial: {
        quote: 'Traballar con OSIX foi distinto a todo o anterior. Non só entenden a tecnoloxía: entenden o problema industrial real. O OCR de albarás levaba anos sen funcionar con outros provedores. Eles resolvérono en semanas.',
        author: 'Dirección de Operacións',
        role: 'Roydisa S.A.',
      },
    },
  ],
};

export function getAllCases(lang: string = 'es'): CaseStudyData[] {
  return casesData[lang] || casesData.es;
}

export function getCasesByService(serviceId: string, lang: string = 'es'): CaseStudyData[] {
  return (casesData[lang] || casesData.es).filter(c => c.services.includes(serviceId));
}

export function getCaseById(id: string, lang: string = 'es'): CaseStudyData | undefined {
  return (casesData[lang] || casesData.es).find(c => c.id === id);
}

export function getCaseIds(): string[] {
  return (casesData.es || []).map(c => c.id);
}
