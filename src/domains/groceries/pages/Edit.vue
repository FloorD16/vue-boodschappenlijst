<script setup>

import { useRoute } from 'vue-router';
import {  getProductByID, updateProduct } from '../store';
import GroceryForm from '../components/GroceryForm.vue';

const id = Number(useRoute().params.id);

const selectedProduct = getProductByID(id);

const updateGrocery = (grocery) => {
    updateProduct(grocery);
}

</script>

<template>
    <GroceryForm :grocery="selectedProduct" @newGrocery="updateGrocery"/>
</template>