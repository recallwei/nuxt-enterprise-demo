<script setup lang="ts">
const style = reactive({ transform: 'rotateX(0deg) rotateY(0deg)' })
const containerRef = ref<HTMLDivElement | null>(null)

function handleMouseMove(e: MouseEvent) {
  if (!containerRef.value) {
    return
  }
  const { clientX, clientY } = e
  const { width, height, x, y } = containerRef.value.getBoundingClientRect()
  const mouseX = Math.abs(clientX - x)
  const mouseY = Math.abs(clientY - y)
  const rotateMin = -15
  const rotateMax = 15
  const rotateRange = rotateMax - rotateMin

  const rotate = {
    x: rotateMax - (mouseY / height) * rotateRange,
    y: rotateMin + (mouseX / width) * rotateRange
  }

  style.transform = `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
}

function handleMouseLeave() {
  style.transform = 'rotateX(0deg) rotateY(0deg)'
}
</script>

<template>
  <div
    ref="containerRef"
    class="z-10 scale-100 cursor-pointer bg-transparent opacity-90 transition-all hover:z-50 hover:scale-125 active:opacity-75"
    style="perspective: 2000px"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div
      :style="style"
      class="h-72 w-60 rounded-sm bg-gradient-to-b from-[#a157e7] to-[#1f54f3] shadow-lg outline outline-1 outline-gray-100 drop-shadow-lg transition-all dark:outline-gray-600"
    >
      <slot />
    </div>
  </div>
</template>
