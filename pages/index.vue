<script setup lang="ts">
useSeoMeta({
  title: '跟单猿交付协同平台',
  description: '广义供应链数字化协同云平台',
  ogTitle: '跟单猿交付协同平台',
  ogDescription: '广义供应链数字化协同云平台',
  ogImage: '[og:image]',
  ogUrl: '[og:url]'
})

useHead({
  title: '睿朴麟信息科技有限公司（西安）',
  htmlAttrs: {
    lang: 'zh-CN'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico'
    }
  ]
})

const router = useRouter()

const title = '跟单猿交付协同平台'
const descriptionRows = [
  '广义供应链数字化协同云平台',
  '信息流、物流、金流是供应链的基本目标',
  '内外协同是供应链核心竞争力'
]

const btnList = [
  {
    label: '立即开始',
    bgColor: '#ffffff',
    textColor: '#000000',
    onClick: () => openWindow('https://ap.gdyape.com/')
  },
  {
    label: '申请演示',
    bgColor: '#a157e7',
    textColor: '#ffffff',
    onClick: () => router.push('/')
  }
]

const cardList = [
  { content: '自行数据配置' },
  { content: '在途管理' },
  { content: '物流管理' },
  { content: '4' },
  { content: '5' },
  { content: '6' }
]
</script>

<template>
  <div>
    <BaseBanner class="wave-container h-[calc(100vh-80px)]">
      <ViewContainer class="relative">
        <div
          v-motion
          class="absolute bottom-40 left-0 top-0 m-auto flex h-fit flex-col text-white"
          :initial="{
            opacity: 0,
            y: 150
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 100,
              delay: 200
            }
          }"
        >
          <span class="mb-8 text-7xl font-semibold tracking-wider">
            {{ title }}
          </span>
          <div
            v-for="(row, index) in descriptionRows"
            :key="index"
            class="mb-1 flex items-center space-x-1 text-lg"
          >
            <span class="i-mdi-check-circle"></span>
            <span>{{ row }}</span>
          </div>
          <div class="mt-6 flex items-center space-x-8">
            <button
              v-for="(btn, index) in btnList"
              :key="index"
              class="-mb-2 rounded-md px-6 py-2.5 font-medium tracking-wide shadow-md transition-all hover:-translate-y-0.5 hover:opacity-90 active:-translate-y-0 active:opacity-75"
              :style="{ backgroundColor: btn.bgColor, color: btn.textColor }"
              @click="btn.onClick"
            >
              {{ btn.label }}
            </button>
          </div>
        </div>
        <img
          class="move-bounce-top absolute bottom-40 right-0 top-0 m-auto w-1/2 rounded-2xl opacity-80 contrast-125 drop-shadow-2xl backdrop-brightness-125 transition-all hover:opacity-90"
          src="~/assets/img/home/main.jpg"
          alt="跟单猿交付协同平台"
        />
      </ViewContainer>
    </BaseBanner>

    <ViewContainer class="flex items-center justify-center">
      <div
        class="m-auto grid w-full grid-cols-3 items-center justify-center gap-8"
      >
        <div
          v-for="(card, index) in cardList"
          :key="index"
          v-motion-roll-visible-bottom
        >
          <GradientCard class="h-72 w-60">
            {{ card.content }}
          </GradientCard>
        </div>
      </div>
    </ViewContainer>
  </div>
</template>

<style scoped lang="scss">
.wave-container::before {
  content: '';
  left: 0;
  background: url(../assets/img/wave-bg.png);
  height: 100%;
  width: 100%;
  position: absolute;
  background-repeat: repeat-x;
  background-position: center bottom;
  bottom: 0;
  z-index: -1;
}

.move-bounce-top {
  animation: move-bounce-top 10s linear infinite;
}

@keyframes move-bounce-top {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
