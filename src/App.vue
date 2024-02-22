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

@font-face {
  font-family: "YuGothic-M";
  font-weight: normal;
  src: local("YuGothic-Medium"), local("Yu Gothic Medium"),
    local("YuGothic-Regular");
}

@font-face {
  font-family: "YuGothic-M";
  font-weight: bold;
  src: local("YoGothic-Bold"), local("Yu Gothic");
}

body {
  font-family: -apple-system, blinkMacSystemFont, YuGothic-M, YuGothic,
    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
}
</style>
