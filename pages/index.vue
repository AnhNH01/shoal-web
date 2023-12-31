<template>
  <div class="flex border-collapse h-screen w-full p-5">
    <ConversationList :list-conversation="mockConvoList" />
    <Conversation/>
  </div>
</template>

<script setup lang="ts">
import Conversation from "~/components/Conversation.vue";
import ConversationList from "~/components/ConversationList.vue";

const mockConvoList = reactive([
  {
    avatarUrl: "https://avatars.githubusercontent.com/u/739984?v=4",
    conversationName: "Convo1",
    conversationId: 1,
  },
  {
    avatarUrl: "https://avatars.githubusercontent.com/u/739984?v=4",
    conversationName: "Convo2",
    conversationId: 2,
  },
  {
    avatarUrl: "https://avatars.githubusercontent.com/u/739984?v=4",
    conversationName: "Convo3",
    conversationId: 3,
  },
]);
</script>

<style scoped></style>
