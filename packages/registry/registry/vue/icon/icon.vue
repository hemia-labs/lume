<script setup lang="ts">
import { iconVariants, type IconVariants } from "./icon.variants"
import { cn } from "@hemia/lume-vue"

defineProps<{
  size?: IconVariants["size"]
  class?: string
}>()
</script>

<template>
  <span :class="cn(iconVariants({ size }), props.class)">
    <slot />
  </span>
</template>