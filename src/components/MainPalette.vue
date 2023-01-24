<script setup lang="ts">
import MainSwatch from "./MainSwatch.vue";
</script>

<template>
  <section class="main-palette">
    <MainSwatch />
    <MainSwatch />
    <MainSwatch />
    <MainSwatch />
    <MainSwatch />
  </section>
</template>

<style scoped>
.main-palette {
  display: flex;
  justify-content: center;
}
</style>
