<script setup lang="ts">
import MainPalette from "./components/MainPalette.vue";
</script>

<template>
  <header>
    <h1>Vue Paletttes</h1>
  </header>

  <main>
    <MainPalette />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  text-align: center;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
