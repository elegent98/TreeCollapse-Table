import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import DataTable from "@/views/DataTableView.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path:'/',
        name:'home',
        component:HomeView
      },
      {
        path:'/data',
        name:'data',
        component:DataTable
      },
  ]
})

export default router
