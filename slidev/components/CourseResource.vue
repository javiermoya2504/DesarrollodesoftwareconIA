<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{ path: string }>()
const href = computed(() => `${import.meta.env.BASE_URL}${props.path.replace(/^\//, '')}`)
</script>
<template><a :href="href" target="_blank" rel="noopener noreferrer"><slot /></a></template>
