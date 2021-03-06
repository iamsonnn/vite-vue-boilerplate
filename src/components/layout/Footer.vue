<template>
  <div class="footer">Footer</div>
</template>

<script>
export default {
  name: "Footer",
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.footer {
  width: 100%;
  padding: 2rem;
  margin-top: 2rem;
  background-color: $vv-header-bg-color;
  color: $vv-header-color;
  text-align: center;
}
</style>
