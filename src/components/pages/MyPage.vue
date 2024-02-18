<script setup lang="ts">
import { ref } from "vue";
import MyHeader from "@molecules/Header.vue";

const props = defineProps({
  serverTitle: {
    type: String,
    required: true,
  }
});

type User = {
  id: number;
};

const user = ref<User | null>(null);

function login() {
  user.value = { id: 1 };
}

function logout() {
  user.value = null;
}

function signUp() {
  // TODO: 会員登録フォームに移動する
}
</script>

<template>
  <div>
    <MyHeader
      :isLoggedIn="!!user"
      :serverTitle="props.serverTitle"
      @login="login"
      @logout="logout"
      @signUp="signUp"
    />
    <main>
      <div class="content-wrapper">
      </div>
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