<template>
  <div :id="props.adId" class="ad side-ad">
    <slot />
  </div>
</template>

<script setup lang="ts">
import useAd from "./composables/useAd";

const props = defineProps<{
  adId: string;
  slotPath: string;
  dimensions: [number, number][] | [number, number];
}>();

useAd(props.adId, props.slotPath, props.dimensions);
</script>

<style scoped>
.side-ad {
  background-color: yellow;
  width: 120px;
  height: 600px;
}

@media (max-width: 800px) {
  .side-ad {
    width: 60px;
    height: 500px;
  }
}
</style>
