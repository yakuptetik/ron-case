
<script setup>
import { useMovieStore } from '../store/movie';
import { useRoute } from 'vue-router'; 
import {computed } from 'vue'
import MainButton from '../components/MainButton.vue';
import BannerSlider from '../components/sliders/BannerSlider.vue';
import PhotoGaleri from '../components/sliders/PhotoGaleri.vue';
import DetailsTab from '../components/details/DetailsTab.vue'
import DetailsMain from '../components/details/DetailsMain.vue';


const movieStore = useMovieStore()
const route = useRoute();

const fetchMovies = computed(() => movieStore.getMovie(route.params.id));

movieStore.fetchMovies()
</script>

<template >
  <BannerSlider/>
  <div class="rounded-l-md px-24 h-full w-full">
    <div class="text-white border border-gray-800 rounded-l-md pb-7">

        <div v-if="fetchMovies" class="flex items-center  pt-20 px-10 gap-7">
            <DetailsTab 
              :title="fetchMovies.title" 
              :desc="fetchMovies.description"
              :image="fetchMovies.poster"
            />
        </div> 
        
        <div v-if="fetchMovies">
          <DetailsMain 
              :video="fetchMovies.trailer"
              :duration="fetchMovies.duration"
              :price="fetchMovies.price"
              :imdb="fetchMovies.imdb_puanı"
              :title="fetchMovies.title"
          /> 
        </div>

      <div class="my-12 h-full  flex items-center justify-center">
      <MainButton largeSize textSizexl buttonName="book now" />
      </div>
      <div v-if="fetchMovies">
        <PhotoGaleri :image="fetchMovies.poster" categoryTitle="photo galery"/>       
      </div>

    </div>
  </div>
</template>