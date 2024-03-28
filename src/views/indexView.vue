<template>
  <div id="index">
    <SidebarComponent />
    <div id="content">
      <NavbarComponent />
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>
<script>
import SidebarComponent from "@/components/SidebarComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
export default {
  components: {
    SidebarComponent,
    NavbarComponent,
  },
};
</script>
<style>
#index {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: transparent !important;
}
</style>
