<script setup>
import { ref } from 'vue';
import PokemonDiv from './PokemonDiv.vue';

const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151';
const data = ref(null);
const error = ref(null);

fetch(url)
  .then((res) => res.json())
  .then((json) => (data.value = json))
  .catch((err) => (error.value = err));
</script>

<template>
  <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
  <div v-else-if="data">
    <li v-for="name in data.results">
      <PokemonDiv :name="name" />
    </li>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
export default {
  name: 'ContainerPage',
  components: {
    PokemonDiv,
  },
};
</script>
