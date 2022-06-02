<template>
  <!-- <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
  <div v-else-if="data"> -->
    <img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + num + '.png'" alt="" >
    <pokemonImg :link="'raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + num + '.png'" :numb="num"/>
    <h2 class="namePokemon">{{ pokemon.name }}</h2>
    <h2 class="namePokemon">{{ num }}</h2>
  <!-- </div>
  <div v-else>Loading...</div> -->
</template>

<script>
import pokemonImg from './pokemonImg.vue';

export default {
  name: 'PokemonDiv',
  props: {
    pokemon: String,
    img: String,
    num: Number,
  },
  components: {
    pokemonImg,
  },
};
// console.log('tem');
// const url = `https://pokeapi.co/api/v2/pokemon/123`;
// const data = ref(null);
// const error = ref(null);

// fetch(url)
//   .then((res) => res.json())
//   .then((json) => (data.value = json))
//   .catch((err) => (error.value = err));
</script>
