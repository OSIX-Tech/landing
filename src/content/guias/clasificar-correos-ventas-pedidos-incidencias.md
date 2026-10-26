---
title: "Cómo clasificar automáticamente los correos de ventas, pedidos e incidencias"
seoTitle: "Cómo clasificar automáticamente correos de ventas, pedidos e incidencias (2026) - OSIX Tech"
description: "Cómo clasificar los correos de ventas, pedidos e incidencias: separar el ruido, una categoría por acción, reglas antes que IA y una cola de revisión para lo ambiguo."
subtitle: "El ruido primero, una categoría por cada acción que dispara y una salida para lo ambiguo que vacía una persona."
summary: "Separar el ruido, una categoría por acción y una cola de revisión para lo que la IA no debe decidir"
category: "Correo y CRM"
section: "automatizar-procesos"
published: "2026-10-26"
related:
  - "bandeja-compartida-crm-sin-copiar-correos"
  - "preparar-respuestas-correos-revision-humana"
  - "automatizar-ofertas-presupuestos-correo-pyme"
---

Para clasificar automáticamente los correos de ventas, pedidos e incidencias, el orden que funciona es este: separa primero lo que no requiere acción, define una categoría por cada acción que dispara, resuelve con reglas lo que una regla acierta y deja la IA solo para el mensaje ambiguo, con una cola de revisión humana que alguien vacía cada día. La categoría no es el objetivo: el objetivo es que cada correo llegue a la persona que tiene que actuarlo, con los datos que necesita para hacerlo.

> **Prueba en producción:** En el flujo de correo y CRM que OSIX mantiene para ICIGA desde el 9 de febrero de 2026 hay cuatro buzones de Gmail conectados. El sistema aparta el **62,2 %** del correo entrante porque es spam, correo no comercial u ofertas de proveedores, y deja una propuesta preparada para el **99,5 %** de los correos comerciales en una mediana de **29 segundos**. Lleva **más de 8.000 correos** trazados y **casi 5.000** operaciones registradas, y el **100 %** de los cambios de estado del pipeline, casi **2.000**, lo hizo el sistema. El caso no publica una tasa de precisión de clasificación: para darla habría que revisar a mano una muestra y compararla. [Ver el caso de ICIGA](https://osix.tech/casos/iciga-correo-crm/).

## El primer filtro no separa categorías, separa ruido

En los cuatro buzones de ICIGA, el 62,2 % del correo entrante no era trabajo. Spam, correo no comercial y ofertas de proveedores entraban mezclados con los pedidos, los presupuestos, las facturas y las incidencias reales. Antes de preguntarse si un mensaje es venta, pedido o incidencia hay que preguntarse si es trabajo, y esa primera decisión mueve más volumen que todas las categorías de negocio juntas.

Por eso el ruido se resuelve con reglas comprobables y no con la opinión del modelo: dominios de proveedores que ya conoces, remitentes de boletines, patrones de asunto repetidos, direcciones que llevan un año sin recibir respuesta. Una regla de ruido se puede leer en una pantalla y discutir con quien la escribió. Una etiqueta de ruido puesta por un clasificador no se puede discutir, y por eso conviene que esa zona sea recuperable: nada se borra, todo se archiva, y una persona revisa cada semana una muestra de lo archivado para encontrar al cliente que se coló.

Ese muestreo semanal es barato y es lo que impide que el sistema se coma una venta en silencio. Si en tu caso el ruido no llega al 20 % del buzón, probablemente no necesitas un clasificador para esto: un filtro del programa de correo y una carpeta que alguien mira una vez al día hacen el mismo trabajo.

## Una categoría que no cambia lo que pasa después es una etiqueta

Con el ruido fuera, el número de categorías útiles casi siempre es pequeño: solicitud comercial, pedido, factura, incidencia y lo que no requiere acción. Si dos categorías terminan en la misma bandeja y en la misma persona, son la misma categoría con dos nombres.

En ICIGA cada mensaje sale clasificado por tipo de solicitud, tipo de cliente y urgencia, y de esa combinación sale lo que de verdad importa: quién es el responsable y en qué estado queda la operación. Ahí es donde se ve si la clasificación sirve. En el periodo publicado, el 100 % de los cambios de estado del pipeline, casi 2.000, los hizo el sistema, sin que nadie abriera el correo para decidir dónde iba.

La lista de categorías no se diseña en una reunión: se saca de cien o doscientos correos reales agrupados a mano. La lista que sale del buzón suele ser más corta y más rara que la que sale de la pizarra, y casi siempre incluye una categoría que nadie había previsto, la del cliente que escribe por un canal que no es el suyo. Categorías como «consulta general» u «otros» no son categorías: son la cola de revisión con otro nombre, y conviene llamarlas así desde el principio.

## Una regla del buzón no sigue el hilo, y ahí se pierde la respuesta del cliente

La tentación es resolver todo con filtros, porque ya están ahí y no cuestan nada. Los filtros de Gmail aplican criterios de búsqueda sobre los mensajes nuevos, y cuando el cliente contesta, la respuesta solo se filtra si vuelve a cumplir los mismos criterios ([Ayuda de Gmail](https://support.google.com/mail/answer/6579?hl=es)). En un hilo comercial eso falla justo cuando importa: el segundo mensaje del cliente, «adelante con el pedido, la referencia es la de siempre», no repite la palabra que llevaba el asunto original, así que una regla por asunto lo deja pasar.

Las reglas de Outlook tienen la misma forma, condiciones y acciones sobre un mensaje ([Microsoft Support](https://support.microsoft.com/es-es/outlook/mail/manage-email-messages-by-using-rules-in-outlook)), no sobre la conversación ni sobre lo que ya sabes de ese cliente. La consecuencia práctica es que hay que clasificar conversaciones y no mensajes: guarda el identificador del hilo, hereda dentro del hilo la clasificación ya decidida, y usa la regla para lo previsible (remitente conocido, asunto estable, adjunto con formato fijo) mientras el clasificador entra solo en el mensaje que no encaja en ninguna regla.

Esa herencia por hilo también evita el error contrario, el correo que se clasifica dos veces y crea dos registros. Un reenvío del mismo pedido, con el asunto cambiado y una nota nueva arriba, sigue siendo el mismo pedido.

## Lo ambiguo no se archiva: va a una cola que alguien vacía

Todo sistema de clasificación necesita una salida para lo que no sabe. Si esa salida es una carpeta que nadie mira, el diseño es peor que no tener clasificador, porque el correo importante desaparece con la etiqueta de procesado puesta.

La cola de revisión necesita cuatro cosas para funcionar: un responsable con nombre, un compromiso de vaciado (en ICIGA el criterio es que se atiende cada día), el motivo escrito de por qué el mensaje está ahí, y un tamaño que se pueda mirar. Si la cola crece durante tres días seguidos, no es un problema de la cola: es que el clasificador está recibiendo casos que no debería recibir, o que falta una categoría.

La regla del sistema es la misma que en el resto del flujo: la máquina prepara, la persona decide. El sistema clasifica, consulta el catálogo y el ERP y deja el siguiente paso listo. Lo que no entiende no lo adivina, lo marca. Cada correo que una persona reetiqueta debería convertirse en un caso de prueba con su texto real, para que la próxima versión del clasificador no vuelva a fallar en el mismo sitio.

## Los adjuntos son parte de la clasificación, no un extra

Un pedido en PDF no es «un correo con un adjunto»: el contenido que hay que enrutar está dentro del adjunto. En ICIGA entran más de mil adjuntos al mes entre PDF, imágenes y hojas de cálculo, y el 0,4 % se queda sin leer. Ese 0,4 % no se rellena con el dato más probable: se detiene y llega a una persona con el fichero original al lado.

Por eso el clasificador mira primero qué trae el mensaje (tipo de adjunto, número de documentos, remitente, si el cuerpo está vacío) y después el texto. Un correo sin cuerpo y con un albarán adjunto suele ser una entrega; el mismo cuerpo sin adjunto suele ser una consulta de estado. Si el adjunto es la parte que decide, clasificar por el asunto es clasificar a ciegas.

## Qué se mide antes de decir que la clasificación funciona

La medición honesta empieza por una muestra etiquetada a mano. Coge cien o doscientos correos de un periodo real, clasifícalos tú y compara con lo que hizo el sistema. De ahí salen las cuatro cifras que importan:

- **La corrección por categoría.** Qué porcentaje de cada categoría tuvo que reetiquetar una persona, y en qué dirección se equivoca el sistema.
- **El coste asimétrico del error.** Un pedido archivado como ruido cuesta una venta; un boletín que llega a la bandeja cuesta tres segundos. La muestra tiene que mirar mucho más de cerca el primer caso.
- **El tiempo hasta la primera acción.** Cuánto tarda un correo comercial en tener responsable, no cuánto tarda en procesarse.
- **El tamaño y la antigüedad de la cola de revisión.** Una cola de dos horas es sana; una de dos días es un clasificador mal ajustado o una plantilla de equipo insuficiente.

Lo que no sirve como medida es la confianza que devuelve el modelo. Un 0,91 de confianza no es un 91 % de acierto comprobado, y presentarlo así es la forma más rápida de perder la confianza del equipo que revisa. El caso de ICIGA tampoco publica una tasa de precisión de clasificación: sabemos qué parte del correo se clasifica y se registra sola y cuánto tarda, pero para dar la precisión habría que revisar a mano una muestra y compararla.

## Cuándo no merece la pena clasificar automáticamente

Hay tres situaciones en las que el clasificador añade superficie de error sin devolver tiempo:

- **Poco volumen y un solo destino.** Si entran veinte correos al día y todos van a la misma persona, la bandeja compartida y dos filtros resuelven el problema.
- **Cada correo es distinto.** Si no hay tipos que se repitan, no hay categorías que aprender, y el tiempo se va en mantener el sistema en vez de en trabajar.
- **Nadie va a vaciar la cola.** Sin una persona con nombre detrás de las excepciones, el sistema se convierte en una máquina de generar trabajo pendiente.

Y una cuarta, que es de diseño y no de volumen: si el equipo no puede decir qué es un caso normal y qué es una excepción, lo que falta no es un clasificador, es la definición del proceso.

## Cómo quedó montado en un buzón real

El flujo de ICIGA lee los cuatro buzones en tiempo real, aparta el ruido, clasifica cada correo por tipo de solicitud, tipo de cliente y urgencia, consulta el catálogo y el ERP y deja preparada una propuesta de respuesta. En paralelo crea el registro de la operación y mueve su estado en el CRM a medida que el hilo avanza. Entran unos 50 correos al día, con picos de más de 100, y el 28,9 % llega fuera de horario, así que la cola se atiende por la mañana con el trabajo ya separado.

El mecanismo completo, con lo que se mide y lo que no, está en el [caso de correo a CRM de ICIGA](https://osix.tech/casos/iciga-correo-crm/). Si lo que buscas es el paso siguiente, convertir esos correos ya clasificados en registros del CRM, está desarrollado en [cómo pasar de una bandeja compartida a un CRM sin copiar correos](https://osix.tech/guias/bandeja-compartida-crm-sin-copiar-correos/). Y si el problema es redactar la respuesta sin perder el control, en [cómo preparar respuestas desde correos y adjuntos manteniendo la revisión humana](https://osix.tech/guias/preparar-respuestas-correos-revision-humana/) está el diseño de la revisión.

## Preguntas frecuentes

### ¿Cuántas categorías conviene crear?

Pocas, y sacadas del buzón. La mayoría de los negocios se ordena con cuatro o cinco: solicitud comercial, pedido, factura, incidencia y lo que no requiere acción. Una categoría se justifica si cambia quién atiende el correo o qué pasa después. Si dos categorías llevan a la misma persona y a la misma acción, sobra una.

### ¿Reglas o inteligencia artificial?

Las dos, cada una para lo suyo. Las reglas resuelven lo previsible y lo explican, así que se pueden auditar: remitente conocido, asunto estable, adjunto de un tipo concreto. El clasificador entra donde el contenido varía y la regla no llega: un cliente que cuenta su problema con sus palabras. Empezar por reglas también reduce lo que hay que revisar cuando la IA se equivoca.

### ¿Qué pasa si un correo importante se clasifica mal?

Se ve en la cola de revisión y en el muestreo del ruido, y se corrige con una regla o un caso de prueba. El diseño tiene que asumir que va a pasar. Por eso la zona de ruido no borra nada, la clasificación se hereda dentro del hilo y cada corrección se guarda con su texto real para probar la siguiente versión.

### ¿Se puede hacer sin cambiar de programa de correo?

Sí. El flujo trabaja sobre los buzones que la empresa ya usa, en este caso cuatro cuentas de Gmail, y consulta el catálogo y el ERP existentes. Lo que cambia es dónde se decide el destino del correo, no la herramienta con la que se lee.

### ¿Cómo se clasifican los adjuntos?

Como parte del mensaje y no como un añadido. Primero se identifica qué trae (PDF, imagen, hoja de cálculo, varios documentos) y después se leen los campos que necesita el siguiente paso: referencias, cantidades, fechas, importes. Si un adjunto no se puede leer, se detiene y va a revisión con el fichero original; no se completa el hueco con el dato más probable.

### ¿Cuánto tarda en montarse?

Depende del número de buzones, de los tipos de correo y de si hay que cruzar catálogo o ERP. Por eso no publicamos un plazo de partida. Se empieza por un buzón y un tipo de correo frecuente, con una muestra real que incluya reenvíos, adjuntos y mensajes ambiguos, y se amplía cuando la muestra se comporta.

## Metodología y transparencia

Esta guía la publica OSIX Tech, consultora de desarrollo de software e inteligencia artificial en Santiago de Compostela que construye flujos de correo y CRM a medida para pymes. El orden que propone (ruido, categorías por acción, reglas antes que IA, cola de revisión, adjuntos, medición) sale del flujo que mantenemos en producción para ICIGA desde febrero de 2026, cuyas cifras están en la página del caso con su ventana de medición y sus límites. Las afirmaciones sobre filtros de Gmail y reglas de Outlook se comprobaron en la documentación oficial de cada plataforma en octubre de 2026. Lo que esta guía no publica: una tasa de precisión de clasificación y horas ahorradas. Ninguna de las dos está medida en ese proyecto, y por eso no aparecen.

- [Crear reglas para filtrar tus correos, Ayuda de Gmail](https://support.google.com/mail/answer/6579?hl=es)
- [Administrar mensajes mediante reglas en Outlook, Microsoft Support](https://support.microsoft.com/es-es/outlook/mail/manage-email-messages-by-using-rules-in-outlook)
