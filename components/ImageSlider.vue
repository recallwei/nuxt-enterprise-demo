<script setup lang="ts">
import type { ImageItem } from '~/types'

interface Props {
  data: ImageItem[]
  reverse: boolean
}

const props = withDefaults(defineProps<Props>(), {
  data: () => [],
  reverse: false
})

const animationPaused = ref(false)
const currentHoverItem = ref(-1)

const handleClickImageItem = (url?: string) => {
  if (!url) {
    return
  }
  BrowserUtils.openNewWindow(url)
}

const stopAnimation = (index: number) => {
  animationPaused.value = true
  currentHoverItem.value = index
}

const resumeAnimation = () => {
  animationPaused.value = false
  currentHoverItem.value = -1
}
</script>

<template>
  <div class="overflow-hidden drop-shadow-lg">
    <div
      class="image-slider flex items-center space-x-8"
      :class="[props.reverse ? 'image-slider-reverse' : 'image-slider']"
      :style="{
        '--image-count': props.data.length - 1,
        animationPlayState: animationPaused ? 'paused' : 'running'
      }"
    >
      <img
        v-for="(image, index) in props.data.concat(props.data)"
        :key="index"
        class="image-item rounded-sm bg-white p-1.5 shadow-lg drop-shadow-sm"
        :class="[image.url && 'cursor-pointer', animationPaused]"
        :src="image.src"
        :alt="image.label"
        :style="{
          height: '100px'
        }"
        @click="handleClickImageItem(image.url)"
        @mouseenter="stopAnimation(index)"
        @mouseleave="resumeAnimation"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.image-slider {
  animation: scroll 30s linear infinite;
}
.image-slider-reverse {
  animation: scroll 30s linear infinite reverse;
}

@keyframes scroll {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(calc(-200px * var(--image-count)), 0, 0);
  }
}

.image-slide-enter-active,
.image-slide-leave-active {
  transition: transform 0.5s ease;
}

.image-slide-enter,
.image-slide-leave-to {
  transform: translateX(-100%);
}
</style>
