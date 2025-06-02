<template>
  <section class="ad" id="gtm-ad-slot">
    <div :id="adId" class="ad-top"><slot /></div>
  </section>
</template>

<script setup lang="ts">
import useAd from "./composables/useAd";

const adId = "div-gpt-ad-1748195411567-0";
useAd(adId, "/146900469/dummy_test_ad_unit_2", [300, 250]);
</script>

<style scoped>
.ad-top {
  width: 100%;
  min-height: 20px;
}
</style>
