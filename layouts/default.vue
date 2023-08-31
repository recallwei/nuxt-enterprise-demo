<template>
  <div class="global_hide-scrollbar relative flex min-h-screen w-full flex-col">
    <BaseHeader />
    <div class="flex w-full flex-col">
      <slot />
    </div>
    <BaseFooter />
    <BackToTop />
  </div>
</template>
