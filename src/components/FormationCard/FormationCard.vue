<template>
  <div class="card__formation">
    <div class="price">
      {{ formation.price }} €
    </div>
    <div class="card__formation__title">
      {{ formation.title }}
    </div>
    <div class="card__formation__lvl">
     {{ formation.niveau }}
    </div>
    <div class="card__formation__desc">
      {{ formation.description }}
    </div>
    <div class="card__formation__btn-dwl">
      Brochure
    </div>
  </div>
</template>

<script>
export default {
  props: {
    formation: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped>
.card__formation {
  border-radius: 10px;
  background: #FFF;
  width: 220px;
  height: 300px;
  padding: 3rem 1.5rem;
  margin: 5px 0;
  position: relative;
}
.price {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #3F50E7;
  color: #fff;
  padding: 3px 7px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgb(0 0 0 / 90%);
}
.card__formation__btn-dwl {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  background: #3F50E7;
  color: #FFF;
  padding: 5px 2rem;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
}
.card__formation__btn-dwl:hover {
  background: #3f50e7cf;
}
.card__formation__title {
  font-size: 1.2rem;
}
.card__formation__desc {
  margin-top: 30px;
}
</style>