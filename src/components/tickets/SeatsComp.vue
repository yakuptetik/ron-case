<script setup>
import { ref } from 'vue'

const selected = ref(false)

</script>

<template>
  <div class="px-24">
    <div class="text-white border border-gray-800 rounded-l-md pb-7">
      <div class="rounded-l-md h-full w-full">
        <div class="pl-10">
            <div class="mt-10">
              <div class="text-white text-3xl uppercase border-l-4 border-red-600 pl-3">
                selecting seats
              </div>
            </div>
            <div class="mt-4 flex w-full justify-between">
                <div class="flex-none w-2/3 hover:opacity-100 pb-3 px-10 mt-4">
                  <div class="text-white p-2 text-center rounded text-xl bg-gray-600">
                      Screen
                    </div>
                    <div class="grid grid-cols-10 gap-4  mt-10 px-10">
                      <button  v-for="index in 10" class="border hover:bg-red-600  focus:bg-red-600 text-center cursor-pointer border-gray-700 rounded">
                        A{{ index }}
                      </button>
                      <button  v-for="index in 10" class="border hover:bg-red-600  focus:bg-red-600 text-center cursor-pointer border-gray-700 rounded">
                        B{{ index }}
                      </button>
                      <button  v-for="index in 10" class="border hover:bg-red-600  focus:bg-red-600 text-center cursor-pointer border-gray-700 rounded">
                        C{{ index }}
                      </button>
                      <button  v-for="index in 10" class="border hover:bg-red-600  focus:bg-red-600 text-center cursor-pointer border-gray-700 rounded">
                        D{{ index }}
                      </button>
                    </div>
                </div>
                <div class="flex-none justify-center w-full  hover:opacity-100 pb-3 pl-10 mt-4">
                    <div class="flex  items-center gap-4  pt-3 pr-10 w-full">
                      <div  class="border hover:bg-red-600  p-2 text-center cursor-pointer border-gray-700 rounded">
                        <div class="text-xl uppercase w-full">
                          Selecting
                        </div>
                        <hr>
                      <div class="text-xs">
                        22/44 Seats
                      </div>
                      </div>
                    </div>
                </div>
            </div> 
        </div>
      </div>
    </div>
  </div>

</template>