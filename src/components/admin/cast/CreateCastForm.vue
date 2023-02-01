<script setup>
import { ref } from 'vue'
import { useImageStore } from '../../../store/image';
import { useCastStore } from '../../../store/cast';


const imageStore = useImageStore();
const castStore = useCastStore();

const image = ref({
    url: null,
    id: null,
});

const name = ref('');

async function onFileChange(e) {
  const file = e.target.files[0];
  if (!file) {
    alert('please fill the filed');
  } else {
    const formData = new FormData();

    formData.append('image', file);

    await imageStore.upload(formData)
      .then((data) => {
        image.value = data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
    
async function createCast() {
  castStore.create({
      name: name.value,
      image_id: image.value.id
    });
  
}
</script>

<template>
  <div class="flex items-center">
      <form @submit.prevent="createCast" class="flex w-full items-center justify-start gap-3 h-1/2">

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