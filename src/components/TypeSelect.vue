<script setup lang="ts">
defineProps(["mode"]);
defineEmits(["update:mode"]);
</script>

<template>
  <label for="typeSelect">Palette Type:</label>
  <select
    id="typeSelect"
    :value="mode"
    @change="$emit('update:mode', $event.target.value)"
  >
    <option value="random">Random</option>
    <option value="analogic">Analogic</option>
  </select>
</template>

<style scoped></style>
