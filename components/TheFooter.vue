<script setup lang="ts">
const companyName = ref('Ultimatepill')
const address = ref('...')
const email = ref('contact@ultimatepill.com')
const telephone = ref('+359 8888 8888')

const socialIcons = ref<SocialIconLink[]>([
  { icon: 'i-ic:baseline-facebook', to: '#' },
  { icon: 'i-ant-design:instagram-filled', to: '#' },
  { icon: 'i-mdi:whatsapp', to: '#' },
  { icon: 'i-mdi:twitter', to: '#' },
  { icon: 'i-entypo-social:youtube-with-circle', to: '#' },
  { icon: 'i-entypo-social:linkedin-with-circle', to: '#' },
  { icon: 'i-ic:baseline-tiktok', to: '#' },
])
</script>

<template>
  <!-- eslint-disable vue/singleline-html-element-content-newline -->
  <footer class="bg-dark-gradient text-#F1F1F1">
    <section px-grid-br>
      <CompanyLogo
        :light="true" :does-redirect="false"
        width="192" height="57" sizes="sm:100px md:150px lg:155 xl:160 xxl:170"
        mx-auto pt-22.5 pb-13
      />

      <Accordion :items="['Нашите продукти', 'За нас', 'Акаунт', 'Информация']" />

      <div class="footer-section" gap-4 mt-20>
        <div flex items-center self-start ml-5 gap-3>
          <div class="-rotate-35deg" i-mdi:email-fast-outline w-7 h-7 />
          <span text-5.2 font-bold>Абонирай се и вземи <br md:hidden> 10% отстъпка</span>
        </div>
        <p mb-4>Няма да пълним пощата ти с ненужни неща.</p>
        <!-- <label lt-md="w-98%">
          <div text-black bg-white px-3.5 py-3 rounded-full flex gap-2>
            <input placeholder="Твоят имейл адрес" w-full truncate pl-2.5 bg-transparent focus-visible:outline-none>
            <PillButton shrink-0 bg="#91EF65" border="2 black">Абонирай се</PillButton>
          </div>
        </label> -->
        <InputText
          text-black bg-white lt-md="w-98%" px-3.5 py-3
          placeholder="Твоят имейл адрес" :input-style="{ 'padding-left': '0.625rem' }"
        >
          <template #button>
            <PillButton shrink-0 bg="#91EF65" border="2 black">Абонирай се</PillButton>
          </template>
        </InputText>
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

        <SelectOpion w-full />
      </div>

      <div flex flex-col gap-10>
        <FooterSocialIcons :items="socialIcons" />
        <PaymentMethods />
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
</style>
