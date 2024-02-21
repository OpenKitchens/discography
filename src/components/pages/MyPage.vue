<script setup lang="ts">
import { ref } from "vue";
import Header from "@molecules/Header.vue";
import Marquee from "@molecules/Marquee.vue";
import Boards from "@molecules/Boards.vue";

interface Board {
  label: string;
  boardID: string;
}

interface Props {
  serverTitle: string;
  marquee: string;
  serverBoards: Board[];
}

const props = defineProps<Props>();

const emits = defineEmits(["clickedMarquee", "selectedBoard"]);

const clickedMarquee = () => {
  emits("clickedMarquee");
};

const selectedBoard = (boardID: string) => {
  emits("selectedBoard", `${boardID}`);
};
</script>

<template>
  <div>
    <Header :serverTitle="props.serverTitle" />
    <Marquee :label="props.marquee" @clickedMarquee="clickedMarquee" />
    <main>
      <Boards
        :selectedBoard="selectedBoard"
        :serverBoards="props.serverBoards"
      ></Boards>
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
