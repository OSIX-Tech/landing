---
title: "Roydisa prepara borradores de oferta con el precio trazado en 16 segundos"
seoTitle: "Roydisa prepara borradores de oferta en 16 segundos | OSIX Tech"
description: "Diez años de presupuestos y más de 55.000 productos alimentan un asistente que prepara borradores de oferta en una mediana de 16 segundos, con cada precio trazado hasta su origen."
lead: "Diez años de presupuestos y más de 55.000 productos alimentan un asistente que prepara borradores de oferta en una mediana de 16 segundos, con cada precio trazado hasta su origen."
category: "Automatización comercial"
services:
  - "desarrollo-a-medida"
  - "consultoria-transformacion"
order: 2
status: "Piloto real con el equipo comercial desde el 18 de junio de 2026."
published: "2026-09-17"
updated: "2026-10-06"
metrics:
  - value: "16 s"
    label: "por borrador de oferta"
    note: "mediana · 95 % en 27,4 s"
  - value: "93 %"
    label: "referencias identificadas solas"
    note: "sin buscarlas a mano"
  - value: "8 min"
    label: "del borrador al envío"
    note: "mediana, con la revisión del comercial"
  - value: "10 años"
    label: "de presupuestos consultables"
    note: "casi 50.000 ofertas de Odoo"
metricsNote: "El asistente prepara un borrador en 16 segundos de mediana e identifica solo el 93 % de las referencias. Del borrador al envío al cliente pasan 8 minutos de mediana."
relatedGuides:
  - "automatizar-ofertas-presupuestos-correo-pyme"
---

## El histórico ya existía; lo que faltaba era consultarlo al ritmo de una oferta

Roydisa acumula diez años de actividad comercial en Odoo: casi **50.000** presupuestos y más de **100.000** líneas emitidas entre 2017 y 2026.

Alrededor de ese histórico hay un catálogo de más de **55.000** productos de cientos de proveedores, precios de mercado capturados de seis portales y los descuentos pactados con cada cliente, importados del propio ERP.

Toda esa información estaba disponible. Lo que no existía era una forma de cruzarla en el tiempo que dura una conversación con un cliente: localizar la referencia, recuperar qué se le vendió antes, comprobar el coste y aplicar el descuento pactado.

## Un borrador con el precio trazado hasta su origen

El comercial pega el correo del cliente, o una foto de su petición, y el asistente devuelve un borrador de oferta. Consulta el histórico de presupuestos en lenguaje natural, identifica las referencias, recupera el coste y compara precios entre seis portales de proveedores.

Cada línea conserva su fórmula de precio, coste por margen o tarifa por descuento pactado, junto con la fuente del dato y las últimas ventas reales a ese cliente. El borrador se exporta a Excel.

Esa trazabilidad era el requisito de diseño, no un extra. Un asistente que propone un precio sin explicar de dónde sale obliga a rehacer la comprobación a mano, que es exactamente el trabajo que se quería quitar.

## Lo que muestra el piloto

El piloto arrancó el **18** de junio de 2026 con una parte del equipo comercial, sobre peticiones reales de clientes.

La generación tiene una mediana de **16,0** segundos y un percentil **95** de **27,4**. El sistema identifica automáticamente el **93 %** de las líneas. Del borrador al envío al cliente pasan **8** minutos de mediana.

Casi un tercio de los borradores enviados salió sin editar una sola línea. El coste de IA por borrador es de céntimos.

## Desglose de producción

| Cifra | Qué mide | Detalle |
| --- | --- | --- |
| **+55.000** | productos en catálogo | de cientos de proveedores |
| **+80.000** | precios de mercado capturados | seis portales de proveedores |
| **+100.000** | líneas de presupuesto históricas | 2017-2026 |
| **27,4 s** | percentil 95 de generación | 19 de cada 20 borradores, por debajo |

## El límite que mantenemos visible

El piloto todavía no mide ofertas ganadas o perdidas. Los borradores enviados no se presentan como ventas, y no publicamos una tasa de aceptación porque ningún borrador tiene marcado su resultado.

Tampoco publicamos adopción ni crecimiento mensual. El piloto corre con una parte del equipo comercial, y agosto es mes de vacaciones: cualquier curva mensual hablaría del calendario antes que del producto.

Lo que sí está medido es el tiempo de generación, la proporción de referencias que el sistema resuelve solo y el tiempo hasta el envío.

## Ficha del proyecto

| | |
| --- | --- |
| **Cliente** | Roydisa |
| **Sector** | Distribución y suministros industriales |
| **Estado** | Piloto real con el equipo comercial desde el 18 de junio de 2026 |
| **Entrada** | Correo o foto con la petición del cliente |
| **Salida** | Borrador de oferta con precio trazable, exportable a Excel |
| **Integraciones** | Odoo y seis portales de precios de proveedores |
| **Fuente de las cifras** | Agregados de producción, logs y repositorios, sin datos personales |
| **Fecha de corte** | 8 de septiembre de 2026 |

## Preguntas frecuentes

**¿El asistente inventa precios?**
No. Cada línea del borrador conserva su fórmula de precio, la fuente del dato y las últimas ventas reales a ese cliente, de modo que el comercial puede comprobar de dónde sale cada cifra antes de enviar nada.

**¿Cuántas de esas ofertas se ganaron?**
No lo sabemos, y por eso no lo publicamos. Durante el piloto no se marcó el resultado de cada oferta. Medirlo requiere que los comerciales indiquen ganada o perdida, que es el siguiente paso acordado.

**¿Hace falta un histórico tan grande para que funcione?**
Las cifras de este caso corresponden a diez años de presupuestos de Roydisa. Con un histórico menor el sistema sigue funcionando, pero la proporción de referencias que resuelve solo depende de cuántas ventas anteriores haya sobre las que apoyarse.

## ¿Tienes un proceso parecido?

Podemos revisar el flujo actual, separar lo que conviene automatizar de lo que debe seguir bajo control humano y proponer una primera prueba medible.

[Cuéntanos tu proceso](/contacto/)
