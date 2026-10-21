---
module: Recursos del curso
---

# Recursos para consultar y practicar

<div class="grid grid-cols-2 gap-12 mt-10">
<div v-click="1" class="rule-block"><h3>Artículo de referencia</h3><p><CourseResource path="/resources/attention-is-all-you-need.pdf">Attention Is All You Need</CourseResource></p><p class="small muted">PDF original incluido en el material. Disponible localmente.</p></div>
<div v-click="2" class="rule-block"><h3>Tokenización</h3><p><a href="https://platform.openai.com/tokenizer" target="_blank" rel="noopener noreferrer">Tokenizador de OpenAI</a></p><p><a href="https://claude-tokenizer.vercel.app/" target="_blank" rel="noopener noreferrer">Herramienta externa para Claude</a></p></div>
</div>

<p v-click="3" class="takeaway">Las imágenes se pueden ampliar con un clic. «Tamaño original» permite inspeccionar los detalles.</p>

<!-- Fuentes: recursos locales y enlaces originales de §3 y §6. Los enlaces externos requieren conexión. -->

---
module: Conclusiones
---

# Conclusiones

<div class="grid grid-cols-2 gap-8 mt-6">
<div v-click="1" class="rule-block"><h3>Representación</h3><p>Los tokens se convierten en números. El Transformer usa el contexto para transformarlos.</p></div>
<div v-click="2" class="rule-block"><h3>Aprendizaje</h3><p>El entrenamiento ajusta parámetros. El fine-tuning adapta el comportamiento.</p></div>
<div v-click="3" class="rule-block"><h3>Generación</h3><p>El modelo produce un token a la vez a partir de patrones aprendidos.</p></div>
<div v-click="4" class="rule-block"><h3>Desarrollo</h3><p>Las herramientas ayudan a probar. La revisión humana sigue siendo necesaria.</p></div>
</div>

<p v-click="5" class="takeaway">Usar IA para desarrollar software exige comprender sus límites y verificar el resultado.</p>

<!-- Síntesis de las secciones 1–10. El objetivo del curso es desarrollar una aplicación completa apoyándose en la IA como herramienta. -->
