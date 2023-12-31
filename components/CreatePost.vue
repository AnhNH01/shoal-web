<template>
  <div class="flex w-full space-x-1 items-center border-b">
    <UAvatar
      src="https://avatars.githubusercontent.com/u/739984?v=4"
      alt="User Avatar"
      size="sm"
    />

    <UButton
      class="text-lg w-full flex-1 text-start"
      icon="i-heroicons-pencil-square"
      size="sm"
      color="gray"
      variant="ghost"
      label="Make a post..."
      :trailing="false"
      @click="toggleCreatePost"
    />
    <UModal v-model="isOpen">
      <UCard
        :ui="{
          body: {
            padding: 'p-1 sm:p-2',
          },
          footer: {
            padding: 'p-1 sm:p-2',
          },
        }"
      >
        <UAvatar
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="User Avatar"
          size="sm"
        />
        <UTextarea
          autoresize
          size="xl"
          placeholder="Write anything, literaly anything..."
          variant="none"
          v-model="newPost.text"
        />

        <template #footer>
          <div class="flex justify-end space-x-2">
            <UButton
              icon="i-heroicons-x-mark"
              size="sm"
              color="gray"
              variant="solid"
              label="Discard"
              :trailing="false"
              @click.stop="toggleCreatePost"
            />
            <UButton
              class="px-5"
              icon="i-heroicons-pencil-square"
              size="sm"
              color="black"
              variant="solid"
              label="Post"
              :trailing="false"
              @click.stop="handleMakePost"
            />
          </div>
        </template>
      </UCard>
    </UModal>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false);
const newPost = reactive({
  text: ''
})
const toggleCreatePost = () => {
  isOpen.value = !isOpen.value;
};

const handleMakePost = () => {
  if(!newPost.text.length) return
  window.alert(newPost.text)
  newPost.text = ''
  isOpen.value = false
}
</script>
