<script setup lang="ts">
import { textfieldVariants, type TextfieldVariants, type TextfieldIconVariants } from "./textfield.variants"
import { cn } from "@hemia/lume-vue"
import { Field, FieldLabel, FieldDescription, FieldGroup } from "../field/index"

const props = defineProps<{
  label?: string
  description?: string
  error?: string
  for?: string
  variant?: TextfieldVariants["variant"]
  size?: TextfieldVariants["size"]
  iconSize?: TextfieldIconVariants["size"]
  modelValue?: string
  type?: string
  placeholder?: string
  disabled?: boolean
  class?: string
  prependIcon?: any
  prependInnerIcon?: any
  appendInnerIcon?: any
  appendIcon?: any
}>()

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void
}>()

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit("update:modelValue", target.value)
}

// Compute padding classes for input based on inner icon presence
const getInputPaddingClass = () => {
  const padding = []
  if (props.prependInnerIcon) {
    padding.push("ps-1.5")
  } else {
    padding.push("ps-[var(--tf-padding-x)]")
  }
  if (props.appendInnerIcon) {
    padding.push("pe-1.5")
  } else {
    padding.push("pe-[var(--tf-padding-x)]")
  }
  return padding.join(" ")
}
</script>

<template>
  <Field :class="props.class">
    <FieldLabel v-if="label" :for="for">{{ label }}</FieldLabel>
    <FieldGroup class="flex flex-1 items-center">
      <!-- Prepend icon (outside the textfield, to the left) -->
      <component
        v-if="prependIcon"
        :is="prependIcon"
        class="text-muted-foreground flex shrink-0 items-center"
        :class="iconSize === 'sm' ? 'size-3.5' : iconSize === 'lg' ? 'size-5' : 'size-4'"
      />
      <!-- Textfield inner container -->
      <div
        :class="cn(
          textfieldVariants({ variant: error ? 'error' : variant, size }),
          'flex flex-1 items-center focus-within:rounded-lg focus-within:ring-2 focus-within:ring-ring/50 dark:focus-within:[--ring:217.2_32.6%_50%] focus-within:[--ring:210_5%_80%]'
        )"
      >
        <!-- Prepend-inner icon (inside, at start) -->
        <component
          v-if="prependInnerIcon"
          :is="prependInnerIcon"
          class="text-muted-foreground flex shrink-0 items-center"
          :class="[
            iconSize === 'sm' ? 'size-3.5' : iconSize === 'lg' ? 'size-5' : 'size-4',
            'me-1.5'
          ]"
        />
        <input
          :id="for"
          :type="type"
          :value="modelValue"
          :placeholder="placeholder"
          :disabled="disabled"
          :aria-invalid="!!error"
          :class="cn(
            'flex-1 bg-transparent outline-none placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 w-full min-w-0',
            getInputPaddingClass()
          )"
          :style="{ '--tf-padding-x': '0.625rem' }"
          @input="onInput"
        />
        <!-- Append-inner icon (inside, at end) -->
        <component
          v-if="appendInnerIcon"
          :is="appendInnerIcon"
          class="text-muted-foreground flex shrink-0 items-center"
          :class="[
            iconSize === 'sm' ? 'size-3.5' : iconSize === 'lg' ? 'size-5' : 'size-4',
            'ms-1.5'
          ]"
        />
      </div>
      <!-- Append icon (outside the textfield, to the right) -->
      <component
        v-if="appendIcon"
        :is="appendIcon"
        class="text-muted-foreground flex shrink-0 items-center"
        :class="iconSize === 'sm' ? 'size-3.5' : iconSize === 'lg' ? 'size-5' : 'size-4'"
      />
    </FieldGroup>
    <FieldDescription v-if="description && !error">{{ description }}</FieldDescription>
    <p v-if="error" class="text-[0.8rem] font-medium text-destructive">
      {{ error }}
    </p>
  </Field>
</template>