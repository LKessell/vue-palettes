<script setup lang="ts">
import { computed, ref, watch } from "vue";
import MainPalette from "./components/MainPalette.vue";
import SavedPalette from "./components/SavedPalette.vue";
import IconFolder from "./components/icons/Folder.vue";

const savedPalettes = ref<
  Array<{
    id: string;
    colors: Array<{ isLocked: boolean; hex: string; id: string }>;
  }>
>(JSON.parse(localStorage.getItem("vpal-saved") ?? "[]"));
const isSavedExpanded = ref(false);
const isSavedVisible = computed(() => {
  if (window.innerWidth > 1023 && !isSavedExpanded.value) {
    return false;
  } else {
    return true;
  }
});

watch(
  savedPalettes,
  (newPalettes) => {
    localStorage.setItem("vpal-saved", JSON.stringify(newPalettes));
  },
  { deep: true }
);

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
    <button
      class="saved-section-toggle"
      :class="{ 'toggle-open': isSavedExpanded }"
      @click="isSavedExpanded = !isSavedExpanded"
      :aria-label="isSavedVisible ? 'Close sidebar' : 'Open sidebar'"
    >
      <IconFolder />
    </button>
    <section
      class="saved-section"
      :class="{ open: isSavedExpanded }"
      :aria-expanded="isSavedVisible"
      :aria-hidden="!isSavedVisible"
    >
      <h2>Saved Palettes</h2>
      <ul>
        <li v-if="!savedPalettes.length">
          You currently have no palettes saved.
        </li>
        <SavedPalette
          v-for="palette in savedPalettes"
          :palette="palette.colors"
          :paletteId="palette.id"
          :tabbable="isSavedVisible"
          :key="'palette' + palette.id"
          @delete-palette="deletePalette"
        />
      </ul>
    </section>
  </main>
</template>

<style scoped>
header {
  line-height: 2;
  text-align: center;
}

h1 {
  border-bottom: 1px solid #262626;
  margin: 2rem 0;
}

.title {
  font-weight: bold;
}

main {
  display: flex;
  justify-content: space-between;
}

.saved-section-toggle {
  background-color: #262626;
  border: none;
  border-radius: 0.5rem 0 0 0.5rem;
  color: #fff;
  cursor: pointer;
  padding: 2rem 1rem;
  position: absolute;
  right: 0;
  transition: right 0.5s ease;
}

svg {
  width: 2rem;
  height: 2rem;
}

h2 {
  font-weight: revert;
  padding-bottom: 1rem;
  white-space: nowrap;
}

ul {
  list-style: none;
  padding: 0;
}

.saved-section {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  height: fit-content;
  padding: 1.5rem;
  text-align: center;
  background-color: #262626;
  border-radius: 0.5rem 0 0 0.5rem;
  min-width: 15rem;
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

@media (max-width: 1024px) {
  .saved-section-toggle {
    display: none;
  }
}

@media (min-width: 1024px) {
  .saved-section {
    position: absolute;
    left: 0;
    margin-left: 100%;
    transition: transform 0.5s ease;
  }

  .open {
    transform: translateX(-100%);
  }

  .toggle-open {
    right: 14.5rem;
  }
}

@media (min-width: 1440px) {
  .toggle-open {
    right: calc(12vw + 3.5rem);
  }
}
</style>
