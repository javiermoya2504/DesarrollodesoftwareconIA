# Desarrollo de Software con IA

Presentación de Javier Moya: **63 diapositivas, seis módulos y las 16 imágenes originales de Notion**. Incluye un ejemplo animado de regresión lineal, cuatro diagramas Mermaid, el fragmento JavaScript original, actividades guiadas, notas del presentador y el PDF de *Attention Is All You Need*.

## Ejecutar

Desde la raíz del repositorio:

```bash
cd slidev
npm run dev
```

Slidev abre la presentación en `http://localhost:3030`. Si ese puerto está ocupado:

```bash
npm run dev -- --port 3031
```

Las dependencias existentes se reutilizan. No hace falta reinstalar Slidev.

## Presentar

- Espacio o flecha derecha muestran el siguiente paso; la flecha izquierda retrocede. Al completar los pasos se avanza de diapositiva.
- El pie indica el paso actual. Listas, comparaciones y tablas se revelan progresivamente, y las palabras clave reciben subrayados, resaltados o círculos dibujados.
- La barra de dibujo permite añadir anotaciones en directo durante la clase.
- El modo del presentador está en `/presenter/` y muestra las notas de cada tema.
- El índice visual está en `/overview/`.
- Un clic sobre una imagen abre la vista ampliada. «Tamaño original» permite inspeccionar texto pequeño y desplazarse por la imagen. Escape cierra esa vista.
- El PDF se sirve localmente. Los dos tokenizadores enlazados necesitan conexión y pueden solicitar verificaciones del navegador.

El formato es 16:9, con lienzo de 1280 × 720, **tema Seriph y fondo blanco**, recuperando el estilo de la plantilla original. Los títulos son azules y las anotaciones usan azul, violeta y amarillo. Las fuentes son locales y no dependen de Google Fonts. Se combinan transiciones laterales, apariciones suaves por clic y animaciones de entrada en los separadores; se respeta la preferencia de movimiento reducido. Las imágenes originales conservan sus colores.

## Editar

`slides.md` contiene la portada, el objetivo y el temario, e importa los módulos:

| Archivo | Contenido |
| --- | --- |
| `pages/01-fundamentos.md` | IA, ML, LLM y límites |
| `pages/02-representaciones.md` | Tokens y embeddings |
| `pages/03-transformer.md` | Transformer y atención |
| `pages/04-parametros.md` | Parámetros y tamaños |
| `pages/05-entrenamiento.md` | Entrenamiento y ajuste fino |
| `pages/06-programacion.md` | Programación, herramientas y revisión |
| `pages/07-cierre.md` | Recursos y conclusiones |

Los diseños están en `layouts/`, los estilos en `styles/index.css` y la configuración de Mermaid en `setup/mermaid.ts`. `SourceImage.vue` conserva las proporciones y ofrece ampliación. `CourseResource.vue` resuelve las rutas públicas de los recursos, incluso al compilar para una subruta. `TeachingFlow.vue` combina flechas y círculos animados en los ejemplos de predicción y parámetros. `RegressionExample.vue` muestra cómo cambian la pendiente y el sesgo de una recta al avanzar por los pasos.

Las animaciones usan funciones nativas de Slidev: `v-click`, `v-clicks`, `v-mark`, `v-motion` y `Arrow`. El número de `at` fija el paso en que aparece una anotación. Las notas del presentador permanecen disponibles.

Las imágenes están en `public/images/`, organizadas por módulo. El PDF está en `public/resources/`. Los ejemplos del proyecto inicial que ya no se importan permanecen sin modificar.

## Comprobar y compilar

```bash
npm run validate
npm run build
```

La validación de contenido comprueba el número de diapositivas, los módulos, todas las imágenes, los hashes de los originales, las referencias locales, los cuatro diagramas y el fragmento JavaScript. Requiere que la exportación de Notion siga en su ubicación original junto a `slidev/`.

La compilación produce `dist/`. Consulta [VALIDACION.md](./VALIDACION.md) para la revisión del navegador y sus límites, y [COURSE_MAP.md](./COURSE_MAP.md) para la correspondencia completa con las diez secciones originales.

## Alcance del material

Se incorporó todo el contenido desarrollado de la exportación. La aplicación empresarial, los patrones de diseño y la arquitectura de software aparecen como objetivos generales del curso, pero todavía no tienen lecciones o una aplicación implementada en el original. No se inventaron esos contenidos.

Referencias técnicas de Slidev usadas para la implementación: [importación de diapositivas](https://sli.dev/features/importing-slides), [diseños personalizados](https://sli.dev/guide/write-layout), [fuentes](https://sli.dev/custom/config-fonts), [Mermaid](https://sli.dev/features/mermaid), [animaciones](https://sli.dev/guide/animations) y [marcadores dibujados](https://sli.dev/features/rough-marker).
