<script setup lang="ts">
defineProps<{
  palette: Array<{ isLocked: boolean; hex: string; id: string }>;
}>();
</script>

<template>
  <div class="saved-wrapper">
    <div class="saved-swatch"></div>
    <button>Delete</button>
  </div>
</template>

<style scoped>
.saved-wrapper {
  display: flex;
}
.saved-swatch {
  background-color: #abed79;
  width: 50px;
  height: 50px;
}
</style>
