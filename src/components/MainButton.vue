<script setup>
const props = defineProps({
  buttonName:String,
  bigSize: Boolean,
  largeSize:Boolean,
  textSizelg:Boolean,
  textSizexl:Boolean

})
</script>

<template>
    <button class="flex items-center btn justify-center relative text-sm px-3 " :class="{'px-4 py-2': bigSize, 'px-5 py-2': largeSize }">
        <div :class="{'text-lg': textSizelg,'text-2xl': textSizexl}" class="h-10 z-20 flex items-center justify-center uppercase">
          {{ buttonName }}
      </div>
    </button>
</template>

<style>
.btn {
  background: linear-gradient(135deg, transparent 12px, red 13px) top left, 
              linear-gradient(-45deg, transparent 12px, red 13px) bottom right;
    background-size: 100% 50%;
    background-repeat: no-repeat;
}
</style>
