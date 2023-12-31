<template>
  <UCard :ui="{
    shadow: '',
    body: {
      base: 'flex',
      padding: '',
    },
    
  }">
    <ConversationList :list-conversation="mockConvoList" />
    <Conversation />
  </UCard>
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
