<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
import { usePreferredReducedMotion } from '@vueuse/core'
const { $frontmatter } = useSlideContext()
const reducedMotion = usePreferredReducedMotion()
</script>
<template>
  <div class="slidev-layout module-layout">
    <div class="eyebrow">DESARROLLO DE SOFTWARE CON IA</div>
    <div v-motion :initial="{ x: reducedMotion === 'reduce' ? 0 : -24, opacity: reducedMotion === 'reduce' ? 1 : 0 }" :enter="{ x: 0, opacity: 1, transition: { duration: 450 } }" class="module-number">{{ $frontmatter.number }}</div>
    <main class="module-content"><slot /></main>
    <footer class="slide-footer"><span>{{ $frontmatter.module }}</span><SlideCurrentNo /></footer>
  </div>
</template>
