<template>
  <!-- <img :src="link" alt="" > -->
  <top>{{numb}}</top>
</template>

<script>
export default {
  name: 'pokemonImg',
  props: {
    link: String,
    numb: Number,
  },
}
</script>

<style>

</style>