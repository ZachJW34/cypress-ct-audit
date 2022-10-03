<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <button @click="throwError">Throw Error</button>
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App!" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    throwError() {
      throw new Error("uh oh");
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
