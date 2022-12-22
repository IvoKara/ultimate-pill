<script setup lang="ts">
const props = withDefaults(defineProps<{
  label?: string
  closed?: boolean
  isClosable?: boolean
  isSticky?: boolean
}>(), {
  label: 'Banner Text',
  closed: false,
  isClosable: true,
  isSticky: true,
})

const emit = defineEmits(['update:closed'])

const attrs = useAttrs()

const hasHeight = Object.keys(attrs).some(key => /^(.{2,}\:)?h(.+)$/.test(key))
|| (attrs?.class as string)?.split(' ').some(value => /^(.{2,}\:)?h-(.+)$/.test(value))

const hasBgColor = Object.keys(attrs).some(key => /^(.{2,}\:)?bg(.+)$/.test(key))
|| (attrs?.class as string)?.split(' ').some(value => /^(.{2,}\:)?bg-(.+)$/.test(value))

const isClosed = ref(props.closed)

function closeBanner() {
  isClosed.value = true
  emit('update:closed', true)
}
</script>

<template>
  <!-- min-w-1920px -->
  <div
    v-if="!isClosed"
    class="font-400
      xl:(text-18px leading-24px)
      text-14px leading-18px
      "
    :class="{
      'xxl:h-16 lg:h-12 sm:h-13 min-h-14': !hasHeight,
      'xxl:bg-#DFDFCD bg-#CDC0A7': !hasBgColor,
      'sticky left-0 right-0 top-0': isSticky,
    }"
  >
    <div class="py-2.5 px-5 flex items-center lg:justify-center justify-between gap-5 h-full">
      <slot>
        {{ label }}
      </slot>
      <div
        v-if="props.isClosable"
        class="lg:absolute xxl:right-20 xl:right-16 md:right-8 sm:right-4 my-auto h-full flex flex-col justify-center text-xl"
      >
        <button
          tabindex="0"
          @click="closeBanner()"
        >
          <div i-material-symbols:close />
          <span class="sr-only">Close banner</span>
        </button>
      </div>
    </div>
  </div>
</template>
