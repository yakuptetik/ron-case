import { ref } from 'vue'
import { defineStore } from 'pinia'

import API from '../utils/API';



export const useMovieStore = defineStore('movie', () => {

  const movies = ref(null)
  const token = ref('')
  const casts = ref([])

  function fetchMovies() {
    return new Promise((resolve, reject) => {
      try {
        API.get('/movies')
        
          .then((response) => {
              movies.value = response.data;
            resolve();
          });
      }	catch (err) {
        reject(err);
      }
    });
}
function addMovie(movie) {
  return new Promise((resolve, reject) => {
    try {
      API.post('movies', movie)
        .then((response) => {
          token.value = response.data.token
          API.defaults.headers.common['Authorization'] = `Bearer ${token}`
          localStorage.setItem('token', response.data.token);
          movies.value.push({ ...response.data, id: movies.value.length +1 });
          resolve();
          console.log(response.data.token)
        });
    }	catch (err) {
      reject(err);
    }
  });
}

// CAST //

function appendCast(payload) {
  casts.value.push(payload)
}
// function deleteCast() {
//   casts.value.pop()
// }


  return {  movies, casts, fetchMovies, addMovie,appendCast }
})