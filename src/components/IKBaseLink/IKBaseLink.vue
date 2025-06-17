<script setup lang="ts">
import { TBaseLinkProps } from '@/components/IKBaseLink/types'

defineProps<TBaseLinkProps>();
</script>

<template>
  <a
    :href="to"
    :rel="rel"
    class="hover:text-orange-600 transition-all"
  >
    <slot></slot>
  </a>
</template>

<style lang="scss">

</style>
