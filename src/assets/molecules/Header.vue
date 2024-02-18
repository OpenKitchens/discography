<script setup lang="ts">
import Button from "@atoms/Button.vue";

const props = defineProps({
  serverTitle: {
    type: String,
    required: true,
  }
});

const emits = defineEmits(["login", "signUp", "logout"]);
</script>

<template>
  <header>
    <img src="/icons/discography.svg">
    <p class="serverTitle">{{ props.serverTitle }}</p>
    <div class="buttons">
      <Button size="small" label="スレッド投稿" @click="$emit('logout')" />
    </div>
  </header>
</template>

<style scoped>
header {
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 15px 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url(/images/images.png);
}
.serverTitle {
  font-weight: 900;
  font-size: 20px;
  line-height: 1;
  margin: 6px 0 6px 10px;
  display: inline-block;
  vertical-align: top;
  color: white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
button + button {
  margin-left: 10px;
}
@media screen and (max-width: 720px) {
  .buttons {
    display: none;
  }
}
</style>