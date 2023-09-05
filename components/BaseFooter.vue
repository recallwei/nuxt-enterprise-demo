<script setup lang="ts">
import EmailIcon from '~icons/mdi/email'
import HomeIcon from '~icons/mdi/home'
import CompanyIcon from '~icons/mdi/office-building'
import PhoneIcon from '~icons/mdi/phone-dial-outline'

function handleClickEmail() {
  BrowserUtils.openNewWindow('mailto:us@raipiot.com')
}
</script>

<template>
  <footer class="w-full">
    <div class="relative flex h-48 w-full flex-col items-center justify-center">
      <NuxtImg
        class="absolute inset-0 -z-10 h-full w-full object-cover"
        src="/background/demo.png"
        alt=""
      />
      <span class="mt-2 text-lg text-white sm:text-xl">
        期待为您服务，便捷高效的物流管理马上开始
      </span>
      <div
        class="-mb-0.5 mt-5 pb-0.5 transition-all hover:-translate-y-0.5 active:-translate-y-0 active:opacity-80"
      >
        <button
          class="rounded-md bg-white px-3 py-1 font-medium tracking-wide text-black shadow-md drop-shadow-md"
        >
          预约演示
        </button>
      </div>
    </div>

    <div
      class="flex flex-col space-y-8 bg-[#271273] px-4 py-8 text-sm text-white sm:flex-row sm:justify-center sm:space-x-8 sm:space-y-0 sm:px-8"
    >
      <div
        class="mt-2 flex select-none flex-col items-center space-y-2 self-center sm:mb-4 sm:mt-0 sm:pe-6"
      >
        <span class="logo-text text-4xl font-semibold"> raipiot </span>
        <span class="logo-second-text text-xs sm:tracking-tighter">
          Intelligent Manufacturing
        </span>
      </div>

      <div class="space-y-2.5 sm:py-2">
        <div class="flex items-center space-x-2">
          <CompanyIcon class="mt-0.5 inline shrink-0 self-start" />
          <span>苏州睿朴麟信息科技有限公司</span>
        </div>
        <div class="flex items-center space-x-2">
          <HomeIcon class="mt-0.5 inline shrink-0 self-start" />
          <span>苏州市工业园区金鸡湖大道 88 号人工智能产业园 G1-404</span>
        </div>
        <div class="flex items-center space-x-2">
          <PhoneIcon class="mt-0.5 inline shrink-0 self-start" />
          <span>0512 - 66307608</span>
        </div>
        <div class="flex items-center space-x-2">
          <EmailIcon class="mt-0.5 inline shrink-0 self-start" />
          <span
            class="cursor-pointer underline-offset-4 transition-all hover:underline active:opacity-80"
            @click="handleClickEmail"
          >
            us@raipiot.com
          </span>
        </div>
      </div>

      <div class="space-y-2.5 sm:py-2">
        <div class="flex items-center space-x-2">
          <CompanyIcon class="mt-0.5 inline shrink-0 self-start" />
          <span> 睿朴麟信息科技（西安）有限公司 </span>
        </div>
        <div class="flex items-center space-x-2">
          <HomeIcon class="mt-0.5 inline shrink-0 self-start" />
          <span
            >陕西省西安市高新区唐延路 11 号禾盛京广中心 E 座 27 层 2702 室
          </span>
        </div>
      </div>

      <div class="flex flex-col items-center space-y-2 text-center sm:ps-4">
        <img
          class="w-24"
          src="~/assets/img/footer/official-accounts.png"
          alt=""
        />
        <span>公众号二维码</span>
      </div>
    </div>

    <div
      class="flex flex-col items-center justify-center space-y-3 bg-[#261b4e] pb-6 pt-2 text-xs tracking-wider text-white sm:py-4 sm:text-sm"
    >
      <!-- Only PC -->
      <span class="hidden sm:inline">
        Copyright &copy; {{ new Date().getFullYear() }} · raipiot ·
        睿朴麟信息科技有限公司（西安）版权所有
      </span>

      <!-- Only Mobile -->
      <div class="flex flex-col items-center space-y-3 sm:hidden">
        <span>Copyright &copy; {{ new Date().getFullYear() }} · raipiot</span>
        <span>睿朴麟信息科技有限公司（西安）版权所有</span>
      </div>

      <div
        class="flex flex-col items-center space-x-0 space-y-3 text-xs sm:flex-row sm:space-x-10 sm:space-y-0"
      >
        <div
          class="flex cursor-pointer items-center transition-all active:opacity-80"
          @click="
            BrowserUtils.openNewWindow(
              'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=61019002002266'
            )
          "
        >
          <img
            class="me-1.5 inline select-none"
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
