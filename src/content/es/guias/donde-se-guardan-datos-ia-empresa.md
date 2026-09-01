# Dónde se guardan los datos de tu empresa si contratas un sistema de IA: las 4 opciones reales y qué preguntar antes de firmar

Si contratas un sistema de IA para tu empresa, tus datos acaban en uno de cuatro sitios: la nube de un proveedor con sede fuera de la UE (normalmente EE. UU.), una nube con residencia de datos en Europa, servidores propios (on-premise) o una combinación de ambos. No es una decisión solo técnica: si los datos son personales, el Reglamento General de Protección de Datos (RGPD) exige que cualquier salida del Espacio Económico Europeo tenga una base legal, por ejemplo cláusulas contractuales tipo, y que firmes un contrato de encargado de tratamiento (DPA). Para la mayoría de las pymes españolas el equilibrio razonable es una nube con residencia en la UE y un contrato que excluya el entrenamiento con tus datos; la nube estadounidense es legal pero obliga a revisar el DPA; y el on-premise solo compensa con datos muy sensibles o por exigencia de un cliente. Esta guía la publica OSIX Tech, una consultora de desarrollo de software con IA para pymes en Galicia y el resto de España, y se basa en las páginas oficiales de los proveedores y de la Comisión Europea, revisadas en septiembre de 2026.

## La respuesta en 30 segundos

- Dónde acaban tus datos depende de la opción que elijas, no de la tecnología: el mismo modelo de IA puede guardar datos en EE. UU., en la UE o en tu oficina.
- Si eliges un plan de empresa con residencia en la UE (OpenAI, Microsoft, AWS y Google Cloud lo ofrecen), tus datos personales se quedan dentro de Europa, lo que simplifica el cumplimiento del RGPD.
- Si los datos salen del Espacio Económico Europeo, hace falta una base legal (cláusulas contractuales tipo u otra) y un DPA firmado; sin eso, el riesgo es de tu empresa, no del proveedor.
- "Residencia en la UE" no significa que todo el procesamiento ocurra en la UE: la inferencia, que es la ejecución del modelo, puede ocurrir fuera salvo que contrates la opción específica.
- El on-premise da el control máximo, pero cuesta en hardware, mantenimiento y personal, y no elimina tu responsabilidad como responsable del tratamiento.

## Antes de nada: qué dice el RGPD sobre dónde pueden ir tus datos

El RGPD no obliga a que tus datos estén en España ni en la UE. Lo que obliga es a dos cosas. Primera: si tratas datos personales, tu empresa es el responsable del tratamiento y el proveedor que los procesa por tu cuenta es un encargado, con un contrato (el DPA) que lo obligue. Segunda: si los datos salen del Espacio Económico Europeo, la transferencia necesita un mecanismo legal. El más usado son las cláusulas contractuales tipo (SCC), que la Comisión Europea tiene preaprobadas para ese fin.

Esto importa porque los datos no personales, como un proceso interno sin información de clientes, tienen menos exigencias, mientras que los datos de clientes, empleados o proveedores entran de lleno en el RGPD. En España, la AEPD es la autoridad que puede pedirte cuentas.

## Las 4 opciones, comparadas

| Opción | Dónde viven los datos | Coste relativo | Control | Mejor para |
| --- | --- | --- | --- | --- |
| 1. Nube del proveedor fuera de la UE | Centros de datos del proveedor (EE. UU. u otros) | Bajo | Bajo | Pruebas y datos no personales |
| 2. Nube con residencia en la UE | Región UE del proveedor (Azure, AWS, Google Cloud, OpenAI) | Medio | Medio | La mayoría de pymes con datos de clientes o empleados |
| 3. Servidores propios (on-premise) | Tu infraestructura | Alto | Máximo | Datos muy sensibles o requisito contractual |
| 4. Híbrido | Parte en tu infraestructura, parte en nube UE | Medio-alto | Alto | Proyectos donde solo una parte toca datos sensibles |

## Opción por opción

### 1. La nube del proveedor fuera de la UE (normalmente EE. UU.)

Es lo que ocurre por defecto con las herramientas sin configurar: cuentas gratuitas o planes personales de ChatGPT, Gemini o Claude, y muchos servicios que no ofrecen elegir región. Los datos se guardan y procesan en los centros de datos del proveedor y quedan sujetos a sus políticas, no a las tuyas. No hay contrato entre tu empresa y el proveedor: la relación es entre el empleado y la plataforma. Es lo que se llama shadow AI, y es donde más riesgo se concentra.

**Mejor para:** pruebas, datos no personales y usos puntuales sin información de clientes.

**Límite honesto:** si un empleado introduce datos de clientes ahí, estás delegando responsabilidad RGPD sin contrato ni trazabilidad. La transferencia a EE. UU. solo es legal con un mecanismo del RGPD y un DPA, y con cuentas personales no hay ninguno.

### 2. Nube con residencia de datos en la UE

La opción que recomendamos como punto de partida. Los grandes proveedores permiten fijar la región: Azure y Microsoft 365 dentro del EU Data Boundary de Microsoft, AWS en sus regiones europeas y Google Cloud con residencia de datos en regiones de la UE. OpenAI ofrece residencia de datos en Europa (EEE y Suiza) para ChatGPT Enterprise y Edu, y residencia de inferencia, que mantiene la ejecución del modelo en GPUs europeas, para clientes elegibles.

**Mejor para:** pymes que tratan datos de clientes o empleados y quieren cumplir el RGPD sin montar infraestructura propia.

**Límite honesto:** la residencia cubre el almacenamiento y, si la contratas, la inferencia, pero parte del procesamiento (autenticación, extracción de texto de documentos, enrutamiento) puede seguir ocurriendo fuera de la región. Y el DPA del proveedor es de adhesión: no se negocia, se firma.

### 3. Servidores propios (on-premise)

Los datos y el modelo viven en infraestructura que tú controlas, en tu oficina o en un centro de datos contratado. Es la opción con el control más alto: nada sale de tu perímetro salvo la llamada puntual a un modelo externo, si lo usas. Es habitual en sectores regulados o con datos muy sensibles, donde la política o el cliente exigen que los datos no salgan de la empresa.

**Mejor para:** clínicas, despachos, empresas con secretos industriales o contratos que prohíben sacar datos del perímetro.

**Límite honesto:** es la opción más cara (hardware, licencias, mantenimiento y alguien que lo administre) y no elimina tu responsabilidad: sigues siendo el responsable del tratamiento. Si el modelo corre en tu infraestructura, el cumplimiento es más directo, pero el coste y la complejidad suben.

### 4. El híbrido

Parte de la operación vive en tu infraestructura y parte en una nube con residencia en la UE. Es la arquitectura que más vemos en proyectos reales: los datos sensibles no salen, y el resto aprovecha la nube europea. Requiere definir claramente qué dato va a cada sitio, que es justo lo que suele faltar.

**Mejor para:** proyectos donde solo una parte de los datos es sensible, o como escalón entre la nube y el on-premise total.

**Límite honesto:** si no dejas escrito qué va a cada lado, la frontera se desdibuja y vuelves al escenario 1 sin darte cuenta. Y sigue siendo tuya la responsabilidad de que cada flujo tenga su base legal.

## Los 3 errores que vemos una y otra vez

**1. Empleados con cuentas personales introduciendo datos de clientes.** Es el escenario más común y el más arriesgado: sin DPA, sin contrato y sin política interna. Una política de uso de IA, aunque sea una página, convierte algo invisible en una decisión de la empresa.

**2. Confundir "residencia en la UE" con "todo se procesa en la UE".** Con la residencia de datos, el almacenamiento está en la UE. La inferencia, que es donde el modelo ejecuta y genera la respuesta, es otra cosa: si no la contratas explícitamente (OpenAI la ofrece para Europa), puede ocurrir fuera. Pregunta por las dos.

**3. Firmar el DPA sin leer qué hace el proveedor con los datos.** Los planes de empresa de los grandes proveedores excluyen el entrenamiento con tus datos, pero eso no es automático en planes básicos ni en cuentas gratuitas. El DPA te dice qué puedes exigir y qué no; si no lo tienes, pídelo antes de conectar datos de clientes.

## Las 8 preguntas que hacer a cualquier proveedor antes de firmar

1. ¿En qué país o región se almacenan mis datos, incluidas las copias de seguridad?
2. ¿Dónde se procesan las consultas y los documentos? ¿Y dónde se ejecuta la inferencia?
3. ¿Se usan mis datos para entrenar o mejorar modelos?
4. ¿Cuánto tiempo se conservan mis datos después de que yo los elimine?
5. ¿Qué subcontratistas o subprocesadores tienen acceso?
6. ¿Existe un DPA firmable conforme al RGPD?
7. ¿Qué mecanismo se usa si los datos salen del EEE?
8. ¿Puedo fijar una residencia exclusivamente en la UE?

Si un proveedor no puede responder por escrito a estas ocho, no le conectes datos de clientes ni de empleados.

## La respuesta que damos cuando nos preguntan

Para una pyme española que va a tratar datos de clientes, la combinación que recomendamos casi siempre es: un plan de empresa con residencia de datos en la UE, un DPA firmado, la exclusión contractual del entrenamiento y una política interna de uso de IA. El on-premise queda para datos muy sensibles o exigencias contractuales. Y si el dato no es personal, la decisión es más simple: elige por coste y por lo que te dé el control que necesites.

No es una decisión que se toma una vez: los proveedores cambian sus términos, las regiones cambian de precio y tu empresa cambia de datos. La revisión forma parte del mantenimiento.

## Metodología y transparencia

Esta guía la publica OSIX Tech, una consultora de desarrollo de software a medida con IA para pymes en Galicia y el resto de España. No tenemos afiliación ni comisión con ninguno de los proveedores citados. Los datos sobre residencia de datos de OpenAI provienen de su página de seguridad y privacidad empresarial y de su página de ayuda oficial; la información sobre el EU Data Boundary proviene de la documentación de Microsoft; la de AWS, de su página de soberanía digital europea; la de Google Cloud, de su documentación de residencia de datos de Assured Workloads; y las cláusulas contractuales tipo están explicadas en la página oficial de la Comisión Europea. Todas se consultaron en septiembre de 2026 y pueden cambiar. No hay ningún proyecto de cliente citado en esta guía.

## Preguntas frecuentes

### ¿ChatGPT, Gemini o Claude entrenan con los datos de mi empresa?

En los planes de empresa (sin uso gratuito) los grandes proveedores se comprometen contractualmente a no usar tus datos para entrenar modelos: OpenAI lo declara explícitamente en su página de privacidad empresarial, y Microsoft, Google y Anthropic hacen lo propio en sus contratos de empresa. En cuentas gratuitas o personales, eso no está garantizado. Si tus datos importan, usa el plan de empresa y guarda el compromiso por escrito.

### ¿Es ilegal que mis datos estén en EE. UU.?

No por sí solo. La transferencia fuera del EEE es legal si hay un mecanismo del RGPD (como las cláusulas contractuales tipo) y un DPA firmado. Lo que es problemático es que un empleado use una cuenta personal con datos de clientes sin contrato ni política.

### ¿Necesito los datos en España o basta con la UE?

Para la mayoría de las pymes basta con que los datos permanezcan en la Unión Europea. Exigir España en concreto solo tiene sentido en sectores muy regulados o por requisito contractual de un cliente.

### ¿Qué es un DPA?

Es el contrato de encargado de tratamiento. Es el acuerdo que firman tu empresa y el proveedor para dejar claro qué hace él con los datos, dónde los guarda, cuánto los conserva y qué pasa si hay una brecha. Sin DPA firmado con cada proveedor, no tienes garantía contractual real.

### ¿El on-premise elimina el riesgo por completo?

Reduce el riesgo y te da el control máximo, pero no elimina tu responsabilidad: tu empresa sigue siendo la responsable del tratamiento. Y añade costes de hardware, mantenimiento y personal que muchas pymes no necesitan.
