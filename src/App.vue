<script setup lang="ts">
import { ref } from 'vue'
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar :isMenuOpen="isMenuOpen" @toggle-menu="toggleMenu" />
    
    <main class="flex-grow">
      <router-view />
    </main>
    
    <Footer />
  </div>
</template>