<script setup lang="ts">
const showBtn = ref(false)

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

onMounted(() => {
  useEventListener('scroll', () => {
    showBtn.value = window.scrollY > 0
  })
})
</script>

<template>
  <div
    class="fixed bottom-16 right-12 flex cursor-pointer items-center justify-center rounded-full bg-purple-300 p-2.5 shadow-lg drop-shadow-lg transition-all duration-500 hover:opacity-90 active:opacity-75"
    :style="{
      opacity: showBtn ? 1 : 0,
      transform: showBtn ? 'translateY(0)' : 'translateY(-800%)'
    }"
    @click="scrollToTop"
  >
    <span class="i-mdi-arrow-up h-8 w-8 text-white"></span>
  </div>
</template>
