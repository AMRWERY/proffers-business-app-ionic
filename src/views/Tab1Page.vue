<template>
    <ion-page>
        <HeaderTitleVue />
        <ion-content :fullscreen="true">
            <ion-card>
                <ion-card-header>
                    <ion-card-title>Welcome!</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    Analytics coming soon...
                </ion-card-content>
                <canvas id="planet-chart"></canvas>
            </ion-card>
            <ion-card color="default" href="sales/">
                <ion-card-header>
                    <ion-card-title>Sales</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    Check your all sales history.
                </ion-card-content>
            </ion-card>
            <ion-card color="default">
                <ion-card-header>
                    <ion-card-title>Customers</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    Coming Soon
                </ion-card-content>
            </ion-card>

            <ion-fab vertical="bottom" horizontal="end" slot="fixed">
                <ion-fab-button @click="() => router.push('/sale/create')">
                    <ion-icon :icon="add"></ion-icon>
                </ion-fab-button>
            </ion-fab>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { onMounted } from 'vue';
import router from "../router";
import {
    IonPage, IonCardHeader, IonCardTitle,
    IonContent, IonFab, IonFabButton, IonIcon,
    IonCard, IonCardContent
} from '@ionic/vue';
import { add, } from 'ionicons/icons';
import HeaderTitleVue from '../components/HeaderTitle.vue';
import { Chart } from 'chart.js';


const planetChartData = {
    type: "bar",
    data: {
        labels: ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "Sales",
                data: [10, 20, 23, 21, 11, 32, 11],
                backgroundColor: "#3880ff",
                borderColor: "#3880ff",
                borderWidth: 3
            },
            //   {
            //     label: "Expense",
            //     data: [3, 10, 11, 21, 11, 32, 11],
            //     backgroundColor: "rgba(54,73,93,.5)",
            //     borderColor: "#djnf",
            //     borderWidth: 3
            //   }

        ]
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        padding: 25
                    }
                }
            ]
        }
    }
};

onMounted(() => {
    const ctx = document.getElementById('planet-chart');
    new Chart(ctx, planetChartData);
})
</script>

<style>
#card-label {
    display: flex;
    justify-content: space-between;
}

#card-content ul {
    padding-inline-start: 0px !important;
}

#card-content ul li {
    display: flex;
    justify-content: space-between;
}
</style>