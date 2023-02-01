<script setup>
import { ref } from 'vue'

import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

const tabs = ref([

    {
      title:'Home', id: 0,  to: '/',
    },
    {
      title:'My ticket', id: 3, to: '/tickets'
    },
    {
      title:'admin', id: 4, to: '/admin'
    }
]);
</script>

<template>
  <Navbar :tabs="tabs"/>
<div class="h-full w-full">
  <router-view/>
</div>
<Footer :tabs="tabs"/>
</template>
