<script setup lang="ts">
import { ref } from "vue";

const hex = ref("#4c94b7");
</script>

<template>
  <div class="swatch-wrapper">
    <div class="swatch" v-bind:style="{ backgroundColor: hex }"></div>
    <p>{{ hex }}</p>
  </div>
</template>

<style scoped>
.swatch-wrapper {
  display: inline-block;
  padding: 2rem;
}
.swatch {
  height: 100px;
  width: 100px;
  border: 1px solid #000000;
}
</style>
