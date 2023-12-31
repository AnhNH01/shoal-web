<template>
  <UCard
    class="cursor-pointer"
    :class="{
      'bg-gray-200' : active
    }"
    :ui="{
      body: {
        padding: 'p-1 sm:p-2'
      },
      rounded: 'rounded-lg',
    }"
    @click.prevent="onClickConvo"
  >
    <div class="flex space-x-2 items-center">
      <UAvatar :src="avatarUrl" alt="Avatar" size="sm" />
      <p class="text-lg ">{{ conversatioName }}</p>
    </div>
  </UCard>
</template>

<script setup lang="ts">
interface Props {
  avatarUrl: string;
  conversatioName: string;
  conversationId: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  avatarUrl: "https://avatars.githubusercontent.com/u/739984?v=4",
  conversatioName: "Another User",
  conversationId: "uniqueConvoId",
});

const active = ref(false)

const onClickConvo = () => {
  active.value = !active.value
  console.log(props.avatarUrl)
}
</script>
