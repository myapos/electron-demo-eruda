<template>
  <div class="app-container">
    <Header>My App</Header>
    <TopBanner />
    <Main>
      <LeftAd />
      <MainContent />
      <RightAd />
    </Main>
    <BottomBanner />
    <Footer>Footer content</Footer>
  </div>
</template>

<script setup lang="ts">
import Header from "./Header.vue";
import TopBanner from "./TopBanner.vue";
import Main from "./Main.vue";
import BottomBanner from "./BottomBanner.vue";
import Footer from "./Footer.vue";
import MainContent from "./MainContent.vue";
import LeftAd from "./LeftAd.vue";
import RightAd from "./RightAd.vue";
import "./assets/main.css";
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
