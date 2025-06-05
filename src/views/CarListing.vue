<script setup lang="ts">
import { ref, computed } from 'vue';
import cars from '../data/cars';
import CarCard from '../components/cars/CarCard.vue';

const carTypes = [...new Set(cars.map(car => car.type))];
const transmissionTypes = [...new Set(cars.map(car => car.transmission))];
const fuelTypes = [...new Set(cars.map(car => car.fuel))];

const selectedType = ref('');
const selectedTransmission = ref('');
const selectedFuel = ref('');
const priceRange = ref(200);
const searchQuery = ref('');

const filteredCars = computed(() => {
  return cars.filter(car => {
    // Filter by search query
    const searchMatch = searchQuery.value === '' || 
      car.make.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
      car.model.toLowerCase().includes(searchQuery.value.toLowerCase());
    
    // Filter by type
    const typeMatch = selectedType.value === '' || car.type === selectedType.value;
    
    // Filter by transmission
    const transmissionMatch = selectedTransmission.value === '' || car.transmission === selectedTransmission.value;
    
    // Filter by fuel
    const fuelMatch = selectedFuel.value === '' || car.fuel === selectedFuel.value;
    
    // Filter by price
    const priceMatch = car.price <= priceRange.value;
    
    return searchMatch && typeMatch && transmissionMatch && fuelMatch && priceMatch;
  });
});

const resetFilters = () => {
  selectedType.value = '';
  selectedTransmission.value = '';
  selectedFuel.value = '';
  priceRange.value = 200;
  searchQuery.value = '';
};
</script>

<template>
  <div class="bg-gray-50 py-12">
    <div class="container-custom">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Our Fleet</h1>
        <p class="text-gray-600">Find the perfect car for your journey</p>
      </div>
      
      <!-- Filters and Car List -->
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Filters -->
        <div class="lg:w-1/4">
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">Filters</h2>
            
            <!-- Search -->
            <div class="mb-6">
              <label for="search" class="block text-sm font-medium text-gray-700 mb-1">Search</label>
              <input 
                type="text" 
                id="search" 
                v-model="searchQuery" 
                placeholder="Search by make or model" 
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
            </div>
            
            <!-- Car Type -->
            <div class="mb-6">
              <label for="type" class="block text-sm font-medium text-gray-700 mb-1">Car Type</label>
              <select 
                id="type" 
                v-model="selectedType" 
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">All Types</option>
                <option v-for="type in carTypes" :key="type" :value="type">{{ type }}</option>
              </select>
            </div>
            
            <!-- Transmission -->
            <div class="mb-6">
              <label for="transmission" class="block text-sm font-medium text-gray-700 mb-1">Transmission</label>
              <select 
                id="transmission" 
                v-model="selectedTransmission" 
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">All Transmissions</option>
                <option v-for="transmission in transmissionTypes" :key="transmission" :value="transmission">{{ transmission }}</option>
              </select>
            </div>
            
            <!-- Fuel Type -->
            <div class="mb-6">
              <label for="fuel" class="block text-sm font-medium text-gray-700 mb-1">Fuel Type</label>
              <select 
                id="fuel" 
                v-model="selectedFuel" 
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">All Fuel Types</option>
                <option v-for="fuel in fuelTypes" :key="fuel" :value="fuel">{{ fuel }}</option>
              </select>
            </div>
            
            <!-- Price Range -->
            <div class="mb-6">
              <div class="flex justify-between mb-1">
                <label for="price" class="block text-sm font-medium text-gray-700">Max Price: ${{ priceRange }}</label>
              </div>
              <input 
                type="range" 
                id="price" 
                v-model="priceRange" 
                min="0" 
                max="200" 
                step="5" 
                class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              >
              <div class="flex justify-between text-xs text-gray-500 mt-1">
                <span>$0</span>
                <span>$200</span>
              </div>
            </div>
            
            <!-- Reset Button -->
            <button 
              @click="resetFilters" 
              class="w-full py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </div>
        
        <!-- Car List -->
        <div class="lg:w-3/4">
          <div v-if="filteredCars.length > 0" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <CarCard v-for="car in filteredCars" :key="car.id" :car="car" />
          </div>
          <div v-else class="bg-white rounded-lg shadow-md p-8 text-center">
            <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">No cars found</h3>
            <p class="text-gray-600 mb-4">Try adjusting your filters to find what you're looking for.</p>
            <button @click="resetFilters" class="btn btn-primary">Reset Filters</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>