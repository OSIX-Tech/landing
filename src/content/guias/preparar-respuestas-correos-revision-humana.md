---
title: "Cómo preparar respuestas desde correos y adjuntos manteniendo la revisión humana"
seoTitle: "Preparar respuestas desde correos y adjuntos con revisión humana (2026) - OSIX Tech"
description: "Cómo preparar respuestas desde correos y adjuntos sin quitar la revisión humana: qué datos lleva el borrador, qué tiene que ver la persona y cómo evitar que aprobar sea firmar a ciegas."
subtitle: "Qué datos lleva el borrador, qué tiene que ver la persona antes de enviar y cómo se diseña una revisión que no sea un sello."
summary: "El borrador desde el adjunto, la revisión por niveles de riesgo y la medición de correcciones"
category: "Correo y CRM"
section: "automatizar-procesos"
published: "2026-10-26"
related:
  - "clasificar-correos-ventas-pedidos-incidencias"
  - "automatizar-ofertas-presupuestos-correo-pyme"
  - "automatizar-documentos-sin-perder-revision-humana"
---

Para preparar respuestas desde correos y adjuntos sin quitar la revisión humana, el sistema tiene que redactar el borrador con los datos ya extraídos del mensaje y del adjunto, decir en voz alta qué no ha podido comprobar y dejar el envío a una persona. La revisión no se resuelve con un botón de aprobar para todo: se diseña por niveles de riesgo, y quien revisa tiene que ver la fuente de cada dato antes de decidir. Un borrador que se aprueba sin leer no es control humano, es una firma.

> **Prueba en producción:** En el flujo de ICIGA, el sistema deja una propuesta de respuesta preparada para el **99,5 %** de los correos comerciales, con una mediana de **29 segundos** desde que el correo entra y el **99,3 %** listo en menos de cinco minutos. Entran más de **1.000 adjuntos al mes** entre PDF, imágenes y hojas de cálculo, con un **0,4 %** de fallos de lectura que se detienen y van a revisión con el fichero original. Lo que ese caso no publica: el envío asistido está construido, pero el equipo no lo usa, así que no hay cifras de respuestas enviadas ni de tiempo de respuesta al cliente. [Ver el caso de ICIGA](https://osix.tech/casos/iciga-correo-crm/).

## Aprobar todos los borradores entrena al equipo a no leerlos

Cuando cada respuesta pasa por una persona, el sistema no ha acelerado nada: ha añadido un paso a un proceso que ya era lento. Y hay un efecto peor. Con un volumen alto, el revisor acaba aprobando por reflejo, y los correos que de verdad necesitaban mirada son justo los que se cuelan. Zoho lo describe en su guía de diseño de bucles de aprobación para agentes de correo: la supervisión total produce fatiga de aprobación y la supervisión inexistente produce errores silenciosos, y el objetivo no es revisar todo sino colocar la persona donde su criterio añade algo ([Zoho AgentInbox](https://www.zoho.com/agentinbox/articles/human-approval-loops-ai-email-agents.html)).

El volumen de ICIGA hace el cálculo evidente: unos 50 correos al día, con picos de más de 100. Si cada uno exigiera una aprobación explícita, la cola sería el cuello de botella del proceso comercial y la revisión se convertiría en el trabajo que la automatización iba a quitar.

## El borrador solo puede ser tan bueno como los datos que recibe

Un borrador correcto no se escribe con el texto del correo. Se escribe con lo que el sistema sabe: la referencia y las cantidades del pedido adjunto, el precio que está en el catálogo, el plazo que consta en el ERP, la última respuesta que se dio a ese cliente y la plantilla que usa la empresa. Si falta uno de esos datos, el borrador no debe rellenarlo con lo más probable.

Esa es la diferencia entre un asistente útil y una máquina de inventar. En ICIGA el 0,4 % de los adjuntos que no se pueden leer se detiene con el motivo y llega a una persona con el fichero original al lado, en vez de completar el hueco. La misma regla se aplica al texto: si el dato de origen no está, la respuesta lleva el hueco marcado y una frase para que la persona lo complete, no una cifra plausible.

Lo que el borrador necesita como mínimo, en un pedido o una consulta comercial:

- **El campo que pide el cliente**, leído del cuerpo o del adjunto, con la página o la línea de donde salió.
- **Los datos de catálogo o ERP** que se van a citar: referencia, precio vigente, plazo, disponibilidad.
- **El historial de ese hilo**, para no repetir una condición ya acordada ni reabrir algo cerrado.
- **Lo que el sistema no ha podido comprobar**, listado aparte y visible.

## Qué tiene que ver la persona antes de enviar

Una pantalla con el borrador y dos botones no es revisión. Para que alguien pueda decidir en diez segundos, la revisión tiene que mostrar tres cosas juntas:

- **El dato y su fuente.** Cada cifra del borrador con el documento o el registro del que sale. Si el revisor tiene que abrir el PDF para comprobar la cantidad, no va a hacerlo.
- **Lo dudoso, marcado.** El campo que el sistema no pudo verificar, el precio que no está en catálogo, el cliente que es nuevo. Lo que no está marcado se lee como confirmado.
- **El compromiso.** Qué acepta la empresa si ese correo sale: un plazo, un precio, una condición. Un borrador que promete una fecha sin que nadie lo note es el error caro de este proceso.

Con eso, revisar es leer dos líneas y mirar una cifra. Sin eso, revisar es reescribir, y si hay que reescribir todo, la herramienta no aporta.

## Tres niveles de riesgo, no un interruptor

La revisión se diseña por tipo de respuesta, no por política general. Un esquema que funciona en la práctica:

- **Riesgo bajo.** Acuse de recibo, confirmación de plazo estándar, envío de documentación que ya existe. Se puede automatizar el envío con muestreo posterior y una regla clara de qué lo saca del automático.
- **Riesgo medio.** Propuesta con precio de catálogo, disponibilidad o plazo. Revisión previa obligatoria, con los campos variables resaltados y el resto ya redactado.
- **Riesgo alto.** Precio negociado, condiciones legales, reclamación, incidencia grave, cliente estratégico. Revisión de una persona concreta, no de una cola, y sin plantilla que tape el caso.

La frontera entre niveles se escribe una vez y se cambia con datos, no con opiniones. Y hay una regla que no se negocia: si el correo compromete dinero, plazo o responsabilidad, la aprobación va antes del envío, no después.

## El caso de producción prepara la propuesta en 29 segundos y no envía nada

En ICIGA el sistema lee los cuatro buzones, clasifica cada correo, consulta el catálogo y el ERP y deja la propuesta escrita. La métrica que se publica mide ingesta, clasificación, propuesta y registro. No mide respuestas enviadas, porque no se envían: el envío asistido existe en el sistema, pero el equipo decidió no usarlo, y por eso el caso no publica tiempo de respuesta al cliente ni correos enviados.

Esa es la parte honesta y la que conviene copiar. Un flujo que prepara el 99,5 % de las propuestas en 29 segundos ya quita el trabajo de mirar el correo, buscar la referencia, consultar el catálogo y redactar. Lo que no hace es sustituir la decisión de enviar. Si alguien te vende lo segundo con las cifras de lo primero, está mezclando dos cosas distintas.

## Qué se mide en un piloto de respuestas asistidas

Antes de ampliar el automático, un piloto necesita cuatro números, y ninguno es la confianza del modelo:

- **Correcciones por cada 100 borradores**, desglosadas por campo. Si el 80 % de las correcciones caen en el plazo, el problema está en el dato de plazo, no en la redacción.
- **Cambios de precio o de condición**, que son los que miden el riesgo real y no la calidad del texto.
- **Tiempo desde que entra el correo hasta que sale la respuesta.** Es la métrica que el cliente nota.
- **Escalados y su motivo.** Qué parte de los casos no debería haber llegado al revisor.

Hay una trampa en la cifra más cómoda, el porcentaje de borradores enviados sin editar. Un número alto puede significar que el sistema acierta o que el revisor no está leyendo. Se distingue con una muestra: alguien lee esos borradores en frío y dice si los habría enviado igual.

## Cuándo no compensa preparar respuestas asistidas

Si cada respuesta es una negociación distinta, el borrador ahorra poco: el trabajo está en decidir qué ofrecer, no en redactar. Si el volumen es de diez correos al día, revisar sigue siendo más rápido que montar el sistema. Y si el equipo no puede decir qué campos cambia siempre antes de enviar, no hay nada que automatizar todavía: esa lista es el diseño.

El caso en el que sí compensa es el que se repite: las mismas preguntas, los mismos datos en el adjunto, el mismo formato de respuesta, y un catálogo o un ERP del que sacar las cifras. Ahí el borrador convierte veinte minutos de búsqueda en una revisión de diez segundos, que es exactamente donde debe estar la persona.

## Preguntas frecuentes

### ¿Puede la IA contestar a los clientes sin que nadie revise?

Puede redactar, y en respuestas de riesgo bajo puede enviar con muestreo posterior. En cualquier correo que comprometa precio, plazo o responsabilidad, la revisión va antes del envío. En el caso que publicamos, el sistema prepara la propuesta y no envía nada: el envío asistido está construido y el equipo decidió no usarlo.

### ¿Cómo se evita que el borrador invente un dato del adjunto?

Atando cada cifra a su fuente y dejando visible lo que no se pudo comprobar. Si el campo no está en el adjunto o en el catálogo, el borrador lleva el hueco marcado en vez de un valor probable. El 0,4 % de adjuntos ilegibles del caso se detiene con el motivo y va a revisión con el fichero original.

### ¿Funciona con PDF, fotos y hojas de cálculo?

Sí, con distinta fiabilidad. En ICIGA entran más de mil adjuntos al mes entre PDF, imágenes y hojas de cálculo. Las fotos de calidad irregular son el caso que más se detiene, y por eso el flujo las trata como excepción en vez de forzar la lectura.

### ¿Hay que cambiar de programa de correo?

No. El flujo trabaja sobre los buzones que la empresa ya usa y deja el borrador donde el equipo lo lee. Cambiar de herramienta no es requisito para preparar respuestas asistidas.

### ¿Se puede medir si la revisión humana sirve de algo?

Sí, con las correcciones por cada 100 borradores y los cambios de precio o condición. Si el revisor no cambia nada durante semanas y el muestreo en frío dice que los borradores eran correctos, la revisión puede bajar de nivel en esos casos. Si no cambia nada y el muestreo encuentra errores, el problema es que la revisión se ha convertido en un sello.

## Metodología y transparencia

Esta guía la publica OSIX Tech, consultora de desarrollo de software e inteligencia artificial en Santiago de Compostela. El diseño de revisión por niveles sale de lo aprendido en el flujo de correo que mantenemos en producción para ICIGA desde febrero de 2026; sus cifras están en la página del caso, con la ventana de medición y los límites que el propio caso publica. El argumento sobre fatiga de aprobación se apoya en la guía de Zoho AgentInbox sobre bucles de aprobación humana, consultada en octubre de 2026, y no se presenta como una medición nuestra. Lo que esta guía no publica: tasa de precisión de clasificación, respuestas enviadas y horas ahorradas, porque ninguna de las tres está medida en ese proyecto.

- [Designing human approval loops for AI email agents, Zoho AgentInbox](https://www.zoho.com/agentinbox/articles/human-approval-loops-ai-email-agents.html)
- [users.drafts.create, Gmail API](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts/create)
