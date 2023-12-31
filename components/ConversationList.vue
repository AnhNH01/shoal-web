<template>
  <div class="flex flex-col space-y-2 w-80 max-w-sm h-full p-1 overflow-y-auto">
    <UInput
      icon="i-heroicons-magnifying-glass-20-solid"
      size="lg"
      color="white"
      :trailing="false"
      placeholder="Search..."
    />

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
