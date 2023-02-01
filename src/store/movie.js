import { ref } from 'vue';
import { defineStore } from 'pinia';
import API from '../utils/API';



export const useMovieStore = defineStore('movie', () => {

  const movies = ref([]);
  const casts = ref([]);
  const images = ref ([])


  function getMovie(movieId) {
    return movies.value.find((movie) => movie.id === Number(movieId))
  }

  function fetchMovies() {
    return new Promise((resolve, reject) => {
      try {
        API.get('movies')
        
          .then((response) => {
              movies.value = response.data.movies;
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
          movies.value.push(response.data);
          resolve();
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


  return {  movies, casts, images, fetchMovies, addMovie,appendCast, getMovie }
})