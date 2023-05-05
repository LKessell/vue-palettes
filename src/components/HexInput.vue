<script setup lang="ts">
import { computed } from "vue";
import { validateHex } from "@/utilities";

const props = defineProps<{
  modelValue: string;
}>();
defineEmits(["update:modelValue"]);

const borderHex = computed(() => {
  const isValid = validateHex(props.modelValue);
  const capital = isValid ? props.modelValue.toUpperCase() : "000000";
  const withHex = capital.startsWith("#") ? capital : `#${capital}`;
  return withHex;
});
</script>

<template>
  <!-- Add @blur event listener that emits validateInput? -->
  <input
    class="hex-entry"
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
    placeholder="#000000"
    :style="{ border: `4px solid ${borderHex}` }"
  />
</template>
