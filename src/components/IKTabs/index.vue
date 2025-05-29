<script setup lang="ts">

import { TTabsProps } from '@/components/IKTabs/types'
import { ref } from 'vue'

type TEmits = {
  (e: 'change', val: string): void
};

const props = defineProps<TTabsProps>();
const emits = defineEmits<TEmits>();

const localOptions = ref<typeof props.tabs>(props.tabs);

function setSelected(id: string) {
  localOptions.value.forEach(o => o.selected = false);
  localOptions.value.find(o => o.id === id)!.selected = true;
  emits('change', id)
}
</script>

<template>
  <div class="flex flex-row">
    <div
      v-for="tab of tabs"
      :key="tab.id"
      class="px-4 py-2 cursor-pointer select-none hover:bg-gray-200"
      :class="tab.selected ? 'border border-b-0' : 'border-b'"
      @click="setSelected(tab.id)"
    >
      {{ tab.label }}
    </div>
  </div>
</template>

<style lang="scss">

</style>