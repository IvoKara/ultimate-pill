<script setup lang="ts">
import designBreakpoints from '../../breakpoints.json'

const props = withDefaults(defineProps<{
  closed?: boolean
  isSticky?: boolean
}>(), {
  closed: false,
  isSticky: true,
})

const emit = defineEmits(['update:closed'])

const attrs = useAttrs()

const hasBgColor = Object.keys(attrs).some(key => /^(.{2,}\:)?bg(.+)$/.test(key))
|| (attrs?.class as string)?.split(' ').some(value => /^(.{2,}\:)?bg-(.+)$/.test(value))

const isClosed = ref(props.closed)

function closeCookies() {
  isClosed.value = true
  emit('update:closed', true)
}
</script>

<template>
  <!-- min-w-1920px -->
  <div
    v-if="!isClosed"
    class="font-400 text-#F5F5F5 text-3.5 leading-5 py-2.5 px-grid-br flex items-center justify-between gap-4
      lg:gap-20
      xxl:(text-base gap-15)"
    :class="{
      'bg-#131212': !hasBgColor,
      'fixed left-0 right-0 bottom-0': isSticky,
    }"
  >
    <span>
      Този сайт използва Бисквитки с цел предоставяне на услуги, реклами и анализ на трафика.
      Използвайки сайта вие се съгласявате с употребата на Бисквитки.
      <NuxtLink href="#" class="underline underline-(1 offset-3)">
        Повече информация.
      </NuxtLink>
    </span>
    <div class="grid grid-cols-[auto] gap-2.5 md:(grid-cols-[repeat(2,auto)] gap-4) lg:gap-5">
      <PillButton class="b-1 border-white text-black bg-white w-max" @click="closeCookies()">
        Съгласявам се със всички
      </PillButton>
      <PillButton class="b-1 border-white text-#EB2525" @click="closeCookies()">
        Отказвам
      </PillButton>
    </div>
  </div>
</template>
