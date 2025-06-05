<script setup lang="ts">
</script>

<template>
  <div class="min-h-[60vh] flex items-center justify-center bg-gray-50 py-12">
    <div class="container-custom text-center">
      <div class="mb-8">
        <h1 class="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p class="text-gray-600 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
      </div>
      
      <div class="flex justify-center">
        <router-link to="/" class="btn btn-primary px-8 py-3">
          Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>