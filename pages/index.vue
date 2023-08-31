<script setup lang="ts">
import { partners } from '~/constants'
import { BrowserUtils } from '~/utils/browser'
import CheckIcon from '~icons/line-md/confirm-circle'

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
    onClick: () => BrowserUtils.openNewWindow('https://ap.gdyape.com/')
  },
  {
    label: '预约演示',
    bgColor: '#a157e7',
    textColor: '#ffffff',
    onClick: () => router.push('/')
  }
]

const cardList = [
  { content: '自行数据配置' },
  { content: '在途管理' },
  { content: '物流管理' }
]

const lazyVisible = ref(false)
const checkIconLazyVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    lazyVisible.value = true
  }, 200)
  setTimeout(() => {
    checkIconLazyVisible.value = true
  }, 600)
})
</script>

<template>
  <div>
    <BaseBanner class="wave-container h-[calc(100vh-80px)]">
      <ViewContainer>
        <div
          v-if="lazyVisible"
          v-motion
          class="absolute bottom-40 left-0 top-0 m-auto flex h-fit flex-col text-white"
          :initial="{ opacity: 0, y: 100 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 100,
              mass: 1
            }
          }"
          :delay="100"
        >
          <span class="mb-8 text-7xl font-semibold tracking-wider">
            {{ title }}
          </span>
          <div
            v-for="(row, index) in descriptionRows"
            :key="index"
            class="mb-1 flex items-center space-x-1 text-lg"
          >
            <CheckIcon v-motion-fade-visible />
            <span>{{ row }}</span>
          </div>
          <div class="h- mt-6 flex items-center space-x-8">
            <button
              v-for="(btn, index) in btnList"
              :key="index"
              class="-mb-2 rounded-md px-6 py-2 font-medium tracking-wide shadow-md transition-all hover:-translate-y-1 active:-translate-y-0 active:opacity-80"
              :style="{ backgroundColor: btn.bgColor, color: btn.textColor }"
              @click="btn.onClick"
            >
              {{ btn.label }}
            </button>
          </div>
        </div>
        <img
          class="move-bounce-top absolute bottom-40 right-0 top-0 m-auto w-2/5 rounded-2xl opacity-80 contrast-125 drop-shadow-2xl backdrop-brightness-125 transition-all hover:opacity-90"
          src="~/assets/img/home/main.jpg"
          alt="跟单猿交付协同平台"
        />
      </ViewContainer>
    </BaseBanner>

    <ViewContainer class="flex items-center justify-center">
      <div class="flex justify-between">
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

    <ViewContainer class="bg-[#f9fafb] dark:bg-[#222222]">
      <div class="flex h-full flex-col items-center space-y-8 py-12">
        <span
          v-motion
          class="text-3xl font-medium"
          :initial="{ opacity: 0, y: 100 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 100,
              mass: 1
            }
          }"
          :delay="100"
        >
          合作厂商
        </span>
        <div class="flex flex-col space-y-8">
          <ImageSlider
            v-motion
            :data="partners"
            :initial="{ opacity: 0, y: 100 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 200,
                damping: 100,
                mass: 1
              }
            }"
            :delay="100"
          />
          <ImageSlider
            v-motion
            :data="partners"
            reverse
            :initial="{ opacity: 0, y: 100 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 200,
                damping: 100,
                mass: 1
              }
            }"
            :delay="100"
          />
          <ImageSlider
            v-motion
            :data="partners"
            :initial="{ opacity: 0, y: 100 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 200,
                damping: 100,
                mass: 1
              }
            }"
            :delay="100"
          />
        </div>

        <span
          v-motion
          class="mt-8 text-3xl font-medium"
          :initial="{ opacity: 0, y: 100 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 100,
              mass: 1
            }
          }"
          :delay="100"
        >
          其他合作方
        </span>
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
