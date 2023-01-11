<template>
  <section absolute left-0 right-0 bg-white p-10 border="b-1 black">
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
</template>
