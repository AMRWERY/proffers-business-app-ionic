<template>
    <ion-page>
        <HeaderTitleVue />
        <ion-content :fullscreen="true">
            <div class="content">
                <h5>Running Discount Offer</h5>
                <br>
                <ion-card>
                    <ion-card-header>
                        <ion-card-title id="card-title">{{offer_data.tag_line}}</ion-card-title>
                    </ion-card-header>
                    <ion-card-content id="card-content">
                        <ul style="list-style: none;">
                            <li>Discount <span style="color:black">{{offer_data.min_value}}%</span></li>
                            <li>Min Purchase Amt. <span style="color:black">{{offer_data.min_purchase_amt}}</span></li>
                            <li>Max Discount Amt. <span style="color:black">{{offer_data.max_discount_amt}}</span></li>
                            <li>Valid From <span style="color:black">{{offer_data.valid_from}}</span></li>
                            <li>Valid Until <span style="color:black">{{offer_data.valid_until}}</span></li>
                        </ul>
                    </ion-card-content>
                </ion-card>
                <ion-button color="danger" type="submit" fill="outline" 
                    @click="unpublishOffer()" shape="round">
                    <ion-icon slot="start" :icon="trashBin"></ion-icon>
                    REMOVE
                </ion-button>
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
    IonPage, IonCard, IonCardHeader, IonCardTitle,
    IonCardContent, IonContent, IonFab,
    IonFabButton, IonIcon, IonButton
} from '@ionic/vue';

import {
    arrowBackCircle,
    trashBin
} from 'ionicons/icons';

import { ref } from 'vue';
import router from '../../router';
import Offer from '../../services/offer/offer';
import HeaderTitleVue from '../../components/HeaderTitle.vue';

const offer_data = ref({
    "tag_line": "",
    "min_value": "",
    "min_purchase_amt": "",
    "max_discount_amt": "",
    "valid_from": "",
    "valid_until": "",
    "offer_id": ""
})

async function getDiscountOffer() {
    const params = { "offer_type": "discount" }
    const response = await new Offer().getOfferStatus(params)
    if (response.code === 200) {
        console.log(response)
        offer_data.value.offer_id = response.data.id,
        offer_data.value.tag_line = response.data.tag_line,
        offer_data.value.min_value = response.data.min_value,
        offer_data.value.min_purchase_amt = response.data.min_purchase_amt,
        offer_data.value.max_discount_amt = response.data.max_discount_amt,
        offer_data.value.valid_from = response.data.valid_from.split("T")[0],
        offer_data.value.valid_until = response.data.valid_until.split("T")[0]
    }
}

getDiscountOffer()

async function unpublishOffer() {
    const response1 = await new Offer().unpublishOffer(offer_data.value.offer_id)
    if (response1.code === 200){
        router.push("/tabs/tab2")
    }
}

</script>

<style scoped>
.content {
    width: 90%;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 45%;
    transform: translateY(-50%);
    margin: 0 auto;
}

#card-title {
    font-size: medium;
    text-align: left;
}


#card-content ul {
    padding-inline-start: 0px !important;
}

#card-content ul li {
    display: flex;
    justify-content: space-between;
}
</style>