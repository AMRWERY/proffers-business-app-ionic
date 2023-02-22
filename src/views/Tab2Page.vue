<template>
    <ion-page>
        <HeaderTitleVue />
        <ion-content :fullscreen="true">
            <ion-list-header lines="full">
                <ion-label>Create Offer</ion-label>
            </ion-list-header>
            <div class="create-offer-form">
                <form @submit.prevent="submitForm">
                    <ion-item>
                        <ion-label position="floating">Tagline</ion-label>
                        <ion-input v-model="formData.tagline"></ion-input>
                    </ion-item>

                    <ion-item>
                        <ion-label position="floating">Description</ion-label>
                        <ion-textarea v-model="formData.description"></ion-textarea>
                    </ion-item>

                    <ion-item>
                        <ion-label position="floating">Term and Condition</ion-label>
                        <ion-textarea v-model="formData.term_and_condition"></ion-textarea>
                    </ion-item>

                    <ion-item>
                        <ion-label position="floating">Offer Type</ion-label>
                        <ion-select v-model="formData.offertype">
                            <ion-select-option value="discount">Discount</ion-select-option>
                            <ion-select-option value="buy_one_get_one">Buy One Get One</ion-select-option>
                            <ion-select-option value="free_shipping">Free Shipping</ion-select-option>
                        </ion-select>
                    </ion-item>

                    <ion-item>
                        <ion-label position="fixed">Image</ion-label>
                        <br>
                        <input type="file" @change="handleImageChange" accept="image/*" />
                    </ion-item>

                    <ion-item>
                        <ion-label position="fixed">Valid From</ion-label>
                        <ion-input required placeholder="" type="date" v-model="formData.valid_from"></ion-input>
                    </ion-item>

                    <ion-item>
                        <ion-label position="fixed">Valid Till</ion-label>
                        <ion-input required placeholder="" type="date" v-model="formData.valid_till"></ion-input>
                    </ion-item>
                    <ion-button type="submit" expand="block">Submit</ion-button>
                </form>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import {
    IonPage, IonContent, IonListHeader,
    IonLabel,
    onIonViewWillEnter,
    IonButton,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonItem,
    IonInput,
} from '@ionic/vue';
import HeaderTitleVue from '../components/HeaderTitle.vue';
import { reactive, ref } from 'vue';
// import router from "../router";
import Offer from '../services/offer/offer';


const offer_list = reactive({
    "discount": { "status": false },
    "offers": {}
})

const formData = ref({
    tagline: "",
    description: "",
    term_and_condition: "",
    image: "",
    offertype: "",
    valid_from: "",
    valid_till: ""
});

const handleImageChange = (event) => {
    formData.value.image = event.target.files[0];
}

const submitForm = () => {
    // handle form submission
}

// async function checkRedirect() {
//     if (offer_list.discount.status) {
//         router.push('/offer/discount/')
//     } else {
//         router.push('/offer/create/discount/')
//     }
// }

// get offer types
async function getOfferTypes() {
    const response = await new Offer().offerTypeList()
    if (response.code == 200) {
        offer_list.offers = response.data
    }
    console.log(offer_list.offers)
}

// async function getStatus() {
//     const response = await new Offer().getOfferStatus()
//     offer_list.discount.status = response.data.offer_status.discount
// }

// https://ionicframework.com/docs/vue/lifecycle
onIonViewWillEnter(() => {
    getOfferTypes()
});

</script>

<style>
.create-offer-form {
    padding: 15px;
}
.create-offer-form ion-item{
    padding-top: 10px;
}
.create-offer-form ion-button{
    margin-top: 20px;
}
</style>
