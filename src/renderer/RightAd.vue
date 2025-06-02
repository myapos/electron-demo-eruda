<template>
  <div :id="adId" class="ad ad-right"></div>
</template>

<script setup lang="ts">
import useAd from "./composables/useAd";

const adId = "div-gpt-ad-1748822062979-0";
useAd(adId, "/146900469/right-side-ad", [120, 600]);
</script>

<style scoped>
.ad-left {
  width: 120px;
  flex-shrink: 0;
}

.ad-right {
  min-width: 120px;
  min-height: 100%;
  flex-shrink: 0;
}
</style>
