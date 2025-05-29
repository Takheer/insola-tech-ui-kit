<script setup lang="ts">
import {ref} from "vue";
import { TTextAreaProps } from '@/components/IKTextArea/types'

const model = defineModel()

function update(e: Event) {
  const target = e.target as HTMLTextAreaElement
  model.value = target.value
  localValue.value = target.value
}

const localValue = ref('');

defineProps<TTextAreaProps>();
</script>

<template>
  <div class="flex flex-col gap-2">
    <label :for="label">{{ label }}</label>
    <textarea
      :id="label"
      :placeholder="placeholder"
      @input="update"
      :value="localValue"
      rows="3"
      class="transition-all outline-gray-400 outline-2 hover:outline-orange-200 focus:outline-orange-400 rounded px-4 py-2"
      :class="error ? 'outline-red-400' : ''" />
    <p v-if="error" class="text-red-400">{{ errorMessage }}</p>
  </div>
</template>

<style lang="scss">

</style>
