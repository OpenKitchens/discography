<script setup lang="ts">
import { ref } from "vue";
import Header from "@molecules/Header.vue";
import Marquee from "@molecules/Marquee.vue";

const props = defineProps({
  serverTitle: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <Header
      :isLoggedIn="!!user"
      :serverTitle="props.serverTitle"
      @login="login"
      @logout="logout"
      @signUp="signUp"
    />
    <Marquee label="【速報】日経平均株価　34年ぶり一時3万8000円台" />
    <main>
      <div class="content-wrapper"></div>
    </main>
  </div>
</template>

<style>
.content-wrapper {
  background-color: #181818;
  padding: 25px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 25px;
  row-gap: 1em;
}
@media screen and (max-width: 720px) {
  .content-wrapper {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media screen and (min-width: 721px) and (max-width: 1024px) {
  .content-wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
