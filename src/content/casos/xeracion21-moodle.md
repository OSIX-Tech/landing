---
title: "Xeración21 integra IA dentro del Moodle de una academia"
seoTitle: "Xeración21 integra IA dentro del Moodle de una academia | OSIX Tech"
description: "La plataforma trabaja sobre temarios y rúbricas oficiales, genera materiales y devuelve calificaciones al entorno que ya usa la academia."
lead: "La plataforma trabaja sobre temarios y rúbricas oficiales, genera materiales y devuelve calificaciones al entorno que ya usa la academia."
category: "Educación e integración con Moodle"
services:
  - "desarrollo-a-medida"
order: 7
status: "Piloto y QA integrado en Moodle desde el 23 de junio de 2026. 235 documentos de temario indexados."
published: "2026-09-17"
metrics:
  - value: "533"
    label: "tareas de IA en producción"
    note: "97,2 % de éxito · 100 % desde agosto"
  - value: "235"
    label: "documentos de temario indexados"
    note: "12,3 millones de caracteres"
  - value: "9,91 €"
    label: "de IA por alumno y curso"
    note: "los tests no añaden coste"
---

## Dentro del Moodle que la academia ya usaba

Academia NOS prepara oposiciones y trabaja sobre Moodle. La plataforma no lo sustituye: se integra dentro. Las cuentas se provisionan desde ahí, **152** hasta la fecha, y las calificaciones vuelven al libro de calificaciones mediante LTI AGS.

El material de partida es oficial: **235** documentos de temario indexados, **12,3** millones de caracteres repartidos en **7.171** fragmentos, **10** especialidades, **213** temas y **13** rúbricas oficiales con **129** criterios.

## Planificar, corregir y analizar exposiciones orales

La plataforma genera planes de estudio e informes de seguimiento, corrige simulacros escritos y tests, produce materiales de apoyo y analiza exposiciones orales con **19** métricas de voz. El banco de preguntas tiene **288** ítems, **190** de ellos generados por IA.

Las latencias medianas están medidas por tipo de tarea: **9** segundos un informe de seguimiento, **12** un plan de estudio o un material, **4** un lote de preguntas de test y **21** indexar un documento nuevo.

Todo ello citando el temario oficial de la academia, que es la diferencia entre una herramienta genérica y una que sirve para preparar una oposición concreta.

## Coste y solidez antes que volumen

Desde el **23** de junio de 2026 se han ejecutado **533** tareas de IA en producción con un **97,2 %** de éxito, y del **100 %** desde agosto. Se han publicado **6** notas al libro de calificaciones de Moodle vía LTI AGS.

El coste de IA es de **9,91** € por alumno y curso: **0,11** € por corrección escrita, **0,42** € por una oral y **0** € por los tests. No hay licencia por usuario, de modo que hacer más tests no encarece el curso.

La base de código son unas **225.000** líneas, **188** endpoints más **33** de IA, **52** pantallas y **48** decisiones de arquitectura documentadas, con **4.046** tests automatizados que corren en cada cambio y **66** pruebas de extremo a extremo. Está completa en castellano y gallego.

## Desglose de producción

| Cifra | Qué mide | Detalle |
| --- | --- | --- |
| **4.046** | tests automatizados en CI | 66 pruebas de extremo a extremo |
| **13** | rúbricas oficiales importadas | 129 criterios |
| **19** | métricas de voz por exposición | análisis de orales |
| **48** | decisiones de arquitectura documentadas | trazabilidad para auditoría |

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
No. La plataforma se integra dentro del Moodle que la academia ya usa: las cuentas se provisionan desde ahí y las calificaciones vuelven a su libro de calificaciones mediante LTI AGS.

**¿Cuánto cuesta la IA por alumno?**
9,91 € por alumno y curso en el escenario medido, con 0,11 € por corrección escrita y 0,42 € por una exposición oral. Los tests no añaden coste de IA.

**¿La IA corrige igual que un preparador?**
No lo sabemos todavía y por eso no lo afirmamos. Para publicar una concordancia habría que comparar un conjunto de correcciones revisadas por un preparador con la nota que da el sistema.

## ¿Tienes un proceso parecido?

Podemos revisar el flujo actual, separar lo que conviene automatizar de lo que debe seguir bajo control humano y proponer una primera prueba medible.

[Cuéntanos tu proceso](/contacto/)
