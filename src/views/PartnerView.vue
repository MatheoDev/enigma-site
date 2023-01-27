<script setup>
</script>

<template>
  <div class="partner">
    <div class="enterprise__partner">
      <h1>Les partenaires Enigma</h1>
      <div class="list__partner">
        <img v-for="path in $store.state.logoPath" :src="path" :alt="path" :key="path">
      </div>
    </div>
    <div class="enterprise__trust">
      <h2>Ils font confiance à nos diplomés</h2>
      <div class="list__trust">
        <img src="@/assets/enterprisetrusting.png" alt="trusting" class="entreprise__trust">
      </div>
      <div class="number__alternance">
        <div class="temp__alternance__chiffre">
          <span class="temp__alternance__chiffre__title">37</span>
          <span class="temp__alternance__chiffre__label">Partenaires</span>
        </div>
        <div class="temp__alternance__chiffre">
          <span class="temp__alternance__chiffre__title">45</span>
          <span class="temp__alternance__chiffre__label">Alternants</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.partner h1, .partner h2 {
  color: #FFF;
  font-size: 1.8rem;
}
.enterprise__partner {
  padding: 7rem 0;
  margin: 0 5rem;
}
.enterprise__trust {
  padding: 7rem 5rem;
  background: #071341;
}
.number__alternance {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.temp__alternance__chiffre {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.temp__alternance__chiffre__title {
  font-size: 2rem;
  background: #95CB7C;
  padding: 10px 15px;
  color: #FFF;
  border-radius: 10px;
}
.temp__alternance__chiffre__label {
  color: #FFF;
}
.list__partner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.list__partner img {
  width: 300px;
}
.list__trust {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
}
.entreprise__trust {
  width: 100%;
}
</style>