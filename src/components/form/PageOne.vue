<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Page One</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">

    <div class="discount-form">
      <h6>Create Offer</h6>
      <div class="create-offer-form">
        <form @submit.prevent="submitForm">
          <ion-item>
            <ion-label position="floating">Tagline</ion-label>
            <ion-input v-model="formData.tagline"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">Offer Type</ion-label>
            <ion-select v-model="formData.offertype">
              <ion-select-option value="discount">Discount</ion-select-option>
              <ion-select-option value="buy_one_get_one">Buy One Get One</ion-select-option>
              <ion-select-option value="free_shipping">Free Shipping</ion-select-option>
            </ion-select>
          </ion-item>

          <ion-item>
            <ion-label position="fixed">Valid From</ion-label>
            <ion-input required placeholder="" type="date" v-model="formData.valid_from"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="fixed">Valid Till</ion-label>
            <ion-input required placeholder="" type="date" v-model="formData.valid_till"></ion-input>
          </ion-item>

        </form>
      </div>

    </div>

    <ion-nav-link router-direction="forward" :component="component">
      <ion-button>Go to Page Two</ion-button>
    </ion-nav-link>
  </ion-content>
</template>
  
<script setup>
import { IonHeader, IonTitle, IonToolbar, IonContent, IonNavLink, IonButton, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/vue';
import PageTwo from './PageTwo.vue';
import { ref } from 'vue';

const formData = ref({
  tagline: "",
  offertype: "",
  valid_from: "",
  valid_till: ""
});

const component = ref(PageTwo);

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