<template>
  <h2>This is a Simple Page</h2>
  <h2>This has the same layout as HomePage and ParamPage</h2>
  <router-link :to="Paths.HOME">
    <button>Back to Home Page</button>
  </router-link>
</template>

<script>
import { Paths } from "@/routes/paths.js"

export default {
  name: "NormalPage",
  data() {
    return {
      Paths
    }
  },
}
</script>

<style scoped></style>
