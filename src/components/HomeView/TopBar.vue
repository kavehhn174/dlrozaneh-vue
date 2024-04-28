<template>
  <div class="bg-brand-primary-120 lg:px-80 flex flex-row justify-between">
    <div class="py-1 flex flex-col justify-center">
      <div>
        <SearchBar></SearchBar>
      </div>

    </div>
    <div class="p-3" dir="rtl">
      <HeaderButton text="صفحه اصلی" href="/"></HeaderButton>
      <HeaderButton text="فیلم ها" href="/"></HeaderButton>
      <HeaderButton text="فیلم های دوبله فارسی" href="/"></HeaderButton>
      <HeaderButton text="انیمیشن ها" href="/"></HeaderButton>
      <HeaderButton text="فیلم های ایرانی" href="/"></HeaderButton>
      <HeaderButton text="تماس با ما و تبلیغات" href="/"></HeaderButton>
    </div>
  </div>
</template>
<script setup>
import HeaderButton from '@/components/HomeView/HeaderButton.vue'
import SearchBar from '@/components/HomeView/SearchBar.vue'
</script>