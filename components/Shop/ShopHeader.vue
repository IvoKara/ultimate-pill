<script setup lang="ts">
import designBreakpoints from '../../breakpoints.json'

const breakpoints = useBreakpoints(designBreakpoints)
const menuButtonVisible = breakpoints.smaller('lg')
</script>

<template>
  <header class="sticky left-0 right-0 top-0">
    <slot name="banner" />
    <nav class="border-b-1 border-black backdrop-blur h-16 lg:h-20 flex items-center justify-between px-grid-br py-2">
      <div class="flex gap-2 items-center">
        <div
          v-if="menuButtonVisible"
          i-majesticons:menu-alt-line
          w-10 h-10
        />
        <img inline-block h-8 lg:h-10 src="/ultimate-pill.svg">
      </div>
      <div flex h-full items-center gap-4>
        <div
          v-if="menuButtonVisible"
          i-ri:search-line
          w-6 h-6
        />
        <div
          i-ph:user
          w-6 h-6
        />
        <div
          i-material-symbols:favorite-outline
          w-6 h-6
        />
        <div
          i-mdi:cart-outline
          w-6 h-6
        />
      </div>
    </nav>
  </header>
</template>
