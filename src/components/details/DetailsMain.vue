<script setup>
defineProps({
  duration: String,
  imdb: String,
  price:String,
  video:URL,
  title:String,

})

</script>


<template>
  <div class="flex items-center  pt-10 px-10 gap-7">
      <div class="w-1/2">
        <div class="text-sm">
            Duration : {{ duration }}
        </div>
        <div class="text-sm">
          imdb :  {{ imdb }}
        </div>
        <div class="text-sm">
            {{ price }}
        </div>
        <div class="text-sm">
            {{ title }}
        </div>
        <div class="text-sm">
            Edngame: evengers
        </div>
        <div class="text-3xl border-l-4 border-red-800 uppercase mt-6">
          top cast
        </div>
        <div class="flex h-[100px] gap-5 mt-3">
          <img class="border border-gray-800 rounded-lg cursor-pointer" v-for="index in 6" src="../components/images/grid.webp" alt="">
        </div>
      </div>
      <div class="relative border rounded-lg border-gray-800">
        <video width="320" height="240" ref="videoPlayer">
          <source
            :src="video"
            type="video/mp4"
          />
          </video>
        <div class="absolute top-[40%] right-[45%] rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="40" width="40" fill="white">
            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
          </svg>
        </div>
      </div>
  </div>
</template>