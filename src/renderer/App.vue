<template>
  <div class="app-container">
    <Section>My Demo App</Section>
    <TopAd v-if="adSlotsConf.topBanner">Top Banner Ad</TopAd>
    <Main>
      <SideAd
        v-if="adSlotsConf.leftAd"
        ad-id="div-gpt-ad-1748820156479-0"
        slotPath="/146900469/side-ad"
        :dimensions="[120, 600]"
        >Left Banner Ad</SideAd
      >
      <Content :show-inline-ad="adSlotsConf.inlineAd" />
      <SideAd
        v-if="adSlotsConf.rightAd"
        ad-id="div-gpt-ad-1748822062979-0"
        slotPath="/146900469/right-side-ad"
        :dimensions="[120, 600]"
        >Right Banner Ad</SideAd
      >
    </Main>
    <BottomAd v-if="adSlotsConf.bottomBanner">Bottom Banner Ad</BottomAd>
    <Section>Footer content</Section>
  </div>
</template>

<script setup lang="ts">
import Main from "./Main.vue";
import BottomAd from "./BottomAd.vue";
import TopAd from "./TopAd.vue";
import Content from "./Content.vue";
import Section from "./Section.vue";
import SideAd from "./SideAd.vue";
import "./assets/main.css";

const activateAllAds = true;

const adSlotsConf = {
  rightAd: activateAllAds || false,
  leftAd: activateAllAds || false,
  topBanner: activateAllAds || false,
  bottomBanner: activateAllAds || false,
  inlineAd: activateAllAds || false,
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
