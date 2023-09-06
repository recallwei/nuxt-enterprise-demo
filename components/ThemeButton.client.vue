<script setup lang="ts">
import MoonIcon from '~icons/line-md/sunny-filled-loop-to-moon-filled-loop-transition'
import SunIcon from '~icons/line-md/sunny-outline-loop'

const themeMode = ref(ThemeUtils.getDefaultThemeMode())

function changeThemeMode() {
  themeMode.value = themeMode.value === 'light' ? 'dark' : 'light'
  ThemeUtils.changeThemeMode(themeMode.value)
}

onMounted(() => ThemeUtils.changeThemeMode(themeMode.value))
</script>

<template>
  <div
    class="flex cursor-pointer items-center justify-center"
    @click="changeThemeMode"
  >
    <component
      :is="themeMode === 'light' ? SunIcon : MoonIcon"
      class="h-6 w-6 text-yellow-400 dark:text-yellow-300"
    />
  </div>
</template>
