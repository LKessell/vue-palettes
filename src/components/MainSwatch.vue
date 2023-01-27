<script setup lang="ts">
import IconLocked from "./icons/Locked.vue";
import IconUnlocked from "./icons/Unlocked.vue";

defineProps<{
  color: { isLocked: boolean; hex: string };
}>();
</script>

<template>
  <div class="swatch-wrapper">
    <div
      class="swatch"
      v-bind:style="{ backgroundColor: '#' + color.hex }"
    ></div>
    <div class="color-details">
      <p>#{{ color.hex }}</p>
      <IconLocked v-if="color.isLocked" />
      <IconUnlocked v-else />
    </div>
  </div>
</template>

<style scoped>
.swatch-wrapper {
  display: inline-block;
  padding: 2rem 0;
}
.swatch {
  height: 8rem;
  width: 12rem;
}

.color-details {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 0.5rem;
  text-transform: uppercase;
}

svg {
  width: 2rem;
  height: 2rem;
}
</style>
