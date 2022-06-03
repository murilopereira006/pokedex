<template>
  <div class="bg">
    <ContainerPage />
  </div>
</template>

<script>
import ContainerPage from './components/ContainerPage.vue';

export default {
  name: 'App',
  components: {
    ContainerPage,
  },
};
</script>

<style lang="scss">
.bg {
  background-color: $bg;
  text-align: center;
}
</style>
