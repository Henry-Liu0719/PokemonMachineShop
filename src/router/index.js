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
        path: '/checkout-success',
        component: () => import('../views/FrontViews/CheckoutSuccessView.vue')
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
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
