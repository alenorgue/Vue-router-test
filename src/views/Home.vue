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
  padding: 10px;
 
}
div{ display: flex;
    align-items: center;
    flex-direction: column;
  justify-content: center;
  gap: 10px;
}

</style>
