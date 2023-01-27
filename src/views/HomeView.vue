<script setup>
import HomeJumbotron from '@/components/HomeJumbotron/HomeJumbotron.vue'
import TauxCard from '../components/TauxCard/TauxCard.vue';
</script>

<template>
  <div class="home">
    <HomeJumbotron />

    <div class="home__formations">
      <TauxCard v-for="taux in $store.state.taux" :key="taux.id" :taux="taux"/>
    </div>
  </div>
</template>

<style scoped>
.home__formations {
  display: flex;
  justify-content: space-around;
  align-content: center;
  background-color: #071341;
  padding: 7rem 5rem;
}

@media screen and (max-width: 1024px) {
  .home__formations {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
}

@media screen and (max-width: 1024px) {
  .home__formations {
    display: flex;
    flex-direction: column;
  }
}
</style>