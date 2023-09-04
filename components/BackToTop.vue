<script setup lang="ts">
import ArrowUp from '~icons/mdi/arrow-up'

const showBtn = ref(false)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  useEventListener('scroll', () =>
    setTimeout(() => {
      showBtn.value = window.scrollY > 0
    }, 100)
  )
})
</script>

<template>
  <div
    class="fixed bottom-8 right-4 flex cursor-pointer items-center justify-center rounded-full bg-purple-300 p-2.5 shadow-lg drop-shadow-lg transition-all duration-500 hover:opacity-90 active:opacity-75 sm:bottom-16 sm:right-12"
    :class="[
      showBtn ? 'translate-y-0 opacity-100' : '-translate-y-80 opacity-0'
    ]"
    @click="scrollToTop"
  >
    <ArrowUp class="h-8 w-8 text-white" />
  </div>
</template>
