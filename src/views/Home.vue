<template>
  <div>
    <h1>Pokemon List</h1>

    <PokemonCards />
  </div>
</template>

<script>
import PokemonCards from '../components/PokemonCards.vue';

export default {
  name: 'HomeView',
  components: {
    PokemonCards
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
  padding: 20px;
  margin-bottom: 30px;
}
div{display: flex;

  justify-content: center;
  gap: 20px;
}
</style>
