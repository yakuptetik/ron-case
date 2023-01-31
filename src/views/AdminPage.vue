<script setup>
import CreateCastForm from '../components/admin/cast/CreateCastForm.vue';
import CreateMovieForm from '../components/admin/movies/CreateMovieForm.vue';
import { useMovieStore } from '../store/movie';


const useStore = useMovieStore()


</script>

<template>

<div class="h-full w-full  pt-24 px-5">
  <div class="flex items-start mt-10">
    <div class="w-full">
      <button @click="useStore.appendCast" class="px-6 rounded-full py-1 uppercase text-white bg-red-600">
          Add cast
      </button>
      <div class="mt-10">
        <div v-for="cast in useStore.casts" class="pb-4 ">
          <CreateCastForm/>
        </div> 
      </div>
    </div> 

      <div class="">
      <CreateMovieForm/>
    </div>    


  </div>




</div>


</template>