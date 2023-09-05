<script setup lang="ts">
import { navList } from '~/constants'
import MenuIcon from '~icons/line-md/menu'

const fixed = ref(false)
const showMenu = ref(false)

onMounted(() => {
  useEventListener('scroll', () => {
    fixed.value = window.scrollY > 0
    showMenu.value = false
  })
})
</script>

<template>
  <header
    class="top-0 z-50 h-14 w-full px-4 transition-all dark:bg-[#333333] sm:h-20 sm:px-0 xl:px-20"
    :class="
      fixed
        ? 'fixed shadow-lg drop-shadow-lg custom-fixed bg-white dark:bg-[#333333]'
        : 'relative'
    "
  >
    <div class="container mx-auto flex h-full items-center justify-between">
      <CompanyLogo link />
      <ul class="flex items-center space-x-4 text-lg sm:space-x-8">
        <li
          v-for="(navItem, index) in navList"
          :key="index"
          class="hidden sm:block"
        >
          <NuxtLink :to="navItem.path">
            {{ navItem.label }}
          </NuxtLink>
        </li>
        <ThemeButton />
        <MenuIcon
          class="h-6 w-6 sm:hidden"
          @click="() => (showMenu = !showMenu)"
        />
      </ul>
    </div>

    <!-- Mobile Only -->
    <div
      class="absolute inset-x-0 top-14 flex flex-col overflow-hidden bg-[#424242] text-white transition-all sm:hidden"
      :class="showMenu ? 'h-40' : 'h-0'"
    >
      <ul class="flex flex-col justify-start space-y-2">
        <li
          v-for="(navItem, index) in navList"
          :key="index"
          class="mx-4 mt-4"
        >
          <NuxtLink
            :to="navItem.path"
            class="block transition-all active:opacity-90"
          >
            {{ navItem.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped lang="scss">
@media (min-width: 640px) {
  .logo-text {
    font-stretch: ultra-expanded;
  }
  .log-second-text {
    font-stretch: ultra-condensed;
  }
}

.custom-fixed {
  animation: scroll-down 300ms ease-in-out 0s normal none 1 running;
}

@keyframes scroll-down {
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
