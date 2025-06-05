<script setup lang="ts">
</script>

<template>
  <section class="py-16 bg-primary-800 text-white">
    <div class="container-custom">
      <div class="text-center max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold mb-6">Ready to Hit the Road?</h2>
        <p class="text-lg mb-8 text-primary-100">
          Book your rental car today and enjoy the freedom to explore at your own pace.
          We offer competitive rates, flexible booking options, and a wide selection of vehicles.
        </p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <router-link to="/cars" class="btn btn-accent px-8 py-3">
            Browse Cars
          </router-link>
          <router-link to="/contact" class="btn bg-white text-primary-800 hover:bg-gray-100 px-8 py-3">
            Contact Us
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>