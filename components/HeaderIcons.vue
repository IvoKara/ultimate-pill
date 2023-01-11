<template>
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
