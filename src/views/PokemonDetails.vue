<template>
  <div>
    <h1>Vista Detallada</h1>
    <InputPokemonNumber />
    <PokemonDetailCard :pokemon="pokemon" />
    <GoBackBtn />
  </div>
</template>

<script>
import PokemonDetailCard from '../components/PokemonDetailCard.vue';
import GoBackBtn from '../components/GoBackBtn.vue';
import InputPokemonNumber from '../components/InputPokemonNumber.vue';

export default {
  name: 'PokemonDetails',
  components: {
    PokemonDetailCard,
    GoBackBtn,
    InputPokemonNumber
  },
  data() {
    return {
      pokemon: null,
    };
  },
  async created() {
    await this.fetchPokemon();
  },
  watch: {
    '$route.params.id': {
      immediate: false,
      handler() {
        this.fetchPokemon();
      }
    }
  },
  methods: {
    async fetchPokemon() {
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
