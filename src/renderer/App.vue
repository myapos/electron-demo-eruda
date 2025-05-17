<template>
  <div>
    Vue component {{ test }}
    <button @click="increment">Click me</button>
    <div>{{ counter }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const test = ref("Loaded");
const counter = ref(0);

const increment = () => {
  counter.value++;
};
</script>
