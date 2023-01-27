<script setup>
import HomeJumbotron from '@/components/HomeJumbotron/HomeJumbotron.vue'
import TauxCard from '../components/TauxCard/TauxCard.vue'
import FormationCard from '../components/FormationCard/FormationCard.vue'
</script>

<template>
  <div class="home">
    <HomeJumbotron />

    <section class="info-forma">
      <div class="home__taux">
        <TauxCard v-for="taux in $store.state.taux" :key="taux.id" :taux="taux"/>
      </div>
  

      <div class="border__home"></div>
  
      <div class="home__formations">
        <FormationCard v-for="formation in $store.state.formations" :key="formation.id" :formation="formation" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.home__taux {
  display: flex;
  justify-content: space-around;
  align-content: center;
  background-color: #071341;
  padding: 7rem 5rem 4rem;
  /* border-bottom: #8E88C1 solid 1px; */
}

.info-forma {
  background: #071341;
}

.border__home {
  background: #8E88C1;
  height: 1px;
  margin: 0 3rem;
}

.home__formations {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #071341;
  padding-bottom: 7rem;
  padding-top: 4rem;
}

@media screen and (max-width: 1024px) {
  .home__taux {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
}

@media screen and (max-width: 1024px) {
  .home__taux {
    display: flex;
    flex-direction: column;
  }
}
</style>