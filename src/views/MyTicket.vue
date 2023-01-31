<script setup>
import MainButton from '../components/MainButton.vue';
import BannerSlider from '../components/sliders/BannerSlider.vue';
import TicketDate from '../components/tickets/TicketDate.vue';
import SeatsComp from '../components/tickets/SeatsComp.vue';


</script>

<template>
<BannerSlider/>
<div class="rounded-l-md px-24 h-full">
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
        <div class="flex items-center  mt-4 overflow-x-auto overflow-y-hidden">
            <div class="flex-none hover:opacity-100 pb-3">
                <div class="flex  items-center gap-4 pt-4 pr-10">
                  <div  v-for="index in 20" class="border hover:bg-red-600 p-2 cursor-pointer text-center border-gray-700 rounded">
                      <div>
                        saturday
                      </div>
                      <div class="text-4xl">
                        11
                      </div>
                      <div class="text-xs">
                        November 2023
                      </div>
                  </div>
                </div>
            </div>
        </div>  
      </div>
      <TicketDate/>
      <div class="my-12  flex items-center justify-center">
      <MainButton class="w-[10%]"  bigSize textSizexl buttonName="next" />
      </div>
    </div>
</div>
<SeatsComp/>


</template>