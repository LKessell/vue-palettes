<script setup lang="ts">
import IconTrash from "./icons/Trash.vue";
import { usePaletteStore } from "@/stores/palette";

const props = defineProps<{
  palette: Array<{ isLocked: boolean; hex: string; id: string }>;
  paletteId: string;
  tabbable: boolean;
}>();

const emit = defineEmits(["deletePalette"]);

const mainPalette = usePaletteStore();

function handleDelete(event: Event) {
  const button = event.currentTarget as HTMLButtonElement;
  const id = button?.id.slice(3);
  emit("deletePalette", id);
}

function handleEnlarge() {
  mainPalette.updatePalette(props.palette);

  const firstToggle = document.querySelector(
    ".lock-toggle"
  ) as HTMLButtonElement;
  firstToggle.focus();
}
</script>

<template>
  <li class="saved-wrapper">
    <button
      aria-label="View in main"
      class="swatches-wrapper"
      @click="handleEnlarge"
    >
      <div
        v-for="color in palette"
        class="saved-swatch"
        :key="'swatch' + color.id"
        :style="{ backgroundColor: '#' + color.hex }"
      ></div>
    </button>
    <button
      :id="'dl-' + paletteId"
      class="delete-button"
      aria-label="delete"
      @click="handleDelete"
      :tabindex="tabbable ? '0' : '-1'"
    >
      <IconTrash />
    </button>
  </li>
</template>

<style scoped>
.saved-wrapper {
  display: flex;
  align-items: center;
  padding: 1vw 0;
}

.swatches-wrapper {
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
}
.saved-swatch {
  width: 2vw;
  height: 2vw;
}

.delete-button {
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
  margin-left: 1rem;
}

svg {
  width: 2vw;
  height: 2vw;
}

@media (max-width: 1024px) {
  .saved-swatch {
    width: 2.5vw;
    height: 2.5vw;
  }

  svg {
    width: 2.5vw;
    height: 2.5vw;
  }
}

@media (max-width: 768px) {
  .saved-swatch {
    width: 2rem;
    height: 2rem;
  }

  svg {
    width: 2rem;
    height: 2rem;
  }
}
</style>
