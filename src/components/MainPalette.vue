<script setup lang="ts">
import { onMounted, ref } from "vue";
import MainSwatch from "./MainSwatch.vue";
import HexInput from "./HexInput.vue";
import TypeSelect from "./TypeSelect.vue";
import { usePaletteStore } from "@/stores/palette";
import { validateHex } from "@/utilities";

interface IColor {
  hex: {
    clean: string;
  };
}

const palette = usePaletteStore();
const paletteMode = ref("random");
const hexInput = ref("");

const emit = defineEmits(["savePalette"]);

function handleSave() {
  if (palette.colors.length) {
    const newPalette = [...palette.colors];
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

function getNewPalette() {
  const hex = validateHex(hexInput.value.substring(1))
    ? hexInput.value.substring(1)
    : getRandomHex();
  const mode =
    paletteMode.value === "random" ? getRandomMode() : paletteMode.value;

  fetchPalette(hex, mode).then((data) => {
    if (data.colors) {
      const colors = formatColorData(data);
      palette.updatePalette(colors);
    }
  });
}

function handleGenerateClick(e: Event) {
  e.preventDefault();
  getNewPalette();
}

// Should be a store action?
function toggleLock(id: string) {
  const index = palette.colors.findIndex((color) => color.id === id);
  const color = palette.colors[index];

  color.isLocked = !color.isLocked;
}

function validateInput(input: string) {
  if (!validateHex(hexInput.value)) {
    hexInput.value = "";
  } else {
    const withHex = input.startsWith("#") ? input : `#${input}`;
    hexInput.value = withHex.toUpperCase();
  }
}

onMounted(() => {
  getNewPalette();
});
</script>

<template>
  <section class="main-palette">
    <div class="palette-wrapper">
      <MainSwatch
        v-for="(color, index) in palette.colors"
        :color="color"
        :key="index + color.hex"
        @toggle-lock="toggleLock"
      />
    </div>
    <HexInput v-model="hexInput" @change-focus="validateInput" />
    <TypeSelect v-model:mode="paletteMode" />
    <button class="button" @click="handleGenerateClick">Generate</button>
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
