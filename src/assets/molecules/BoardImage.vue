<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
});

const style = `background-image: url(${props.src});`;
</script>

<template>
  <div :style="style" class="background">
    <p>{{ label }}</p>
  </div>
</template>

<style scoped>
.background {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 250px;
  height: 150px;
  border-radius: 8px;
  border: solid 1px rgba(255, 255, 255, 0.4);
  margin: 10px;
  margin-top: 20px;
}

p {
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin-top: 110px;
  margin-left: 20px;
}
</style>
