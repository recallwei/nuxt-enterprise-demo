<script setup lang="ts">
interface Props {
  link?: boolean
}

const { companyName, companySlogan } = useAppConfig()

const props = withDefaults(defineProps<Props>(), {
  link: false
})
</script>

<template>
  <div class="text-primary dark:text-white">
    <template v-if="props.link">
      <NuxtLink
        v-motion-fade-visible
        to="/"
        class="flex select-none flex-col items-center"
      >
        <span
          class="logo-text text-[1.8rem]/[28px] font-bold sm:text-[2.5rem]/[44px]"
        >
          {{ companyName }}
        </span>
        <span class="logo-second-text text-[0.55rem] tracking-tighter">
          {{ companySlogan }}
        </span>
      </NuxtLink>
    </template>

    <template v-else>
      <div class="flex select-none flex-col items-center">
        <span
          class="logo-text text-[1.8rem]/[28px] font-bold sm:text-[2.5rem]/[44px]"
        >
          {{ companyName }}
        </span>
        <span class="logo-second-text text-[0.55rem] tracking-tighter">
          {{ companySlogan }}
        </span>
      </div>
    </template>
  </div>
</template>
