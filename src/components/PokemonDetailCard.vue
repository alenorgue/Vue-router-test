<template>
  <div v-if="pokemon" class="detail-card">
    <img :src="pokemon.sprite" :alt="pokemon.name" class="detail-sprite" />
    <h2>{{ pokemon.name }}</h2>
    <p><strong>ID:</strong> {{ pokemon._id }}</p>
    <p><strong>Tipo:</strong> {{ pokemon.type.join(', ') }}</p>
    <p>
      <strong>Evoluciona de:</strong>
      <span v-if="pokemon.evolves_from_species">{{ pokemon.evolves_from_species }}</span>
      <span v-else>No evoluciona de ningún Pokémon</span>
    </p>
  </div>
  <div v-else class="loading-detail">
    <p>Cargando detalles...</p>
  </div>
</template>

<script>
export default {
  name: 'PokemonDetailCard',
  props: {
    pokemon: {
      type: Object,
      required: false
    }
  }
}
</script>

<style scoped>
.detail-card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 32px;
  width: 500px;
  margin: 40px auto;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  background: #fff;
  text-align: center;
  font-size: 1.5 rem;
}
.detail-sprite {
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 18px;
}
h2 {
  color: #2196f3;
  margin-bottom: 16px;
}
.loading-detail {
  padding: 32px;
  text-align: center;
}
</style>
