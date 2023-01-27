<script setup>

import CategoryItem from '../components/CategoryItem.vue';
import BannerSlider from '../components/sliders/BannerSlider.vue'
import NewMoviesCategory from '../components/sliders/NewMoviesCategory.vue';



</script>

<template>
<div>
  <BannerSlider/>
  <CategoryItem categoryTitle="top in the box office"/>
  <div class="pl-24">
    <NewMoviesCategory categoryTitle="New Showing"/>
  </div>
  <CategoryItem categoryTitle="coming soon"/>
</div>
</template>