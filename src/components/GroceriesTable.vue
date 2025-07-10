<script setup>
import { computed } from 'vue';

const props = defineProps({ products: Array });

const totalCosts = computed(() => {
  return props.products.reduce((sum, product) => sum + product.price * product.amount, 0).toFixed(2);
  }
);
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Product</th>
        <th>Prijs</th>
        <th>Aantal</th>
        <th>Subtotaal</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in props.products" :key="product.item">
        <td class="align-left">{{ product.item }}</td>
        <td class="align-right">{{ product.price.toFixed(2) }}</td>
        <td class="align-left"><input v-model="product.amount" type="number" min="0" step="1" /></td>
        <td class="align-right">{{ (product.price * product.amount).toFixed(2) }}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td class="align-left" colspan=3><strong>Totaal</strong></td>
        <td class="align-right">{{ totalCosts }}</td>
      </tr>
    </tfoot>
  </table>
</template>

<style scoped>
table {
  border-collapse: collapse;
}

th, td {
  border: 1px solid black;
  padding: 10px;
}

.align-left {
  text-align: left;
}

.align-right {
  text-align: right;
}
</style>