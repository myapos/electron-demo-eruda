<template>
  <div :id="props.adId" class="ad">
    <slot name="fallback" v-if="showFallback"> </slot>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useAd from "./composables/useAd";

const props = defineProps<{
  adId: string;
  slotPath: string;
  dimensions: [number, number][] | [number, number];
}>();

const showFallback = ref(false);

const handleFallback = () => {
  showFallback.value = true;
};

useAd(props.adId, props.slotPath, props.dimensions, handleFallback);
</script>
