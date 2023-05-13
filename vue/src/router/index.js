import { createRouter, createWebHistory } from 'vue-router'
import Layout from "@/layout/Layout";

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/user',
    children: [
      {
        path: '/user',
        name: 'user',
        component: () => import("@/views/User")
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("@/views/Login")
  },
  {
    path: '/register',
    name: 'register',
    component: () => import("@/views/Register")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
