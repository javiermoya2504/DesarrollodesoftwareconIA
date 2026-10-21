---
layout: module
number: '05'
module: Entrenamiento y ajuste
---

# Entrenamiento y ajuste

Preentrenamiento, adaptación con ejemplos y preferencias humanas.

<!-- Fuente: §§7 y 8 de la exportación de Notion. -->

---
module: 05 / Preentrenamiento
---

# Preentrenamiento: datos generales

<div class="grid grid-cols-2 gap-10 items-center">
<SourceImage src="/images/05-entrenamiento/fuentes-preentrenamiento.png" alt="Fuentes de preentrenamiento: libros, artículos, código de repositorios públicos, Wikipedia, enciclopedias, foros, noticias y revistas" :height="390" />
<div>
<p class="lead">El modelo aprende patrones generales a partir de grandes colecciones de texto.</p>
<v-clicks :at="1" animation="fade-in up">
<ul class="small"><li>Libros, artículos, noticias y revistas.</li><li>Código de repositorios públicos.</li><li>Wikipedia y enciclopedias.</li><li>Foros y discusiones.</li></ul>
</v-clicks>
<p v-click="5" class="takeaway">Primero se preparan los textos y se dividen en tokens.</p>
</div>
</div>

<!--
Fuente: §7, paso 1 y Preentrenamiento; image 11.png. El preentrenamiento aprende patrones generales con grandes volúmenes de datos. Las categorías de la imagen son libros, artículos, código fuente de repositorios públicos, Wikipedia y enciclopedias, foros y discusiones, noticias y revistas; no describen el inventario de un modelo concreto.
-->

---
module: 05 / Preentrenamiento
---

# El ciclo de preentrenamiento

<v-clicks :at="1" animation="fade-in up">
<ol class="steps">
<li><div><strong>Predecir</strong> el token que sigue en la secuencia.</div></li>
<li><div><strong>Medir el error</strong> frente al token real con una <span v-mark.underline="{ at: 2, color: '#2b90b6', multiline: true, padding: 3, strokeWidth: 2 }">función de pérdida</span>.</div></li>
<li><div><strong>Actualizar los parámetros</strong> con retropropagación y descenso de gradiente.</div></li>
<li><div><strong>Repetir</strong> el ciclo con muchísimos ejemplos.</div></li>
</ol>
</v-clicks>

<p v-click="5" class="takeaway">Entrenar cambia los parámetros; generar texto usa lo aprendido y el contexto disponible.</p>

<!--
Fuente: §7, pasos 2–5 y párrafo de resumen. La preparación de textos del paso 1 ya ocurrió antes de este ciclo. Retropropagación calcula cómo influye cada parámetro en el error; descenso de gradiente usa esa información para ajustarlo. La repetición permite aprender patrones, no una lista de respuestas predeterminadas.
Durante el entrenamiento se compara con ejemplos reales, se mide la pérdida y se actualizan parámetros. Durante la generación se predice un token, se añade al texto acumulado y se repite usando ese contexto; ese uso ordinario no actualiza los parámetros. El paso 6 de §7, afinar con instrucciones y evaluaciones, se desarrolla después del resultado del preentrenamiento.
-->

---
module: 05 / Preentrenamiento
---

# Qué aprende durante el preentrenamiento

<div class="grid grid-cols-2 gap-10 items-center">
<div>
<p class="lead">Un mismo objetivo: predecir el siguiente token.</p>
<p v-click="1">Repetir esa tarea sobre muchos textos permite aprender regularidades que sirven para distintas tareas.</p>
<p v-click="2" class="takeaway">Estas capacidades son el punto de partida para adaptar el modelo.</p>
</div>
<SourceImage src="/images/05-entrenamiento/habilidades-preentrenamiento.png" alt="Habilidades aprendidas: estructura del lenguaje, hechos generales, razonamiento básico, estilos de escritura y patrones de información" :height="400" />
</div>

<!--
Fuente: §7, Preentrenamiento, e image 12.png. La imagen concreta las habilidades: estructura y gramática del lenguaje, hechos generales, razonamiento básico, estilos de escritura y patrones de información. El texto también incluye código. La unidad precisa de predicción es el token; «siguiente palabra» es la simplificación del original.
-->

---
module: 05 / Fine-tuning
---

# Fine-tuning: adaptar un modelo existente

<p class="lead">El ajuste fino continúa el entrenamiento de un modelo preentrenado con un conjunto de ejemplos <span v-mark.underline="{ at: 1, color: '#2b90b6', multiline: true, padding: 3, strokeWidth: 2 }">más pequeño y específico</span>.</p>

<div class="grid grid-cols-2 gap-12 mt-10">
<div v-click="1" class="rule-block"><h3>Punto de partida</h3><p>Se aprovechan los patrones generales que el modelo ya aprendió.</p></div>
<div v-click="2" class="rule-block"><h3>Definir una tarea</h3><p>Ejemplo del curso: responder a clientes con el formato y el tono de una empresa.</p></div>
</div>

<p v-click="3" class="takeaway">La adaptación se dirige a una tarea, un estilo o un dominio concreto.</p>

<!--
Fuente: §8, definición, ejemplo de servicio al cliente y paso 1 del Proceso básico. Se continúa el entrenamiento del modelo existente, sin empezar desde cero. La tarea determina qué ejemplos reunir. El preentrenamiento aporta patrones generales; el ajuste los adapta a una necesidad específica.
-->

---
module: 05 / Fine-tuning
---

# Preparar los datos del ajuste

<div class="grid grid-cols-2 gap-10 items-center">
<SourceImage src="/images/05-entrenamiento/datos-especializados.png" alt="Fuentes para un dominio: repositorios de GitHub, documentación técnica, issues, pull requests, Stack Overflow, foros, documentación de APIs y bases de conocimiento empresarial" :height="410" caption="Fuentes para un dominio: programación." />
<div>
<h3>Ajuste supervisado</h3>
<p v-click="1">Se preparan <span v-mark.underline="{ at: 1, color: '#2b90b6', multiline: true, padding: 3, strokeWidth: 2 }">entradas y respuestas esperadas</span> en el formato que requiere el modelo.</p>
<p v-click="2">En servicio al cliente: la consulta es la entrada y una respuesta aprobada muestra cómo contestar.</p>
<p v-click="3" class="small muted">Los ejemplos deben ser representativos y correctos. También hay que cuidar su calidad y privacidad.</p>
</div>
</div>

<!--
Fuente: §8, ejemplo, pasos 1–2 del Proceso básico, ¿El fine-tuning es aprendizaje supervisado?, e image 14.png. En muchos casos el ajuste es supervisado: se usan entradas y respuestas deseadas, escritas o revisadas por personas. También puede haber datos generados y revisados automáticamente.
La imagen ilustra fuentes de un dominio, el código: repositorios completos de GitHub, documentación técnica, issues y pull requests, Stack Overflow y foros de programación, documentación de APIs, datos propietarios y bases de conocimiento empresarial. Son fuentes para preparar ejemplos; no una fase adicional obligatoria después de la alineación. La fuente concreta y el formato de los ejemplos son cosas distintas.
-->

---
module: 05 / Fine-tuning
---

# Entrenar, evaluar y corregir

<v-clicks :at="1" animation="fade-in up">
<ol class="steps">
<li><div><h3>Entrenar con los ejemplos preparados</h3><p>Actualizar algunos o todos los parámetros para acercar las respuestas a los ejemplos.</p></div></li>
<li><div><h3>Evaluar con datos separados</h3><p>Comprobar el resultado con ejemplos que <span v-mark.underline="{ at: 2, color: '#2b90b6', multiline: true, padding: 3, strokeWidth: 2 }">no se usaron al entrenar</span>.</p></div></li>
<li><div><h3>Revisar los errores</h3><p>Mejorar los datos o el ajuste y volver a evaluar cuando sea necesario.</p></div></li>
</ol>
</v-clicks>

<p v-click="4" class="takeaway">Las personas preparan o evalúan ejemplos; no supervisan cada respuesta durante el uso.</p>

<!--
Fuente: §8, actualización de parámetros, pasos 3–4 del Proceso básico y aclaración sobre supervisión. Los cuatro pasos del proceso quedan cubiertos en orden: definir la tarea, preparar datos, entrenar y evaluar, revisar errores. Durante el uso, el modelo responde por sí solo.
-->

---
module: 05 / Fine-tuning
---

# Preferencias humanas y RLHF

<div class="grid grid-cols-2 gap-10 items-center">
<SourceImage src="/images/05-entrenamiento/ajuste-y-preferencias.png" alt="Esquema original: ejemplos supervisados y comparación de dos respuestas mediante preferencias humanas" :height="400" />
<div>
<p class="lead">Otra señal para el ajuste es la <span v-mark.underline="{ at: 1, color: '#2b90b6', multiline: true, padding: 3, strokeWidth: 2 }">comparación de respuestas</span>.</p>
<p v-click="1">Se favorecen las que las personas consideran más útiles y seguras.</p>
<p v-click="2" class="takeaway">RLHF: aprendizaje por refuerzo a partir de retroalimentación humana.</p>
<p v-click="3" class="small muted">Puede complementar el ajuste con ejemplos de respuestas esperadas.</p>
</div>
</div>

<!--
Fuente: §8, Etapas después del preentrenamiento, e image 13.png. El original distingue ajuste supervisado con instrucciones y respuestas, ya explicado, y alineación mediante preferencias humanas. RLHF es un ejemplo de esta segunda forma de ajuste; no se presenta una secuencia obligatoria para todos los modelos. La expansión correcta es Reinforcement Learning from Human Feedback. El ejemplo de asistente de Python del dibujo se conserva.
-->

---
module: 05 / Fine-tuning
---

# Alcance del fine-tuning

<div class="grid grid-cols-2 gap-12 mt-8">
<div v-click="1" class="rule-block"><h3>Cuándo aporta valor</h3><p>Cuando se busca mayor consistencia al seguir instrucciones, formatos o estilos.</p><p>Cuando hay una necesidad específica de adaptación.</p></div>
<div v-click="2" class="rule-block"><h3>Qué no garantiza</h3><p>Que el modelo conozca hechos nuevos.</p><p>Que sus respuestas sean <span v-mark.underline="{ at: 2, color: '#2b90b6', multiline: true, padding: 3, strokeWidth: 2 }">siempre correctas</span>.</p></div>
</div>

<p v-click="3" class="takeaway">Si bastan buenas instrucciones, puede ser suficiente el prompting. Para información cambiante, conviene conectar fuentes actualizadas.</p>

<!--
Fuente: §8, límites y Diferencia con el preentrenamiento. La calidad y privacidad de los datos se trataron al prepararlos. El ajuste no es necesario en todos los casos: mejorar las instrucciones puede bastar. El texto recomienda fuentes actualizadas para información que cambia con frecuencia.
-->

---
module: 05 / Costos del entrenamiento
---

# Costos: entrenar o adaptar

<v-clicks :at="1" animation="fade-in">

| Alcance | Orden de costo citado en el material |
| --- | --- |
| Modelo pequeño para una tarea | Cientos a miles de dólares |
| Fine-tuning de un modelo existente | Decenas o cientos hasta varios miles de dólares |
| Modelo grande desde cero | Millones de dólares |

</v-clicks>

<p v-click="4" class="small"><strong>GPT-3 (175B): ≈ USD 4.6 millones</strong> solo en cómputo. Estimación externa histórica, no cifra oficial de OpenAI ni costo total del proyecto.</p>
<p v-click="5" class="small muted">Son rangos orientativos. Preparar datos, hacer pruebas, contratar especialistas y operar el modelo también aumentan el costo.</p>

<!--
Fuente: §7, ¿Cuánto cuesta entrenar un modelo como GPT?, y ejemplo de GPT-3. Se conservan los tres rangos y el alcance del ejemplo histórico, sin presentarlos como precios vigentes o cotizaciones. Los costos dependen del modelo, del volumen de datos y del alcance. El original advierte que los modelos avanzados son poco transparentes y algunas estimaciones alcanzan decenas o más de cien millones de dólares. Los rangos pueden cubrir solo cómputo. Para la mayoría de los proyectos, el material recomienda usar un modelo existente y adaptarlo.
-->
