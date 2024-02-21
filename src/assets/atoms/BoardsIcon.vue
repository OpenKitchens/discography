<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  boardID: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(["selectedBoard"]);

const selectedBoard = () => {
  emits("selectedBoard", props.boardID);
};
</script>

<template>
  <button @click="selectedBoard">
    {{ props.label }}
  </button>
</template>

<style scoped>
button {
  background: none;
  border: none;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0;
  font-size: 30px;
  margin: 10px;
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
