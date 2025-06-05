<script setup lang="ts">
import { ref, computed } from 'vue';
import cars from '../../data/cars';
import CarCard from '../cars/CarCard.vue';

const featuredCars = computed(() => {
  return cars.slice(0, 3);
});
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Featured Cars</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Discover our most popular vehicles for your next adventure. We offer a wide range of cars to meet your every need.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CarCard v-for="car in featuredCars" :key="car.id" :car="car" />
      </div>
      
      <div class="text-center mt-12">
        <router-link to="/cars" class="btn btn-primary px-8 py-3">
          View All Cars
        </router-link>
      </div>
    </div>
  </section>
</template>