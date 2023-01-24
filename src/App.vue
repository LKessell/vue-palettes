<script setup lang="ts">
import MainSwatch from "./components/MainSwatch.vue";
</script>

<template>
  <header>
    <h1>Vue Paletttes</h1>
  </header>

  <main>
    <MainSwatch hex="#4c94b7" />
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
