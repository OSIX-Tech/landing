---
title: "Una academia de oposiciones corrige con IA por céntimos sin salir de su Moodle"
seoTitle: "Xeración21: corrección con IA por céntimos dentro de Moodle | OSIX Tech"
description: "Xeración21 corrige simulacros, genera planes de estudio y analiza exposiciones orales sobre el temario oficial, dentro del Moodle de la academia y por menos de 10 € de IA por alumno y curso."
lead: "Xeración21 corrige simulacros, genera planes de estudio y analiza exposiciones orales sobre el temario oficial de una academia de oposiciones. Funciona dentro de su Moodle y devuelve las notas a su libro de calificaciones."
category: "Educación e integración con Moodle"
services:
  - "desarrollo-a-medida"
order: 7
status: "Piloto y QA integrado en Moodle desde el 23 de junio de 2026."
published: "2026-09-17"
updated: "2026-10-06"
metrics:
  - value: "< 10 €"
    label: "de IA por alumno y curso"
    note: "sin licencia por usuario"
  - value: "0 €"
    label: "por cada test"
    note: "practicar más no encarece el curso"
  - value: "+200"
    label: "temas oficiales cubiertos"
    note: "diez especialidades y sus rúbricas"
  - value: "12 s"
    label: "para un plan de estudio"
    note: "mediana · 9 s un informe"
metricsNote: "La IA cuesta menos de 10 € por alumno y curso, una corrección cuesta céntimos y los tests no cuestan nada. Trabaja sobre el temario oficial de la academia y prepara un plan de estudio en 12 segundos de mediana."
---

## Dentro del Moodle que la academia ya usaba

Academia NOS prepara oposiciones y trabaja sobre Moodle. La plataforma no lo sustituye: se integra dentro. Los alumnos no tienen otra contraseña ni otra web: sus cuentas se crean desde Moodle y las notas vuelven solas al libro de calificaciones.

El material de partida es el de la academia: más de **200** documentos de temario y más de **200** temas de diez especialidades, con sus rúbricas oficiales y más de un centenar de criterios de corrección. Cada respuesta cita ese temario, que es la diferencia entre una herramienta genérica y una que sirve para preparar una oposición concreta.

## Planificar, corregir y analizar exposiciones orales

La plataforma genera planes de estudio e informes de seguimiento, corrige simulacros escritos y tests, produce materiales de apoyo y analiza exposiciones orales con casi veinte métricas de voz. El **66 %** del banco de preguntas lo ha generado la IA a partir del temario.

Cada tarea tarda segundos, medidos por tipo: **9** un informe de seguimiento, **12** un plan de estudio o un material, **4** un lote de preguntas de test y **21** incorporar un documento nuevo al temario.

Está completa en castellano y en gallego.

## Un coste por alumno que se conoce de antemano

El coste de IA es de menos de **10** € por alumno y curso. Una corrección escrita o una exposición oral cuestan céntimos, y los tests no cuestan nada. No hay licencia por usuario, de modo que hacer más tests no encarece el curso.

Desde el **23** de junio de 2026 se han ejecutado cientos de tareas de IA en producción. Desde agosto, ninguna ha fallado.

## Desglose de producción

| Cifra | Qué mide | Detalle |
| --- | --- | --- |
| **4 s** | por lote de preguntas de test | mediana |
| **9 s** | por informe de seguimiento | mediana |
| **21 s** | para incorporar un documento nuevo | al temario consultable |
| **66 %** | del banco de preguntas generado por IA | a partir del temario oficial |

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
| **Base documental** | Temario oficial de diez especialidades, con sus rúbricas |
| **Idiomas** | Castellano y gallego, completos |
| **Fuente de las cifras** | Agregados de producción, logs y repositorios, sin datos personales |
| **Fecha de corte** | 8 de septiembre de 2026 |

## Preguntas frecuentes

**¿Hay que cambiar de plataforma?**
No. La plataforma se integra dentro del Moodle que la academia ya usa: las cuentas se crean desde ahí y las calificaciones vuelven a su libro de calificaciones.

**¿Cuánto cuesta la IA por alumno?**
Menos de 10 € por alumno y curso en el escenario medido. Una corrección escrita u oral cuesta céntimos y los tests no añaden coste de IA.

**¿La IA corrige igual que un preparador?**
No lo sabemos todavía y por eso no lo afirmamos. Para publicar una concordancia habría que comparar un conjunto de correcciones revisadas por un preparador con la nota que da el sistema.

## ¿Tienes un proceso parecido?

Podemos revisar el flujo actual, separar lo que conviene automatizar de lo que debe seguir bajo control humano y proponer una primera prueba medible.

[Cuéntanos tu proceso](/contacto/)
