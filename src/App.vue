<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/" style="padding-right: 20px;">Overview</RouterLink>
    <RouterLink to="/create">Create</RouterLink>
  </nav>

  <RouterView/>

  
</template>

<style scoped>

</style>