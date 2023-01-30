<script setup lang="ts">
import { onMounted, ref } from "vue";
import MainSwatch from "./MainSwatch.vue";

interface IColor {
  hex: {
    clean: string;
  };
}

const palette = ref<Array<{ isLocked: boolean; hex: string }>>([]);

async function fetchPalette(hex: string, mode: string) {
  const response = await fetch(
    `https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`
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

function getRandomMode() {
  const modes = [
    "monochrome",
    "monochrome-dark",
    "monochrome-light",
    "analogic",
    "complement",
    "analogic-complement",
    "triad",
    "quad",
  ];

  return modes[Math.floor(Math.random() * 8)];
}

function getRandomizedPalette() {
  const hex = getRandomHex();
  const mode = getRandomMode();
  fetchPalette(hex, mode);
}

function handleRandomizeClick(e: Event) {
  e.preventDefault();
  getRandomizedPalette();
}

onMounted(() => {
  getRandomizedPalette();
});
</script>

<template>
  <section class="main-palette">
    <div class="palette-wrapper">
      <MainSwatch
        v-for="(color, index) in palette"
        :color="color"
        :key="index + color.hex"
      />
    </div>
    <button @click="handleRandomizeClick">Randomize</button>
  </section>
</template>

<style scoped>
.main-palette {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.palette-wrapper {
  display: flex;
  justify-content: center;
}
</style>
