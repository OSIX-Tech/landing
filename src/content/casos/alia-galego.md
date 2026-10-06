---
title: "ALIA analiza galego falado sin guardar el audio y con opción 100 % local"
seoTitle: "ALIA: análisis de galego falado sin guardar datos y en local | OSIX Tech"
description: "ALIA transcribe audio en galego, detecta castelanismos y genera feedback sin registro, con borrado a las 24 horas y opción de ejecutarse sin salir del servidor propio."
lead: "ALIA transcribe audio en galego, detecta fenómenos lingüísticos y genera feedback sin registro ni base de datos. Puede ejecutarse en nube o en la infraestructura del propio centro, sin que el audio salga de ella."
category: "IA lingüística y soberanía del dato"
services:
  - "desarrollo-a-medida"
order: 8
status: "Demo pública en producción desde el 26 de mayo de 2026, en colaboración con Proxecto Nós y la USC."
published: "2026-09-17"
updated: "2026-10-06"
metrics:
  - value: "24 h"
    label: "como máximo guarda un audio"
    note: "sin registro ni base de datos"
  - value: "100 %"
    label: "ejecutable en local"
    note: "el audio no sale del servidor propio"
  - value: "250"
    label: "reglas lingüísticas propias"
    note: "castelanismos, lusismos y muletillas"
  - value: "13"
    label: "semanas hasta producción"
    note: "del inicio a la demo pública"
metricsNote: "ALIA no guarda los audios más de 24 horas y puede ejecutarse entera en la infraestructura del cliente. Detecta fenómenos del galego con 250 reglas propias y llegó a producción en 13 semanas."
relatedGuides:
  - "donde-se-guardan-datos-ia-empresa"
---

## Galego falado, sin registro y sin base de datos

ALIA es una demo pública: se sube un audio y se recibe una transcripción anotada, puntuaciones, métricas de voz y feedback en galego, exportable a PDF.

El caso de uso está seleccionado y financiado dentro de la colaboración con el Proxecto Nós de la USC, y se presentó en el Foro ALIA en junio de 2026.

No hay registro ni base de datos, por diseño. Todo dato se borra automáticamente a las **24** horas, lo que convierte la privacidad en una propiedad de la arquitectura y no en una promesa del aviso legal.

## El audio puede no salir nunca del centro

El mismo análisis puede ejecutarse en nube o completamente en local con modelos abiertos gallegos. Esa es la parte que importa para una administración o un centro educativo: el audio puede no salir nunca de su infraestructura.

Y no hace falta un servidor especial. El pipeline local resuelve un audio de **60** segundos en **7** a **12** segundos sobre una GPU de gama media. En nube, un análisis completo tarda unos **36** segundos de extremo a extremo.

## Hecho para el galego, no traducido

La detección lingüística se apoya en **250** reglas propias: más de un centenar de castelanismos, otro centenar de reglas de lusismos y decenas de patrones de muletilla. Después las valida un modelo de lenguaje para reducir falsos positivos.

La transcripción y la voz usan tecnología gallega, incluidos el ASR de Nós y las voces Celtia y Brais.

## Sin depender de un único proveedor de IA

El sistema puede cambiar de motor sin rehacerse: hay una veintena disponibles, de transcripción, de lenguaje y de voz. Si un proveedor sube precios, cambia condiciones o deja de servir, se cambia por otro.

Del inicio del proyecto a la demo pública pasaron **13** semanas, y cada cambio se prueba automáticamente antes de publicarse.

## Desglose de producción

| Cifra | Qué mide | Detalle |
| --- | --- | --- |
| **7–12 s** | por minuto de audio en local | GPU de gama media |
| **36 s** | por análisis completo en nube | de extremo a extremo |
| **3** | tipos de motor intercambiables | transcripción, lenguaje y voz |
| **0** | cuentas o datos personales pedidos | sin registro previo |

## El límite que mantenemos visible

Lo que publicamos aquí es capacidad y arquitectura, no adopción. El uso externo observable en tres meses de logs es mínimo, así que no damos usuarios, análisis realizados ni minutos de audio procesados.

Los objetivos técnicos comprometidos, tasa de error de transcripción, recall de castelanismos y latencia en el percentil 95, siguen sin validar contra un conjunto anotado, y hasta que se validen no se presentan como conseguidos.

El tiempo de análisis procede de mediciones puntuales, no de una serie con volumen. Lo damos como orden de magnitud.

## Ficha del proyecto

| | |
| --- | --- |
| **Contexto** | Colaboración con el Proxecto Nós (USC); presentado en el Foro ALIA de junio de 2026 |
| **En producción desde** | 26 de mayo de 2026 |
| **Entrada** | Audio en galego, sin registro previo |
| **Salida** | Transcripción anotada, puntuaciones, métricas de voz y feedback, exportable a PDF |
| **Datos** | Sin base de datos; borrado automático a las 24 horas |
| **Despliegue** | Nube o ejecución 100 % local con modelos abiertos gallegos |
| **Fuente de las cifras** | Agregados de producción, logs y repositorios, sin datos personales |
| **Fecha de corte** | 8 de septiembre de 2026 |

## Preguntas frecuentes

**¿Qué pasa con los audios que se suben?**
No se guardan. El sistema funciona sin registro y sin base de datos, y todo dato se borra automáticamente a las 24 horas.

**¿Se puede ejecutar sin enviar nada a la nube?**
Sí. El mismo análisis puede correr en un pipeline 100 % local con modelos abiertos gallegos, que resuelve un audio de 60 segundos en 7 a 12 segundos sobre una GPU de gama media.

**¿Qué pasa si el proveedor de IA cambia sus condiciones?**
Se cambia de motor. ALIA puede usar una veintena de motores distintos de transcripción, lenguaje y voz, y pasar de uno a otro no exige rehacer el sistema.

**¿Cuánta gente lo usa?**
Poca, y no lo presentamos de otra forma. El uso externo observable es mínimo: este caso publica la capacidad del sistema y la soberanía del dato, no cifras de adopción.

## ¿Tienes un proceso parecido?

Podemos revisar el flujo actual, separar lo que conviene automatizar de lo que debe seguir bajo control humano y proponer una primera prueba medible.

[Cuéntanos tu proceso](/contacto/)
