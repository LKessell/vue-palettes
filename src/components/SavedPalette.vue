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
}
.saved-swatch {
  width: 3vw;
  height: 3vw;
  transform: skewX(20deg) scaleY(cos(20deg));
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
  width: 2.5rem;
  height: 2.5rem;
}
</style>
