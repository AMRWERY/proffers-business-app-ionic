<template>
    <ion-page>
        <HeaderTitleVue />
        <ion-content>
            <form class="discount-form" @submit.prevent="() => openModal()">
                <h6>Create Discount Offer</h6>
                <ion-item>
                    <ion-label position="floating">Discount Title</ion-label>
                    <ion-input placeholder="" required type="text"
                        v-model="discount_offer_data.tag_line"></ion-input>
                    <ion-note slot="helper">e.g. 10% Discount above 499/- upto 100/-</ion-note>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Discount %age</ion-label>
                    <ion-input required type="number" placeholder="" v-model="discount_offer_data.min_value"></ion-input>
                    <ion-note slot="helper">e.g. 10%</ion-note>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Min Purchase Amount</ion-label>
                    <ion-input required placeholder="499" type="number" v-model="discount_offer_data.min_purchase_amt">
                    </ion-input>
                    <ion-note slot="helper">e.g. 499/-</ion-note>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Max Discount Amount</ion-label>
                    <ion-input required placeholder="100" type="number" v-model="discount_offer_data.max_discount_amt">
                    </ion-input>
                    <ion-note slot="helper">e.g. 100/-</ion-note>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Description</ion-label>
                    <ion-textarea placeholder="Type something here" v-model="discount_offer_data.description"></ion-textarea>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Terms & Conditions</ion-label>
                    <ion-textarea placeholder="Type something here" v-model="discount_offer_data.t_and_c"></ion-textarea>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Valid From</ion-label>
                    <ion-input required placeholder="" type="date" v-model="discount_offer_data.valid_from">
                    </ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Valid Until</ion-label>
                    <ion-input required placeholder="" type="date" v-model="discount_offer_data.valid_until">
                    </ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="">Image</ion-label>
                    <ion-input required ref="image" name="image" accept=".jpeg, .png, .jpg" type="file" v-model="discount_offer_data.offer_image"></ion-input>
                </ion-item>
                <ion-item>
                    <input @change="getFile" type="file" ref="fileBtn"/>
                </ion-item>
                <InputValidationText /><br>
                <ion-button type="submit" shape="round">Next</ion-button>
            </form>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { ref, reactive } from 'vue';

import { IonPage, IonContent, IonItem, IonInput,
    IonLabel, IonButton, IonNote, IonTextarea } from '@ionic/vue';
import HeaderTitleVue from '../../../components/HeaderTitle.vue';
import InputValidationText from '../../../components/InputValidationText.vue';
// import Offer from '../../../services/offer/offer'


const discount_offer_data = reactive({
    "business": "", // from local db
    "offer_type": 0, // 0 for discount type offer
    "unit": 0, // 0 for %age unit type
    "tag_line": "",
    "description": "",
    "t_and_c": "",
    "min_value": "",
    "valid_from": "",
    "valid_until": "",
    "min_purchase_amt": "",
    "max_discount_amt": "",
    "offer_image":"",
    "is_published": false,
})


const fileInfo = ref(null)
const getFile = (event) => {
    console.log(event.target.files);
    fileInfo.value= event.target.files[0];
};

// async function createOffer(){
//     const response = await new Offer().createOffer(dis)
// }

// async function openModal() {
//     const modal = await modalController.create({
//         component: require('@/components/OfferDetailModal.vue').default,
//         componentProps: {
//             "TagLine":discount_offer_data.tag_line,
//             "offerImage": discount_offer_data.offer_image,
//             "offerType": "Discount",
//             "validUntil":discount_offer_data.valid_until,
//             "description":discount_offer_data.description,
//             "t_and_c":discount_offer_data.t_and_c,
//         },
//         initialBreakpoint: 1,
//         showBackdrop: true,
//         canDismiss: true,
//         handle: true,
//         keyboardClose: true,
//     });
//     return await modal.present();
// }

</script>

<style>
.discount-form {
    width: 98%;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    /* top: 45%; */
    /* transform: translateY(-50%); */
    margin: 0 auto;
}
</style>