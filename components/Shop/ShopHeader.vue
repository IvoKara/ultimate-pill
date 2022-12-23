<script setup lang="ts">
import designBreakpoints from '../../breakpoints.json'

const breakpoints = useBreakpoints(designBreakpoints)
const menuButtonVisible = breakpoints.smaller('lg')
const profileIconVisible = breakpoints.greaterOrEqual('md')
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
      <div class="rightItems h-70% xl:h-80%">
        <div v-if="menuButtonVisible">
          <span sr-only>Търсене</span>
          <span i-ri:search-line w-6 h-6 inline-block />
        </div>
        <div v-if="profileIconVisible">
          <div flex items-center gap-3>
            <span sr-only xl:not-sr-only>Профил</span>
            <span i-majesticons:user-line w-6 h-6 inline-block />
          </div>
        </div>
        <div>
          <span sr-only>Любими продукти</span>
          <span i-material-symbols:favorite-outline w-6 h-6 inline-block />
        </div>
        <div>
          <span sr-only>Количка</span>
          <span i-mdi:cart-outline w-6 h-6 inline-block />
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="less">
.rightItems {
  display: flex;
  align-items: stretch;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:not(:first-child) {
      padding-left: 1rem;
    }

    &:not(:last-child) {
      border-right: 1px solid #7287A6;
      padding-right: 1rem;
    }
  }
}
</style>
