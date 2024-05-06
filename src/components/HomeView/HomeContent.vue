<template>
  <div class="lg:px-80 my-3">
    <TagsBanner/>
  </div>
  <div class="lg:px-80 my-3">
    <MostViewed/>
  </div>
  <div class="lg:px-80 my-3 rounded" v-for="work in works" :key="work.id">
    <WorkHomePage :work="work"/>
  </div>
</template>
<script setup>
import TagsBanner from '@/components/HomeView/TagsBanner.vue'
import MostViewed from '@/components/HomeView/MostViewed.vue'
import WorkHomePage from '@/components/HomeView/WorkHomePage.vue'
import { onBeforeMount, ref } from 'vue'
import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_API_URL

const works = ref([])

onBeforeMount(async () => {
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