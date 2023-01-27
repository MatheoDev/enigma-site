<template>
  <nav class="navmenu">
    <RouterLink to="/" class="navmenu__item primary">Enigma School</RouterLink>

    <div class="navmenu__items">
      <RouterLink to="/" class="navmenu__item">Accueil</RouterLink>
      <RouterLink to="/school" class="navmenu__item">Écoles</RouterLink>
      <RouterLink to="/formation" class="navmenu__item">Formations</RouterLink>
      <RouterLink to="/price" class="navmenu__item">Prix</RouterLink>
      <RouterLink to="/partner" class="navmenu__item">Partenaire</RouterLink>
      <RouterLink to="/contact" class="navmenu__item">Contact</RouterLink>
      <RouterLink to="/candidate" class="navmenu__item_btn">Candidater</RouterLink>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.navmenu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 5rem;
  padding: 3rem 0;
  height: 3rem;
  color: #FFF;
  border-bottom: #8E88C1 solid 1px;
}

.navmenu__items {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.primary {
  font-weight: 700;
  font-size: 1.3rem;
}

.navmenu__item {
  color: #FFF;
  text-decoration: none;
}

.navmenu__item_btn {
  background-color: #4B4864;
  border: #8E88C1 solid 1px;
  color: #FFF;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: 0.3s;
}

.navmenu__item_btn:hover {
  background-color: #8E88C1;
}

@media screen and (max-width: 1024px) {
  .navmenu__items {
    display: none;
  }
}
</style>