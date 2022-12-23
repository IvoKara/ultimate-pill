<script setup lang="ts">
import designBreakpoints from '@/breakpoints.json'

definePageMeta({
  layout: false,
})

const breakpoints = useBreakpoints(designBreakpoints)

const grid4 = breakpoints.smaller('md')
const grid8 = breakpoints.between('md', 'lg')
const grid12 = breakpoints.greater('lg')
</script>

<template>
  <div bg="#FFB0BA">
    <main px-grid-br xxl="w-1920px mx-auto">
      <div
        bg="#C7E2FB" w-full h-screen grid gap-4 grid-rows-1 grid-cols-4 md:grid-cols-8 lg:grid-cols-12
      >
        <div v-for="_, i in grid4 ? 4 : grid8 ? 8 : 12" :key="i" bg="#8FBEEA" />
      </div>
    </main>
  </div>
</template>
