import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/FrontViews/HomeView.vue')
      },
      {
        path: '/products',
        component: () => import('../views/FrontViews/ProductsView.vue')
      },
      {
        path: '/cart',
        component: () => import('../views/FrontViews/CartView.vue')
      },
      {
        path: '/product',
        component: () => import('../views/FrontViews/ProductView.vue')
      },
      {
        path: '/checkout',
        component: () => import('../views/FrontViews/CheckoutView.vue')
      },
      {
        path: '/searchOrder',
        component: () => import('../views/FrontViews/SearchOrderView.vue')
      },
      {
        path: '/favorites',
        component: () => import('../views/FrontViews/FavoritesView.vue')
      },
      {
        path: '/gopopov',
        component: () => import('../views/FrontViews/TestView.vue')
      },
      {
        path: '/pokemon',
        component: () => import('../views/FrontViews/PokemonView.vue')
      },
      {
        path: '/pokemons',
        component: () => import('../views/FrontViews/PokemonsView.vue')
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('../views/FrontViews/404View.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/DashboardViews/AdminProductsView.vue')
      }
    ]
  }
  // ,
  // {
  //   path: '*',
  //   component: () => import('../views/404View.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
