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
  <input type="text" placeholder="Search" key="search-pokemon" v-model="searchPokemon"/>
  <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
  <div v-else-if="data">
    <div class="pokemonBox" v-for="(pokemon, key) in data.results" :key="key">
      <div v-if="pokemon.name.toLowerCase().includes(searchPokemon)">
        <PokemonDiv :pokemon="pokemon" :num="key + 1" />
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
  data: function () {
    return {
      searchPokemon: '',
    };
  },
};
</script>

<style lang="scss">
  input {
    width: 95%;
    padding: 15px 25px;
    background-color: $bg;
    border: none;
    border-bottom: 1px solid $text;
  }
  .pokemonBox {
    display: inline-flex;
    align-items: center;
  }
</style>
