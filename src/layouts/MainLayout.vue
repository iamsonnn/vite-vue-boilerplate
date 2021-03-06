<template>
  <Header />
  <div class="main-content">
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/layout/Header.vue"
import Footer from "@/components/layout/Footer.vue"
export default {
  name: "MainLayout",
  components: { Footer, Header },
}
</script>

<style lang="scss" scoped>
.main-content {
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
