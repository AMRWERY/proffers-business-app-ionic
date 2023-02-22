<template>
    <ion-page>
        <HeaderTitleVue />
        <ion-content :fullscreen="true">
            <div class="business-profile">
                <!-- <div class="business-header">
          <ion-icon :icon="business" size="large"></ion-icon>
          <ion-label>
            Settings
          </ion-label>
        </div> -->
                <div class="business-header">
                    <ion-grid>
                        <ion-row>
                            <ion-col size="4">
                                <ion-img src="/assets/images/3873446.jpg"></ion-img>
                            </ion-col>
                            <ion-col>
                                <ion-text>
                                    <h5>Business Name</h5>
                                </ion-text>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </div>
                <div class="business-list">
                    <ion-list>
                        <ion-item href="/business/details/">
                            <ion-label>Business Details</ion-label>
                            <!-- <ion-icon :icon="chevronForward"></ion-icon> -->
                        </ion-item>
                        <ion-item href="/auth/logout/">
                            <ion-label>Logout</ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>To update business details 
                                <br> Contact - uttam11.velani11@gmail.com
                            </ion-label>
                        </ion-item>
                    </ion-list>
                </div>
                <div class="contact-us">
                    
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import {
    IonPage, IonContent, IonImg, IonText,
    IonLabel, IonList, IonItem, IonGrid, IonRow, IonCol
} from '@ionic/vue';

import HeaderTitleVue from '../components/HeaderTitle.vue';
// import {  business } from 'ionicons/icons';

</script>

<style>
.business-header {
    /* display: flex; */
    /* padding-left: 20px; */
    padding-top: 20px;
}
/* 
.business-header ion-label {
    margin-left: 20px;
    margin-top: 10px;
} */

/* .business-list {
    margin-top: 20px;
} */

.contact-us {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 60%;
    transform: translateY(-50%);
    margin: 0 auto;
}

.business-header ion-col ion-img{
    border: 2px solid gray;
    border-radius: 50%;
    width: 100px;
    max-width: 100%;
    overflow: hidden;
}
</style>