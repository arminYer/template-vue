<template>
  <div class="bg-white dark:bg-dark-700 h-full">
    <img
      class="center"
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <div id="nav">
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
html, body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
#nav {
  color: #42b983;
}
</style>
