<script setup lang="ts">
import { cn } from "@hemia/ui-vue"
import { buttonVariants, type ButtonVariants } from "./button.variants"

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariants["variant"]
    size?: ButtonVariants["size"]
    class?: string
  }>(),
  {
    variant: "default",
    size: "md",
  }
)
</script>

<template>
  <button :class="cn(buttonVariants({ variant, size }), props.class)">
    <slot />
  </button>
</template>
