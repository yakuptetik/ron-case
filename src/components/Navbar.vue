<script setup>
import MainButton from './MainButton.vue';


const props = defineProps({
  tabs:Array
})

</script>

<template>
  <div class="fixed top-0 left-0 z-50 w-full bg-[#121212]/80 py-6 px-12 flex items-center justify-between">
      <div class=" pl-10 flex text-white items-center  justify-center ">
        <img src="./images/logo.png" alt="">
      </div>
      <div class="flex text-white items-center p-2  justify-end gap-4">
        <div class="flex items-center uppercase text-white justify-center gap-10 px-3" >
        <div v-for="tab in tabs" :key="tab.id"  class="px-3">
            <router-link :to="{path: tab.to}" active-class="!opacity-100 border-[#ed3833]  text-[#ed3833] border-b-2 border-opacity-100" class="hover:text-[#ed3833] pb-3  hover:border-b-2 hover:border-[#ed3833] hover:opacity-100 opacity-50">
            {{ tab.title }}
            </router-link>
        </div>
        </div>
        <MainButton :buttonName="'sing in | join'"/>
      </div>
    </div>
</template>