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

// Form data
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const phone = ref('');
const pickupDate = ref('');
const returnDate = ref('');
const agreeTerms = ref(false);

// Form validation
const errors = ref<Record<string, string>>({});

const validateForm = () => {
  const newErrors: Record<string, string> = {};
  
  if (!firstName.value) newErrors.firstName = 'First name is required';
  if (!lastName.value) newErrors.lastName = 'Last name is required';
  
  if (!email.value) {
    newErrors.email = 'Email is required';
  } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    newErrors.email = 'Please enter a valid email';
  }
  
  if (!phone.value) newErrors.phone = 'Phone number is required';
  if (!pickupDate.value) newErrors.pickupDate = 'Pickup date is required';
  if (!returnDate.value) newErrors.returnDate = 'Return date is required';
  
  if (pickupDate.value && returnDate.value) {
    const pickup = new Date(pickupDate.value);
    const returnD = new Date(returnDate.value);
    
    if (pickup > returnD) {
      newErrors.returnDate = 'Return date cannot be before pickup date';
    }
  }
  
  if (!agreeTerms.value) newErrors.agreeTerms = 'You must agree to the terms and conditions';
  
  errors.value = newErrors;
  return Object.keys(newErrors).length === 0;
};

const calculateTotalDays = computed(() => {
  if (!pickupDate.value || !returnDate.value) return 0;
  
  const pickup = new Date(pickupDate.value);
  const returnD = new Date(returnDate.value);
  
  if (pickup > returnD) return 0;
  
  const diffTime = Math.abs(returnD.getTime() - pickup.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
});

const totalPrice = computed(() => {
  if (!car.value) return 0;
  return calculateTotalDays.value * car.value.price;
});

const submitForm = () => {
  if (validateForm()) {
    alert('Booking submitted successfully! We will contact you shortly to confirm your reservation.');
    router.push('/');
  }
};

// Set min date for datepicker to today
const today = new Date().toISOString().split('T')[0];
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
          <router-link :to="`/cars/${car.id}`" class="hover:text-primary-600 transition-colors">{{ car.make }} {{ car.model }}</router-link>
          <span class="mx-2">/</span>
          <span class="text-gray-900">Booking</span>
        </div>
      </div>

      <!-- Booking Form -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Car Summary -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Your Rental</h2>
              
              <div class="mb-6">
                <img 
                  :src="car.image" 
                  :alt="`${car.make} ${car.model}`" 
                  class="w-full h-48 object-cover object-center rounded-lg"
                />
              </div>
              
              <div class="mb-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ car.make }} {{ car.model }}</h3>
                <div class="flex items-center text-sm text-gray-600 mb-4">
                  <span class="inline-block bg-accent-100 text-accent-800 font-medium px-2.5 py-0.5 rounded mr-2">{{ car.type }}</span>
                  <span>{{ car.year }}</span>
                </div>
                
                <div class="border-t border-b border-gray-200 py-4 mb-4">
                  <div class="flex justify-between mb-2">
                    <span class="text-gray-600">Price</span>
                    <span class="font-medium">${{ car.price }} {{ car.priceUnit }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Rental Duration</span>
                    <span class="font-medium">{{ calculateTotalDays || 0 }} days</span>
                  </div>
                </div>
                
                <div class="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span class="text-accent-600">${{ totalPrice }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Booking Form -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Booking Information</h2>
            
            <form @submit.prevent="submitForm">
              <!-- Personal Info -->
              <div class="mb-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      v-model="firstName" 
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      :class="{ 'border-red-500': errors.firstName }"
                    >
                    <p v-if="errors.firstName" class="mt-1 text-sm text-red-600">{{ errors.firstName }}</p>
                  </div>
                  
                  <div>
                    <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      v-model="lastName" 
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      :class="{ 'border-red-500': errors.lastName }"
                    >
                    <p v-if="errors.lastName" class="mt-1 text-sm text-red-600">{{ errors.lastName }}</p>
                  </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      v-model="email" 
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      :class="{ 'border-red-500': errors.email }"
                    >
                    <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
                  </div>
                  
                  <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      v-model="phone" 
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      :class="{ 'border-red-500': errors.phone }"
                    >
                    <p v-if="errors.phone" class="mt-1 text-sm text-red-600">{{ errors.phone }}</p>
                  </div>
                </div>
              </div>
              
              <!-- Rental Dates -->
              <div class="mb-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Rental Dates</h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label for="pickupDate" class="block text-sm font-medium text-gray-700 mb-1">Pickup Date *</label>
                    <input 
                      type="date" 
                      id="pickupDate" 
                      v-model="pickupDate" 
                      :min="today"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      :class="{ 'border-red-500': errors.pickupDate }"
                    >
                    <p v-if="errors.pickupDate" class="mt-1 text-sm text-red-600">{{ errors.pickupDate }}</p>
                  </div>
                  
                  <div>
                    <label for="returnDate" class="block text-sm font-medium text-gray-700 mb-1">Return Date *</label>
                    <input 
                      type="date" 
                      id="returnDate" 
                      v-model="returnDate" 
                      :min="pickupDate || today"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      :class="{ 'border-red-500': errors.returnDate }"
                    >
                    <p v-if="errors.returnDate" class="mt-1 text-sm text-red-600">{{ errors.returnDate }}</p>
                  </div>
                </div>
              </div>
              
              <!-- Terms and Conditions -->
              <div class="mb-6">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input 
                      id="terms" 
                      type="checkbox" 
                      v-model="agreeTerms"
                      class="w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-primary-500"
                      :class="{ 'border-red-500': errors.agreeTerms }"
                    >
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="terms" class="font-medium text-gray-700">I agree to the <a href="#" class="text-primary-600 hover:text-primary-500">terms and conditions</a> *</label>
                    <p v-if="errors.agreeTerms" class="mt-1 text-sm text-red-600">{{ errors.agreeTerms }}</p>
                  </div>
                </div>
              </div>
              
              <!-- Submit Button -->
              <div>
                <button 
                  type="submit" 
                  class="w-full btn btn-accent py-3 text-center"
                >
                  Complete Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>