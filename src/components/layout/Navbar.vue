<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  isMenuOpen: boolean
}>()

const emit = defineEmits(['toggle-menu'])

const toggleMenu = () => {
  emit('toggle-menu')
}
</script>

<template>
  <header class="bg-white shadow-md">
    <div class="container-custom">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2">
          <span class="text-2xl font-bold text-primary-800">Car<span class="text-accent-600">Rental</span></span>
        </router-link>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <router-link to="/" class="text-gray-700 hover:text-primary-600 font-medium transition-colors">Home</router-link>
          <router-link to="/cars" class="text-gray-700 hover:text-primary-600 font-medium transition-colors">Cars</router-link>
          <router-link to="/about" class="text-gray-700 hover:text-primary-600 font-medium transition-colors">About</router-link>
          <router-link to="/contact" class="text-gray-700 hover:text-primary-600 font-medium transition-colors">Contact</router-link>
        </nav>
        
        <!-- Mobile menu button -->
        <button 
          @click="toggleMenu" 
          class="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <!-- Mobile Navigation -->
      <div v-if="isMenuOpen" class="md:hidden py-4 border-t border-gray-200">
        <div class="flex flex-col space-y-3">
          <router-link to="/" class="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2" @click="toggleMenu">Home</router-link>
          <router-link to="/cars" class="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2" @click="toggleMenu">Cars</router-link>
          <router-link to="/about" class="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2" @click="toggleMenu">About</router-link>
          <router-link to="/contact" class="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2" @click="toggleMenu">Contact</router-link>
        </div>
      </div>
    </div>
  </header>
</template>