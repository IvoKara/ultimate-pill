<template>
  <TheHeader>
    <template #banner>
      <Banner :is-sticky="false">
        <span>
          Безплатна доставка при поръчка на 2 или повече продукта.&nbsp;
          <NuxtLink href="#" class="underline underline-1">
            Научи повече за условията за доставка.
          </NuxtLink>
        </span>
      </Banner>
    </template>
  </TheHeader>

  <main>
    <slot />
  </main>

  <CookiesBanner />

  <TheFooter />
</template>
