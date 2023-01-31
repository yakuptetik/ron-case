
<script setup>
import MainButton from '../components/MainButton.vue';
import BannerSlider from '../components/sliders/BannerSlider.vue';
import PhotoGaleri from '../components/sliders/PhotoGaleri.vue';
</script>

<template>
  <BannerSlider/>
  <div class="rounded-l-md px-24 h-full w-full">
    <div class="text-white border border-gray-800 rounded-l-md pb-7">
      <div class="flex items-center  pt-20 px-10 gap-7">
        <div class="">
          <img class="h-[250px]" src="../components/images/avengers.jpeg" alt="">
        </div>
        <div class="w-1/2">
          <div class="uppercase text-4xl pb-3">
            evengers: Edngame
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consectetur culpa et architecto excepturi? Dolore, enim accusamus
            laudantium corrupti doloribus voluptatibus, asperiores itaque maiores magnam, sequi nam repudiandae commodi odio!
          </div>
        </div>
      </div> 
      <div class="flex items-center  pt-10 px-10 gap-7">
        <div class="w-1/2">
          <div class="text-sm">
              Edngame: evengers
          </div>
          <div class="text-sm">
              Edngame: evengers
          </div>
          <div class="text-sm">
              Edngame: evengers
          </div>
          <div class="text-sm">
              Edngame: evengers
          </div>
          <div class="text-sm">
              Edngame: evengers
          </div>
          <div class="text-3xl border-l-4 border-red-800 uppercase mt-6">
            top cast
          </div>
          <div class="flex h-[100px] gap-5 mt-3">
            <img class="border border-gray-800 rounded-lg cursor-pointer" v-for="index in 6" src="../components/images/grid.webp" alt="">
          </div>
        </div>
        <div class="relative border rounded-lg border-gray-800">
          <img class="h-[300px] w-full rounded-lg" src="../components/images/avengers.jpeg" alt="">
          <div class="absolute top-[40%] right-[45%] rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="40" width="40" fill="white">
              <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="my-12 h-full  flex items-center justify-center">
      <MainButton largeSize textSizexl buttonName="book now" />
      </div>
      <PhotoGaleri categoryTitle="photo galery"/>
    </div>
  </div>
</template>