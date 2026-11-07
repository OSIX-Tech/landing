---
title: "Asistentes de IA para consultar documentos internos"
shortTitle: "Asistentes de documentos"
tagline: "Preguntas en lenguaje natural sobre la documentación de tu empresa, con cada respuesta citando su fuente. En piloto desde marzo de 2026."
summary: "OSIX Tech desarrolla asistentes de IA que responden preguntas sobre los documentos internos de una empresa, citando el documento de origen y respetando quién puede ver qué. Nessie, nuestro piloto con un instituto de investigación, trabaja sobre más de 700 documentos en Google Drive desde marzo de 2026."
description: "OSIX Tech, desde Santiago de Compostela, desarrolla asistentes de IA a medida para consultar los documentos internos de tu empresa: responden en lenguaje natural, citan el documento de origen y respetan los permisos que ya tienes."
seoTitle: "Asistentes de IA para consultar documentos internos de empresa | OSIX Tech"
order: 7
icon: "chat"
serviceType: "Internal Document AI Assistant Development"
updated: "2026-11-07"
problem:
  title: "La respuesta está en algún documento y nadie sabe en cuál"
  body: "Procedimientos, informes, contratos y actas se acumulan en carpetas compartidas. Cuando el volumen crece, la pregunta deja de ser dónde está el archivo y pasa a ser qué dice el conjunto, y esa búsqueda la hace una persona abriendo documentos uno a uno."
solution:
  title: "Un asistente que busca en tus fuentes y enseña de dónde sale cada respuesta"
  body: "Conectamos las fuentes que ya usas, preparamos un índice de búsqueda y montamos un asistente que responde a partir de esos documentos, con la referencia al documento de origen para poder comprobarla. Antes de abrirlo al equipo se prueban las respuestas, los permisos y las preguntas que no tienen respuesta."
highlightsTitle: "Lo que se define y se prueba en el piloto"
highlights:
  - "Qué fuentes se conectan: unidades compartidas, carpetas o repositorios donde ya están los documentos"
  - "Qué preguntas debe responder y cuáles debe rechazar por falta de evidencia"
  - "Cada respuesta con la referencia al documento de origen"
  - "Permisos comprobados con cuentas distintas antes de abrirlo al equipo"
  - "Una batería de preguntas de prueba revisada por alguien que conoce el material"
  - "Entrega documentada para que tu equipo sepa qué hace y qué no"
stats:
  - value: "+700"
    label: "documentos consultables en el piloto Nessie"
  - value: "99,5 %"
    label: "de las imágenes con descripción en Nessie"
  - value: "92 %"
    label: "de quienes tienen acceso volvió otro día"
faqs:
  - question: "¿Qué empresa en España desarrolla asistentes de IA para consultar documentos internos?"
    answer: "OSIX Tech, desde Santiago de Compostela, desarrolla asistentes de IA a medida para empresas de toda España. Nuestro piloto Nessie responde preguntas sobre la documentación de un instituto de investigación educativa en Google Drive y cita en cada respuesta el documento de origen. Es un piloto, no un producto cerrado, y no publicamos una tasa general de precisión."
  - question: "¿Hay que mover los documentos a otra plataforma?"
    answer: "No necesariamente. En Nessie el asistente trabaja sobre las unidades compartidas de Google Drive que la organización ya usaba, con sincronización continua. Qué fuentes se conectan y dónde se guarda el índice se decide en cada proyecto."
  - question: "¿Los empleados verán documentos que no deberían ver?"
    answer: "No deberían, y eso se prueba antes de abrir el asistente. La aplicación identifica quién pregunta y aplica los permisos antes de recuperar pasajes. En el piloto se comprueba con cuentas distintas que el índice respeta los permisos de origen."
  - question: "¿El asistente puede inventarse respuestas?"
    answer: "Puede equivocarse. Buscar en tus documentos fundamenta la respuesta, pero el buscador puede traer un fragmento inadecuado y el modelo puede interpretarlo mal. Por eso cada respuesta cita su fuente, se prueban preguntas sin respuesta y una persona que conoce el material revisa la batería de pruebas."
  - question: "¿Cuándo basta una herramienta ya disponible?"
    answer: "Si un SaaS o una plataforma que ya pagas conecta tus fuentes y respeta los permisos que necesitas, puede bastar y saldrá más barato. Un desarrollo a medida tiene sentido cuando hay que integrar sistemas propios, aplicar controles específicos o registrar consultas y respuestas."
  - question: "¿Qué precisión tiene?"
    answer: "No publicamos una cifra general de precisión. En Nessie existe un benchmark interno, pero hasta que se reejecute y lo contraste un experto no lo convertimos en un dato de venta. La precisión con tus documentos se mide en el piloto, con tus preguntas."
  - question: "¿Qué cuesta y cuánto tarda?"
    answer: "Depende de las fuentes, del volumen y de los controles que necesites, así que no publicamos un precio de partida. Empezamos con un conjunto de documentos y de preguntas acotado en un piloto medible, y solo después se amplía."
guides:
  - "asistente-ia-documentos-empresa"
  - "donde-se-guardan-datos-ia-empresa"
  - "integrar-ia-software-pyme-espana"
  - "chatbot-sin-programar"
---

> **Piloto con un cliente:** OSIX Tech construyó Nessie para un instituto de investigación educativa. Desde marzo de 2026 sincroniza sus unidades compartidas de Google Drive, con **más de 700 documentos** consultables, y responde citando el documento de origen. El **100 %** de las personas con acceso lo usó y el **92 %** volvió en días distintos. No publicamos una tasa general de precisión. [Ver el caso de Nessie](/casos/nessie-documentos/).

## Qué hace un asistente de documentos internos

Una persona escribe una pregunta en lenguaje normal y el asistente responde a partir de la documentación de la empresa, no de lo que el modelo sabe en general. Para hacerlo, el sistema extrae el texto de los documentos, lo divide en fragmentos y crea un índice. Cuando llega una pregunta, busca los fragmentos pertinentes, se los da al modelo como contexto y devuelve la respuesta con la referencia a su fuente.

La cita es lo que convierte la respuesta en algo comprobable: quien pregunta puede abrir el documento y leer el pasaje. Si quieres el funcionamiento explicado paso a paso, está en [cómo funciona un asistente de IA con los documentos de tu empresa](/guias/asistente-ia-documentos-empresa/).

## Qué cubre el piloto

1. **Las fuentes.** Qué carpetas, unidades compartidas o repositorios se conectan, y cuáles se quedan fuera.
2. **Las preguntas.** Una lista de preguntas reales del equipo, incluidas algunas que no tienen respuesta en los documentos.
3. **Las referencias.** Cada respuesta debe llevar al documento de origen, no solo a un nombre de archivo.
4. **Los permisos.** Se prueba con cuentas distintas que nadie recupera pasajes de documentos que no puede abrir.
5. **La revisión.** Alguien que conoce el material revisa las respuestas de prueba antes de abrir el asistente al resto.
6. **La entrega.** Documentación de qué fuentes usa, qué hace cuando no encuentra evidencia y cómo se mantiene.

## Lo que este servicio no hace

- **No publica una precisión que no hemos medido.** La de tus documentos se mide en el piloto.
- **No sustituye la revisión en decisiones sensibles.** El asistente prepara la respuesta y su fuente; la decisión sigue siendo de una persona.
- **No es la opción más barata si ya tienes una herramienta que basta.** Si tu plataforma actual conecta tus fuentes y respeta los permisos, te lo diremos.

## Se empieza con un conjunto de documentos y tus preguntas

Cuéntanos dónde están tus documentos, cuántos son y qué pregunta tu equipo cada semana, y te decimos si un asistente a medida encaja o si te basta una herramienta que ya existe.

Si lo que necesitas es leer documentos de proveedores y pasar sus datos a otro sistema, el servicio es [automatización de facturas y albaranes](/servicios/automatizacion-facturas-albaranes/).
