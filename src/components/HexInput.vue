<script setup lang="ts">
import { computed } from "vue";
import { validateHex } from "@/utilities";

const props = defineProps<{
  modelValue: string;
}>();
defineEmits(["update:modelValue", "changeFocus"]);

const borderHex = computed(() => {
  const isValid = validateHex(props.modelValue);
  const capital = isValid ? props.modelValue.toUpperCase() : "000000";
  const withHex = capital.startsWith("#") ? capital : `#${capital}`;
  return withHex;
});
</script>

<template>
  <div>
    <label for="hexInput">Seed color:</label>
    <input
      id="hexInput"
      class="hex-entry"
      :value="modelValue"
      @blur="$emit('changeFocus', borderHex)"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      placeholder="#000000"
      :style="{ border: `4px solid ${borderHex}` }"
    />
  </div>
</template>

<style scoped>
.hex-entry {
  background-color: rgb(233, 233, 237);
  border-radius: 2rem;
  font-weight: bold;
  height: 2.5rem;
  margin-bottom: 2rem;
  margin-left: 1rem;
  text-align: center;
  transition: border 0.5s;
}
</style>
