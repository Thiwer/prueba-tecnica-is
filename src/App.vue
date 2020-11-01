<template>
  <div id="app">
    <div class="container is-fluid mb-5">
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.is-pointer {
  cursor: pointer;
}

.back-button {
  position: absolute !important;
  top: 10px;
  left: 30px;
}
</style>
