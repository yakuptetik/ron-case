<script setup>
import MainButton from '../components/MainButton.vue';
import BannerSlider from '../components/sliders/BannerSlider.vue';
import PhotoGaleri from '../components/sliders/PhotoGaleri.vue';


</script>

<template>
  <div class="text-white">
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
      <div class="pl-10">
        <div class="mt-10" >
          <div class="text-white text-3xl uppercase border-l-4 border-red-800 pl-3">
            select date
          </div>
        </div>
        <div class="flex items-center  mt-4 overflow-x-auto  overflow-y-hidden gap-10">
            <div class="flex-none hover:opacity-100 pb-3">
                <div class="flex  items-center gap-4 pt-4 pr-10">
                  <div  v-for="index in 20" class="border overflow-hidden cursor-pointer border-[#413b3b74] ">
                    <img class="object-contain   rounded-xl" src="../components/images/endgameLogo.png" alt="">
                  </div>
                </div>
            </div>
        </div>  
      </div>
      <div class="pl-10">
        <div class="mt-10" >
          <div class="text-white text-3xl uppercase border-l-4 border-red-800 pl-3">
            select showtime
          </div>
        </div>
        <div class="mt-4 gap-10">
            <div class="flex-none hover:opacity-100 pb-3 pl-10">
              <div class="text-white text-lg uppercase">
                  2d ımax
                </div>
                <div class="flex  items-center gap-4  pt-4 pr-10">
                  <div  v-for="index in 5" class="border p-3 cursor-pointer border-[#413b3b74] ">
                 time
                  </div>
                </div>
            </div>
            <div class="flex-none hover:opacity-100 pb-3 pl-10">
              <div class="text-white text-lg uppercase">
                  3d Standart
                </div>
                <div class="flex  items-center gap-4  pt-4 pr-10">
                  <div  v-for="index in 5" class="border p-3 cursor-pointer border-[#413b3b74] ">
                  time
                  </div>
                </div>
            </div>
        </div>  
      </div>
      <div class="my-12">
      <MainButton class="h-full w-full" largeSize textSizexl buttonName="book now" />
      </div>
    </div>
  </div>
  </div>
</template>