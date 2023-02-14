<script setup lang="ts">
import { ref } from "vue";
import MainPalette from "./components/MainPalette.vue";
import SavedPalette from "./components/SavedPalette.vue";

const savedPalettes = ref<
  Array<{
    id: string;
    colors: Array<{ isLocked: boolean; hex: string; id: string }>;
  }>
>([]);

function savePalette(
  colors: Array<{ isLocked: boolean; hex: string; id: string }>
) {
  savedPalettes.value.push({
    id: "palette-" + Math.random().toString(36).substring(2, 8),
    colors: colors,
  });
}

savedPalettes.value.push({
  id: "Palette1",
  colors: [
    { isLocked: false, hex: "4A6CB5", id: "sfjksjk" },
    { isLocked: false, hex: "6D89C5", id: "sfjkaaaa" },
    { isLocked: false, hex: "91A6D4", id: "sfjdabk" },
    { isLocked: false, hex: "CCCCCC", id: "sfjksbb" },
    { isLocked: false, hex: "E6E6E6", id: "sfjkoba" },
  ],
});
</script>

<template>
  <header>
    <h1 class="title">Vue-tiful Palettes</h1>
  </header>

  <main>
    <MainPalette @save-palette="savePalette" />
    <section class="saved-section">
      <h2>Saved Palettes</h2>
      <SavedPalette
        v-for="palette in savedPalettes"
        :palette="palette.colors"
        :key="'palette' + palette.id"
      />
    </section>
  </main>
</template>

<style scoped>
header {
  line-height: 3;
  text-align: center;
}

.title {
  font-weight: bold;
}

main {
  display: flex;
  justify-content: space-between;
}

h2 {
  padding-bottom: 1vw;
}

.saved-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vw;
  text-align: center;
  background-color: #262626;
  border-radius: 0.5vw 0 0 0.5vw;
}
</style>
