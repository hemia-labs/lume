<script setup lang="ts">
import { cva } from "class-variance-authority"
import { cn } from "@hemia/lume-vue"

const fieldGroupVariants = cva(
  "flex flex-wrap items-center gap-2 has-[input:focus]:rounded-lg has-[input:focus]:border-lume-ring has-[input:focus]:ring-3 has-[input:focus]:ring-lume-ring/50"
)

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