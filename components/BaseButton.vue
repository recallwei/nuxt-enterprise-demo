<script setup lang="ts">
interface Props {
  bgColor?: string
  textColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  bgColor: '#ffffff',
  textColor: '#000000'
})

const emit = defineEmits(['click'])

const handleClick = () => emit('click')
</script>

<template>
  <div
    class="-mb-0.5 pb-0.5 transition-all hover:-translate-y-0.5 active:-translate-y-0 active:opacity-80"
  >
    <button
      class="rounded-md px-6 py-2 font-medium tracking-wide shadow-md drop-shadow-md"
      :style="{ backgroundColor: props.bgColor, color: props.textColor }"
      @click="handleClick"
    >
      <slot />
    </button>
  </div>
</template>
