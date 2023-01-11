<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue?: string
  multiple?: boolean
}>(), {
  multiple: false,
  modelValue: 'BG',
})

const emit = defineEmits(['update:modelValue'])

const modelValue = ref(props.modelValue)

watch(modelValue, (newValue) => {
  emit('update:modelValue', newValue)
})
</script>

<template>
  <!-- eslint-disable vue/singleline-html-element-content-newline -->
  <select v-model="modelValue" class="border-(1 #BFBFBF) bg-transparent p-5 font-700 focus:(ring-none border-#BFBFBF)">
    <option value="BG">🇧🇬 Бъглария</option>
    <option value="US">🇺🇸 United States</option>
    <option value="IT">🇮🇹 Italia</option>
    <option value="FR">🇫🇷 France</option>
    <option value="DE">🇩🇪 Deutschland</option>
  </select>
</template>
