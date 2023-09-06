<script setup lang="ts">
interface Props {
  bgColor?: string
  textColor?: string
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  bgColor: '#ffffff',
  textColor: '#000000',
  size: 'md'
})

const emit = defineEmits(['click'])

const handleClick = () => emit('click')
</script>

<template>
  <div>
    <button
      class="flex rounded-md font-medium tracking-wide shadow-md drop-shadow-md transition-all hover:-translate-y-0.5 active:-translate-y-0 active:opacity-80"
      :style="{ backgroundColor: props.bgColor, color: props.textColor }"
      :class="[
        props.size === 'sm' && 'px-4 py-1.5 text-sm',
        props.size === 'md' && 'px-6 py-2 text-base',
        props.size === 'lg' && 'px-7 py-2 text-lg'
      ]"
      @click="handleClick"
    >
      <slot />
    </button>
  </div>
</template>
