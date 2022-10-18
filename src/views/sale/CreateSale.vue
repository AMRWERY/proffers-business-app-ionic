<template>
    <ion-page>
        <HeaderTitleVue />
        <ion-content :fullscreen="true">
            <div v-if="display_form">
                <ion-searchbar placeholder="Search Customer" @ionChange="handleSearch($event)" :debounce="600">
                </ion-searchbar>
                <ion-item v-if="search_result.text">
                    <ion-label>{{search_result.text}}</ion-label>
                </ion-item>
                <ion-list v-if="search_result.results">
                    <div v-for="result in search_result.results" :key="result.cus_mobile_no">
                        <ion-item v-on:click="populateForm(result.name, result.cus_mobile_no)">
                            <ion-label>{{result.name}}</ion-label>
                        </ion-item>
                    </div>
                </ion-list>
            </div>
            <div class="sale-form" v-if="display_form">
                <h6>Create Sale</h6>
                <form class="" @submit.prevent="createSale">
                    <ion-item counter="true">
                        <ion-label position="floating">Mobile Number</ion-label>
                        <ion-input v-model="sale_data.cus_mobile_no" @keypress="onlyNumber($event)" type="tel"
                            inputmode="tel" maxlength="10" required v-on:ion-change="GetUserStatus">
                        </ion-input>
                        <ion-note slot="helper">{{mobileInputNote}}</ion-note>
                    </ion-item>
                    <ion-item>
                        <ion-label position="floating">Name</ion-label>
                        <ion-input v-model="sale_data.cus_name"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="floating">Note</ion-label>
                        <ion-textarea v-model="sale_data.sale_note"></ion-textarea>
                    </ion-item>
                    <ion-item>
                        <ion-label position="fixed">Total Amt.</ion-label>
                        <ion-input @ion-change="calculateTotal()" required type="number" v-model="sale_data.total_amt">
                        </ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="fixed">Discount</ion-label>
                        <ion-input @ion-change="calculateTotal()" type="number" v-model="sale_data.discount_amt">
                        </ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="fixed">Total</ion-label>
                        <ion-input v-model="sale_data.final_amt" disabled></ion-input>
                    </ion-item>
                    <br>
                    <InputValidationText /><br>
                    <ion-spinner name="circular" v-if="loading"></ion-spinner>
                    <ion-button type="submit" v-if="!loading" shape="round">Create</ion-button>
                </form>
            </div>
            <div class="sale-complete" v-if="!display_form">
                <img width="100" src="../../../public/assets/gifs/done.gif">
                <div>
                    <ion-label>Sale Created!</ion-label>
                </div>
                <ion-item-divider></ion-item-divider>
                <div class="sale-details">
                    <ul>
                        <li>Customer <span>{{sale_data.cus_mobile_no}}</span></li>
                        <li>Total Amount <span>{{sale_data.total_amt}}</span></li>
                        <li>Discount <span>{{sale_data.discount_amt}}</span></li>
                        <ion-item-divider></ion-item-divider><br>
                        <li>Final Amount <span>{{sale_data.final_amt}}</span></li>
                    </ul>
                </div>
                <ion-button shape="round" @click="backRoute()" fill="outline">OK</ion-button>
            </div>
            <ion-fab vertical="bottom" horizontal="end" slot="fixed">
                <ion-fab-button @click="backRoute()">
                    <ion-icon :icon="arrowBackCircle"></ion-icon>
                </ion-fab-button>
            </ion-fab>
        </ion-content>
    </ion-page>
</template>

<script setup>
import {
    IonPage, IonNote, IonSearchbar,
    IonContent, IonItem, IonInput,
    IonLabel, IonButton, IonTextarea, IonFab,
    IonFabButton, IonIcon, IonItemDivider,
    IonList, IonSpinner
} from '@ionic/vue';
import {
    arrowBackCircle,
} from 'ionicons/icons';
import { reactive, ref } from 'vue';
import InputValidationText from '../../components/InputValidationText.vue';
import CommonUtils from '../../utils/commonUtils';
import router from "../../router";
import Sale from '../../services/sale/createSale';
import HeaderTitleVue from '@/components/HeaderTitle.vue';


const search_result = reactive({
    "results": [],
    "text": null
})

async function handleSearch($event) {
    // get search results from backend
    if ($event.target.value.trim().length > 0) {
        const response = await new Sale().searchCustomer($event.target.value)
        if (response.length === 0) {
            search_result.text = "No result found";
        }
        search_result.results = response;
    } else {
        search_result.results = []
        search_result.text = null
    }
}

async function populateForm(name, mobile_no) {
    sale_data.cus_mobile_no = mobile_no;
    sale_data.cus_name = name;
}


const mobileInputNote = ref("")
const cusStatus = reactive({
    "status": "",
    "cus_sale_count": "",
    "cus_sale_value": "",
})
async function GetUserStatus() {
    if (sale_data.cus_mobile_no.length === 10) {
        const response = await new Sale().getSaleStatus(sale_data.cus_mobile_no)
        if (response.code === 200) {
            cusStatus.status = response.data.status;
            console.log(response)
            if (cusStatus.status) {
                cusStatus.cus_sale_count = response.data.cus_sale_count;
                cusStatus.cus_sale_value = response.data.cus_sale_value;
                sale_data.cus_name = response.data.cus_name;
                mobileInputNote.value = `Count: ${cusStatus.cus_sale_count}, Value: ${cusStatus.cus_sale_value}`

            } else {
                mobileInputNote.value = "New customer"
            }
        }
        else {
            console.log(response)
        }
    } else {
        mobileInputNote.value = ""
        sale_data.cus_name = ""
    }
}
function onlyNumber($event) {
    new CommonUtils().onlyNumber($event)
}
function calculateTotal() {
    sale_data.final_amt = sale_data.total_amt - sale_data.discount_amt
}
function backRoute() {
    display_form.value = true
    sale_data.cus_mobile_no = ""
    sale_data.business = ""
    sale_data.total_amt = ""
    sale_data.discount_amt = ""
    sale_data.final_amt = ""
    sale_data.sale_note = ""
    sale_data.cus_name = ""


    cusStatus.status = ""
    mobileInputNote.value = ""
    search_result.results = []
    loading.value = false

    router.push("/tabs/tab1")
}

const display_form = ref(true)
const sale_data = reactive({
    "cus_mobile_no": "",
    "total_amt": "",
    "discount_amt": "",
    "final_amt": "",
    "sale_note": "",
    "business": "",
    "cus_name": ""
})
const ResponseMsg = ref("")
const loading = ref(false)
async function createSale() {
    loading.value = true;

    if (sale_data.discount_amt === "") {
        sale_data.discount_amt = 0
    }
    const response = await new Sale().createSale(sale_data);
    if (response.code === 200) {
        display_form.value = false
    } else {
        loading.value = false
        ResponseMsg.value = response
    }
}

</script>

<style>
.sale-form {
    width: 90%;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    /* top: 10%; */
    /* transform: translateY(-50%); */
    margin: 0 auto;
    /* margin-top: 40px; */
}

.sale-complete {
    width: 90%;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 40%;
    transform: translateY(-50%);
    margin: 0 auto;
}

.sale-details {
    text-align: left;
}

.sale-details ul {
    padding-inline-start: 0px !important;
}

.sale-details ul li {
    display: flex;
    justify-content: space-between;
}
</style>