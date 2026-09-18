// Case studies.
//
// Every figure here comes from the commercial metrics audit (cut-off
// 2026-09-08): aggregate reads of each product's production database, logs and
// repositories, no personal data. That audit grades each figure A (direct
// count), B (derived from a stated assumption) or C (small sample or short
// window). Only A and B figures are published as results; the few C figures
// appear with the page saying what they rest on.
//
// Two rules when editing:
//   1. The audit's "evitar" list per product is binding — acceptance rates,
//      active users, hours saved, response times, precision. Those are not
//      measured, and each case's limitSection says so out loud instead of
//      staying quiet about them.
//   2. The audit's savings estimates (its section 3) are hypotheses for a sales
//      conversation, not measured results. They do not belong on a public page,
//      which is why no case here publishes hours or euros saved.
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
   * a claim in the copy — review it when the service list changes.
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
  /** The narrative, rendered as long-form prose. */
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

const CUTOFF_DATE = '8 de septiembre de 2026.';
const SOURCE_LINE = 'agregados de producción, logs y repositorios, sin datos personales.';

const CTA_TITLE = '¿Tienes un proceso parecido?';
const CTA_BODY = [
  'Podemos revisar el flujo actual, separar lo que conviene automatizar de lo que debe seguir bajo control humano y proponer una primera prueba medible.',
];

const DEV = 'desarrollo-a-medida';
const CONSULTING = 'consultoria-transformacion';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'roydisa-ocr-documentos-proveedores',
    category: 'Automatización documental y OCR',
    services: [DEV, CONSULTING],
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
          'El servicio vigila las carpetas de Google Drive, o del servidor propio, donde Odoo deja los documentos de proveedores. Un modelo multimodal lee cada foto o PDF y devuelve un Excel por línea de producto.',
          'El flujo distingue los tipos de documento, absorbe duplicados sin generar una salida repetida y puede ejecutarse en Docker. Eso permite mantener la arquitectura cerca de los datos del cliente y evitar una base de datos propia o servidores nuevos cuando no hacen falta.',
          'No hay base de datos: la serie histórica de este caso se reconstruyó a partir del listado completo del Drive, 47.433 elementos. La decisión técnica importante no fue añadir una capa de interfaz, sino hacer que el resultado apareciera en el lugar y en el formato que el equipo ya podía utilizar.',
        ],
      },
      {
        title: 'La producción muestra volumen, velocidad y estabilidad',
        body: [
          'La ventana observada va del 12 de marzo al 8 de septiembre de 2026. En ese periodo se generaron 16.021 Excels: 8.672 albaranes, 5.024 facturas y 2.325 confirmaciones, a partir de unos 13,5 GB de fotos y PDF.',
          'La media fue de 5.214 ficheros al mes, pero el sistema también absorbió un pico de 1.026 ficheros en un solo día. Ese contraste importa: el caso no demuestra únicamente que el flujo funcione en un día normal, sino que puede absorber días de mayor carga sin cambiar manualmente de infraestructura. De marzo a junio el volumen creció un 49 %.',
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

  {
    slug: 'roydisa-ofertas',
    category: 'Automatización comercial',
    services: [DEV, CONSULTING],
    title: 'Roydisa prepara borradores de oferta en 16 segundos',
    lead: '47.518 presupuestos históricos y 57.296 productos alimentan un asistente que generó borradores en una mediana de 16 segundos durante el piloto.',
    seoTitle: 'Roydisa prepara borradores de oferta en 16 segundos | OSIX Tech',
    seoDescription:
      '47.518 presupuestos históricos y 57.296 productos alimentan un asistente que generó borradores en una mediana de 16 segundos durante el piloto.',
    metrics: [
      { value: '47.518', label: 'presupuestos históricos indexados', note: '103.495 líneas · 2017-2026' },
      { value: '16 s', label: 'mediana de generación', note: 'percentil 95 en 27,4 s' },
      { value: '93 %', label: 'referencias identificadas solas', note: '152 de 163 líneas' },
    ],
    sections: [
      {
        title: 'El histórico ya existía; lo que faltaba era consultarlo al ritmo de una oferta',
        body: [
          'Roydisa acumula diez años de actividad comercial en Odoo: 47.518 presupuestos y 103.495 líneas emitidas entre 2017 y 2026, por un valor presupuestado de 29,65 millones de euros.',
          'Alrededor de ese histórico hay un catálogo de 57.296 productos de 257 proveedores y 20 marcas, 80.303 precios de mercado capturados de seis portales y 597.933 descuentos por cliente y familia importados del propio ERP.',
          'Toda esa información estaba disponible. Lo que no existía era una forma de cruzarla en el tiempo que dura una conversación con un cliente: localizar la referencia, recuperar qué se le vendió antes, comprobar el coste y aplicar el descuento pactado.',
        ],
      },
      {
        title: 'Un borrador con el precio trazado hasta su origen',
        body: [
          'El comercial pega el correo del cliente, o una foto de su petición, y el asistente devuelve un borrador de oferta. Consulta el histórico de presupuestos en lenguaje natural, identifica las referencias, recupera el coste y compara precios entre seis portales de proveedores.',
          'Cada línea conserva su fórmula de precio, coste por margen o tarifa por descuento pactado, junto con la fuente del dato y las últimas ventas reales a ese cliente. El borrador se exporta a Excel.',
          'Esa trazabilidad era el requisito de diseño, no un extra. Un asistente que propone un precio sin explicar de dónde sale obliga a rehacer la comprobación a mano, que es exactamente el trabajo que se quería quitar.',
        ],
      },
      {
        title: 'Lo que muestra el piloto',
        body: [
          'El piloto arrancó el 18 de junio de 2026 con cinco comerciales. Hasta la fecha de corte se generaron 64 borradores reales para 28 clientes, por un total de 58.099 € ofertados.',
          'La generación tiene una mediana de 16,0 segundos y un percentil 95 de 27,4. El sistema identifica automáticamente el 93 % de las líneas. Del borrador al envío al cliente pasan 8 minutos de mediana.',
          '17 de esos 64 borradores se enviaron al cliente, y casi un tercio de ellos sin editar una sola línea. El coste de IA por borrador ronda los 0,016 dólares: toda la vida del sistema, bancos de pruebas incluidos, ha consumido menos de 20 dólares.',
        ],
      },
    ],
    secondaryMetrics: [
      { value: '57.296', label: 'productos en catálogo', note: '257 proveedores · 20 marcas' },
      { value: '80.303', label: 'precios de mercado capturados', note: '6 portales de proveedores' },
      { value: '64', label: 'borradores reales en el piloto', note: '28 clientes · 58.099 € ofertados' },
      { value: '0,016 $', label: 'de IA por borrador', note: 'menos de 20 $ en toda la vida del sistema' },
    ],
    status: 'Piloto real desde el 18 de junio de 2026. 64 borradores reales, 17 enviados al cliente.',
    limitSection: {
      title: 'El límite que mantenemos visible',
      body: [
        'El piloto todavía no mide ofertas ganadas o perdidas. Los 17 envíos no se presentan como ventas, y no publicamos una tasa de aceptación porque ningún borrador tiene marcado su resultado.',
        'Tampoco publicamos adopción ni crecimiento mensual. El piloto corre con cinco comerciales sobre un equipo mayor, y agosto es mes de vacaciones: cualquier curva mensual hablaría del calendario antes que del producto.',
        'Lo que sí está medido es el tiempo de generación, la proporción de referencias que el sistema resuelve solo y el coste por borrador.',
      ],
    },
    facts: [
      { key: 'Cliente', value: 'Roydisa.' },
      { key: 'Sector', value: 'distribución y suministros industriales.' },
      { key: 'Estado', value: 'piloto real con cinco comerciales desde el 18 de junio de 2026.' },
      { key: 'Entrada', value: 'correo o foto con la petición del cliente.' },
      { key: 'Salida', value: 'borrador de oferta con precio trazable, exportable a Excel.' },
      { key: 'Integraciones', value: 'Odoo y seis portales de precios de proveedores.' },
      { key: 'Fuente de las cifras', value: SOURCE_LINE },
      { key: 'Fecha de corte', value: CUTOFF_DATE },
    ],
    faqs: [
      {
        question: '¿El asistente inventa precios?',
        answer:
          'No. Cada línea del borrador conserva su fórmula de precio, la fuente del dato y las últimas ventas reales a ese cliente, de modo que el comercial puede comprobar de dónde sale cada cifra antes de enviar nada.',
      },
      {
        question: '¿Cuántas de esas ofertas se ganaron?',
        answer:
          'No lo sabemos, y por eso no lo publicamos. Durante el piloto no se marcó el resultado de cada oferta. Medirlo requiere que los comerciales indiquen ganada o perdida, que es el siguiente paso acordado.',
      },
      {
        question: '¿Hace falta un histórico tan grande para que funcione?',
        answer:
          'Las cifras de este caso corresponden a diez años de presupuestos de Roydisa. Con un histórico menor el sistema sigue funcionando, pero la proporción de referencias que resuelve solo depende de cuántas ventas anteriores haya sobre las que apoyarse.',
      },
    ],
    ctaTitle: CTA_TITLE,
    ctaBody: CTA_BODY,
  },

  {
    slug: 'iciga-correo-crm',
    category: 'Automatización de correo y CRM',
    services: [DEV, CONSULTING],
    title: 'ICIGA convierte cuatro bandejas de entrada en un flujo comercial trazable',
    lead: 'El sistema procesa correo, filtra ruido y prepara propuestas mientras construye un CRM de transacciones a partir de los hilos de Gmail.',
    seoTitle: 'ICIGA convierte cuatro bandejas de entrada en un flujo comercial trazable | OSIX Tech',
    seoDescription:
      'El sistema procesa correo, filtra ruido y prepara propuestas mientras construye un CRM de transacciones a partir de los hilos de Gmail.',
    metrics: [
      { value: '1.463', label: 'correos procesados en 31 días', note: '47 al día · pico de 124' },
      { value: '29 s', label: 'de correo a propuesta lista', note: 'mediana · percentil 90 en 58 s' },
      { value: '62,2 %', label: 'del correo entrante era ruido', note: 'apartado automáticamente' },
    ],
    sections: [
      {
        title: 'La actividad comercial entraba entera por el correo',
        body: [
          'ICIGA distribuye material químico y de laboratorio. Sus pedidos, presupuestos, facturas, incidencias y pagos llegan por cuatro buzones de Gmail, mezclados con todo lo demás que entra en una bandeja de empresa.',
          'La mayor parte de ese volumen no es trabajo: el 62,2 % del correo entrante es spam, correo no comercial u ofertas de proveedores. Lo que queda son solicitudes reales que hay que clasificar, cruzar con el catálogo y el ERP, contestar y dejar registradas.',
        ],
      },
      {
        title: 'Un copiloto de bandeja que además construye el CRM',
        body: [
          'El sistema lee los cuatro buzones en tiempo real, aparta el ruido y clasifica cada correo por tipo de solicitud, tipo de cliente y urgencia. Después consulta el catálogo y el ERP y deja preparada una propuesta de respuesta. Los adjuntos entran en el mismo flujo: 1.478 al mes entre PDF, imágenes y hojas de cálculo, con un 0,4 % de fallos de lectura.',
          'En paralelo construye un CRM de transacciones anclado a los hilos de Gmail. Da de alta clientes, proveedores y contactos, crea la operación y mueve su estado en el pipeline comercial a medida que el hilo avanza.',
          'La ingesta, la clasificación y el registro funcionan sin intervención humana. Nadie abre un correo para decidir dónde va.',
        ],
      },
      {
        title: 'Siete meses en producción sin un reinicio',
        body: [
          'Desde el 9 de febrero de 2026 el sistema ha trazado 8.387 correos y ha creado 4.893 transacciones, 3.176 de venta y 1.717 de compra, con 1.987 cambios de estado del pipeline, todos automáticos. Por el camino ha dado de alta 306 clientes, 212 proveedores y 875 contactos.',
          'En los últimos 31 días procesó 1.463 correos, 47 al día con un pico de 124. El 99,5 % de los correos relevantes llegó con una propuesta preparada: 377 de 379.',
          'De correo recibido a propuesta lista pasan 29 segundos de mediana, y el 99,3 % está listo en menos de cinco minutos. El 28,9 % del correo entra fuera de horario y se procesa igual. El despliegue lleva 212 días sin reiniciarse y treinta días sin un solo error de aplicación.',
        ],
      },
    ],
    secondaryMetrics: [
      { value: '4.893', label: 'transacciones creadas solas', note: '3.176 ventas · 1.717 compras · 7 meses' },
      { value: '8.387', label: 'correos trazados en el CRM', note: 'unos 1.251 al mes' },
      { value: '1.987', label: 'cambios de estado del pipeline', note: '100 % automáticos' },
      { value: '212', label: 'días sin reiniciar', note: 'mismo despliegue desde febrero' },
    ],
    status: 'En producción desde el 9 de febrero de 2026. 4.893 transacciones y 8.387 correos trazados en siete meses.',
    limitSection: {
      title: 'El límite que mantenemos visible',
      body: [
        'La métrica mide ingesta, clasificación, propuesta y registro. No afirma que el sistema envíe respuestas: el envío asistido está construido, pero el equipo no lo usa, así que no publicamos tiempo de respuesta al cliente ni respuestas enviadas.',
        'Tampoco publicamos horas ahorradas. Sabemos cuántos correos se clasifican y se registran solos; no cuántos minutos costaba hacerlo a mano en esta empresa concreta.',
        'La precisión de la clasificación tampoco tiene todavía una cifra pública: para darla habría que revisar a mano una muestra y compararla.',
      ],
    },
    facts: [
      { key: 'Cliente', value: 'ICIGA, distribución de material químico y de laboratorio.' },
      { key: 'En producción desde', value: '9 de febrero de 2026.' },
      { key: 'Entrada', value: 'cuatro buzones de Gmail, con sus adjuntos.' },
      { key: 'Salida', value: 'propuesta de respuesta y CRM de transacciones anclado al hilo.' },
      { key: 'Intervención humana', value: 'ninguna en ingesta, clasificación y registro.' },
      { key: 'Fuente de las cifras', value: SOURCE_LINE },
      { key: 'Fecha de corte', value: CUTOFF_DATE },
    ],
    faqs: [
      {
        question: '¿El sistema contesta a los clientes por su cuenta?',
        answer:
          'No. Deja preparada una propuesta de respuesta y es una persona quien decide qué se envía. De hecho, en esta implantación el equipo no utiliza el envío asistido, y por eso no publicamos ninguna cifra de respuestas enviadas.',
      },
      {
        question: '¿Qué pasa con el correo que llega de noche o en fin de semana?',
        answer:
          'Se procesa igual. El 28,9 % del correo entra fuera de horario y queda clasificado y registrado antes de que nadie abra la bandeja.',
      },
      {
        question: '¿Hay que cambiar de correo o de CRM?',
        answer:
          'No. El sistema trabaja sobre los buzones de Gmail que la empresa ya usa y construye el registro de transacciones a partir de esos hilos, además de consultar el catálogo y el ERP existentes.',
      },
    ],
    ctaTitle: CTA_TITLE,
    ctaBody: CTA_BODY,
  },

  {
    slug: 'take-fidelizacion',
    category: 'Aplicaciones móviles y fidelización',
    services: [DEV],
    title: 'TAKE registra visitas y recompensas desde una app móvil',
    lead: 'Una cafetería de Santiago usa una app con tarjeta en Wallet, sellos QR, recompensas y juegos para medir la repetición de sus clientes.',
    seoTitle: 'TAKE registra visitas y recompensas desde una app móvil | OSIX Tech',
    seoDescription:
      'Una cafetería de Santiago usa una app con tarjeta en Wallet, sellos QR, recompensas y juegos para medir la repetición de sus clientes.',
    metrics: [
      { value: '37.627', label: 'visitas selladas con QR', note: '42.369 sellos en un año' },
      { value: '2.921', label: 'usuarios registrados', note: '960 en el primer mes' },
      { value: '90,3 %', label: 'repetición entre clientes sellados', note: '1.819 clientes distintos' },
    ],
    sections: [
      {
        title: 'Una cafetería, una app y un año de datos',
        body: [
          'TAKE es una cafetería de Santiago de Compostela con un público mayoritariamente universitario. La app salió a finales de agosto de 2025 con tarjeta de sellos en Apple y Google Wallet, recompensa automática al llegar a quince sellos, carta, eventos y dos minijuegos con ranking.',
          'Del primer commit del repositorio a los primeros usuarios reales pasaron unas cinco semanas.',
        ],
      },
      {
        title: 'La tarjeta vive en el Wallet, no dentro de la app',
        body: [
          'El cliente guarda su tarjeta en Apple Wallet o Google Wallet: lo han hecho 2.275 usuarios, el 78 % del total. Sellar no obliga a abrir la aplicación, que es donde se cae la mayoría de los programas de fidelización.',
          'Al llegar a quince sellos la recompensa se entrega sola. Se han entregado 2.119 a 812 clientes distintos.',
          'Los minijuegos los usa el 65 % de los registrados: 1.888 jugadores, 4.301 puntuaciones y 41 rankings, con hasta 706 participantes en un solo periodo. Además, 1.594 usuarios tienen las notificaciones activas, algo más de la mitad.',
        ],
      },
      {
        title: 'Un año en producción',
        body: [
          'En el primer mes se registraron 960 clientes y a lo largo del año 2.921. De ellos, 1.819 han sellado alguna vez, el 62 %, y el 90,3 % de quienes sellan vuelve. El cliente medio acumula 20,7 visitas, y 681 clientes superan las quince.',
          'En total son 37.627 visitas selladas con QR y 42.369 sellos. Los días de apertura registran 145 sellados de media, con un máximo de 334.',
          'La retención a 30 días es del 40,3 %, y sube a alrededor del 47 % en las cohortes de otoño; el 70 % de los usuarios vuelve después de la primera semana. La API responde en 127 milisegundos de mediana y acumula un único error 5xx en 2.444 peticiones.',
        ],
      },
    ],
    secondaryMetrics: [
      { value: '2.119', label: 'recompensas entregadas', note: 'a 812 clientes distintos' },
      { value: '2.275', label: 'tarjetas en Apple o Google Wallet', note: '78 % de los usuarios' },
      { value: '20,7', label: 'visitas por cliente sellado', note: '681 clientes con 15 o más' },
      { value: '1.888', label: 'jugadores en los minijuegos', note: '65 % de los registrados' },
    ],
    status: 'En producción desde el 28 de agosto de 2025. 2.119 recompensas entregadas.',
    limitSection: {
      title: 'El límite que mantenemos visible',
      body: [
        'La repetición describe a los clientes que sellaron alguna vez. No la presentamos como atribución causal sobre las ventas: demostrar eso exige cruzar el TPV de la cafetería antes y después, y ese dato no está en el sistema.',
        'El negocio es estacional y sigue el calendario del campus. Por eso publicamos la ventana completa de un año y no los últimos treinta días, que caen en verano y dirían lo contrario de lo que ocurre en octubre.',
      ],
    },
    facts: [
      { key: 'Cliente', value: 'cafetería TAKE, Santiago de Compostela.' },
      { key: 'En producción desde', value: '28 de agosto de 2025.' },
      { key: 'Plataformas', value: 'iOS y Android, con tarjeta en Apple Wallet y Google Wallet.' },
      { key: 'Funciones', value: 'sellos por QR, recompensa automática a los 15 sellos, carta, eventos y minijuegos con ranking.' },
      { key: 'Time to market', value: 'unas 5 semanas del repositorio a los primeros usuarios.' },
      { key: 'Fuente de las cifras', value: SOURCE_LINE },
      { key: 'Fecha de corte', value: CUTOFF_DATE },
    ],
    faqs: [
      {
        question: '¿El cliente tiene que abrir la app para sellar?',
        answer:
          'No hace falta. El 78 % de los usuarios lleva la tarjeta en Apple Wallet o Google Wallet, y el sellado se hace por QR sobre esa tarjeta.',
      },
      {
        question: '¿Estas cifras demuestran que la cafetería vende más?',
        answer:
          'Demuestran repetición de visita, no incremento de ventas. Para afirmar lo segundo habría que comparar los datos del TPV antes y después del programa, y ese cruce no está hecho.',
      },
      {
        question: '¿Sirve para un negocio que no sea de hostelería?',
        answer:
          'El mecanismo, tarjeta en Wallet, sellado por QR y recompensa automática, no es exclusivo de la hostelería. Pero las cifras de este caso corresponden a una cafetería con público universitario y a su estacionalidad concreta.',
      },
    ],
    ctaTitle: CTA_TITLE,
    ctaBody: CTA_BODY,
  },

  {
    slug: 'avalagro-evaluacion',
    category: 'Aplicación móvil y evaluación de equipos',
    services: [DEV],
    title: 'Avalagro completa una ronda de evaluación en 9,9 minutos',
    lead: 'Una cooperativa sustituyó la hoja de cálculo por una app bilingüe para evaluar semanalmente a sus equipos y generar históricos e informes.',
    seoTitle: 'Avalagro completa una ronda de evaluación en 9,9 minutos | OSIX Tech',
    seoDescription:
      'Una cooperativa sustituyó la hoja de cálculo por una app bilingüe para evaluar semanalmente a sus equipos y generar históricos e informes.',
    metrics: [
      { value: '9,9 min', label: 'por ronda completa', note: 'mediana · 18 empleados, unas 110 puntuaciones' },
      { value: '1.009', label: 'puntuaciones registradas', note: '146 evaluaciones desde abril' },
      { value: '8,16', label: 'nota media del equipo en septiembre', note: 'desde 5,75 en mayo' },
    ],
    sections: [
      {
        title: 'La evaluación existía, pero vivía en una hoja de cálculo',
        body: [
          'Cooperativa Grille, del sector lácteo, evaluaba a su equipo con una hoja de cálculo y una cadencia trimestral. El histórico y los informes salían del mismo sitio y de la misma forma: a mano.',
          'Lo que se gestiona son 18 empleados repartidos en cuatro grupos, con un supervisor y dos administradores, sobre 31 criterios ponderados.',
        ],
      },
      {
        title: 'Evaluar desde el móvil y consolidar sin pasos intermedios',
        body: [
          'La app, disponible en gallego y castellano, permite al supervisor puntuar a todo el equipo desde el móvil sobre esos 31 criterios. La administración consulta los históricos y obtiene informes en PDF sin montar nada.',
          '17 de los 18 empleados ya tienen histórico acumulado, de forma que cada ronda se lee contra las anteriores en lugar de quedarse como una foto suelta.',
          'De la primera línea de código a la app publicada en las tiendas pasaron unas ocho semanas.',
        ],
      },
      {
        title: 'Cinco meses de uso, y un cambio de cadencia',
        body: [
          'Desde el 16 de abril de 2026 se han registrado 146 evaluaciones y 1.009 puntuaciones, repartidas en 8 rondas completas y 5 parciales.',
          'Una ronda completa de 18 empleados, unas 110 puntuaciones, se cierra en 9,9 minutos de mediana desde el móvil.',
          'El cambio más visible no es el tiempo por ronda, sino la frecuencia: el cliente pasó de evaluar cada trimestre a hacerlo cada quince días, 10 rondas en 21 semanas. En ese periodo la nota media del equipo pasó de 5,75 en mayo a 8,16 en septiembre. El servicio acumula 145 días sin redespliegue, 1.086 peticiones en treinta días y ningún error 5xx.',
        ],
      },
    ],
    secondaryMetrics: [
      { value: '31', label: 'criterios ponderados', note: '18 empleados en 4 grupos' },
      { value: '13', label: 'rondas registradas', note: '8 completas y 5 parciales' },
      { value: '145', label: 'días sin redesplegar', note: '0 errores 5xx en 1.086 peticiones' },
      { value: '8', label: 'semanas hasta las tiendas', note: 'del primer commit a la app publicada' },
    ],
    status: 'En producción desde el 16 de abril de 2026. 18 empleados, 31 criterios y 146 evaluaciones registradas.',
    limitSection: {
      title: 'El límite que mantenemos visible',
      body: [
        'La subida de la nota media está en los datos, pero no la presentamos como causada por la app. Evaluar más a menudo, el propio efecto de medir y los cambios en el equipo entran todos en esa misma cifra.',
        'Tampoco publicamos usuarios activos: el sistema lo operan cuatro cuentas, y cualquier métrica de uso diario sobre esa base diría poco.',
        'Conviene dejar claro qué es este producto: evalúa desempeño. No gestiona turnos, partes de trabajo ni fichajes.',
      ],
    },
    facts: [
      { key: 'Cliente', value: 'Cooperativa Grille, sector lácteo.' },
      { key: 'En producción desde', value: '16 de abril de 2026.' },
      { key: 'Plataformas', value: 'Android e iOS, en gallego y castellano.' },
      { key: 'Alcance', value: '18 empleados, 4 grupos, 31 criterios ponderados.' },
      { key: 'Salida', value: 'histórico por empleado e informes en PDF.' },
      { key: 'Fuente de las cifras', value: SOURCE_LINE },
      { key: 'Fecha de corte', value: CUTOFF_DATE },
    ],
    faqs: [
      {
        question: '¿La app gestiona turnos o fichajes?',
        answer:
          'No. Avalagro evalúa el desempeño del equipo con criterios ponderados y guarda el histórico. No cubre turnos, partes de trabajo ni control horario.',
      },
      {
        question: '¿La mejora de la nota se debe a la aplicación?',
        answer:
          'No lo afirmamos. La evolución de 5,75 a 8,16 está en los datos, pero coincide con un cambio de cadencia y con el efecto de medir con más frecuencia, así que la presentamos como evolución observada y no como causa demostrada.',
      },
      {
        question: '¿Qué gana una cooperativa evaluando cada quince días?',
        answer:
          'Sobre todo frecuencia. Con el método anterior la evaluación era trimestral; ahora una ronda completa cuesta menos de diez minutos, y el cliente ha pasado a evaluar cada quince días.',
      },
    ],
    ctaTitle: CTA_TITLE,
    ctaBody: CTA_BODY,
  },

  {
    slug: 'nessie-documentos',
    category: 'Inteligencia documental',
    services: [DEV, CONSULTING],
    title: 'Nessie convierte un Google Drive de investigación en un asistente consultable',
    lead: 'Nessie sincroniza unidades compartidas, describe documentos e imágenes con IA y responde preguntas citando la documentación de origen.',
    seoTitle: 'Nessie convierte un Google Drive de investigación en un asistente consultable | OSIX Tech',
    seoDescription:
      'Nessie sincroniza unidades compartidas, describe documentos e imágenes con IA y responde preguntas citando la documentación de origen.',
    metrics: [
      { value: '732', label: 'documentos indexados', note: '100 % con descripción generada' },
      { value: '1.447', label: 'imágenes descritas', note: '99,5 % con descripción' },
      { value: '100 %', label: 'de los usuarios provisionados consultó', note: '12 de 12' },
    ],
    sections: [
      {
        title: 'Un corpus de investigación repartido en unidades compartidas',
        body: [
          'Un instituto de investigación educativa guarda su documentación en unidades compartidas de Google Drive: 215 carpetas en dos unidades, con un volumen equivalente a unas 8.100 páginas y 4,1 millones de palabras.',
          'El material está ahí y es accesible. Pero a ese tamaño la pregunta deja de ser dónde está el documento y pasa a ser qué dice el conjunto.',
        ],
      },
      {
        title: 'Indexar, describir y responder citando el origen',
        body: [
          'Nessie sincroniza las unidades compartidas de forma continua, describe cada documento y cada imagen con IA y responde preguntas en lenguaje natural citando la documentación de la que sale cada respuesta.',
          'El corpus está vectorizado en 20.409 fragmentos, unos 28 por documento. Las 1.447 imágenes extraídas tienen descripción en el 99,5 % de los casos, de modo que también son consultables.',
          'Además de responder, genera entregables a partir del propio corpus: 41 documentos creados hasta la fecha, 35 en PDF, 4 en Word y 2 en PowerPoint.',
        ],
      },
      {
        title: 'Lo que muestra el piloto',
        body: [
          'Los 732 documentos indexados están descritos por IA al 100 %. Los 12 usuarios provisionados han consultado el sistema y el 92 % ha vuelto en días distintos, con una media de 12,8 consultas por usuario.',
          'De las 153 consultas respondidas, ninguna quedó truncada, y el 54 % fueron conversaciones de varios turnos: gente afinando una pregunta en lugar de probar una vez y abandonar.',
          'El coste de IA por consulta ronda los 0,09 dólares, y los logs disponibles no registran errores 5xx.',
        ],
      },
    ],
    secondaryMetrics: [
      { value: '20.409', label: 'fragmentos vectorizados', note: 'unos 28 por documento' },
      { value: '8.100', label: 'páginas equivalentes', note: 'unos 4,1 millones de palabras' },
      { value: '41', label: 'entregables generados', note: '35 PDF · 4 DOCX · 2 PPTX' },
      { value: '215', label: 'carpetas sincronizadas', note: '2 unidades compartidas, en continuo' },
    ],
    status: 'Piloto B2B desde marzo de 2026 con un instituto de investigación educativa. 153 consultas y 41 entregables generados.',
    limitSection: {
      title: 'El límite que mantenemos visible',
      body: [
        'Es un piloto con un cliente externo. Lo que publicamos es capacidad de indexación y adopción entre quienes tienen acceso, no volumen: el número de clientes, los usuarios activos al mes y las consultas mensuales son cifras pequeñas y no las presentamos como resultado.',
        'Tampoco publicamos una tasa general de precisión. Hay un benchmark interno, pero debe reejecutarse y contrastarse con un experto antes de convertirse en una cifra pública.',
      ],
    },
    facts: [
      { key: 'Cliente', value: 'instituto de investigación educativa.' },
      { key: 'Estado', value: 'piloto B2B desde marzo de 2026.' },
      { key: 'Entrada', value: 'unidades compartidas de Google Drive, en sincronización continua.' },
      { key: 'Salida', value: 'respuestas citando el documento de origen y entregables en PDF, DOCX y PPTX.' },
      { key: 'Corpus', value: '732 documentos y 1.447 imágenes, 20.409 fragmentos vectorizados.' },
      { key: 'Fuente de las cifras', value: SOURCE_LINE },
      { key: 'Fecha de corte', value: CUTOFF_DATE },
    ],
    faqs: [
      {
        question: '¿De dónde salen las respuestas?',
        answer:
          'De la documentación del propio cliente. Cada respuesta cita los documentos de origen, de forma que quien pregunta puede ir al material y comprobarlo.',
      },
      {
        question: '¿Hay que mover los documentos a otra plataforma?',
        answer:
          'No. Nessie trabaja sobre las unidades compartidas de Google Drive que la organización ya usa y mantiene la sincronización de forma continua.',
      },
      {
        question: '¿Qué precisión tiene?',
        answer:
          'No publicamos una cifra de precisión. Existe un benchmark interno, pero hasta que se reejecute y lo contraste un experto preferimos no convertirlo en un dato de venta.',
      },
    ],
    ctaTitle: CTA_TITLE,
    ctaBody: CTA_BODY,
  },

  {
    slug: 'xeracion21-moodle',
    category: 'Educación e integración con Moodle',
    services: [DEV],
    title: 'Xeración21 integra IA dentro del Moodle de una academia',
    lead: 'La plataforma trabaja sobre temarios y rúbricas oficiales, genera materiales y devuelve calificaciones al entorno que ya usa la academia.',
    seoTitle: 'Xeración21 integra IA dentro del Moodle de una academia | OSIX Tech',
    seoDescription:
      'La plataforma trabaja sobre temarios y rúbricas oficiales, genera materiales y devuelve calificaciones al entorno que ya usa la academia.',
    metrics: [
      { value: '533', label: 'tareas de IA en producción', note: '97,2 % de éxito · 100 % desde agosto' },
      { value: '235', label: 'documentos de temario indexados', note: '12,3 millones de caracteres' },
      { value: '9,91 €', label: 'de IA por alumno y curso', note: 'los tests no añaden coste' },
    ],
    sections: [
      {
        title: 'Dentro del Moodle que la academia ya usaba',
        body: [
          'Academia NOS prepara oposiciones y trabaja sobre Moodle. La plataforma no lo sustituye: se integra dentro. Las cuentas se provisionan desde ahí, 152 hasta la fecha, y las calificaciones vuelven al libro de calificaciones mediante LTI AGS.',
          'El material de partida es oficial: 235 documentos de temario indexados, 12,3 millones de caracteres repartidos en 7.171 fragmentos, 10 especialidades, 213 temas y 13 rúbricas oficiales con 129 criterios.',
        ],
      },
      {
        title: 'Planificar, corregir y analizar exposiciones orales',
        body: [
          'La plataforma genera planes de estudio e informes de seguimiento, corrige simulacros escritos y tests, produce materiales de apoyo y analiza exposiciones orales con 19 métricas de voz. El banco de preguntas tiene 288 ítems, 190 de ellos generados por IA.',
          'Las latencias medianas están medidas por tipo de tarea: 9 segundos un informe de seguimiento, 12 un plan de estudio o un material, 4 un lote de preguntas de test y 21 indexar un documento nuevo.',
          'Todo ello citando el temario oficial de la academia, que es la diferencia entre una herramienta genérica y una que sirve para preparar una oposición concreta.',
        ],
      },
      {
        title: 'Coste y solidez antes que volumen',
        body: [
          'Desde el 23 de junio de 2026 se han ejecutado 533 tareas de IA en producción con un 97,2 % de éxito, y del 100 % desde agosto. Se han publicado 6 notas al libro de calificaciones de Moodle vía LTI AGS.',
          'El coste de IA es de 9,91 € por alumno y curso: 0,11 € por corrección escrita, 0,42 € por una oral y 0 € por los tests. No hay licencia por usuario, de modo que hacer más tests no encarece el curso.',
          'La base de código son unas 225.000 líneas, 188 endpoints más 33 de IA, 52 pantallas y 48 decisiones de arquitectura documentadas, con 4.046 tests automatizados que corren en cada cambio y 66 pruebas de extremo a extremo. Está completa en castellano y gallego.',
        ],
      },
    ],
    secondaryMetrics: [
      { value: '4.046', label: 'tests automatizados en CI', note: '66 pruebas de extremo a extremo' },
      { value: '13', label: 'rúbricas oficiales importadas', note: '129 criterios' },
      { value: '19', label: 'métricas de voz por exposición', note: 'análisis de orales' },
      { value: '48', label: 'decisiones de arquitectura documentadas', note: 'trazabilidad para auditoría' },
    ],
    status: 'Piloto y QA integrado en Moodle desde el 23 de junio de 2026. 235 documentos de temario indexados.',
    limitSection: {
      title: 'El límite que mantenemos visible',
      body: [
        'Sigue siendo un piloto en fase de QA con una base de alumnos pequeña. No publicamos usuarios activos, y tampoco cifras de concurrencia: las pruebas de carga están escritas pero no se han ejecutado.',
        'No publicamos precisión pedagógica ni exactitud del reconocimiento de voz. Medir lo primero exige que un preparador revise un conjunto de correcciones y se compare con la nota de la IA; lo segundo exige un conjunto anotado que todavía no existe.',
        'Lo que sí está medido es el coste por alumno, la latencia por tipo de tarea y la tasa de éxito de las tareas ejecutadas.',
      ],
    },
    facts: [
      { key: 'Cliente', value: 'Academia NOS Oposicións.' },
      { key: 'Estado', value: 'piloto y QA en producción desde el 23 de junio de 2026.' },
      { key: 'Integración', value: 'embebida en el Moodle de la academia, con notas devueltas por LTI AGS.' },
      { key: 'Base documental', value: '235 documentos de temario, 10 especialidades, 213 temas, 13 rúbricas oficiales.' },
      { key: 'Idiomas', value: 'castellano y gallego, completos.' },
      { key: 'Fuente de las cifras', value: SOURCE_LINE },
      { key: 'Fecha de corte', value: CUTOFF_DATE },
    ],
    faqs: [
      {
        question: '¿Hay que cambiar de plataforma?',
        answer:
          'No. La plataforma se integra dentro del Moodle que la academia ya usa: las cuentas se provisionan desde ahí y las calificaciones vuelven a su libro de calificaciones mediante LTI AGS.',
      },
      {
        question: '¿Cuánto cuesta la IA por alumno?',
        answer:
          '9,91 € por alumno y curso en el escenario medido, con 0,11 € por corrección escrita y 0,42 € por una exposición oral. Los tests no añaden coste de IA.',
      },
      {
        question: '¿La IA corrige igual que un preparador?',
        answer:
          'No lo sabemos todavía y por eso no lo afirmamos. Para publicar una concordancia habría que comparar un conjunto de correcciones revisadas por un preparador con la nota que da el sistema.',
      },
    ],
    ctaTitle: CTA_TITLE,
    ctaBody: CTA_BODY,
  },

  {
    slug: 'alia-galego',
    category: 'IA lingüística y soberanía del dato',
    services: [DEV],
    title: 'ALIA analiza galego falado con opción de ejecución local',
    lead: 'ALIA transcribe audio, detecta fenómenos lingüísticos y genera feedback en galego sin registro y con borrado automático de los datos.',
    seoTitle: 'ALIA analiza galego falado con opción de ejecución local | OSIX Tech',
    seoDescription:
      'ALIA transcribe audio, detecta fenómenos lingüísticos y genera feedback en galego sin registro y con borrado automático de los datos.',
    metrics: [
      { value: '36 s', label: 'para un análisis completo en nube', note: 'de extremo a extremo' },
      { value: '19', label: 'motores conmutables', note: '6 de transcripción · 11 de lenguaje · 2 de voz' },
      { value: '495', label: 'tests automatizados', note: 'ejecutados en cada cambio' },
    ],
    sections: [
      {
        title: 'Galego falado, sin registro y sin base de datos',
        body: [
          'ALIA es una demo pública: se sube un audio y se recibe una transcripción anotada, puntuaciones, métricas de voz y feedback en galego, exportable a PDF.',
          'No hay registro ni base de datos, por diseño. Todo dato se borra automáticamente a las 24 horas, lo que convierte la privacidad en una propiedad de la arquitectura y no en una promesa del aviso legal.',
          'El caso de uso está seleccionado y financiado dentro de la colaboración con el Proxecto Nós de la USC, y se presentó en el Foro ALIA en junio de 2026.',
        ],
      },
      {
        title: 'Diecinueve motores conmutables, también en local',
        body: [
          'El sistema conmuta entre 19 motores: 6 de transcripción, 11 de lenguaje y 2 de voz, incluidos el ASR de Nós y las voces Celtia y Brais.',
          'El mismo análisis puede ejecutarse en nube o completamente en local con modelos abiertos gallegos. Esa es la parte que importa para una administración o un centro educativo: el audio puede no salir nunca de su infraestructura.',
          'La detección lingüística se apoya en recursos propios, 105 castelanismos, 104 reglas de lusismos y 41 patrones de muletilla, que después valida un modelo de lenguaje para reducir falsos positivos.',
        ],
      },
      {
        title: 'Lo que está medido',
        body: [
          'Un análisis completo en nube tarda unos 36 segundos de extremo a extremo. El pipeline local resuelve un audio de 60 segundos en 7 a 12 segundos sobre una GPU de gama media.',
          'El proyecto se construyó en 13 semanas con 85 commits, 26 pull requests, 26 incidencias cerradas y 7 decisiones de arquitectura documentadas, y se sostiene sobre 495 tests automatizados que se ejecutan en cada cambio.',
          'La landing responde en 17 milisegundos de mediana y no registra errores 5xx para usuarios reales.',
        ],
      },
    ],
    secondaryMetrics: [
      { value: '105', label: 'castelanismos catalogados', note: 'recurso lingüístico propio' },
      { value: '104', label: 'reglas de lusismos', note: 'validadas después por un modelo de lenguaje' },
      { value: '41', label: 'patrones de muletilla', note: 'detección de repeticiones' },
      { value: '24 h', label: 'hasta el borrado automático', note: 'sin registro ni base de datos' },
    ],
    status: 'Demo pública en producción desde el 26 de mayo de 2026, en colaboración con Proxecto Nós y la USC.',
    limitSection: {
      title: 'El límite que mantenemos visible',
      body: [
        'Lo que publicamos aquí es ingeniería y arquitectura, no adopción. El uso externo observable en tres meses de logs es mínimo, así que no damos usuarios, análisis realizados ni minutos de audio procesados.',
        'Los objetivos técnicos comprometidos, tasa de error de transcripción, recall de castelanismos y latencia en el percentil 95, siguen sin validar contra un conjunto anotado, y hasta que se validen no se presentan como conseguidos.',
        'El tiempo de análisis procede de mediciones puntuales, no de una serie con volumen. Lo damos como orden de magnitud.',
      ],
    },
    facts: [
      { key: 'Contexto', value: 'colaboración con el Proxecto Nós (USC); presentado en el Foro ALIA de junio de 2026.' },
      { key: 'En producción desde', value: '26 de mayo de 2026.' },
      { key: 'Entrada', value: 'audio en galego, sin registro previo.' },
      { key: 'Salida', value: 'transcripción anotada, puntuaciones, métricas de voz y feedback, exportable a PDF.' },
      { key: 'Datos', value: 'sin base de datos; borrado automático a las 24 horas.' },
      { key: 'Despliegue', value: 'nube o ejecución 100 % local con modelos abiertos gallegos.' },
      { key: 'Fuente de las cifras', value: SOURCE_LINE },
      { key: 'Fecha de corte', value: CUTOFF_DATE },
    ],
    faqs: [
      {
        question: '¿Qué pasa con los audios que se suben?',
        answer:
          'No se guardan. El sistema funciona sin registro y sin base de datos, y todo dato se borra automáticamente a las 24 horas.',
      },
      {
        question: '¿Se puede ejecutar sin enviar nada a la nube?',
        answer:
          'Sí. El mismo análisis puede correr en un pipeline 100 % local con modelos abiertos gallegos, que resuelve un audio de 60 segundos en 7 a 12 segundos sobre una GPU de gama media.',
      },
      {
        question: '¿Cuánta gente lo usa?',
        answer:
          'Poca, y no lo presentamos de otra forma. El uso externo observable es mínimo: este caso publica la ingeniería del sistema y la soberanía del dato, no cifras de adopción.',
      },
    ],
    ctaTitle: CTA_TITLE,
    ctaBody: CTA_BODY,
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find(c => c.slug === slug);
}

export function getCaseStudiesForService(serviceId: string): CaseStudy[] {
  const matching = caseStudies.filter(c => c.services.includes(serviceId));
  // Every service page shows something: top up with the rest.
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
