---
title: "ICIGA tiene lista la respuesta a cada correo comercial en 29 segundos y el CRM se rellena solo"
seoTitle: "ICIGA: propuesta de respuesta en 29 segundos y CRM automático desde Gmail | OSIX Tech"
description: "El sistema procesa correo, filtra ruido y prepara propuestas mientras construye un CRM de transacciones a partir de los hilos de Gmail."
lead: "El sistema procesa correo, filtra ruido y prepara propuestas mientras construye un CRM de transacciones a partir de los hilos de Gmail."
category: "Automatización de correo y CRM"
services:
  - "desarrollo-a-medida"
  - "consultoria-transformacion"
order: 3
status: "En producción desde el 9 de febrero de 2026. 4.893 transacciones y 8.387 correos trazados en siete meses."
published: "2026-09-17"
updated: "2026-10-06"
metrics:
  - value: "99,5 %"
    label: "de los correos comerciales con propuesta lista"
    note: "377 de 379 en 31 días"
  - value: "29 s"
    label: "de correo a propuesta lista"
    note: "mediana · percentil 90 en 58 s"
  - value: "62,2 %"
    label: "del correo entrante era ruido"
    note: "apartado sin que nadie lo abra"
  - value: "4.893"
    label: "operaciones registradas solas"
    note: "en siete meses, sin teclear en el CRM"
metricsNote: "El sistema aparta el ruido, que es el 62,2 % del correo, y deja preparada una propuesta para casi todos los correos comerciales en 29 segundos de mediana. Mientras tanto registra cada operación en el CRM sin que nadie la teclee."
relatedGuides:
  - "bandeja-compartida-crm-sin-copiar-correos"
---

## La actividad comercial entraba entera por el correo

ICIGA distribuye material químico y de laboratorio. Sus pedidos, presupuestos, facturas, incidencias y pagos llegan por cuatro buzones de Gmail, mezclados con todo lo demás que entra en una bandeja de empresa.

La mayor parte de ese volumen no es trabajo: el **62,2 %** del correo entrante es spam, correo no comercial u ofertas de proveedores. Lo que queda son solicitudes reales que hay que clasificar, cruzar con el catálogo y el ERP, contestar y dejar registradas.

## Un copiloto de bandeja que además construye el CRM

El sistema lee los cuatro buzones en tiempo real, aparta el ruido y clasifica cada correo por tipo de solicitud, tipo de cliente y urgencia. Después consulta el catálogo y el ERP y deja preparada una propuesta de respuesta. Los adjuntos entran en el mismo flujo: **1.478** al mes entre PDF, imágenes y hojas de cálculo, con un **0,4 %** de fallos de lectura.

En paralelo construye un CRM de transacciones anclado a los hilos de Gmail. Da de alta clientes, proveedores y contactos, crea la operación y mueve su estado en el pipeline comercial a medida que el hilo avanza.

La ingesta, la clasificación y el registro funcionan sin intervención humana. Nadie abre un correo para decidir dónde va.

## Siete meses de operaciones registradas solas

Desde el **9** de febrero de 2026 el sistema ha trazado **8.387** correos y ha creado **4.893** transacciones, **3.176** de venta y **1.717** de compra, con **1.987** cambios de estado del pipeline, todos automáticos. Por el camino ha dado de alta **306** clientes, **212** proveedores y **875** contactos.

En los últimos **31** días procesó **1.463** correos, **47** al día con un pico de **124**. El **99,5 %** de los correos relevantes llegó con una propuesta preparada: **377** de **379**.

De correo recibido a propuesta lista pasan **29** segundos de mediana, y el **99,3 %** está listo en menos de cinco minutos. El **28,9 %** del correo entra fuera de horario y se procesa igual. En los últimos treinta días el sistema no registró ni un error.

## Desglose de producción

| Cifra | Qué mide | Detalle |
| --- | --- | --- |
| **4.893** | transacciones creadas solas | 3.176 ventas · 1.717 compras · 7 meses |
| **8.387** | correos trazados en el CRM | unos 1.251 al mes |
| **1.987** | cambios de estado del pipeline | 100 % automáticos |
| **1.393** | altas creadas solas | 306 clientes · 212 proveedores · 875 contactos |

## El límite que mantenemos visible

La métrica mide ingesta, clasificación, propuesta y registro. No afirma que el sistema envíe respuestas: el envío asistido está construido, pero el equipo no lo usa, así que no publicamos tiempo de respuesta al cliente ni respuestas enviadas.

Tampoco publicamos horas ahorradas. Sabemos cuántos correos se clasifican y se registran solos; no cuántos minutos costaba hacerlo a mano en esta empresa concreta.

La precisión de la clasificación tampoco tiene todavía una cifra pública: para darla habría que revisar a mano una muestra y compararla.

## Ficha del proyecto

| | |
| --- | --- |
| **Cliente** | ICIGA, distribución de material químico y de laboratorio |
| **En producción desde** | 9 de febrero de 2026 |
| **Entrada** | Cuatro buzones de Gmail, con sus adjuntos |
| **Salida** | Propuesta de respuesta y CRM de transacciones anclado al hilo |
| **Intervención humana** | Ninguna en ingesta, clasificación y registro |
| **Fuente de las cifras** | Agregados de producción, logs y repositorios, sin datos personales |
| **Fecha de corte** | 8 de septiembre de 2026 |

## Preguntas frecuentes

**¿El sistema contesta a los clientes por su cuenta?**
No. Deja preparada una propuesta de respuesta y es una persona quien decide qué se envía. De hecho, en esta implantación el equipo no utiliza el envío asistido, y por eso no publicamos ninguna cifra de respuestas enviadas.

**¿Qué pasa con el correo que llega de noche o en fin de semana?**
Se procesa igual. El 28,9 % del correo entra fuera de horario y queda clasificado y registrado antes de que nadie abra la bandeja.

**¿Hay que cambiar de correo o de CRM?**
No. El sistema trabaja sobre los buzones de Gmail que la empresa ya usa y construye el registro de transacciones a partir de esos hilos, además de consultar el catálogo y el ERP existentes.

## ¿Tienes un proceso parecido?

Podemos revisar el flujo actual, separar lo que conviene automatizar de lo que debe seguir bajo control humano y proponer una primera prueba medible.

[Cuéntanos tu proceso](/contacto/)
