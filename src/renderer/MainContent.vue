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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin,
      nunc in facilisis commodo, nisi erat aliquet enim, nec facilisis enim odio
      nec nisi. Curabitur non libero at erat sollicitudin tincidunt. Aenean in
      ligula at enim facilisis commodo. Suspendisse potenti. Morbi in libero nec
      enim facilisis tincidunt.
    </p>

    <!-- Inline Ad -->
    <InlineAd />
    <TopBanner />

    <h2>Section 2</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin,
      nunc in facilisis commodo, nisi erat aliquet enim, nec facilisis enim odio
      nec nisi. Curabitur non libero at erat sollicitudin tincidunt. Aenean in
      ligula at enim facilisis commodo. Suspendisse potenti. Morbi in libero nec
      enim facilisis tincidunt.
    </p>

    <h3>Subsection</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin,
      nunc in facilisis commodo, nisi erat aliquet enim, nec facilisis enim odio
      nec nisi. Curabitur non libero at erat sollicitudin tincidunt. Aenean in
      ligula at enim facilisis commodo. Suspendisse potenti. Morbi in libero nec
      enim facilisis tincidunt.
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin,
      nunc in facilisis commodo, nisi erat aliquet enim, nec facilisis enim odio
      nec nisi. Curabitur non libero at erat sollicitudin tincidunt. Aenean in
      ligula at enim facilisis commodo. Suspendisse potenti. Morbi in libero nec
      enim facilisis tincidunt.
    </p>
  </main>
</template>

<script setup lang="ts">
import InlineAd from "./InlineAd.vue";
import TopBanner from "./TopBanner.vue";
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
