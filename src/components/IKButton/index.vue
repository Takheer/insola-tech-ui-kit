<script setup lang="ts">
import {PhCircleNotch} from "@phosphor-icons/vue";
import {computed} from "vue";
import { TButtonEmits, TButtonProps } from '@/components/IKButton/types'

const props = withDefaults(defineProps<TButtonProps>(), {
  variant: 'primary',
  fullWidth: false,
  size: 'md',
  dense: false
});

const btnClasses = {
  primary: 'bg-yellow-400',
  outline: 'border border-1',
  disabled: 'bg-yellow-100 text-grey-300'
}

const btnHoverClasses = {
  primary: 'hover:bg-yellow-500',
  outline: 'bg-white hover:bg-yellow-300'
}

const sizeClasses = {
  lg: 'px-8 py-4 text-lg',
  md: 'px-6 py-3',
  sm: 'px-4 py-2 text-sm'
}

const iconSize = {
  lg: 32,
  md: 24,
  sm: 16
}

const btnClass = computed(() => ['flex  rounded-lg',
  btnClasses[props.disabled ? 'disabled' : props.variant],
  props.loading || props.disabled ? '' : btnHoverClasses[props.variant],
  props.loading || props.disabled ? 'text-gray-500' : 'text-black',
  sizeClasses[props.size],
  props.loading || props.disabled ? 'cursor-default' : 'cursor-pointer transition-all'].join(' ')
)

const widthClass = computed(() => props.fullWidth ? 'w-full justify-center' : 'grow-0 w-fit')

const emits = defineEmits<TButtonEmits>();
</script>

<template>
  <a
    v-if="to"
    :class="[btnClass, widthClass]"
    :href="to"
  >
    <PhCircleNotch :size="iconSize[size]" v-if="loading" class="animate-spin" />
    <slot v-else />
  </a>
  <button
    v-else
    :disabled="disabled"
    :class="[btnClass, widthClass]"
    @click="() => loading || disabled ? null : emits('click')"
  >
    <PhCircleNotch :size="iconSize[size]" v-if="loading" class="animate-spin" />
    <slot v-else />
  </button>
</template>

<style lang="scss">

</style>
