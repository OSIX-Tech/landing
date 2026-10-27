---
title: "Automatización de correo y CRM"
shortTitle: "Correo y CRM"
tagline: "Clasifica el correo, prepara la respuesta y registra la operación sin salir de los buzones que ya usas."
summary: "Clasificación del correo de ventas, pedidos e incidencias, propuesta de respuesta preparada y registro automático de la operación en el CRM. En ICIGA lleva en producción desde febrero de 2026, con más de 8.000 correos trazados y una mediana de 29 segundos hasta la propuesta."
description: "Sí, se puede clasificar el correo de ventas, pedidos e incidencias y preparar la respuesta sin quitar la revisión humana. OSIX conecta los buzones que ya usas y registra cada operación en el CRM sin copiar correos a mano."
seoTitle: "Automatización de correo y CRM para pymes | OSIX Tech"
order: 5
icon: "mail"
serviceType: "Email Workflow Automation"
updated: "2026-10-26"
problem:
  title: "El correo comercial entra mezclado y alguien lo reparte a mano"
  body: "Los pedidos, presupuestos, facturas e incidencias de una empresa llegan al mismo buzón que el spam y las ofertas de proveedores. En ICIGA, el 62,2 % de lo que entraba no era trabajo, y lo demás había que abrirlo, entenderlo, reenviarlo y copiarlo al CRM."
solution:
  title: "El flujo entra donde ya entran los correos"
  body: "Leemos los buzones que el equipo ya usa, apartamos el ruido, clasificamos cada correo por tipo, cliente y urgencia, y dejamos la propuesta de respuesta preparada con los datos del adjunto, del catálogo y del ERP. La operación se registra en el CRM desde el hilo, sin que nadie la teclee."
highlightsTitle: "Lo que el flujo hace sin que nadie copie un correo"
highlights:
  - "Correo de ventas, pedidos, facturas e incidencias clasificado por tipo, cliente y urgencia"
  - "Ruido apartado antes de llegar a la bandeja de trabajo: el 62,2 % del volumen en producción"
  - "Propuesta de respuesta preparada con los datos del adjunto, del catálogo y del ERP"
  - "Operación y estado del pipeline registrados en el CRM desde el hilo"
  - "Lo que el sistema no puede leer o comprobar se detiene y va a revisión con el motivo"
stats:
  - value: "29 s"
    label: "mediana de correo a propuesta lista"
  - value: "99,5 %"
    label: "de los correos comerciales con propuesta"
  - value: "62,2 %"
    label: "del correo entrante era ruido"
  - value: "+8.000"
    label: "correos trazados en el CRM"
faqs:
  - question: "¿El sistema envía las respuestas a los clientes por su cuenta?"
    answer: "No. Prepara una propuesta de respuesta y una persona decide qué se envía. En la implantación que publicamos el envío asistido está construido, pero el equipo no lo usa, y por eso no damos cifras de respuestas enviadas ni de tiempo de respuesta al cliente."
  - question: "¿Hay que cambiar de correo o de CRM?"
    answer: "No. El flujo trabaja sobre los buzones que la empresa ya utiliza, en este caso cuatro cuentas de Gmail, y consulta el catálogo y el ERP existentes. El registro se construye a partir de los propios hilos de correo."
  - question: "¿Cómo se clasifican los correos y qué pasa con los que el sistema no entiende?"
    answer: "Primero se aparta el ruido con reglas comprobables: remitentes conocidos, boletines, ofertas de proveedores. Después se clasifica por tipo de solicitud, tipo de cliente y urgencia, consultando el adjunto cuando hace falta. Lo que no encaja no se archiva: se queda en una cola de revisión con el motivo escrito y la atiende una persona cada día."
  - question: "¿Qué pasa con los adjuntos?"
    answer: "Se leen como parte del correo, no como un extra. En el caso publicado entran más de mil adjuntos al mes entre PDF, imágenes y hojas de cálculo, y el 0,4 % no se puede leer. Esos se detienen y llegan a revisión con el fichero original, en vez de completar el dato que falta."
  - question: "¿Cuánto tarda en llegar al CRM una operación nueva?"
    answer: "En el caso publicado, la mediana desde que el correo se recibe hasta que hay una propuesta preparada es de 29 segundos, y el 99,3 % está listo en menos de cinco minutos. El registro de la operación y el cambio de estado ocurren en ese mismo flujo."
  - question: "¿Qué cuesta y cuánto tarda en montarse?"
    answer: "Depende de cuántos buzones haya, de cuántos tipos de correo se quieran cubrir y de qué sistemas haya que consultar. No publicamos un precio de partida. Trabajamos por fases: primero un buzón y un tipo de correo en un piloto medible, y solo después el resto."
guides:
  - "clasificar-correos-ventas-pedidos-incidencias"
  - "preparar-respuestas-correos-revision-humana"
  - "bandeja-compartida-crm-sin-copiar-correos"
  - "automatizar-ofertas-presupuestos-correo-pyme"
---

> **Prueba en producción:** En ICIGA el flujo lleva desde el 9 de febrero de 2026 leyendo cuatro buzones de Gmail. Ha trazado **más de 8.000 correos**, ha creado **casi 5.000 operaciones** y ha hecho de forma automática el **100 %** de los cambios de estado del pipeline. La mediana desde el correo recibido hasta la propuesta preparada es de **29 segundos** y el **99,3 %** está listo en menos de cinco minutos. El sistema no envía respuestas: prepara la propuesta y una persona decide. [Ver el caso de ICIGA](https://osix.tech/casos/iciga-correo-crm/).

## El correo comercial entra mezclado y alguien lo reparte a mano

En ICIGA los pedidos, presupuestos, facturas, incidencias y pagos llegan por cuatro buzones de Gmail, mezclados con todo lo demás que entra en una bandeja de empresa. La mayor parte de ese volumen no es trabajo: el **62,2 %** es spam, correo no comercial u ofertas de proveedores. Lo que queda son solicitudes reales que hay que abrir, entender, cruzar con el catálogo y el ERP, contestar y dejar registradas.

Ese reparto manual tiene dos costes. El primero es el tiempo: alguien abre correos para decidir de quién son. El segundo es peor, porque no se ve: un pedido que se queda dos horas sin dueño, una incidencia que se contesta tarde, un cliente que escribe por segunda vez porque nadie respondió a la primera.

## El flujo entra donde ya entran los correos

El servicio no pide cambiar de correo ni de CRM. Se coloca entre el buzón que el equipo ya usa y el registro que necesita el negocio:

1. **Lee los buzones compartidos** que reciben trabajo operativo, no las cuentas personales.
2. **Aparta el ruido** con reglas comprobables: remitentes conocidos, boletines, ofertas de proveedores. Nada se borra; lo archivado se muestrea para recuperar lo que se colase.
3. **Clasifica por tipo, cliente y urgencia**, con el adjunto dentro del análisis cuando el contenido está en el documento.
4. **Consulta el catálogo y el ERP** y prepara una propuesta de respuesta con los datos del pedido o de la consulta.
5. **Registra la operación** en el CRM desde el hilo de correo y mueve su estado en el pipeline a medida que la conversación avanza.
6. **Detiene lo que no puede comprobar** y lo manda a una cola de revisión con el motivo y el fichero original.

El resultado no es una aplicación más que hay que abrir. Es que el correo llega ya separado, con la respuesta empezada y con la operación registrada.

## La clasificación se prueba contra correos reales, no contra la teoría

La parte que se suele subestimar es la lista de categorías. No se diseña en una reunión: se saca de agrupar a mano un centenar de correos del buzón. La lista que sale es más corta de lo que parece, y casi siempre incluye una categoría que nadie había previsto.

Después se decide qué pasa con lo ambiguo. En este flujo, lo que el sistema no entiende no se etiqueta y se archiva: se queda en una cola con el motivo escrito, que una persona atiende cada día. Cada correo que se reetiqueta se guarda como caso de prueba, con su texto real, para que la siguiente versión no falle en el mismo sitio. El criterio completo está en [cómo clasificar automáticamente los correos de ventas, pedidos e incidencias](https://osix.tech/guias/clasificar-correos-ventas-pedidos-incidencias/).

## Lo que este flujo no hace

Lo escribimos porque es lo primero que debería preguntar quien contrata esto:

- **No envía respuestas a los clientes por su cuenta.** Prepara la propuesta y una persona decide. El envío asistido existe en el sistema que publicamos, pero el equipo decidió no usarlo.
- **No publica una tasa de precisión de clasificación.** Sabemos qué parte del correo se clasifica y se registra sola y cuánto tarda; para dar la precisión habría que revisar a mano una muestra y compararla.
- **No publica horas ahorradas.** Sabemos cuánto tarda el flujo en dejar el siguiente paso listo; no cuántos minutos costaba hacerlo a mano en esa empresa antes de empezar.
- **No garantiza el mismo resultado en otra empresa sin probar.** Los buzones, los tipos de correo y los sistemas de destino cambian de un negocio a otro.

## Se empieza con un buzón y un tipo de correo

El piloto coge una dirección compartida y un tipo de correo frecuente, por ejemplo los pedidos que llegan por correo. Se define qué campos hacen falta, qué bloquea el flujo, quién atiende la revisión y qué se mide. Con una muestra que incluya reenvíos, hilos largos, adjuntos ilegibles y mensajes ambiguos, el piloto dice en semanas si el flujo aguanta; si no aguanta, se sabe antes de tocar el resto del correo.

Si el problema aparece después de clasificar, en la respuesta, el diseño de la revisión está en [cómo preparar respuestas desde correos y adjuntos manteniendo la revisión humana](https://osix.tech/guias/preparar-respuestas-correos-revision-humana/). Y si lo que falta es convertir el correo en trabajo asignado dentro del CRM, está en [cómo pasar de una bandeja compartida a un CRM sin copiar correos](https://osix.tech/guias/bandeja-compartida-crm-sin-copiar-correos/).

## Tus clientes escriben como escriben

La objeción que aparece siempre es la misma: mis correos no se parecen a los de un caso de ejemplo. Por eso el flujo se prueba con los correos reales de tus clientes, con sus asuntos cambiantes, sus PDF torcidos y sus hilos que empiezan por teléfono. En ICIGA el sistema lleva más de 8.000 correos con esa misma mezcla.

Cuéntanos cuántos correos entran al día, por cuántos buzones y qué tiene que pasar con cada tipo, y te decimos si el flujo encaja con tu caso.
