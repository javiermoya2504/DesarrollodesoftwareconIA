<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $clicks } = useSlideContext()
const slope = computed(() => $clicks.value >= 1 ? 2 : 1)
const bias = computed(() => $clicks.value >= 2 ? 1 : 0)
const points = [{ x: 1, y: 3 }, { x: 2, y: 5 }, { x: 3, y: 7 }, { x: 4, y: 9 }]
const px = (x: number) => 56 + x * 106
const py = (y: number) => 320 - y * 28
const line = computed(() => `M ${px(0)} ${py(bias.value)} L ${px(4.5)} ${py(slope.value * 4.5 + bias.value)}`)
</script>

<template>
  <div class="regression-example">
    <div>
      <p class="regression-current">ŷ = <strong>{{ slope }}</strong> · x + <span>{{ bias }}</span></p>
      <p class="small muted">La línea muestra la predicción.<br>Los puntos son datos de ejemplo.</p>
      <p v-click="1"><strong>1 · Ajustar m</strong><br>De 1 a 2: cambia la pendiente.</p>
      <p v-click="2"><strong>2 · Ajustar b</strong><br>De 0 a 1: la recta sube.</p>
      <p v-click="3" class="takeaway">Con x = 3:<br><strong>ŷ = 2 × 3 + 1 = 7</strong></p>
    </div>
    <figure>
      <svg viewBox="0 0 590 370" role="img" :aria-label="`Recta con pendiente ${slope} y sesgo ${bias}, frente a cuatro puntos de ejemplo.`">
        <g class="regression-grid">
          <line v-for="y in [2, 4, 6, 8, 10]" :key="y" x1="56" :y1="py(y)" x2="535" :y2="py(y)" />
        </g>
        <path d="M 56 26 V 320 H 550" fill="none" stroke="#82949f" stroke-width="1.5" />
        <g class="regression-axis-labels">
          <text v-for="y in [0, 2, 4, 6, 8, 10]" :key="y" x="42" :y="py(y) + 6" text-anchor="end">{{ y }}</text>
          <text v-for="x in [1, 2, 3, 4]" :key="x" :x="px(x)" y="345" text-anchor="middle">{{ x }}</text>
          <text x="559" y="325">x</text><text x="20" y="24">y</text>
        </g>
        <g v-if="$clicks < 2" stroke="#cbbde0" stroke-width="2" stroke-dasharray="5 5">
          <line v-for="point in points" :key="point.x" :x1="px(point.x)" :x2="px(point.x)" :y1="py(point.y)" :y2="py(slope * point.x + bias)" />
        </g>
        <path :d="line" class="regression-line" fill="none" stroke="#2b90b6" stroke-width="3" />
        <circle v-for="point in points" :key="point.x" :cx="px(point.x)" :cy="py(point.y)" r="6" fill="#7c65a8" stroke="white" stroke-width="2" />
        <text v-if="$clicks >= 3" :x="px(3) + 15" :y="py(7) + 26" class="regression-point-label">(3, 7)</text>
      </svg>
      <figcaption>Datos didácticos: (1, 3), (2, 5), (3, 7), (4, 9).</figcaption>
    </figure>
  </div>
  <p class="small muted regression-caption">Entrenar ajusta m y b para reducir el error. Seguimos teniendo <strong>dos parámetros</strong>.</p>
</template>

<style scoped>
.regression-example { display: grid; grid-template-columns: 480px 1fr; gap: 40px; align-items: start; margin-top: 20px; }
.regression-current { font-size: 49px; line-height: 1.3; margin-bottom: 16px; }
.regression-current span { color: #7c65a8; }
.regression-example p:not(.regression-current) { margin-bottom: 14px; }
.regression-example .takeaway { margin-top: 18px; }
.regression-example figure { margin: 0; }
.regression-example svg { width: 100%; display: block; }
.regression-grid line { stroke: #e4ebef; stroke-width: 1; }
.regression-axis-labels { font-size: 19px; fill: #566775; }
.regression-point-label { font-size: 21px; fill: #267f9f; }
.regression-line { transition: d 450ms ease; }
.regression-example figcaption { color: #566775; font-size: 18px; text-align: center; margin-top: 12px; }
.regression-caption { margin-top: 12px; }
@media (prefers-reduced-motion: reduce) { .regression-line { transition: none; } }
</style>
