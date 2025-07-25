<script setup lang="ts">
import {ref} from "vue";
import { TTextInputEmits, TTextInputProps } from '@/components/IKTextInput/types'

const model = defineModel()

const input = ref<HTMLInputElement | null>(null);

const emits = defineEmits<TTextInputEmits>();
const props = defineProps<TTextInputProps>();
const id = props.label || props.placeholder

function update(e: Event) {
  const target = e.target as HTMLTextAreaElement
  model.value = (props.asNumber && !isNaN(Number(target.value))) ? Number(target.value) : target.value
  // model.value = target.value
}

function nonNumberInput(e: KeyboardEvent) {
  if (!props.asNumber) return;
  if (e.key.length === 1 && !e.key.match(/^[0-9]+$/)) e.preventDefault()
}
</script>

<template>
  <div class="flex flex-col" :class="dense ? 'gap-0.5' : 'gap-2'">
    <label v-if="label" :for="label" :class="labelClass ?? ''">{{ label }}</label>
    <div class="flex gap-2 relative">
      <div
        data-testid="input-wrapper"
        class="flex grow overflow-hidden"
        :class="[
          'transition-all outline-gray-400 outline-2 hover:outline-orange-200 focus:outline-orange-400 rounded',
          disabled ? 'hover:outline-gray-200' : 'hover:outline-orange-200'
        ]"
      >
        <input
          :id="id"
          ref="input"
          :placeholder="placeholder"
          :disabled="disabled"
          @input="update"
          @focus="emits('focus')"
          @blur="emits('blur')"
          @keydown="nonNumberInput"
          :value="model"
          class="box-content block bg-transparent font-inter not-last:pr-0 w-full border-none focus-visible:outline-none cursor-inherit transition-all"
          :class="[
            error ? 'outline-red-400' : '',
            dense ? 'px-2 py-1' : 'px-4 py-2',
            disabled ? 'text-gray-400' : ''
          ]"
        />
      </div>
      <slot name="append:outer" />
    </div>
    <p v-if="error" class="text-red-400">{{ errorMessage }}</p>
    <p v-else-if="message" class="text-sm text-gray-600">{{ message }}</p>
  </div>
</template>