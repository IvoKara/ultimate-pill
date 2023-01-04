<script setup>
useHead({
  title: 'Ultimate Pill',
  htmlAttrs: { lang: 'bg' },
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
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
html, body , #__nuxt {
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

/* html.dark {
  background: #222;
  color: white;
} */
</style>
