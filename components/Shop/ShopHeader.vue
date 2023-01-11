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
  <Drawer v-model:show="isDrawerShown" :items="menuItems" />
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
          <CompanyLogo h-8 lg:h-10 />
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
          py-3 px-5
          hidden lg:block at-lg:w112 xxl:flex-grow
          placeholder="Търсене в целия магазин" type="text"
          icon="ri:search-line"
        />
        <HeaderIcons />
      </div>
    </nav>
    <Transition name="menu">
      <ProductsMenu v-if="isProductmenuShown" />
    </Transition>
  </header>
</template>

<style scoped>
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
