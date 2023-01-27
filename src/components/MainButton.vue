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
    <button class="flex items-center justify-center relative text-sm">
      <div :class="{'w-20 h-12': bigSize,
                  'w-32 h-[55px]': largeSize 
                  }" 
            class="btn h-9 w-[60px]"
          >
          <!-- boş div -->
      </div>
      <div :class="{'text-lg': textSizelg,'text-2xl': textSizexl}"
            class="absolute h-10  z-20 flex items-center justify-center uppercase"
          >
          {{ buttonName }}
      </div>
      <div :class="{'w-20 h-12': bigSize,'w-32 h-[55px]': largeSize}"
            class="btn rotate-180 w-[60px] h-9">
          <!-- boş div -->
      </div>
    </button>
</template>

<style>
.btn {
  background:linear-gradient(135deg, transparent 10%, #ed3833 1%);
}
</style>
