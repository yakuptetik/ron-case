<script setup>

const props = defineProps({
  categoryTitle: String,
  image:URL
})

</script>

<template>
  <div class="pl-10">
  <div class="mt-10" >
    <div class="text-white text-3xl uppercase border-l-4 border-red-800 pl-3">
      {{ categoryTitle }}
    </div>
  </div>
  <div class="flex items-center  mt-4 overflow-x-auto  overflow-y-hidden gap-10">
          <div class="flex-none hover:opacity-100 pb-3">
            <div class="flex  items-center gap-4 pt-4 pr-10">
              <div class="border overflow-hidden cursor-pointer border-[#413b3b74] ">
                <img class="object-contain h-[200px]  rounded-xl" :src="image" alt="">
              </div>
            </div>
          </div>
        </div>    
  </div>

</template>