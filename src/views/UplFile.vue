<script setup>
import { ref } from 'vue';
import API from '../utils/API';

const image = ref({
  url: null,
  id: null
});

function handleFilesUpload(event) {
  const file = event.target.files[0];

  const formData = new FormData();
  formData.append('image', file);

  API.post('images', formData,
  { 
    headers: {
      'Content-Type': 'multipart/form-data'
    }
})
.then((res) => {
  image.value = res.data;
});
}
</script>

<template>
  <div class="container h-screen w-screen bg-white flex items-center">
    <div>
      <div class="large-12 medium-12 small-12 cell">
      <label>Files
        <input type="file" @change="handleFilesUpload"/>
      </label>
    </div>
    <div class="large-12 medium-12 small-12 cell">
      <div v-for="(file, key) in files" class="file-listing">{{ file.name }} <span class="remove-file" @click="removeFile( key )">Remove</span></div>
    </div>   

    <img :src="image.image_url" alt="">

    {{ JSON.stringify(image.id, null, 2) }}
    </div>

  </div>
</template>