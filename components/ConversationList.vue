<template>
  <div class="flex bg-gray-200 flex-col w-80 max-w-sm h-full overflow-y-auto ">
    <ConversationListItem
      v-for="convo in listConversation"
      :key="convo.conversationId"
      :conversatio-name="convo.conversatioName"
      :conversation-id="convo.conversationId"
      :avatar-url="convo.avatarUrl"
    />
  </div>
</template>

<script setup lang="ts">
import ConversationListItem from "./ConversationListItem.vue";

interface Conversation {
  conversatioName?: string;
  conversationId: string | number;
  avatarUrl?: string;
}

interface Props {
  listConversation: Conversation[];
}

defineProps<Props>();
</script>

<style scoped></style>
