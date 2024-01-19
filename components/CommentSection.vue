<template>
  <div>
    <ul v-if="!loading">
      <li v-for="com in comments" :key="com.id">
      {{ com.content }}
      </li>
    </ul>
    <p v-else>Loading comments</p>
  </div>
</template>

<script setup lang="ts">
import {mockAsync} from '../utils/app'
const loading = ref(true)
const comments = [
  {
    id: 1,
    content: "first comment",
  },
    {
    id: 2,
    content: "first comment",
  },
  {
    id: 3,
    content: "first comment",
  },
  {
    id: 4,
    content: "first comment",
  },

];

const loadComments = async () => {
  await mockAsync(1000)
  loading.value = false
}

loadComments()
</script>
