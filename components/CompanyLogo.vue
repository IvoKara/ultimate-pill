<script setup lang="ts">
withDefaults(defineProps<{
  light: boolean
  to: string
  doesRedirect: boolean
}>(), {
  light: false,
  to: '/',
  doesRedirect: true,
})
</script>

<template>
  <NuxtLink v-if="doesRedirect" :to="to">
    <nuxt-img
      v-bind="$attrs"
      :src="`/ultimate-pill${light ? '-light' : ''}.svg`"
      alt="Ultimate Pill logo" :preload="true"
    />
  </NuxtLink>

  <nuxt-img
    v-else v-bind="$attrs"
    :src="`/ultimate-pill${light ? '-light' : ''}.svg`"
    alt="Ultimate Pill logo" :preload="true"
  />
</template>
