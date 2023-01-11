<template>
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
</template>

<style scoped>
ul.payment-methods > li {
  @apply flex flex-col items-center gap-1;
  color: #F1F1F1;
  font-size: 14px;
  line-height: 19px;
}
</style>
