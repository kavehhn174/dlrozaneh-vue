<template>
  <div class="lg:mx-60 rounded shadow-xl" dir="rtl">
    <div class="flex">
      <div class="bg-brand-primary-40 px-3 py-2 inline-block text-white rounded-tr">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </div>
      <div class="flex flex-col justify-center pr-3">
        {{ work.name }}
      </div>
    </div>
    <div class="border-t-2 border-b-2 flex justify-between">
      <div class="text-brand-gray-80 text-sm py-1 px-1">
        <font-awesome-icon icon="fa-solid fa-calendar" />
        {{ new Date(work.createdAt).getFullYear()}}/{{ new Date(work.createdAt).getMonth()}}/{{ new Date(work.createdAt).getDay()}}
      </div>
    </div>
    <div>
      <div class="flex justify-center">
        <img :src="work.image" height="550" width="400"/>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_API_URL

const works = ref([])

const props = defineProps({
  work: Object
})

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