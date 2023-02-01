
<script setup>

const props = defineProps({
  movie: {
    type: Object,
    required: true
  },
})
</script>
<template>
  <router-link :to="{ name: 'Details', params: { id: movie.id }}" >
  <div class="border cursor-pointer h-full  overflow-hidden border-[#413b3b74] rounded-xl">
    <img class="rounded-xl w-full h-[300px] object-fill" :src="movie.poster" alt="">
  </div>
  </router-link>


</template>