<script setup>

import { ref } from 'vue';
import GroceryForm from '../components/GroceryForm.vue';
import { addProduct } from '../store';

const grocery = {item: '', price: 0, amount: 0};

let newGrocery = ref({});

const createNewGrocery = (grocery) => {
    newGrocery.value = grocery;
    addProduct(newGrocery.value);
}
</script>

<template>
    <GroceryForm :grocery="grocery" @newGrocery="createNewGrocery" />
    <p>{{ newGrocery }}</p>
</template>