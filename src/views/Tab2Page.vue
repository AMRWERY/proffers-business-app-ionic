<template>
    <ion-page>
        <ion-header>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Tab 2</ion-title>
                </ion-toolbar>
            </ion-header>

            <MainComponent />
        </ion-content>
    </ion-page>
</template>
  
<script>
import { IonPage, IonHeader, IonTitle, IonContent } from '@ionic/vue';
import MainComponent from '../components/form/MainComponent.vue';

export default {
    components: { MainComponent, IonPage, IonHeader, IonTitle, IonContent }
}
</script>
