<script setup lang="ts">
import { computed, ref } from 'vue'
const props = withDefaults(defineProps<{
  src: string
  alt: string
  caption?: string
  height?: number
}>(), { height: 420 })
const dialog = ref<HTMLDialogElement>()
const zoomed = ref(false)
const imageUrl = computed(() => `${import.meta.env.BASE_URL}${props.src.replace(/^\//, '')}`)
function openImage() {
  zoomed.value = false
  dialog.value?.showModal()
}
</script>
<template>
  <figure class="source-figure">
    <button class="source-image-button" :style="{ height: `${height}px` }" :aria-label="`Ampliar: ${alt}`" @click.stop="openImage">
      <img :src="imageUrl" :alt="alt" loading="eager" decoding="sync">
    </button>
    <figcaption v-if="caption" v-click="1">{{ caption }}</figcaption>
    <dialog ref="dialog" class="image-dialog" @click.stop @keydown.stop>
      <div class="image-dialog-toolbar">
        <span>{{ alt }}</span>
        <button @click="zoomed = !zoomed">{{ zoomed ? 'Ajustar a pantalla' : 'Tamaño original' }}</button>
        <button @click="dialog?.close()" aria-label="Cerrar imagen">Cerrar · Esc</button>
      </div>
      <div class="image-dialog-content" :class="{ zoomed }"><img :src="imageUrl" :alt="alt"></div>
    </dialog>
  </figure>
</template>
