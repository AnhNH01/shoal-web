<template>
  <UCard
    class="w-full h-full"
    :ui="{
      base: 'border flex flex-col',
      rounded: 'rounded-none',
      shadow: '',
      ring: '',
      body: {
        base: 'flex flex-1 flex-col space-y-2 w-full overflow-y-auto',
        padding: 'p-1 sm:p-2',
      },
      footer: {
        base: 'border-none',
        padding: 'p-1 sm:p-2',
      },
      
    }"
  >
    <template #header>
      <div class="flex items-center space-x-2 z-10">
        <UAvatar
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="Avatar"
          size="lg"
        />
        <h1 class="text-lg font-bold">Mock chat user</h1>
      </div>
    </template>

    <div
      class="w-full flex"
      :class="message.isCurrentUser ? 'justify-end' : 'justify-start'"
      v-for="(message, index) in texts"
    >
      <TextMessage
        :key="index"
        :is-current-user="message.isCurrentUser"
        :text="message.text"
      />
    </div>

    <template #footer> <MessageInput /> </template>
  </UCard>
</template>

<script setup lang="ts">
import TextMessage from "./TextMessage.vue";

export interface TextMessage {
  isCurrentUser: boolean;
  text: string;
}

interface Props {
  texts?: TextMessage[];
}

withDefaults(defineProps<Props>(), {
  texts: () => [
    {
      isCurrentUser: false,
      text: "Hello you",
    },
    {
      isCurrentUser: true,
      text: "Hi, how r u?",
    },
    {
      isCurrentUser: false,
      text: "Not much really",
    },
    {
      isCurrentUser: false,
      text: "you ?",
    },
    {
      isCurrentUser: true,
      text: "just working on my messaging app",
    },
    {
      isCurrentUser: false,
      text: "sounds nice, how's it goin",
    },
    {
      isCurrentUser: true,
      text: "I'm having a conversation with myself rn, so not that well :)",
    },
  ],
});
</script>
