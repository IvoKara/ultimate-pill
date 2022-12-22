<template>
  <header class="sticky left-0 right-0 top-0">
    <slot name="banner" />
    <nav class="border-b-2 border-black backdrop-blur h-16 lg:h-20 flex items-center px-grid-br">
      <div
        i-tabler:menu
        w-20 h-20
      />
    </nav>
  </header>
</template>
