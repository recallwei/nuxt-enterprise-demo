<script setup lang="ts">
import { Motion } from '~/constants'
import { BrowserUtils } from '~/utils/browser'
import CheckIcon from '~icons/line-md/confirm-circle'

const router = useRouter()

const btnList = ref([
  {
    label: '立即开始',
    bgColor: '#ffffff',
    textColor: '#000000',
    onClick: () => BrowserUtils.openNewWindow('https://ap.gdyape.com/'),
    motion: {
      initial: {
        opacity: 0,
        x: -20
      },
      enter: {
        opacity: 1,
        x: 0,
        transition: {
          delay: 500,
          duration: 100,
          type: 'keyframes',
          ease: 'easeIn'
        }
      }
    }
  },
  {
    label: '预约演示',
    bgColor: '#333333',
    textColor: '#ffffff',
    onClick: () => router.push('/'),
    motion: {
      initial: {
        opacity: 0,
        x: 20
      },
      enter: {
        opacity: 1,
        x: 0,
        transition: {
          delay: 500,
          duration: 100,
          type: 'keyframes',
          ease: 'easeIn'
        }
      }
    }
  }
])

const textMotion = ref(Motion.scrollBottom)
const imageMotion = ref(Motion.imageScrollBottom)
</script>

<template>
  <div
    class="relative flex items-start justify-center bg-gradient-to-b from-white to-[#d3d3d3] py-10 dark:from-[#333333] dark:to-[#121212] sm:items-center"
  >
    <div
      class="container flex flex-col space-y-10 sm:mb-28 sm:flex-row sm:justify-between sm:space-x-4 sm:space-y-0"
    >
      <div
        v-motion="textMotion"
        class="flex shrink-0 flex-col self-center"
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
          <BaseButton
            v-for="(btn, index) in btnList"
            :key="index"
            v-motion="btn.motion"
            :bg-color="btn.bgColor"
            :text-color="btn.textColor"
            @click="btn.onClick"
          >
            {{ btn.label }}
          </BaseButton>
        </div>
      </div>

      <div
        v-motion="imageMotion"
        class="self-center"
      >
        <NuxtImg
          class="move-bounce-top select-none rounded-lg opacity-90 shadow-sm contrast-125 drop-shadow-lg backdrop-brightness-125 transition-all duration-500 hover:opacity-100"
          src="/home/main.jpg"
          alt=""
          sizes="xs:280px sm:360px md:300px lg:380px xl:480px xxl:550px"
          placeholder
          preload
        />
      </div>
    </div>

    <ArrowDown />
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
  25% {
    transform: translateY(8px);
  }
  50% {
    transform: translateY(0px);
  }
  75% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
