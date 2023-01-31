<script setup>
import MainButton from '../MainButton.vue';

</script>

<template>
  <div>
    <div class="border cursor-pointer  border-[#413b3b74] rounded-xl mb-3">
      <img class="object-fill h-[300px] rounded-xl" src="../images/grid.webp" alt="">
    </div>
    <MainButton :buttonName="'book now'" class="w-full text-white" bigSize textSizexl/>
  </div>
</template>