<script setup lang="ts">
import { Motion, otherPartners } from '~/constants'

const textMotion = ref(Motion.scrollBottomVisible)
</script>

<template>
  <div class="w-full shrink-0">
    <div
      class="container relative mx-auto flex flex-col items-center space-y-12 overflow-hidden py-20"
    >
      <span
        v-motion="textMotion"
        class="text-3xl font-medium"
      >
        其他合作方
      </span>

      <div
        class="flex w-full flex-col items-center md:flex-row md:justify-between"
      >
        <div class="mb-16 grow items-center justify-center sm:mb-0 sm:flex">
          <NuxtImg
            class="rounded-lg shadow-lg drop-shadow-lg"
            sizes="sm:90vw md:700px"
            src="/temp/map.png"
            alt=""
          />
        </div>

        <ul
          v-motion="textMotion"
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
