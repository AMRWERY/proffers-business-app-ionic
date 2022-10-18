<template>
  <ion-page>
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
  </ion-page>
</template>

<script >
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, 
    IonLabel, IonIcon, IonRouterOutlet, IonPage } from '@ionic/vue';
import { statsChart, settings, home } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonPage, IonTabBar, IonTabButton, IonTabs, 
    IonLabel, IonIcon, IonRouterOutlet },
  setup() {
    return {
      statsChart, 
      settings, 
      home,
    }
  }
});
</script>
