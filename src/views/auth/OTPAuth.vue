<template>
    <ion-page>
        <HeaderTitleVue />
        <ion-content :fullscreen="true">
            <div class="container">
                <div class="input">
                    <form @submit.prevent="sendOtp()">
                        <ion-item>
                            <ion-label position="floating">Enter Mobile Number</ion-label>
                            <ion-input @keypress="onlyNumber($event)" v-model="mobileNo" type="tel" inputmode="tel"
                                maxlength="10">
                            </ion-input>
                        </ion-item>
                        <InputValidationText :text=validationMsg /><br>
                        <ion-button type="submit" shape="round">VERIFY</ion-button>
                    </form>
                </div>
                <div>
                    <h6>To register business contact</h6>
                    <p>+91 8200055728</p>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { ref } from 'vue'
import { IonPage, IonContent, IonInput, IonButton, IonItem, IonLabel } from '@ionic/vue';
import InputValidationText from '../../components/InputValidationText.vue';
import HeaderTitleVue from '../../components/HeaderTitle.vue';
import CommonUtils from '../../utils/commonUtils';
import router from "../../router";

const mobileNo = ref('')
const validationMsg = ref("")

function onlyNumber($event) {
    new CommonUtils().onlyNumber($event)
}

async function sendOtp() {
    if (mobileNo.value.length !== 10) {
        return validationMsg.value = "10 digit mobile number is required!"
    }
    else {
        router.push({
                path: '/auth/validate-otp/',
                query: {
                    "mobileNo": mobileNo.value
                }
            })
    }
}

// async function sendOtp() {
//     if (mobileNo.value.length !== 10) {
//         return validationMsg.value = "10 digit mobile number is required!"
//     }
//     else {
//         // send otp to backend
//         const response = await new OTPAuth().generateOTP(mobileNo.value)
//         if (response.code === 200) {
//             validationMsg.value = ""
//             // redirect to otp input
//             router.push({
//                 path: '/auth/validate-otp/',
//                 query: {
//                     "mobileNo": mobileNo.value
//                 }
//             })
//         }
//         else {
//             validationMsg.value = response.data
//         }
//     }
// }

</script>
  
<style scoped>
.container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 90%;
    margin: 0 auto;
}
</style>
    