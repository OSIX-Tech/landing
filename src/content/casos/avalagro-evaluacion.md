---
title: "Una cooperativa láctea pasa de evaluar a su equipo cada trimestre a cada quince días"
seoTitle: "Avalagro: evaluar al equipo cada 15 días en 9,9 minutos | OSIX Tech"
description: "Una cooperativa sustituyó la hoja de cálculo por una app bilingüe para evaluar a su equipo cada quince días y generar históricos e informes."
lead: "Una cooperativa sustituyó la hoja de cálculo por una app bilingüe para evaluar a su equipo cada quince días y generar históricos e informes."
category: "Aplicación móvil y evaluación de equipos"
services:
  - "desarrollo-a-medida"
order: 5
status: "En producción desde el 16 de abril de 2026."
published: "2026-09-17"
updated: "2026-10-06"
metrics:
  - value: "15 días"
    label: "entre evaluaciones"
    note: "antes, una vez por trimestre"
  - value: "9,9 min"
    label: "por ronda completa"
    note: "mediana · todo el equipo desde el móvil"
  - value: "8"
    label: "semanas hasta las tiendas"
    note: "del primer commit a la app publicada"
metricsNote: "La cooperativa evaluaba a su equipo una vez por trimestre; ahora lo hace cada quince días, y una ronda completa le cuesta 9,9 minutos desde el móvil. La app llegó a las tiendas en ocho semanas."
figures:
  - id: "nota-media"
    type: "bars"
    title: "Nota media del equipo por mes"
    subtitle: "Evolución observada en las rondas registradas; no la atribuimos a la app"
    items:
      - label: "Mayo de 2026"
        value: 5.75
        display: "5,75"
      - label: "Septiembre de 2026"
        value: 8.16
        display: "8,16"
---

## La evaluación existía, pero vivía en una hoja de cálculo

Cooperativa Grille, del sector lácteo, evaluaba a su equipo con una hoja de cálculo y una cadencia trimestral. El histórico y los informes salían del mismo sitio y de la misma forma: a mano.

La plantilla se organiza en varios grupos, con un supervisor que puntúa y administradores que consultan, sobre una treintena de criterios ponderados.

## Evaluar desde el móvil y consolidar sin pasos intermedios

La app, disponible en gallego y castellano, permite al supervisor puntuar a todo el equipo desde el móvil sobre esos criterios. La administración consulta los históricos y obtiene informes en PDF sin montar nada.

El **94 %** de la plantilla ya tiene histórico acumulado, de forma que cada ronda se lee contra las anteriores en lugar de quedarse como una foto suelta.

De la primera línea de código a la app publicada en las tiendas pasaron unas ocho semanas.

## Cinco meses de uso, y un cambio de cadencia

Desde el **16** de abril de 2026 se han registrado más de **1.000** puntuaciones.

Una ronda completa de todo el equipo se cierra en **9,9** minutos de mediana desde el móvil.

El cambio más visible no es el tiempo por ronda, sino la frecuencia: el cliente pasó de evaluar cada trimestre a hacerlo cada quince días, **10** rondas en **21** semanas. En ese periodo la nota media del equipo pasó de **5,75** en mayo a **8,16** en septiembre. ![Nota media del equipo: 5,75 en mayo y 8,16 en septiembre de 2026](../../assets/figures/casos/avalagro-evaluacion/nota-media.png)

En los últimos treinta días no falló ninguna petición.

## Desglose de producción

| Cifra | Qué mide | Detalle |
| --- | --- | --- |
| **10** | rondas en 21 semanas | antes, una por trimestre |
| **94 %** | de la plantilla con histórico acumulado | cada ronda se compara con las anteriores |
| **+1.000** | puntuaciones registradas | desde abril de 2026 |
| **2** | idiomas | gallego y castellano, en Android e iOS |

## El límite que mantenemos visible

La subida de la nota media está en los datos, pero no la presentamos como causada por la app. Evaluar más a menudo, el propio efecto de medir y los cambios en el equipo entran todos en esa misma cifra.

Tampoco publicamos usuarios activos: el sistema lo operan unas pocas cuentas, y cualquier métrica de uso diario sobre esa base diría poco.

Conviene dejar claro qué es este producto: evalúa desempeño. No gestiona turnos, partes de trabajo ni fichajes.

## Ficha del proyecto

| | |
| --- | --- |
| **Cliente** | Cooperativa Grille, sector lácteo |
| **En producción desde** | 16 de abril de 2026 |
| **Plataformas** | Android e iOS, en gallego y castellano |
| **Alcance** | Toda la plantilla, por grupos y con criterios ponderados |
| **Salida** | Histórico por empleado e informes en PDF |
| **Fuente de las cifras** | Agregados de producción, logs y repositorios, sin datos personales |
| **Fecha de corte** | 8 de septiembre de 2026 |

## Preguntas frecuentes

**¿La app gestiona turnos o fichajes?**
No. Avalagro evalúa el desempeño del equipo con criterios ponderados y guarda el histórico. No cubre turnos, partes de trabajo ni control horario.

**¿La mejora de la nota se debe a la aplicación?**
No lo afirmamos. La evolución de 5,75 a 8,16 está en los datos, pero coincide con un cambio de cadencia y con el efecto de medir con más frecuencia, así que la presentamos como evolución observada y no como causa demostrada.

**¿Qué gana una cooperativa evaluando cada quince días?**
Sobre todo frecuencia. Con el método anterior la evaluación era trimestral; ahora una ronda completa cuesta menos de diez minutos, y el cliente ha pasado a evaluar cada quince días.

## ¿Tienes un proceso parecido?

Podemos revisar el flujo actual, separar lo que conviene automatizar de lo que debe seguir bajo control humano y proponer una primera prueba medible.

[Cuéntanos tu proceso](/contacto/)
