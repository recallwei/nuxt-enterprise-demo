<script setup lang="ts">
interface Props {
  src: string
  width?: string
  height?: string
  title?: string
  description?: string[]
  reverse?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '100%',
  title: '',
  description: () => [],
  reverse: false
})

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
const imageMotion = ref({
  initial: {
    opacity: 0,
    x: -30
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 300,
      type: 'keyframes',
      ease: 'easeIn'
    }
  }
})
const imageReverseMotion = ref({
  initial: {
    opacity: 0,
    x: 30
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 300,
      type: 'keyframes',
      ease: 'easeIn'
    }
  }
})
</script>

<template>
  <div class="flex h-full w-full items-center justify-center">
    <div
      class="container m-auto flex items-center justify-center space-y-8 sm:space-y-0"
      :class="[
        props.reverse ? 'flex-col sm:flex-row-reverse' : 'flex-col sm:flex-row'
      ]"
    >
      <NuxtImg
        v-motion="props.reverse ? imageReverseMotion : imageMotion"
        class="rounded-md shadow-md transition-all hover:shadow-lg dark:shadow-[#999999]"
        :src="props.src"
        :width="props.width"
        alt=""
      />
      <div
        v-motion="textMotion"
        class="flex flex-col space-y-4"
        :class="[props.reverse ? 'me-24' : 'ms-24']"
      >
        <div class="text-4xl font-medium">{{ props.title }}</div>
        <div class="space-y-0.5 text-lg">
          <div
            v-for="(row, index) in props.description"
            :key="index"
          >
            {{ row }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
