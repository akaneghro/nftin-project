import { createRouter, createWebHistory } from 'vue-router'
import ConnectWalletView from '../views/ConnectWalletView.vue'
import CheckTokenView from '../views/CheckTokenView.vue'
import SignInSuccesView from '../views/SignInSuccesView.vue'
import SignInFailedView from '../views/SignInFailedView.vue'
import MintView from '../views/MintView.vue'
import MintingProcessView from '../views/MintingProcessView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/:id',
    name: 'connect',
    component: ConnectWalletView
  },
  {
    path: '/checkToken',
    name: 'check',
    component: CheckTokenView
  },
  {
    path: '/signInSucces',
    name: 'succes',
    component: SignInSuccesView
  },
  {
    path: '/signInFailed',
    name: 'failed',
    component: SignInFailedView
  },
  {
    path: '/mint',
    name: 'mint',
    component: MintView
  },
  {
    path: '/minting',
    name: 'minting',
    component: MintingProcessView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
