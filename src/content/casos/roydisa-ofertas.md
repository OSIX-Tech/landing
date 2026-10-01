---
title: "Roydisa prepara borradores de oferta en 16 segundos"
seoTitle: "Roydisa prepara borradores de oferta en 16 segundos | OSIX Tech"
description: "47.518 presupuestos históricos y 57.296 productos alimentan un asistente que generó borradores en una mediana de 16 segundos durante el piloto."
lead: "47.518 presupuestos históricos y 57.296 productos alimentan un asistente que generó borradores en una mediana de 16 segundos durante el piloto."
category: "Automatización comercial"
services:
  - "desarrollo-a-medida"
  - "consultoria-transformacion"
order: 2
status: "Piloto real desde el 18 de junio de 2026. 64 borradores reales, 17 enviados al cliente."
published: "2026-09-17"
metrics:
  - value: "47.518"
    label: "presupuestos históricos indexados"
    note: "103.495 líneas · 2017-2026"
  - value: "16 s"
    label: "mediana de generación"
    note: "percentil 95 en 27,4 s"
  - value: "93 %"
    label: "referencias identificadas solas"
    note: "152 de 163 líneas"
secondaryMetrics:
  - value: "57.296"
    label: "productos en catálogo"
    note: "257 proveedores · 20 marcas"
  - value: "80.303"
    label: "precios de mercado capturados"
    note: "6 portales de proveedores"
  - value: "64"
    label: "borradores reales en el piloto"
    note: "28 clientes · 58.099 € ofertados"
  - value: "0,016 $"
    label: "de IA por borrador"
    note: "menos de 20 $ en toda la vida del sistema"
limit:
  title: "El límite que mantenemos visible"
  body:
    - "El piloto todavía no mide ofertas ganadas o perdidas. Los 17 envíos no se presentan como ventas, y no publicamos una tasa de aceptación porque ningún borrador tiene marcado su resultado."
    - "Tampoco publicamos adopción ni crecimiento mensual. El piloto corre con cinco comerciales sobre un equipo mayor, y agosto es mes de vacaciones: cualquier curva mensual hablaría del calendario antes que del producto."
    - "Lo que sí está medido es el tiempo de generación, la proporción de referencias que el sistema resuelve solo y el coste por borrador."
facts:
  - key: "Cliente"
    value: "Roydisa."
  - key: "Sector"
    value: "distribución y suministros industriales."
  - key: "Estado"
    value: "piloto real con cinco comerciales desde el 18 de junio de 2026."
  - key: "Entrada"
    value: "correo o foto con la petición del cliente."
  - key: "Salida"
    value: "borrador de oferta con precio trazable, exportable a Excel."
  - key: "Integraciones"
    value: "Odoo y seis portales de precios de proveedores."
  - key: "Fuente de las cifras"
    value: "agregados de producción, logs y repositorios, sin datos personales."
  - key: "Fecha de corte"
    value: "8 de septiembre de 2026."
faqs:
  - question: "¿El asistente inventa precios?"
    answer: "No. Cada línea del borrador conserva su fórmula de precio, la fuente del dato y las últimas ventas reales a ese cliente, de modo que el comercial puede comprobar de dónde sale cada cifra antes de enviar nada."
  - question: "¿Cuántas de esas ofertas se ganaron?"
    answer: "No lo sabemos, y por eso no lo publicamos. Durante el piloto no se marcó el resultado de cada oferta. Medirlo requiere que los comerciales indiquen ganada o perdida, que es el siguiente paso acordado."
  - question: "¿Hace falta un histórico tan grande para que funcione?"
    answer: "Las cifras de este caso corresponden a diez años de presupuestos de Roydisa. Con un histórico menor el sistema sigue funcionando, pero la proporción de referencias que resuelve solo depende de cuántas ventas anteriores haya sobre las que apoyarse."
cta:
  title: "¿Tienes un proceso parecido?"
  body:
    - "Podemos revisar el flujo actual, separar lo que conviene automatizar de lo que debe seguir bajo control humano y proponer una primera prueba medible."
---

## El histórico ya existía; lo que faltaba era consultarlo al ritmo de una oferta

Roydisa acumula diez años de actividad comercial en Odoo: **47.518** presupuestos y **103.495** líneas emitidas entre 2017 y 2026, por un valor presupuestado de **29,65** millones de euros.

Alrededor de ese histórico hay un catálogo de **57.296** productos de **257** proveedores y **20** marcas, **80.303** precios de mercado capturados de seis portales y **597.933** descuentos por cliente y familia importados del propio ERP.

Toda esa información estaba disponible. Lo que no existía era una forma de cruzarla en el tiempo que dura una conversación con un cliente: localizar la referencia, recuperar qué se le vendió antes, comprobar el coste y aplicar el descuento pactado.

## Un borrador con el precio trazado hasta su origen

El comercial pega el correo del cliente, o una foto de su petición, y el asistente devuelve un borrador de oferta. Consulta el histórico de presupuestos en lenguaje natural, identifica las referencias, recupera el coste y compara precios entre seis portales de proveedores.

Cada línea conserva su fórmula de precio, coste por margen o tarifa por descuento pactado, junto con la fuente del dato y las últimas ventas reales a ese cliente. El borrador se exporta a Excel.

Esa trazabilidad era el requisito de diseño, no un extra. Un asistente que propone un precio sin explicar de dónde sale obliga a rehacer la comprobación a mano, que es exactamente el trabajo que se quería quitar.

## Lo que muestra el piloto

El piloto arrancó el **18** de junio de 2026 con cinco comerciales. Hasta la fecha de corte se generaron **64** borradores reales para **28** clientes, por un total de **58.099** € ofertados.

La generación tiene una mediana de **16,0** segundos y un percentil **95** de **27,4**. El sistema identifica automáticamente el **93 %** de las líneas. Del borrador al envío al cliente pasan **8** minutos de mediana.

**17** de esos **64** borradores se enviaron al cliente, y casi un tercio de ellos sin editar una sola línea. El coste de IA por borrador ronda los **0,016** dólares: toda la vida del sistema, bancos de pruebas incluidos, ha consumido menos de **20** dólares.
