import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/Home.vue'
import ContactView from '../views/Contact.vue'
import PokemonDetails from '../views/PokemonDetails.vue'

const routes = [
  { path: '/pokemons', component: HomeView },
  { path: '/contact', component: ContactView },
  { path: '/pokemons/:id', component: PokemonDetails }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
