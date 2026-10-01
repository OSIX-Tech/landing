---
title: "Avalagro completa una ronda de evaluación en 9,9 minutos"
seoTitle: "Avalagro completa una ronda de evaluación en 9,9 minutos | OSIX Tech"
description: "Una cooperativa sustituyó la hoja de cálculo por una app bilingüe para evaluar semanalmente a sus equipos y generar históricos e informes."
lead: "Una cooperativa sustituyó la hoja de cálculo por una app bilingüe para evaluar semanalmente a sus equipos y generar históricos e informes."
category: "Aplicación móvil y evaluación de equipos"
services:
  - "desarrollo-a-medida"
order: 5
status: "En producción desde el 16 de abril de 2026. 18 empleados, 31 criterios y 146 evaluaciones registradas."
published: "2026-09-17"
metrics:
  - value: "9,9 min"
    label: "por ronda completa"
    note: "mediana · 18 empleados, unas 110 puntuaciones"
  - value: "1.009"
    label: "puntuaciones registradas"
    note: "146 evaluaciones desde abril"
  - value: "8,16"
    label: "nota media del equipo en septiembre"
    note: "desde 5,75 en mayo"
secondaryMetrics:
  - value: "31"
    label: "criterios ponderados"
    note: "18 empleados en 4 grupos"
  - value: "13"
    label: "rondas registradas"
    note: "8 completas y 5 parciales"
  - value: "145"
    label: "días sin redesplegar"
    note: "0 errores 5xx en 1.086 peticiones"
  - value: "8"
    label: "semanas hasta las tiendas"
    note: "del primer commit a la app publicada"
limit:
  title: "El límite que mantenemos visible"
  body:
    - "La subida de la nota media está en los datos, pero no la presentamos como causada por la app. Evaluar más a menudo, el propio efecto de medir y los cambios en el equipo entran todos en esa misma cifra."
    - "Tampoco publicamos usuarios activos: el sistema lo operan cuatro cuentas, y cualquier métrica de uso diario sobre esa base diría poco."
    - "Conviene dejar claro qué es este producto: evalúa desempeño. No gestiona turnos, partes de trabajo ni fichajes."
facts:
  - key: "Cliente"
    value: "Cooperativa Grille, sector lácteo."
  - key: "En producción desde"
    value: "16 de abril de 2026."
  - key: "Plataformas"
    value: "Android e iOS, en gallego y castellano."
  - key: "Alcance"
    value: "18 empleados, 4 grupos, 31 criterios ponderados."
  - key: "Salida"
    value: "histórico por empleado e informes en PDF."
  - key: "Fuente de las cifras"
    value: "agregados de producción, logs y repositorios, sin datos personales."
  - key: "Fecha de corte"
    value: "8 de septiembre de 2026."
faqs:
  - question: "¿La app gestiona turnos o fichajes?"
    answer: "No. Avalagro evalúa el desempeño del equipo con criterios ponderados y guarda el histórico. No cubre turnos, partes de trabajo ni control horario."
  - question: "¿La mejora de la nota se debe a la aplicación?"
    answer: "No lo afirmamos. La evolución de 5,75 a 8,16 está en los datos, pero coincide con un cambio de cadencia y con el efecto de medir con más frecuencia, así que la presentamos como evolución observada y no como causa demostrada."
  - question: "¿Qué gana una cooperativa evaluando cada quince días?"
    answer: "Sobre todo frecuencia. Con el método anterior la evaluación era trimestral; ahora una ronda completa cuesta menos de diez minutos, y el cliente ha pasado a evaluar cada quince días."
cta:
  title: "¿Tienes un proceso parecido?"
  body:
    - "Podemos revisar el flujo actual, separar lo que conviene automatizar de lo que debe seguir bajo control humano y proponer una primera prueba medible."
---

## La evaluación existía, pero vivía en una hoja de cálculo

Cooperativa Grille, del sector lácteo, evaluaba a su equipo con una hoja de cálculo y una cadencia trimestral. El histórico y los informes salían del mismo sitio y de la misma forma: a mano.

Lo que se gestiona son **18** empleados repartidos en cuatro grupos, con un supervisor y dos administradores, sobre **31** criterios ponderados.

## Evaluar desde el móvil y consolidar sin pasos intermedios

La app, disponible en gallego y castellano, permite al supervisor puntuar a todo el equipo desde el móvil sobre esos **31** criterios. La administración consulta los históricos y obtiene informes en PDF sin montar nada.

**17** de los **18** empleados ya tienen histórico acumulado, de forma que cada ronda se lee contra las anteriores en lugar de quedarse como una foto suelta.

De la primera línea de código a la app publicada en las tiendas pasaron unas ocho semanas.

## Cinco meses de uso, y un cambio de cadencia

Desde el **16** de abril de 2026 se han registrado **146** evaluaciones y **1.009** puntuaciones, repartidas en **8** rondas completas y **5** parciales.

Una ronda completa de **18** empleados, unas **110** puntuaciones, se cierra en **9,9** minutos de mediana desde el móvil.

El cambio más visible no es el tiempo por ronda, sino la frecuencia: el cliente pasó de evaluar cada trimestre a hacerlo cada quince días, **10** rondas en **21** semanas. En ese periodo la nota media del equipo pasó de **5,75** en mayo a **8,16** en septiembre. El servicio acumula **145** días sin redespliegue, **1.086** peticiones en treinta días y ningún error **5**xx.
