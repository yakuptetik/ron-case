
<script setup>

const props = defineProps({
  movie:Object,
})
</script>
<template>
  <div class="border cursor-pointer border-[#413b3b74] rounded-xl">
    <img class="rounded-xl" :src="movie.image" alt="">
  </div>
  {{ movie.title }}
</template>