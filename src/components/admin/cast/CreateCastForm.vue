<script setup>
import { ref } from 'vue'
import { useMovieStore } from '../../../store/movie';
import API from '../../../utils/API';

const useStore = useMovieStore()

const name = ref('');

const image = ref({
    url: URL,
    id: Number,
})

const onFileChange = (e) => {
  image.value = e.target.files[0];
  imageUpload();
};
    
async function imageUpload  () {
  if (!image.value) {
    alert('please fill the filed');
  } else {
    const formdata = new FormData();
    formdata.append('image', image.value);
    await API.post('images',formdata ).then(() => {
    })
    .catch((error) => {
      console.log(error);
    });
  }
}


</script>

<template>
  <div class="flex items-center">
      <form @submit.prevent="imageUpload" class="flex w-full items-center justify-start gap-3 h-1/2">

          <input
            type="file"
            @change="onFileChange"
            class="block  text-sm  text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-red-300 file:text-red-700 hover:file:bg-red-200"
          />

          <input 
          required
          v-model="name" 
          type="text"
          class="py-1 outline-none bg-[#353535] text-white rounded-full px-3 "
          />

        <button class="px-6 py-1 uppercase rounded-full text-white bg-red-600" type="submit">
          kaydet
        </button>
      </form>
  
  </div>

</template>