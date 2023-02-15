<script setup lang="ts">
import IconTrash from "./icons/Trash.vue";
defineProps<{
  palette: Array<{ isLocked: boolean; hex: string; id: string }>;
}>();
</script>

<template>
  <div class="saved-wrapper">
    <div
      v-for="color in palette"
      class="saved-swatch"
      :key="'swatch' + color.id"
      :style="{ backgroundColor: '#' + color.hex }"
    ></div>
    <button class="delete-button" aria-label="delete">
      <IconTrash />
    </button>
  </div>
</template>

<style scoped>
.saved-wrapper {
  display: flex;
  align-items: center;
  padding: 1vw 0;
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
</style>
