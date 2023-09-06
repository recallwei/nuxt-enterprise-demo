<script setup lang="ts">
const cardList = [
  { content: '数据配置' },
  { content: '在途管理' },
  { content: '物流管理' }
]
</script>

<template>
  <div class="w-full shrink-0">
    <div
      class="container relative mx-auto flex h-full w-full items-center justify-between overflow-hidden"
    >
      <div
        v-for="(card, index) in cardList"
        :key="index"
        v-motion-roll-visible-bottom
      >
        <GradientCard>
          {{ card.content }}
        </GradientCard>
      </div>
    </div>
  </div>
</template>
