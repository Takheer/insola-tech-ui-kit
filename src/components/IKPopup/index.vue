<script setup lang="ts">
import {ref} from "vue";
import { TPopupProps } from '@/components/IKPopup/types'

withDefaults(defineProps<TPopupProps>(), {
  size: 'md'
});

const popupShowed = ref(false)

const placementClass = {
  'right': 'translate-x-full right-0',
  'bottom': 'translate-y-full bottom-0',
  'top': '-translate-y-full top-2',
  'left': '-translate-x-full left-0'
}
</script>

<template>
  <div class="relative">
    <div
      @mouseover="popupShowed=true"
      @mouseleave="popupShowed=false">
      <slot/>
    </div>
    <div v-show="popupShowed" class="absolute z-50" :class="placementClass[placement ?? 'left']">
      <div
        class="flex rounded bg-gray-700 py-2 px-6 text-white"
      >
        <div
          v-if="text"
          :class="{
            'text-xs font-light': size === 'sm',
            'text-nowrap': text.length < 40,
            'min-w-[240px]': text.length >= 40
          }"
        >
          {{ text }}
        </div>
        <template v-else>
          <slot name="content" />
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>
