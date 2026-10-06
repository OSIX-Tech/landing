---
title: "Un instituto de investigación pregunta a sus 732 documentos y recibe cada respuesta con su fuente"
seoTitle: "Nessie: preguntar a un Google Drive y recibir respuestas con fuente | OSIX Tech"
description: "Nessie sincroniza unidades compartidas, describe documentos e imágenes con IA y responde preguntas citando la documentación de origen."
lead: "Nessie sincroniza unidades compartidas, describe documentos e imágenes con IA y responde preguntas citando la documentación de origen."
category: "Inteligencia documental"
services:
  - "desarrollo-a-medida"
  - "consultoria-transformacion"
order: 6
status: "Piloto B2B desde marzo de 2026 con un instituto de investigación educativa. 153 consultas y 41 entregables generados."
published: "2026-09-17"
updated: "2026-10-06"
metrics:
  - value: "732"
    label: "documentos consultables"
    note: "y 1.447 imágenes, sin moverlos de Drive"
  - value: "92 %"
    label: "de los usuarios volvió otro día"
    note: "12 de 12 lo probaron"
  - value: "0,09 $"
    label: "de IA por consulta"
    note: "153 consultas respondidas"
  - value: "41"
    label: "entregables generados"
    note: "PDF, Word y PowerPoint"
metricsNote: "Todo el equipo con acceso lo probó y el 92 % volvió en días distintos. Cada consulta cuesta unos 0,09 dólares de IA y responde citando el documento de origen."
---

## Un corpus de investigación repartido en unidades compartidas

Un instituto de investigación educativa guarda su documentación en unidades compartidas de Google Drive: **215** carpetas en dos unidades, con un volumen equivalente a unas **8.100** páginas y **4,1** millones de palabras.

El material está ahí y es accesible. Pero a ese tamaño la pregunta deja de ser dónde está el documento y pasa a ser qué dice el conjunto.

## Indexar, describir y responder citando el origen

Nessie sincroniza las unidades compartidas de forma continua, describe cada documento y cada imagen con IA y responde preguntas en lenguaje natural citando la documentación de la que sale cada respuesta.

El corpus está vectorizado en **20.409** fragmentos, unos **28** por documento. Las **1.447** imágenes extraídas tienen descripción en el **99,5 %** de los casos, de modo que también son consultables.

Además de responder, genera entregables a partir del propio corpus: **41** documentos creados hasta la fecha, **35** en PDF, **4** en Word y **2** en PowerPoint.

## Lo que muestra el piloto

Los **732** documentos indexados están descritos por IA al **100 %**. Los **12** usuarios provisionados han consultado el sistema y el **92 %** ha vuelto en días distintos, con una media de **12,8** consultas por usuario.

De las **153** consultas respondidas, ninguna quedó truncada, y el **54 %** fueron conversaciones de varios turnos: gente afinando una pregunta en lugar de probar una vez y abandonar.

El coste de IA por consulta ronda los **0,09** dólares, y en los registros disponibles no consta ningún fallo del sistema.

## Desglose de producción

| Cifra | Qué mide | Detalle |
| --- | --- | --- |
| **20.409** | fragmentos vectorizados | unos 28 por documento |
| **8.100** | páginas equivalentes | unos 4,1 millones de palabras |
| **41** | entregables generados | 35 PDF · 4 DOCX · 2 PPTX |
| **215** | carpetas sincronizadas | 2 unidades compartidas, en continuo |

## El límite que mantenemos visible

Es un piloto con un cliente externo. Lo que publicamos es capacidad de indexación y adopción entre quienes tienen acceso, no volumen: el número de clientes, los usuarios activos al mes y las consultas mensuales son cifras pequeñas y no las presentamos como resultado.

Tampoco publicamos una tasa general de precisión. Hay un benchmark interno, pero debe reejecutarse y contrastarse con un experto antes de convertirse en una cifra pública.

## Ficha del proyecto

| | |
| --- | --- |
| **Cliente** | Instituto de investigación educativa |
| **Estado** | Piloto B2B desde marzo de 2026 |
| **Entrada** | Unidades compartidas de Google Drive, en sincronización continua |
| **Salida** | Respuestas citando el documento de origen y entregables en PDF, DOCX y PPTX |
| **Corpus** | 732 documentos y 1.447 imágenes, 20.409 fragmentos vectorizados |
| **Fuente de las cifras** | Agregados de producción, logs y repositorios, sin datos personales |
| **Fecha de corte** | 8 de septiembre de 2026 |

## Preguntas frecuentes

**¿De dónde salen las respuestas?**
De la documentación del propio cliente. Cada respuesta cita los documentos de origen, de forma que quien pregunta puede ir al material y comprobarlo.

**¿Hay que mover los documentos a otra plataforma?**
No. Nessie trabaja sobre las unidades compartidas de Google Drive que la organización ya usa y mantiene la sincronización de forma continua.

**¿Qué precisión tiene?**
No publicamos una cifra de precisión. Existe un benchmark interno, pero hasta que se reejecute y lo contraste un experto preferimos no convertirlo en un dato de venta.

## ¿Tienes un proceso parecido?

Podemos revisar el flujo actual, separar lo que conviene automatizar de lo que debe seguir bajo control humano y proponer una primera prueba medible.

[Cuéntanos tu proceso](/contacto/)
