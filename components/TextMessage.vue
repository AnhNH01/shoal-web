<template>
  <div class="flex space-x-2" :class="{
    'flex-row-reverse': isCurrentUser
  }">
    <UAvatar
      v-if="!isCurrentUser"
      src="https://avatars.githubusercontent.com/u/739984?v=4"
      alt="Avatar"
      size="sm"
    />
    <UCard
      class="max-w-4xl"
      :class="isCurrentUser ? 'bg-green-400' : 'bg-gray-400'"
      :ui="{
        body: {
          padding: 'p-1 sm:p-2'
        }
      }"
    >
      {{ text }}
    </UCard>
  </div>
</template>
<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: "This is a sample text message content",
  },
  isCurrentUser: {
    type: Boolean,
    default: false,
  },
});
</script>
