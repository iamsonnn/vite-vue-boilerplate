<template>
  <h1>This is page with parameter</h1>
  <h1>
    Param=<b>{{ $route.params["slug"] }}</b>
  </h1>
  <router-link v-if="this.$route.params['slug'] !== '1'" :to="Paths.PARAM('1')">
    <button>Go To Same Component With Param 1</button>
  </router-link>
  <router-link v-if="this.$route.params['slug'] !== '2'" :to="Paths.PARAM('2')">
    <button>Go To Same Component With Param 2</button>
  </router-link>
  <router-link :to="Paths.HOME">
    <button>Back to Home</button>
  </router-link>
</template>

<script>
import { Paths } from "@/routes/paths.js"

export default {
  name: "ParamPage",
  data() {
    return {
      Paths,
    }
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        console.log(
          `param changed from ${JSON.stringify(
            previousParams
          )} to ${JSON.stringify(toParams)}`
        )
      }
    )
  },
}
</script>

<style scoped></style>
