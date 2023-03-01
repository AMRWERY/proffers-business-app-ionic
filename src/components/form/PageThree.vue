<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button text="Previous" :icon="caretBack"></ion-back-button>
            </ion-buttons>
            <ion-title>Page Three</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">

        <div class="create-offer-form">
            <form @submit.prevent="submitForm">
                <ion-item>
                    <ion-label position="fixed">Image</ion-label>
                    <br>
                    <input type="file" ref="fileInput" @change="handleImageChange" accept="image/*" />
                </ion-item>
            </form>
        </div>

        <ion-button expand="block">Submit</ion-button>

    </ion-content>
</template>
  
<script setup>
import { IonHeader, IonTitle, IonToolbar, IonContent, IonButtons, IonBackButton, IonItem, IonLabel, IonButton } from '@ionic/vue';
import { caretBack } from 'ionicons/icons';
import { ref } from 'vue';

/* const formData = ref({
    image: "",
}); */


const imagePreview = ref(null)

const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        imagePreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
}

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