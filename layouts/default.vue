<template>
  <div class="global_hide-scrollbar relative flex min-h-screen w-full flex-col">
    <BaseHeader />
    <div class="flex w-full flex-col">
      <slot />
    </div>
    <BaseDemoBanner />
    <BaseFooter />
    <BackToTop />
  </div>
</template>
