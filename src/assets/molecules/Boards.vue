<script setup lang="ts">
import BoardsIcon from "@atoms/BoardsIcon.vue";

interface Board {
  label: string;
  boardID: string;
}

const props = defineProps<{
  serverBoards: Board[];
}>();

const emits = defineEmits(["selectedBoard"]);

const selectedBoard = (boardID: string) => {
  emits("selectedBoard", boardID);
};
</script>

<template>
  <div class="flexbox" v-for="item in props.serverBoards">
    <BoardsIcon
      :boardID="item.boardID"
      :label="item.label"
      @selectedBoard="selectedBoard"
    />
  </div>
</template>

<style scoped>
.flexbox {
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
