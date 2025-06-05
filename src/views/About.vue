<script setup lang="ts">
const teamMembers = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'John has over 15 years of experience in the car rental industry and founded CarRental with a vision to provide exceptional service and quality vehicles.'
  },
  {
    name: 'Sarah Johnson',
    role: 'Operations Manager',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Sarah ensures that all our operations run smoothly and efficiently. Her attention to detail and customer-focused approach help maintain our high standards.'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Fleet Manager',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Michael oversees our entire fleet of vehicles, ensuring they are well-maintained and meet our strict quality standards. His expertise keeps our cars in top condition.'
  },
  {
    name: 'Emily Chen',
    role: 'Customer Service',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Emily leads our customer service team with a passion for helping customers. Her friendly demeanor and problem-solving skills ensure a positive experience for all clients.'
  }
];
</script>

<template>
  <div class="bg-gray-50 py-12">
    <div class="container-custom">
      <!-- About Us Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">About CarRental</h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          We're dedicated to providing quality vehicles and exceptional service for all your transportation needs.
        </p>
      </div>
      
      <!-- Our Story -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div class="order-2 md:order-1">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p class="text-gray-700 mb-4">
            Founded in 2010, CarRental began with a simple mission: to provide reliable, affordable, and convenient car rental services. What started as a small operation with just five vehicles has grown into a trusted name in the industry with a diverse fleet of over 100 vehicles.
          </p>
          <p class="text-gray-700 mb-4">
            Our founder, John Smith, recognized a gap in the market for a customer-focused car rental service that prioritized transparency, quality, and convenience. This vision continues to guide our operations today.
          </p>
          <p class="text-gray-700">
            Over the years, we've expanded our services while maintaining our commitment to personalized customer care. We're proud to serve thousands of satisfied customers each year, from business travelers to vacationing families.
          </p>
        </div>
        <div class="order-1 md:order-2">
          <img 
            src="https://images.pexels.com/photos/4072840/pexels-photo-4072840.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="CarRental office" 
            class="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
      
      <!-- Our Values -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold text-gray-900 text-center mb-8">Our Values</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-3">Quality</h3>
            <p class="text-gray-600">
              We maintain a fleet of high-quality, well-serviced vehicles to ensure reliability and safety for our customers.
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-3">Customer Service</h3>
            <p class="text-gray-600">
              We're committed to providing exceptional customer service and a hassle-free rental experience from start to finish.
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-3">Transparency</h3>
            <p class="text-gray-600">
              We believe in transparent pricing and policies, with no hidden fees or surprises in our rental agreements.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Our Team -->
      <div>
        <h2 class="text-2xl font-bold text-gray-900 text-center mb-8">Meet Our Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(member, index) in teamMembers" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              :src="member.image" 
              :alt="member.name" 
              class="w-full h-64 object-cover object-center"
            />
            <div class="p-4">
              <h3 class="text-lg font-semibold text-gray-900">{{ member.name }}</h3>
              <p class="text-accent-600 text-sm mb-3">{{ member.role }}</p>
              <p class="text-gray-600 text-sm">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>