<script setup lang="ts">
import { ref } from 'vue';

// Form data
const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');

// Form validation
const errors = ref<Record<string, string>>({});
const submitted = ref(false);

const validateForm = () => {
  const newErrors: Record<string, string> = {};
  
  if (!name.value) newErrors.name = 'Name is required';
  
  if (!email.value) {
    newErrors.email = 'Email is required';
  } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    newErrors.email = 'Please enter a valid email';
  }
  
  if (!subject.value) newErrors.subject = 'Subject is required';
  if (!message.value) newErrors.message = 'Message is required';
  
  errors.value = newErrors;
  return Object.keys(newErrors).length === 0;
};

const submitForm = () => {
  if (validateForm()) {
    // In a real application, you would send the form data to a server here
    submitted.value = true;
    // Reset form
    name.value = '';
    email.value = '';
    subject.value = '';
    message.value = '';
  }
};
</script>

<template>
  <div class="bg-gray-50 py-12">
    <div class="container-custom">
      <!-- Contact Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Have questions or need assistance? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Contact Info -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            
            <div class="space-y-6">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div class="ml-3">
                  <h3 class="text-lg font-medium text-gray-900">Office Location</h3>
                  <p class="mt-1 text-gray-600">
                    123 Car Street<br>
                    City, Country 12345
                  </p>
                </div>
              </div>
              
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div class="ml-3">
                  <h3 class="text-lg font-medium text-gray-900">Phone</h3>
                  <p class="mt-1 text-gray-600">+1 234 567 8900</p>
                  <p class="mt-1 text-gray-600">Mon-Fri from 8am to 6pm</p>
                </div>
              </div>
              
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div class="ml-3">
                  <h3 class="text-lg font-medium text-gray-900">Email</h3>
                  <p class="mt-1 text-gray-600">info@carrental.com</p>
                  <p class="mt-1 text-gray-600">support@carrental.com</p>
                </div>
              </div>
              
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div class="ml-3">
                  <h3 class="text-lg font-medium text-gray-900">Business Hours</h3>
                  <p class="mt-1 text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p class="mt-1 text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                  <p class="mt-1 text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div class="mt-8">
              <h3 class="text-lg font-medium text-gray-900 mb-4">Follow Us</h3>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-400 hover:text-primary-600 transition-colors">
                  <span class="sr-only">Facebook</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-primary-600 transition-colors">
                  <span class="sr-only">Instagram</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-primary-600 transition-colors">
                  <span class="sr-only">Twitter</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            
            <div v-if="submitted" class="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
              <div class="flex">
                <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Thank you for your message! We'll get back to you as soon as possible.</span>
              </div>
            </div>
            
            <form @submit.prevent="submitForm">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="name" 
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    :class="{ 'border-red-500': errors.name }"
                  >
                  <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Your Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="email" 
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    :class="{ 'border-red-500': errors.email }"
                  >
                  <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
                </div>
              </div>
              
              <div class="mb-6">
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="subject" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  :class="{ 'border-red-500': errors.subject }"
                >
                <p v-if="errors.subject" class="mt-1 text-sm text-red-600">{{ errors.subject }}</p>
              </div>
              
              <div class="mb-6">
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea 
                  id="message" 
                  v-model="message" 
                  rows="6" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  :class="{ 'border-red-500': errors.message }"
                ></textarea>
                <p v-if="errors.message" class="mt-1 text-sm text-red-600">{{ errors.message }}</p>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  class="w-full md:w-auto btn btn-primary py-3 px-8"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <!-- Map -->
      <div class="mt-12">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Our Location</h2>
          <div class="h-96 bg-gray-200 rounded-lg overflow-hidden">
            <!-- Placeholder for map -->
            <div class="w-full h-full flex items-center justify-center bg-gray-300">
              <p class="text-gray-600">Map placeholder - in a real application, an interactive map would be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>