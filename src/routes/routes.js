import Home from "@/views/HomePage.vue"
import { Paths } from "@/routes/paths.js"
import MainLayout from "@/layouts/MainLayout.vue"
import FullPage from "@/views/FullPage.vue"
import SimplePage from "@/views/SimplePage.vue"
import ParamPage from "@/views/ParamPage.vue"
import FullLayout from '@/layouts/FullLayout.vue'

export const routes = [
  {
    path: "/",
    component: MainLayout,
    exact: false,
    children: [
      {
        path: Paths.HOME,
        component: Home,
      },
      {
        path: Paths.SIMPLE,
        component: SimplePage,
      },
      {
        // Path will be `/page/:slug/info`, 'slug' is the parameter here
        path: Paths.PARAM(),
        component: ParamPage,
      },
    ],
  },
  {
    path: Paths.FULL,
    exact: false,
    component: FullLayout,
    children: [
      {
        path: Paths.FULL,
        component: FullPage,
      },
    ],
  },
]
