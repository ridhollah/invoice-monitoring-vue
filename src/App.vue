<template>
  <div id="app">
    <AlertComponent />
    <SpinnersComponent />
    <router-view></router-view>
  </div>
</template>
<script>
import AlertComponent from "./components/AlertComponent.vue";
import SpinnersComponent from "./components/SpinnersComponent.vue";

export default {
  components: { AlertComponent, SpinnersComponent },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #dcdcdc;
  height: 100vh;
  overflow: auto;
}
</style>
