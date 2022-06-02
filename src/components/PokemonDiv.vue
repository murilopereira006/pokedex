<template>
  <main>
      <div class="pokemon">
        <h2 class="name">Pucachu</h2>
        <h3 class="test">{{ name }}</h3>
      </div>
  </main>
</template>

<script>
export default {
  name: 'PokemonDiv',
  props: {
    name: String,
    img: String,
    id: String,
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
