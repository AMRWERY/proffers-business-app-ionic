<template>
    <div class="footer-info">
        <!-- <p><b>To register business contact</b> <br> +91 8200055728</p> -->
        <ion-img src="/assets/images/horizontal.png"></ion-img>
    </div>
</template>

<script setup>
import { IonImg } from '@ionic/vue';

</script>

<style>
.footer-info {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* to make it bottom */
    /* height: 100px;  */
    width: 100%;
    margin-top: 120px;
}

.footer-info ion-img {
    width: 150px;
}
</style>