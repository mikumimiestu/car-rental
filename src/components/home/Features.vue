<script setup lang="ts">
const features = [
  {
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'Quality Guaranteed',
    description: 'All our vehicles are thoroughly inspected and maintained to ensure your safety and comfort.'
  },
  {
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    title: '24/7 Support',
    description: 'Our customer service team is available around the clock to assist you with any questions or issues.'
  },
  {
    icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
    title: 'Flexible Pricing',
    description: 'Choose from a variety of rental options including hourly, daily, weekly, and monthly rates.'
  },
  {
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    title: 'Easy Booking',
    description: 'Our streamlined booking process makes it quick and simple to reserve your ideal vehicle.'
  }
];
</script>

<template>
  <section class="py-16">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          At CarRental, we pride ourselves on providing exceptional service and top-quality vehicles for your convenience.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(feature, index) in features" :key="index" class="bg-white p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>