import {routerAdmin} from '@/modules/Admin/routerAdmin'
import {routerBlog} from '@/modules/Blog/routerBlog'
import {routerHome} from '@/modules/Home/routerHome'
import {routerProducts} from '@/modules/Products/routerProducts'
import {RouteName} from '@/utils/RouteName'
import {createRouter, createWebHistory, RouterView, type LocationQueryValue, type RouteRecordRaw} from 'vue-router'

export const routes = [
  {
    path: '/login',
    name: RouteName.LOGIN,
    component: RouterView,
  },
  routerHome,
  routerProducts,
  routerBlog,
  routerAdmin,
] as const satisfies RouteRecordRaw[]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      children: routes,

      beforeEnter: (to) => {
        if (to.meta.defaultQueryParams) {
          let changed = false

          Object.keys(to.meta.defaultQueryParams).forEach(key => {
            if (!to.query[key] && to.meta.defaultQueryParams?.[key]) {
              to.query[key] = to.meta.defaultQueryParams[key] as LocationQueryValue

              changed = true
            }
          })

          if (changed) return to
        }
      },
    },
  ],
})

export default router
