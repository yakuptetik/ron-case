<template>
        <div class="pl-10">
        <div class="mt-10" >
          <div class="text-white text-3xl uppercase border-l-4 border-red-800 pl-3">
            select showtime
          </div>
        </div>
        <div class="mt-4">
            <div class="flex-none hover:opacity-100 pb-3 pl-10 mt-4">
              <div class="text-white text-xl uppercase">
                  2d ımax
                </div>
                <div class="flex  items-center gap-4  pt-3 pr-10">
                  <div  v-for="index in 5" class="border hover:bg-red-600  p-2 text-center cursor-pointer border-gray-700 rounded">
                    <div class="text-xl">10:00 am</div>
                    <hr>
                  <div class="text-xs">22/44 Seats</div>
                  </div>
                </div>
            </div>
            <div class="flex-none hover:opacity-100 pb-3 pl-10 mt-6">
              <div class="text-white text-xl uppercase">
                  3d Standart
                </div>
                <div class="flex  items-center gap-4  pt-3 pr-10">
                  <div  v-for="index in 4" class="border hover:bg-red-600  p-2 text-center cursor-pointer border-gray-700 rounded">
                    <div class="text-xl">10:00 am</div>
                    <hr>
                  <div class="text-xs">22/44 Seats</div>
                  </div>
                </div>
            </div>
        </div>  
      </div>
</template>