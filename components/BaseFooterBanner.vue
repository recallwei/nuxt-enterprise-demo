<script setup lang="ts">
const { footerBannerText, footerBannerButtonText } = useAppConfig()
</script>

<template>
  <div class="relative flex h-48 w-full flex-col items-center justify-center">
    <img
      src="~/assets/img/demo-bg.png"
      alt=""
      class="absolute inset-0 -z-10 h-full w-full object-cover"
    />
    <span class="mt-2 text-lg text-white">{{ footerBannerText }}</span>
    <div
      class="-mb-1 mt-5 pb-1 transition-all hover:-translate-y-1 active:-translate-y-0 active:opacity-80"
    >
      <button
        class="rounded-md bg-white px-3 py-1 font-medium tracking-wide shadow-md drop-shadow-md"
      >
        {{ footerBannerButtonText }}
      </button>
    </div>
  </div>
</template>
