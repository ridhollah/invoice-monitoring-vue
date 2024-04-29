<template>
  <div class="home">
    <!-- SIDEBAR -->
    <section id="sidebar">
      <a href="/" class="brand">Invoice Monitoring</a>
      <div class="p-2">
        <div class="card">
          <div class="card-body">
            <div class="d-flex">
              <div class="col-3 align-content-center text-center">
                <img
                  style="width: 45px; height: 45px; border-radius: 50%"
                  src="../assets/profile.png"
                  alt=""
                />
              </div>
              <div
                class="col-9"
                style="font-size: 13px; color: #000; padding-top: 5px"
              >
                <p class="fw-bold mb-1">
                  {{ $store.state.authentication.user.namalengkap }}
                </p>
                <p style="font-size: 11px">
                  <i class="fa fa-circle text-success me-2"></i>
                  {{ $store.state.authentication.user.namalevel }}
                </p>
                <p style="font-size: 11px">
                  <i class="fa fa-building me-2"></i>
                  {{ $store.state.authentication.user.outlet_name }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul class="side-menu">
        <li
          style="
            color: rgb(154, 154, 154);
            font-size: 12px;
            text-transform: uppercase;
          "
          class="font-monospace mb-2"
        >
          Main
        </li>

        <li v-for="(m, index) in menu" :key="index">
          <router-link
            v-if="m.drop == 0"
            :to="m.href"
            :class="[$store.state.sidebar.active == index ? 'active' : '']"
          >
            <i :class="m.icon" :style="{ color: m.color }"></i>{{ m.nama }}
          </router-link>
          <a
            v-if="m.drop == 1"
            :class="[$store.state.sidebar.active == index ? 'active' : '']"
            @click="$store.commit('sidebar/setActive', index)"
          >
            <i :class="m.icon" :style="{ color: m.color }"></i>{{ m.nama
            }}<i v-if="m.drop == 1" class="fa fa-angle-right icon-right"></i>
          </a>
          <ul
            v-if="m.drop == 1"
            class="side-dropdown"
            :class="[$store.state.sidebar.active == index ? 'show' : '']"
          >
            <li v-for="(s, i) in m.side" :key="i">
              <router-link :to="s.href">
                <i :class="s.icon" :style="{ color: s.color }"></i>
                {{ s.nama }}
              </router-link>
            </li>
          </ul>
        </li>

        <li
          style="
            color: rgb(154, 154, 154);
            font-size: 12px;
            text-transform: uppercase;
          "
          class="font-monospace mt-2 mb-2"
        >
          Help
        </li>
        <li @click="$store.dispatch('authentication/Logout')">
          <router-link to="/login">
            <i class="fa fa-sign-out icon" style="color: rgb(255, 51, 0)"></i
            >Keluar
          </router-link>
        </li>
      </ul>
    </section>
    <!-- SIDEBAR -->
  </div>
</template>

<script>
export default {
  name: "HomeView",
  computed: {
    menu() {
      return this.$store.state.authentication.menu;
    },
  },
};
</script>
<style>
ul li a {
  cursor: pointer;
}
</style>
