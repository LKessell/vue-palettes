<script setup lang="ts">
import { onMounted, ref } from "vue";
import MainSwatch from "./MainSwatch.vue";

interface IColor {
  hex: {
    clean: string;
  };
}

const palette = ref<Array<{ isLocked: boolean; hex: string; id: string }>>([]);

const emit = defineEmits(["savePalette"]);

function handleSave() {
  if (palette.value.length) {
    const newPalette = [...palette.value];
    newPalette.forEach((color) => (color.isLocked = false));

    emit("savePalette", newPalette);
  }
}

async function fetchPalette(hex: string, mode: string) {
  const response = await fetch(
    `https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`
  );
  const data = await response.json();

  return data;
}

function formatColorData(data: { colors: Array<IColor> }) {
  return data.colors.map((color: IColor) => {
    return {
      isLocked: false,
      hex: color.hex.clean,
      id: Math.random().toString(36).substring(2, 8),
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
  fetchPalette(hex, mode).then((data) => {
    if (data.colors) {
      const colors = formatColorData(data);
      updatePalette(colors);
    }
  });
}

function handleRandomizeClick(e: Event) {
  e.preventDefault();
  getRandomizedPalette();
}

function toggleLock(id: string) {
  const index = palette.value.findIndex((color) => color.id === id);
  const color = palette.value[index];

  color.isLocked = !color.isLocked;
}

function updatePalette(
  fetchedColors: Array<{ isLocked: boolean; hex: string; id: string }>
) {
  if (!palette.value.length) {
    palette.value = fetchedColors;
  } else {
    palette.value.forEach((color, index) => {
      if (!color.isLocked) palette.value[index] = fetchedColors[index];
    });
  }
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
        @toggle-lock="toggleLock"
      />
    </div>
    <button class="button" @click="handleRandomizeClick">Randomize</button>
    <button class="button" @click="handleSave">Save Palette</button>
  </section>
</template>

<style scoped>
.button {
  cursor: pointer;
  height: 4rem;
  width: 10rem;
  border: none;
  border-radius: 0.5rem;
  font-size: large;
  font-weight: bold;
  transition: 0.5s;
  margin: 0 0.5vw;
}

.button:hover {
  background-color: var(--color-background);
  color: var(--color-text);
  box-shadow: 0 0 0 2px var(--color-text);
}
.main-palette {
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  justify-content: center;
  width: 100%;
}
.palette-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

@media (max-width: 1024px) {
  .palette-wrapper {
    flex-direction: column;
    padding: 0 25% 2rem 25%;
  }
}

@media (max-width: 768px) {
  .button {
    height: 3.5rem;
    width: 8rem;
    font-size: medium;
  }
  .palette-wrapper {
    padding: 0 12% 2rem 12%;
  }
}
</style>
