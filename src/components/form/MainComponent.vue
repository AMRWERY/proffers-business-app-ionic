<template>
    <ion-nav :root="component"></ion-nav>
</template>
  
<script setup>
import { IonNav } from '@ionic/vue';
import PageOne from './PageOne.vue';
import { ref } from 'vue';

const component = ref(PageOne, IonNav);
</script>