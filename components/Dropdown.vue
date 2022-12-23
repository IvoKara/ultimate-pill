<script setup lang="ts">
const props = defineProps<{
  label: string
  items: string[]
}>()

const isMenuHidden = ref(true)

function toggleMenuVisibility() {
  isMenuHidden.value = !isMenuHidden.value
}
</script>

<template>
  <!-- eslint-disable vue/quote-props -->
  <div class="relative">
    <div class="flex items-center cursor-pointer" @click="toggleMenuVisibility()">
      {{ label }}
      <span
        i-ri:arrow-drop-down-line
        class="inline-block w-6 h-6"
        :class="{ 'rotate-180': !isMenuHidden }"
      />
    </div>
    <div :class="{ 'hidden': isMenuHidden }" class="absolute mt-3 z-10 w-50 bg-white rounded-2 b-1 b-black">
      <ul class="py-2">
        <li v-for="item in props.items" :key="item" class="py-2.5 px-5 cursor-pointer">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
