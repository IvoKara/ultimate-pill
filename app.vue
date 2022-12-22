<script setup>
useHead({
  title: 'Ultimate Pill',
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/ultimate-pill-logo.svg' },
    // { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

/* html.dark {
  background: #222;
  color: white;
} */
</style>
