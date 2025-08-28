<template>
	<div class="input-pokemon-number">
		<input v-model="pokemonId" type="number" min="1" placeholder="Introduce el ID del Pokémon" />
		<button @click="goToPokemon">Ver Pokémon</button>
	</div>
</template>

<script>
export default {
	name: 'InputPokemonNumber',
	data() {
		return {
			pokemonId: ''
		}
	},
	methods: {
		goToPokemon() {
			if (this.pokemonId) {
				this.$router.push(`/pokemons/${this.pokemonId}`);
			}
		}
	}
}
</script>

<style scoped>
.input-pokemon-number {
	display: flex;
	gap: 8px;
	margin: 24px 0;
	justify-content: center;
}
input[type="number"] {
	padding: 6px 12px;
	border-radius: 4px;
	border: 1px solid #ccc;
	width: 160px;
}
button {
	padding: 6px 16px;
	border-radius: 4px;
	border: none;
	background: #42b983;
	color: #fff;
	cursor: pointer;
	font-weight: bold;
}
button:hover {
	background: #2196f3;
}
</style>

