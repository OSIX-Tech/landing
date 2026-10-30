---
title: "Automatización de ofertas y presupuestos industriales"
shortTitle: "Ofertas y presupuestos"
tagline: "Del correo del cliente a un borrador de oferta con cada precio trazado. Para distribución y suministro industrial y fabricación bajo pedido."
summary: "OSIX Tech prepara borradores de oferta a partir de la petición del cliente: identifica la referencia en el catálogo, consulta tarifas y descuentos pactados y deja el borrador en Excel, con los datos leídos de Odoo. En Roydisa lleva en producción desde junio de 2026, con una mediana de 16 segundos por borrador."
description: "OSIX Tech automatiza la tramitación de presupuestos industriales: del correo o la foto del cliente a un borrador de oferta con el precio trazado, exportable a Excel y con los datos leídos de tu ERP."
seoTitle: "Automatización de ofertas y presupuestos industriales | OSIX Tech"
order: 6
icon: "file"
serviceType: "Quote and Proposal Automation"
updated: "2026-10-30"
problem:
  title: "La petición llega por correo y la oferta se monta a mano"
  body: "El cliente escribe, manda una foto de su lista o adjunta un Excel, y alguien tiene que leerla, buscar cada referencia en el catálogo, comprobar la tarifa y el descuento pactado y montar el documento. En Roydisa ese trabajo se apoyaba en casi 50.000 presupuestos de diez años que había que consultar al ritmo de una conversación."
solution:
  title: "El flujo ocupa el hueco entre la petición y el borrador"
  body: "Leemos el correo, la foto o el Excel, identificamos cada línea contra el catálogo y el histórico, recuperamos el coste, aplicamos la tarifa y el descuento pactados y dejamos un borrador con cada precio trazado hasta su fuente. El comercial revisa y envía."
highlightsTitle: "Lo que el flujo hace sin que nadie busque una referencia a mano"
highlights:
  - "Petición leída del correo, la foto o el Excel del cliente, con sus líneas separadas"
  - "Referencias identificadas solas contra el catálogo y el histórico de ventas"
  - "Tarifa, descuento pactado, coste y margen calculados línea a línea"
  - "Cada precio conserva su fórmula y su fuente para poder comprobarlo"
  - "Borrador en Excel, con catálogo, histórico y descuentos leídos de Odoo"
  - "El borrador no sale solo: una persona lo revisa y lo envía"
stats:
  - value: "16 s"
    label: "mediana por borrador en Roydisa"
  - value: "93 %"
    label: "referencias identificadas solas en Roydisa"
  - value: "8 min"
    label: "del borrador al envío en Roydisa"
  - value: "+55.000"
    label: "productos en el catálogo de Roydisa"
faqs:
  - question: "¿Automatizar las ofertas sustituye a mi ERP?"
    answer: "No. El flujo se coloca alrededor del ERP que ya usas: lee la petición, identifica las referencias, consulta el catálogo y el histórico donde están y devuelve el borrador en el formato que tu equipo utiliza. En Roydisa el sistema consulta Odoo, que sigue siendo el sistema de registro. Migrar el ERP no es un requisito para automatizar la oferta."
  - question: "¿De dónde sale cada precio del borrador?"
    answer: "De la tarifa, el coste y el descuento pactado con ese cliente, no de una estimación del modelo. Cada línea conserva su fórmula de precio, la fuente del dato y las últimas ventas reales a ese cliente, de modo que el comercial puede comprobar de dónde sale cada cifra antes de enviar nada."
  - question: "¿Qué pasa si la referencia no está en el catálogo?"
    answer: "Se detiene. El sistema no elige el producto más parecido ni inventa un precio: deja la línea marcada y la envía a revisión con el texto original de la petición al lado. En Roydisa identifica solo el 93 % de las referencias, y el 7 % restante es el que no se resuelve solo y acaba en manos de una persona."
  - question: "¿Cuánto tarda en prepararse un borrador de oferta?"
    answer: "En el piloto de Roydisa la mediana es de 16,0 segundos y el percentil 95 de 27,4, es decir que 19 de cada 20 borradores salen por debajo de 27,4 segundos. Desde el borrador hasta el envío al cliente pasan 8 minutos de mediana, con la revisión del comercial dentro de ese tiempo."
  - question: "¿La oferta se envía sola al cliente?"
    answer: "No. Una oferta es un compromiso de precio, plazo y condiciones, y un error de extracción o de tarifa se convierte en un compromiso firmado. El flujo prepara el borrador y una persona decide qué se envía. El envío automático solo debería plantearse después de semanas midiendo un segmento concreto, y aquí no lo hemos hecho."
guides:
  - "automatizar-ofertas-presupuestos-correo-pyme"
  - "integrar-erp-crm-sistemas-pyme"
  - "automatizar-documentos-sin-perder-revision-humana"
  - "bandeja-compartida-crm-sin-copiar-correos"
---

> **Prueba en producción:** En Roydisa, distribuidor de suministro industrial, el flujo que montamos en OSIX Tech prepara borradores de oferta con el equipo comercial desde el 18 de junio de 2026. La mediana por borrador es de **16,0 segundos** y el percentil 95 de **27,4**; el sistema identifica solo el **93 %** de las referencias y del borrador al envío pasan **8 minutos** de mediana. Trabaja sobre diez años de presupuestos y más de **55.000 productos** en Odoo. El piloto **no mide ofertas ganadas o perdidas**, y por eso no publicamos una tasa de aceptación. [Ver el caso de Roydisa](/casos/roydisa-ofertas/).

## OSIX Tech automatiza la tramitación de presupuestos en una empresa industrial

OSIX Tech construye el flujo que va de la petición del cliente al borrador de oferta en distribución y suministro industrial y en fabricación bajo pedido. La petición entra por correo, por una foto o por un Excel; el sistema separa las líneas, identifica cada referencia contra el catálogo, calcula el precio con la tarifa y el descuento pactados y devuelve el borrador en Excel, con cada precio trazado hasta su fuente. La persona revisa, corrige lo que haga falta y envía.

No es un configurador de producto ni un ERP nuevo. Es la pieza que hoy ocupa una persona: leer la petición, buscar la referencia y comprobar el precio.

## La petición llega mezclada y el flujo la convierte en líneas

La petición de oferta de un cliente industrial casi nunca llega ordenada. Unas veces es un correo con el texto en el cuerpo, otras una foto del listado que el cliente tiene en papel, otras un Excel con columnas distintas en cada fila. El flujo recibe ese material tal cual y lo convierte en líneas con cantidad, referencia y unidad.

De cada línea se intenta extraer lo que la oferta necesita: la referencia o descripción del producto, la cantidad, la unidad y las condiciones especiales que vengan escritas. Lo que no aparece se queda marcado en vez de rellenarse con el dato más probable.

## Cada línea se busca en el catálogo y en el histórico de ventas

Identificar la referencia es el paso que más tiempo devuelve, porque es el que hoy se hace a mano, producto a producto. En Roydisa son más de **55.000** productos de cientos de proveedores y casi 50.000 presupuestos emitidos entre 2017 y 2026: la misma referencia puede aparecer escrita de cinco maneras y con un código distinto en cada proveedor.

El sistema resuelve solo el **93 %** de las líneas del piloto. Para hacerlo no basta el catálogo: también mira qué se le vendió antes a ese cliente y bajo qué descripción, que suele ser la forma en que él vuelve a pedirlo. El 7 % restante no se resuelve solo y llega a la revisión de una persona con el texto original al lado. Ese porcentaje no es un defecto que se esconde: es el margen donde un catálogo incompleto se convierte en un error de precio si nadie mira.

## El precio se calcula con la tarifa y el descuento pactados, no con una estimación

Una oferta industrial se equivoca por el precio, no por el texto. Por eso el cálculo ocurre antes de que el borrador exista: coste del producto, tarifa aplicable, descuento pactado con ese cliente concreto y margen resultante. En Roydisa el sistema compara además precios entre seis portales de proveedores, para que la decisión comercial no dependa del último albarán que alguien recuerde.

Cada línea del borrador conserva su fórmula de precio, la fuente del dato y las últimas ventas reales a ese cliente. Esa trazabilidad fue el requisito de diseño, no un extra: un asistente que propone un precio sin explicar de dónde sale obliga a rehacer la comprobación a mano, que es justo el trabajo que se quería quitar.

## El borrador sale en Excel y el ERP se queda donde está

El resultado tiene que entrar en el proceso que el equipo ya sigue. En Roydisa el borrador se exporta a Excel y el sistema consulta Odoo como fuente de catálogo, histórico y descuentos. No hay migración de ERP, ni una aplicación nueva que aprender, ni una bandeja paralela donde alguien tenga que copiar datos.

Si tu equipo trabaja con otro ERP o directamente con hojas de cálculo, la integración se decide en el proyecto: qué se lee, qué se escribe y en qué formato. La regla que seguimos en [cómo integrar ERP, CRM y sistemas de una pyme](/guias/integrar-erp-crm-sistemas-pyme/) es la misma aquí: el sistema de registro se queda donde está y el flujo trabaja alrededor.

## La persona revisa y envía; el borrador no sale solo

Del borrador al envío al cliente pasan **8 minutos** de mediana en el piloto de Roydisa, y ese tiempo incluye la revisión del comercial. Casi un tercio de los borradores enviados salió sin editar una sola línea, lo que dice dos cosas: que la extracción resuelve sola el 93 % de las referencias y que en dos de cada tres borradores la persona todavía corrige algo.

La revisión no es una formalidad que se pueda quitar cuando el sistema acierte más. Una oferta enviada es un compromiso de precio, plazo y condiciones. La regla es la misma que en el resto de la automatización documental: la máquina prepara y la persona decide, y el envío automático solo se plantea después de semanas midiendo un segmento concreto.

## Lo que este flujo no hace

Lo escribimos porque es lo primero que debería preguntar quien vende esto:

- **No mide ofertas ganadas o perdidas.** Durante el piloto no se marcó el resultado de cada oferta, así que no publicamos una tasa de aceptación. Medirlo exige que los comerciales indiquen ganada o perdida, y es el siguiente paso acordado.
- **No decide el precio.** Aplica la tarifa y el descuento pactados, y bloquea la línea cuando no hay regla. Las excepciones son decisiones comerciales, no técnicas.
- **No funciona sin tarifas ni histórico escritos.** Si el precio depende de la negociación de cada cliente y no hay nada contra lo que validar, esta automatización no tiene de dónde tirar. Lo desarrollamos en [cuándo no conviene automatizar tus ofertas](/guias/automatizar-ofertas-presupuestos-correo-pyme/).
- **No garantiza el mismo resultado en otra empresa sin probar.** Las cifras de esta página son de Roydisa: su catálogo, sus proveedores y su forma de pedir.
- **No publica un precio de partida.** El coste depende del alcance de la integración y se concreta en una propuesta escrita.

## Se empieza con un tipo de oferta y una muestra real

El piloto coge un segmento acotado, por ejemplo una línea de producto o un perfil de cliente, y una muestra de peticiones reales que incluya correos mal escritos, fotos torcidas y referencias que ya no existen. Se definen qué campos son obligatorios, qué bloquea el borrador y qué se mide: tiempo por borrador, referencias resueltas solas y cuántas líneas corrige la persona.

Si el segmento se sostiene durante dos o cuatro semanas, se amplía. Si la revisión corrige a diario, el problema está en los datos o en las reglas, y se arregla ahí antes de añadir alcance.

Cuéntanos cuántas peticiones de oferta recibes al mes, por dónde llegan y en qué sistema acaban, y te decimos si el flujo encaja con tu caso.

[Cuéntanos tu proceso y te decimos si encaja](/contacto/)
