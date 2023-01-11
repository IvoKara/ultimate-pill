<script setup lang="ts">
defineProps<{
  items: SocialIconLink[]
}>()
</script>

<template>
  <div flex gap-6 justify-evenly items-center>
    <NuxtLink v-for="item in items" :key="item" :to="item.to">
      <div :class="item.icon" />
    </NuxtLink>
  </div>
</template>
