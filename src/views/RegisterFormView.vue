
<script setup>
import { ref } from 'vue';
import IconBase from '../components/icons/IconBase.vue';
import RonLogo from '../components/icons/RonLogo.vue';
import { useUserStore } from '../store/user'
import { useRouter } from 'vue-router'

const router = useRouter()

const useStore = useUserStore()

const email = ref('') 
const password = ref('')
const company = ref('')
const timezone = ref('Europe/Istanbul')


function handleRegister() {
    useStore.registerUser({ 
        email: email.value,
        password: email.value,
        company: company.value,
        timezone: timezone.value
    })
    .then(() => {
      router.push('/login')
    })
    .catch((err) => {
      alert(err.message)
    });
}

</script>


<template >
<section class="">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div class="pb-8">
        <img src="../components/images/logo.png" alt="">
      </div>
      <div class="w-full bg-[#121212]/90 rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl flex items-center justify-center font-bold leading-tight tracking-tight text-white md:text-2xl ">
                Create and account
              </h1>
              <form @submit.prevent="handleRegister()" class="space-y-4 md:space-y-6">

                <div class="flex flex-col">
                    <label for="email" class="block mb-2 text-sm font-medium text-white ">
                      Your Company
                    </label>
                    <input 
                        required
                        v-model="company" 
                        placeholder="Your mail address" 
                        type="text" 
                        name="company" 
                        id="company"
                        class="disabled:bg-black disabled:text-white disabled:border-slate-200 disabled:shadow-none
                              invalid:border-red-500 invalid:text-red-600  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                              focus:invalid:border-red-500 focus:invalid:ring-red-500 bg-black border border-gray-300 text-white sm:text-sm
                              rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                  </div>

                  <div class="flex flex-col">
                    <label for="email" class="block mb-2 text-sm font-medium text-white ">
                      Your email
                    </label>
                    <input 
                        required
                        v-model="email" 
                        placeholder="Your mail address" 
                        type="email" 
                        name="email" 
                        id="email"
                        class="disabled:bg-black disabled:text-white disabled:border-slate-200 disabled:shadow-none
                              invalid:border-red-500 invalid:text-red-600  focus:outline-none focus:border-sky-500 focus:ring-1 focus:bg-black focus:ring-sky-500
                              focus:invalid:border-red-500 focus:invalid:ring-red-500 bg-black border border-gray-300 text-white sm:text-sm
                              rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                  </div>

                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-white ">
                        Password
                      </label>
                      <input 
                          v-model="password" 
                          required 
                          type="password" 
                          name="password" 
                          id="password" 
                          placeholder="••••••••"
                          class="disabled:bg-black disabled:text-white disabled:border-slate-200 disabled:shadow-none
                              invalid:border-red-500 invalid:text-red-600  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                              focus:invalid:border-red-500 focus:invalid:ring-red-500 bg-black border border-gray-300 text-white sm:text-sm
                              rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                  </div>

                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-white ">
                        Password Again
                      </label>
                      <input 
                          v-model="password" 
                          required 
                          type="password" 
                          name="password" 
                          id="password" 
                          placeholder="••••••••"
                          class="disabled:bg-black disabled:text-white disabled:border-slate-200 disabled:shadow-none
                              invalid:border-red-500 invalid:text-red-600  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                              focus:invalid:border-red-500 focus:invalid:ring-red-500 bg-black border border-gray-300 text-white sm:text-sm
                              rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                  </div>

                  <button type="submit" class="w-full  bg-red-600 hover:bg-red-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                  <p class="text-sm font-light text-gray-500">
                    Already have an account? <router-link to="/login" class="font-medium text-primary-600 hover:underline "> Login here </router-link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
</template>
