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
          <span i-ri:search-line />
        </div>
        <div v-if="profileIconVisible">
          <!-- <span sr-only xl:not-sr-only>Профил</span> -->
          <span i-majesticons:user-line />
        </div>
        <div>
          <span i-material-symbols:favorite-outline />
        </div>
        <div>
          <span i-mdi:cart-outline />
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

    & > span {
      width: 1.5rem;
      height: 1.5rem;
      display: inline-block;
    }
  }
}
</style>
