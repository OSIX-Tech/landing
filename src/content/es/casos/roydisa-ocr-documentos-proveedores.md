# Roydisa procesa documentos de proveedores sin teclearlos uno a uno

**Caso de estudio · Automatización documental y OCR**

Roydisa ha procesado **31.377 documentos de proveedores en seis meses** con un flujo que convierte fotos y PDF en Excels listos para trabajar. La mediana desde la foto del documento hasta el Excel es de **27 segundos**, y la tasa de error técnico fue del **0,04 % desde junio de 2026**.

## El problema estaba entre el documento y el sistema de gestión

Los documentos de proveedores llegaban en formatos distintos. Para convertirlos en información útil había que leerlos, extraer sus datos y preparar un archivo estructurado para el trabajo posterior.

El reto no era añadir otra pantalla. Era conectar la entrada real del cliente con el formato que ya necesitaba su equipo.

## OSIX conectó la entrada documental con el flujo de trabajo existente

OSIX creó un servicio que vigila las carpetas de Google Drive o del servidor propio donde se depositan los documentos. Un modelo multimodal lee cada foto o PDF y devuelve un Excel por línea de producto.

El servicio también absorbe duplicados sin generar una salida repetida y puede ejecutarse en Docker, sin una base de datos propia ni servidores nuevos.

## Los resultados están medidos sobre producción real

La ventana observada va del **12 de marzo al 8 de septiembre de 2026**.

| Métrica | Resultado |
| --- | ---: |
| Ficheros de entrada tratados | **31.377** |
| Excels generados | **16.021** |
| Albaranes distintos digitalizados | **9.258** |
| Páginas de albaranes | **13.394** |
| Mediana desde la foto hasta el Excel | **27 s** |
| Documentos terminados en menos de un minuto | **88 %** |
| Error técnico desde junio | **0,04 %** |
| Duplicados absorbidos sin salida repetida | **7.421** |

Los Excels generados incluyen **8.672 albaranes, 5.024 facturas y 2.325 confirmaciones**.

## La velocidad importa porque el volumen no es constante

El sistema procesó una media de **5.214 ficheros al mes** y llegó a absorber **1.026 ficheros en un solo día**. El flujo no necesita una intervención manual para cambiar de infraestructura cuando el volumen sube en días puntuales.

## El dato publicado es de procesamiento y error técnico

Este caso demuestra volumen procesado, tiempo de respuesta y estabilidad técnica. No presentamos el 0,04 % como una tasa general de precisión por campo, porque esa validación no está medida de forma completa.

Tampoco presentamos como resultado observado el ahorro estimado de horas administrativas. Para convertirlo en una cifra pública haría falta medir cuánto tardaba el equipo en introducir cada tipo de documento antes del sistema.

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

Si tu equipo convierte albaranes, facturas, confirmaciones u otros documentos en datos a mano, podemos analizar el flujo y decirte qué parte merece automatizarse primero.

[Cuéntanos tu proceso](https://osix.tech/es/#contact)

## Preguntas frecuentes

### ¿El OCR funciona con documentos de proveedores diferentes?

El flujo se midió sobre documentos reales de proveedores de Roydisa, con fotos y PDF de distintos tipos. La cifra publicada refleja el sistema en ese entorno concreto. Antes de extrapolar el resultado a otro negocio conviene probar una muestra propia.

### ¿Hay que contratar servidores nuevos?

No necesariamente. El servicio puede vigilar carpetas de Google Drive o ejecutarse en un servidor propio con Docker. La arquitectura final depende de los requisitos del cliente y de dónde deban permanecer sus documentos.

### ¿El sistema elimina toda revisión humana?

La cifra publicada no demuestra eso. Mide el procesamiento automático y el error técnico observado. La necesidad de revisión depende del tipo de documento, de los campos críticos y del nivel de control que necesite cada proceso.

### ¿Qué diferencia hay entre error técnico y precisión del OCR?

El error técnico indica fallos del flujo o de su ejecución en la ventana medida. No equivale a una validación completa de la exactitud de cada campo extraído. Por eso este caso no publica una precisión general por campo.

## Fuente y alcance

Las cifras proceden de una auditoría agregada de la base documental, los logs y los repositorios de producción de cada producto OSIX. Se revisaron los metadatos completos del flujo de OCR en modo solo lectura. No se utilizaron datos personales.

**Fecha de corte de las métricas: 8 de septiembre de 2026.**

[Volver a todos los casos](https://osix.tech/es/casos/)

[Hablar con OSIX](https://osix.tech/es/#contact)
