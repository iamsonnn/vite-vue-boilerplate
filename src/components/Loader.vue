<template>
  <div v-if="loading" class="loading-container">
    <div class="sk-chase">
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
    </div>
    <br />
    <br />
    <h4 class="subtitle is-5">Loading</h4>
    <br />
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {StateType} from '@/stores/stateType.js'

export default {
  computed: mapState({
    loading: state => state[StateType.LOADER].loading
  }),
}
</script>

<style lang="scss">
@import "src/styles/variables";

.loading-container {
  top: 0;
  left: 0;
  z-index: 1000;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fffc;
  h4 {
    background-color: #fffa;
    padding: 5px;
  }
}
.sk-chase {
  width: 40px;
  height: 40px;
  position: relative;
  animation: sk-chase 2.5s infinite linear both;
}

.sk-chase-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: sk-chase-dot 2s infinite ease-in-out both;
}

.sk-chase-dot::before {
  content: "";
  display: block;
  width: 25%;
  height: 25%;
  background-color: $vv-primary-color;
  border-radius: 100%;
  animation: sk-chase-dot-before 2s infinite ease-in-out both;
}

.sk-chase-dot:nth-child(1) {
  animation-delay: -1.1s;
}
.sk-chase-dot:nth-child(2) {
  animation-delay: -1s;
}
.sk-chase-dot:nth-child(3) {
  animation-delay: -0.9s;
}
.sk-chase-dot:nth-child(4) {
  animation-delay: -0.8s;
}
.sk-chase-dot:nth-child(5) {
  animation-delay: -0.7s;
}
.sk-chase-dot:nth-child(6) {
  animation-delay: -0.6s;
}
.sk-chase-dot:nth-child(1)::before {
  animation-delay: -1.1s;
}
.sk-chase-dot:nth-child(2)::before {
  animation-delay: -1s;
}
.sk-chase-dot:nth-child(3)::before {
  animation-delay: -0.9s;
}
.sk-chase-dot:nth-child(4)::before {
  animation-delay: -0.8s;
}
.sk-chase-dot:nth-child(5)::before {
  animation-delay: -0.7s;
}
.sk-chase-dot:nth-child(6)::before {
  animation-delay: -0.6s;
}

@keyframes sk-chase {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes sk-chase-dot {
  80%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes sk-chase-dot-before {
  50% {
    transform: scale(0.4);
  }
  100%,
  0% {
    transform: scale(1);
  }
}
</style>
