**Guía · IA aplicada · Licitaciones · Documentos · Pymes**

La IA puede convertir un pliego y sus anexos en un resumen operativo de requisitos, fechas, criterios de adjudicación, documentación y riesgos. No debe decidir por sí sola si una empresa puede presentarse ni enviar una oferta: esas conclusiones necesitan una revisión responsable, porque un dato omitido, una contradicción entre documentos o un plazo mal interpretado puede dejar fuera una propuesta válida.

La forma segura de automatizar el análisis de una licitación es dividirlo en tres capas: extracción de hechos, comprobaciones contra una lista de control y decisión humana. El resultado no es una oferta presentada automáticamente, sino un expediente de oportunidad revisado y trazable.

## La IA debe convertir el pliego en una lista de decisiones, no en un resumen genérico

Un resumen de dos páginas rara vez basta para preparar una oferta. El análisis útil relaciona cada requisito con la página o el anexo donde aparece, indica si es obligatorio y deja visible qué debe comprobar una persona.

| Bloque | Qué debe localizar la IA | Qué debe validar una persona |
| --- | --- | --- |
| Identificación | Órgano de contratación, expediente, objeto, procedimiento y lotes | Que el contrato encaja con la actividad y la capacidad real de la empresa |
| Fechas | Publicación, consultas, visita, presentación, apertura y ejecución | Que el plazo sigue vigente y que hay tiempo real para preparar la oferta |
| Solvencia | Volumen de negocio, experiencia, medios, certificados y habilitaciones | Que la empresa puede acreditarlo con documentación válida |
| Prescripciones técnicas | Alcance, entregables, niveles de servicio, materiales y restricciones | Que el equipo puede cumplirlo sin prometer algo que no puede entregar |
| Adjudicación | Criterios, ponderaciones, fórmulas y criterios sujetos a juicio de valor | Qué estrategia ofrece una posibilidad razonable de ganar |
| Oferta | Sobres, formatos, declaraciones, firmas y anexos | Que no falta ningún documento ni se mezcla información entre sobres |
| Riesgos | Penalizaciones, obligaciones esenciales, incompatibilidades y contradicciones | Si el riesgo económico y operativo es asumible |

La salida debe incluir el texto original o una referencia precisa a cada hallazgo. Si la IA no puede localizar el dato, debe marcarlo como no encontrado, no rellenarlo con una suposición.

## Paso 1: decidir si merece la pena leer el expediente completo

Antes de automatizar una lectura larga, conviene hacer un triaje de pocos minutos. La IA puede preparar esta primera ficha:

- objeto del contrato y servicio solicitado;
- órgano de contratación y ubicación;
- presupuesto base, valor estimado e impuestos cuando aparezcan;
- fecha y hora límite de presentación;
- duración, prórrogas y posibles lotes;
- procedimiento y forma de presentación;
- requisitos de solvencia que podrían dejar fuera a la empresa;
- porcentaje de criterios automáticos frente a criterios sujetos a juicio de valor.

La persona responsable decide después si existe encaje comercial, si se cumplen los mínimos y si el plazo permite preparar una oferta competitiva. Si falla un requisito obligatorio, el expediente puede descartarse sin invertir horas en redactar.

## Paso 2: extraer requisitos y separarlos por prioridad

No todos los párrafos del pliego tienen el mismo peso. La IA debe clasificar cada requisito en una de estas categorías:

1. **Excluyente:** si no se cumple, la oferta puede ser inadmitida o quedar fuera.
2. **Obligación de ejecución:** se aplica si se gana y afecta al coste, al equipo o al calendario.
3. **Criterio puntuable:** mejora la valoración, pero no siempre es obligatorio.
4. **Documento acreditativo:** demuestra que se cumple otra condición.
5. **Dato informativo:** ayuda a entender el contrato, pero no exige una respuesta concreta.

Para que la clasificación sea revisable, cada fila debería tener cinco campos: requisito, categoría, obligatorio o no, evidencia necesaria y ubicación en el expediente.

```text
Requisito | Categoría | Obligatorio | Evidencia | Fuente | Responsable | Estado
```

La fuente puede ser una página del PDF, un anexo o una cláusula concreta. La trazabilidad es más importante que una redacción elegante: permite corregir una extracción y saber qué parte del documento la originó.

## Paso 3: comprobar la solvencia antes de escribir la propuesta

La solvencia suele ser uno de los primeros filtros que merece la pena revisar. El sistema puede localizar umbrales, periodos de referencia, contratos similares, certificados, equipos y perfiles exigidos. No debe concluir que la empresa cumple solo porque encuentra palabras parecidas en su documentación.

La comprobación humana debe responder a preguntas concretas:

- ¿El volumen de negocio exigido se acredita con las cuentas o certificados disponibles?
- ¿La experiencia requerida tiene el mismo objeto, alcance o periodo que la experiencia propia?
- ¿Los medios personales y materiales están disponibles durante toda la ejecución?
- ¿Se necesita una habilitación, clasificación, seguro o certificado específico?
- ¿Se puede recurrir a medios externos o a una unión temporal, y bajo qué condiciones?

La salida correcta es una matriz de **cumple**, **no cumple**, **falta evidencia** o **requiere interpretación**. “Parece que cumple” no es un estado suficiente para presentar una oferta.

## Paso 4: traducir los criterios de adjudicación a trabajo de oferta

Un pliego puede repartir puntos entre precio, memoria técnica, mejoras, equipo, metodología, experiencia u otros criterios. La IA puede convertir la tabla de valoración en un plan de trabajo:

- criterio y subcriterio;
- puntos máximos;
- fórmula o método de valoración;
- contenido que debe preparar la empresa;
- límite de páginas, formato o extensión;
- evidencia que respalda la afirmación;
- riesgo de perder puntos por no responder exactamente.

Cuando un criterio depende de juicio de valor, la IA puede señalar qué pide el pliego y ayudar a comparar la respuesta con los requisitos. La puntuación prevista sigue siendo una hipótesis de trabajo, no un resultado garantizado. La decide el órgano de contratación, no el modelo.

## Paso 5: revisar fechas, anexos y contradicciones

Los documentos de una licitación no siempre están escritos para leerse como una única pieza. El anuncio, el pliego administrativo, el pliego técnico, los anexos y las respuestas a consultas pueden repartir o matizar la información.

La automatización debe buscar al menos:

- fechas distintas para el mismo hito;
- importes que no coinciden entre documentos;
- referencias a anexos que no están disponibles;
- requisitos mencionados en el resumen pero desarrollados en otra cláusula;
- cambios publicados después del documento original;
- límites de páginas o formatos que aparecen solo en un apartado;
- términos definidos de forma distinta en dos documentos.

Cada conflicto debe abrir una tarea de revisión con las dos fuentes enfrentadas. No conviene resolverlo escogiendo silenciosamente la frase más reciente o la que parezca más lógica. Si afecta a la admisión, al precio o al plazo, hay que confirmar la interpretación por el canal previsto en la licitación.

## Qué puede hacer la IA y qué debe conservar una persona

La frontera no está entre “documentos automáticos” y “documentos manuales”. Está entre localizar y transformar información, por un lado, y asumir una decisión con consecuencias, por otro.

### Tareas que la IA puede acelerar

- convertir PDFs y anexos en texto consultable;
- localizar fechas, importes, nombres, umbrales y referencias;
- comparar requisitos entre varios documentos;
- extraer una tabla de criterios de adjudicación;
- generar una lista inicial de documentos que faltan;
- redactar un primer índice de memoria técnica;
- detectar términos que aparecen en el pliego pero no en el borrador;
- preparar preguntas para revisar con el equipo;
- actualizar una ficha cuando se incorpora una aclaración.

### Tareas que no debe cerrar sin revisión

- declarar que la empresa cumple la solvencia;
- interpretar una cláusula ambigua con efecto jurídico o económico;
- decidir el precio o el margen de la oferta;
- prometer plazos, medios o resultados que el equipo no ha validado;
- inventar una referencia, certificado o experiencia;
- enviar la oferta o firmar declaraciones;
- sustituir la revisión jurídica, técnica o económica cuando sea necesaria.

Una regla práctica: si un error puede provocar exclusión, penalización, pérdida económica o una promesa que el equipo no podrá cumplir, la IA puede preparar el material, pero una persona debe aprobar la conclusión.

## El flujo mínimo que evita automatizar errores

Un sistema sencillo puede organizar el trabajo en siete estados:

1. **Recibido:** se guardan el anuncio, el pliego y todos los anexos con fecha y versión.
2. **Procesado:** se extrae el texto y se registra qué páginas no se han podido leer.
3. **Triage:** se resumen objeto, fechas, lotes, presupuesto y requisitos excluyentes.
4. **Comprobado:** una persona valida los datos que pueden dejar fuera la oferta.
5. **Preparando oferta:** se generan checklist, índice, preguntas y borradores de respuesta.
6. **Revisión final:** se comprueban formato, firmas, sobres, anexos, límites y plazo.
7. **Presentado y archivado:** se guarda el justificante y la versión exacta enviada.

El control clave es que una extracción incompleta no avance como si estuviera completa. Si faltan páginas escaneadas, tablas ilegibles o anexos, el expediente debe quedar marcado para revisión.

## Cuándo basta una hoja de cálculo y cuándo hace falta integrar sistemas

No todas las empresas necesitan una plataforma a medida desde el primer día.

Una carpeta ordenada, una plantilla y una hoja de cálculo pueden bastar cuando hay pocos expedientes, los documentos llegan por un canal estable y una persona puede revisar cada resultado.

Tiene sentido plantear una integración cuando el equipo recibe muchos expedientes, necesita cruzar los requisitos con un CRM o un repositorio documental, reutiliza datos de proyectos anteriores, trabaja con varios responsables o necesita alertas de fechas y versiones. El objetivo no es añadir IA por añadirla: es evitar que el análisis vuelva a depender de copiar datos entre correo, carpetas y hojas.

En ambos casos, conviene medir lo mismo antes y después: tiempo hasta el primer diagnóstico, horas de revisión, requisitos detectados, errores encontrados antes de presentar y oportunidades descartadas a tiempo.

## Preguntas frecuentes

### ¿Puede la IA analizar un pliego completo?

Puede extraer y organizar gran parte del contenido, pero “analizarlo completo” también implica detectar anexos ausentes, interpretar contradicciones y decidir qué significa cada requisito para una empresa concreta. La IA debe indicar qué ha encontrado, qué no ha podido leer y qué necesita revisión humana.

### ¿Puede la IA decirme si mi empresa puede presentarse?

Puede comparar los requisitos del expediente con los datos y documentos que le proporciones, y señalar posibles incumplimientos o evidencias faltantes. La decisión final debe revisarla una persona con responsabilidad comercial, técnica, económica o jurídica.

### ¿Puede generar la memoria técnica de una licitación?

Puede preparar un índice, extraer los puntos que debe responder la memoria y redactar un primer borrador basado en información real. El equipo debe verificar cada afirmación, adaptar la propuesta al pliego y eliminar cualquier promesa que no pueda demostrar.

### ¿Qué pasa si la IA no encuentra un dato?

Debe marcarlo como no encontrado y conservar la referencia al documento y las páginas revisadas. Nunca debe completar el hueco con una estimación presentada como hecho. Si el dato es decisivo, se incorpora como bloqueo de revisión.

### ¿Conviene automatizar también la presentación de la oferta?

En general, es más prudente automatizar la preparación y las comprobaciones que el envío final. La presentación puede implicar firma, declaraciones, selección de archivos y aceptación de condiciones. Una persona debe revisar la versión final y conservar el justificante.

La automatización merece la pena cuando reduce trabajo repetitivo sin ocultar incertidumbres. El expediente final debe dejar claro qué se ha encontrado, qué falta por comprobar y quién ha aprobado cada conclusión.

[Volver a la guía de automatización de procesos](https://osix.tech/guias/procesos-pyme-automatizar-con-ia/)

[Conocer el desarrollo de software y automatizaciones a medida de OSIX](https://osix.tech/servicios/desarrollo-a-medida/)

[Contactar con OSIX](https://osix.tech/#contact)


Esta guía es informativa y no sustituye asesoramiento jurídico ni la revisión del expediente por el equipo responsable.
