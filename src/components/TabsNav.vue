<template>
  <ion-footer>
    <ion-toolbar>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab1" href="/tabs/tab1">
            <ion-icon :icon="home" />
            <ion-label>Home</ion-label>
          </ion-tab-button>
          <!-- <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="statsChart" />
          <ion-label>Discount</ion-label>
        </ion-tab-button> -->
          <ion-tab-button tab="tab3" href="/tabs/tab3">
            <ion-icon :icon="settings" />
            <ion-label>Settings</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-toolbar>
  </ion-footer>
</template>

<script setup>
import {
  IonTabBar, IonTabButton, IonTabs,
  IonLabel, IonIcon, IonRouterOutlet,
  IonFooter, IonToolbar
} from '@ionic/vue';
import { home, settings } from 'ionicons/icons';

</script>