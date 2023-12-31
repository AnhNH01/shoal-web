<template>
  <div class="flex w-full space-x-2 items-center">
    <UTextarea
      class="flex-grow"
      :rows="1"
      autoresize
      placeholder="Type your message"
      v-model="text"
      @keydown.enter.exact.prevent="handleSendMessage"
      @keyup.shift.enter.exact.prevent="ignore"
    />
    <UIcon
      class="text-sm md:text-2xl text-green-600 cursor-pointer"
      name="i-heroicons-paper-airplane-20-solid"
      @click.prevent="handleSendMessage"
    />
  </div>
</template>

<script setup lang="ts">
const text = ref("");

const handleSendMessage = () => {
  if (!text.value) return;
  console.log("MSG sent");
  text.value = "";
};

const ignore = () => {};
</script>
