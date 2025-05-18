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
  </main>
</template>

<script setup lang="ts">
import InlineAd from "./InlineAd.vue";
</script>

<style scoped>
.content {
  flex: 1;
  padding: 0 1rem;
  line-height: 1.6;
  font-family: sans-serif;
}
</style>
