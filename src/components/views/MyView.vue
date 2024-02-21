<script setup lang="ts">
import MyPage from "@pages/MyPage.vue";

const clickedMarquee = () => {
  console.log("clickedMarquee");
};

const selectedBoard = (boardID: string) => {
  console.log(boardID);
};

const serverBoards = [
  { label: "🎙️", boardID: "989889676438998675" },
  { label: "🎙️", boardID: "989889676438998675" },
];
</script>

<template>
  <MyPage
    serverTitle="Discography 九号 公式ロビー / 開発部"
    marquee="米軍が報復で空爆 イランの軍事関連施設など 45人死亡か 5時01分.北アイルランド 2年ぶりに自治政府が発足 2月2日 8時38分. EU臨時首脳会議のウクライナに8兆円規模"
    @clickedMarquee="clickedMarquee"
    @selectedBoard="selectedBoard"
    :serverBoards="serverBoards"
  />
</template>
