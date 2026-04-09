<script setup lang="ts">
import { inject, type Ref, computed } from 'vue'
import { cn } from '@hemia/lume-vue'

const dialog = inject<{
  open: Ref<boolean>
}>('alert-dialog')

const props = defineProps<{
  class?: string
}>()

const isOpen = computed(() => dialog?.open.value ?? false)

// Obtener el tamaño del content a través del provide/inject
const size = inject<string>('alert-dialog-size', 'md')

const isSm = computed(() => size === 'sm')
</script>

<template>
  <div
    :class="cn(
      isSm
        ? 'flex-col-reverse'
        : 'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      'bg-lume-muted/50 rounded-b-lg px-6 py-4 dark:bg-lume-muted/30',
      isSm && 'grid grid-cols-2 gap-2',
      props.class
    )"
  >
    <slot />
  </div>
</template>