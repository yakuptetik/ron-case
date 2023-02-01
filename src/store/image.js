import { defineStore } from 'pinia';
import API from '../utils/API';

export const useImageStore = defineStore('image', () => {
  function upload(image) {
    return new Promise((resolve, reject) => {
      try {
        API.post('images', image, { 
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })
          .then((response) => {
            resolve(response.data);
          });
      }	catch (err) {
        reject(err);
      }
    });
  }

  return { upload };
});