<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: "primary",
    validator: (value: string) => {
      return ["primary", "blue", "dark"].includes(value);
    },
  },
  size: {
    type: String,
    default: "medium",
    validator: (value: string) => {
      return ["small", "medium", "large"].includes(value);
    },
  },
});

const emits = defineEmits(["click"]);
</script>

<template>
  <button @click="emits('click')" :class="[props.variant, props.size]">
    {{ props.label }}
  </button>
</template>

<style scoped>
button {
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  padding: 1rem 2rem;
}
button.primary {
  color: black;
  background-color: rgba(255, 255, 255, 0.85);
}
button.blue {
  color: white;
  background-color: rgba(30, 167, 253, 0.85);
}

button.dark {
  color: white;
  background-color: rgba(0, 0, 0, 0.85);
}

button.large {
  font-size: 1.25rem;
  padding: 1.25rem 1.5rem;
}

button.medium {
  font-size: 1rem;
  padding: 1rem 1.25rem;
}

button.small {
  font-size: 0.875rem;
  padding: 0.75rem 2rem;
}
</style>