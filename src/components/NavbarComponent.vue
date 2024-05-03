<template>
  <div id="navbar" class="d-flex justify-content-end">
    <!-- <i class="fa fa-align-justify icon"></i> -->
    <div class="d-flex align-items-center">
      <div class="me-3">
        <a
          href=""
          style="font-size: 12px; color: #fff; text-decoration: none"
          >{{ timestamp }}</a
        >
      </div>
      <div class="profile">
        <img
          @click="$store.commit('sidebar/profile')"
          src="../assets/profile.png"
          alt=""
        />
        <ul
          class="profile-link"
          :class="[$store.state.sidebar.profile ? 'show' : '']"
        >
          <li>
            <router-link to="/member-piutang">
              <i class="fa fa-user icon" style="color: rgb(255, 170, 0)"></i
              >Profile
            </router-link>
          </li>
          <li @click="$store.dispatch('authentication/Logout')">
            <router-link to="/login">
              <i class="fa fa-sign-out icon" style="color: rgb(255, 51, 0)"></i
              >Keluar
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timestamp: "",
    };
  },
  methods: {
    liveDate: function () {
      const today = new Date();
      const date =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;
      this.timestamp = dateTime;
    },
  },
  created() {
    setInterval(this.liveDate, 1000);
  },
};
</script>
<style scoped>
ul {
  margin-bottom: 0 !important;
  padding-right: 1rem !important;
}
</style>
