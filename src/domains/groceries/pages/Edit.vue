<script setup>

import { useRoute } from 'vue-router';
import { getAllProducts, updateProduct } from '../store';
import GroceryForm from '../components/GroceryForm.vue';

const id = Number(useRoute().params.id);

const selectedProduct = getAllProducts.value.find(product => product.id === id);

const updateGrocery = (grocery) => {
    updateProduct(grocery);
}

</script>

<template>
    <GroceryForm :grocery="selectedProduct" @newGrocery="updateGrocery"/>
</template>