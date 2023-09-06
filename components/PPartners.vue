<script setup lang="ts">
import { Motion, partners } from '~/constants'

const textMotion = ref(Motion.scrollBottomVisible)
</script>

<template>
  <div class="w-full shrink-0">
    <div
      class="container relative mx-auto flex flex-col items-center space-y-8 overflow-hidden py-12"
    >
      <span
        v-motion="textMotion"
        class="text-3xl font-medium"
      >
        合作厂商
      </span>

      <div class="flex flex-col space-y-8">
        <ImageSlider
          v-motion="textMotion"
          :data="partners"
        />
        <ImageSlider
          v-motion="textMotion"
          :data="partners"
          reverse
        />
        <ImageSlider
          v-motion="textMotion"
          :data="partners"
        />
      </div>
    </div>
  </div>
</template>
