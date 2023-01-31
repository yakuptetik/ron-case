<script setup>
import CardItem from './CardItem.vue';

const props = defineProps({
  categoryTitle: String,
  movies:Object
})

</script>

<template>
  <div class="px-24 mt-10 pb-10" >
    <div class="text-white text-3xl uppercase border-l-4 border-red-800 pl-3">
      {{ categoryTitle }}
    </div>
    <div class="grid grid-cols-5 md:grid-cols-3 lg:grid-cols-5 sm:grid-cols-2 max-sm:grid-cols-2 gap-4 pt-8">
      <div v-for="movie in movies" :key="movie.id" >
        <CardItem :movie="movie"/>
      </div>
    </div>
  </div>
</template>