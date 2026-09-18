// Approved case studies.
//
// The copy here is the reviewed text that previously lived as markdown in
// src/content/es/casos/. It moved into structured fields so one template can
// render it: the metric grids were hand-written HTML inside the markdown, which
// meant every case restated its own layout. Nothing was reworded in the move —
// treat these strings as approved copy and change them only with the same review.
//
// Spanish only, like the guides: these are measured client figures and must not
// be machine-translated.

export interface CaseMetric {
  value: string;
  label: string;
  /** Provenance line under the metric — where the number comes from. */
  note?: string;
}

export interface CaseSection {
  title: string;
  body: string[];
}

export interface CaseFact {
  key: string;
  value: string;
}

export interface CaseFaq {
  question: string;
  answer: string;
}

export interface CaseStudy {
  slug: string;
  category: string;
  /**
   * Which service pages surface this case. A classification for navigation, not
   * a claim in the approved copy — review it when the service list changes.
   */
  services: string[];
  title: string;
  lead: string;
  seoTitle: string;
  seoDescription: string;
  /** Headline figures — animated, so keep them short. */
  metrics: CaseMetric[];
  /** Prose restatement of the headline figures, under the metric row. */
  metricsNote?: string;
  /** Narrative, rendered as the scroll-stacked cards. */
  sections: CaseSection[];
  secondaryMetrics?: CaseMetric[];
  /** Scope of the measurement window. */
  status: string;
  /** What the numbers deliberately do NOT claim — given its own callout. */
  limitSection: CaseSection;
  facts: CaseFact[];
  faqs: CaseFaq[];
  ctaTitle: string;
  ctaBody: string[];
  sourceNote?: string;
}

// Shared closing copy. Identical across the standard cases, so it lives once.
const SCOPE_DISCLAIMER =
  'Los números de este caso describen el alcance medido en el entorno del cliente. No son una promesa universal para cualquier empresa. Antes de extrapolarlos conviene probar una muestra propia y acordar qué significa éxito para el proceso.';

const LIMIT_DISCLAIMER =
  'La cifra principal sirve para entender la escala del trabajo. La decisión de implantar algo parecido debe partir del volumen, la calidad de los datos, las integraciones y el nivel de revisión que necesita el negocio.';

const PROJECT_OPENING =
  'El objetivo era llevar la automatización al punto donde el equipo ya trabajaba y medir qué ocurría después de ponerla en producción.';

const OSIX_FOCUS =
  'El trabajo de OSIX se centró en conectar datos, reglas, modelos y revisión humana. La automatización no se planteó como una sustitución total del equipo, sino como una forma de quitar pasos repetitivos y dejar visibles las excepciones.';

const SOURCE_LINE = 'agregados de producción, logs y repositorios, sin datos personales.';
const CUTOFF_DATE = '8 de septiembre de 2026.';

const STANDARD_CTA_TITLE = '¿Tienes un proceso parecido?';
const STANDARD_CTA_BODY = [
  'Podemos revisar el flujo actual, separar lo que conviene automatizar de lo que debe seguir bajo control humano y proponer una primera prueba medible.',
];

const STANDARD_FAQS: CaseFaq[] = [
  {
    question: '¿El resultado se puede trasladar directamente a otra empresa?',
    answer:
      'No sin una prueba propia. Las cifras dependen del volumen, los datos, las reglas y las integraciones del proyecto original.',
  },
  {
    question: '¿La IA toma todas las decisiones?',
    answer:
      'No necesariamente. El diseño correcto deja las decisiones sensibles, las excepciones y las acciones con impacto comercial bajo revisión humana.',
  },
  {
    question: '¿Cómo se mide un proyecto así?',
    answer:
      'Con una ventana de producción definida y métricas acordadas antes de publicar: volumen, tiempo, errores, adopción o calidad, según el proceso.',
  },
];

/** Builds the narrative + ficha shared by the seven standard cases. */
function standardCase(input: {
  slug: string;
  category: string;
  services: string[];
  title: string;
  lead: string;
  seoTitle: string;
  seoDescription: string;
  metrics: CaseMetric[];
  solution: string;
  status: string;
  limit: string;
}): CaseStudy {
  return {
    slug: input.slug,
    category: input.category,
    services: input.services,
    title: input.title,
    lead: input.lead,
    seoTitle: input.seoTitle,
    seoDescription: input.seoDescription,
    metrics: input.metrics,
    status: input.status,
    limitSection: {
      title: 'El límite que mantenemos visible',
      body: [input.limit, LIMIT_DISCLAIMER],
    },
    sections: [
      {
        title: 'El proyecto partió de un proceso real, no de una demo aislada',
        body: [input.lead, PROJECT_OPENING],
      },
      {
        title: 'La solución se adaptó al sistema que ya tenía el cliente',
        body: [input.solution, OSIX_FOCUS],
      },
      {
        title: 'Qué muestran las métricas',
        body: [input.status, SCOPE_DISCLAIMER],
      },
    ],
    facts: [
      { key: 'Categoría', value: `${input.category}.` },
      { key: 'Estado', value: input.status },
      { key: 'Fuente de las cifras', value: SOURCE_LINE },
      { key: 'Fecha de corte', value: CUTOFF_DATE },
    ],
    faqs: STANDARD_FAQS,
    ctaTitle: STANDARD_CTA_TITLE,
    ctaBody: STANDARD_CTA_BODY,
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'roydisa-ocr-documentos-proveedores',
    services: ['desarrollo-a-medida', 'consultoria-transformacion'],
    category: 'Automatización documental y OCR',
    title: 'Roydisa procesa documentos de proveedores sin teclearlos uno a uno',
    lead: 'Roydisa recibe documentos de proveedores que deben convertirse en información utilizable para compras, administración y operaciones. El flujo de OSIX toma las fotos y PDF desde las carpetas del cliente, los procesa y devuelve Excels estructurados por línea de producto.',
    seoTitle: 'Roydisa: OCR de documentos de proveedores en 27 segundos | OSIX Tech',
    seoDescription:
      'Caso de estudio de OSIX Tech: 31.377 documentos de proveedores procesados, 27 segundos de mediana desde la foto al Excel y 0,04 % de error técnico desde junio de 2026.',
    metrics: [
      { value: '31.377', label: 'ficheros tratados', note: '12 mar · 8 sep 2026' },
      { value: '27 s', label: 'mediana foto a Excel', note: 'flujo completo' },
      { value: '88 %', label: 'en menos de un minuto', note: 'documentos procesados' },
      { value: '0,04 %', label: 'error técnico desde junio', note: '7 de 17.500 documentos' },
    ],
    metricsNote:
      'En la ventana medida, el sistema procesó 31.377 ficheros. La mediana desde la foto hasta el Excel fue de 27 segundos y el 88 % de los documentos terminó en menos de un minuto.',
    sections: [
      {
        title: 'El problema no era leer un documento, sino convertir miles en datos utilizables',
        body: [
          'Los documentos llegaban en formatos distintos y con ritmos variables. Cada uno tenía que pasar de una imagen o un PDF a un formato que el equipo pudiera revisar, compartir y usar en sus procesos posteriores.',
          'Con este volumen, la transcripción manual introduce dos costes. El primero es el tiempo que el equipo dedica a leer y copiar. El segundo es la fricción que aparece cuando el volumen cambia, cuando llegan documentos duplicados o cuando un día concentra más entradas de lo habitual.',
          'Roydisa no necesitaba otra aplicación aislada. Necesitaba conectar la entrada documental con el formato que ya formaba parte de su trabajo.',
        ],
      },
      {
        title: 'OSIX construyó el flujo alrededor de las carpetas que Roydisa ya utilizaba',
        body: [
          'El servicio vigila las carpetas de Google Drive o del servidor propio donde se depositan los documentos. Un modelo multimodal lee cada foto o PDF y devuelve un Excel por línea de producto.',
          'El flujo distingue los tipos de documento, absorbe duplicados sin generar una salida repetida y puede ejecutarse en Docker. Eso permite mantener la arquitectura cerca de los datos del cliente y evitar una base de datos propia o servidores nuevos cuando no hacen falta.',
          'La decisión técnica importante no fue añadir una capa de interfaz. Fue hacer que el resultado apareciera en el lugar y en el formato que el equipo ya podía utilizar.',
        ],
      },
      {
        title: 'La producción muestra volumen, velocidad y estabilidad',
        body: [
          'La ventana observada va del 12 de marzo al 8 de septiembre de 2026. En ese periodo se generaron 16.021 Excels: 8.672 albaranes, 5.024 facturas y 2.325 confirmaciones.',
          'La media fue de 5.214 ficheros al mes, pero el sistema también absorbió un pico de 1.026 ficheros en un solo día. Ese contraste importa: el caso no demuestra únicamente que el flujo funcione en un día normal, sino que puede absorber días de mayor carga sin cambiar manualmente de infraestructura.',
          'Los 13.394 folios de albaranes se distribuyeron entre cuatro delegaciones. La salida no fue una cifra abstracta de documentos leídos, sino una colección de Excels que el equipo podía llevar a su siguiente paso operativo.',
        ],
      },
    ],
    secondaryMetrics: [
      { value: '16.021', label: 'Excels generados', note: '8.672 albaranes · 5.024 facturas · 2.325 confirmaciones' },
      { value: '9.258', label: 'albaranes digitalizados', note: '13.394 páginas · 4 delegaciones' },
      { value: '7.421', label: 'duplicados absorbidos', note: 'sin salida repetida' },
      { value: '1.026', label: 'ficheros en un día', note: 'pico observado' },
    ],
    status: 'En producción desde el 12 de marzo de 2026.',
    limitSection: {
      title: 'El resultado medido tiene un alcance concreto',
      body: [
        'Este caso demuestra volumen procesado, tiempo de respuesta y error técnico observado. El 0,04 % corresponde a 7 errores en 17.500 documentos desde junio. No lo presentamos como una tasa general de precisión por campo, porque esa validación requeriría una revisión completa contra un conjunto de referencia.',
        'Tampoco presentamos como resultado observado el ahorro estimado de horas administrativas. Para publicar esa cifra habría que comparar el tiempo real de introducción manual por tipo de documento antes y después del sistema.',
        'Esa distinción es importante para cualquier proyecto de automatización documental. Procesar un documento no significa que todos sus campos estén validados de la misma forma, y reducir el tiempo de una etapa no demuestra por sí solo un ahorro financiero completo.',
      ],
    },
    facts: [
      { key: 'Cliente', value: 'Roydisa.' },
      { key: 'Sector', value: 'distribución y suministros industriales.' },
      { key: 'En producción desde', value: '12 de marzo de 2026.' },
      { key: 'Entrada', value: 'fotos y PDF depositados en carpetas del cliente.' },
      { key: 'Salida', value: 'Excel estructurado por línea de producto.' },
      { key: 'Despliegue', value: 'Google Drive o servidor propio con Docker.' },
      { key: 'Fuente de las cifras', value: 'agregados de producción, logs y metadatos de Drive, sin datos personales.' },
      { key: 'Fecha de corte', value: CUTOFF_DATE },
    ],
    faqs: [
      {
        question: '¿El OCR funciona con documentos de proveedores diferentes?',
        answer:
          'El flujo se midió sobre documentos reales de proveedores de Roydisa, con fotos y PDF de distintos tipos. La cifra publicada refleja el sistema en ese entorno concreto. Antes de extrapolar el resultado a otro negocio conviene probar una muestra propia.',
      },
      {
        question: '¿Hay que contratar servidores nuevos?',
        answer:
          'No necesariamente. El servicio puede vigilar carpetas de Google Drive o ejecutarse en un servidor propio con Docker. La arquitectura final depende de los requisitos del cliente y de dónde deban permanecer sus documentos.',
      },
      {
        question: '¿El sistema elimina toda revisión humana?',
        answer:
          'La cifra publicada mide el procesamiento automático y el error técnico observado. La necesidad de revisión depende del tipo de documento, de los campos críticos y del nivel de control que necesite cada proceso.',
      },
      {
        question: '¿Qué diferencia hay entre error técnico y precisión del OCR?',
        answer:
          'El error técnico indica fallos del flujo o de su ejecución en la ventana medida. No equivale a una validación completa de la exactitud de cada campo extraído. Por eso este caso no publica una precisión general por campo.',
      },
    ],
    ctaTitle: '¿Qué documentos procesa hoy tu equipo?',
    ctaBody: [
      'Si tu equipo convierte albaranes, facturas, confirmaciones u otros documentos en datos a mano, el primer paso no es elegir un modelo. Es medir el flujo: cuántos documentos entran, qué tipos se repiten, cuánto tarda cada etapa y qué errores obligan a volver atrás.',
      'OSIX puede ayudarte a localizar la parte que merece automatizarse primero y a decidir si necesitas OCR, reglas, integración con tu ERP o una combinación de las tres cosas.',
    ],
    sourceNote:
      'Las cifras proceden de una auditoría agregada de la base documental, los logs y los repositorios de producción de cada producto OSIX. Se revisaron los metadatos completos del flujo de OCR en modo solo lectura. No se utilizaron datos personales.',
  },

  standardCase({
    slug: 'roydisa-ofertas',
    services: ['desarrollo-a-medida', 'consultoria-transformacion'],
    category: 'Automatización comercial',
    title: 'Roydisa prepara borradores de oferta en 16 segundos',
    lead: '47.518 presupuestos históricos y 57.296 productos alimentan un asistente que generó borradores en una mediana de 16 segundos durante el piloto.',
    seoTitle: 'Roydisa prepara borradores de oferta en 16 segundos | OSIX Tech',
    seoDescription:
      '47.518 presupuestos históricos y 57.296 productos alimentan un asistente que generó borradores en una mediana de 16 segundos durante el piloto.',
    metrics: [
      { value: '47.518', label: 'presupuestos históricos indexados', note: 'métrica de producción' },
      { value: '16 s', label: 'mediana de generación', note: 'resultado medido' },
      { value: '93 %', label: 'referencias identificadas', note: 'resultado medido' },
    ],
    solution:
      'El asistente consulta Odoo, catálogo, precios de mercado y descuentos pactados. Cada línea conserva su fórmula de precio y la fuente del dato.',
    status: 'Piloto real desde el 18 de junio de 2026. 64 borradores reales, 17 enviados al cliente.',
    limit: 'El piloto todavía no mide ofertas ganadas o perdidas. Los 17 envíos no se presentan como ventas.',
  }),

  standardCase({
    slug: 'iciga-correo-crm',
    services: ['desarrollo-a-medida', 'consultoria-transformacion'],
    category: 'Automatización de correo y CRM',
    title: 'ICIGA convierte cuatro bandejas de entrada en un flujo comercial trazable',
    lead: 'El sistema procesa correo, filtra ruido y prepara propuestas mientras construye un CRM de transacciones a partir de los hilos de Gmail.',
    seoTitle: 'ICIGA convierte cuatro bandejas de entrada en un flujo comercial trazable | OSIX Tech',
    seoDescription:
      'El sistema procesa correo, filtra ruido y prepara propuestas mientras construye un CRM de transacciones a partir de los hilos de Gmail.',
    metrics: [
      { value: '1.463', label: 'correos procesados en 31 días', note: 'métrica de producción' },
      { value: '29 s', label: 'mediana correo a propuesta', note: 'resultado medido' },
      { value: '62,2 %', label: 'ruido filtrado', note: 'resultado medido' },
    ],
    solution:
      'Lee cuatro buzones, clasifica solicitudes, consulta catálogo y ERP, y deja una propuesta de respuesta. También registra clientes, proveedores y cambios del pipeline.',
    status: 'En producción desde el 9 de febrero de 2026. 4.893 transacciones y 8.387 correos trazados en siete meses.',
    limit: 'La métrica mide ingesta, clasificación y propuesta. No afirma que el sistema envíe respuestas automáticamente.',
  }),

  standardCase({
    slug: 'take-fidelizacion',
    services: ['desarrollo-a-medida'],
    category: 'Aplicaciones móviles y fidelización',
    title: 'TAKE registra visitas y recompensas desde una app móvil',
    lead: 'Una cafetería de Santiago usa una app con tarjeta en Wallet, sellos QR, recompensas y juegos para medir la repetición de sus clientes.',
    seoTitle: 'TAKE registra visitas y recompensas desde una app móvil | OSIX Tech',
    seoDescription:
      'Una cafetería de Santiago usa una app con tarjeta en Wallet, sellos QR, recompensas y juegos para medir la repetición de sus clientes.',
    metrics: [
      { value: '37.627', label: 'visitas selladas con QR', note: 'métrica de producción' },
      { value: '2.921', label: 'usuarios registrados', note: 'resultado medido' },
      { value: '90,3 %', label: 'repetición entre clientes sellados', note: 'resultado medido' },
    ],
    solution:
      'TAKE combina tarjeta digital, recompensa al llegar a 15 sellos, carta, eventos y minijuegos con ranking. La tarjeta puede guardarse en Apple Wallet y Google Wallet.',
    status: 'En producción desde el 28 de agosto de 2025. 2.119 recompensas entregadas.',
    limit: 'La repetición describe a los usuarios que sellaron. No se presenta como atribución causal sobre las ventas.',
  }),

  standardCase({
    slug: 'avalagro-evaluacion',
    services: ['desarrollo-a-medida'],
    category: 'Aplicación móvil y evaluación de equipos',
    title: 'Avalagro completa una ronda de evaluación en 9,9 minutos',
    lead: 'Una cooperativa sustituyó la hoja de cálculo por una app bilingüe para evaluar semanalmente a sus equipos y generar históricos e informes.',
    seoTitle: 'Avalagro completa una ronda de evaluación en 9,9 minutos | OSIX Tech',
    seoDescription:
      'Una cooperativa sustituyó la hoja de cálculo por una app bilingüe para evaluar semanalmente a sus equipos y generar históricos e informes.',
    metrics: [
      { value: '9,9 min', label: 'mediana por ronda completa', note: 'métrica de producción' },
      { value: '1.009', label: 'puntuaciones registradas', note: 'resultado medido' },
      { value: '8,16', label: 'nota media final observada', note: 'resultado medido' },
    ],
    solution:
      'El supervisor evalúa desde el móvil y la administración consulta históricos y obtiene informes PDF. El cliente pasó de una cadencia trimestral a una más frecuente.',
    status: 'En producción desde el 16 de abril de 2026. 18 empleados, 31 criterios y 146 evaluaciones registradas.',
    limit: 'La evolución de la nota media se observa en los datos, pero no se presenta como causada únicamente por la app.',
  }),

  standardCase({
    slug: 'nessie-documentos',
    services: ['desarrollo-a-medida', 'consultoria-transformacion'],
    category: 'Inteligencia documental',
    title: 'Nessie convierte un Google Drive de investigación en un asistente consultable',
    lead: 'Nessie sincroniza unidades compartidas, describe documentos e imágenes con IA y responde preguntas citando la documentación de origen.',
    seoTitle: 'Nessie convierte un Google Drive de investigación en un asistente consultable | OSIX Tech',
    seoDescription:
      'Nessie sincroniza unidades compartidas, describe documentos e imágenes con IA y responde preguntas citando la documentación de origen.',
    metrics: [
      { value: '732', label: 'documentos indexados', note: 'métrica de producción' },
      { value: '1.447', label: 'imágenes descritas', note: 'resultado medido' },
      { value: '100 %', label: 'usuarios provisionados que consultaron', note: 'resultado medido' },
    ],
    solution:
      'El asistente vectoriza documentos, mantiene sincronización continua y genera PDF, DOCX y PPTX a partir del corpus.',
    status: 'Piloto B2B desde marzo de 2026 con un instituto de investigación educativa. 153 consultas y 41 entregables generados.',
    limit:
      'El piloto demuestra indexación y adopción inicial. No se publica una tasa general de precisión porque el benchmark interno debe repetirse.',
  }),

  standardCase({
    slug: 'xeracion21-moodle',
    services: ['desarrollo-a-medida'],
    category: 'Educación e integración con Moodle',
    title: 'Xeración21 integra IA dentro del Moodle de una academia',
    lead: 'La plataforma trabaja sobre temarios y rúbricas oficiales, genera materiales y devuelve calificaciones al entorno que ya usa la academia.',
    seoTitle: 'Xeración21 integra IA dentro del Moodle de una academia | OSIX Tech',
    seoDescription:
      'La plataforma trabaja sobre temarios y rúbricas oficiales, genera materiales y devuelve calificaciones al entorno que ya usa la academia.',
    metrics: [
      { value: '533', label: 'tareas de IA ejecutadas', note: 'métrica de producción' },
      { value: '97,2 %', label: 'éxito en tareas medidas', note: 'resultado medido' },
      { value: '4.046', label: 'tests automatizados en CI', note: 'resultado medido' },
    ],
    solution:
      'Xeración21 combina planes, informes, correcciones, tests y análisis de exposiciones orales. Las calificaciones pueden volver al libro de Moodle mediante LTI AGS.',
    status: 'Piloto y QA integrado en Moodle desde el 23 de junio de 2026. 235 documentos de temario indexados.',
    limit: 'Sigue siendo un piloto con base de alumnos pequeña. No se publica una precisión pedagógica ni un ahorro validado.',
  }),

  standardCase({
    slug: 'alia-galego',
    services: ['desarrollo-a-medida'],
    category: 'IA lingüística y soberanía del dato',
    title: 'ALIA analiza galego falado con opción de ejecución local',
    lead: 'ALIA transcribe audio, detecta fenómenos lingüísticos y genera feedback en galego sin registro y con borrado automático de los datos.',
    seoTitle: 'ALIA analiza galego falado con opción de ejecución local | OSIX Tech',
    seoDescription:
      'ALIA transcribe audio, detecta fenómenos lingüísticos y genera feedback en galego sin registro y con borrado automático de los datos.',
    metrics: [
      { value: '36 s', label: 'análisis completo en nube', note: 'métrica de producción' },
      { value: '19', label: 'motores conmutables', note: 'resultado medido' },
      { value: '495', label: 'tests automatizados', note: 'resultado medido' },
    ],
    solution:
      'El sistema combina transcripción, puntuaciones, métricas de voz y feedback. Incluye recursos propios para castelanismos, lusismos y muletillas, además de un pipeline local con modelos abiertos.',
    status: 'Demo pública en producción desde el 26 de mayo de 2026, en colaboración con Proxecto Nós y la USC.',
    limit: 'El uso público observado todavía es pequeño. No se publican usuarios ni objetivos técnicos como resultados conseguidos.',
  }),
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find(c => c.slug === slug);
}

export function getCaseStudiesForService(serviceId: string): CaseStudy[] {
  const matching = caseStudies.filter(c => c.services.includes(serviceId));
  // Every service page shows something: top up with the rest, newest measurements first.
  const rest = caseStudies.filter(c => !c.services.includes(serviceId));
  return [...matching, ...rest].slice(0, 3);
}

export function getCaseStudySlugs(): string[] {
  return caseStudies.map(c => c.slug);
}

/** Hub/related cards: headline metric plus the one-line description. */
export function getCaseStudyCards() {
  return caseStudies.map(c => ({
    slug: c.slug,
    href: `/es/casos/${c.slug}/`,
    category: c.category,
    title: c.title,
    lead: c.lead,
    metric: c.metrics[0],
  }));
}
