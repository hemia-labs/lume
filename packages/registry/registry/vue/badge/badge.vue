<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@hemia/lume-vue"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-lume-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-lume-primary text-lume-primary-foreground shadow hover:bg-lume-primary/80",
        secondary:
          "border-transparent bg-lume-secondary text-lume-secondary-foreground hover:bg-lume-secondary/80",
        destructive:
          "border-transparent bg-lume-destructive text-lume-destructive-foreground shadow hover:bg-lume-destructive/80",
        outline: "text-lume-foreground",
        ghost: "border-transparent hover:bg-lume-accent hover:text-lume-accent-foreground",
        link: "border-transparent text-lume-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type BadgeVariants = VariantProps<typeof badgeVariants>

defineProps<{
  variant?: BadgeVariants["variant"]
  class?: string
}>()
</script>

<template>
  <div :class="cn(badgeVariants({ variant }), $props.class)">
    <slot />
  </div>
</template>