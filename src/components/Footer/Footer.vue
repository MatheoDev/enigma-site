<template>
  <div class="footer">
    <div class="footer__schools">
      <div class="footer__schools__title">Enigma School</div>
      <div class="footer__schools__items">
        <RouterLink to="/" class="footer__schools__item">Dunkerque</RouterLink>
        <RouterLink to="/" class="footer__schools__item">Lille</RouterLink>
        <RouterLink to="/" class="footer__schools__item">Toulouse</RouterLink>
        <RouterLink to="/" class="footer__schools__item">Lyon</RouterLink>
        <RouterLink to="/" class="footer__schools__item">Nantes</RouterLink>
      </div>
    </div>
    <div class="footer__nav">
      <div class="footer__nav__title">Menu</div>
      <div class="footer__nav__items">
        <RouterLink to="/" class="footer__nav__item">Accueil</RouterLink>
        <RouterLink to="/formations" class="footer__nav__item">Formations</RouterLink>
        <RouterLink to="/price" class="footer__nav__item">Prix</RouterLink>
        <RouterLink to="/partner" class="footer__nav__item">Partenaire</RouterLink>
        <RouterLink to="/contact" class="footer__nav__item">Contact</RouterLink>
        <RouterLink to="/candidate" class="footer__nav__item">Candidater</RouterLink>
      </div>
    </div>
    <div class="footer__socials">
      <div class="footer__socials__title">Social</div>
      <div class="footer__socials__items">
        <RouterLink to="/contact" class="footer__socials__item"><img src="@/assets/linkedin.svg" alt="linkedin enigma" width="25" height="25"/></RouterLink>
        <RouterLink to="/contact" class="footer__socials__item"><img src="@/assets/instagram.svg" alt="instagram enigma" width="25" height="25"/></RouterLink>
        <RouterLink to="/contact" class="footer__socials__item"><img src="@/assets/youtube.svg" alt="youtube enigma" width="25" height="25"/></RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-around;
  color: #fff;
  padding: 5rem 0;
}
.footer__nav__title, .footer__schools__title, .footer__socials__title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 20px;
}
.footer__schools__item, .footer__nav__item {
  text-decoration: none;
  color: #FFF;
}
.footer__schools__items, .footer__nav__items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.footer__socials__items {
  display: flex;
  gap: 10px;
}
</style>