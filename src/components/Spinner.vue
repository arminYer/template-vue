<template>
  <div
    class="loader ease-linear rounded-full border-3 border-t-3 border-gray-50 border-opacity-10 h-6 w-6"
  />   
</template>

<style scoped>
.loader {
  border-top-color: #fff;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}
@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
