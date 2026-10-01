---
title: "Cómo automatizar la gestión de pedidos en una distribuidora gallega"
seoTitle: "Cómo automatizar la gestión de pedidos en una distribuidora gallega - OSIX Tech"
description: "Cómo conectar pedidos, ERP, stock, almacén y facturación en una distribuidora. Qué automatizar primero y cómo controlar errores sin cambiar de sistema por defecto."
subtitle: "Del canal de entrada a stock, almacén y factura: qué conectar primero y qué revisar antes de automatizar."
summary: "De la recepción por correo, portal o EDI al stock, preparación, entrega y facturación, sin cambiar de ERP por defecto"
category: "Distribución"
section: "sectores"
published: "2026-09-28"
related:
  - "conectar-produccion-ventas-almacen-pyme-industrial"
  - "automatizar-facturas-documentos-pyme"
  - "automatizar-ofertas-presupuestos-correo-pyme"
---

Una distribuidora puede automatizar la gestión de pedidos conectando la entrada de cada solicitud con su ERP, el stock, la preparación, la entrega y la facturación. No hace falta empezar cambiando de ERP ni añadiendo un sistema de almacén: primero hay que eliminar una tarea manual concreta, fijar qué sistema manda sobre cada dato y revisar los casos dudosos antes de que afecten al cliente o al inventario.

El orden importa. Si se automatiza la captura antes de ordenar clientes, referencias, unidades y tarifas, los errores llegan antes al siguiente sistema. Conviene empezar por un canal o flujo repetitivo, medir el resultado y ampliar solo cuando los pedidos llegan correctos al siguiente paso.

## Dibuja el recorrido del pedido antes de elegir tecnología

Anota cómo trabaja hoy el equipo, desde que recibe el pedido hasta que factura lo entregado. En una distribuidora, el recorrido puede incluir estos estados:

1. Recibido por portal, correo, EDI, teléfono o comercial.
2. Identificado con el cliente y la dirección de entrega correctos.
3. Validado contra referencias, unidades, tarifas y condiciones comerciales.
4. Confirmado, rechazado o enviado a revisión.
5. Reservado según la disponibilidad y las reglas de la empresa.
6. Preparado, comprobado y expedido.
7. Entregado total o parcialmente, con las incidencias registradas.
8. Conciliado con el albarán y enviado a facturación.

Para cada dato, apunta dónde se crea y qué sistema debe ser su fuente válida. Por ejemplo, el ERP puede mantener clientes y tarifas, mientras que el sistema de almacén registra ubicaciones y movimientos físicos. Si dos programas pueden cambiar la misma cantidad sin una regla clara, aparecerán descuadres.

## Automatiza primero el canal que más trabajo repetido genera

Un portal B2B, una integración EDI, un conector con el ERP o la lectura de pedidos recibidos por correo pueden reducir la reintroducción manual. No son equivalentes: el portal recoge los datos en un formato previsto; EDI intercambia mensajes estructurados entre empresas que lo han acordado; la lectura de un correo o PDF debe interpretar un documento que puede variar de un cliente a otro.

Antes de implantar un canal, revisa una muestra de pedidos reales y anota qué campos hacen falta para registrarlos sin completar datos a mano:

- Cliente y punto de entrega.
- Código de producto y descripción usada por el cliente.
- Cantidad, unidad y formato de venta.
- Tarifa, descuento y condiciones acordadas.
- Fecha o ventana solicitada.
- Referencia del pedido de origen y canal de entrada.

Si un pedido llega como texto libre, correo o PDF, la extracción automática debería crear una propuesta, no confirmar una orden a ciegas. Una persona debe revisar las líneas sin referencia clara, las cantidades fuera de patrón, los clientes no identificados y las diferencias de precio. Registra también el documento original y quién aprobó las excepciones.

## Valida cada pedido antes de reservar stock

La validación debe comprobar reglas concretas, no limitarse a que el pedido tenga campos rellenados. Confirma que el cliente puede comprar esos productos, que las referencias coinciden con el catálogo, que la unidad es compatible, que se aplica la tarifa correcta y que se cumplen las condiciones comerciales vigentes.

Decide qué puede pasar automáticamente y qué debe quedar en espera. Un producto sin equivalencia clara, un cambio de precio o una dirección de entrega no reconocida no debería convertirse en un pedido confirmado por defecto. Una cola de revisión con el motivo visible permite resolver estas excepciones sin perder el pedido ni esconder el error en el ERP.

Usa un identificador estable para reconocer el mismo pedido si se reenvía o si falla una conexión y hay que repetir el envío. La repetición debe actualizar o marcar el pedido existente, no crear otro por accidente.

## Calcula disponibilidad con reglas que el equipo entienda

El stock físico no siempre equivale a stock disponible. Para prometer una cantidad, distingue las unidades existentes de las reservadas para otros pedidos, las recibidas pero aún no disponibles y las que están en tránsito, si la empresa necesita controlar esos estados.

Define qué ocurre cuando falta producto: dejar la línea pendiente, proponer una fecha, dividir el envío o sugerir una sustitución. La decisión puede depender del cliente, del producto y del acuerdo comercial. No sustituyas una referencia ni cambies una cantidad sin aplicar las reglas aprobadas por la distribuidora.

La reserva también debe tener un momento definido. Como ejemplo de configuración posible, la [documentación de Odoo sobre métodos de reserva](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/reservation_methods.html) describe reservas al confirmar el pedido, manuales o antes de la fecha prevista. Son opciones de un producto concreto, no una regla universal; el momento adecuado depende de cómo la empresa compromete sus existencias.

## Conecta la preparación y la entrega con el pedido confirmado

Cuando el pedido está confirmado, el personal de almacén necesita una lista de preparación que refleje las líneas, cantidades, ubicaciones y prioridades válidas. Si hay errores de picking, el escaneo de códigos de barras puede registrar qué producto y cantidad se han recogido, siempre que el catálogo y las etiquetas estén bien mantenidos.

No todas las distribuidoras necesitan las mismas etapas. Una operación sencilla puede preparar y expedir en un único paso; otra puede necesitar separar picking, empaquetado y salida. La documentación de Odoo, por ejemplo, explica un flujo de entrega en tres pasos. Antes de reproducirlo, comprueba si el almacén realmente trabaja así y si cada etapa mejora el control.

Registra las diferencias en el punto donde ocurren: faltantes, producto dañado, sustitución aprobada, entrega parcial, rechazo o devolución. El albarán y la confirmación de recepción permiten conciliar lo expedido con lo recibido. AECOC describe el albarán como prueba de entrega y señala que las incidencias deben quedar registradas; para ciertos intercambios EDI, identifica DESADV como aviso de expedición y RECADV como aviso de recepción.

La planificación de rutas va después de tener pedidos fiables y fechas de entrega acordadas. Las rutas deben responder a la geografía, ventanas horarias, capacidad y frecuencia reales de cada empresa. Galicia no implica un único patrón de reparto: mídelo con los datos de la operación, no con una suposición regional.

Como ejemplo de flujo de almacén, la [documentación de Odoo sobre entregas en tres pasos](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/delivery_three_steps.html) explica una configuración de picking, empaquetado y salida. Es un ejemplo de producto, no una secuencia obligatoria para todas las distribuidoras.

## Factura lo que se ha entregado, no lo que se esperaba entregar

Conecta pedido, albarán y factura con referencias que permitan comprobar qué se pidió, qué salió y qué recibió el cliente. Cuando hay una diferencia, como una entrega parcial o un rechazo, el flujo debe dejar claro si se factura lo entregado, si queda una cantidad pendiente o si hace falta un abono.

Si clientes y proveedores ya intercambian documentos estructurados, EDI puede reducir la reintroducción manual. Antes de activarlo, acuerda los mensajes, identificadores, unidades, referencias y forma de tratar rechazos con cada interlocutor. AECOC recoge en su guía de albaranes los mensajes DESADV para el aviso de expedición y RECADV para comunicar la recepción, incluidas cantidades aceptadas o rechazadas.

## Elige la opción más pequeña que resuelva el cuello de botella

| Situación observada | Primer paso razonable | Comprueba antes de ampliar |
| --- | --- | --- |
| El ERP ya registra pedidos y stock, pero se vuelven a escribir datos | Revisar configuración, importaciones o conectores existentes | Si clientes, referencias, unidades y tarifas están alineados |
| Un cliente o proveedor intercambia documentos estructurados | Acordar EDI y probar los mensajes necesarios | Identificadores, formato, errores y confirmaciones de recepción |
| Los pedidos llegan en correos o documentos variados | Probar captura asistida y revisión de excepciones | Calidad de lectura por cliente, producto y formato |
| El almacén no refleja a tiempo lo que se recoge o expide | Mejorar el registro de movimientos y valorar escaneo | Etiquetas, ubicaciones y proceso real del equipo |
| Varios sistemas actualizan los mismos datos | Definir fuente válida y flujo de sincronización | Duplicados, reintentos, permisos y alertas de error |
| El ERP no soporta un paso esencial ni puede integrarse razonablemente | Documentar la limitación y evaluar una alternativa | Coste de migración, datos, formación y continuidad operativa |

No hace falta incorporar IA en cada paso. Las reglas de precio, stock, límites de crédito y confirmación deberían ser explícitas y revisables. La IA puede ayudar a interpretar texto libre o documentos variados, pero una extracción incierta debe volver a una persona antes de modificar el pedido o el inventario.

## Haz un piloto acotado y compara el mismo trabajo antes y después

Escoge un canal, un grupo de clientes o una familia de productos con volumen suficiente para observar el proceso, pero con límites claros. Antes de cambiarlo, mide el flujo actual. Durante el piloto, conserva el mismo criterio de medición y registra las excepciones.

Indicadores útiles:

- Minutos de trabajo manual por pedido.
- Porcentaje de pedidos registrados sin correcciones.
- Líneas con referencia, unidad, cantidad o precio incorrectos.
- Pedidos duplicados o que quedan sin procesar.
- Diferencias entre stock registrado y recuento físico.
- Entregas parciales, incidencias y devoluciones.
- Tiempo desde recepción hasta confirmación y desde confirmación hasta expedición.
- Facturas que requieren corrección por diferencias con el pedido o el albarán.

No evalúes el piloto solo por cuántos pedidos entran automáticamente. Comprueba también cuántos quedan bien registrados, cuántos se detienen por una razón válida y cuánto trabajo de corrección aparece después. Si el nuevo flujo solo desplaza la entrada manual al equipo de almacén o administración, todavía no ha resuelto el problema.

## Preguntas frecuentes

**¿Tengo que cambiar de ERP para automatizar pedidos?**

No necesariamente. Empieza por comprobar si el ERP actual puede registrar el proceso, mantener los datos que necesita y conectarse con los otros sistemas. Configurar o integrar lo que ya funciona puede bastar. Valora un cambio cuando hayas identificado una limitación concreta que no se resuelva razonablemente de otra forma.

**¿Se pueden registrar automáticamente los pedidos que llegan por correo o PDF?**

Sí, se puede extraer información y preparar un pedido para revisión. La confirmación automática solo es prudente cuando el cliente, las referencias, las cantidades y las condiciones se reconocen con suficiente certeza. Los casos ambiguos deben quedar en una cola de revisión, no convertirse en pedidos válidos por defecto.

**¿Cuándo tiene sentido usar EDI?**

Cuando la distribuidora y sus clientes o proveedores acuerdan intercambiar documentos comerciales estructurados, como pedidos, avisos de expedición o confirmaciones de recepción. EDI no ordena por sí solo el proceso interno ni corrige catálogos inconsistentes.

**¿Qué conviene automatizar primero?**

El paso que hoy repite más trabajo o provoca errores que el equipo puede medir. Registra el punto de partida, automatiza ese flujo y revisa tanto el tiempo ahorrado como los errores, duplicados y excepciones. Después decide si merece la pena ampliar a stock, almacén, reparto o facturación.

**¿Cómo evito que se duplique un pedido si falla la integración?**

Usa una referencia estable del pedido y comprueba si ya se procesó antes de crear otro. Si se reintenta una operación, debe actualizar el registro existente o señalar el error, no duplicar la orden.

## Fuentes consultadas

[AECOC: qué es un albarán, su función y los mensajes EDI DESADV y RECADV](https://www.aecoc.es/web-blog/que-es-un-albaran/)

[Odoo 19: métodos de reserva de existencias](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/reservation_methods.html)

[Odoo 19: preparación y entrega en tres pasos](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/delivery_three_steps.html)

## Cómo se elaboró esta guía

Esta guía la publica OSIX Tech y propone un orden de decisión desde la revisión del proceso hasta la integración o sustitución de sistemas. Se basa en documentación pública de AECOC y Odoo enlazada aquí, que ilustra prácticas y opciones de producto, no requisitos universales. No compara precios ni atribuye resultados a clientes. La configuración adecuada depende del ERP, los acuerdos comerciales y el flujo real de cada distribuidora.
