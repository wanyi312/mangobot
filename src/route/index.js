import { createWebHistory, createRouter } from 'vue-router'

const routes = [
   {
    path : '/product/:id',
    component : () => import('@/views/product/index.vue')
   }
]



const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router