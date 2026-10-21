<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
const { $clicks, $clicksContext } = useSlideContext()
</script>
<template>
  <div class="slidev-layout course-cover" :data-click-total="$clicksContext.total" :data-click="$clicks"><slot /></div>
</template>
