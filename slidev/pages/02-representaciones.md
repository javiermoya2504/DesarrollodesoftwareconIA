---
layout: module
number: '02'
module: Tokens y embeddings
---

# Tokens y embeddings

Cómo el texto se convierte en representaciones numéricas.

<!-- Fuente: secciones 6 y 4. Se presentan en este orden para explicar primero la tokenización. -->

---
module: 02 / Tokens y embeddings
---

# Tokenización

<p class="lead">El tokenizador divide el texto en unidades y les asigna <span v-mark.underline="{ at: 1, color: '#2b90b6', multiline: true, padding: 3, strokeWidth: 2 }">identificadores numéricos</span>.</p>

<div class="grid grid-cols-3 gap-6 mt-10">
<div v-click="1" class="concept-card"><h3>Palabra completa</h3><p>Un token puede coincidir con una palabra.</p></div>
<div v-click="2" class="concept-card"><h3>Fragmento</h3><p>Una palabra larga puede ocupar varios tokens.</p></div>
<div v-click="3" class="concept-card"><h3>Puntuación</h3><p>Un signo también puede ser un token.</p></div>
</div>

<p v-click="4" class="takeaway">La división exacta depende del tokenizador de cada modelo.</p>

<!-- Fuente: §6, Tokenización. Un token no equivale necesariamente a una palabra. Los LLM procesan una secuencia de identificadores numéricos. -->

---
module: 02 / Tokens y embeddings
---

# Práctica: observar los tokens

<p class="big-quote">«Hola, ¿cómo estás?»</p>

<p class="lead">Observa cómo un tokenizador divide el texto y compara el resultado entre herramientas.</p>

<div class="grid grid-cols-2 gap-12 mt-10">
<div v-click="1" class="rule-block"><h3>OpenAI</h3><a href="https://platform.openai.com/tokenizer" target="_blank" rel="noopener noreferrer">Abrir tokenizador de OpenAI</a></div>
<div v-click="2" class="rule-block"><h3>Claude</h3><a href="https://claude-tokenizer.vercel.app/" target="_blank" rel="noopener noreferrer">Abrir recurso enlazado en el curso</a></div>
</div>

<p class="small muted mt-8">El segundo enlace es una herramienta externa de terceros. Ambas demostraciones requieren conexión.</p>

<!-- Fuente: §6, Pruébalo tú mismo. Los dos enlaces se conservan exactamente. La frase usa el saludo ya presente en el material. No se inventan IDs ni segmentaciones de un tokenizador concreto. -->

---
module: 02 / Tokens y embeddings
---

# Embeddings

<p class="lead">Un embedding representa un token mediante <span v-mark.circle="{ at: 1, color: '#2b90b6', multiline: true, padding: 3, strokeWidth: 2 }">números</span> que la red neuronal puede procesar.</p>

<v-clicks :at="1" animation="fade-in up">
<ol class="steps">
<li><div>El tokenizador identifica los fragmentos del texto.</div></li>
<li><div>Los embeddings convierten esos tokens en representaciones numéricas.</div></li>
<li><div>Los bloques Transformer transforman esas representaciones usando el contexto.</div></li>
</ol>
</v-clicks>

<p v-click="4" class="takeaway">Las representaciones se aprenden durante el entrenamiento.</p>

<!-- Fuente: §4 completo. Cada token puede pensarse como un punto en un espacio matemático. Los tokens utilizados en contextos parecidos tienden a tener representaciones similares. -->

---
module: 02 / Tokens y embeddings
---

# Representaciones y similitud

<div class="grid grid-cols-2 gap-12 items-center">
<SourceImage src="/images/02-representaciones/embeddings.png" alt="Ejemplo ilustrativo de vectores para Hola, Perro y Gato" :height="430" />
<div><h3>Patrones entre números</h3><p>Los tokens que aparecen en contextos parecidos pueden tener representaciones parecidas.</p><p v-click="1" class="takeaway">Cada número no corresponde directamente a una característica humana.</p><p class="small muted">Los valores del dibujo son ilustrativos.</p></div>
</div>

<!-- Fuente: §4 e image 8.png. El modelo calcula patrones y similitudes con matemáticas y estadística. Los números manuscritos no se presentan como embeddings extraídos de un modelo real. -->

---
module: 02 / Tokens y embeddings
---

# Una palabra, distintos contextos

<p class="big-quote"><span v-mark.circle="{ at: 1, color: '#2b90b6', multiline: true, padding: 3, strokeWidth: 2 }">banco</span></p>

<div class="grid grid-cols-2 gap-12 mt-10">
<div v-click="1" class="rule-block"><h3>Sentarse</h3><p>El contexto relaciona la palabra con un asiento.</p></div>
<div v-click="2" class="rule-block"><h3>Dinero</h3><p>El contexto relaciona la palabra con una entidad financiera.</p></div>
</div>

<p v-click="3" class="takeaway">El embedding de entrada se transforma a medida que el modelo utiliza el contexto de la oración.</p>

<!-- Fuente: §4, ejemplo de banco. La contextualización ocurre dentro de los bloques Transformer. No se atribuye una comprensión humana al modelo. -->

---
module: 02 / Tokens y embeddings
---

# Generación token por token

<div class="grid grid-cols-2 gap-10 items-center">
<SourceImage src="/images/02-representaciones/ciclo-generacion.png" alt="Ciclo de tokenización, procesamiento, predicción, selección y repetición" :height="440" />
<div><v-clicks :at="1" animation="fade-in up">
<ol class="steps"><li><div>Procesar los tokens del contexto.</div></li><li><div>Predecir y seleccionar el siguiente token.</div></li><li><div>Repetir con el texto acumulado.</div></li></ol>
</v-clicks><p v-click="4" class="takeaway">La generación se basa en patrones y probabilidades.</p></div>
</div>

<!-- Fuente: §6 e image 10.png. El texto original aclara que el modelo no tiene conciencia y que todo este proceso utiliza matemáticas y probabilidades. Los pasos de la imagen son tokenización, procesamiento, predicción, selección y repetición. -->
