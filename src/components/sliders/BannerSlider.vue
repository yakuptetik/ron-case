<script setup>
import MainButton from '../MainButton.vue';

</script>

<template>
  <div class="w-full relative text-white">
    <div class="absolute w-1/3 bottom-32 left-24 min-[200px]:max-md:w-1/2 min-[200px]:max-md:left-5 min-[200px]:max-md:bottom-5">
      <div class="w-full">
          <img class="mb-12 min-[200px]:max-md:mb-1" src="../images/endgameLogo.png" alt="">
        <div v-if="$route.name === 'Home'">
          <div class="flex item-center gap-2 pb-3">
            <div>
              dsfgdefrg
            </div>
            |
            <div>
              dsfgdefrg
            </div>
            |
            <div>
              dsfgdefrg
            </div>
          </div>
          <div class="pb-5">
              elit. Nulla possimus sed dolores corporis ipsum 
              culpa nihil magni facilis dicta, illo explicabo
              elit. Nulla possimus sed dolo
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