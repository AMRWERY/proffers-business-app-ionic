<template>
<ion-page></ion-page>
</template>
<script setup>
import { IonPage } from '@ionic/vue';
import { onMounted } from 'vue'
import TokenService from "../../utils/TokenService"
import router from "../../router";


onMounted(async () => {
    await TokenService.EraseData();
    router.push({name:"generate-otp"})
})

</script>