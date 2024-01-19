<template>
  <div>
    <p v-if="loading">Content is loading</p>
    <p v-else>Content loaded</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { mockAsync } from '../../utils/app';

const loading = ref(true)



const fetchDetailPosts = async () => {
  try {
    await mockAsync(1500)
  } catch(err) {
    console.log(err)
  } finally {
    loading.value = false
  }
}

fetchDetailPosts()


</script>