<script setup lang="ts">
import designBreakpoints from '../../breakpoints.json'

const breakpoints = useBreakpoints(designBreakpoints)
const smallLaptopScreen = breakpoints.smallerOrEqual('lg')
const navbarItemsVisible = breakpoints.greaterOrEqual('xl')
const profileIconVisible = breakpoints.greaterOrEqual('md')
</script>

<template>
  <header class="sticky left-0 right-0 top-0">
    <slot name="banner" />
    <nav class="border-b-1 border-black backdrop-blur h-16 lg:(h-20 gap-20) flex items-center justify-between gap-4 px-grid-br py-2">
      <div
        flex items-center justify-between gap-12 :class="{ 'w-210': navbarItemsVisible }"
      >
        <div class="flex gap-2 items-center">
          <div v-if="smallLaptopScreen" i-majesticons:menu-alt-line w-10 h-10 />
          <img inline-block h-8 lg:h-10 src="/ultimate-pill.svg">
        </div>
        <ul v-if="navbarItemsVisible" flex justify-between gap-2 w="75%">
          <li>
            <Dropdown label="Продукти" :items="['Продукт1', 'Продукт2', 'Продукт3']" />
          </li>
          <li>
            <NuxtLink href="#">
              За нас
            </NuxtLink>
          </li><li>
            <NuxtLink href="#">
              Блог
            </NuxtLink>
          </li><li>
            <NuxtLink href="#">
              Работи с нас
            </NuxtLink>
          </li><li>
            <NuxtLink href="#">
              ЧЗВ
            </NuxtLink>
          </li><li>
            <NuxtLink href="#">
              Контакти
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div flex gap-8 items-center h-full>
        <InputText
          v-if="!smallLaptopScreen"
          placeholder="Търсене в целия магазин..." type="text"
          icon="ri:search-line"
        />
        <div class="rightIcons h-70% xl:h-80%">
          <div v-if="smallLaptopScreen">
            <span sr-only>Търсене</span>
            <span i-ri:search-line sm="w-6 h-6" inline-block cursor-pointer />
          </div>
          <div v-if="profileIconVisible">
            <div flex items-center gap-3>
              <span sr-only xl="not-sr-only cursor-pointer">Профил</span>
              <span i-majesticons:user-line sm="w-6 h-6" inline-block cursor-pointer />
            </div>
          </div>
          <div>
            <span sr-only>Любими продукти</span>
            <span i-material-symbols:favorite-outline sm="w-6 h-6" inline-block cursor-pointer />
          </div>
          <div>
            <span sr-only>Количка</span>
            <span i-mdi:cart-outline sm="w-6 h-6" inline-block cursor-pointer />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="less">
.rightIcons {
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
