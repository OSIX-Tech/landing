---
title: "Una academia de oposiciones corrige con IA por 0,11 € sin salir de su Moodle"
seoTitle: "Xeración21: corrección con IA por 0,11 € dentro de Moodle | OSIX Tech"
description: "Xeración21 corrige simulacros, genera planes de estudio y analiza exposiciones orales sobre el temario oficial, dentro del Moodle de la academia y con un coste de IA de 9,91 € por alumno y curso."
lead: "Xeración21 corrige simulacros, genera planes de estudio y analiza exposiciones orales sobre el temario oficial de una academia de oposiciones. Funciona dentro de su Moodle y devuelve las notas a su libro de calificaciones."
category: "Educación e integración con Moodle"
services:
  - "desarrollo-a-medida"
order: 7
status: "Piloto y QA integrado en Moodle desde el 23 de junio de 2026. 235 documentos de temario indexados."
published: "2026-09-17"
updated: "2026-10-06"
metrics:
  - value: "9,91 €"
    label: "de IA por alumno y curso"
    note: "sin licencia por usuario"
  - value: "0,11 €"
    label: "por corrección escrita"
    note: "0,42 € una oral · tests sin coste"
  - value: "213"
    label: "temas oficiales cubiertos"
    note: "10 especialidades · 13 rúbricas"
  - value: "12 s"
    label: "para un plan de estudio"
    note: "mediana · 9 s un informe"
metricsNote: "La IA cuesta 9,91 € por alumno y curso, 0,11 € por cada corrección escrita. Trabaja sobre 213 temas del temario oficial de la academia y prepara un plan de estudio en 12 segundos de mediana."
figures:
  - id: "coste-por-tarea"
    type: "bars"
    title: "Coste de IA por tarea"
    subtitle: "Escenario medido en el piloto; los tests no añaden coste"
    unit: "€"
    items:
      - label: "Exposición oral"
        value: 0.42
        display: "0,42 €"
      - label: "Corrección escrita"
        value: 0.11
        display: "0,11 €"
      - label: "Test"
        value: 0
        display: "0 €"
---

## Dentro del Moodle que la academia ya usaba

Academia NOS prepara oposiciones y trabaja sobre Moodle. La plataforma no lo sustituye: se integra dentro. Los alumnos no tienen otra contraseña ni otra web: sus cuentas se crean desde Moodle, **152** hasta la fecha, y las notas vuelven solas al libro de calificaciones.

El material de partida es el de la academia: **235** documentos de temario, **10** especialidades, **213** temas y **13** rúbricas oficiales con **129** criterios. Cada respuesta cita ese temario, que es la diferencia entre una herramienta genérica y una que sirve para preparar una oposición concreta.

## Planificar, corregir y analizar exposiciones orales

La plataforma genera planes de estudio e informes de seguimiento, corrige simulacros escritos y tests, produce materiales de apoyo y analiza exposiciones orales con **19** métricas de voz. El banco de preguntas tiene **288** ítems, **190** de ellos generados por IA.

Cada tarea tarda segundos, medidos por tipo: **9** un informe de seguimiento, **12** un plan de estudio o un material, **4** un lote de preguntas de test y **21** incorporar un documento nuevo al temario.

Está completa en castellano y en gallego.

## Un coste por alumno que se conoce de antemano

El coste de IA es de **9,91** € por alumno y curso: **0,11** € por corrección escrita, **0,42** € por una oral y **0** € por los tests. No hay licencia por usuario, de modo que hacer más tests no encarece el curso.

![Coste de IA por tarea: 0,42 € una exposición oral, 0,11 € una corrección escrita y 0 € un test](../../assets/figures/casos/xeracion21-moodle/coste-por-tarea.png)

Desde el **23** de junio de 2026 se han ejecutado **533** tareas de IA en producción. Desde agosto, ninguna ha fallado.

## Desglose de producción

| Cifra | Qué mide | Detalle |
| --- | --- | --- |
| **288** | preguntas en el banco | 190 generadas por IA |
| **152** | cuentas creadas desde Moodle | sin alta manual |
| **129** | criterios de corrección oficiales | 13 rúbricas importadas |
| **19** | métricas de voz por exposición | análisis de orales |

## El límite que mantenemos visible

Sigue siendo un piloto en fase de QA con una base de alumnos pequeña. No publicamos usuarios activos, y tampoco cifras de concurrencia: las pruebas de carga están escritas pero no se han ejecutado.

No publicamos precisión pedagógica ni exactitud del reconocimiento de voz. Medir lo primero exige que un preparador revise un conjunto de correcciones y se compare con la nota de la IA; lo segundo exige un conjunto anotado que todavía no existe.

Lo que sí está medido es el coste por alumno, la latencia por tipo de tarea y la tasa de éxito de las tareas ejecutadas.

## Ficha del proyecto

| | |
| --- | --- |
| **Cliente** | Academia NOS Oposicións |
| **Estado** | Piloto y QA en producción desde el 23 de junio de 2026 |
| **Integración** | Embebida en el Moodle de la academia, con notas devueltas por LTI AGS |
| **Base documental** | 235 documentos de temario, 10 especialidades, 213 temas, 13 rúbricas oficiales |
| **Idiomas** | Castellano y gallego, completos |
| **Fuente de las cifras** | Agregados de producción, logs y repositorios, sin datos personales |
| **Fecha de corte** | 8 de septiembre de 2026 |

## Preguntas frecuentes

**¿Hay que cambiar de plataforma?**
No. La plataforma se integra dentro del Moodle que la academia ya usa: las cuentas se crean desde ahí y las calificaciones vuelven a su libro de calificaciones.

**¿Cuánto cuesta la IA por alumno?**
9,91 € por alumno y curso en el escenario medido, con 0,11 € por corrección escrita y 0,42 € por una exposición oral. Los tests no añaden coste de IA.

**¿La IA corrige igual que un preparador?**
No lo sabemos todavía y por eso no lo afirmamos. Para publicar una concordancia habría que comparar un conjunto de correcciones revisadas por un preparador con la nota que da el sistema.

## ¿Tienes un proceso parecido?

Podemos revisar el flujo actual, separar lo que conviene automatizar de lo que debe seguir bajo control humano y proponer una primera prueba medible.

[Cuéntanos tu proceso](/contacto/)
