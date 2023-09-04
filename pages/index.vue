<script setup lang="ts">
import { otherPartners, partners } from '~/constants'
import { BrowserUtils } from '~/utils/browser'
import CheckIcon from '~icons/line-md/confirm-circle'

const router = useRouter()

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
</script>

<template>
  <div
    class="h-fit w-full bg-gradient-to-b from-[#9556e8] to-[#2054f3] pb-20 pt-10 sm:h-[800px] sm:pt-10 xl:px-20"
  >
    <div
      class="container relative mx-auto flex h-fit w-full flex-col items-center justify-center space-y-8 sm:h-full sm:flex-row sm:justify-between sm:space-y-0 sm:py-0 sm:pb-20"
    >
      <div
        v-motion
        class="flex flex-col text-white"
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
        <span
          class="mb-4 text-[2.5rem] font-semibold sm:text-5xl sm:tracking-wider lg:text-6xl xl:text-7xl"
        >
          跟单猿交付协同平台
        </span>

        <div class="mb-4 text-xl font-medium sm:text-2xl sm:tracking-wider">
          成就供应链生态，组织间的智能协同
        </div>

        <div class="flex items-center space-x-4">
          <div>
            <div
              v-for="(row, index) in [
                '广义供应链数字化协同云平台',
                '信息流、物流、金流是供应链的基本目标',
                '内外协同是供应链核心竞争力'
              ]"
              :key="index"
              class="mb-1 flex items-center space-x-1 text-base sm:text-lg"
            >
              <CheckIcon v-motion-fade-visible />
              <span>{{ row }}</span>
            </div>
          </div>

          <img
            v-if="false"
            class="h-20 w-20 rounded-full bg-white opacity-90"
            src="@/assets/img/logo/gdy.png"
            alt=""
          />
        </div>

        <div class="mt-6 flex items-center space-x-8">
          <div
            v-for="(btn, index) in btnList"
            :key="index"
            class="-mb-0.5 pb-0.5 transition-all hover:-translate-y-0.5 active:-translate-y-0 active:opacity-80"
          >
            <button
              class="rounded-md px-6 py-2 font-medium tracking-wide shadow-md drop-shadow-md"
              :style="{ backgroundColor: btn.bgColor, color: btn.textColor }"
              @click="btn.onClick"
            >
              {{ btn.label }}
            </button>
          </div>
        </div>
      </div>

      <img
        class="move-bounce-top w-[360px] select-none rounded-lg opacity-90 contrast-125 drop-shadow-2xl backdrop-brightness-125 transition-all duration-500 hover:opacity-100 lg:w-[500px] xl:w-[600px]"
        src="~/assets/img/home/main.jpg"
        alt=""
      />

      <ArrowDown />
    </div>
  </div>

  <div class="h-screen w-full shrink-0 sm:h-[800px]">
    <div
      class="container relative mx-auto flex h-full w-full items-center justify-between overflow-hidden"
    >
      <div
        v-for="(card, index) in cardList"
        :key="index"
        v-motion-roll-visible-bottom
      >
        <GradientCard>
          {{ card.content }}
        </GradientCard>
      </div>
    </div>
  </div>

  <div class="w-full shrink-0 bg-[#f9fafb] dark:bg-[#222222]">
    <div
      class="container relative mx-auto flex flex-col items-center space-y-8 overflow-hidden py-12"
    >
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
        class="!mt-20 text-3xl font-medium"
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

      <div class="flex w-full justify-center sm:justify-between">
        <div class="hidden grow items-center justify-center sm:flex">
          <img
            width="600"
            src="@/assets/img/home/other-partners.jpg"
            alt=""
          />
        </div>
        <ul
          v-motion
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
          class="mx-12 w-full space-y-1 text-center sm:w-1/4"
        >
          <li
            v-for="(partner, index) in otherPartners"
            :key="index"
            class="tracking-wider"
          >
            {{ partner.label }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
