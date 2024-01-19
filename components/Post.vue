<template>
  <div class="flex flex-col">
    <UCard
      :ui="{
        base: 'xl:max-w-4xl',
        divide: '',
        header: {
          padding: 'p-1 sm:p-2',
        },
        body: {
          padding: 'p-1 sm:p-2',
        },
        footer: {
          padding: 'p-1 sm:p-2',
        },
      }"
    >
      <template #header>
        <div class="flex w-full items-center space-x-2 border-b pb-1">
          <UAvatar
            src="https://avatars.githubusercontent.com/u/739984?v=4"
            alt="Avatar"
            size="xs"
          />
          <p class="font-semibold">Username</p>
  
          <p class="text-gray-400 !ml-auto">22:30 17/11/2023</p>
        </div>
      </template>
      <p>Post content is here</p>
      <template #footer>
        <div class="flex items-center border-t">
          <UButton
            class="hover:bg-gray-100"
            :ui="{
              rounded: 'rounded-full',
            }"
            :icon="liked ? 'i-heroicons-heart-solid' : 'i-heroicons-heart'"
            variant="ghost"
            color="black"
            @click.stop="toggleLikePost"
          />
  
          <UButton
            class="hover:bg-gray-100"
            :ui="{
              rounded: 'rounded-full',
            }"
            icon="i-heroicons-chat-bubble-oval-left"
            variant="ghost"
            color="black"
            @click.stop="() => showComments = !showComments"
          />
        </div>
      </template>
    </UCard>
    <CommentSection v-if="showComments"/>
  </div>
</template>

<script setup lang="ts">
interface Props {}

const liked = ref(false);
const showComments = ref(false)

const toggleLikePost = () => {
  liked.value = !liked.value;
};
</script>
