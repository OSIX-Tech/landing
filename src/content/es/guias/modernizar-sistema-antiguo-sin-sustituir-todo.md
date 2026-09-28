Sí. Una pyme puede modernizar un sistema antiguo por partes: conservar lo que todavía funciona, aislar las funciones que limitan el negocio e ir sustituyéndolas cuando exista una alternativa probada. La clave es empezar por un proceso concreto, entender sus dependencias y mantener una forma segura de volver atrás. No siempre compensa migrar gradualmente: si el sistema es pequeño, no se puede integrar o necesita retirarse con urgencia, una sustitución completa puede ser más sencilla.

## La modernización empieza por el problema, no por la edad del software

Que un programa tenga años no demuestra por sí solo que haya que cambiarlo. La decisión debe partir de lo que impide hacer: cambios cada vez más lentos o caros, soporte que termina, fallos que interrumpen el trabajo, información atrapada en el sistema o procesos que el equipo mantiene en hojas de cálculo y tareas manuales.

Antes de elegir tecnología, anota el resultado que buscas. Por ejemplo: reducir el tiempo que lleva registrar un pedido, conectar una aplicación de almacén con el sistema de gestión, o retirar un servidor sin soporte. “Modernizar” no es un resultado medible. El problema operativo sí puede serlo.

Martin Fowler y sus coautores describen un riesgo habitual: los proyectos de reemplazo largos pueden quedarse a medias, mientras el sistema anterior sigue acumulando trabajo y complejidad. Su recomendación es aclarar primero los resultados, dividir el cambio en partes manejables y entregar esas partes de forma incremental ([Patterns of Legacy Displacement](https://martinfowler.com/articles/patterns-legacy-displacement/)).

## Elige entre conservar, conectar, reemplazar por partes o sustituir

No hay una única ruta para todos los sistemas. Empieza por la intervención menos amplia que resuelva el problema real.

| Opción | Cuándo encaja | Qué comprobar |
| --- | --- | --- |
| Mantener y corregir | El sistema cumple su función y los cambios pendientes son acotados | Coste de soporte, seguridad, copias de respaldo y capacidad de hacer los cambios necesarios |
| Configurar o ampliar | El producto ya tiene una función o módulo que no está activado | Si cubre el proceso completo, incluidos los casos excepcionales |
| Conectar con otros sistemas | El sistema sigue siendo útil, pero necesita intercambiar datos con otra aplicación | Quién es responsable de cada dato y qué pasa cuando falla la sincronización |
| Reemplazar una función cada vez | El sistema es difícil de cambiar, pero puede convivir durante un tiempo con piezas nuevas | Si se pueden dirigir las operaciones a la función nueva y controlar las dependencias |
| Sustituirlo por completo | Es pequeño, no se puede integrar de forma fiable o debe retirarse pronto | Migración de datos, formación, interrupción, integraciones y coste de volver atrás |

Conectar un sistema no lo vuelve moderno por arte de magia. La integración añade sus propias tareas: vigilar errores, gestionar credenciales y cambios de formato, evitar duplicados y decidir qué aplicación puede modificar cada dato.

## Haz un mapa antes de tocar el sistema

Dibuja un flujo real, desde que alguien inicia una tarea hasta que queda completada. Incluye los pasos que el equipo hace fuera del programa, como copiar datos a una hoja de cálculo, enviar un correo para corregir un pedido o volver a introducir información en otra pantalla.

Para cada paso, registra:

- Qué lo inicia y quién es responsable.
- Qué datos entran, dónde se guardan y quién puede modificarlos.
- Qué regla decide el paso siguiente.
- Qué otros programas, archivos, dispositivos o personas dependen de él.
- Qué ocurre si falta un dato, un sistema no responde o el resultado es incorrecto.

Este mapa ayuda a detectar una unidad de cambio manejable. Puede ser una función como emitir un informe, consultar disponibilidad o preparar una orden, no necesariamente un departamento entero. Anota también los datos compartidos: si el sistema antiguo y el nuevo pueden actualizar el mismo registro, hace falta una regla clara para evitar discrepancias.

## Migra una parte cada vez y conserva una ruta de vuelta

Microsoft describe el patrón de modernización incremental “Strangler Fig” como una transición en la que una capa intermedia, a veces llamada fachada o proxy, dirige cada solicitud al sistema antiguo o a la nueva función, hasta que esta última asume el trabajo y el componente anterior puede retirarse. Microsoft advierte que hay que gestionar dependencias y datos compartidos, y que esa capa puede convertirse en un punto de fallo o un cuello de botella ([Microsoft Learn: Strangler Fig pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig)).

En una pyme, la idea puede traducirse en cinco pasos prácticos:

1. **Escoge un flujo acotado.** Prioriza una tarea que cause un coste o una demora comprobable y cuyo resultado puedas revisar.
2. **Comprueba cómo se integra el sistema.** Busca una API, una exportación fiable, un conector o una forma controlada de recibir y enviar datos. Si no puedes interceptar las operaciones ni modificar el programa, la migración gradual puede no ser viable.
3. **Define el destino de cada dato.** Aclara qué sistema es la fuente oficial para cada registro, cómo se reconcilian cambios y quién resuelve una discrepancia.
4. **Prueba sin duplicar efectos.** Compara los resultados de la función nueva con casos reales. Si haces una prueba en paralelo, evita que ambos sistemas escriban o ejecuten la misma operación de negocio.
5. **Cambia el tráfico cuando pase los controles.** Define antes de empezar qué condiciones permiten activar la nueva función, quién puede parar el cambio y cómo se vuelve al flujo anterior.

La ruta de vuelta debe estar escrita y ensayada, no ser una frase en una reunión. Conserva los datos y la función anterior hasta que el nuevo flujo haya pasado las comprobaciones acordadas. Retirar tablas, procesos o accesos antiguos puede hacer que una reversión sea mucho más difícil; por eso la retirada va después de validar la nueva fuente de datos y resolver las dependencias.

## Prueba datos, permisos y excepciones, no solo la pantalla

Una demostración puede parecer correcta mientras los datos reales se pierden, se duplican o quedan desactualizados. Antes de activar una función nueva, prueba al menos:

- Registros incompletos, duplicados y con formatos antiguos.
- Cambios hechos en ambos sistemas durante la convivencia.
- Errores de conexión, reintentos y operaciones procesadas más de una vez.
- Usuarios con distintos permisos.
- Copias de seguridad y restauración de los datos relevantes.
- Un caso en que el equipo tenga que volver temporalmente al procedimiento anterior.

No hagas pruebas de escritura sobre producción sin una protección adecuada. Si una operación crea facturas, modifica existencias o envía información a un cliente, usa un entorno de prueba o un modo que no produzca ese efecto. Define quién revisa las excepciones y cómo se deja constancia de la corrección.

## La convivencia temporal tiene un coste

Migrar por partes reduce el tamaño del cambio inicial, pero durante un tiempo hay que operar y mantener más de un componente. Puede hacer falta sincronizar datos, adaptar formatos, vigilar una capa de enrutamiento y formar al equipo para trabajar con excepciones. La arquitectura temporal también necesita responsable y fecha de revisión.

Por eso no conviene reemplazar piezas solo para usar una tecnología más nueva. Compara el coste de mantener el sistema, el coste de convivir con sistemas antiguos y nuevos, y el coste completo de sustituirlo. Incluye soporte, integración, limpieza y traslado de datos, formación, tiempo de parada y mantenimiento futuro. Si la modernización no mejora un resultado operativo ni reduce un riesgo real, el cambio puede esperar.

## Cuándo sí puede compensar una sustitución completa

Una sustitución total merece evaluación cuando el sistema es pequeño y su comportamiento se entiende bien, cuando no existe una forma fiable de integrarlo, cuando ya no recibe soporte o cuando la empresa necesita retirarlo en un plazo que no permite una transición larga. También puede ser preferible si mantener dos versiones duplicaría el riesgo o el coste sin entregar valor intermedio.

Antes de aprobarla, comprueba que el alcance incluye las reglas reales del negocio, no solo las funciones visibles. Recupera ejemplos de entradas y resultados, identifica los procesos que dependen del sistema y decide qué datos deben migrarse, archivarse o eliminarse. No hace falta copiar cada comportamiento antiguo: primero decide cuáles siguen siendo necesarios.

## Preguntas frecuentes

**¿Necesito cambiar un programa solo porque sea antiguo?**

No. Cambiarlo tiene sentido cuando su coste, falta de soporte, riesgo o limitaciones afectan al trabajo y no se resuelven con una corrección o integración razonable.

**¿Se puede conectar un sistema antiguo aunque no tenga API?**

A veces, mediante exportaciones, archivos estructurados, conectores o cambios en el propio sistema. Depende de cómo almacene y exponga la información. Si no se pueden interceptar operaciones ni obtener datos fiables, puede que la modernización gradual no sea adecuada.

**¿Cómo evito perder datos durante la migración?**

Define qué sistema es la fuente oficial de cada dato, conserva copias verificables, prueba la conversión con una muestra representativa y compara recuentos y campos antes de cambiar el uso. Mantén un plan para corregir o revertir discrepancias.

**¿Cuánto tarda modernizar un sistema por partes?**

No hay un plazo universal. Depende de cuántas funciones y dependencias existan, de la calidad de los datos, de las opciones de integración y del tiempo durante el que deban convivir los sistemas. Se puede estimar mejor después de mapear un flujo concreto y probar el acceso a sus datos.

## Fuentes y alcance

Esta guía resume un método general de evaluación y migración incremental. No describe un proyecto concreto de OSIX ni promete que todos los sistemas puedan modernizarse por etapas. El patrón, sus condiciones de uso y sus límites están documentados por [Microsoft Learn](https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig); los criterios de resultados, división del trabajo y entrega incremental se desarrollan en [Patterns of Legacy Displacement](https://martinfowler.com/articles/patterns-legacy-displacement/), de Ian Cartwright, Rob Horn y James Lewis.
