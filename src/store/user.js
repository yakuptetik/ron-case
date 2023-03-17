import { ref } from 'vue'
import { defineStore } from 'pinia'

import API from '../utils/API';



export const useUserStore = defineStore('user', () => {

  const authUsers = ref({
    loggedIn: false,
    data: null
  });
  const token = ref('')


  function loginUser(asd) {
    API.post('login', asd)
      .then((response) => {
        console.log(response.data.token)
          API.defaults.headers.common['Authorization'] = `Bearer ${token}`
          localStorage.setItem('token', response.data.token);
        
      })
      .catch(() => {
      });
  }
  function registerUser(authUser) {
      return new Promise((resolve, reject) => {
        try {
          API.post('/auth/register', authUser)
            .then((response) => {
              localStorage.setItem('token', response.data.token);
              resolve();
            });
        }	catch (err) {
          reject(err);
        }
      });
  }



  return { authUsers, loginUser, registerUser}
})