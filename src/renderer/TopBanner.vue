<template>
  <section class="ad ad-top" id="gtm-ad-slot">
    <!-- GPT Ad Slot Container -->
    <div :id="adId" class="top-ad"></div>
  </section>
</template>

<script setup lang="ts">
import useAd from "./composables/useAd";

declare global {
  interface Window {
    googletag: any;
  }
}

const adId = "div-gpt-ad-1748195411567-0";
useAd(adId, "/146900469/dummy_test_ad_unit_2", [300, 250]);
</script>

<style scoped>
.ad-top {
  width: 100%;
}

.top-ad {
  min-width: 300px;
  min-height: 250px;
}
</style>
