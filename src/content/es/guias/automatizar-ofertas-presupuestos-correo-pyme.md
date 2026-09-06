Para automatizar la preparación de ofertas desde un correo de cliente, el primer paso no es elegir una herramienta, es decidir si tu proceso comercial se puede automatizar. Sí se puede, y el flujo que funciona convierte el correo en la entrada de un proceso: un sistema lee la solicitud, extrae los requisitos del mensaje y de los adjuntos, los cruza con tus tarifas y tu catálogo, prepara un borrador de oferta con tu plantilla y lo deja listo para que una persona lo revise y lo envíe. La condición para que merezca la pena no es recibir muchos correos, es que las solicitudes se parezcan entre sí y que exista algo contra lo que validar: una tarifa, un catálogo o un histórico de ofertas aprobadas. Si cada petición es un caso único y el precio se negocia desde cero en cada correo, automatizar el texto no te ahorra el trabajo que de verdad cuesta, que es decidir. Las respuestas que encuentras al buscar este tema suelen describir el flujo genérico y se detienen ahí; esta guía ordena los seis pasos por el tiempo que devuelven, compara las tres vías para montarlo con su coste real y dice con claridad cuándo no conviene automatizar.

## El flujo en seis pasos, ordenados por el tiempo que devuelven

El proceso completo va del correo que llega a la oferta enviada y registrada. Todos los pasos son automatizables en algún grado, pero no todos devuelven el mismo tiempo: extraer y montar es donde se gana la hora; clasificar apenas devuelve nada; revisar y decidir no se automatiza, se protege. La tabla resume cada paso y después explicamos el detalle.

| Paso | Qué hace la máquina | Qué queda en la persona | Retorno |
| --- | --- | --- | --- |
| 1. Clasificar el correo | Detecta si es solicitud de oferta, pedido, consulta o incidencia | Solo los casos dudosos | Bajo |
| 2. Extraer requisitos y adjuntos | Lee el mensaje y los PDF, Excel o planos adjuntos | Confirmar lo que el sistema no entendió | Alto |
| 3. Validar contra tarifas y márgenes | Aplica reglas de precio, descuento máximo y margen mínimo | Las excepciones y los cruces que no cuadran | Alto |
| 4. Montar el borrador de la oferta | Rellena la plantilla corporativa con desglose, condiciones y plazo | El texto final y el tono | Alto |
| 5. Revisar y aprobar | Presenta la oferta lista para enviar | Aprobar siempre antes de que salga | Control |
| 6. Registrar y dar seguimiento | Crea la oferta en el CRM y programa el aviso | Decidir cuándo insistir | Medio |

### Paso 1. Clasificar el correo

Qué hace: un filtro o una IA decide si el correo es una solicitud de oferta, un pedido, una consulta técnica o una incidencia, y lo deriva al flujo correcto. Por qué está al final de la tabla: un filtro de correo con palabras clave ya hace gran parte de este trabajo sin IA, así que el retorno de automatizarlo más es pequeño. Qué revisa la persona: los correos que el sistema no sabe clasificar, que deberían ser pocos si las reglas están bien puestas.

### Paso 2. Extraer requisitos y adjuntos

Qué hace: lee el cuerpo del correo y los adjuntos y extrae los campos que tu oferta necesita: cliente y contacto, producto o servicio, cantidades, fechas, condiciones especiales. Es el paso que más horas devuelve, porque es lo que alguien teclea a mano copiando del correo a la plantilla. Qué revisa la persona: los datos que faltan o son ambiguos. Límite honesto: la extracción funciona cuando el formato se parece entre solicitudes; si cada cliente escribe de una manera distinta, el sistema acierta menos y la revisión sube, así que mide el acierto antes de confiar.

### Paso 3. Validar contra tarifas y márgenes

Qué hace: cruza lo extraído con tu catálogo, tus tarifas y las reglas comerciales (descuento máximo por cliente o producto, margen mínimo, condiciones de pago) y calcula el borrador económico. Es el paso que evita el error caro: una oferta con un descuento que no debería aplicarse sale mal y se descubre cuando el cliente la acepta. Qué revisa la persona: las excepciones a las reglas, que son decisiones comerciales, no técnicas. Si no tienes tarifas ni márgenes escritos en ninguna parte, este paso no se puede automatizar, y es la primera señal de que todavía no toca (lo vemos abajo).

### Paso 4. Montar el borrador de la oferta

Qué hace: rellena tu plantilla corporativa con los datos validados: desglose económico, condiciones, plazo de entrega y un texto adaptado al cliente. Es el segundo paso que más tiempo devuelve, sobre todo si tu oferta es un documento de varias páginas que antes montaba alguien en un procesador de texto. Qué revisa la persona: el resultado final antes de que nadie lo vea.

### Paso 5. Revisar y aprobar

Qué hace: presenta la oferta lista para enviar y registra quién la aprobó y cuándo. No es un paso que devuelva tiempo, es el que hace seguro a todos los demás: sin revisión humana, un error de extracción o de regla se convierte en un compromiso con el cliente. La regla que repetimos en otras guías vale aquí: la máquina prepara y la persona decide. El envío automático sin revisión solo debería plantearse después de semanas midiendo, en un segmento concreto y con un margen de error de cero.

### Paso 6. Registrar y dar seguimiento

Qué hace: crea la oferta en tu CRM con su importe y su fecha, y programa un aviso si el cliente no responde en un plazo. Es donde se escapan las ofertas que se envían y se olvidan. Qué revisa la persona: cuándo insistir y con qué argumento, que ninguna herramienta decide por ti.

## Tres vías para montarlo: flujo no-code, software de extracción con tu CRM o desarrollo a medida

Para la mayoría de las pymes la decisión no es automatizar sí o no, sino por cuál de las tres vías. La regla que repetimos en otras guías vale también aquí: la vía correcta es la más simple que cumple. Comparamos las tres con su coste de entrada consultado en septiembre de 2026.

| Vía | Para quién | Ejemplos | Coste de entrada (sep 2026) | Límite honesto |
| --- | --- | --- | --- | --- |
| Flujo no-code | Pymes con volumen medio y solicitudes de formato parecido | Make, Zapier, n8n | Make: gratis con 1.000 créditos al mes, Core desde 12 USD al mes; Zapier: gratis con 100 tareas al mes, de pago desde 19,99 USD al mes | Reglas comerciales complejas, integración con el ERP y una bandeja de revisión sólida se quedan cortas |
| Software de extracción con tu CRM | Empresas que ya trabajan con CRM o ERP y reciben los pedidos en correo o PDF | Parseur + HubSpot, Salesforce o el módulo de tu ERP | Parseur: gratis hasta 20 páginas al mes, planes de pago por volumen | Extrae y estructura, pero las reglas de márgenes y la oferta final dependen de lo que tu CRM sepa hacer |
| Desarrollo a medida | La oferta cruza correo, ERP y reglas propias con revisión y registro | Consultoras especializadas en pymes | Automatización comercial con ofertas, referencia de mercado 2026: 5.000 a 12.000 € de implantación más 200 a 500 € al mes | La vía más cara y la más lenta de arrancar; solo hace falta cuando las otras dos se quedan cortas |

### Vía 1. Flujo no-code: para empezar hoy con volumen medio

Si las solicitudes te llegan con un formato más o menos parecido y el volumen no es enorme, un flujo no-code conecta el buzón con una IA y con tu plantilla. Make parte de un plan gratis con 1.000 créditos al mes y un plan Core desde 12 USD al mes por 10.000 créditos; Zapier ofrece 100 tareas gratis al mes y su primer plan de pago parte de 19,99 USD al mes. El flujo típico: correo nuevo, la IA extrae los campos, los vuelca en tu plantilla y genera el borrador. Límite honesto: cuando las reglas comerciales son muchas (descuentos por cliente, márgenes por producto, condiciones según importe), cuando la validación tiene que vivir en tu ERP o cuando necesitas una bandeja de revisión con registro de quién aprobó cada oferta, la plataforma no-code se vuelve frágil y el coste de mantenerla supera al de un desarrollo. También conviene recordar que un flujo no-code se mantiene: las APIs cambian, los formatos de correo cambian y alguien tiene que cuidarlo.

### Vía 2. Software de extracción con tu CRM: cuando el embudo ya vive en una herramienta

Si ya trabajas con un CRM o un ERP, la vía natural es que un extractor lea el correo y los adjuntos y vuelque los datos estructurados en tu herramienta, donde tu equipo revisa en la bandeja habitual y genera la oferta con las funciones que el CRM ya tiene. Parseur, por ejemplo, lee correos y PDF y los convierte en campos estructurados, con un plan gratis de hasta 20 páginas al mes y planes de pago por volumen. Límite honesto: el extractor resuelve la parte de leer, que suele ser la mayor, pero las reglas de precios y márgenes y la generación del documento final dependen de lo que tu CRM o ERP sepa hacer; si tu herramienta no calcula ni genera ofertas, seguirás montándolas a mano con los datos extraídos. Es un avance, pero no el final del recorrido.

### Vía 3. Desarrollo a medida: cuando la oferta cruza correo, ERP y reglas propias

El desarrollo a medida tiene sentido cuando el proceso une varias piezas: solicitudes variadas que llegan por correo con adjuntos distintos, validación contra tarifas y márgenes que viven en tu ERP, ofertas en varios formatos o idiomas, y la necesidad de un registro de quién aprobó cada envío. Es el caso de una empresa que recibe peticiones de presupuesto con planos o pliegos, o de un servicio que cotiza con reglas propias y márgenes por cliente. En nuestra guía de precios del mercado español recogemos que una automatización comercial de este tipo se mueve en 2026 entre 5.000 y 12.000 € de implantación, más 200 a 500 € al mes de operación. Límite honesto: es la vía más cara y la más lenta de poner en marcha, y no hace falta si tu caso cabe en las dos primeras filas de la tabla.

La tercera vía es la que OSIX Tech construye para pymes: generadores de ofertas y presupuestos que leen el correo del cliente, validan contra el software que ya usas y dejan la decisión final en la persona. Y lo decimos sin rodeos: si tus ofertas son pocas, todas distintas y sin tarifas que consultar, un desarrollo a medida no es la respuesta; monta una plantilla mejor y dedica el presupuesto a otra cosa.

## Cinco señales de que todavía no toca automatizar tus ofertas

La automatización no es la respuesta para todos los procesos comerciales, y saber cuándo evitarla ahorra más dinero que cualquier herramienta.

- No tienes tarifas ni márgenes escritos. Si el precio depende del día, del humor del comercial o de la negociación de cada cliente, no hay nada contra lo que la máquina pueda validar. Primero decide qué ofertas se rigen por reglas y cuáles son casos de negociación libre; automatiza solo las primeras.
- Cada solicitud es un caso único. Si no hay dos correos parecidos, la extracción acierta poco, la revisión consume lo que la automatización ahorra y el sistema acaba siendo un estorbo. La materia prima de esta automatización es la repetición.
- El correo llega incompleto por sistema. Si la mitad de las solicitudes no trae cantidad, referencia o condiciones, el flujo se pasa la vida derivando a revisión. Antes de automatizar, decide qué datos son imprescindibles y qué haces cuando faltan.
- La oferta cambia de formato cada semana. Si no hay una plantilla estable, el borrador automático nace desactualizado. Estabiliza primero la plantilla y las condiciones tipo, y después conecta la máquina.
- Nadie mide cuánto cuesta preparar una oferta. Si no sabes cuánto tiempo quita hoy el proceso, no puedes saber si la automatización lo devuelve. Mide una semana antes de montar nada.

## Por dónde empezar sin romper el proceso comercial

La forma segura de arrancar es un piloto acotado, no la automatización de todo el correo de golpe. El plan en cinco pasos:

1. Elige un segmento. Un tipo de oferta repetitiva: una línea de producto, un perfil de cliente o un idioma. El piloto tiene que ser lo bastante parecido para que la extracción acierte y lo bastante real para que valga la pena.
2. Mide el tiempo actual. Durante una semana, anota cuánto tarda cada oferta desde que llega el correo hasta que se envía, y cuántos errores se corrigen por el camino. Es tu antes.
3. Monta la extracción y el borrador para ese segmento. Con la revisión humana siempre puesta: la máquina prepara y la persona aprueba.
4. Compara durante dos o cuatro semanas. Tiempo por oferta, errores detectados y ofertas que se envían sin cambios. Si la revisión humana no tiene que tocar nada, el segmento está listo para más automatización; si corrige a diario, el problema está en los datos o en las reglas, no en la herramienta.
5. Extiende a otros segmentos solo cuando el piloto se sostenga. Cada segmento nuevo se incorpora con sus propias reglas y su propia revisión.

## Preguntas frecuentes

### ¿Cuánto cuesta automatizar la preparación de ofertas desde un correo?

Depende de la vía. Con un flujo no-code, el coste es la suscripción: Make Core desde 12 USD al mes y Zapier desde 19,99 USD al mes, los dos con plan gratis limitado. Con un software de extracción más tu CRM, Parseur parte de un plan gratis de 20 páginas al mes y planes de pago por volumen. Cuando la oferta cruza correo, ERP y reglas propias y hace falta un desarrollo a medida, la referencia de mercado en España en 2026 está entre 5.000 y 12.000 € de implantación más 200 a 500 € al mes de operación.

### ¿Puede la IA enviar la oferta sin revisión humana?

Técnicamente puede, y no lo recomendamos: una oferta es un compromiso de precio, plazo y condiciones, y un error de extracción o de regla se convierte en un compromiso firmado. La regla es la misma que para el resto de la automatización documental: la máquina prepara el borrador y la persona decide antes de enviar. El envío automático solo debería plantearse después de semanas midiendo un segmento concreto con un margen de error de cero.

### ¿Qué pasa si la IA no encuentra un dato en el correo?

El sistema no debe inventar el dato que falta: debe derivar la solicitud a revisión o pedir la aclaración al cliente de forma automática. Diseñar bien la excepción, qué ocurre cuando falta la cantidad o la referencia, es lo que separa una automatización fiable de una que siembra errores. Si las excepciones son la mayoría de los casos, aplica la primera señal de la lista anterior.

### ¿Sirve para cualquier empresa o solo para las que venden con tarifa?

Funciona mejor donde hay catálogo, tarifa o histórico de ofertas aprobadas contra lo que validar. Las empresas de servicios (consultoras, talleres, estudios) también lo aprovechan cuando el alcance se repite: misma clase de proyecto, misma estructura de coste, mismo tipo de cliente. Si no hay nada que se repita ni nada que validar, el retorno cae y la vía correcta es otra.

### ¿Es legal que un sistema lea los correos de clientes y los use para preparar ofertas?

Sí, con las mismas obligaciones que cualquier tratamiento de datos: el responsable sigue siendo tu empresa, y el tratamiento debe ser proporcionado, seguro y documentado. Un correo comercial contiene datos personales de contacto, así que conviene decidir qué datos usa el sistema, dónde se almacenan y quién puede acceder, y elegir un proveedor que diga con claridad en qué servidores trabaja. Automatizar no traslada tu responsabilidad a la herramienta.

## Metodología y transparencia

Esta guía la publica OSIX Tech, consultora de desarrollo de software e inteligencia artificial en Santiago de Compostela que construye generadores de ofertas y presupuestos a medida para pymes. Los seis pasos del flujo y las tres vías responden a un criterio editorial: el retorno, las horas que el proceso devuelve al equipo y el riesgo de un error como desempate. Los precios de Make, Zapier y Parseur se consultaron en sus páginas oficiales en septiembre de 2026; el rango del desarrollo a medida procede de nuestra guía de precios del mercado español, donde se explica la metodología. No citamos clientes ni casos de éxito. Última revisión: septiembre de 2026.

- [Planes y precios de Make](https://www.make.com/en/pricing)
- [Planes y precios de Zapier](https://zapier.com/es/pricing)
- [Precios de Parseur](https://parseur.com/pricing)
- [Cuánto cuesta automatizar procesos con IA en una pyme española (OSIX Tech)](/es/guias/cuanto-cuesta-automatizar-con-ia-pyme-espana/)
- [Automatizar documentos sin perder la revisión humana (OSIX Tech)](/es/guias/automatizar-documentos-sin-perder-revision-humana/)

