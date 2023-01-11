<script setup lang="ts">
defineProps<{
  items: string[]
}>()
</script>

<template>
  <ul class="footer-section" gap-11>
    <li v-for="item in items" :key="item" flex items-center gap-4>
      <span font-bold text-4.5>{{ item }}</span>
      <div i-ri:arrow-drop-down-line w-6 h-6 />
    </li>
  </ul>
</template>
