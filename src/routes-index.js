import { createRouter, createWebHistory } from 'vue-router ';
import Home from './views/Home.vue';
import Post from './views/Post.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/post/:id', name: 'Post', component:()=>import('./views/Post.vue'), props: true },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
