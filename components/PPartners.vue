<script setup lang="ts">
import { partners } from '~/constants'

const textMotion = ref({
  initial: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 250,
      damping: 50,
      mass: 1
    }
  }
})
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
