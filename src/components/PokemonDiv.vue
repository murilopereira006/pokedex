<template>
  <main>
      <div class="pokemon">
        <h2 class="name">Pucachu</h2>
        <h3 class="test">{{ pokemon.name }}</h3>
        <h3 class="test">{{ index }}</h3>
      </div>
  </main>
</template>

<script>
export default {
  name: 'PokemonDiv',
  props: {
    pokemon: String,
    img: String,
    index: Number,
  },
};
</script>

<style lang="scss">
.name {
    color: $primary;
}

h3 {
    color: $text;
}
</style>
