<script setup>
// import { ref } from 'vue';
import PokemonDiv from './PokemonDiv.vue';

const fetchMaker = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err));
};

// const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151';
const getAllPokemons = fetchMaker('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151');
// const error = ref(null);

// fetch(url)
//   .then((res) => res.json())
//   .then((json) => (data.value = json))
//   .catch((err) => (error.value = err));

const arrayPokemons = [];
getAllPokemons.forEach(pokemon => {
  let pokeInfos = {
    name: pokemon.name,
    serial: index + 1,
    thumbnail: fetchMaker(`https://pokeapi.co/api/v2/pokemon/${index + 1}/`),
  }
  arrayPokemons.push(pokeInfos);
});
</script>

<template>
  <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
  <div v-else-if="data">
    <div v-for="(pokemon, key) in data.results" :key="key">
      <div  :key="index">
        <PokemonDiv :pokemon="pokemon" :num="key + 1"/>
      </div>
    </div>
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
