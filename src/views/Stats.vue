<template>
  <div class="content-bg">
    <h1 class="mt-4">WYKRESY</h1>
    <h3>(jakieś tam na próbę)</h3>
    <DoughnutChart :chartData="testData" />


    <DataTable :value="games" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
    <Column field="name" header="Name" style="width: 25%"></Column>
    <Column field="country.name" header="Country" style="width: 25%"></Column>
    <Column field="company" header="Company" style="width: 25%"></Column>
    <Column field="representative.name" header="Representative" style="width: 25%"></Column>
</DataTable>
  </div>



</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default defineComponent({
  name: 'Home',
  components: { DoughnutChart },
  setup() {
    const testData = {
      labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
      datasets: [
        {
          data: [30, 40, 60, 70, 5],
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    };

    return { testData };
  },
});
</script>











<style scoped>

.mt-4 {
    width: 100%;
    text-align: center;
    color: #495057;
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
  }

  h3{
    text-align: center;
  }
</style>