---
layout: module
number: '04'
module: Parámetros
---

# Parámetros

Qué aprende el modelo y qué significa su tamaño.

<!-- Fuente: §10. Se adelanta este tema para introducir los valores que se ajustan durante el entrenamiento. -->

---
module: 04 / Parámetros
---

# Regresión lineal: dos parámetros

<p class="lead">Un parámetro es un número que el modelo aprende de los datos.</p>

<div class="parameter-equation">ŷ = <span v-mark.circle="{ at: 1, color: '#2b90b6', padding: 8 }">m</span> · x + <span v-mark.circle="{ at: 2, color: '#7c65a8', padding: 8 }">b</span></div>
<p class="small muted">x = dato de entrada · ŷ = predicción del modelo</p>

<div class="grid grid-cols-2 gap-12 mt-8">
<div v-click="1" class="rule-block"><h3>m · peso o pendiente</h3><p>Multiplica la entrada. Indica cuánto cambia la predicción al aumentar x en una unidad.</p></div>
<div v-click="2" class="rule-block"><h3>b · sesgo</h3><p>Se suma al resultado. Desplaza la recta hacia arriba o abajo.</p></div>
</div>

<p v-click="3" class="takeaway">El modelo aprende <strong>2 parámetros: m y b</strong> y los reutiliza con distintas entradas.</p>

<!--
Fuente: §10, definición de parámetros, pesos y sesgos. Ejemplo de regresión solicitado para ampliar la explicación.
Referencia: https://developers.google.com/machine-learning/crash-course/linear-regression
La ecuación habitual de la recta es y = mx + b; usamos ŷ para distinguir la predicción del valor observado y. x es una entrada, no un parámetro aprendido. La analogía del material son dos perillas que se calibran con ejemplos. m y b se aprenden durante el ajuste y se reutilizan al predecir.
-->

---
module: 04 / Parámetros
---

# Aprender m y b

<RegressionExample />

<!--
Referencia conceptual: https://developers.google.com/machine-learning/crash-course/linear-regression
Datos didácticos construidos para este ejemplo: (1,3), (2,5), (3,7), (4,9). Todos cumplen y = 2x + 1. Los cambios m=1,b=0 → m=2,b=0 → m=2,b=1 ilustran los efectos de los parámetros; no representan iteraciones reales de un algoritmo de optimización. En datos reales suele existir ruido y una recta no necesariamente pasa por todos los puntos.
Al avanzar, explicar que entrenar compara predicciones con observaciones y ajusta los parámetros para reducir el error. Una vez ajustado el modelo, con x=3 se obtiene ŷ=2×3+1=7. Calcular esta salida no añade parámetros.
-->

---
module: 04 / Parámetros
---

# Una neurona: más entradas, más pesos

<p class="lead">Con tres entradas, una unidad combina tres pesos y un sesgo.</p>

<div class="parameter-equation neuron-equation">z = <span v-mark.underline="{ at: 1, color: '#2b90b6', padding: 5 }">w₁x₁ + w₂x₂ + w₃x₃</span> + <span v-mark.circle="{ at: 2, color: '#7c65a8', padding: 7 }">b</span></div>

<div class="grid grid-cols-2 gap-12 mt-8">
<div v-click="1" class="rule-block"><h3>Un peso por entrada</h3><p>Los w cumplen el papel de m: multiplican cada entrada. Los productos se suman.</p></div>
<div v-click="2" class="rule-block"><h3>Un sesgo para la unidad</h3><p>Se añade b. En total: <strong>3 pesos + 1 sesgo = 4 parámetros</strong>.</p></div>
</div>

<p v-click="3" class="takeaway"><strong>ReLU(z) = máx(0, z)</strong>: una activación no lineal sin parámetros aprendibles.</p>
<p v-click="4" class="small muted">Una red conecta muchas unidades de cálculo y aprende sus pesos y sesgos en conjunto.</p>

<!--
Referencia: https://en.d2l.ai/chapter_multilayer-perceptrons/mlp.html
Es una unidad de una capa densa con sesgo. Un modelo reúne unidades y capas, no necesita contener modelos completos e independientes. La salida de una capa alimenta la siguiente. ReLU es solo un ejemplo de activación, no la activación universal de los LLM. Apilar únicamente transformaciones afines equivale a otra transformación afín; las no linealidades son esenciales para superar esa limitación.
-->

---
module: 04 / Parámetros
---

# Contar los parámetros de una red

<p class="small muted">Ejemplo: dos capas densas con sesgo y sin compartir pesos.</p>

<div class="parameter-network">
<div><strong>3</strong><span>entradas</span></div>
<div class="parameter-connector"><Arrow v-click="1" x1="0" y1="42" x2="140" y2="42" color="#2b90b6" width="2.5" /></div>
<div v-click="1"><strong>4</strong><span>neuronas ocultas</span></div>
<div class="parameter-connector"><Arrow v-click="2" x1="0" y1="42" x2="140" y2="42" color="#7c65a8" width="2.5" /></div>
<div v-click="2"><strong>2</strong><span>neuronas de salida</span></div>
</div>

<div class="parameter-count">

<v-clicks :at="1" animation="fade-in">

| Capa | Pesos: entradas × neuronas | Sesgos | Total |
| --- | --- | --- | --- |
| Oculta | 3 × 4 = 12 | 4 | **16** |
| Salida | 4 × 2 = 8 | 2 | **10** |

</v-clicks>

<p v-click="3" class="parameter-total">16 + 10 = <span v-mark.circle="{ at: 3, color: '#7c65a8', padding: 8 }">26 parámetros</span></p>
<p v-click="4" class="takeaway">Multiplicar valores al predecir <strong>no crea parámetros nuevos</strong>.</p>

</div>

<!--
Referencia de capas densas y sus matrices de pesos y vectores de sesgos: https://en.d2l.ai/chapter_multilayer-perceptrons/mlp.html
Conteo del ejemplo: primera capa, 3 entradas × 4 unidades + 4 sesgos = 16; segunda capa, 4 entradas × 2 unidades + 2 sesgos = 10; total 26. Las tres entradas no son parámetros. Cada conexión tiene un peso propio. La activación ReLU de la capa oculta no añade parámetros.
El producto entradas × neuronas cuenta conexiones; no se multiplican entre sí los totales de las capas. Para esta arquitectura sin pesos compartidos se suman los parámetros de ambas capas. La arquitectura determina cuántos valores hay, y el entrenamiento ajusta esos valores. En LLM el conteo también incluye embeddings, atención, redes feed forward y otras piezas; no se aplica la fórmula de esta red pequeña a todo el Transformer.
-->

---
module: 04 / Parámetros
---

# Dónde están los parámetros

<p class="small muted">En un LLM, los valores aprendidos se organizan en matrices y vectores dentro de estas piezas.</p>

<div class="grid grid-cols-2 gap-8 mt-8">
<div v-click="1" class="rule-block"><h3>Tabla de embeddings</h3><p>Representaciones numéricas de los tokens.</p></div>
<div v-click="2" class="rule-block"><h3>Mecanismo de atención</h3><p>Matrices que intervienen en las relaciones entre tokens.</p></div>
<div v-click="3" class="rule-block"><h3>Redes feed forward</h3><p>Transformaciones dentro de cada bloque.</p></div>
<div v-click="4" class="rule-block"><h3>Proyección final</h3><p>Transformación que permite obtener probabilidades para el siguiente token.</p></div>
</div>

<!-- Fuente: §10, ¿Dónde están dentro de un LLM? Los pesos participan en multiplicaciones y sumas sobre las representaciones de los tokens. Sus valores determinan cómo se transforman esas representaciones y las probabilidades que produce el modelo. Se cuentan los valores aprendibles de todas las piezas, evitando contar dos veces los pesos compartidos. -->

---
module: 04 / Parámetros
---

# Qué significa 7B

<TeachingFlow from="7B" to="7 000 millones" label="de parámetros" />

<p class="small muted">Cantidad aproximada de parámetros del modelo.</p>

<div class="grid grid-cols-2 gap-12 mt-12">
<div v-click="3" class="rule-block"><h3>Billion en inglés</h3><p>Mil millones.</p></div>
<div v-click="4" class="rule-block"><h3>Billón en español</h3><p>Un millón de millones.</p></div>
</div>

<!-- Fuente: §10, ¿Qué significa 7B? Se conserva explícitamente la distinción de unidades. -->

---
module: 04 / Parámetros
---

# Tamaños de modelos del material

<v-clicks :at="1" animation="fade-in">

| Nombre | Parámetros aproximados | Ejemplos |
| --- | --- | --- |
| 7B / 8B | 7 000–8 000 millones | Mistral 7B, Llama 3 8B |
| 70B | 70 000 millones | Llama 3 70B |
| 175B | 175 000 millones | GPT-3 |

</v-clicks>

<p v-click="4" class="takeaway">La calidad también depende de los datos, del entrenamiento y del ajuste fino.</p>

<!-- Fuente: tabla de §10 y ¿Por qué importa el número de parámetros? Son ejemplos del curso, no un catálogo de modelos actuales. Un modelo pequeño bien entrenado puede superar a uno más grande. -->

---
module: 04 / Parámetros
---

# Tamaño, memoria y cómputo

<div class="grid grid-cols-2 gap-12 mt-8">
<div v-click="1" class="rule-block"><span class="metric">14 GB</span><h3>Modelo 7B a 16 bits</h3><p>2 bytes por parámetro. Aproximación para los pesos.</p></div>
<div v-click="2" class="rule-block"><span class="metric violet">≈ 4 GB</span><h3>Con cuantización a 4 bits</h3><p>Representar los pesos con menos bits reduce la memoria necesaria.</p></div>
</div>

<p v-click="3" class="takeaway">Más parámetros suelen implicar más capacidad, memoria y cómputo para entrenar y generar.</p>
<p class="small muted">La memoria total de ejecución puede ser mayor. La viabilidad en una laptop o GPU depende de sus recursos.</p>

<!-- Fuente: §10, capacidad, memoria, costo y velocidad. 7 000 millones × 2 bytes = 14 GB. La cifra de unos 4 GB a 4 bits es la aproximación del original. Son tamaños de pesos, no una garantía de memoria total ni de compatibilidad con cualquier equipo. -->

---
module: 04 / Parámetros
---

# Parámetros del modelo y de generación

<div class="grid grid-cols-2 gap-12 mt-10">
<div v-click="1" class="concept-card"><div class="label">Aprendidos</div><h3>Pesos y sesgos</h3><p>Se ajustan durante el entrenamiento.</p><p><span v-mark.underline="{ at: 1, color: '#2b90b6', multiline: true, padding: 3, strokeWidth: 2 }">No cambian por escribir un prompt</span>.</p></div>
<div v-click="2" class="concept-card"><div class="label">Configurables</div><h3>Opciones de generación</h3><p>Temperatura, top-p y máximo de tokens.</p><p>Se eligen al hacer una petición.</p></div>
</div>

<p v-click="3" class="takeaway">Configurar una respuesta y entrenar un modelo son operaciones distintas.</p>

<!-- Fuente: §10, No confundir con los parámetros de generación. -->
