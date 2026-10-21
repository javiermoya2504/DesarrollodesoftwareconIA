---
layout: module
number: '01'
module: Fundamentos de IA
---

# Fundamentos de IA

Qué es un modelo de lenguaje, qué genera y dónde están sus límites.

<!-- Fuente: secciones 1 y 2 del documento de Notion. -->

---
module: 01 / Fundamentos de IA
---

# IA estrecha, AGI y ASI

<div class="grid grid-cols-3 gap-6 mt-8">
<div v-click="1" class="concept-card"><div class="label">IA estrecha</div><h3>Tareas específicas</h3><p>Recomendaciones de Netflix o YouTube. Asistentes basados en LLM como ChatGPT o Claude.</p></div>
<div v-click="2" class="concept-card"><div class="label">AGI</div><h3>Inteligencia general</h3><p>Capaz de realizar cualquier tarea intelectual humana. Los científicos la plantea como una capacidad aún no alcanzada.</p></div>
<div v-click="3" class="concept-card"><div class="label">ASI</div><h3>Superinteligencia</h3><p>Superaría al ser humano en todos los ámbitos. Es un escenario especulativo.</p></div>
</div>

<!--
Fuente: §1, ¿Qué es la IA? AGI significa Inteligencia Artificial General. ASI significa Superinteligencia Artificial. El material distingue capacidades existentes de escenarios hipotéticos y menciona la idea de una «rebelión» como especulación, no como hecho técnico.
-->

---
module: 01 / Fundamentos de IA
---

# Machine learning

<p class="lead">El aprendizaje automático es una rama de la IA en la que los sistemas <span v-mark.highlight="{ at: 1, color: '#fef08a', multiline: true, padding: 3, strokeWidth: 2 }">aprenden a partir de datos</span>.</p>

<div class="grid grid-cols-2 gap-12 mt-12">
<div v-click="1" class="rule-block"><h3>Programación tradicional</h3><p>La persona escribe las reglas que el programa debe seguir.</p></div>
<div v-click="2" class="rule-block"><h3>Aprendizaje automático</h3><p>Un algoritmo utiliza ejemplos para ajustar un modelo y producir predicciones.</p></div>
</div>

<p v-click="3" class="takeaway">La diferencia está en cómo se obtiene el comportamiento del sistema.</p>

<!-- Fuente: §1, Machine Learning, e image.png. El diagrama original incluye el ajuste con más datos. -->

---
module: 01 / Fundamentos de IA
---

# Reglas y aprendizaje a partir de datos

<SourceImage src="/images/01-fundamentos/programacion-y-ml.png" alt="Comparación de programación tradicional y aprendizaje automático" :height="440" caption="Los datos de ejemplo permiten entrenar y ajustar el modelo antes de usarlo con nuevos datos." />

<!-- Fuente: §1, image.png. Flujo original: problema, instrucciones, computadora y resultado. En ML: datos, algoritmo de aprendizaje, modelo entrenado, nuevo dato y predicción. -->

---
module: 01 / Fundamentos de IA
---

# LLM: un modelo que genera texto

<p class="lead"><strong>Large Language Model</strong> significa modelo de lenguaje grande. Predice el <span v-mark.underline="{ at: 2, color: '#2b90b6', multiline: true, padding: 3, strokeWidth: 2 }">siguiente texto</span> a partir del contexto.</p>

<TeachingFlow from="Hola, ¿cómo…" to="estás?" label="siguiente palabra" />

<SourceImage src="/images/01-fundamentos/llm-genera-texto.png" alt="Un LLM genera texto con base en lo aprendido" :height="145" caption="Una continuación probable aprendida de muchos ejemplos de texto." />

<!--
Fuente: §1, LLM e image 1.png. «Siguiente palabra» es la simplificación del original. La unidad precisa es el token, que se desarrolla en el módulo 2. La aparente comprensión surge de patrones aprendidos en miles de millones de ejemplos.
-->

---
module: 01 / Fundamentos de IA
---

# Chatbot tradicional, buscador y LLM

<v-clicks :at="1" animation="fade-in">

| Sistema | Cómo responde | Qué produce |
| --- | --- | --- |
| Chatbot tradicional | Frases previstas y árbol de decisión | Respuestas predefinidas |
| Buscador | Localiza contenido existente | Resultados de búsqueda |
| LLM | Usa patrones aprendidos | Texto generado |

</v-clicks>

<p v-click="4" class="takeaway">Un LLM puede producir una respuesta que nunca se haya escrito exactamente así.</p>

<!-- Fuente: §1, LLM vs. chatbot vs. buscador. Google y YouTube son los ejemplos de buscadores del material. El chatbot tradicional falla fuera de las frases previstas. -->

---
module: 01 / Fundamentos de IA
---

# Ejemplos del ecosistema

<div class="grid grid-cols-2 gap-10 items-center">
<SourceImage src="/images/01-fundamentos/ecosistema-llm.png" alt="Ejemplos del material: ChatGPT, Claude, Gemini, Llama y Mistral" :height="430" />
<div><h3>Modelos y asistentes conocidos</h3><p>El material relaciona ChatGPT con OpenAI, Claude con Anthropic, Gemini con Google y Llama con Meta.</p><p v-click="1" class="takeaway">El principio compartido es predecir el siguiente token a partir de patrones aprendidos.</p></div>
</div>

<!-- Fuente: §1, Ejemplos de LLM que conoces, image 2.png. La imagen mezcla nombres de asistentes, modelos y proveedores. Mistral aparece asociado con «código abierto» en el esquema original. Esa etiqueta no debe interpretarse como una afirmación sobre las licencias de todos sus modelos. -->

---
module: 01 / Fundamentos de IA
---

# Formas de adoptar la IA

<SourceImage src="/images/01-fundamentos/adopcion-conceptual.png" alt="Curva conceptual de uso de IA: uso escaso, chatbots, herramientas, integraciones y desarrollos propios" :height="410" caption="Esquema conceptual del material. La forma de la curva no representa proporciones medidas." />

<!--
Fuente: image 3.png. La imagen distingue uso escaso, expertos en chatbots, usuarios promedio, usuarios avanzados e innovadores. Sus ejemplos abarcan tareas cotidianas, productividad, búsqueda, automatización, aplicaciones y agentes propios. No es una distribución estadística.
-->

---
module: 01 / Fundamentos de IA
---

# Capacidades y dificultades de un LLM

<div class="grid grid-cols-2 gap-12 mt-8">
<div v-click="1" class="rule-block"><h3>Puede ayudar a</h3><ul><li>Generar y explicar código.</li><li>Resumir textos extensos.</li><li>Traducir idiomas.</li></ul></div>
<div v-click="2" class="rule-block"><h3>Puede tener dificultades con</h3><ul><li>Cálculos exactos.</li><li>Hechos posteriores al entrenamiento.</li><li>Razonamiento complejo de varios pasos.</li><li>Herramientas sin integraciones.</li></ul></div>
</div>

<!-- Fuente: §2 completo. Las dificultades son límites a considerar, no una afirmación de incapacidad absoluta para todos los modelos y tareas. -->
