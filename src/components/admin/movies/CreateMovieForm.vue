<script setup>
import { ref } from 'vue'
// import {  useRouter } from 'vue-router';
import { useMovieStore } from '../../../store/movie';
import { useCastStore } from '../../../store/cast';
import { useImageStore } from '../../../store/image';

const movieStore = useMovieStore();
const castStore = useCastStore();
const imageStore = useImageStore();
// const router = useRouter();

const title = ref('');
const description = ref('');
const price = ref('');
const duration = ref('');
const movie_type = ref('');
const imdb_point = ref('');
const trailer_url = ref('');

const image = ref({
  url: null,
  id: null,
});

async function handleSubmit() {
  const cast_id = castStore.casts.map((cast) => cast.id);

	await movieStore.addMovie({ 
    image_id: image.value.id,
    title: title.value, 
    description: description.value,
    duration: duration.value,
    price: price.value,
    movie_type: movie_type.value,
    imdb_point: imdb_point.value,
    trailer_url: trailer_url.value,
    cast_id,
  })
		.then(() => {
      // router.push({ name: 'Home' })
      setTimeout(() => {
        alert('Created Successfully :)')
      }, 550)
		})
		.catch((err) => {
			alert(err.message);
		});
}
async function onFileChange(e) {
  const file = e.target.files[0];
  if (!file) {
    alert('please fill the filed');
  } else {
    const formData = new FormData();

    formData.append('image', file);

    imageStore.upload(formData)
      .then((data) => {
        image.value = data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

</script>

<template>

      <form @submit.prevent="handleSubmit()" class="px-3 pb-4 pt-2 w-full">
        <button type="submit" class="cursor-pointer w-full flex items-center justify-end">
        <div class="bg-red-600 hover:bg-red-700  rounded-full px-9 py-1 text-white ">
            <div role="status" class="flex items-center justify-center text-white text-md space-x-2">
              <span class=" text-white h-6 flex items-center">Save</span>
            </div>
        </div>
      </button> 
      <div class="gap-4 py-5 w-full h-full flex items-center ">
        <div>
          <input v-model="title" class="mb-2 py-2 p-1 pl-5 m w-full bg-[#353535]  rounded-full text-[#9a9a9a] outline-none focus:outline focus:outline-red-800" type="text" placeholder="title" required>
          <input v-model="description" class="mb-2 py-2 p-1 pl-5 w-full bg-[#353535] rounded-full text-[#9a9a9a] outline-none focus:outline focus:outline-red-800" type= "text" placeholder="body" required>
          <input v-model="price" class="mb-2 py-2 p-1 pl-5 m w-full bg-[#353535]  rounded-full text-[#9a9a9a] outline-none focus:outline focus:outline-red-800" type="number" placeholder="price" required>
          <input v-model="duration" class="mb-2 py-2 p-1 pl-5 w-full bg-[#353535] rounded-full text-[#9a9a9a] outline-none focus:outline focus:outline-red-800" type= "number" placeholder="duration" required>
        </div>

      <div>
          <input v-model="movie_type" class="mb-2 py-2 p-1 pl-5 m w-full bg-[#353535]  rounded-full text-[#9a9a9a] outline-none focus:outline focus:outline-red-800" type="text" placeholder="movie_type" required>
          <input v-model="imdb_point" class="mb-2 py-2 p-1 pl-5 w-full bg-[#353535] rounded-full text-[#9a9a9a] outline-none focus:outline focus:outline-red-800" type= "number" placeholder="imdb_point" required>
          <input v-model="trailer_url" class="mb-2 py-2 p-1 pl-5 m w-full bg-[#353535]  rounded-full text-[#9a9a9a] outline-none focus:outline focus:outline-red-800" type="text" placeholder="trailer_url" required>
          <input
            type="file"
            @change="onFileChange"
            class="block  text-sm  text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-red-300 file:text-red-700 hover:file:bg-red-200"
          />
        
      </div>
      </div>
    </form>
</template>