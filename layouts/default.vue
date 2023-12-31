<template>
  <div>
    <header class="border-b -mb-px sticky top-0 z-50 border-gray-200 h-16">
      <div
        class="mx-auto px-4 sm:py-1 lg:py-2 sm:px-6 lg:px-8 max-w-7xl flex items-center gap-3"
      >
        <UInput
          v-model="searchString"
          name="q"
          size="lg"
          placeholder="Search..."
          icon="i-heroicons-magnifying-glass-20-solid"
          autocomplete="off"
          :ui="{ icon: { trailing: { pointer: '' } } }"
        >
          <template #trailing>
            <UButton
              v-show="searchString !== ''"
              color="gray"
              variant="link"
              icon="i-heroicons-x-mark-20-solid"
              :padded="false"
              @click="searchString = ''"
            />
          </template>
        </UInput>

        <ul class="flex">
          <li class="cursor-pointer">
            <NuxtLink to="/messaging">
              <Icon
                name="i-heroicons:chat-bubble-oval-left-solid"
                size="2em"
                color="gray"
              />
            </NuxtLink>
          </li>
          <li class="cursor-pointer">
            <NuxtLink to="/">
              <Icon name="i-heroicons:home-20-solid" size="2em" color="gray" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </header>
    <main>
      <UContainer>
        <slot />
      </UContainer>
    </main>
    <footer>this is the footer</footer>
  </div>
</template>

<script setup lang="ts">
const searchString = ref("");
const router = useRouter();
</script>

<style scoped></style>
