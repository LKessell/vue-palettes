<script setup lang="ts">
import { onMounted, ref } from "vue";
import MainSwatch from "./MainSwatch.vue";

interface IColor {
  hex: {
    clean: string;
  };
}

const palette = ref<Array<{ isLocked: boolean; hex: string }>>([]);

async function fetchPalette(hex: string) {
  const response = await fetch(
    `https://www.thecolorapi.com/scheme?hex=${hex}&mode=triad&count=5`
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

function getRandomHex() {
  const letters = "0123456789ABCDEF";
  let color = "";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

onMounted(() => {
  fetchPalette(getRandomHex());
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
