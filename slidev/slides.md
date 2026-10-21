---
theme: seriph
title: Desarrollo de Software con IA
titleTemplate: '%s'
author: Javier Moya
info: |
  Fundamentos de los modelos de lenguaje y su uso en desarrollo de software.
  Material del curso de Javier Moya.
colorSchema: light
aspectRatio: 16/9
canvasWidth: 1280
transition: slide-left
clickAnimation: fade-in up
comark: false
fonts:
  sans: 'Avenir Next, Avenir, Segoe UI, sans-serif'
  mono: 'SFMono-Regular, Consolas, monospace'
  provider: none
defaults:
  layout: lesson
  module: Desarrollo de Software con IA
drawings:
  enabled: true
  presenterOnly: false
  syncAll: true
  persist: false
htmlAttrs:
  lang: es
seoMeta:
  ogTitle: Desarrollo de Software con IA
  ogDescription: Fundamentos de IA y LLM, entrenamiento y programación asistida.
layout: cover
---

<div class="eyebrow">CURSO · JAVIER MOYA</div>

# Desarrollo de<br>Software <span class="gradient-text" v-mark.underline="{ at: 1, color: '#2b90b6', strokeWidth: 3 }">con IA</span>

<p class="cover-description">Cómo funcionan los modelos de lenguaje<br>y cómo usarlos para desarrollar software.</p>

<div class="cover-bottom"><span>Fundamentos y práctica</span><span>Modelos de lenguaje / Desarrollo</span></div>

<!--
Fuente: introducción del documento de Notion «Desarrollo de Software con IA», Javier Moya.
El objetivo global es construir una aplicación completa con estándares empresariales y lista para producción. Esta entrega recorre todas las lecciones disponibles en la exportación: los fundamentos de IA y su uso al programar. El original anuncia patrones de diseño y arquitectura de software, pero no desarrolla todavía esas lecciones.
-->

---
title: Objetivo del curso
---

# Objetivo del curso

<p class="lead">Construir una aplicación completa con <span v-mark.underline="{ at: 1, color: '#2b90b6', multiline: true, padding: 3, strokeWidth: 2 }">estándares empresariales</span> y lista para producción, usando IA como herramienta de desarrollo.</p>

<div class="grid grid-cols-2 gap-12 mt-10">
<div v-click="1" class="rule-block"><h3>Punto de partida</h3><p>Bases de programación. No es necesario ser experto.</p></div>
<div v-click="2" class="rule-block"><h3>Fundamentos para avanzar</h3><p>Comprender los modelos, sus límites y el papel de la revisión humana.</p></div>
</div>

<p v-click="3" class="takeaway">El curso también contempla patrones de diseño y arquitectura de software.</p>

<!--
Fuente: introducción del documento. Los patrones y la arquitectura son temas anunciados para el curso general. No se agregan lecciones inventadas sobre estos temas ni una aplicación inexistente en el material.
-->

---
title: Temario
---

# Temario

<div class="agenda-grid">
<div v-click="1"><span>01</span><h3>Fundamentos de IA</h3><p>Qué es un LLM y cuáles son sus límites.</p></div>
<div v-click="2"><span>02</span><h3>Tokens y embeddings</h3><p>La representación numérica del texto.</p></div>
<div v-click="3"><span>03</span><h3>Transformer y atención</h3><p>Cómo el modelo utiliza el contexto.</p></div>
<div v-click="4"><span>04</span><h3>Parámetros</h3><p>Los valores que aprende una red neuronal.</p></div>
<div v-click="5"><span>05</span><h3>Entrenamiento y ajuste</h3><p>Preentrenamiento, fine-tuning y preferencias.</p></div>
<div v-click="6"><span>06</span><h3>Programación con IA</h3><p>Generación, herramientas y verificación.</p></div>
</div>

---
src: ./pages/01-fundamentos.md
---

---
src: ./pages/02-representaciones.md
---

---
src: ./pages/03-transformer.md
---

---
src: ./pages/04-parametros.md
---

---
src: ./pages/05-entrenamiento.md
---

---
src: ./pages/06-programacion.md
---

---
src: ./pages/07-cierre.md
---
