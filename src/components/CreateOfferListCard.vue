<template>
    <ion-card>
        <ion-item>
            <ion-label>{{props.OfferLabel}}</ion-label>
            <ion-button fill="outline" slot="end" @click="formRedirect()">
                CREATE
            </ion-button>
        </ion-item>
        <ion-card-content>
            {{props.OfferDescription}}
        </ion-card-content>
    </ion-card>
</template>

<script setup>
import {IonCard, IonItem, IonLabel, IonButton, IonCardContent} from '@ionic/vue';
import { defineProps } from 'vue';
import router from "../router"


const props = defineProps([
    "OfferLabel", "OfferDescription", "OfferFormEndpoint"
])

async function formRedirect() {
    // redirect to offer create form according to endpoint form db
    router.push(props.OfferFormEndpoint)
}


</script>

<style>

</style>