---
title: "¿Qué ocurre si quiero cambiar de proveedor durante un proyecto de software a medida?"
description: "Cómo cambiar de proveedor de software sin perder código, accesos, datos ni continuidad: auditoría, traspaso seguro y checklist para tu empresa."
subtitle: "Cómo recuperar el control, auditar el proyecto y hacer un traspaso sin perder código, accesos ni continuidad."
shortTitle: "Cómo cambiar de proveedor de software sin perder el proyecto"
summary: "Qué asegurar antes del cambio, cómo auditar el código y cómo hacer un traspaso sin perder accesos, datos ni continuidad"
category: "Continuidad"
section: "software-y-contratos"
published: "2026-09-30"
related:
  - "quien-es-dueno-codigo-fuente-software-encargo"
  - "trabajar-con-consultora-ia-sin-perder-control"
  - "modernizar-sistema-antiguo-sin-sustituir-todo"
---

Cambiar de proveedor durante un proyecto de software a medida no obliga a empezar de cero, pero sí exige recuperar el control antes de anunciar la decisión. Primero hay que asegurar repositorios, cuentas, datos, documentación y contratos; después, auditar el estado real del proyecto; por último, decidir si conviene continuar con el código existente, corregirlo por fases o rehacer una parte. La transición debe tener un responsable, entregables y un plan para que el sistema siga funcionando mientras el nuevo equipo aprende el contexto.

Esta guía explica cómo ordenar el cambio sin perder trabajo, accesos ni capacidad de decisión. No sustituye el asesoramiento jurídico que pueda necesitar tu empresa.

## Asegura el control antes de comunicar el cambio

El proveedor actual suele concentrar tres cosas que no deberían depender de una sola empresa: el código, los accesos y el conocimiento informal del proyecto. Si anuncias el cambio antes de recuperar esos elementos, puedes perder capacidad de negociación justo cuando más la necesitas.

Haz primero un inventario y comprueba que una persona de tu empresa puede entrar, descargar o administrar cada elemento:

| Área | Qué debes localizar y comprobar |
| --- | --- |
| Código | Repositorios, ramas activas, historial de cambios, paquetes privados y scripts de despliegue |
| Infraestructura | Cuenta de nube, servidores, DNS, dominios, certificados, almacenamiento y monitorización |
| Datos | Bases de datos, copias de seguridad, exportaciones, migraciones y permisos de acceso |
| Integraciones | APIs, cuentas de correo, pagos, analítica, CRM, ERP y servicios externos |
| Publicación | Cuentas de tiendas, certificados, claves de firma y procesos para publicar versiones |
| Seguridad | Secretos, claves API, usuarios administradores, registros de actividad y procedimiento de revocación |
| Producto | Documentación, requisitos, decisiones tomadas, incidencias abiertas, diseños y criterios de aceptación |
| Contratos | Propiedad intelectual, licencias, confidencialidad, tratamiento de datos, soporte, garantía y salida |

No guardes contraseñas en un documento compartido como solución permanente. El objetivo es que las cuentas principales estén a nombre de tu empresa, que el proveedor tenga permisos de colaborador y que puedas revocar esos permisos sin dejar el servicio fuera de línea.

Haz también una copia verificable del repositorio y de la base de datos. Descargar un archivo no demuestra que puedas restaurarlo. Prueba al menos una restauración en un entorno separado, sin modificar producción.

## Audita el proyecto antes de decidir qué hacer con él

Una impresión negativa del código no basta para decidir una reescritura. Tampoco basta con que el proveedor diga que el proyecto está casi terminado. Necesitas una revisión técnica independiente o, como mínimo, un diagnóstico con alcance escrito y acceso a los artefactos reales.

La auditoría debería responder estas preguntas:

- ¿Qué funcionalidades están terminadas y cuáles solo están simuladas?
- ¿Qué versión está en producción y coincide con el código entregado?
- ¿Cómo se construye, prueba y despliega el sistema?
- ¿Qué dependencias están obsoletas o tienen vulnerabilidades conocidas?
- ¿Hay pruebas automatizadas y cubren los flujos que más importan?
- ¿Qué deuda técnica bloquea el siguiente paso?
- ¿Qué integraciones dependen de cuentas o decisiones del proveedor saliente?
- ¿Qué datos se pueden exportar y en qué formato?
- ¿Qué riesgos pueden provocar una caída, pérdida de datos o incumplimiento?
- ¿Qué parte del trabajo se puede reutilizar con seguridad?

El resultado no debería ser una opinión general, sino un mapa de decisiones. Para cada módulo, clasifica el estado como continuar, corregir, aislar, sustituir o retirar. Asocia cada decisión a un riesgo, una estimación y una prueba que permita comprobarla.

La página de [Dribba sobre el cambio de empresa de desarrollo](https://dribba.com/cambiar-empresa-desarrollo-software) resume esta secuencia como control, auditoría técnica, plan de transición y continuidad. También plantea la pregunta correcta: no si el código parece malo, sino si su estado real permite recuperarlo con un coste razonable.

## Elige entre continuar, refactorizar o rehacer con datos

Hay tres decisiones habituales, y ninguna debería tomarse por orgullo del equipo entrante ni por defender el trabajo del equipo saliente.

**Continuar** tiene sentido cuando el código se puede construir, probar y desplegar, la arquitectura sigue siendo válida y los riesgos están localizados. En ese caso, el nuevo proveedor necesita tiempo para entender el sistema y corregir lo urgente sin cambiarlo todo a la vez.

**Refactorizar** encaja cuando el producto funciona, pero ciertas partes dificultan el mantenimiento, las pruebas o la evolución. Puedes aislar un módulo, añadir pruebas, actualizar una dependencia o sustituir una integración sin detener todo el proyecto.

**Rehacer una parte** puede ser razonable si el módulo no se puede probar, depende de accesos que no puedes recuperar, pierde datos, incumple un requisito esencial o cuesta más estabilizarlo que sustituirlo. La decisión debe comparar el coste de recuperar el código con el coste, el plazo y el riesgo de reconstruirlo.

Evita dos errores simétricos. El primero es conservar todo por miedo a perder la inversión. El segundo es prometer una reescritura completa antes de entender qué funciona. La auditoría debe reducir esas dos tentaciones a una decisión documentada.

## Diseña el traspaso como un entregable propio

El cambio de proveedor no termina cuando el nuevo equipo obtiene acceso al repositorio. Termina cuando puede operar el sistema, explicar sus riesgos y entregar cambios sin depender de conversaciones privadas con la empresa anterior.

Define un plan de traspaso con estas piezas:

1. **Responsables.** Una persona de tu empresa decide prioridades, acepta entregables y autoriza cambios en producción.
2. **Alcance.** Lista qué módulos, entornos, cuentas, datos e integraciones se transfieren.
3. **Orden.** Asegura primero producción y las copias de seguridad; después, desarrollo, documentación y backlog.
4. **Accesos.** Crea usuarios nominales, aplica el principio de mínimo privilegio y registra qué permisos se conceden.
5. **Documentación.** Pide arquitectura, instalación, despliegue, variables de entorno, dependencias, integraciones, incidencias conocidas y decisiones pendientes.
6. **Sesiones de conocimiento.** Graba o documenta las explicaciones sobre procesos que no aparecen en el código.
7. **Criterios de aceptación.** Define qué debe demostrar el nuevo equipo para considerar completado el traspaso.
8. **Solapamiento.** Si es posible, mantén una etapa breve en la que el proveedor saliente responde dudas mientras el entrante toma el control.
9. **Plan de continuidad.** Decide quién atiende una incidencia crítica durante el cambio y cómo se revierte un despliegue fallido.
10. **Cierre de accesos.** Revoca usuarios, tokens, claves y permisos cuando la transferencia esté comprobada.

El solapamiento no siempre es posible. Puede haber conflicto contractual, falta de cooperación o riesgo de seguridad. Si no puedes hacerlo, compensa la falta de contexto con una auditoría más profunda, documentación propia y cambios pequeños antes de tocar las partes críticas.

## Separa lo técnico, lo contractual y lo legal

“Quiero el código” no describe todo lo que necesitas recibir ni todo lo que tienes derecho a usar. Hay que distinguir entre la entrega material del código, los derechos de explotación, los componentes previos del proveedor, las licencias de terceros y las obligaciones del contrato.

Revisa con asesoramiento jurídico, cuando corresponda:

- qué derechos se cedieron o licenciaron y con qué alcance;
- si existen componentes reutilizables del proveedor sujetos a una licencia propia;
- qué ocurre con librerías y servicios de terceros;
- si hay pagos pendientes, garantías, penalizaciones o avisos de terminación;
- qué obligaciones de confidencialidad sobreviven al contrato;
- cómo se exportan y eliminan los datos;
- quién actúa como responsable y quién como encargado del tratamiento;
- qué subencargados y transferencias internacionales intervienen.

La [AEPD explica que un componente de IA puede tratar datos personales en distintas etapas de su ciclo de vida](https://www.aepd.es/prensa-y-comunicacion/notas-de-prensa/la-aepd-publica-una-guia-para-adaptar-al-rgpd-los-productos-y). Por eso, durante el traspaso no basta con mover el código. Hay que saber qué datos se copian, quién accede a ellos, dónde se almacenan y cuándo se eliminan las copias que ya no hacen falta.

No bloquees una decisión técnica esperando resolver toda la relación contractual, pero tampoco pongas en producción una copia de datos o una nueva integración sin aclarar quién puede tratarla y con qué finalidad.

## Mantén la operación mientras el nuevo equipo aprende

El mayor riesgo del cambio no es solo retrasar el siguiente desarrollo. También es dejar sin respuesta el sistema que ya usan clientes, empleados o proveedores.

Antes de modificar producción, acuerda:

- qué incidencias tienen prioridad;
- quién recibe las alertas;
- qué cambios quedan congelados durante la transferencia;
- qué copias de seguridad se hacen y cómo se verifica su restauración;
- quién aprueba una publicación urgente;
- qué procedimiento se sigue si una versión falla;
- qué métricas indican que el servicio sigue funcionando;
- cuándo se revisa el estado del traspaso.

Empieza por cambios reversibles y observables. Un nuevo proveedor debería poder demostrar que ha levantado el sistema, ejecutado las pruebas principales, desplegado en un entorno de prueba y recuperado una copia antes de asumir cambios de alto riesgo.

La guía de [Kovensa sobre cambiar de proveedor de software](https://kovensa.com/blog/cambiar-proveedor-software) añade cuatro criterios útiles para comparar opciones: puesta en marcha, capacidad de adaptación, dependencia y coste de cambiar más adelante. En una transición real, esos criterios sirven para revisar si el nuevo acuerdo corrige la dependencia anterior o solo la cambia de nombre.

## Comprueba el traspaso con esta lista

Antes de darlo por terminado, pide una evidencia concreta para cada punto:

- [ ] Tu empresa administra el repositorio principal y conserva una copia verificable.
- [ ] Puedes construir el proyecto siguiendo una documentación escrita.
- [ ] Puedes desplegarlo en un entorno de prueba sin depender de una persona concreta.
- [ ] Las cuentas de nube, dominios, tiendas, pagos y servicios externos están identificadas.
- [ ] Las copias de seguridad se han restaurado en un entorno separado.
- [ ] Las claves, secretos y certificados críticos están bajo control de tu empresa.
- [ ] La base de datos y los datos relevantes se pueden exportar.
- [ ] Las integraciones tienen responsable, documentación y credenciales renovables.
- [ ] Los bugs y riesgos conocidos tienen una lista priorizada.
- [ ] El nuevo equipo ha ejecutado los flujos principales con datos de prueba.
- [ ] Existe un procedimiento para incidencias y despliegues fallidos.
- [ ] Los permisos del proveedor saliente se han revisado y revocado cuando corresponde.
- [ ] El contrato define propiedad, licencias, soporte, garantía y condiciones de salida.
- [ ] Las obligaciones de protección de datos están documentadas para el nuevo flujo.
- [ ] Tu equipo sabe a quién llamar y qué hacer si el nuevo proveedor deja de responder.

Un documento firmado sin una prueba operativa no demuestra que la transición haya terminado. La prueba es que tu empresa pueda recuperar el servicio y tomar decisiones sin pedir permiso al proveedor anterior.

## Estas señales justifican parar antes de seguir desarrollando

Pide una explicación y una decisión escrita si ocurre cualquiera de estas situaciones:

- No puedes entrar en la cuenta donde vive producción.
- El repositorio entregado no coincide con la versión desplegada.
- No existe una copia de seguridad que se haya restaurado con éxito.
- El proveedor no puede explicar qué datos salen de tu sistema.
- Nadie puede reproducir una instalación o un despliegue.
- El código depende de una cuenta personal o de una clave que no puedes renovar.
- El nuevo proveedor propone reescribirlo todo sin auditoría.
- Te piden seguir pagando antes de definir qué se entrega y cómo se acepta.
- Hay una incidencia activa y nadie tiene autoridad clara para resolverla.

Estas señales no prueban por sí solas que el proyecto sea irrecuperable. Sí indican que seguir añadiendo funcionalidades puede aumentar el coste de la transición y ocultar problemas que conviene medir primero.

## Preguntas frecuentes

### ¿Tengo que empezar de cero si cambio de proveedor?

No necesariamente. La decisión depende del estado real del código, la documentación, las dependencias, los datos y la arquitectura. Una auditoría técnica puede mostrar qué se conserva, qué se corrige y qué conviene rehacer antes de comprometer el siguiente presupuesto.

### ¿Qué debo pedir al proveedor anterior?

Pide repositorios con historial, documentación, accesos, cuentas, copias de seguridad verificadas, claves y certificados, configuración de despliegue, lista de dependencias, incidencias abiertas, decisiones de arquitectura y una exportación de los datos que puedas utilizar legítimamente. Revisa también el contrato para distinguir entrega, propiedad y licencias.

### ¿Cuándo debo comunicar que voy a cambiar de proveedor?

Primero recupera, dentro de lo permitido por el contrato, la información y los accesos necesarios para proteger la continuidad. Después prepara el plan de traspaso, la auditoría y la fecha de corte. Si existe un riesgo inmediato de seguridad o pérdida de datos, prioriza contenerlo y busca asesoramiento técnico y jurídico.

### ¿Cuánto tarda el cambio?

No hay un plazo universal. Depende de si el proyecto está en producción, del número de integraciones, de la calidad de la documentación, del estado de las pruebas, de la cooperación del proveedor saliente y de los requisitos legales. Pide que el nuevo proveedor separe el diagnóstico, el traspaso y el desarrollo posterior, en lugar de esconderlo todo en una sola fecha.

### ¿Debe el nuevo proveedor prometer que conservará todo el código?

No. Debe explicar qué ha revisado, qué considera reutilizable, qué riesgos ha encontrado y qué criterios usará para decidir. Una promesa de conservarlo todo puede ser tan poco rigurosa como una promesa de rehacerlo todo.

### ¿Puede ayudarme OSIX a cambiar de proveedor?

OSIX desarrolla software a medida, aplicaciones, plataformas, agentes inteligentes y automatizaciones para pymes de Galicia y España, según su [página de desarrollo a medida](https://osix.tech/servicios/desarrollo-a-medida/). Esta guía no supone una oferta de auditoría de emergencia, rescate técnico ni representación legal. Si valoras a OSIX o a cualquier otro proveedor para continuar el proyecto, pide el alcance de la auditoría, los entregables del traspaso, las condiciones de soporte y la forma de medir el resultado antes de contratar.

## Fuentes consultadas

- [Cómo cambiar de empresa de desarrollo de software sin perder el proyecto, Dribba](https://dribba.com/cambiar-empresa-desarrollo-software)
- [Cómo cambiar de proveedor de software sin riesgos, Kovensa](https://kovensa.com/blog/cambiar-proveedor-software)
- [Guía de la AEPD para adaptar al RGPD los productos y servicios que utilizan IA](https://www.aepd.es/prensa-y-comunicacion/notas-de-prensa/la-aepd-publica-una-guia-para-adaptar-al-rgpd-los-productos-y)
- [Cómo trabajar con una consultora de IA sin perder el control, OSIX Tech](https://osix.tech/guias/trabajar-con-consultora-ia-sin-perder-control/)
- [Desarrollo a medida, OSIX Tech](https://osix.tech/servicios/desarrollo-a-medida/)

Esta guía fue preparada como orientación general. Para revisar derechos de propiedad intelectual, protección de datos, terminación contractual o responsabilidades concretas, consulta a un profesional cualificado.
