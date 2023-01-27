<script setup>
import Navbar from '@/components/Navbar/Navbar.vue'

import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <Navbar />
  </header>

  <RouterView />

  <footer>
  </footer>
</template>

<style scoped>
</style>
