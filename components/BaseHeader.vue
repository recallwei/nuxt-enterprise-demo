<script setup lang="ts">
import { navList } from '~/constants'

const appConfig = useAppConfig()

const fixed = ref(false)

onMounted(() => {
  useEventListener('scroll', () => {
    fixed.value = window.scrollY > 0
  })
})
</script>

<template>
  <header
    class="top-0 z-50 h-20 w-full transition-all"
    :class="
      fixed
        ? 'fixed shadow-lg drop-shadow-lg custom-fixed bg-[#9556e8]'
        : 'relative bg-gradient-to-b from-[#a157e7] to-[#9556e8]'
    "
  >
    <div class="container mx-auto flex h-full items-center justify-between">
      <div
        v-motion-fade-visible
        class="flex select-none flex-col items-center space-y-1 text-white"
      >
        <span class="logo-text text-4xl font-semibold">
          {{ appConfig.companyName }}
        </span>
        <span class="logo-second-text text-xs tracking-tighter">
          {{ appConfig.companySlogan }}
        </span>
      </div>
      <ul class="flex items-center space-x-8 text-lg text-white">
        <li
          v-for="(navItem, index) in navList"
          :key="index"
        >
          <NuxtLink :to="navItem.path">
            {{ navItem.label }}
          </NuxtLink>
        </li>
        <ThemeButton />
      </ul>
    </div>
  </header>
</template>

<style scoped lang="scss">
.logo-text {
  font-stretch: ultra-expanded;
}
.logo-second-text {
  font-stretch: ultra-condensed;
}

.custom-fixed {
  animation: fade-in-down 300ms ease-in-out 0s normal none 1 running;
}

@keyframes fade-in-down {
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
