<script setup>
import Navbar from '@/components/Navbar/Navbar.vue'
import Footer from '@/components/Footer/Footer.vue'

import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <Navbar />
  </header>

  <RouterView />

  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
</style>
