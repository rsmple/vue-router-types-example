import {routerAdmin} from '@/modules/Admin/routerAdmin'
import {routerBlog} from '@/modules/Blog/routerBlog'
import {routerHome} from '@/modules/Home/routerHome'
import {routerProducts} from '@/modules/Products/routerProducts'
import {createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'

export const routes = [
  routerHome,
  routerProducts,
  routerBlog,
  routerAdmin,
] as const satisfies RouteRecordRaw[]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
