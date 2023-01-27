import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useUserStore = defineStore('user', () => {

  const authUsers = ref(null)


  function loginUser() {
    // timezone: "Europe/Istanbul"
    axios.post('https://api.plandy.co/api/auth/login')
      .then((response) => {

          localStorage.setItem('token', response.data.token);
      })
      .catch(() => {
      });
  }
  function registerUser(authUser) {
      return new Promise((resolve, reject) => {
        try {
          axios.post('https://api.plandy.co/api/auth/register', authUser)
            .then((response) => {
              localStorage.setItem('token', response.data.token);
              resolve();
            });
        }	catch (err) {
          reject(err);
        }
      });
  }

  return { authUsers, loginUser, registerUser }
})