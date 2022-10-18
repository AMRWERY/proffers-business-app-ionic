<template>
    <ion-page>
        <HeaderTitleVue />
        <ion-content :fullscreen="true">
            <ion-list-header lines="full">
                <ion-label>Sales</ion-label>
            </ion-list-header>
            <ion-list>
                <div v-for="(sales, date) in date_eg" :key="date">
                    <ion-item>
                        <b>{{date}}</b>
                    </ion-item>
                    <!-- {{date_eg}} -->
                    <div v-for="sale in sales" :key="sale.id">
                        <ion-card>
                            <ion-item>
                                <ion-label id="card-label">
                                    Customer <span>{{sale.customer.user.mobile_no}}</span>
                                </ion-label>
                            </ion-item>
                            <ion-card-content id="card-content">
                                <ul style="list-style: none;">
                                    <li>Total Amount: <span>{{sale.total_amt}}</span></li>
                                    <li>Discount: <span>{{sale.discount_amt}}</span></li>
                                    <li>Final Amount: <span>{{sale.final_amt}}</span></li>
                                    <li>Date: <span>{{new Date(sale.created_at).toLocaleDateString()}}</span></li>
                                    <li>Time: <span>{{new Date(sale.created_at).toLocaleTimeString([], {hour: '2-digit',
                                    minute:'2-digit', hour12: true })}}</span></li>
                                </ul>
                            </ion-card-content>
                        </ion-card>
                    </div>
                </div>
            </ion-list>
            <ion-fab vertical="bottom" horizontal="end" slot="fixed">
                <ion-fab-button @click="() => router.push('/tabs/tab1')">
                    <ion-icon :icon="arrowBackCircle"></ion-icon>
                </ion-fab-button>
            </ion-fab>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import router from '../../router';

import {
    IonPage, IonContent, IonIcon, IonFab, IonFabButton,
    IonList, IonItem, IonLabel, IonListHeader,
    IonCard, IonCardContent, onIonViewWillEnter
} from '@ionic/vue';
import { arrowBackCircle } from 'ionicons/icons';

import HeaderTitleVue from '../../components/HeaderTitle.vue';
import Sale from '../../services/sale/createSale';
import { computed } from '@vue/reactivity';

const sales = ref([])

async function getSales() {
    const response = await new Sale().getSaleList()
    console.log(response.data.sales)
    sales.value = response.data.sales
}

const date_eg = computed(()=>{
    return sales.value.reduce((p,c) => {
      const date = new Date(c.created_at).toDateString();
      p[date] = p[date] || [];
      p[date].push(c);
      return p;
    }, {})
})

onIonViewWillEnter(() => {
    getSales()
});
</script>

<style>
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