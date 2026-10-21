<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
const { $frontmatter, $clicks, $clicksContext } = useSlideContext()
</script>
<template>
  <div class="slidev-layout lesson" :data-click-total="$clicksContext.total" :data-click="$clicks">
    <div class="eyebrow lesson-eyebrow">{{ $frontmatter.module }}</div>
    <main class="lesson-content"><slot /></main>
    <footer class="slide-footer"><span>Javier Moya · Desarrollo de Software con IA</span><span v-if="$clicksContext.total" class="click-progress">{{ $clicks }} / {{ $clicksContext.total }} pasos</span><SlideCurrentNo /></footer>
  </div>
</template>
