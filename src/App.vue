
<script setup>
</script>

<template>
  <nav>
    <router-link to="/pokemons">Home</router-link> |
    <router-link to="/pokemons/1
  ">Details View</router-link> 
    <router-link to="/contact">Contact</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
nav {
  margin-bottom: 20px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #42b983;
}
nav a.router-link-exact-active {
  font-weight: bold;
  color: #333;
}
</style>
