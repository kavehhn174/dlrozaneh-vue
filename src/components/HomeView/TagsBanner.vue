<template>
  <div class="banner-container py-3 rounded shadow-xl">
    <button class="btn bg-brand-primary-80 text-brand-white p-2 mx-2 mb-2 rounded">ژانر فیلم ها</button>
    <div class="flex justify-center">
      <button class="bg-amber-400 text-brand-primary-120 text-sm font-bold p-2 rounded" v-for="tag in tags" :key="tag.name">
        {{ tag.name }}
      </button>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

const tags = ref([])

onMounted(async () => {
  await axios
    .get('/api/tag/')
    .then((response) => {
      tags.value = response.data.data
    })
    .catch((error) => {
      console.log(error)
    })
})

</script>
<style scoped>
.banner-container {
  background-image: url('@/assets/wal2.jpg');
  background-size: cover;
  background-position: center;
}
</style>