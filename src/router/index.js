import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import JobDetails from '@/views/JobDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/jobDetails',
    name: 'JobDetails',
    component: JobDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
