<script setup lang="ts">
import IconLocked from "./icons/Locked.vue";
import IconUnlocked from "./icons/Unlocked.vue";

defineProps<{
  color: { isLocked: boolean; hex: string; id: string };
}>();

const emit = defineEmits(["toggleLock"]);

const handleToggle = (event: Event) => {
  const button = event.currentTarget as HTMLButtonElement;
  emit("toggleLock", button?.id);
};
</script>

<template>
  <div class="swatch-wrapper">
    <div
      class="swatch"
      v-bind:style="{ backgroundColor: '#' + color.hex }"
    ></div>
    <div class="color-details">
      <p>#{{ color.hex }}</p>
      <button class="lock-toggle" v-bind:id="color.id" @click="handleToggle">
        <IconLocked v-if="color.isLocked" />
        <IconUnlocked v-else />
      </button>
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
  padding: 0.5rem 0 0 0;
  text-transform: uppercase;
}

svg {
  width: 2rem;
  height: 2rem;
}

.lock-toggle {
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
}

@media (max-width: 1024px) {
  .swatch-wrapper {
    display: flex;
    padding: 0;
    justify-content: space-between;
  }

  .swatch {
    height: 7rem;
  }

  .color-details {
    padding: 0 0 0 0.5rem;
  }
}
</style>
