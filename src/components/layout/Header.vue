<template>
  <div class="header">Header</div>
</template>

<script>
export default {
  name: "Header",
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.header {
  width: 100%;
  padding: 2rem;
  margin-bottom: 2rem;
  background-color: $vv-header-bg-color;
  color: $vv-header-color;
  text-align: center;
}
</style>
