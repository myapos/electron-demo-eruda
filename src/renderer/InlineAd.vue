<template>
  <div class="ad-inline">Inline ad</div>
  <!-- <div :id="adId" class="ad ad-inline"></div> -->
</template>

<script setup lang="ts">
import useAd from "./composables/useAd";

const adId = "div-gpt-ad-1748847390416-0";
useAd(adId, "/146900469/Inline-ad", [970, 90]);
</script>

<style scoped>
.ad-inline {
  margin: 2rem 0;
  width: 100%;
  min-height: 20px;
  width: 100%;
  background: red;
}
</style>
