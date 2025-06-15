<template>
  <teleport to="body">
    <div v-if="model" class="flex flex-col px-4 py-2 bg-gray-200 absolute rounded shadow-xl position-under-cursor">
      <div class="flex flex-row justify-between mb-6 items-baseline">
        <h2><slot name="header" /></h2>
        <PhX size="16" class="cursor-pointer" @click="close()"/>
      </div>
      <slot />
    </div>
  </teleport>
</template>

<script setup lang="ts">

import {PhX} from "@phosphor-icons/vue";
import { onBeforeUnmount, onMounted } from 'vue'

const model = defineModel();

defineExpose({open, close})

function onEscPress(event: KeyboardEvent) {
  if (event.key === "Escape") {
    close();
  }
}

function open(event: MouseEvent) {
  console.log('open', event)
  model.value = true;
  let root = document.documentElement;
  root.style.setProperty('--mouse-x', event.clientX + "px");
  root.style.setProperty('--mouse-y', event.clientY + "px");
}

function close() {
  model.value = false;
}

onMounted(() => {
  window.addEventListener('keyup', onEscPress)
})

onBeforeUnmount(() => {
  window.removeEventListener('keyup', onEscPress)
})
</script>