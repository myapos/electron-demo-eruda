<template>
  <main class="content">
    <h1>Main Content</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
      tincidunt augue. Suspendisse potenti. Proin vel ligula nec arcu
      scelerisque ultrices.
    </p>

    <h2>Section 1</h2>
    <p>
      Cras accumsan, ligula nec tincidunt pharetra, justo velit dapibus nulla,
      at volutpat sapien nisi a justo. Sed dignissim justo ut mi dignissim,
      vitae cursus orci accumsan.
    </p>

    <!-- Inline Ad -->
    <InlineAd />

    <h2>Section 2</h2>
    <p>
      Vivamus et malesuada massa. Vestibulum ante ipsum primis in faucibus orci
      luctus et ultrices posuere cubilia curae; Nullam imperdiet dui vel nulla
      facilisis, a tincidunt neque ultrices.
    </p>

    <h3>Subsection</h3>
    <p>
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Quisque ut dolor sed libero tristique iaculis eget sit
      amet mauris.
    </p>

    <p>
      More content below the ad... Nunc ac porttitor est. In rhoncus blandit
      nisl.
    </p>

    <div @click="viewMoreWithBug" class="view-more">View More</div>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import InlineAd from "./InlineAd.vue";

onMounted(() => {
  // This is where you can add any JavaScript code that needs to run when the component is mounted
  // console.log("MainContent component mounted");
  // fetch("https://invalid.url/api/data")
  //   .then((res) => res.json())
  //   .catch((err) => console.error("Fetch failed:", err));
});

const viewMoreWithBug = () => {
  // This function can be used to handle the "View More" button click
  console.log("View More clicked");
  let obj;
  console.log(obj.prop); // TypeError: Cannot read property 'prop' of undefined
};
</script>

<style scoped>
.content {
  flex: 1;
  padding: 0 1rem;
  line-height: 1.6;
  font-family: sans-serif;
}
.view-more {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.5rem 1.25rem;
  background-color: #0078d4;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
  user-select: none;
}
.view-more:hover {
  background-color: #005fa3;
}
</style>
