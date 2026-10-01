---
title: "Roydisa procesa documentos de proveedores sin teclearlos uno a uno"
seoTitle: "Roydisa: OCR de documentos de proveedores en 27 segundos | OSIX Tech"
description: "Caso de estudio de OSIX Tech: 31.377 documentos de proveedores procesados, 27 segundos de mediana desde la foto al Excel y 0,04 % de error técnico desde junio de 2026."
lead: "Roydisa recibe documentos de proveedores que deben convertirse en información utilizable para compras, administración y operaciones. El flujo de OSIX toma las fotos y PDF desde las carpetas del cliente, los procesa y devuelve Excels estructurados por línea de producto."
category: "Automatización documental y OCR"
services:
  - "desarrollo-a-medida"
  - "consultoria-transformacion"
order: 1
status: "En producción desde el 12 de marzo de 2026."
published: "2026-09-17"
metrics:
  - value: "31.377"
    label: "ficheros tratados"
    note: "12 mar · 8 sep 2026"
  - value: "27 s"
    label: "mediana foto a Excel"
    note: "flujo completo"
  - value: "88 %"
    label: "en menos de un minuto"
    note: "documentos procesados"
  - value: "0,04 %"
    label: "error técnico desde junio"
    note: "7 de 17.500 documentos"
metricsNote: "En la ventana medida, el sistema procesó 31.377 ficheros. La mediana desde la foto hasta el Excel fue de 27 segundos y el 88 % de los documentos terminó en menos de un minuto."
figures:
  - id: "excels-por-tipo"
    type: "bars"
    title: "Excels generados por tipo de documento"
    subtitle: "16.021 Excels entre el 12 de marzo y el 8 de septiembre de 2026"
    items:
      - label: "Albaranes"
        value: 8672
      - label: "Facturas"
        value: 5024
      - label: "Confirmaciones de pedido"
        value: 2325
relatedGuides:
  - "automatizar-albaranes-facturas-proveedores-erp"
---

## El problema no era leer un documento, sino convertir miles en datos utilizables

Los documentos llegaban en formatos distintos y con ritmos variables. Cada uno tenía que pasar de una imagen o un PDF a un formato que el equipo pudiera revisar, compartir y usar en sus procesos posteriores.

Con este volumen, la transcripción manual introduce dos costes. El primero es el tiempo que el equipo dedica a leer y copiar. El segundo es la fricción que aparece cuando el volumen cambia, cuando llegan documentos duplicados o cuando un día concentra más entradas de lo habitual.

Roydisa no necesitaba otra aplicación aislada. Necesitaba conectar la entrada documental con el formato que ya formaba parte de su trabajo.

## OSIX construyó el flujo alrededor de las carpetas que Roydisa ya utilizaba

El servicio vigila las carpetas de Google Drive, o del servidor propio, donde Odoo deja los documentos de proveedores. Un modelo multimodal lee cada foto o PDF y devuelve un Excel por línea de producto.

El flujo distingue los tipos de documento, absorbe duplicados sin generar una salida repetida y puede ejecutarse en Docker. Eso permite mantener la arquitectura cerca de los datos del cliente y evitar una base de datos propia o servidores nuevos cuando no hacen falta.

No hay base de datos: la serie histórica de este caso se reconstruyó a partir del listado completo del Drive, **47.433** elementos. La decisión técnica importante no fue añadir una capa de interfaz, sino hacer que el resultado apareciera en el lugar y en el formato que el equipo ya podía utilizar.

## La producción muestra volumen, velocidad y estabilidad

La ventana observada va del **12** de marzo al **8** de septiembre de 2026. En ese periodo se generaron **16.021** Excels: **8.672** albaranes, **5.024** facturas y **2.325** confirmaciones, a partir de unos **13,5** GB de fotos y PDF.

![Excels generados por tipo de documento: 8.672 albaranes, 5.024 facturas y 2.325 confirmaciones de pedido](../../assets/figures/casos/roydisa-ocr-documentos-proveedores/excels-por-tipo.png)

La media fue de **5.214** ficheros al mes, pero el sistema también absorbió un pico de **1.026** ficheros en un solo día. Ese contraste importa: el caso no demuestra únicamente que el flujo funcione en un día normal, sino que puede absorber días de mayor carga sin cambiar manualmente de infraestructura. De marzo a junio el volumen creció un **49 %**.

Los **13.394** folios de albaranes se distribuyeron entre cuatro delegaciones. La salida no fue una cifra abstracta de documentos leídos, sino una colección de Excels que el equipo podía llevar a su siguiente paso operativo.

## Desglose de producción

| Cifra | Qué mide | Detalle |
| --- | --- | --- |
| **16.021** | Excels generados | 8.672 albaranes · 5.024 facturas · 2.325 confirmaciones |
| **9.258** | albaranes digitalizados | 13.394 páginas · 4 delegaciones |
| **7.421** | duplicados absorbidos | sin salida repetida |
| **1.026** | ficheros en un día | pico observado |

## El resultado medido tiene un alcance concreto

Este caso demuestra volumen procesado, tiempo de respuesta y error técnico observado. El 0,04 % corresponde a 7 errores en 17.500 documentos desde junio. No lo presentamos como una tasa general de precisión por campo, porque esa validación requeriría una revisión completa contra un conjunto de referencia.

Tampoco presentamos como resultado observado el ahorro estimado de horas administrativas. Para publicar esa cifra habría que comparar el tiempo real de introducción manual por tipo de documento antes y después del sistema.

Esa distinción es importante para cualquier proyecto de automatización documental. Procesar un documento no significa que todos sus campos estén validados de la misma forma, y reducir el tiempo de una etapa no demuestra por sí solo un ahorro financiero completo.

## Ficha del proyecto

| | |
| --- | --- |
| **Cliente** | Roydisa |
| **Sector** | Distribución y suministros industriales |
| **En producción desde** | 12 de marzo de 2026 |
| **Entrada** | Fotos y PDF depositados en carpetas del cliente |
| **Salida** | Excel estructurado por línea de producto |
| **Despliegue** | Google Drive o servidor propio con Docker |
| **Fuente de las cifras** | Agregados de producción, logs y metadatos de Drive, sin datos personales |
| **Fecha de corte** | 8 de septiembre de 2026 |

Las cifras proceden de una auditoría agregada de la base documental, los logs y los repositorios de producción de cada producto OSIX. Se revisaron los metadatos completos del flujo de OCR en modo solo lectura. No se utilizaron datos personales.

## Preguntas frecuentes

**¿El OCR funciona con documentos de proveedores diferentes?**
El flujo se midió sobre documentos reales de proveedores de Roydisa, con fotos y PDF de distintos tipos. La cifra publicada refleja el sistema en ese entorno concreto. Antes de extrapolar el resultado a otro negocio conviene probar una muestra propia.

**¿Hay que contratar servidores nuevos?**
No necesariamente. El servicio puede vigilar carpetas de Google Drive o ejecutarse en un servidor propio con Docker. La arquitectura final depende de los requisitos del cliente y de dónde deban permanecer sus documentos.

**¿El sistema elimina toda revisión humana?**
La cifra publicada mide el procesamiento automático y el error técnico observado. La necesidad de revisión depende del tipo de documento, de los campos críticos y del nivel de control que necesite cada proceso.

**¿Qué diferencia hay entre error técnico y precisión del OCR?**
El error técnico indica fallos del flujo o de su ejecución en la ventana medida. No equivale a una validación completa de la exactitud de cada campo extraído. Por eso este caso no publica una precisión general por campo.

## ¿Qué documentos procesa hoy tu equipo?

Si tu equipo convierte albaranes, facturas, confirmaciones u otros documentos en datos a mano, el primer paso no es elegir un modelo. Es medir el flujo: cuántos documentos entran, qué tipos se repiten, cuánto tarda cada etapa y qué errores obligan a volver atrás.

OSIX puede ayudarte a localizar la parte que merece automatizarse primero y a decidir si necesitas OCR, reglas, integración con tu ERP o una combinación de las tres cosas.

[Cuéntanos tu proceso](/contacto/)
