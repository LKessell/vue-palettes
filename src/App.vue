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

function deletePalette(id: string) {
  savedPalettes.value = savedPalettes.value.filter(
    (palette) => palette.id !== id
  );
}
</script>

<template>
  <header>
    <h1 class="title">Vue-tiful Palettes</h1>
  </header>

  <main>
    <MainPalette @save-palette="savePalette" />
    <section class="saved-section">
      <h2>Saved Palettes</h2>
      <ul>
        <SavedPalette
          v-for="palette in savedPalettes"
          :palette="palette.colors"
          :paletteId="palette.id"
          :key="'palette' + palette.id"
          @delete-palette="deletePalette"
        />
      </ul>
    </section>
  </main>
</template>

<style scoped>
header {
  line-height: 4;
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
  padding-bottom: 1rem;
}

ul {
  padding: 0;
}

.saved-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  padding: 1.5rem;
  text-align: center;
  background-color: #262626;
  border-radius: 0.5rem 0 0 0.5rem;
}

@media (max-width: 768px) {
  main {
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .saved-section {
    border-radius: 0.5rem 0.5rem 0 0;
    margin-top: 2rem;
    width: 20rem;
    height: 100%;
  }
}
</style>
