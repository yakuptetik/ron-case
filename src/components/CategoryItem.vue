<script setup>
import CardItem from './CardItem.vue';

const props = defineProps({
  categoryTitle: String

})

</script>

<template>
  <div class="px-24 mt-10 pb-10" >
    <div class="text-white text-3xl uppercase border-l-4 border-red-800 pl-3">
      {{ categoryTitle }}
    </div>
    <div class="grid grid-cols-5 gap-4 pt-8">
      <CardItem v-for="index in 5"/>
    </div>
  </div>
</template>