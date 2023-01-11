<script setup lang="ts">
import type { StyleValue } from '@vue/runtime-dom'

const props = withDefaults(defineProps<{
  type?: 'text' | 'password' | 'search' | 'range' | 'number'
  disabled?: boolean
  modelValue?: string
  placeholder?: string
  icon?: string
  inputStyle?: StyleValue
}>(), {
  type: 'text',
  disabled: false,
})

const emit = defineEmits(['update:modelValue'])

const modelValue = ref(props.modelValue)

watch(modelValue, (newValue) => {
  emit('update:modelValue', newValue)
})
</script>

<template>
  <div class="border-1 border-black rounded-full">
    <label class="flex items-center gap-2 w-full">
      <slot name="icon">
        <div v-if="icon" class="w-5 h-5" :class="`i-${icon}`" />
      </slot>
      <input
        v-model="modelValue" :type="type" :disabled="disabled" :placeholder="placeholder"
        class="p-none bg-transparent border-none
          focus:ring-none focus-visible:outline-none
          w-full truncate"
        :style="inputStyle"
      >
      <slot name="button" />
    </label>
  </div>
</template>
