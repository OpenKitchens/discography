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
  emits("selectedBoard", `${boardID}`);
};
</script>

<template>
  <li v-for="item in props.serverBoards">
    {{ item.label }}
    <BoardsIcon
      :boardID="item.boardID"
      :label="item.label"
      @selectedBoard="selectedBoard"
    />
  </li>
</template>

<style scoped></style>
