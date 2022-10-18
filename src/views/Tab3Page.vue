<template>
  <ion-page>
    <HeaderTitleVue />
    <ion-content :fullscreen="true">
      <div class="business-profile">
        <div class="business-header">
          <ion-icon :icon="business" size="large"></ion-icon>
          <ion-label>
            Settings
          </ion-label>
        </div>
        <div class="business-list">
          <ion-list>
            <ion-item href="/business/details/">
              <ion-label>Business Details</ion-label>
              <!-- <ion-icon :icon="chevronForward"></ion-icon> -->
            </ion-item>
          </ion-list>
            <ion-item href="/auth/logout/">
              <ion-label>logout</ion-label>
            </ion-item>
        </div>
        <div class="contact-us">
          <ion-label>Contact</ion-label><br>
          <ion-label>uttam11.velani11@gmail.com</ion-label><br>
          <ion-label>to update business details</ion-label>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage, IonContent,
  IonLabel, IonList, IonItem, IonIcon
} from '@ionic/vue';

import HeaderTitleVue from '../components/HeaderTitle.vue';
import {  business } from 'ionicons/icons';

</script>

<style>
.business-header {
  display: flex;
  padding-left: 20px;
  padding-top: 20px;
}

.business-header ion-label {
  margin-left: 20px;
  margin-top: 10px;
}

.business-list {
  margin-top: 20px;
}

.contact-us {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 60%;
  transform: translateY(-50%);
  margin: 0 auto;
}
</style>