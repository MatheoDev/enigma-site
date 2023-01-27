<template>
  <div class="home__prez">
    <div class="home__prez__school">
      <h1>Enigma School</h1>
      <div class="home__prez__school__desc">
        L'ÉCOLE SUPÉRIEURE DES SCIENCES DE L'INFORMATIQUE,
        <br><br>
        DÉVELOPPONS L'INTELLIGENCE DE DEMAIN, NOTRE AVENIR, VOS MÉTIERS
      </div>
      <RouterLink to="/contact" class="home__prez__btn">Nous contacter</RouterLink>
    </div>
    <div class="home__prez__logo">
      <div class="home__prez__logo__background">
        <div class="home__prez__logo__img">
          <img src="@/assets/logo-enigma.png" alt="EnigmaSchool">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.home__prez {
margin: 0 5rem;
padding: 7rem 0;
display: flex;
justify-content: space-between;
align-items: center;
}

.home__prez__school h1 {
color: #FFF;
font-size: 3rem;
}

.home__prez__school__desc {
padding: 4rem 0;
color: #8E88C1;
font-size: 1rem;
}


.home__prez__btn {
background-color: #3F50E7;
border: #3F50E7 solid 1px;
color: #FFF;
padding: 1rem 2rem;
border-radius: 0.5rem;
text-decoration: none;
transition: 0.3s;
}

.home__prez__btn:hover {
background-color: #3f50e77b;
}

.home__prez__logo__background {
position: relative;
width: 450px;
height: 450px;
background-color: #3F3B62;
border-radius: 2%;
}

.home__prez__logo__background::before {
/* triangle transparent dans le coin supérieur gauche */
content: "";
position: absolute;
top: 0;
left: 0;
width: 0;
height: 0;
border-top: 300px solid #24204A;
border-right: 350px solid #3F3B62;
}

.home__prez__logo__img {
position: absolute;
background-color: #827EAC;
padding: 5rem;
/** centrer la div au milieu de l'element relatif */
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border-radius: 2%;
}

@media screen and (max-width: 768px) {
  .home__prez {
    flex-direction: column;
    margin: 0;
    padding: 5rem;
    gap: 70px;
  }
}

@media screen and (max-width: 425px) {
  .home__prez__logo__background {
    width: 350px;
    height: 350px;
  }
  .home__prez__logo__background::before {
    border-top: 200px solid #24204A;
    border-right: 250px solid #3F3B62;
  }
  img {
    width: 120px;
  }
}
</style>