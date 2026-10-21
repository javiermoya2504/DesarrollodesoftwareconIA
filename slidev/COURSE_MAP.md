# Correspondencia con la exportación de Notion

La exportación contiene un Markdown principal, 16 PNG y un PDF. Se leyó el documento completo y se inspeccionaron las 16 imágenes. No hay páginas Markdown adicionales. Esta presentación cubre las diez secciones desarrolladas del original.

El objetivo global del curso es construir una aplicación empresarial lista para producción. Los patrones de diseño y la arquitectura de software están anunciados en la introducción, pero la exportación todavía no desarrolla esas lecciones ni incluye una aplicación práctica completa. Se conserva el anuncio sin inventar ese contenido.

## Orden del curso

| Diapositivas | Módulo o sección | Fuente |
| --- | --- | --- |
| 1–3 | Portada, objetivo y temario | Introducción |
| 4–12 | Fundamentos de IA | §1 Conceptos básicos y §2 capacidades y límites |
| 13–19 | Tokens y embeddings | §6 Tokenización y §4 Embeddings |
| 20–31 | Transformer y atención | §3 Arquitectura Transformer y §5 Atención |
| 32–41 | Parámetros | §10 Parámetros y ampliación solicitada con regresión |
| 42–51 | Entrenamiento y ajuste | §7 Entrenar un LLM y §8 Fine-tuning |
| 52–61 | Programación con IA | §9 Cómo aprende una IA a programar e imagen de adopción |
| 62–63 | Recursos y conclusiones | Recursos originales y síntesis del curso |

Se adelantan la tokenización y los parámetros para explicar esos conceptos antes de profundizar en embeddings, arquitectura y entrenamiento.

## Cobertura de subsecciones

| Contenido del curso | Diapositivas |
| --- | --- |
| IA estrecha, AGI y ASI | 5 |
| Machine learning y programación tradicional | 6–7 |
| LLM, predicción, chatbot y buscador | 8–9 |
| Modelos y curva conceptual de adopción | 10–11 |
| Capacidades y dificultades | 12 |
| Tokens, identificadores y tokenizadores | 14–15 |
| Embeddings, similitud, contexto y banco | 16–18 |
| Generación token a token | 19 |
| Transformer, 2017 y artículo | 21 |
| §3.1 Red neuronal | 22 |
| §3.2 Bloque Transformer y ejemplo del gato | 23–24 |
| Relaciones sintácticas, semánticas y referencias | 25 |
| Primeras capas y capas posteriores | 26–27 |
| §3.3 Bloques apilados y profundidades | 28–29 |
| §3.4 Arquitectura, bloque y subcapa | 30 |
| §3.5 Encoder y decoder | 31 |
| Regresión con m y b, neurona y conteo de una red | 33–36 |
| Pesos, sesgos, operaciones y ubicación | 33–37 |
| Billion, billón y tabla de tamaños | 38–39 |
| Capacidad, memoria, cuantización, costo y velocidad | 39–40 |
| Parámetros de generación | 41 |
| Preparación y ciclo de entrenamiento; ajuste posterior | 43–44, 46–49 |
| Fuentes y habilidades de preentrenamiento | 43, 45 |
| Costos y estimación histórica de GPT-3 | 51 |
| Fine-tuning, ejemplo de atención al cliente | 46–47 |
| Proceso, evaluación con datos separados e iteración | 46–48 |
| Calidad y privacidad de los datos | 47 |
| Límites, prompting y fuentes actualizadas | 50 |
| Supervisión, preferencias y RLHF | 47–49 |
| Datos especializados de la imagen | 47 |
| Diferencia entre entrenar y generar | 44 |
| §9.1 Preentrenamiento con texto y código | 53–54 |
| §9.2 Ajuste para instrucciones | 55 |
| §9.3 Herramientas y ausencia de aprendizaje permanente en la sesión | 56 |
| §9.4 Ejemplo del promedio | 57 |
| §9.5 Errores, contexto, revisión y aprendizaje | 58–59 |
| Imagen de adopción y cifras legibles | 60–61 |

## Imágenes originales

Todas son copias byte por byte, sin recorte, recomposición ni reducción de resolución. `source-assets.json` registra la ruta original, la ruta pública y SHA-256. `source-snapshot.json` permite verificar la integridad de los 18 archivos originales.

| Original | Diapositiva | Archivo en `public/images/` |
| --- | --- | --- |
| image.png | 7 | 01-fundamentos/programacion-y-ml.png |
| image 1.png | 8 | 01-fundamentos/llm-genera-texto.png |
| image 2.png | 10 | 01-fundamentos/ecosistema-llm.png |
| image 3.png | 11 | 01-fundamentos/adopcion-conceptual.png |
| image 4.png | 21 | 03-transformer/arquitectura.png |
| image 5.png | 26 | 03-transformer/primeras-capas.png |
| image 6.png | 27 | 03-transformer/capas-posteriores.png |
| image 7.png | 31 | 03-transformer/encoder-decoder.png |
| image 8.png | 17 | 02-representaciones/embeddings.png |
| image 9.png | 25 | 03-transformer/relaciones-atencion.png |
| image 10.png | 19 | 02-representaciones/ciclo-generacion.png |
| image 11.png | 43 | 05-entrenamiento/fuentes-preentrenamiento.png |
| image 12.png | 45 | 05-entrenamiento/habilidades-preentrenamiento.png |
| image 13.png | 49 | 05-entrenamiento/ajuste-y-preferencias.png |
| image 14.png | 47 | 05-entrenamiento/datos-especializados.png |
| image 15.png | 60 | 06-programacion/adopcion-y-encuesta.png |

## Decisiones de edición

- A petición del usuario, se amplía §10 con una regresión de dos parámetros, datos didácticos y una red densa de 26 parámetros. Se distingue el conteo de valores aprendibles de las multiplicaciones realizadas al predecir. Las fuentes de apoyo están en las notas.

- La versión visual usa el tema Seriph con fondo blanco, pasos por clic, flechas y marcadores animados. Tras la ampliación sobre parámetros y la reorganización del módulo 5, el curso contiene 63 diapositivas y conserva todas las imágenes originales.
- El módulo 5 sigue el orden datos generales, ciclo de preentrenamiento, capacidades aprendidas, definición de fine-tuning, preparación de ejemplos supervisados, entrenamiento y evaluación, preferencias, límites y costos. Se integran las explicaciones repetidas y se sitúan los costos después de definir las alternativas. La comparación entre entrenamiento y generación acompaña al ciclo; los datos especializados acompañan a la preparación de ejemplos. El contenido del módulo 6 no se modifica en esta revisión.
- Los esquemas ASCII se convierten en Mermaid conservando elementos y orden. El ciclo de herramientas también se representa como diagrama editable.
- El único fragmento de programación se conserva literalmente y se marca como incompleto. El original no contiene una implementación de `promedio`, por lo que su ejemplo se presenta como proceso guiado.
- La unidad precisa es el token. «Siguiente palabra» se conserva como aproximación didáctica en las notas.
- Las funciones del encoder y el decoder se explican con el §3 del PDF incluido, para aclarar la abreviación de la imagen original.
- El nombre correcto de RLHF es *Reinforcement Learning from Human Feedback*. Se conserva el sentido del texto y se corrige la expansión manuscrita.
- Las curvas de adopción se presentan como esquemas conceptuales. Los porcentajes de image 15.png se transcriben con la fuente y los límites que la propia imagen declara, sin sumarlos ni hacerlos equivalentes a segmentos. No se verificó independientemente esa encuesta.
- Los costos se presentan como rangos orientativos del material. La cifra de USD 4.6 millones se identifica como estimación externa histórica de cómputo, no como cifra oficial ni costo total.
- La memoria citada para 7B corresponde aproximadamente a los pesos. El requisito de memoria total puede ser mayor.
- Las notas del presentador conservan contexto, referencias y advertencias de cada tema.
