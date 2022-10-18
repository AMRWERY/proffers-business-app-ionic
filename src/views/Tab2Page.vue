<template>
    <ion-page>
        <HeaderTitleVue />
        <ion-content :fullscreen="true">
            <ion-list-header lines="full">
                <ion-label>Manage Offers</ion-label>
            </ion-list-header>
            <ion-card>
                <ion-item>
                    <ion-label>Discount Offer</ion-label>
                    <ion-button fill="outline" slot="end" @click="checkRedirect()">
                        {{ !offer_list.discount.status ? "START" : "VIEW"}}
                    </ion-button>
                </ion-item>
                <ion-card-content>
                    Discount offer gives flat discount on purchase.
                    Example: 15% off on purchase above 499/-
                </ion-card-content>
            </ion-card>
            <ion-card>
                <ion-item>
                    <ion-label>Buy X Get X</ion-label>
                    <ion-button fill="" slot="end">
                        coming soon
                    </ion-button>
                </ion-item>
                <ion-card-content>
                    Create offer like Buy 1 Get 1 Free!
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script setup>
import {
    IonPage, IonContent, IonListHeader,
    IonCard, IonItem, IonLabel, IonButton, IonCardContent,
    onIonViewWillEnter
} from '@ionic/vue';
import HeaderTitleVue from '../components/HeaderTitle.vue';
import { reactive } from 'vue';
import router from "../router";
import Offer from '../services/offer/offer';

const offer_list = reactive({
    "discount": { "status": false }
})

async function checkRedirect() {
    if (offer_list.discount.status) {
        router.push('/offer/discount/')
    } else {
        router.push('/offer/create/')
    }
}

async function getStatus() {
    const response = await new Offer().getOfferStatus()
    offer_list.discount.status = response.data.offer_status.discount
}

// https://ionicframework.com/docs/vue/lifecycle
onIonViewWillEnter(() => {
    getStatus()
});

</script>
