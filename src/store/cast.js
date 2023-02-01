import { defineStore } from 'pinia';
import { ref } from 'vue';
import API from '../utils/API';

export const useCastStore = defineStore('cast', () => {

const casts = ref([]);

  function create(cast) {
    return new Promise((resolve, reject) => {
      try {
        API.post('casts', cast)
          .then((response) => {
            console.log(response.data.cast)
            casts.value.push(response.data.cast)
            resolve(response.data);
          });
      }	catch (err) {
        reject(err);
      }
    });
  }

  return { casts, create };
})