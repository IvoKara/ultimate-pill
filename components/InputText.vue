<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'text' | 'password' | 'search' | 'range' | 'number'
  disabled?: boolean
  modelValue?: string
  placeholder?: string
  icon?: string
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
  <label class="border-1 border-black rounded-6 py-3 px-5 flex items-center gap-2">
    <div v-if="icon" class="w-5 h-5" :class="`i-${icon}`" />
    <input
      v-model="modelValue" :type="type" :disabled="disabled" :placeholder="placeholder"
      class="p-none bg-transparent border-none focus:ring-none w-full truncate"
    >
  </label>
</template>
