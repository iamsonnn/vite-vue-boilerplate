<template>
  <div>
    <h2>Counter is: {{ counter }}</h2>
    <p>This will be increased by 1 per second</p>
  </div>
</template>

<script>
export default {
  name: "AutoCounter",
  data() {
    return {
      counter: 0,
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  },
}
</script>

<style scoped></style>
