<template>
  <div :id="adId" class="ad ad-left"></div>
</template>

<script setup lang="ts">
import useAd from "./composables/useAd";

const adId = "div-gpt-ad-1748820156479-0";
useAd(adId, "/146900469/side-ad", [120, 600]);
</script>

<style scoped>
.ad-left {
  min-width: 120px;
  min-height: 100%;
  flex-shrink: 0;
}
</style>
