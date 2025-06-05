<script setup lang="ts">
import { computed } from 'vue';
import type { Car } from '../../data/cars';

const props = defineProps<{
  car: Car
}>();

const formattedPrice = computed(() => {
  return `$${props.car.price} ${props.car.priceUnit}`;
});

</script>

<template>
  <div class="card group">
    <div class="relative overflow-hidden h-48">
      <img 
        :src="car.image" 
        :alt="`${car.make} ${car.model}`" 
        class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />
      <div class="absolute top-0 right-0 bg-accent-600 text-white px-3 py-1 text-sm font-medium">
        {{ car.type }}
      </div>
    </div>
    <div class="p-4">
      <div class="flex justify-between items-start mb-2">
        <h3 class="text-lg font-bold text-gray-800">{{ car.make }} {{ car.model }}</h3>
        <p class="text-accent-600 font-bold">{{ formattedPrice }}</p>
      </div>
      <div class="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-600">
        <div class="flex items-center">
          <svg class="w-4 h-4 mr-1 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16"></path>
          </svg>
          {{ car.year }}
        </div>
        <div class="flex items-center">
          <svg class="w-4 h-4 mr-1 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
          </svg>
          {{ car.transmission }}
        </div>
        <div class="flex items-center">
          <svg class="w-4 h-4 mr-1 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          {{ car.fuel }}
        </div>
        <div class="flex items-center">
          <svg class="w-4 h-4 mr-1 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
          </svg>
          {{ car.seats }} Seats
        </div>
      </div>
      <div class="flex justify-between">
        <router-link :to="`/cars/${car.id}`" class="btn btn-primary">
          View Details
        </router-link>
        <router-link :to="`/booking/${car.id}`" class="btn btn-accent">
          Book Now
        </router-link>
      </div>
    </div>
  </div>
</template>