<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  placeholder: {
    type: String,
  },
});

const emits = defineEmits(["input"]);

const message = ref("");

const Enter = () => {
  emits("input", message.value);
  message.value = "";
};
</script>

<template>
  <input
    v-model="message"
    :placeholder="props.placeholder"
    v-on:keydown.enter="Enter"
  />
</template>

<style scoped>
input {
  color: white;
  background-color: rgba(0, 0, 0, 0.85);
  height: 25px;
  margin: 10px;
}
</style>
