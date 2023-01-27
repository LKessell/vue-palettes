<script setup lang="ts">
import { onMounted, ref } from "vue";
import MainSwatch from "./MainSwatch.vue";

interface IColor {
  hex: {
    clean: string;
  };
}

const palette = ref<Array<{ isLocked: boolean; hex: string }>>([]);

async function fetchPalette() {
  const response = await fetch(
    "https://www.thecolorapi.com/scheme?hex=24B1E0&mode=triad&count=5"
  );
  const data = await response.json();

  palette.value = data.colors ? formatPalette(data) : [];
}

function formatPalette(data: { colors: Array<IColor> }) {
  return data.colors.map((color: IColor) => {
    return {
      isLocked: false,
      hex: color.hex.clean,
    };
  });
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
