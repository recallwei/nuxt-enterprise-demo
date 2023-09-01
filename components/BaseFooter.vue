<script setup lang="ts">
const { companyText } = useAppConfig()
</script>

<template>
  <footer class="w-full">
    <div class="h-20 bg-[#271273]"></div>
    <div
      class="flex flex-col items-center justify-center space-y-3 bg-[#261b4e] py-4 text-sm tracking-wider text-white"
    >
      <span>
        Copyright &copy; {{ new Date().getFullYear() }} · raipiot ·
        {{ companyText }} 版权所有
      </span>
      <div class="flex items-center space-x-10 text-xs">
        <div
          class="flex cursor-pointer items-center transition-all active:opacity-80"
          @click="
            BrowserUtils.openNewWindow(
              'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=61019002002266'
            )
          "
        >
          <img
            class="me-1.5 inline"
            src="~/assets/img/footer/police.png"
            alt=""
          />
          <span class="underline-offset-4 hover:underline"
            >陕公网安备 61019002002266号
          </span>
        </div>
        <span
          class="cursor-pointer underline-offset-4 transition-all hover:underline active:opacity-80"
          @click="
            BrowserUtils.openNewWindow(
              'https://beian.miit.gov.cn/#/Integrated/index'
            )
          "
        >
          陕ICP备2022012948号
        </span>
      </div>
    </div>
  </footer>
</template>
