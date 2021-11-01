<template>
  <div
    id="home"
    class="text-black dark:text-white text-center"
  >
    <img
      class="center"
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <ToggleDark />    
    <div id="nav">
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link> |
      <router-link to="/blank">
        Blank
      </router-link>      
    </div>  
    <router-view />
  </div>
</template>
<style>
#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

<route lang="yaml">
meta:
  layout: default
</route>