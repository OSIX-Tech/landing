**Caso de estudio · Automatización documental y OCR**

Roydisa recibe documentos de proveedores que deben convertirse en información utilizable para compras, administración y operaciones. El flujo de OSIX toma las fotos y PDF desde las carpetas del cliente, los procesa y devuelve Excels estructurados por línea de producto.

En la ventana medida, el sistema procesó **31.377 ficheros**. La mediana desde la foto hasta el Excel fue de **27 segundos** y el **88 %** de los documentos terminó en menos de un minuto.

<div class="case-metric-grid">
  <div class="case-metric-card case-metric-card-featured"><strong>31.377</strong><span>ficheros tratados</span><small>12 mar · 8 sep 2026</small></div>
  <div class="case-metric-card"><strong>27 s</strong><span>mediana foto a Excel</span><small>flujo completo</small></div>
  <div class="case-metric-card"><strong>88 %</strong><span>en menos de un minuto</span><small>documentos procesados</small></div>
  <div class="case-metric-card"><strong>0,04 %</strong><span>error técnico desde junio</span><small>7 de 17.500 documentos</small></div>
</div>

## El problema no era leer un documento, sino convertir miles en datos utilizables

Los documentos llegaban en formatos distintos y con ritmos variables. Cada uno tenía que pasar de una imagen o un PDF a un formato que el equipo pudiera revisar, compartir y usar en sus procesos posteriores.

Con este volumen, la transcripción manual introduce dos costes. El primero es el tiempo que el equipo dedica a leer y copiar. El segundo es la fricción que aparece cuando el volumen cambia, cuando llegan documentos duplicados o cuando un día concentra más entradas de lo habitual.

Roydisa no necesitaba otra aplicación aislada. Necesitaba conectar la entrada documental con el formato que ya formaba parte de su trabajo.

## OSIX construyó el flujo alrededor de las carpetas que Roydisa ya utilizaba

El servicio vigila las carpetas de Google Drive o del servidor propio donde se depositan los documentos. Un modelo multimodal lee cada foto o PDF y devuelve un Excel por línea de producto.

El flujo distingue los tipos de documento, absorbe duplicados sin generar una salida repetida y puede ejecutarse en Docker. Eso permite mantener la arquitectura cerca de los datos del cliente y evitar una base de datos propia o servidores nuevos cuando no hacen falta.

La decisión técnica importante no fue añadir una capa de interfaz. Fue hacer que el resultado apareciera en el lugar y en el formato que el equipo ya podía utilizar.

## La producción muestra volumen, velocidad y estabilidad

La ventana observada va del **12 de marzo al 8 de septiembre de 2026**. En ese periodo se generaron **16.021 Excels**: 8.672 albaranes, 5.024 facturas y 2.325 confirmaciones.

<div class="case-metric-grid case-metric-grid-secondary">
  <div class="case-metric-card"><strong>16.021</strong><span>Excels generados</span><small>8.672 albaranes · 5.024 facturas · 2.325 confirmaciones</small></div>
  <div class="case-metric-card"><strong>9.258</strong><span>albaranes digitalizados</span><small>13.394 páginas · 4 delegaciones</small></div>
  <div class="case-metric-card"><strong>7.421</strong><span>duplicados absorbidos</span><small>sin salida repetida</small></div>
  <div class="case-metric-card"><strong>1.026</strong><span>ficheros en un día</span><small>pico observado</small></div>
</div>

La media fue de **5.214 ficheros al mes**, pero el sistema también absorbió un pico de **1.026 ficheros en un solo día**. Ese contraste importa: el caso no demuestra únicamente que el flujo funcione en un día normal, sino que puede absorber días de mayor carga sin cambiar manualmente de infraestructura.

Los **13.394 folios de albaranes** se distribuyeron entre cuatro delegaciones. La salida no fue una cifra abstracta de documentos leídos, sino una colección de Excels que el equipo podía llevar a su siguiente paso operativo.

## El resultado medido tiene un alcance concreto

Este caso demuestra volumen procesado, tiempo de respuesta y error técnico observado. El **0,04 %** corresponde a 7 errores en 17.500 documentos desde junio. No lo presentamos como una tasa general de precisión por campo, porque esa validación requeriría una revisión completa contra un conjunto de referencia.

Tampoco presentamos como resultado observado el ahorro estimado de horas administrativas. Para publicar esa cifra habría que comparar el tiempo real de introducción manual por tipo de documento antes y después del sistema.

Esa distinción es importante para cualquier proyecto de automatización documental. Procesar un documento no significa que todos sus campos estén validados de la misma forma, y reducir el tiempo de una etapa no demuestra por sí solo un ahorro financiero completo.

## Ficha del proyecto

- **Cliente:** Roydisa.
- **Sector:** distribución y suministros industriales.
- **En producción desde:** 12 de marzo de 2026.
- **Entrada:** fotos y PDF depositados en carpetas del cliente.
- **Salida:** Excel estructurado por línea de producto.
- **Despliegue:** Google Drive o servidor propio con Docker.
- **Fuente de las cifras:** agregados de producción, logs y metadatos de Drive, sin datos personales.
- **Fecha de corte:** 8 de septiembre de 2026.

## ¿Qué documentos procesa hoy tu equipo?

Si tu equipo convierte albaranes, facturas, confirmaciones u otros documentos en datos a mano, el primer paso no es elegir un modelo. Es medir el flujo: cuántos documentos entran, qué tipos se repiten, cuánto tarda cada etapa y qué errores obligan a volver atrás.

OSIX puede ayudarte a localizar la parte que merece automatizarse primero y a decidir si necesitas OCR, reglas, integración con tu ERP o una combinación de las tres cosas.

[Cuéntanos tu proceso](https://osix.tech/es/#contact)

## Preguntas frecuentes

### ¿El OCR funciona con documentos de proveedores diferentes?

El flujo se midió sobre documentos reales de proveedores de Roydisa, con fotos y PDF de distintos tipos. La cifra publicada refleja el sistema en ese entorno concreto. Antes de extrapolar el resultado a otro negocio conviene probar una muestra propia.

### ¿Hay que contratar servidores nuevos?

No necesariamente. El servicio puede vigilar carpetas de Google Drive o ejecutarse en un servidor propio con Docker. La arquitectura final depende de los requisitos del cliente y de dónde deban permanecer sus documentos.

### ¿El sistema elimina toda revisión humana?

La cifra publicada mide el procesamiento automático y el error técnico observado. La necesidad de revisión depende del tipo de documento, de los campos críticos y del nivel de control que necesite cada proceso.

### ¿Qué diferencia hay entre error técnico y precisión del OCR?

El error técnico indica fallos del flujo o de su ejecución en la ventana medida. No equivale a una validación completa de la exactitud de cada campo extraído. Por eso este caso no publica una precisión general por campo.

## Fuente y alcance

Las cifras proceden de una auditoría agregada de la base documental, los logs y los repositorios de producción de cada producto OSIX. Se revisaron los metadatos completos del flujo de OCR en modo solo lectura. No se utilizaron datos personales.

**Fecha de corte de las métricas: 8 de septiembre de 2026.**

[Volver a todos los casos](https://osix.tech/es/casos/)

[Hablar con OSIX](https://osix.tech/es/#contact)
