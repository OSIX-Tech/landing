---
title: "Cómo automatizar albaranes y facturas de proveedores sin cambiar tu ERP"
description: "Cómo automatizar albaranes y facturas de proveedores sin cambiar de ERP: flujo OCR, datos estructurados, duplicados, excepciones, revisión humana y prueba piloto."
subtitle: "Flujo OCR, datos estructurados, duplicados, excepciones, revisión humana y prueba piloto."
summary: "Flujo OCR, datos estructurados, duplicados, excepciones, revisión humana y prueba piloto"
category: "Automatización documental"
section: "automatizar-procesos"
published: "2026-09-30"
updated: "2026-10-01"
related:
  - "automatizar-facturas-documentos-pyme"
  - "automatizar-documentos-sin-perder-revision-humana"
---

Puedes automatizar albaranes y facturas sin cambiar el ERP: recibe fotos o PDF, extrae los campos necesarios, comprueba pedidos y duplicados, y devuelve datos estructurados al sistema actual. Envía documentos ilegibles, datos dudosos y discrepancias a revisión humana; no contabilices una excepción a ciegas.

> **Prueba en producción:** En Roydisa, el flujo procesó **31.377 ficheros**; la mediana desde la foto hasta el Excel fue de **27 segundos**, y el **88 %** terminó en menos de un minuto. El **0,04 %** es un error técnico observado, no una medida de precisión del OCR por campo. [Ver el caso de Roydisa](https://osix.tech/casos/roydisa-ocr-documentos-proveedores/).


La decisión no empieza por elegir un modelo de IA. Empieza por medir cuántos documentos entran, qué información debe salir de cada uno y dónde se atasca hoy el proceso.

## La vía razonable conserva el sistema que ya funciona

Cambiar de ERP solo para leer documentos suele convertir un problema de entrada en un proyecto de migración. Si el equipo ya trabaja con Odoo, un programa contable, carpetas de Google Drive o un servidor propio, la automatización puede colocarse alrededor de ese flujo.

El diseño tiene cinco pasos:

1. **Recibir el documento.** El sistema vigila la carpeta, buzón o entrada donde ya llegan las fotos y PDF.
2. **Clasificarlo.** Distingue albaranes, facturas, confirmaciones y otros documentos para aplicar el flujo correcto.
3. **Extraer los datos.** Lee proveedor, referencias, cantidades, fechas, importes y líneas de producto, según lo que necesite el proceso.
4. **Comprobar y enrutar.** Contrasta reglas, detecta duplicados, marca campos dudosos y envía las excepciones a una persona.
5. **Devolver el resultado.** Produce un Excel, registros para el ERP o una salida estructurada que el equipo ya sabe utilizar.

La interfaz no es el centro del proyecto. El centro es que la información llegue al siguiente paso sin obligar a alguien a copiarla otra vez.

## OCR solo resuelve la lectura, no todo el proceso

Un extractor OCR puede ser suficiente cuando los documentos tienen formatos parecidos, el volumen es moderado y solo necesitas convertir cada archivo en campos estructurados. Es una buena primera opción si el destino puede recibir esos campos sin reglas especiales.

El OCR se queda corto cuando el flujo necesita alguna de estas condiciones:

- Los documentos cambian mucho de formato o llegan como fotos de calidad irregular.
- El mismo documento puede entrar dos veces y no debe generar dos salidas.
- Hay que cruzar el albarán o la factura con pedidos, referencias, precios o datos del ERP.
- Los campos críticos deben superar reglas distintas según proveedor, importe o tipo de documento.
- El resultado debe volver al sistema que el equipo ya utiliza, en vez de quedarse en una aplicación separada.
- Los documentos ilegibles o incompletos deben detenerse con un motivo claro.

En esos casos no basta con leer. Hay que coordinar entrada, extracción, reglas, excepciones y salida. Eso es un flujo de automatización documental, no solo un lector OCR.

## El caso de Roydisa muestra qué conviene medir

En el [caso de Roydisa sobre automatización documental y OCR](https://osix.tech/casos/roydisa-ocr-documentos-proveedores/), OSIX midió un flujo que recibe fotos y PDF desde las carpetas del cliente y devuelve Excels estructurados por línea de producto.

La ventana publicada procesó **31.377 ficheros**. La mediana desde la foto hasta el Excel fue de **27 segundos**, y el **88 %** de los documentos terminó en menos de un minuto. El sistema generó **16.021 Excels**, absorbió **7.421 duplicados** sin producir una salida repetida y soportó un pico de **1.026 ficheros en un día**.

El resultado relevante no es solo que el sistema lea documentos. Es que la salida aparece en un formato que compras, administración y operaciones pueden revisar y utilizar sin rehacer la transcripción.

El caso también mantiene una frontera importante: el **0,04 %** publicado es un error técnico observado desde junio, no una tasa general de precisión por campo. Para saber si un flujo sirve en otra empresa hay que probar una muestra de sus propios documentos, con sus proveedores, formatos y campos críticos.

## El flujo debe detenerse donde un error todavía se puede corregir

La automatización documental no debería aprobar por su cuenta una factura, registrar un importe dudoso o enviar un documento que comprometa a la empresa. La regla práctica es separar preparación y decisión.

La máquina puede:

- Leer una foto o un PDF.
- Identificar el tipo de documento.
- Extraer referencias, cantidades, fechas e importes.
- Detectar campos que faltan.
- Comprobar reglas y diferencias con el pedido.
- Preparar la salida para el ERP o para una bandeja de revisión.

Una persona debe decidir cuando:

- El documento contiene un importe fuera de los límites definidos.
- Hay una diferencia entre pedido, albarán y factura.
- El proveedor es nuevo o ha cambiado sus datos bancarios.
- La imagen no permite comprobar un campo importante.
- La salida genera un pago, una obligación o una comunicación externa.

La revisión no consiste en releer todo por costumbre. Consiste en recibir las excepciones con el documento original, los datos extraídos y el motivo de la parada.

## Cómo saber si te conviene automatizar este flujo

Antes de pedir una propuesta, mide durante una semana:

- Cuántos documentos entran por tipo.
- Qué porcentaje llega en foto, PDF o formato estructurado.
- Qué campos se copian manualmente.
- Cuánto tarda cada documento desde la entrada hasta el registro.
- Qué errores obligan a repetir el trabajo.
- Cuántos duplicados o documentos incompletos aparecen.
- Qué sistema debe recibir el resultado.

Con esa información puedes elegir una vía proporcionada:

| Situación | Primera vía razonable | Límite que debes comprobar |
| --- | --- | --- |
| Pocos documentos y formatos estables | Herramienta de gestión o extractor OCR | Que los campos lleguen al sistema correcto |
| Volumen medio y documentos repetitivos | Extractor con reglas y revisión | Que gestione formatos distintos y excepciones |
| Muchos documentos, varios sistemas y reglas propias | Flujo a medida conectado al ERP | Coste, mantenimiento y responsable del proceso |

La solución correcta no es la más compleja. Es la que quita el paso manual que más se repite y deja visible el riesgo que todavía necesita criterio humano.

## Un piloto útil empieza con un solo tipo de documento

No conviene automatizar todos los proveedores y todos los documentos el primer día. El piloto debe ser suficientemente pequeño para entender los errores y suficientemente real para medir el resultado.

Un piloto razonable hace esto:

1. Elige un tipo de documento, por ejemplo albaranes de proveedores recurrentes.
2. Reúne una muestra que incluya formatos normales, fotos malas, duplicados y excepciones.
3. Define los campos obligatorios y las reglas que bloquean la salida.
4. Mantén la revisión humana antes de registrar datos críticos.
5. Mide tiempo de proceso, errores encontrados, excepciones y documentos completados.
6. Amplía a facturas u otros proveedores solo cuando el primer flujo sea estable.

La muestra debe parecerse al trabajo real. Un conjunto limpio de documentos de prueba puede ocultar precisamente los casos que hacen perder tiempo al equipo.

## Preguntas frecuentes

### ¿Puedo automatizar albaranes si no quiero cambiar de ERP?

Sí. El flujo puede vigilar la entrada que ya usa tu empresa, extraer los datos y devolverlos en el formato que tu ERP o tu equipo necesita. La integración depende del sistema existente y de las reglas del proceso, pero cambiar de ERP no es un requisito de partida.

### ¿Qué ocurre si una factura o un albarán llega mal escaneado?

No debe inventar el dato que falta. El sistema debe marcar el documento, explicar qué campo no ha podido comprobar y enviarlo a revisión. Si el documento es crítico, la salida debe quedar bloqueada hasta que una persona lo corrija o pida una nueva copia.

### ¿Cómo se evitan los duplicados?

Hay que definir una señal de duplicado antes del piloto. Puede combinar proveedor, número de documento, fecha, importe, referencias y la huella del archivo. La señal exacta depende del proceso, pero el objetivo es que una entrada repetida no produzca una segunda factura, un segundo albarán o una segunda exportación.

### ¿El OCR elimina la revisión humana?

No por defecto. La extracción puede automatizarse, pero la revisión depende del tipo de documento, de los campos críticos y del coste de equivocarse. Un sistema bien diseñado revisa las excepciones y mantiene controles sobre la parte que avanza automáticamente.

### ¿Cuándo basta una herramienta OCR y cuándo necesito desarrollo a medida?

Una herramienta OCR suele bastar si recibes documentos parecidos, necesitas extraer campos y el siguiente paso es sencillo. El desarrollo a medida tiene sentido cuando debes cruzar documentos con el ERP, aplicar reglas propias, controlar duplicados, gestionar excepciones y devolver la información al flujo que el equipo ya utiliza.

### ¿Qué demuestra el caso de Roydisa?

Demuestra que un flujo concreto procesó 31.377 ficheros, con una mediana de 27 segundos desde la foto hasta el Excel y un 88 % terminado en menos de un minuto durante la ventana publicada. No demuestra una precisión general para cualquier empresa. Antes de extrapolarlo hay que probar una muestra propia.

## La prueba debe responder a tu proceso, no a una demo

Un proveedor puede enseñar un documento limpio y una extracción correcta. Eso no basta para decidir. Pide una prueba con documentos reales anonimizados o con una muestra que represente la variedad del proceso: proveedores distintos, fotos, PDF, líneas largas, duplicados y campos ausentes.

La prueba debería dejar claro:

- Qué campos extrae y con qué criterio se consideran correctos.
- Qué documentos pasan sin intervención y cuáles se detienen.
- Cómo se explican las excepciones.
- Dónde quedan los documentos y los datos.
- Cómo se registra una corrección humana.
- Cómo llega la salida al ERP, al programa contable o al Excel que el equipo ya usa.
- Qué mantenimiento requiere el flujo cuando cambia un proveedor o una plantilla.

Si la propuesta solo habla de porcentaje de precisión del modelo, todavía no describe el proceso completo. La pregunta útil es qué ocurre con el documento siguiente, el que llega distinto, incompleto o duplicado.

La guía general de [automatización de facturas y documentos para pymes](https://osix.tech/guias/automatizar-facturas-documentos-pyme/) compara programa de gestión, extractor OCR y desarrollo a medida. La guía sobre [automatizar documentos sin perder la revisión humana](https://osix.tech/guias/automatizar-documentos-sin-perder-revision-humana/) explica cómo colocar los controles según el riesgo.

### Fuentes y transparencia

Esta guía la publica OSIX Tech a partir de su trabajo en automatización documental y del caso público de Roydisa. El caso de Roydisa publica la ventana medida, el flujo, los resultados y los límites de extrapolación. Las cifras no se presentan como una garantía para otros documentos o empresas. La última revisión de esta página corresponde a septiembre de 2026.

Si quieres revisar un proceso concreto, [cuéntanos cómo entran hoy tus documentos](https://osix.tech/contacto/).