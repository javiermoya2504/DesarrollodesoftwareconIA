<script setup lang="ts">
withDefaults(defineProps<{ from: string, to: string, label?: string, at?: number }>(), { at: 1 })
</script>

<template>
  <div class="teaching-flow">
    <div class="flow-from">{{ from }}</div>
    <div class="flow-connector">
      <Arrow v-click="at" x1="8" y1="42" x2="142" y2="42" color="#2b90b6" width="2.5" />
      <span v-click="at" class="flow-label">{{ label }}</span>
    </div>
    <div v-click="at" class="flow-to"><span v-mark.circle="{ at: at + 1, color: '#7c65a8', padding: 10, strokeWidth: 2 }">{{ to }}</span></div>
  </div>
</template>
