---
title: "ALIA analiza galego falado con opción de ejecución local"
seoTitle: "ALIA analiza galego falado con opción de ejecución local | OSIX Tech"
description: "ALIA transcribe audio, detecta fenómenos lingüísticos y genera feedback en galego sin registro y con borrado automático de los datos."
lead: "ALIA transcribe audio, detecta fenómenos lingüísticos y genera feedback en galego sin registro y con borrado automático de los datos."
category: "IA lingüística y soberanía del dato"
services:
  - "desarrollo-a-medida"
order: 8
status: "Demo pública en producción desde el 26 de mayo de 2026, en colaboración con Proxecto Nós y la USC."
published: "2026-09-17"
metrics:
  - value: "36 s"
    label: "para un análisis completo en nube"
    note: "de extremo a extremo"
  - value: "19"
    label: "motores conmutables"
    note: "6 de transcripción · 11 de lenguaje · 2 de voz"
  - value: "495"
    label: "tests automatizados"
    note: "ejecutados en cada cambio"
secondaryMetrics:
  - value: "105"
    label: "castelanismos catalogados"
    note: "recurso lingüístico propio"
  - value: "104"
    label: "reglas de lusismos"
    note: "validadas después por un modelo de lenguaje"
  - value: "41"
    label: "patrones de muletilla"
    note: "detección de repeticiones"
  - value: "24 h"
    label: "hasta el borrado automático"
    note: "sin registro ni base de datos"
limit:
  title: "El límite que mantenemos visible"
  body:
    - "Lo que publicamos aquí es ingeniería y arquitectura, no adopción. El uso externo observable en tres meses de logs es mínimo, así que no damos usuarios, análisis realizados ni minutos de audio procesados."
    - "Los objetivos técnicos comprometidos, tasa de error de transcripción, recall de castelanismos y latencia en el percentil 95, siguen sin validar contra un conjunto anotado, y hasta que se validen no se presentan como conseguidos."
    - "El tiempo de análisis procede de mediciones puntuales, no de una serie con volumen. Lo damos como orden de magnitud."
facts:
  - key: "Contexto"
    value: "colaboración con el Proxecto Nós (USC); presentado en el Foro ALIA de junio de 2026."
  - key: "En producción desde"
    value: "26 de mayo de 2026."
  - key: "Entrada"
    value: "audio en galego, sin registro previo."
  - key: "Salida"
    value: "transcripción anotada, puntuaciones, métricas de voz y feedback, exportable a PDF."
  - key: "Datos"
    value: "sin base de datos; borrado automático a las 24 horas."
  - key: "Despliegue"
    value: "nube o ejecución 100 % local con modelos abiertos gallegos."
  - key: "Fuente de las cifras"
    value: "agregados de producción, logs y repositorios, sin datos personales."
  - key: "Fecha de corte"
    value: "8 de septiembre de 2026."
faqs:
  - question: "¿Qué pasa con los audios que se suben?"
    answer: "No se guardan. El sistema funciona sin registro y sin base de datos, y todo dato se borra automáticamente a las 24 horas."
  - question: "¿Se puede ejecutar sin enviar nada a la nube?"
    answer: "Sí. El mismo análisis puede correr en un pipeline 100 % local con modelos abiertos gallegos, que resuelve un audio de 60 segundos en 7 a 12 segundos sobre una GPU de gama media."
  - question: "¿Cuánta gente lo usa?"
    answer: "Poca, y no lo presentamos de otra forma. El uso externo observable es mínimo: este caso publica la ingeniería del sistema y la soberanía del dato, no cifras de adopción."
cta:
  title: "¿Tienes un proceso parecido?"
  body:
    - "Podemos revisar el flujo actual, separar lo que conviene automatizar de lo que debe seguir bajo control humano y proponer una primera prueba medible."
---

## Galego falado, sin registro y sin base de datos

ALIA es una demo pública: se sube un audio y se recibe una transcripción anotada, puntuaciones, métricas de voz y feedback en galego, exportable a PDF.

No hay registro ni base de datos, por diseño. Todo dato se borra automáticamente a las **24** horas, lo que convierte la privacidad en una propiedad de la arquitectura y no en una promesa del aviso legal.

El caso de uso está seleccionado y financiado dentro de la colaboración con el Proxecto Nós de la USC, y se presentó en el Foro ALIA en junio de 2026.

## Diecinueve motores conmutables, también en local

El sistema conmuta entre **19** motores: **6** de transcripción, **11** de lenguaje y **2** de voz, incluidos el ASR de Nós y las voces Celtia y Brais.

El mismo análisis puede ejecutarse en nube o completamente en local con modelos abiertos gallegos. Esa es la parte que importa para una administración o un centro educativo: el audio puede no salir nunca de su infraestructura.

La detección lingüística se apoya en recursos propios, **105** castelanismos, **104** reglas de lusismos y **41** patrones de muletilla, que después valida un modelo de lenguaje para reducir falsos positivos.

## Lo que está medido

Un análisis completo en nube tarda unos **36** segundos de extremo a extremo. El pipeline local resuelve un audio de **60** segundos en **7** a **12** segundos sobre una GPU de gama media.

El proyecto se construyó en **13** semanas con **85** commits, **26** pull requests, **26** incidencias cerradas y **7** decisiones de arquitectura documentadas, y se sostiene sobre **495** tests automatizados que se ejecutan en cada cambio.

La landing responde en **17** milisegundos de mediana y no registra errores **5**xx para usuarios reales.
