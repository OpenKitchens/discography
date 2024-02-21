<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
body {
  background-color: #181818;
  margin: 0;
}

@media (max-width: 767px) {
  .smartphone-none {
    display: none !important;
  }
}

@media (max-width: 1020px) and (min-width: 768px) {
  .tablet-none {
    display: none;
  }
}

@media (min-width: 1020px) {
}
</style>
