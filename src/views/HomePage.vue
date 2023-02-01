<script setup>
import { onMounted } from 'vue';
import { useMovieStore } from '../store/movie';

import CategoryItem from '../components/CategoryItem.vue';
import BannerSlider from '../components/sliders/BannerSlider.vue';
import NewMoviesCategory from '../components/sliders/NewMoviesCategory.vue';

const useStore = useMovieStore()

onMounted(() => {
  useStore.fetchMovies();
})

</script>

<template>
<div>
  <BannerSlider/>
  <CategoryItem :movies="useStore.movies" categoryTitle="top in the box office"/>
  <div class="pl-24">
    <NewMoviesCategory :movies="useStore.movies" categoryTitle="New Showing"/>
  </div>
  <CategoryItem categoryTitle="coming soon"/>
</div>
</template>