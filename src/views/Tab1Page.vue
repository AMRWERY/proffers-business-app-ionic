<template>
    <ion-page>
        <HeaderTitleVue />
        <ion-content :fullscreen="true">
            <ion-card>
                <ion-card-header>
                    <ion-card-title>Welcome!</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    Analytics coming soon...
                </ion-card-content>
                <canvas id="planet-chart"></canvas>
            </ion-card>
            <ion-list-header lines="full">
                <ion-label>Running Offers</ion-label>
            </ion-list-header>
            <div class="offer-listing">
                <div class="offers" v-if="showOffers">
                    <div class="card-listing" v-for="offer in businessOffers" :key="offer.id"
                        @click="openModal(offer.id, offer.offer_type_label, offer.business_address, offer.business_name, offer.business_logo)">
                        <OfferListCard :offerType="offer.offer_type_label" :offerTagLine="offer.tag_line"
                            :offerImage="offer.offer_image" />
                    </div>
                </div>
            </div>
            <!-- <ion-fab vertical="bottom" horizontal="end" slot="fixed">
                <ion-fab-button @click="() => router.push('/sale/create')">
                    <ion-icon :icon="add"></ion-icon>
                </ion-fab-button>
            </ion-fab> -->
        </ion-content>
    </ion-page>
</template>

<script setup>
import { onMounted, ref } from 'vue';
// import router from "../router";
import {
    IonPage, IonCardHeader, IonCardTitle,
    IonContent, 
    // IonFab, IonFabButton, IonIcon,
    IonCard, IonCardContent
} from '@ionic/vue';
// import { add, } from 'ionicons/icons';
import HeaderTitleVue from '../components/HeaderTitle.vue';
import OfferListCard from '../components/OfferListCard.vue';
import Offer from "../services/offer/offer.js"

import { Chart } from 'chart.js';

const businessData = ref({})
const businessOffers = ref(null)
const businessCoupons = ref(null)
const businessAddress = ref(null)
const businessCity = ref({})
const businessState = ref({})
const businessCategory = ref({})
const businessType = ref({})
const businessGMapUrl = ref("")
const showOffers = ref(true)

async function getProfileData() {
    const response = await new Offer().getBusinessProfile()
    if (response.code === 200) {
        businessData.value = response.data.business_data
        if (response.data.business_data.address.length != 0) {
            businessAddress.value = response.data.business_data.address[0]
            businessCity.value = response.data.business_data.address[0].city
            businessState.value = response.data.business_data.address[0].state
            businessGMapUrl.value = response.data.business_data.address[0].g_map_url
        }
        businessCategory.value = response.data.business_data.category
        businessType.value = response.data.business_data.type
        businessOffers.value = response.data.offers
        businessCoupons.value = response.data.coupons
    }
}


const planetChartData = {
    type: "bar",
    data: {
        labels: ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "Offer Views",
                data: [10, 20, 23, 21, 11, 32, 11],
                backgroundColor: "#3880ff",
                borderColor: "#3880ff",
                borderWidth: 3
            },
        ]
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        padding: 25
                    }
                }
            ]
        }
    }
};

onMounted(() => {
    const ctx = document.getElementById('planet-chart');
    new Chart(ctx, planetChartData);
})
getProfileData()
</script>

<style>
.offer-listing {
    padding: 15px;
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