<template>
    <ion-page></ion-page>
</template>

<script setup>
import { onMounted } from 'vue'
import { IonPage } from '@ionic/vue';
import TokenService from "../../utils/TokenService"
import router from "../../router";

// get token from local storage ? get business : do auth
onMounted(async () => {
    const token = await TokenService.getToken()

    if (token === null){
        router.push({
            name:"generate-otp"
        })
    } else if (token !== null){
        const user = await TokenService.getUser()
        console.log(user)
        if (user.business.length === 0){
           router.push({
                name:"generate-otp"
           })
        } else if (user.business.length === 1) {
            if (user.business[0].address.length === 0){
                router.push({
                    path:"/tabs/tab1"
                })
            }else {
                router.push({
                    path:"/tabs/tab1"
                })
            }
        } else {
            router.push({
                path:"/tabs/tab2"
            })
        }
    }
    else {
        console.log("c")
        // redirect to auth
        router.push({
            name:"generate-otp"
        })
    }
})
// onUpdated
</script>
