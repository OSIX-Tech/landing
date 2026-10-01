---
title: "Qué información preparar antes de encargar una aplicación de negocio"
seoTitle: "Qué información preparar antes de encargar una aplicación de negocio - OSIX Tech"
description: "Qué preparar antes de pedir propuestas para una aplicación de negocio: proceso, usuarios, datos, excepciones, primera versión, costes y condiciones de salida."
subtitle: "El brief práctico para explicar el proceso, comparar propuestas y conservar el control del proyecto."
summary: "El brief para explicar el proceso, comparar propuestas y conservar el control del proyecto"
category: "Software a medida"
section: "software-y-contratos"
published: "2026-09-30"
related:
  - "como-elegir-empresa-desarrollo-software-ia-espana"
  - "quien-es-dueno-codigo-fuente-software-encargo"
  - "trabajar-con-consultora-ia-sin-perder-control"
---

Antes de pedir propuestas para una aplicación de negocio, prepara un brief que describa el resultado que buscas, el proceso actual, las personas que lo usarán, los datos y sistemas implicados, las excepciones, la primera versión y la forma de medirla. No necesitas decidir el lenguaje de programación ni redactar una especificación técnica completa. Sí necesitas dejar claras las reglas del negocio, los límites del proyecto y las preguntas que todavía están abiertas.

Un documento así permite que varios proveedores respondan al mismo problema. Sin él, cada empresa puede interpretar de forma distinta qué significa “una aplicación completa” y los presupuestos dejan de ser comparables.

> OSIX Tech publica esta guía y también desarrolla software a medida para pymes. No es un comparador independiente. Las preguntas se pueden aplicar a OSIX y a cualquier otro proveedor.

## El resultado debe aparecer antes que las pantallas

Empieza por una frase que explique qué debería mejorar la aplicación. Añade cómo se trabaja hoy y qué cambiaría si el proyecto funciona.

Un objetivo como “queremos una app moderna para gestionar pedidos” es demasiado abierto. Una descripción más útil sería: “Hoy recibimos pedidos por correo y los copiamos a una hoja de cálculo. Queremos que el equipo pueda registrar cada pedido, ver qué falta y evitar que se procese dos veces”.

Incluye estas respuestas:

- Qué problema existe hoy.
- Quién lo sufre y con qué frecuencia.
- Qué resultado quieres mejorar: tiempo, errores, ventas, trazabilidad, capacidad de respuesta u otro.
- Cómo se mide actualmente, aunque sea con una estimación.
- Qué queda fuera de esta primera versión.

La aplicación debe ser una respuesta a un proceso concreto. Si todavía no puedes explicar qué cambia en el trabajo diario, aún no tienes definido el encargo.

## El proceso actual revela el trabajo que no aparece en una lista de funciones

Describe el flujo desde que ocurre el primer evento hasta que alguien considera terminado el trabajo. Indica quién actúa, qué información utiliza, qué sistema consulta y qué decisión toma en cada paso.

Añade ejemplos reales y anonimizados: un pedido normal, un documento incompleto, una devolución, una aprobación rechazada o cualquier otro caso que obligue al equipo a salirse del camino habitual. Los casos límite suelen cambiar más el alcance que una pantalla adicional.

Como mínimo, documenta:

- Qué inicia el proceso.
- Qué pasos sigue hoy el equipo.
- Qué documentos, correos, formularios o archivos intervienen.
- Qué sistemas se consultan o actualizan.
- Dónde se repite trabajo o se cometen errores.
- Qué decisiones requieren criterio de una persona.
- Qué ocurre cuando falta información o una herramienta no responde.

Describe las funciones como acciones, reglas y resultados visibles. “Integrar el ERP” no basta. “Cuando se confirma un pedido, la aplicación consulta el stock del ERP y muestra el motivo si no puede reservarlo” permite hablar de alcance, datos y pruebas.

## Los usuarios necesitan roles y permisos, no solo nombres

Haz una lista de las personas que utilizarán la aplicación y separa sus responsabilidades. Un administrador, una persona de operaciones, un comercial y un cliente no deberían tener necesariamente la misma capacidad para ver, editar, aprobar o exportar información.

Para cada rol, indica:

- Qué puede consultar.
- Qué puede crear o modificar.
- Qué necesita aprobar otra persona.
- Qué información no debe ver.
- Qué informes o exportaciones puede obtener.
- Qué ocurre con sus registros cuando deja el equipo.

Si la aplicación será pública, describe también los perfiles de usuario, el registro, la recuperación de cuenta y los casos de abuso o bloqueo que el proveedor debe contemplar.

## Los datos y las integraciones deben estar sobre la mesa desde el principio

Enumera qué información entrará en la aplicación, de dónde procede y qué debe ocurrir con ella. No basta con decir “datos de clientes” o “documentos”. Indica formatos, campos imprescindibles, volumen aproximado y operaciones previstas.

Incluye, si aplica:

- Clientes, proveedores, productos, pedidos o facturas.
- Documentos, fotografías, audios o mensajes.
- Datos personales, financieros, confidenciales o regulados.
- Importaciones y exportaciones desde Excel, CSV u otros formatos.
- ERP, CRM, contabilidad, correo, almacenamiento, mapas o pasarelas de pago.
- APIs disponibles, límites conocidos y cuentas que administran terceros.
- Quién será responsable de cada cuenta, dominio, servidor y credencial.

También indica el tamaño del problema: número de usuarios, operaciones diarias o mensuales, documentos procesados y crecimiento esperado. No hace falta acertar al decimal. Una estimación explícita es mejor que ocultar el supuesto hasta que llegue el presupuesto.

## Las excepciones deben tener una respuesta concreta

Una aplicación de negocio no solo debe describir el camino correcto. Debe decir qué hará cuando falte un dato, una integración falle, el resultado sea dudoso o una persona discrepe.

Prepara una lista de casos que el sistema debe detener, marcar o enviar a revisión. Define qué decisiones nunca debe tomar sin aprobación y qué actividad debe quedar registrada.

Por ejemplo:

- Si falta un campo obligatorio, el sistema detiene el flujo y explica qué falta.
- Si un documento no permite extraer un dato con seguridad suficiente, lo envía a revisión.
- Si una persona corrige un resultado automático, se conserva el valor anterior y quién hizo el cambio.
- Si un servicio externo no responde, queda constancia del error y existe una forma de reintentar.

Estas reglas son especialmente importantes cuando el proyecto usa inteligencia artificial. Una promesa de precisión no sustituye un control para detectar errores.

## Define una primera versión que se pueda aceptar o rechazar

Separa lo imprescindible de lo deseable. La primera versión no tiene que incluir todas las ideas futuras, pero sí debe resolver un flujo completo y medible.

Para cada función prioritaria, escribe:

- Qué puede hacer la persona usuaria.
- Qué reglas debe respetar el sistema.
- Qué pasa si la operación es válida.
- Qué pasa si falla.
- Cómo se comprobará que está terminada.

Un criterio de aceptación debe poder comprobarse. “Gestión avanzada de pedidos” no lo es. “Una persona autorizada puede importar un archivo, ver las filas rechazadas con su motivo y confirmar las válidas sin crear duplicados al repetir la carga” sí permite preparar una prueba.

Define también una métrica de partida, un resultado mínimo para continuar y un criterio para corregir, ampliar o parar. Puede ser el tiempo por operación, la tasa de errores, el número de revisiones manuales o cualquier medida que conecte con el problema inicial.

## Comprueba si necesitas construir antes de pedir que construyan

Antes de encargar software propio, pide que se valore una herramienta estándar, una configuración o una integración. El desarrollo a medida tiene sentido cuando existen reglas, datos, sistemas o controles que una solución existente no cubre sin trabajo manual oculto.

Si el problema es una tarea estándar que las herramientas actuales cubren de principio a fin, evalúa primero una herramienta existente o una automatización configurada.

Si el problema es un flujo propio que depende de varios sistemas o reglas internas, compara una integración con el desarrollo a medida.

Si el proceso implica varios equipos, datos sensibles o requisitos de gobierno, pide una fase de descubrimiento, pruebas y responsabilidades explícitas.

No decidas por la etiqueta “IA” ni por el número de funcionalidades de una demo. Decide por el resultado, el coste total, los controles y la capacidad de mantenerlo.

## Incluye privacidad y seguridad antes de compartir datos reales

Indica qué datos personales o confidenciales tratará el proyecto y qué restricciones debe respetar. Pide que el proveedor explique el recorrido de los datos: qué sale de tus sistemas, quién lo procesa, dónde se almacena, quién accede, cuánto tiempo se conserva y cómo se elimina.

La [AEPD explica que un sistema con IA puede tratar datos personales en distintas etapas](https://www.aepd.es/prensa-y-comunicacion/notas-de-prensa/la-aepd-publica-una-guia-para-adaptar-al-rgpd-los-productos-y) y señala cuestiones como la legitimación, la información a las personas, los derechos, las decisiones automatizadas, la gestión de riesgos, la exactitud, la minimización y las transferencias internacionales. Pide respuestas para tu caso y solicita revisión jurídica cuando corresponda. Una frase como “cumple el RGPD” no describe por sí sola las obligaciones del proyecto.

Añade los requisitos de acceso, registro de actividad, copias de seguridad, recuperación, borrado, conservación y gestión de incidentes que sean proporcionales al riesgo.

## El presupuesto debe incluir la operación, no solo la construcción

Pide que cada propuesta separe, como mínimo:

- Descubrimiento y diseño.
- Desarrollo e integraciones.
- Migración y carga inicial de datos.
- Pruebas, formación y puesta en marcha.
- Alojamiento, licencias y servicios de terceros.
- Consumo de modelos o APIs, si existe.
- Mantenimiento, soporte y cambios posteriores.

Pregunta qué supuestos hacen subir el precio: número de usuarios, volumen de documentos, operaciones, sistemas conectados o necesidades de soporte. Una cifra aislada no permite comparar dos propuestas.

## La entrega y la salida se deciden antes de firmar

Deja por escrito qué recibirás y cómo podrás continuar si cambia el proveedor. La conversación debe incluir:

- Código específico, licencias de terceros y propiedad intelectual.
- Datos, documentación, diseños, pruebas y configuración.
- Acceso a dominios, nube, repositorios y cuentas de servicios.
- Formatos de exportación y procedimiento para recuperar la información.
- Formación y documentación para operar el sistema.
- Diferencia entre garantía, mantenimiento y soporte.
- Qué ocurre si el proyecto se interrumpe a mitad.
- Qué asistencia de transición se ofrece si otro equipo debe continuar.

La [guía de OSIX sobre cómo elegir un proveedor de software con IA](https://osix.tech/guias/como-elegir-empresa-desarrollo-software-ia-espana/) desarrolla estas preguntas para comparar propuestas, incluida la prueba con datos, el coste total, la privacidad y las condiciones de salida.

## Envía el mismo brief a cada proveedor

Usa el mismo documento, los mismos ejemplos y las mismas preguntas. Pide a cada empresa que señale sus supuestos, dependencias, exclusiones y decisiones pendientes.

Antes de elegir, comprueba que todas las propuestas responden al mismo alcance:

1. ¿Qué problema habéis entendido?
2. ¿Qué quedará funcionando en la primera versión?
3. ¿Qué casos de prueba usaréis y quién los aceptará?
4. ¿Cómo trataréis datos sensibles y excepciones?
5. ¿Qué costes iniciales y recurrentes quedan fuera de la cifra principal?
6. ¿Qué entregables, cuentas y accesos recibiremos?
7. ¿Qué ocurre si cambiamos de proveedor?
8. ¿Qué evidencia tenéis de una entrega comparable y qué no demuestra esa evidencia?

Si una propuesta no puede responder a estas preguntas, el problema no es necesariamente que el proveedor sea malo. Es que todavía no tienes una base suficiente para comparar alcance, riesgo y coste.

## Preguntas frecuentes

**¿Necesito una especificación técnica antes de pedir presupuesto?**

No. Necesitas explicar qué debe conseguir la aplicación, quién la usará, qué reglas debe cumplir y qué sistemas o datos intervienen. La arquitectura, las APIs y los detalles de implementación se pueden definir después, con el equipo adecuado.

**¿Tengo que diseñar todas las pantallas?**

No. Un flujo escrito, ejemplos de entrada y salida, capturas de la herramienta actual o bocetos sencillos suelen ser suficientes para empezar. Si ya tienes diseños, inclúyelos como material de referencia, no como sustituto de las reglas del negocio.

**¿Qué extensión debe tener el brief?**

La necesaria para que otra persona entienda el problema, el alcance inicial, los datos, las excepciones y el criterio de éxito sin tener que reconstruirlo todo en una llamada. Un documento corto y específico vale más que uno largo lleno de funciones sin prioridad.

**¿Debo decir mi presupuesto?**

Conviene indicar un rango o una restricción realista, junto con la fecha objetivo y la preferencia por trabajar por fases. También debes pedir los costes recurrentes y los supuestos que podrían cambiar la cifra.

**¿Cuándo conviene una herramienta estándar en vez de software propio?**

Empieza por una solución existente si cubre el proceso, las integraciones y los permisos sin crear trabajo manual oculto. Valora desarrollo a medida cuando necesitas reglas propias, conexión entre sistemas, controles o una experiencia que la herramienta no puede ofrecer razonablemente.

## Fuentes y lecturas relacionadas

- [AEPD: guía para adaptar al RGPD los productos y servicios que utilizan IA](https://www.aepd.es/prensa-y-comunicacion/notas-de-prensa/la-aepd-publica-una-guia-para-adaptar-al-rgpd-los-productos-y)
- [Cómo elegir una empresa de desarrollo de software con IA](https://osix.tech/guias/como-elegir-empresa-desarrollo-software-ia-espana/)
- [Desarrollo a medida para pymes](https://osix.tech/servicios/desarrollo-a-medida/)

*Esta guía es informativa. No sustituye una especificación técnica, una revisión de seguridad ni asesoramiento jurídico.*

[Volver al inicio](https://osix.tech/)

[Contactar con OSIX Tech](https://osix.tech/contacto/)

