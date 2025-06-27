<template>
  <section class="container">
    <section class="content">
      <h1>Main Content</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
        tincidunt augue. Suspendisse potenti. Proin vel ligula nec arcu
        scelerisque ultrices.
      </p>

      <h4>Section 1</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        sollicitudin, nunc in facilisis commodo, nisi erat aliquet enim, nec
        facilisis enim odio nec nisi. Curabitur non libero at erat sollicitudin
        tincidunt. Aenean in ligula at enim facilisis commodo. Suspendisse
        potenti. Morbi in libero nec enim facilisis tincidunt.
      </p>

      <button class="view-more" @click="toggleMoreContent">
        {{ showMoreText }}
      </button>
    </section>
    <MoreContent :class="{ 'more-content': !showMore }" />
    <slot name="in-content-ads" />
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import MoreContent from "./MoreContent.vue";

const showMore = ref(false);

const toggleMoreContent = () => {
  showMore.value = !showMore.value;
};

const showMoreText = computed(() => {
  if (showMore.value) {
    return "View Less...";
  }
  return "View More...";
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content {
  display: flex;
  flex-direction: column;
  line-height: 1.6;
  font-family: sans-serif;
}

.view-more {
  display: none;
}

.more-content {
  display: block;
}

@media (max-width: 800px) {
  .view-more {
    margin-top: 10px;
    padding: 5px;
    font-size: 0.8rem;
    display: block;
    background: none;
    border: none;
    color: rgb(46, 35, 35);
    width: 100px;
  }

  .view-more:hover {
    color: rgb(145, 118, 118);
    cursor: pointer;
  }

  .more-content {
    display: none;
  }
}
</style>
