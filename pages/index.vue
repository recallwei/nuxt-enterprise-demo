<script setup lang="ts">
import { otherPartners, partners } from '~/constants'

const cardList = [
  { content: '数据配置' },
  { content: '在途管理' },
  { content: '物流管理' }
]
</script>

<template>
  <PTopBanner />

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
