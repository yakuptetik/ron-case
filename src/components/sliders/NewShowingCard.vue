<script setup>
import MainButton from '../MainButton.vue';

const props = defineProps({
  movie: {
    type: Object,
    required: true
  },
});



</script>

<template>
  <div>
    <div class="border cursor-pointer  w-[200px] border-[#413b3b74] rounded-xl mb-3">
      <img class="object-fill w-full h-[300px] rounded-xl" :src="movie.poster" alt="">
    </div>
    <MainButton :buttonName="'book now'" class="w-full text-white" bigSize textSizexl/>
  </div>
</template>