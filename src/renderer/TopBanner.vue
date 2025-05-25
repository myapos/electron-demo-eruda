<template>
  <section class="ad ad-top" id="gtm-ad-slot">
    Top Banner Ad
    <!-- GPT Ad Slot Container -->
    <div :id="adId" style="min-width: 300px; min-height: 250px"></div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import useAd from "./composables/useAd";

declare global {
  interface Window {
    googletag: any;
  }
}

type slotType = {
  getSlotElementId: () => string;
};

const adId = "div-gpt-ad-1748195411567-0";
useAd(adId, "/146900469/dummy_test_ad_unit_2", [300, 250]);
</script>

<style scoped>
.ad-top {
  width: 100%;
}
</style>
