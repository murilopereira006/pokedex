<template>
    <div class="pokeBox">
      <img
        :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + num + '.png'"
        :alt="pokemon.name + 'image'"
      >
      <div class="textBox">
        <h4 class="namePokemon">{{ pokemon.name }}</h4>
        <h4 class="namePokemon">#{{ num }}</h4>
      </div>
    </div>
</template>

<script>
export default {
  name: 'PokemonDiv',
  props: {
    pokemon: String,
    img: String,
    num: Number,
  },
};
</script>

<style lang="scss">
  .pokeBox {
    width: 25%;
    min-width: 250px;
    background-color: white;
    color: $text;
    padding: 15px;
    margin: 20px;
    align-items: center;
    text-align: center;
  }
  .textBox {
    display: flex;
    justify-content: space-between;
    height: 35px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 15px;
  }
  h4 {
    margin-bottom: 5px;
  }
  img {
    width: auto;
    height: 100px;
  }
</style>
