<script setup lang="ts">
import { onMounted, ref } from "vue";
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

async function fetchPalette() {
  const response = await fetch(
    "https://www.thecolorapi.com/scheme?hex=24B1E0&mode=triad&count=5"
  );
  const data = await response.json();
  console.log(data.colors);
}

onMounted(() => {
  fetchPalette();
});
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
