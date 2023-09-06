<script setup lang="ts">
const handleScrollDown = () => window.scrollTo({ top: 700, behavior: 'smooth' })
</script>

<template>
  <span
    v-motion-fade-visible
    class="absolute inset-x-0 bottom-6 m-auto flex items-center justify-center sm:bottom-16"
  >
    <svg
      class="bounce-animation h-10 w-10 cursor-pointer text-primary transition-all hover:text-gray-500 active:opacity-90 dark:text-white dark:hover:text-gray-200"
      aria-hidden="true"
      viewBox="-75.52 -43.52 599.04 599.04"
      fill="currentColor"
      @click="handleScrollDown"
    >
      <path
        d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
      />
    </svg>
  </span>
</template>

<style scoped lang="scss">
.bounce-animation {
  transform-origin: 50% 50%;
  animation: bounce 4s linear infinite;
}

@keyframes bounce {
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(0px, -10px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
</style>
