<script setup lang="ts">
import GroceriesTable from '../../../components/GroceriesTable.vue';
import { getAllProducts } from '../store';

const products = getAllProducts;
</script>

<template>
    <GroceriesTable :products="products" />
</template>