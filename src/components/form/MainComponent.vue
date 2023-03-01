<template>
    <ion-nav :root="component"></ion-nav>
</template>
  
<script>
import { IonNav } from '@ionic/vue';
import PageOne from './PageOne.vue';

export default {
    components: { IonNav },
    data() {
        return {
            component: PageOne,
        };
    },
};
</script>