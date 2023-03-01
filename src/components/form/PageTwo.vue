<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button text="Previous" :icon="caretBack"></ion-back-button>
            </ion-buttons>
            <ion-title>Page Two</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">

        <div class="create-offer-form">
            <form @submit.prevent="submitForm">
                <ion-item>
                    <ion-label position="floating">Description</ion-label>
                    <ion-textarea v-model="formData.description"></ion-textarea>
                </ion-item>

                <ion-item>
                    <ion-label position="floating">Term and Condition</ion-label>
                    <ion-textarea v-model="formData.term_and_condition"></ion-textarea>
                </ion-item>
            </form>
        </div>

        <ion-nav-link router-direction="forward" :component="component">
            <ion-button>Go to Page Three</ion-button>
        </ion-nav-link>
    </ion-content>
</template>
  
<script setup>
import {
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonNavLink,
    IonButton,
    IonButtons,
    IonBackButton,
    IonItem,
    IonLabel
} from '@ionic/vue';
import PageThree from './PageThree.vue';
import { caretBack } from 'ionicons/icons';
import { ref } from 'vue';

const formData = ref({
    description: "",
    term_and_condition: "",
});

const component = ref(PageThree);

const submitForm = () => {
    // handle form submission
}
</script>

<style scoped>
.create-offer-form {
    padding: 15px;
}

.create-offer-form ion-item {
    padding-top: 10px;
}

.create-offer-form ion-button {
    margin-top: 20px;
}
</style>