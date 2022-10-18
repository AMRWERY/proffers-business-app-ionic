<template>
    <ion-page>
        <HeaderTitleVue />
        <ion-content :fullscreen="true">
            <ion-list>
                <ion-list-header lines="full">
                    <ion-label>Business Details</ion-label>
                </ion-list-header>
                <div>
                    <ion-list lines="none">
                        <ion-item>
                            <ion-label><b>Name</b><br>{{data.name}}</ion-label>
                            <ion-label></ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label><b>Type</b><br>{{type.name}}</ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label><b>Category</b><br>{{category.name}}</ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label><b>Mobile No</b><br>{{data.mobile_no}}</ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label><b>Email<br></b>{{data.email}}</ion-label>
                        </ion-item>
                    </ion-list>
                </div>
                <div>
                    <ion-list-header lines="full">
                        <ion-label>Business Address</ion-label>
                    </ion-list-header>
                    <ion-list lines="none">
                        <ion-item>
                            <ion-label>
                                {{address.address_line1}}<br>
                                {{address.address_line2}}<br>
                                {{city.name}} - {{state.name}}<br>
                                {{country.name}}<br>
                            </ion-label>
                        </ion-item>
                    </ion-list>
                </div>
            </ion-list>
            <ion-fab vertical="bottom" horizontal="end" slot="fixed">
                <ion-fab-button @click="() => router.push('/tabs/tab3')">
                    <ion-icon :icon="arrowBackCircle"></ion-icon>
                </ion-fab-button>
            </ion-fab>
        </ion-content>
        <TabsNavVue />

    </ion-page>
</template>

<script setup>
import {
    IonPage, IonContent, IonFab, IonFabButton, IonIcon,
    IonList, IonLabel, IonListHeader, IonItem
} from '@ionic/vue';
import HeaderTitleVue from '@/components/HeaderTitle.vue';
import TabsNavVue from '@/components/TabsNav.vue';
import { arrowBackCircle } from 'ionicons/icons';
import router from '../../router';
import Business from '../../services/business/business';
import { ref } from 'vue';

const data = ref({})
const type = ref({})
const category = ref({})
const address = ref({})
const city = ref({})
const state = ref({})
const country = ref({})

async function getBusiness() {
    const response = await new Business().getBusiness()
    console.log(response.data)
    data.value = response.data
    type.value = response.data.type
    category.value = response.data.category
    address.value = response.data.address[0]
    city.value = response.data.address[0].city
    state.value = response.data.address[0].state
    country.value = response.data.address[0].country
}

getBusiness()

</script>

<style>


#list-content ul {
    padding-inline-start: 0px !important;
}

#list-content ul li {
    display: flex;
    justify-content: space-between;
}
</style>