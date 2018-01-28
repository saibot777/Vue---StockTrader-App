<template>
  <div>
    <app-stock 
      v-for="stock in stocks" 
      v-bind:key="stock.id">
    </app-stock>
  </div>
</template>

<script>
  import Stock from './Stock.vue';

  export default {
    data() {
      return {
        stocks: [
          { id: 1, name: 'BMW', price: 60 },
          { id: 2, name: 'Mercedes', price: 90 },
          { id: 3, name: 'McLaren', price: 110 },
          { id: 4, name: 'Jaguar', price: 70 }
        ]
      }
    },
    components: {
      appStock: Stock
    }
  }
</script>