<template>
  <div class="alert-body" v-show="$store.getters['alert/countAlerts'] > 0">
    <div
      v-for="(alert, index) in showAlerts"
      :key="index"
      :class="[alert.status ? ' alert-success' : 'alert-danger']"
      class="alert"
      role="alert"
    >
      {{ alert.message }}
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    showAlerts() {
      return this.$store.state.alert.alerts;
    },
  },
};
</script>
<style>
.alert-body {
  position: absolute;
  right: 1%;
  top: 9%;
  z-index: 9999;
  height: 80vh;
  overflow: auto;
  width: 400px;
}

.alert-body::-webkit-scrollbar {
  display: none;
}
</style>
