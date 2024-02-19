<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(["click"]);
</script>

<template>
  <div class="text-marquee__container">
    <div class="text-marquee__text">
      <button @click="emits('click')">
        {{ props.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.text-marquee__container {
  overflow: hidden;
  background-color: black;
  border-top: solid 1px #2e2e2e;
  border-bottom: solid 1px #2e2e2e;
}
.text-marquee__text {
  transform: translateX(100%);
  animation: marquee 15s linear infinite;
  padding-top: 5px;
  padding-bottom: 5px;
}
@keyframes marquee {
  0% {
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  100% {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

button {
  background: none;
  color: white;
  font-size: 15px;
  font-weight: bold;
  border: none;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0;
  margin: 0;
}
</style>
