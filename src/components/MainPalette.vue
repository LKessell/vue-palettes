<script setup lang="ts">
import { ref } from "vue";
import MainSwatch from "./MainSwatch.vue";

const palette = ref([
  {
    isLocked: false,
    hex: "4c94b7",
  },
  {
    isLocked: false,
    hex: "BCDE9D",
  },
]);
</script>

<template>
  <section class="main-palette">
    <MainSwatch
      v-for="(color, index) in palette"
      :color="color"
      :key="index + color.hex"
    />
  </section>
</template>

<style scoped>
.main-palette {
  display: flex;
  justify-content: center;
}
</style>
