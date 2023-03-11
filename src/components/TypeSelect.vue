<script setup lang="ts">
defineProps(["mode"]);
defineEmits(["update:mode"]);

const modes = [
  "monochrome",
  "monochrome-dark",
  "monochrome-light",
  "analogic",
  "complement",
  "analogic-complement",
  "triad",
  "quad",
];

function getNameLabel(name: string) {
  const separated = name.split("-");
  const capitalized = separated.map((word: string) => {
    return word[0].toUpperCase() + word.substring(1);
  });
  return capitalized.join(" ");
}
</script>

<template>
  <label for="typeSelect">Palette Type:</label>
  <select
    id="typeSelect"
    :value="mode"
    @change="$emit('update:mode', ($event.target as HTMLSelectElement).value)"
  >
    <option value="random">Random</option>
    <option value="analogic">Analogic</option>
  </select>
</template>

<style scoped></style>
