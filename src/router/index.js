import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import ForgotPasswordView from '../views/ForgotPasswordView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductCreate from '../views/ProductCreate.vue'
import ProductEdit from '../views/ProductEdit.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationView
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPasswordView
  },
  {
    path: '/product-detail',
    name: 'product-detail',
    component: ProductDetailView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/product-create',
    name: 'product-create',
    component: ProductCreate
  },
  {
    path: '/products/:id/edit',
    name: 'ProductEdit',
    component: ProductEdit,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
