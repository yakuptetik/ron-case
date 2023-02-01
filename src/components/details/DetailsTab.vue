
<script setup>
const props =  defineProps({
    desc: String,
    title: String,
    image:URL,

})

</script>

<template>
          <div class="">
          <img class="h-[250px]" :src="image" alt="">
        </div>
        <div class="w-1/2">
          <div class="uppercase text-4xl pb-3">
            {{ title }}
          </div>
          <div>
            {{ desc }}
          </div>
        </div>
</template>