<template>
  <div class="full-container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "FullLayout",
}
</script>

<style scoped>
.full-container {
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
