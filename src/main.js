import { createApp } from "vue"
import App from "./App.vue"
import { routes } from "@/routes/routes"
import { createRouter, createWebHistory } from "vue-router"
import store from "./stores"

const app = createApp(App)

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

app.use(router)
app.use(store)
app.mount("#app")
