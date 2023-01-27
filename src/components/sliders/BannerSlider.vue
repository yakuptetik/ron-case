<script setup>
import MainButton from '../MainButton.vue';

</script>

<template>
  <div class="w-full relative text-white">
    <div class="absolute bottom-32 left-24 w-1/3">
      <div class="w-full">
          <img class="mb-12" src="../images/endgameLogo.png" alt="">
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
          <div class="flex justify-start gap-6 items-center w-full">
            <MainButton textSize bigSize :buttonName="'book now'" />
            <MainButton textSize bigSize :buttonName="'ply trailer'"/>
          </div>
        </div>
      </div>
    </div>
    <div v-if="$route.name === 'Home'">
      <img class="w-screen h-screen" src="../images/avenger.jpeg" alt="">
    </div>
    <div v-if="$route.name === 'Details' || $route.name === 'Tickets' ">
        <img  src="../images/detailpagebanner.jpeg" alt="">
    </div>
  </div>
</template>