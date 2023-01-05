<script setup lang="ts">
const menuItems = ref<MenuItems>([
  { label: 'За нас', to: '/about' },
  { label: 'Блог', to: '/blog' },
  { label: 'Работи с нас', to: '/work-with-us' },
  { label: 'ЧЗВ', to: '/help' },
  { label: 'Контанти', to: '/contacts' },
])

const isDrawerShown = ref(false)
const isProductmenuShown = ref(false)
</script>

<template>
  <header class="sticky left-0 right-0 top-0 z-max" @mouseleave="isProductmenuShown = false">
    <slot name="banner" />
    <nav
      class="border-b-1  border-black backdrop-blur h-16 lg:(h-20 gap-10) xxl:gap-50 xxl:text-4.25 flex items-center justify-between xxl:justify-start gap-4 px-grid-br py-2"
      :class="{ 'bg-white': isProductmenuShown }"
    >
      <div class="flex items-center xl:gap-14 xxl:gap-18 w-max shrink-0">
        <div class="flex gap-2 items-center">
          <button
            i-majesticons:menu-alt-line
            xl:hidden w-10 h-10
            @click="isDrawerShown = true"
          />
          <NuxtLink href="/">
            <nuxt-img
              src="/ultimate-pill.svg" alt="Ultimate Pill logo" :preload="true"
              h-8 lg:h-10
            />
          </NuxtLink>
        </div>
        <ul hidden xl="flex xxl:gap-2 shrink-0">
          <li flex items-center>
            <button flex items-center @mouseover="isProductmenuShown = true">
              <span>Продукти</span>
              <span
                i-ri:arrow-drop-down-line
                class="inline-block w-6 h-6"
                :class="{ 'rotate-180': isProductmenuShown }"
              />
            </button>
          </li>
          <li v-for="item in menuItems" :key="item.to">
            <NuxtLink
              :to="item.to"
              inline-block px-4 pt-1.5 pb-2 border="2 transparent" rounded-6
              transition-border-color-500
              hover:border-black active:border-black
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div flex gap-8 items-center h-full xxl:w-full>
        <InputText
          hidden lg:block at-lg:w112 xxl:flex-grow
          placeholder="Търсене в целия магазин" type="text"
          icon="ri:search-line"
        />
        <div class="rightIcons h-70% xl:h-80%">
          <div class="search">
            <span sr-only>Търсене</span>
            <span i-ri:search-line sm="w-6 h-6" inline-block cursor-pointer />
          </div>
          <div class="profile group xxl:hover:cursor-pointer">
            <div class="flex items-center gap-2">
              <span sr-only xxl="not-sr-only">Профил</span>
              <span i-majesticons:user-line sm="w-6 h-6" inline-block group-hover:cursor-pointer />
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
    <Transition name="menu">
      <section v-if="isProductmenuShown" absolute left-0 right-0 bg-white p-10 border="b-1 black">
        <div flex gap-10 items-center>
          <div v-for="i in 3" :key="i">
            <div w-50 h-50 bg-neutral />
            <span>Product {{ i }}</span>
          </div>
        </div>
        <NuxtLink to="/products" block mt-5 text-blue-7>
          Виж всички продукти
        </NuxtLink>
      </section>
    </Transition>
  </header>
  <ADrawer
    v-model="isDrawerShown"
    bg-white w-100vw md:w-65vw lg:w-50vw
  >
    <div m-20 flex flex-col gap-10 items-start>
      <NuxtLink to="/" @click="isDrawerShown = false">
        <nuxt-img
          src="/ultimate-pill.svg" alt="Ultimate Pill logo" :preload="true"
          h-8 lg:h-10
        />
      </NuxtLink>
      <ul>
        <li py-2>
          <NuxtLink
            to="/products" font-500 py-2 px-3
            active-class="border-(2 black) rounded-full font-bold"
            @click="isDrawerShown = false"
          >
            Продукти
          </NuxtLink>
        </li>
        <li v-for="item in menuItems" :key="item.to" py-2>
          <NuxtLink
            :to="item.to" font-500 py-2 px-3
            active-class="border-(2 black) rounded-full font-bold"
            @click="isDrawerShown = false"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
      <button i-mdi:close @click="isDrawerShown = false" />
    </div>
  </ADrawer>
</template>

<style scoped lang="less">
.rightIcons {
  display: flex;
  align-items: stretch;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 992px){
      &.search {
        display: none;
      }
    }

    @media (max-width: 767px){
      &.profile {
        display: none;
      }
    }

    &:not(:first-child) {
      padding-left: 1rem;
    }

    &:not(:last-child) {
      border-right: 1px solid #7287A6;
      padding-right: 1rem;
    }
  }
}

.menu-enter-active,
.menu-leave-active {
  transform: translateY(0);
  transition: all 0.5s ease;
}

.menu-enter-from,
.menu-leave-to {
  transform: translateY(-30rem);
  opacity: 0;
}
</style>
