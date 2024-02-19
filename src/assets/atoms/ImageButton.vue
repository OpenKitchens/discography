<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
  },
});

const emits = defineEmits(["click"]);
</script>

<template>
  <button @click="emits('click')">
    <img :src="props.src" />
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
  margin: 0;
}
</style>
