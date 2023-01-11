<script setup lang="ts">
const props = withDefaults(defineProps<{
  show?: boolean
  items: MenuItems
}>(), {
  show: false,
})

const emit = defineEmits(['update:show'])

const isDrawerShown = ref(props.show)

watch(isDrawerShown, (newVisibility) => {
  emit('update:show', newVisibility)
})

watch(() => props.show, (newVisibility) => {
  isDrawerShown.value = newVisibility
})
</script>

<template>
  <ADrawer
    v-model="isDrawerShown"
    bg-white w-100vw md:w-65vw lg:w-50vw
  >
    <div m-20 flex flex-col gap-10 items-start>
      <CompanyLogo h-8 lg:h-10 @click="isDrawerShown = false" />
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
        <li v-for="item in props.items" :key="item.to" py-2>
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
