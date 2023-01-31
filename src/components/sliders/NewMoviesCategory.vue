<script setup>
import NewShowingCard from './NewShowingCard.vue';

const props = defineProps({
  categoryTitle: String

})

</script>

<template>
  <div class=" mt-10 " >
    <div class="text-white text-3xl uppercase border-l-4 border-red-800 pl-3">
      {{ categoryTitle }}
    </div>
  </div>
  <div class="flex items-center  mt-4 overflow-x-auto  gap-10">
          <div class="flex-none hover:opacity-100 pb-3">
            <div class="flex  items-center gap-4 pt-4 pr-24">
              <NewShowingCard v-for="index in 20"/>
            </div>
          </div>
        </div>
</template>