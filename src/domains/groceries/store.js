import { computed, ref } from "vue";

const products = ref([{ item: 'Rijst', price: 1, amount: 0 },
    { item: 'Broccoli', price: 0.99, amount: 0 },
    { item: 'Koekjes', price: 1.20, amount: 0 },
    { item: 'Noten', price: 2.99, amount: 0 }
 ]);

export const getAllProducts = computed(() => products.value);

export const addProduct = (product) => products.value.push(product);