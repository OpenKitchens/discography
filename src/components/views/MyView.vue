<script setup lang="ts">
import MyPage from "@pages/MyPage.vue";

const clickedMarquee = () => {
  console.log("clickedMarquee");
};

const selectedBoard = (boardID: string) => {
  console.log(boardID);
};

const serverBoards = [
  { label: "📢", boardID: "989889676438998675" },
  { label: "🎙️", boardID: "675234834752145324" },
  { label: "🚀", boardID: "561387495714301340" },
  { label: "💪", boardID: "786781489325654276" },
  { label: "💡", boardID: "363085239293757348" },
  { label: "☕️", boardID: "132587493260984237" },
  { label: "🗳️", boardID: "435763206823884237" },
  { label: "🍿", boardID: "256095741389567238" },
  { label: "🕹️", boardID: "767450246428725409" },
  { label: "🧑🏻‍💻", boardID: "640423589342586972" },
  { label: "🔌", boardID: "587683245278593296" },
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
