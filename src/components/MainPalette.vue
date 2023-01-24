<script setup lang="ts">
import MainSwatch from "./MainSwatch.vue";
</script>

<template>
  <section class="main-palette">
    <MainSwatch />
  </section>
</template>

<style scoped>
.main-palette {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
