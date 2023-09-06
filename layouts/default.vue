<script setup lang="ts">
const route = useRoute()

useHead({
  titleTemplate: () =>
    route.meta.title
      ? `${route.meta.title} - 睿朴麟信息科技有限公司（西安）`
      : '睿朴麟信息科技有限公司（西安）',
  htmlAttrs: {
    class: 'scroll-bar'
  }
})

const title = '跟单猿交付协同平台 - 睿朴麟信息科技有限公司（西安）'
const description = '广义供应链数字化协同云平台'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '[og:image]',
  ogUrl: '[og:url]'
})
</script>

<template>
  <div
    class="relative flex min-h-screen w-full flex-col bg-white text-black dark:bg-[#121212] dark:text-white"
  >
    <BaseHeader />
    <div class="flex w-full flex-col">
      <slot />
    </div>
    <BaseFooter />
    <BackToTop />
  </div>
</template>
