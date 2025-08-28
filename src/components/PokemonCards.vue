
<template>
    <div v-if="pokemons && pokemons.length" class="pokemon-grid">
        <div v-for="pokemon in pokemons" :key="pokemon._id" class="pokemon-card" @click="goToDetails(pokemon._id)" style="cursor:pointer;">
            <img :src="pokemon.sprite" :alt="pokemon.name" class="pokemon-sprite" />
            <h2>{{ pokemon.name }}</h2>
            <p>ID: {{ pokemon._id }}</p>
        </div>
    </div>
    <div v-else class="loading">
        Loading...
    </div>
</template>

<script>
export default {
    name: 'PokemonCards',
    data() {
        return {
            pokemons: [],
        };
    },
    async mounted() {
        // Ejemplo de caché simple usando localStorage
        const cacheKey = 'pokemonsCache';
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
            this.pokemons = JSON.parse(cached);
        } else {
            try {
                const response = await fetch('https://pokemon-server-3a2p.onrender.com/api/pokemons');
                const data = await response.json();
                this.pokemons = data;
                localStorage.setItem(cacheKey, JSON.stringify(data));
            } catch (error) {
                console.error('Error fetching Pokémon:', error);
            }
        }
    },
    methods: {
        goToDetails(id) {
            this.$router.push(`/pokemons/${id}`);
        }
    },
};
</script>

<style scoped>
.pokemon-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 15px;
    margin: 32px 0;
    justify-content: center;
    align-items: start;
    width: 75vw;
}
.pokemon-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    width: 220px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.pokemon-sprite {
    width: 96px;
    height: 96px;
    object-fit: contain;
    margin-bottom: 12px;
}
.loading {
    padding: 16px;
    text-align: center;
}

</style>