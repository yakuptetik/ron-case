<script setup>
import MainButton from '../MainButton.vue';


defineProps({
    desc: String,
    title: String,
    type:String,
    duration:String
})

</script>

<template>
  <div class="w-full relative text-white">
    <div class="absolute w-1/3 bottom-32 left-24 min-[200px]:max-md:w-1/2 min-[200px]:max-md:left-5 min-[200px]:max-md:bottom-5">
      <div class="w-full">
          <img class="mb-12 min-[200px]:max-md:mb-1" src="../images/endgameLogo.png" alt="">
        <div v-if="$route.name === 'Home'">
          <div class="flex item-center gap-2 pb-3">
            <div>
              Action,Adventure,Drama
            </div>
            |
            <div>
              3h 1m
            </div>
            |
            <div>
              English
            </div>
          </div>
          <div class="pb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati laborum cumque dolores reiciendis placeat nihil, veniam, blanditiis atque error
          </div>
          <div class="flex justify-start min-[200px]:max-md:justify-center gap-6 items-center">
            <MainButton textSizexl bigSize :buttonName="'book now'" />
            <MainButton textSizexl bigSize :buttonName="'ply trailer'"/>
          </div>
        </div>
      </div>
    </div>
    <div v-if="$route.name === 'Home'">
      <img class="w-full h-full  min-h-screen min-[200px]:max-md:hidden" src="../images/avenger.jpeg" alt="">
      <img class="w-full h-full  min-h-screen md:max-lg:hidden lg:hidden " src="../images/mobilavengers.jpeg" alt="">
    </div>
    <div v-if="$route.name === 'Details' || $route.name === 'Tickets' ">
        <img  src="../images/detailpagebanner.jpeg" alt="">
    </div>
  </div>
</template>