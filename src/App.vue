<script setup lang="ts">
import MainPalette from "./components/MainPalette.vue";
</script>

<template>
  <header>
    <h1 class="title">Vue Paletttes</h1>
  </header>

  <main>
    <MainPalette />
  </main>
</template>

<style scoped>
header {
  line-height: 2;
  text-align: center;
}

.title {
  font-weight: bold;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
