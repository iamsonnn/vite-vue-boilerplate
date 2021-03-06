<template>
  <p>
    <img alt="Vue logo" src="@/assets/logo.png" />
  </p>
  <h1>Vite + Vue boilerplate</h1>
  <h2>Includes: Vite 2, Vue 3, Vuex 4, Vue Router 4, SASS, Prettier,...</h2>
  <div>
    <router-link :to="Paths.SIMPLE">
      <button>Go To Simple Page</button>
    </router-link>
    <router-link :to="Paths.FULL">
      <button>Go To Full Page</button>
    </router-link>
  </div>



  <div>
    <router-link :to="Paths.PARAM('1')">
      <button>Go To Page With Param 1</button>
    </router-link>
    <router-link :to="Paths.PARAM('2')">
      <button>Go To Page With Param 2</button>
    </router-link>
  </div>


  <button @click="tryVuex">Try Loading with VueX</button>
</template>

<script>
import { Paths } from "@/routes/paths.js"
import { CommitMutation } from "@/stores/action.js"

export default {
  name: "Home",
  data() {
    return {
      Paths,
    }
  },
  methods: {
    tryVuex() {
      this.$store.commit(CommitMutation.LOADER_SHOW)
      setTimeout(() => {
        this.$store.commit(CommitMutation.LOADER_HIDE)
      }, 2000)
    },
  },
}
</script>
<style scoped>
a {
  color: #b94242;
}
</style>
