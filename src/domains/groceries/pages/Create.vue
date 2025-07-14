<script setup>

import GroceryForm from '../components/GroceryForm.vue';
import { addProduct, getAllProducts } from '../store';

const grocery = { item: '', price: 0, amount: 0 };

const createNewGrocery = (grocery) => {
    const newID = getAllProducts.value.length === 0 ? 1 : Math.max(...getAllProducts.value.map(product => product.id)) + 1;
    addProduct({ ...grocery, id: newID });
}
</script>

<template>
    <GroceryForm :grocery="grocery" @newGrocery="createNewGrocery" />
</template>