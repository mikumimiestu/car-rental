<script setup lang="ts">
</script>

<template>
  <section class="relative bg-gray-900 text-white">
    <div class="absolute inset-0 overflow-hidden">
      <img
        src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Car rental hero image"
        class="w-full h-full object-cover object-center opacity-40"
      />
    </div>
    <div class="container-custom relative z-10 py-24 md:py-32">
      <div class="max-w-2xl">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Find Your Perfect <span class="text-accent-500">Rental Car</span>
        </h1>
        <p class="text-lg md:text-xl mb-8 text-gray-200">
          Explore our fleet of high-quality vehicles at competitive prices. Book your car today and start your journey.
        </p>
        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <router-link to="/cars" class="btn btn-accent px-8 py-3 text-center">
            Browse Cars
          </router-link>
          <router-link to="/about" class="btn btn-secondary text-center px-8 py-3">
            Learn More
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>