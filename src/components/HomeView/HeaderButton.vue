<template>
  <a class="bg-transparent text-brand-gray-50 border-r border-gray-50 p-3 text-sm" :href="href">{{ text }}</a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped></style>
