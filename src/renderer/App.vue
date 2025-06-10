<template>
  <div class="app-container">
    <Section>My Demo App</Section>
    <section class="top-banner">
      <Ad
        v-if="adSlotsConf.topBanner"
        ad-id="div-gpt-ad-1749624797220-0"
        slotPath="/146900469/top-responsive-ad-unit"
        :dimensions="[
          [728, 90],
          [220, 90],
        ]"
        class="ad-top"
        ><template #fallback>Top Fallback Content</template>
      </Ad>
    </section>
    <Main>
      <Ad
        v-if="adSlotsConf.leftAd"
        ad-id="div-gpt-ad-1749593285775-0"
        slotPath="/146900469/responsive-left-ad-unit"
        :dimensions="[
          [60, 600],
          [120, 600],
        ]"
        class="side-ad"
        ><template #fallback>Fallback Content</template>
      </Ad>
      <Content />
      <Ad
        v-if="adSlotsConf.rightAd"
        ad-id="div-gpt-ad-1749593427952-0"
        slotPath="/146900469/responsive-ad-unit"
        :dimensions="[
          [60, 600],
          [120, 600],
        ]"
        class="side-ad"
        ><template #fallback>Fallback Content</template></Ad
      >
    </Main>
    <section class="bottom-banner">
      <!-- <BottomAd v-if="adSlotsConf.bottomBanner">Bottom Banner Ad</BottomAd> -->
      <Ad
        v-if="adSlotsConf.bottomBanner"
        ad-id="div-gpt-ad-1749672458303-0"
        slotPath="/146900469/responsive-bottom-ad-unit"
        :dimensions="[
          [728, 50],
          [320, 50],
        ]"
        class="bottom-ad"
        ><template #fallback>Fallback Content</template></Ad
      >
    </section>
    <Section>Footer content</Section>
  </div>
</template>

<script setup lang="ts">
import Main from "./Main.vue";
import Content from "./Content.vue";
import Section from "./Section.vue";
import Ad from "./Ad.vue";
import "./assets/main.css";

const activateAllAds = true;

const adSlotsConf = {
  rightAd: activateAllAds || false,
  leftAd: activateAllAds || false,
  topBanner: activateAllAds || false,
  bottomBanner: activateAllAds || false,
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.side-ad {
  width: 120px;
  height: 600px;
}

.top-banner,
.bottom-banner {
  display: flex;
  justify-content: center;
}

.ad-top {
  width: 728px;
  min-height: 90px;
  display: flex;
  justify-content: center;
}

bottom-ad {
  background-color: lightblue;
  width: 728px;
  height: 50px;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 0.2rem;
}

@media (max-width: 800px) {
  .side-ad {
    width: 60px;
    height: 600px;
  }

  .ad-top {
    width: 220px;
  }

  .bottom-ad {
    width: 320px;
  }
}
</style>
