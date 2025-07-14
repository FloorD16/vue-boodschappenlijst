<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const prop = defineProps({grocery: Object});

const productCopy = ref({ ...prop.grocery });

const emit = defineEmits(['newGrocery']);

const submit = () => {
    emit('newGrocery', productCopy.value);
    console.log('Submitted:', productCopy.value);

    //router.replace({ name: 'groceries.overview' });
}
</script>

<template>
    <div>
        <h4>Product: <input v-model="productCopy.item" type="text"/></h4>
        <h4>Prijs: <input v-model="productCopy.price" type="number"/></h4>
        <h4>Aantal: <input v-model="productCopy.amount" type="number"/></h4>

        <button @click="submit">Verzend</button>
    </div>
</template>