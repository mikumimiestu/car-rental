import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CarListing from '../views/CarListing.vue';
import CarDetail from '../views/CarDetail.vue';
import Booking from '../views/Booking.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cars',
    name: 'Cars',
    component: CarListing,
  },
  {
    path: '/cars/:id',
    name: 'CarDetail',
    component: CarDetail,
    props: true,
  },
  {
    path: '/booking/:id',
    name: 'Booking',
    component: Booking,
    props: true,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;