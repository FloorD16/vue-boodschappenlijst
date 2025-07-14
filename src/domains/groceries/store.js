import { computed, ref } from "vue";

const products = ref([{ item: 'Rijst', price: 1, amount: 0, id: 1 },
    { item: 'Broccoli', price: 0.99, amount: 0, id: 2 },
    { item: 'Koekjes', price: 1.20, amount: 0, id: 3 },
    { item: 'Noten', price: 2.99, amount: 0, id: 4 }
 ]);

export const getAllProducts = computed(() => products.value);

export const addProduct = (product) => products.value.push(product);

export const updateProduct = (updatedProduct) => {
    const index = products.value.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
        products.value[index] = updatedProduct;
    }
}

export const removeGrocery = (id) => {
    products.value = products.value.filter(product => product.id !== id);
}