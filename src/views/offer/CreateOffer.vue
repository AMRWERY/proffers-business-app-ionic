<template>
    <ion-page>
        <HeaderTitleVue />
        <ion-content :fullscreen="true">
            <div class="discount-form" v-if="display_form">
                <h6>Create Discount Offer</h6>
                <form class="" @submit.prevent="() => display_form = false">
                    <ion-item>
                        <ion-label position="stacked">Discount Title</ion-label>
                        <ion-input placeholder="10% Discount above 499/- upto 100/-" required type="text"
                            v-model="discount_offer_data.tag_line"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">Discount %age</ion-label>
                        <ion-input required placeholder="10" type="number" v-model="discount_offer_data.min_value">
                        </ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">Min Purchase Amount</ion-label>
                        <ion-input required placeholder="499" type="number" v-model="discount_offer_data.min_purchase_amt">
                        </ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">Max Discount Amount</ion-label>
                        <ion-input required placeholder="100" type="number" v-model="discount_offer_data.max_discount_amt">
                        </ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">Valid From</ion-label>

                        <ion-input required placeholder="" type="date" v-model="discount_offer_data.valid_from">
                        </ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">Valid Until</ion-label>
                        <ion-input required placeholder="" type="date" v-model="discount_offer_data.valid_until">
                        </ion-input>
                    </ion-item>
                    <br>
                    <InputValidationText /><br>
                    <ion-button type="submit" shape="round">Next</ion-button>
                </form>
            </div>
            <div class="discount-preview" v-if="!display_form">
                <h3>Preview</h3>
                <ion-card>
                    <ion-item>
                        <ion-label id="card-label">
                            {{ discount_offer_data.tag_line }}
                        </ion-label>
                    </ion-item>
                    <ion-card-content id="card-content">
                        <ul style="list-style: none;">
                            <li>Discount <span style="color:black">{{ discount_offer_data.min_value }}%</span></li>
                            <li>Min Purchase Amt. <span style="color:black">{{ discount_offer_data.min_purchase_amt }}</span>
                            </li>
                            <li>Max Discount Amt. <span style="color:black">{{ discount_offer_data.max_discount_amt }}</span>
                            </li>
                            <li>Valid From <span style="color:black">{{ discount_offer_data.valid_from }}</span></li>
                            <li>Valid Until <span style="color:black">{{ discount_offer_data.valid_until }}</span></li>
                        </ul>
                    </ion-card-content>
                </ion-card>
                <ion-button type="submit" fill="outline" @click="() => display_form = true" shape="round">EDIT</ion-button>
                <ion-button type="submit" shape="round" @click="createDiscountOffer()">PUBLISH</ion-button>
            </div>
            <ion-fab vertical="bottom" horizontal="end" slot="fixed">
                <ion-fab-button @click="() => router.push('/tabs/tab2/')">
                    <ion-icon :icon="arrowBackCircle"></ion-icon>
                </ion-fab-button>
            </ion-fab>
        </ion-content>
    </ion-page>
</template>

<script setup>
import {
    IonPage,
    IonContent, IonItem, IonInput,
    IonLabel, IonButton, IonFab,
    IonFabButton, IonIcon, IonCard, IonCardContent
} from '@ionic/vue';
import {
    arrowBackCircle,
} from 'ionicons/icons';
import { reactive, ref } from 'vue';
import InputValidationText from '../../components/InputValidationText.vue';
import router from '../../router';
import Offer from '../../services/offer/offer';
import HeaderTitleVue from '../../components/HeaderTitle.vue';

const display_form = ref(true)
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
    "is_published": false,
})

async function createDiscountOffer() {
    discount_offer_data.is_published = true
    const response = await new Offer().createOffer(discount_offer_data)
    console.log(response)
    router.push('/offer/discount/')
}

// async function backButton() {
//     if (!display_form.value){
//         display_form.value = true
//     }
// }
</script>

<style>
.discount-form {
    width: 90%;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    /* top: 45%; */
    /* transform: translateY(-50%); */
    margin: 0 auto;
}

.discount-preview {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
}

#card-label {
    display: flex;
    justify-content: space-between;
}

#card-content ul {
    padding-inline-start: 0px !important;
}

#card-content ul li {
    display: flex;
    justify-content: space-between;
}
</style>