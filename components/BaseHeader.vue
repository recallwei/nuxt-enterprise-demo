<script setup lang="ts">
const appConfig = useAppConfig()

const fixed = ref(false)

interface NavItem {
  label: string
  path: string
}

const navList: NavItem[] = [
  {
    label: '首页',
    path: '/'
  },
  {
    label: '解决方案',
    path: '/solutions'
  },
  {
    label: '关于我们',
    path: '/about-us'
  },
  {
    label: '联系我们',
    path: '/contact-us'
  }
]

onMounted(() => {
  useEventListener('scroll', () => {
    fixed.value = window.scrollY > 0
  })
})
</script>

<template>
  <header
    class="top-0 z-50 h-20 w-full bg-gradient-to-b from-[#a157e7] to-[#9556e8] transition-all"
    :class="fixed ? 'fixed shadow-lg drop-shadow-lg' : 'relative'"
  >
    <div class="container mx-auto flex h-full items-center justify-between">
      <div
        v-motion-fade-visible
        class="flex flex-col items-center space-y-1 text-white"
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
        <ClientOnly>
          <ThemeButton />
        </ClientOnly>
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
</style>
