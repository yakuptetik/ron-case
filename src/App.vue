<script setup>
import { ref } from 'vue'
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

const tabs = ref([
    
    {
      title:'Home', id: 0,  to: '/',
    },
    {
      title:'Movies', id: 3, to: '/details'
    },
    {
      title:'My ticket', id: 3, to: '/tickets'
    }
]);
</script>

<template>
  <Navbar :tabs="tabs"/>
<div>
  <router-view/>
</div>
<Footer :tabs="tabs"/>
</template>
