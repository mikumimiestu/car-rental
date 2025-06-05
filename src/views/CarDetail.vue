<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import cars from '../data/cars';

const route = useRoute();
const router = useRouter();
const carId = parseInt(route.params.id as string);

const car = computed(() => {
  const foundCar = cars.find(c => c.id === carId);
  if (!foundCar) {
    router.push('/cars');
  }
  return foundCar;
});

const selectedImage = ref(0);

const setSelectedImage = (index: number) => {
  selectedImage.value = index;
};
</script>

<template>
  <div v-if="car" class="bg-gray-50 py-12">
    <div class="container-custom">
      <!-- Breadcrumbs -->
      <div class="mb-6">
        <div class="flex items-center text-sm text-gray-600">
          <router-link to="/" class="hover:text-primary-600 transition-colors">Home</router-link>
          <span class="mx-2">/</span>
          <router-link to="/cars" class="hover:text-primary-600 transition-colors">Cars</router-link>
          <span class="mx-2">/</span>
          <span class="text-gray-900">{{ car.make }} {{ car.model }}</span>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <!-- Car Image Gallery -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div class="p-6">
            <div class="bg-gray-100 rounded-lg overflow-hidden mb-4 h-64 md:h-80">
              <img 
                :src="car.images[selectedImage]" 
                :alt="`${car.make} ${car.model}`" 
                class="w-full h-full object-cover object-center"
              />
            </div>
            <div class="grid grid-cols-4 gap-2">
              <div 
                v-for="(image, index) in car.images" 
                :key="index" 
                @click="setSelectedImage(index)" 
                class="cursor-pointer h-20 bg-gray-100 rounded overflow-hidden" 
                :class="{ 'ring-2 ring-primary-600': selectedImage === index }"
              >
                <img 
                  :src="image" 
                  :alt="`${car.make} ${car.model} thumbnail ${index + 1}`" 
                  class="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <!-- Car Details -->
          <div class="p-6">
            <div class="mb-4">
              <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ car.make }} {{ car.model }}</h1>
              <div class="flex items-center mb-4">
                <span class="inline-block bg-accent-100 text-accent-800 text-sm font-medium px-2.5 py-0.5 rounded">{{ car.type }}</span>
                <span class="mx-2 text-gray-300">|</span>
                <span class="text-xl font-bold text-accent-600">${{ car.price }} {{ car.priceUnit }}</span>
              </div>
              <p class="text-gray-700 mb-6">{{ car.description }}</p>
            </div>

            <div class="mb-6">
              <h2 class="text-xl font-semibold text-gray-900 mb-3">Specifications</h2>
              <div class="grid grid-cols-2 gap-4">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-primary-600 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16"></path>
                  </svg>
                  <div>
                    <p class="text-sm text-gray-500">Year</p>
                    <p class="font-medium text-gray-900">{{ car.year }}</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <svg class="w-5 h-5 text-primary-600 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                  <div>
                    <p class="text-sm text-gray-500">Transmission</p>
                    <p class="font-medium text-gray-900">{{ car.transmission }}</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <svg class="w-5 h-5 text-primary-600 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <p class="text-sm text-gray-500">Fuel Type</p>
                    <p class="font-medium text-gray-900">{{ car.fuel }}</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <svg class="w-5 h-5 text-primary-600 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                  <div>
                    <p class="text-sm text-gray-500">Seats</p>
                    <p class="font-medium text-gray-900">{{ car.seats }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-8">
              <h2 class="text-xl font-semibold text-gray-900 mb-3">Features</h2>
              <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                <li v-for="(feature, index) in car.features" :key="index" class="flex items-center">
                  <svg class="w-4 h-4 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">{{ feature }}</span>
                </li>
              </ul>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <router-link :to="`/booking/${car.id}`" class="btn btn-accent px-8 py-3 text-center">
                Book Now
              </router-link>
              <router-link to="/cars" class="btn btn-secondary px-8 py-3 text-center">
                Back to Cars
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>