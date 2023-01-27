<template>
  <div class="card__taux">
    <div class="card__taux__icon">
      <font-awesome-icon icon="fa-solid fa-arrow-trend-up" class="card__taux__icon__fa" />
    </div>
    <div class="card_taux__desc">
      <div class="card__taux__value">{{ taux.value }} %</div>
      <div class="card__taux__label">
        {{ taux.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    taux: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped>
.card__taux {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}
.card__taux__icon {
  background-color: #95CB7C;
  padding: 10px 15px;
  border-radius: 10px;
}
.card__taux__value, .card__taux__icon__fa {
  color: #FFF;
}
.card__taux__label {
  color: #8E88C1;
}

@media screen and (max-width: 1024px) {
  .card__taux {
    display: grid;
    grid-template-columns: auto 200px;
    grid-gap: 20px;
  }
}
</style>