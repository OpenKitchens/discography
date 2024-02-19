<script setup lang="ts">
import Button from "@atoms/Button.vue";
import ImageButton from "@atoms/ImageButton.vue";

const props = defineProps({
  serverTitle: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <header>
    <img src="/icons/discography.svg" width="180" />
    <p class="serverTitle">{{ props.serverTitle }}</p>

    <div class="QuickActions">
      <ImageButton src="/icons/message.svg" />
      <ImageButton src="/icons/bookmark.svg" />
      <ImageButton src="/icons/search.svg" />
    </div>
    <div class="buttons">
      <Button size="small" label="スレッド投稿" />
    </div>
  </header>
</template>

<style scoped>
header {
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 10px 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url(/images/images.png);
}
.serverTitle {
  font-weight: 900;
  font-size: 18px;
  line-height: 1;
  margin: 6px 0 6px 10px;
  display: inline-block;
  vertical-align: top;
  color: white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.QuickActions {
  margin-left: auto;
  margin-right: 10px;
}

.QuickActions button {
  margin: 5px;
  margin-left: 15px;
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
