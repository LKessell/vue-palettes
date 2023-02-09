<script setup lang="ts">
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
    <button>Delete</button>
  </div>
</template>

<style scoped>
.saved-wrapper {
  display: flex;
}
.saved-swatch {
  width: 50px;
  height: 50px;
}
</style>
