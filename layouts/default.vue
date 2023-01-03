<template>
  <ShopHeader>
    <template #banner>
      <ShopBanner :is-sticky="false">
        <span>
          Безплатна доставка при поръчка на 2 или повече продукта.&nbsp;
          <NuxtLink href="#" class="underline underline-1">
            Научи повече за условията за доставка.
          </NuxtLink>
        </span>
      </ShopBanner>
    </template>
  </ShopHeader>

  <main>
    <slot />
  </main>

  <ShopCookiesBanner />

  <ShopFooter />
</template>
