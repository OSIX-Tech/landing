---
title: "TAKE registra visitas y recompensas desde una app móvil"
seoTitle: "TAKE registra visitas y recompensas desde una app móvil | OSIX Tech"
description: "Una cafetería de Santiago usa una app con tarjeta en Wallet, sellos QR, recompensas y juegos para medir la repetición de sus clientes."
lead: "Una cafetería de Santiago usa una app con tarjeta en Wallet, sellos QR, recompensas y juegos para medir la repetición de sus clientes."
category: "Aplicaciones móviles y fidelización"
services:
  - "desarrollo-a-medida"
order: 4
status: "En producción desde el 28 de agosto de 2025. 2.119 recompensas entregadas."
published: "2026-09-17"
metrics:
  - value: "37.627"
    label: "visitas selladas con QR"
    note: "42.369 sellos en un año"
  - value: "2.921"
    label: "usuarios registrados"
    note: "960 en el primer mes"
  - value: "90,3 %"
    label: "repetición entre clientes sellados"
    note: "1.819 clientes distintos"
secondaryMetrics:
  - value: "2.119"
    label: "recompensas entregadas"
    note: "a 812 clientes distintos"
  - value: "2.275"
    label: "tarjetas en Apple o Google Wallet"
    note: "78 % de los usuarios"
  - value: "20,7"
    label: "visitas por cliente sellado"
    note: "681 clientes con 15 o más"
  - value: "1.888"
    label: "jugadores en los minijuegos"
    note: "65 % de los registrados"
limit:
  title: "El límite que mantenemos visible"
  body:
    - "La repetición describe a los clientes que sellaron alguna vez. No la presentamos como atribución causal sobre las ventas: demostrar eso exige cruzar el TPV de la cafetería antes y después, y ese dato no está en el sistema."
    - "El negocio es estacional y sigue el calendario del campus. Por eso publicamos la ventana completa de un año y no los últimos treinta días, que caen en verano y dirían lo contrario de lo que ocurre en octubre."
facts:
  - key: "Cliente"
    value: "cafetería TAKE, Santiago de Compostela."
  - key: "En producción desde"
    value: "28 de agosto de 2025."
  - key: "Plataformas"
    value: "iOS y Android, con tarjeta en Apple Wallet y Google Wallet."
  - key: "Funciones"
    value: "sellos por QR, recompensa automática a los 15 sellos, carta, eventos y minijuegos con ranking."
  - key: "Time to market"
    value: "unas 5 semanas del repositorio a los primeros usuarios."
  - key: "Fuente de las cifras"
    value: "agregados de producción, logs y repositorios, sin datos personales."
  - key: "Fecha de corte"
    value: "8 de septiembre de 2026."
faqs:
  - question: "¿El cliente tiene que abrir la app para sellar?"
    answer: "No hace falta. El 78 % de los usuarios lleva la tarjeta en Apple Wallet o Google Wallet, y el sellado se hace por QR sobre esa tarjeta."
  - question: "¿Estas cifras demuestran que la cafetería vende más?"
    answer: "Demuestran repetición de visita, no incremento de ventas. Para afirmar lo segundo habría que comparar los datos del TPV antes y después del programa, y ese cruce no está hecho."
  - question: "¿Sirve para un negocio que no sea de hostelería?"
    answer: "El mecanismo, tarjeta en Wallet, sellado por QR y recompensa automática, no es exclusivo de la hostelería. Pero las cifras de este caso corresponden a una cafetería con público universitario y a su estacionalidad concreta."
cta:
  title: "¿Tienes un proceso parecido?"
  body:
    - "Podemos revisar el flujo actual, separar lo que conviene automatizar de lo que debe seguir bajo control humano y proponer una primera prueba medible."
---

## Una cafetería, una app y un año de datos

TAKE es una cafetería de Santiago de Compostela con un público mayoritariamente universitario. La app salió a finales de agosto de 2025 con tarjeta de sellos en Apple y Google Wallet, recompensa automática al llegar a quince sellos, carta, eventos y dos minijuegos con ranking.

Del primer commit del repositorio a los primeros usuarios reales pasaron unas cinco semanas.

## La tarjeta vive en el Wallet, no dentro de la app

El cliente guarda su tarjeta en Apple Wallet o Google Wallet: lo han hecho **2.275** usuarios, el **78 %** del total. Sellar no obliga a abrir la aplicación, que es donde se cae la mayoría de los programas de fidelización.

Al llegar a quince sellos la recompensa se entrega sola. Se han entregado **2.119** a **812** clientes distintos.

Los minijuegos los usa el **65 %** de los registrados: **1.888** jugadores, **4.301** puntuaciones y **41** rankings, con hasta **706** participantes en un solo periodo. Además, **1.594** usuarios tienen las notificaciones activas, algo más de la mitad.

## Un año en producción

En el primer mes se registraron **960** clientes y a lo largo del año **2.921**. De ellos, **1.819** han sellado alguna vez, el **62 %**, y el **90,3 %** de quienes sellan vuelve. El cliente medio acumula **20,7** visitas, y **681** clientes superan las quince.

En total son **37.627** visitas selladas con QR y **42.369** sellos. Los días de apertura registran **145** sellados de media, con un máximo de **334**.

La retención a **30** días es del **40,3 %**, y sube a alrededor del **47 %** en las cohortes de otoño; el **70 %** de los usuarios vuelve después de la primera semana. La API responde en **127** milisegundos de mediana y acumula un único error **5**xx en **2.444** peticiones.
