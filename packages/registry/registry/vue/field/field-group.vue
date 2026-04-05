<script setup lang="ts">
import { fieldGroupVariants } from "./field.variants"
import { cn } from "@hemia/lume-vue"

const props = defineProps<{
  class?: string
}>()

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <div :class="cn(fieldGroupVariants(), props.class)" v-bind="$attrs">
    <slot />
  </div>
</template>