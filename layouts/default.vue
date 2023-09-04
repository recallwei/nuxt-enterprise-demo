<script setup lang="ts">
const route = useRoute()

useHead({
  titleTemplate: () =>
    route.meta.title
      ? `${route.meta.title} - 睿朴麟信息科技有限公司（西安）`
      : '睿朴麟信息科技有限公司（西安）'
})

useSeoMeta({
  title: '跟单猿交付协同平台 - 睿朴麟信息科技有限公司（西安）',
  description: '广义供应链数字化协同云平台',
  ogTitle: '跟单猿交付协同平台 - 睿朴麟信息科技有限公司（西安）',
  ogDescription: '广义供应链数字化协同云平台',
  ogImage: '[og:image]',
  ogUrl: '[og:url]'
})
</script>

<template>
  <div class="global_hide-scrollbar relative flex min-h-screen w-full flex-col">
    <BaseHeader />
    <div class="flex w-full flex-col">
      <slot />
    </div>
    <BaseFooter />
    <BackToTop />
  </div>
</template>
