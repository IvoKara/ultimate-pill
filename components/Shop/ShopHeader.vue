<template>
  <header class="sticky left-0 right-0 top-0">
    <slot name="banner" />
    <nav class="border-b-1  border-black backdrop-blur h-16 lg:(h-20 gap-10) xxl:gap-50 xxl:text-4.25 flex items-center justify-between xxl:justify-start gap-4 px-grid-br py-2">
      <div class="flex items-center xl:gap-14 xxl:gap-18 w-max">
        <div class="flex gap-2 items-center shrink-0">
          <div xl:hidden i-majesticons:menu-alt-line w-10 h-10 />
          <NuxtLink href="/">
            <img inline-block h-8 lg:h-10 src="/ultimate-pill.svg" alt="Ultimate Pill logo">
          </NuxtLink>
        </div>
        <ul hidden xl="flex xxl:gap-2 shrink-0">
          <li>
            <Dropdown
              label="Продукти" :items="['Продукт1', 'Продукт2', 'Продукт3']"
              inline-block px-4 pt-1.5 pb-2 border="2 transparent" rounded-6
              transition-border-color-500
              hover:border-black active:border-black
            />
          </li>
          <li v-for="text in ['За нас', 'Блог', 'Работи с нас', 'ЧЗВ', 'Контакти']" :key="text">
            <NuxtLink
              href="#"
              inline-block px-4 pt-1.5 pb-2 border="2 transparent" rounded-6
              transition-border-color-500
              hover:border-black active:border-black
            >
              {{ text }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div flex gap-8 items-center h-full xxl:w-full>
        <InputText
          hidden lg:block lg:lt-xl:w-112 xxl:flex-grow
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
</style>
