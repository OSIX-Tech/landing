---
title: "El 90 % de los clientes que sellan en TAKE vuelve: un año de fidelización con app y Wallet"
seoTitle: "TAKE: 90 % de repetición con tarjeta de sellos en Wallet | OSIX Tech"
description: "Una cafetería de Santiago usa una app con tarjeta en Wallet, sellos QR, recompensas y juegos para medir la repetición de sus clientes."
lead: "Una cafetería de Santiago usa una app con tarjeta en Wallet, sellos QR, recompensas y juegos para medir la repetición de sus clientes."
category: "Aplicaciones móviles y fidelización"
services:
  - "desarrollo-a-medida"
order: 4
status: "En producción desde el 28 de agosto de 2025. Más de 2.000 recompensas entregadas."
published: "2026-09-17"
updated: "2026-10-06"
metrics:
  - value: "90,3 %"
    label: "repetición entre clientes que sellan"
    note: "20,7 visitas de media por cliente"
  - value: "40,3 %"
    label: "retención a 30 días"
    note: "47 % en las cohortes de otoño"
  - value: "78 %"
    label: "lleva la tarjeta en el Wallet"
    note: "sella sin abrir la app"
  - value: "+37.000"
    label: "visitas selladas con QR"
    note: "en un año"
metricsNote: "El 90,3 % de los clientes que sellan vuelve, y el 78 % lleva la tarjeta en Apple o Google Wallet. En un año la cafetería ha registrado más de 37.000 visitas selladas."
figures:
  - id: "usuarios-por-funcion"
    type: "bars"
    title: "Qué usan los clientes de la app"
    subtitle: "Porcentaje sobre los usuarios registrados en un año"
    items:
      - label: "Tarjeta en Apple o Google Wallet"
        value: 78
        display: "78 %"
      - label: "Juegan a los minijuegos"
        value: 65
        display: "65 %"
      - label: "Han sellado alguna vez"
        value: 62
        display: "62 %"
      - label: "Notificaciones activas"
        value: 55
        display: "55 %"
---

## Una cafetería, una app y un año de datos

TAKE es una cafetería de Santiago de Compostela con un público mayoritariamente universitario. La app salió a finales de agosto de 2025 con tarjeta de sellos en Apple y Google Wallet, recompensa automática al llegar a quince sellos, carta, eventos y dos minijuegos con ranking.

Del primer commit del repositorio a los primeros usuarios reales pasaron unas cinco semanas.

## La tarjeta vive en el Wallet, no dentro de la app

El **78 %** de los usuarios guarda su tarjeta en Apple Wallet o Google Wallet. Sellar no obliga a abrir la aplicación, que es donde se cae la mayoría de los programas de fidelización.

Al llegar a quince sellos la recompensa se entrega sola. Se han entregado más de **2.000**.

Los minijuegos los usa el **65 %** de los registrados, con rankings por periodo que reúnen a cientos de participantes. Además, el **55 %** de los usuarios tiene las notificaciones activas.

## Un año en producción

En el primer mes se registraron casi mil clientes, y a lo largo del año casi **3.000**. El **62 %** ha sellado alguna vez, y el **90,3 %** de quienes sellan vuelve. El cliente medio acumula **20,7** visitas, y cientos de clientes superan las quince.

![Qué usan los clientes de la app: 78 % tarjeta en Wallet, 65 % minijuegos, 62 % han sellado y 55 % notificaciones activas](../../assets/figures/casos/take-fidelizacion/usuarios-por-funcion.png)

En total son más de **37.000** visitas selladas con QR. Los días de apertura registran más de un centenar de sellados de media, y el día más fuerte superó los trescientos.

La retención a **30** días es del **40,3 %**, y sube a alrededor del **47 %** en las cohortes de otoño; el **70 %** de los usuarios vuelve después de la primera semana. En la ventana de registros revisada solo falló el **0,04 %** de las peticiones.

## Desglose de producción

| Cifra | Qué mide | Detalle |
| --- | --- | --- |
| **20,7** | visitas por cliente sellado | de media en un año |
| **70 %** | de los usuarios vuelve tras la primera semana | retención temprana |
| **65 %** | de los registrados juega a los minijuegos | rankings por periodo |
| **+2.000** | recompensas entregadas | automáticas a los 15 sellos |

## El límite que mantenemos visible

La repetición describe a los clientes que sellaron alguna vez. No la presentamos como atribución causal sobre las ventas: demostrar eso exige cruzar el TPV de la cafetería antes y después, y ese dato no está en el sistema.

El negocio es estacional y sigue el calendario del campus. Por eso publicamos la ventana completa de un año y no los últimos treinta días, que caen en verano y dirían lo contrario de lo que ocurre en octubre.

## Ficha del proyecto

| | |
| --- | --- |
| **Cliente** | Cafetería TAKE, Santiago de Compostela |
| **En producción desde** | 28 de agosto de 2025 |
| **Plataformas** | iOS y Android, con tarjeta en Apple Wallet y Google Wallet |
| **Funciones** | Sellos por QR, recompensa automática a los 15 sellos, carta, eventos y minijuegos con ranking |
| **Time to market** | Unas 5 semanas del repositorio a los primeros usuarios |
| **Fuente de las cifras** | Agregados de producción, logs y repositorios, sin datos personales |
| **Fecha de corte** | 8 de septiembre de 2026 |

## Preguntas frecuentes

**¿El cliente tiene que abrir la app para sellar?**
No hace falta. El 78 % de los usuarios lleva la tarjeta en Apple Wallet o Google Wallet, y el sellado se hace por QR sobre esa tarjeta.

**¿Estas cifras demuestran que la cafetería vende más?**
Demuestran repetición de visita, no incremento de ventas. Para afirmar lo segundo habría que comparar los datos del TPV antes y después del programa, y ese cruce no está hecho.

**¿Sirve para un negocio que no sea de hostelería?**
El mecanismo, tarjeta en Wallet, sellado por QR y recompensa automática, no es exclusivo de la hostelería. Pero las cifras de este caso corresponden a una cafetería con público universitario y a su estacionalidad concreta.

## ¿Tienes un proceso parecido?

Podemos revisar el flujo actual, separar lo que conviene automatizar de lo que debe seguir bajo control humano y proponer una primera prueba medible.

[Cuéntanos tu proceso](/contacto/)
