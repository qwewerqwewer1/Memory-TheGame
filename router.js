import { createRouter, createWebHistory } from 'vue-router';
import StartMenu from '@/components/StartMenu';
import GamePage from '@/components/GamePage';

const routes = [
  { path: '/', component: StartMenu },
  { path: '/GamePage', component: GamePage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
