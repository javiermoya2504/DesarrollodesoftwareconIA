# Validación de la presentación

Fecha: 20 de octubre de 2026.

## Reorganización del módulo 5

La versión actual contiene 63 diapositivas. Se contrastó el módulo de entrenamiento con los §§7–8 del Markdown original y sus cuatro imágenes. El bloque se redujo de 14 a 10 diapositivas, conservando sus contenidos en las láminas y las notas. Se agruparon el ciclo de preentrenamiento y la diferencia con generación, se integró el ajuste supervisado en la preparación de ejemplos, y se reunió la comparación de costos con el ejemplo histórico de GPT-3.

El orden actual es preentrenamiento, fine-tuning, preparación de ejemplos, entrenamiento y evaluación, preferencias humanas, límites y costos. Los cuatro pasos originales del ajuste se desarrollan en secuencia en las diapositivas 46–48; RLHF se presenta después. Se revisaron en Chrome las diapositivas 42–52, incluyendo ambos separadores, con avance y retroceso por todos sus pasos. Las imágenes cargaron, los marcadores permanecen alineados y no se detectaron desbordamientos ni excepciones JavaScript. La validación de contenido y la compilación pasaron.

Se comprobó mediante SHA-256 que el archivo del módulo 6 conserva exactamente su contenido anterior a esta revisión. Solo cambió su posición en el índice, al reducirse el módulo precedente. Los 18 archivos de Notion siguen intactos.

## Ampliación sobre parámetros

La ampliación anterior llevó la presentación a 67 diapositivas, antes de la reorganización del módulo 5. Se amplió la explicación con regresión lineal, una recta que cambia por pasos, una neurona con tres entradas y el conteo de una red de dos capas: 16 + 10 = 26 parámetros. Las referencias conceptuales están en las notas; los cuatro puntos de la recta son datos didácticos.

Se revisaron las diapositivas 32–42, que abarcan el módulo de parámetros y sus separadores. Se comprobaron los cuatro pasos de la explicación, el avance y retroceso, las posiciones de los marcadores y los límites del contenido. La recta pasa por los estados m=1, b=0; m=2, b=0; m=2, b=1, y recupera el estado inicial al retroceder. Se corrigieron los márgenes y el tamaño de una etiqueta del gráfico. La validación de contenido y la compilación siguen siendo correctas.

## Resultado de la revisión previa del tema blanco

| Comprobación | Resultado |
| --- | --- |
| `npm run validate` | Correcto |
| `npm run build` | Correcto, Slidev 53.0.0 y Vite 8.3.4 |
| Diapositivas cargadas en Chrome | 64 |
| Tema y fondo | Seriph, blanco en las 64 diapositivas |
| Diapositivas con pasos por clic | 54 |
| Separadores con animación de entrada | 6 |
| Marcadores comprobados con navegación real | 25 en 21 diapositivas, alineados con sus palabras |
| Barra de dibujo | Apertura y cierre con Escape correctos |
| Separadores de módulos | 6 |
| Imágenes originales cargadas | 16 de 16 |
| Diagramas Mermaid renderizados | 4 de 4 |
| Fragmento JavaScript | Literal original, 27 px y resaltado de sintaxis |
| PDF local | HTTP 200, `application/pdf` |
| Referencias locales | Existen todas |
| Desbordamientos detectados pendientes | Ninguno |
| Integridad de la exportación | Los 18 archivos originales conservan SHA-256 |
| Imágenes públicas | Idénticas a los originales, sin duplicados binarios |

## Revisión del navegador

Se recorrieron las 64 rutas de diapositivas en Chrome mediante Playwright a 1600 × 900, con lienzo Slidev de 1280 × 720. Se capturaron el estado inicial y el último paso de cada diapositiva. Se revisaron las composiciones en fondo blanco y se midieron los límites del contenido frente al lienzo y al pie de página: no quedaron desbordamientos ni elementos pendientes de revelar al completar los pasos.

Se comprobó el avance y retroceso con las flechas del teclado en portada, predicción del siguiente token, tabla comparativa, atención, parámetros y entrenamiento. Los pasos se completan y retroceden correctamente. Las listas y tablas se revelan por partes; las palabras clave usan los marcadores nativos de Slidev. El indicador del pie refleja el paso actual.

Una revisión adicional avanzó con el teclado por las 21 diapositivas con marcadores y verificó sus 25 anotaciones. Se corrigió el origen de coordenadas de los marcadores dentro de contenido animado para mantener los subrayados alineados al terminar cada aparición. También se comprobó la apertura de la barra de dibujo y su cierre con Escape.

Las 16 imágenes terminaron de cargar con dimensiones naturales válidas y `object-fit: contain`. Se comprobó la apertura de una imagen, la visualización a tamaño original (1774 px para el ejemplo usado) y el cierre con Escape. El PDF y los componentes locales de enlaces funcionaron.

El fragmento `function sumar(a, b) { return` se muestra con resaltado JavaScript. Está intencionalmente incompleto en el original, por lo que no se ejecuta ni se añade una implementación nueva.

No se observaron excepciones JavaScript no controladas durante el recorrido. La instalación existente registra en consola el aviso no bloqueante `Failed to patch FloatingVue`, procedente de `@shikijs/vitepress-twoslash/client` y su integración con `floating-vue`. No afecta al contenido, a los diagramas, al resaltado de código ni a la ampliación de imágenes comprobados. No se modificaron dependencias ni `node_modules` para silenciarlo.

## Enlaces externos

Se conservaron los dos enlaces del documento original:

- `https://platform.openai.com/tokenizer`: la petición automatizada recibió HTTP 403 con verificación de Cloudflare.
- `https://claude-tokenizer.vercel.app/`: la petición automatizada recibió HTTP 429 con verificación de Vercel.

Estas respuestas impiden confirmar automáticamente el funcionamiento completo de las demostraciones. No se describen como enlaces rotos ni como accesos verificados. Pueden requerir interacción del usuario y conexión a Internet. El segundo sitio es un recurso de terceros.

## Cobertura e integridad

[COURSE_MAP.md](./COURSE_MAP.md) relaciona las diez secciones del Markdown con las diapositivas e identifica las 16 imágenes. Se conserva el PDF adjunto y se aclaran las abreviaciones del gráfico de encoder y decoder con el propio artículo.

Los rangos de costos y los porcentajes de adopción se reproducen con las advertencias del material. No se hizo una actualización de precios ni una verificación independiente de la encuesta citada dentro de la imagen.

Todos los cambios persistentes de autoría están dentro de `slidev/`. Los archivos originales de Notion, `main.py` y el resto del proyecto permanecen sin modificar.

## Archivos de autoría

Modificados:

- `slides.md`
- `package.json` (solo se añadió el comando `validate`)
- `README.md`

Creados:

- `pages/01-fundamentos.md` a `pages/07-cierre.md`
- `layouts/cover.vue`, `layouts/lesson.vue`, `layouts/module.vue`
- `components/SourceImage.vue`, `components/CourseResource.vue`, `components/TeachingFlow.vue`, `components/RegressionExample.vue`
- `styles/index.css`
- `setup/mermaid.ts`
- `public/images/` (16 PNG organizados por tema)
- `public/resources/attention-is-all-you-need.pdf`
- `scripts/validate-content.mjs`
- `source-assets.json`, `source-snapshot.json`
- `COURSE_MAP.md`, `VALIDACION.md`

`dist/` contiene la compilación de producción. Los ejemplos no utilizados de la plantilla inicial se conservaron sin cambios.
