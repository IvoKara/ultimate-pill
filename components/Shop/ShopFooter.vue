<script setup lang="ts">
const companyName = ref('Ultimatepill')
const address = ref('...')
const email = ref('contact@ultimatepill.com')
const telephone = ref('+359 8888 8888')
</script>

<template>
  <!-- eslint-disable vue/singleline-html-element-content-newline -->
  <footer class="bg-dark-gradient text-#F1F1F1">
    <section px-grid-br>
      <nuxt-img
        src="/ultimate-pill-light.svg" alt="Ultimate Pill logo"
        width="192" height="57" sizes="sm:100px md:150px lg:155 xl:160 xxl:170"
        mx-auto pt-22.5 pb-13
      />

      <ul class="footer-section" gap-11>
        <li v-for="item in ['Нашите продукти', 'За нас', 'Акаунт', 'Информация']" :key="item" flex items-center gap-4>
          <span font-bold text-4.5>{{ item }}</span>
          <div i-ri:arrow-drop-down-line w-6 h-6 />
        </li>
      </ul>

      <div class="footer-section" gap-4 mt-20>
        <div flex items-center self-start ml-5 gap-3>
          <div class="-rotate-35deg" i-mdi:email-fast-outline w-7 h-7 />
          <span text-5.2 font-bold>Абонирай се и вземи <br md:hidden> 10% отстъпка</span>
        </div>
        <p mb-4>Няма да пълним пощата ти с ненужни неща.</p>
        <label lt-md="w-98%">
          <div text-black bg-white px-3.5 py-3 rounded-full flex gap-2>
            <input placeholder="Твоят имейл адрес" w-full truncate pl-2.5 bg-transparent focus-visible:outline-none>
            <PillButton shrink-0 bg="#91EF65" border="2 black">Абонирай се</PillButton>
          </div>
        </label>
      </div>

      <div class="footer-section" text="#BFBFBF" gap-6 my-31>
        <p font-700 text="4.5 #F1F1F1">
          Свържи се с нас
        </p>
        <div>
          <p>{{ companyName }} GmbH</p>
          <p>Адрес: {{ address }}</p>
        </div>
        <p>{{ email }}</p>
        <p>{{ telephone }}</p>
        <div w-full>
          <select class="w-full border-(1 #BFBFBF) bg-transparent p-5 font-700 focus:(ring-none border-#BFBFBF)">
            <option selected>🇧🇬 Бъглария</option>
            <option value="US">🇺🇸 United States</option>
            <option value="CA">🇮🇹 Italia</option>
            <option value="FR">🇫🇷 France</option>
            <option value="DE">🇩🇪 Deutschland</option>
          </select>
        </div>
      </div>

      <div flex flex-col gap-10>
        <!-- separate component -->
        <div flex gap-6 justify-evenly items-center>
          <NuxtLink href="#"><div i-ic:baseline-facebook /></NuxtLink>
          <NuxtLink href="#"><div i-ant-design:instagram-filled /></NuxtLink>
          <NuxtLink href="#"><div i-mdi:whatsapp /></NuxtLink>
          <NuxtLink href="#"><div i-mdi:twitter /></NuxtLink>
          <NuxtLink href="#"><div i-entypo-social:youtube-with-circle /></NuxtLink>
          <NuxtLink href="#"><div i-entypo-social:linkedin-with-circle /></NuxtLink>
          <NuxtLink href="#"><div i-ic:baseline-tiktok /></NuxtLink>
        </div>
        <!-- separate component -->
        <ul class="payment-methods" flex gap-6 justify-center items-center>
          <li>
            <nuxt-img alt="Visa logo" src="/payment/visa-logo.jpg" width="39px" height="24px" sizes="md:50px" />
            <span>Visa</span>
          </li>
          <li>
            <nuxt-img alt="Visa logo" src="/payment/mastercard-logo.png" width="38px" height="24px" sizes="md:40px" />
            <span>Mastercard</span>
          </li>
          <li>
            <div px-1 py-0.5 bg-white>
              <nuxt-img alt="Visa logo" src="/payment/paypal-logo.png" width="40px" height="21px" sizes="md:50px" />
            </div>
            <span>PayPal</span>
          </li>
        </ul>
      </div>
    </section>
    <p border="t-1 white" py-3 mt-5 px-grid-br text="#BFBFBF 3.5 center">
      Всички права запазени © {{ new Date().getFullYear() }}, {{ companyName }}
    </p>
  </footer>
</template>

<style scoped>
.bg-dark-gradient {
  background: linear-gradient(139.85deg, #0A0E13 -8.38%, #1F2229 66.25%);
}

.footer-section {
  @apply flex flex-col items-center;
}

ul.payment-methods > li {
  @apply footer-section gap-1;
  color: #F1F1F1;
  font-size: 14px;
  line-height: 19px;
}
</style>
