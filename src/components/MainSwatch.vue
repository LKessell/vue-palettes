<script setup lang="ts">
import IconLocked from "./icons/Locked.vue";
import IconUnlocked from "./icons/Unlocked.vue";

defineProps<{
  color: { isLocked: boolean; hex: string };
}>();
</script>

<template>
  <div class="swatch-wrapper">
    <div class="swatch" v-bind:style="{ backgroundColor: color.hex }"></div>
    <div class="color-details">
      <p>{{ color.hex }}</p>
      <IconLocked v-if="color.isLocked" />
      <IconUnlocked v-else />
    </div>
  </div>
</template>

<style scoped>
.swatch-wrapper {
  display: inline-block;
  padding: 2rem;
}
.swatch {
  height: 100px;
  width: 100px;
  border: 1px solid #000000;
}

.color-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
}

svg {
  width: 2rem;
  height: 2rem;
}
</style>
