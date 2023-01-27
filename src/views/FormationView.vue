<script setup>
import FormationCard from '../components/FormationCard/FormationCard.vue';
</script>

<template>
  <div class="formations">
    <h1>Les Formations chez Enigma</h1>
    <div class="formations__liste">
      <FormationCard v-for="formation in $store.state.formations" :key="formation.id" :formation="formation" />
    </div>
  </div>
</template>

<style scoped>
.formations {
  margin: 5rem;
}
h1 {
  color: #fff;
  margin-bottom: 2rem;
}
.formations__liste {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>