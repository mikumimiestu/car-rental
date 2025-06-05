<script setup lang="ts">
const testimonials = [
  {
    name: "Sarah Johnson",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
    role: "Business Traveler",
    content: "I regularly use CarRental for my business trips. The service is excellent, cars are always clean, and the booking process is seamless. Highly recommended!"
  },
  {
    name: "Michael Rodriguez",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
    role: "Family Vacationer",
    content: "We rented an SUV for our family vacation, and it was perfect! The vehicle was spacious, comfortable, and well-maintained. The staff was friendly and helpful throughout the process."
  },
  {
    name: "Emily Chen",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    role: "Weekend Explorer",
    content: "CarRental made my weekend getaway stress-free. The car was ready on time, in excellent condition, and the return process was quick. I'll definitely use their services again!"
  }
];
</script>

<template>
  <section class="py-16 bg-gray-100">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our satisfied customers have to say about their experience with us.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-white p-6 rounded-lg shadow-md">
          <div class="flex items-center mb-4">
            <img :src="testimonial.image" :alt="testimonial.name" class="w-12 h-12 rounded-full object-cover mr-4">
            <div>
              <h4 class="font-semibold text-gray-900">{{ testimonial.name }}</h4>
              <p class="text-sm text-gray-600">{{ testimonial.role }}</p>
            </div>
          </div>
          <div class="mb-4">
            <div class="flex text-accent-500">
              <svg v-for="star in 5" :key="star" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
          </div>
          <p class="text-gray-700 italic">{{ testimonial.content }}</p>
        </div>
      </div>
    </div>
  </section>
</template>