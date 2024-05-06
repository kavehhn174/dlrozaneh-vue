<template>
  <div class="banner-container py-3 rounded shadow-xl">
    <button class="btn bg-brand-primary-80 text-brand-white p-2 mx-2 mb-2 rounded">پربازدید ترین فیلم های هفته</button>
    <div class="flex justify-center">
      <div v-for="work in works" :key="work.id">
        <img :src="work.image" height="210" width="150">
        <button class="bg-amber-400 text-brand-primary-120 text-sm font-bold p-2 w-full" v-if="work.hasDub === true">
          دوبله فارسی
        </button>
        <button class="bg-amber-400 text-brand-primary-120 text-sm font-bold p-2 w-full" v-else-if="work.hasSub === true">
          زیرنویس فارسی
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_API_URL

const works = ref([])

onMounted(async () => {
  await axios
    .get('/api/work/')
    .then((response) => {
      works.value = response.data.data
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