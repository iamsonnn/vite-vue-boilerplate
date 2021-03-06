<template>
  <router-view />
  <Loading />
</template>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
<script>
import Loading from '@/components/Loader.vue'
export default {
  components: {Loading}
}
</script>
<style src="./main.scss" />
