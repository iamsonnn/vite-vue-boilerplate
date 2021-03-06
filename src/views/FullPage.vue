<template>
  <h1>This is full screen page</h1>
  <router-link :to="Paths.HOME">
    <button>Back to Home</button>
  </router-link>
</template>

<script>
import {Paths} from '@/routes/paths.js'

export default {
  name: "FullPage",
  data() {
    return {
      Paths,
    }
  },
}
</script>

<style scoped></style>
