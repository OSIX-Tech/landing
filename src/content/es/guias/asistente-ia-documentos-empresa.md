Un asistente de IA que responde sobre los documentos de tu empresa no necesita que vuelvas a entrenar el modelo con cada archivo. Normalmente usa RAG: cuando alguien pregunta, busca pasajes relevantes en una colección de documentos, los pasa como contexto al modelo y genera una respuesta basada en ellos. Puede incluir referencias al archivo y la página si el sistema conserva esa información, pero RAG reduce las respuestas inventadas, no garantiza que desaparezcan.

## El asistente busca fragmentos, no relee toda tu carpeta

Antes de contestar, el sistema prepara los documentos para poder encontrarlos. Extrae el texto, lo divide en fragmentos y crea un índice de búsqueda. Algunos sistemas combinan búsqueda por palabras con búsqueda semántica, que encuentra textos parecidos por significado aunque no repitan las palabras exactas.

Cuando una persona pregunta, el sistema busca los fragmentos más pertinentes y se los entrega al modelo junto con la pregunta. El modelo redacta una respuesta a partir de ese contexto. Las citas solo son útiles si permiten volver a la fuente correcta, no si muestran un nombre de archivo sin pasaje ni página.

En la práctica, el resultado depende tanto de la búsqueda como del modelo: una respuesta puede estar bien redactada y ser incorrecta si recuperó el documento equivocado, una versión antigua o un fragmento incompleto. Por eso un asistente documental es un sistema con fuentes, permisos, búsqueda y revisión, no una carpeta conectada a un chat.

## Empieza con un grupo pequeño de documentos vigentes

El primer paso no es subirlo todo. Elige un caso de uso acotado, por ejemplo responder dudas internas sobre un procedimiento, una política de vacaciones o un catálogo de producto. Empieza con documentos que tengan una persona responsable, una versión vigente y respuestas que puedas comprobar.

Antes de indexarlos, revisa:

- **Vigencia:** retira borradores y versiones caducadas; si dos documentos se contradicen, resuélvelo antes de preguntarle a la IA.
- **Legibilidad:** los PDF digitales suelen ser más fáciles de procesar que los escaneos. Un documento escaneado necesita reconocimiento de texto, y tablas, columnas o formularios pueden extraerse mal.
- **Estructura:** títulos, apartados, fechas y nombres de archivo claros ayudan a localizar y citar la respuesta.
- **Propietario:** asigna a alguien que decida cuándo sustituir o retirar un archivo.
- **Acceso:** separa la información pública de la interna, personal o restringida antes de conectarla.

No hace falta reorganizar toda la empresa para hacer una prueba. Sí hace falta saber cuáles son las fuentes oficiales y qué personas pueden consultarlas. Si los empleados ya preguntan por una política o un manual, convierte esas consultas en preguntas de prueba y busca la respuesta exacta en el documento original.

## Los permisos se aplican al recuperar la información

Una cuenta de servicio con acceso a toda la documentación puede devolver a una persona fragmentos que esa persona no debería ver. La aplicación debe identificar quién pregunta y limitar la búsqueda a los documentos autorizados para esa persona. Copiar archivos a un índice común sin conservar los permisos de origen no mantiene automáticamente la seguridad de Drive, SharePoint o la carpeta original.

Antes de conectar fuentes, define grupos de usuarios, documentos compartidos y restringidos, y qué ocurre cuando cambia un permiso o se elimina un archivo. Prueba con cuentas de distintos niveles de acceso. Comprueba también qué guarda el proveedor, dónde procesa los datos, durante cuánto tiempo los conserva y si el contrato cubre el tratamiento que necesitas. Si el sistema no puede respetar esos límites, no conectes datos sensibles.

El propio documento también es una entrada no confiable: puede contener instrucciones que intenten desviar al modelo. La aplicación debe tratar el texto recuperado como material que debe consultar, no como instrucciones que sustituyen las reglas de seguridad. Para una pyme, la regla sencilla es empezar por información de bajo riesgo, con acceso mínimo y una persona responsable del sistema.

## La respuesta necesita un límite claro

Pide al asistente que indique qué fuente respalda una respuesta y que diga que no encuentra información suficiente cuando la búsqueda no devuelve una base adecuada. En ese caso puede derivar la consulta a una persona. No presentes el sistema como si fuera incapaz de equivocarse: un pasaje recuperado puede estar incompleto, desactualizado o no responder realmente a la pregunta.

Si la respuesta afecta a pagos, contratos, seguridad, salud o decisiones sobre personas, no la conviertas en una acción automática solo porque venga acompañada de una cita. Mantén la aprobación humana y deja registro de qué contestó el asistente y qué fuente consultó.

## Hay tres formas de montar el asistente

La vía adecuada depende de quién lo usa, dónde viven los documentos y qué controles necesitas. No empieces por comparar modelos: primero decide el alcance, los permisos y la forma de comprobar las respuestas.

| Vía | Encaja cuando | Límite que conviene revisar |
| --- | --- | --- |
| Asistente incluido en una suite o servicio SaaS | El equipo ya trabaja en esa plataforma y necesita consultar un conjunto sencillo de archivos | Comprueba qué fuentes conecta, cómo respeta permisos, qué almacena y qué opciones tienes para exportar o retirar los datos |
| Plataforma RAG no-code | Quieres probar una colección de documentos y un chat sin desarrollar todo el sistema | La configuración puede quedarse corta con permisos por usuario, varias fuentes, procesos propios o auditoría detallada |
| Desarrollo a medida | Hay que integrar ERP o CRM, aplicar permisos específicos, mantener trazabilidad o adaptar el flujo de trabajo | Requiere definir alcance, probar con datos reales y mantener tanto la integración como la colección documental |

Un servicio SaaS o una plataforma no-code pueden ser suficientes para preguntas internas de bajo riesgo. Un desarrollo propio no es automáticamente más seguro ni más preciso: lo será solo si los permisos, las fuentes y las pruebas se diseñan bien. Si el caso consiste en extraer campos fijos de facturas o albaranes, quizá necesitas extracción de documentos, no un asistente conversacional que recupere pasajes. [TALI, de OSIX Tech](https://tali.osix.tech), está orientado a extraer datos estructurados de documentos comerciales; no es el mismo problema que preguntar a una colección documental.

## Prueba la recuperación antes de abrirlo a toda la empresa

Monta un piloto con un grupo pequeño y una lista de preguntas reales. Para cada pregunta, anota la fuente correcta y el pasaje que debería aparecer. Incluye preguntas con respuestas claras, preguntas que no aparecen en los documentos, dos archivos que se contradicen y preguntas que solo ciertos empleados pueden consultar.

Revisa cuatro cosas por separado:

1. **Recuperación:** ¿apareció el documento y el fragmento correctos?
2. **Respuesta:** ¿la contestación refleja el pasaje sin añadir detalles que no están en la fuente?
3. **Cita:** ¿la referencia permite encontrar el documento, su versión y el lugar exacto?
4. **Permisos:** ¿un usuario sin acceso recibe una negativa, en vez de información restringida?

Registra los fallos, corrige primero la causa y repite las mismas preguntas. Un modelo mejor no arregla por sí solo un documento mal extraído o permisos que el buscador no aplica. Antes de ampliar el piloto, acuerda quién revisa los errores, con qué frecuencia se actualizan las fuentes y cómo se pausa el asistente si aparece una exposición de datos.

## No conectes documentos si no puedes mantenerlos

Este enfoque no conviene cuando no existe una fuente oficial, los archivos se contradicen sin responsable que los resuelva, nadie puede probar las respuestas o los permisos no se pueden reproducir en el sistema. Tampoco sustituye a un buscador documental normal si los empleados solo necesitan localizar un archivo por nombre.

Una pregunta frecuente sobre RAG es si hay que entrenar el modelo con los documentos. Normalmente, no: RAG los recupera cuando llega la consulta y los entrega como contexto. Así puedes sustituir o actualizar una fuente sin volver a entrenar el modelo, aunque sí tendrás que volver a procesarla o indexarla.

**¿El asistente responderá solo con mis documentos?**

Puedes configurarlo para que priorice las fuentes conectadas y se abstenga cuando no encuentre evidencia suficiente. Aun así, el modelo puede interpretar mal un fragmento o completar huecos. Prueba preguntas sin respuesta y exige referencias verificables antes de confiar en el resultado.

**¿Qué documentos debería cargar primero?**

Empieza por un conjunto pequeño de documentos actuales, de una sola temática y con una persona responsable. Por ejemplo, una política interna o un manual de producto. Evita mezclar borradores, archivos duplicados y datos restringidos que todavía no tengan permisos definidos.

**¿Los empleados verán todos los documentos conectados?**

No deberían. El sistema debe comprobar la identidad y aplicar permisos antes de añadir documentos recuperados a la consulta del modelo. Verifica esa separación con cuentas de prueba distintas; no des por hecho que los permisos de la carpeta se conservan al copiar los archivos a otro índice.

**¿RAG elimina las alucinaciones?**

No. Proporcionar pasajes relevantes ayuda a fundamentar la respuesta, pero el buscador puede recuperar algo incorrecto y el modelo puede interpretarlo mal. Una cita facilita la comprobación, no demuestra por sí sola que la respuesta sea correcta.

**¿Necesito un desarrollo a medida?**

No siempre. Si el uso es sencillo y la plataforma respeta las fuentes y permisos necesarios, una solución SaaS o no-code puede bastar. Tiene sentido evaluar un desarrollo cuando necesitas conectar sistemas propios, definir controles específicos o dejar un rastro verificable de las consultas y respuestas.

## Cómo se elaboró esta guía

La publica OSIX Tech, que desarrolla [software a medida con IA para pymes](https://osix.tech/servicios/desarrollo-a-medida/). Esta guía explica el criterio general para decidir el alcance de un piloto; no sustituye una revisión de seguridad, privacidad o cumplimiento para un sistema concreto. La descripción técnica se contrastó con la documentación de Microsoft, Google Cloud y AWS. La recomendación práctica es empezar con documentos de bajo riesgo, probar búsqueda, respuesta, citas y permisos por separado, y ampliar solo cuando los fallos estén controlados.

## Fuentes

- [Microsoft Learn: retrieval augmented generation (RAG) and indexes](https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation)
- [Microsoft Learn: diseño de seguridad para RAG multiusuario](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/secure-multitenant-rag)
- [Google Cloud: qué es RAG y cómo funciona](https://cloud.google.com/use-cases/retrieval-augmented-generation)
- [AWS: cómo funcionan las bases de conocimiento de Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-how-it-works.html)

## Guías relacionadas

- [Cómo integrar IA con el software que ya usa tu empresa](https://osix.tech/guias/integrar-ia-software-pyme-espana/)
- [Cuándo un chatbot no-code se queda corto](https://osix.tech/guias/chatbot-sin-programar/)
- [Dónde se guardan los datos de tu empresa al contratar un sistema de IA](https://osix.tech/guias/donde-se-guardan-datos-ia-empresa/)
- [Automatizar documentos sin perder la revisión humana](https://osix.tech/guias/automatizar-documentos-sin-perder-revision-humana/)

[Volver al índice de guías](https://osix.tech/guias/)
