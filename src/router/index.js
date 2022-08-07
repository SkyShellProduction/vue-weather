import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import Favorite from '@/views/Favorite.vue';
import FavoriteId from '@/views/FavoriteId.vue';
import Error from '@/views/Error.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: Favorite,
  },
  {
    path: '/favorite/:id',
    component: FavoriteId,
  },
  {
    path: '/:pathMatch(.*)*',
    component: Error,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
