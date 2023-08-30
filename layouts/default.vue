<template>
  <div class="relative flex min-h-screen w-full flex-col overflow-y-auto">
    <BaseHeader />
    <div class="flex w-full flex-col">
      <slot />
    </div>
    <BaseFooter />
    <BackToTop />
  </div>
</template>
