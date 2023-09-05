<script setup lang="ts">
import { Motion } from '~/constants'
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

const textMotion = ref(Motion.scrollBottom)
</script>

<template>
  <div
    class="h-fit w-full bg-gradient-to-b from-[#9556e8] to-[#2054f3] pb-20 pt-10 sm:h-[800px] sm:pt-10 xl:px-20"
  >
    <div
      class="container relative mx-auto flex h-fit w-full flex-col items-center justify-center space-y-8 sm:h-full sm:flex-row sm:justify-between sm:space-y-0 sm:py-0 sm:pb-20"
    >
      <div
        v-motion="textMotion"
        class="flex flex-col text-white"
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
              <CheckIcon />
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
</template>
?
