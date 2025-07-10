<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/">Go to overview</RouterLink>
    <RouterLink to="/create">Go to create</RouterLink>
  </nav>

  <RouterView/>

  
</template>

<style scoped>

</style>