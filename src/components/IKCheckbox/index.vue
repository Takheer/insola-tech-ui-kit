<script setup lang="ts">
import { TCheckboxEmits, TCheckboxProps } from '@/components/IKCheckbox/types'

const model = defineModel()

const props = withDefaults(defineProps<TCheckboxProps>(), {
  size: 'md'
});

const sizeClasses = {
  lg: 'px-8 py-4 text-lg',
  md: 'px-6 py-3',
  sm: 'px-4 py-2 text-sm'
}

const size = {
  lg: '32',
  md: '24',
  sm: '16'
}

const emits = defineEmits<TCheckboxEmits>();
</script>

<template>
  <div class="flex flex-row gap-2 items-center">
    <input
      :id="label"
      type="checkbox"
      class="checkbox transition-all after:transition-all cursor-pointer appearance-none rounded bg-yellow-300 outline outline-yellow-400 flex items-center justify-center after:content-['\2714'] checked:after:opacity-0"
      :disabled="disabled"
      :style="{ width: `${size[props.size]}px`, height: `${size[props.size]}px`}"
      :class="[disabled ? 'grayscale-100 after:grayscale-100' : '']"
      v-model="model"
    >
    <label v-if="label" :for="label" class="cursor-pointer">{{ label }}</label>
  </div>
</template>

<style lang="scss">
.checkbox {
  
  &:disabled {
    cursor: default;
    &::after {
      filter: grayscale(100%);
    }
  }
}

.sm {
  font-size: 18px
}
</style>
