<template>
  <div>
    <h1>Vista Detallada</h1>
    <PokemonDetailCard :pokemon="pokemon" />
    <GoBackBtn />
  </div>
</template>

<script>
import PokemonDetailCard from '../components/PokemonDetailCard.vue';
import GoBackBtn from '../components/GoBackBtn.vue';

export default {
  name: 'PokemonDetails',
  components: {
    PokemonDetailCard,
    GoBackBtn
  },
  data() {
    return {
      pokemon: null,
    };
  },
  async created() {
    const id = this.$route.params.id;
    try {
      const response = await fetch(`https://pokemon-server-3a2p.onrender.com/api/pokemons/${id}`);
      const data = await response.json();
      this.pokemon = data;
    } catch (error) {
      console.error('Error fetching Pokémon details:', error);
    }
  }
}
</script>

<style scoped>
h1 {
  color: #2196f3;
}
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>
