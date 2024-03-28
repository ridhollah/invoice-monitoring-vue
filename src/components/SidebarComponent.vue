<template>
  <div class="home">
    <!-- SIDEBAR -->
    <section id="sidebar">
      <a href="/" class="brand">Invoice Monitoring</a>
      <div class="d-flex p-2 mt-2">
        <div class="col-4">
          <img
            style="width: 45px; height: 45px; border-radius: 50%"
            src="../assets/profile.png"
            alt=""
          />
        </div>
        <div
          class="col-8"
          style="font-size: 13px; color: #fff; padding-top: 5px"
        >
          <p class="fw-bold mb-1">
            {{ $store.state.authentication.user.namalengkap }}
          </p>
          <p style="font-size: 11px">
            <i class="fa fa-circle text-success me-2"></i>
            {{ $store.state.authentication.user.namalevel }}
          </p>
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

        <!-- <li @click="$store.commit('sidebar/setActive', 1)">
          <router-link
            to="/dashboard"
            :class="[$store.state.sidebar.active == 1 ? 'active' : '']"
          >
            <i
              class="fa fa-tachometer icon"
              aria-hidden="true"
              style="color: aquamarine"
            ></i
            >Dashboard
          </router-link>
        </li> -->
        <!-- <li @click="$store.commit('sidebar/setActive', 2)">
          <router-link
            to="/invoice"
            :class="[$store.state.sidebar.active == 2 ? 'active' : '']"
          >
            <i class="fa fa-file-o icon" style="color: rgb(0, 145, 255)"></i
            >Buat Invoice
          </router-link>
        </li>
        <li>
          <a
            :class="[$store.state.sidebar.active == 4 ? 'active' : '']"
            @click="$store.commit('sidebar/setActive', 4)"
          >
            <i class="fa fa-files-o icon" style="color: rgb(0, 145, 255)"></i
            >Dokumen<i class="fa fa-angle-right icon-right"></i>
          </a>
          <ul
            class="side-dropdown"
            :class="[$store.state.sidebar.active == 4 ? 'show' : '']"
          >
            <li>
              <router-link to="/data-transaksi-receipt">
                <i
                  class="fa fa-files-o icon"
                  style="color: rgb(255, 170, 0)"
                ></i>
                Receipt
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <a
            :class="[$store.state.sidebar.active == 6 ? 'active' : '']"
            @click="$store.commit('sidebar/setActive', 6)"
          >
            <i class="fa fa-files-o icon" style="color: rgb(255, 170, 0)"></i
            >Piutang Member<i class="fa fa-angle-right icon-right"></i>
          </a>
          <ul
            class="side-dropdown"
            :class="[$store.state.sidebar.active == 6 ? 'show' : '']"
          >
            <li>
              <router-link to="/member-piutang">
                <i class="fa fa-plus icon" style="color: rgb(195, 255, 15)"></i
                >Tambah Piutang
              </router-link>
            </li>
            <li>
              <router-link to="/daftar-member-piutang">
                <i
                  class="fa fa-files-o icon"
                  style="color: rgb(255, 170, 0)"
                ></i>
                Daftar Piutang
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <a
            :class="[$store.state.sidebar.active == 8 ? 'active' : '']"
            @click="$store.commit('sidebar/setActive', 8)"
          >
            <i class="fa fa-files-o icon" style="color: rgb(210, 35, 245)"></i
            >Laporan<i class="fa fa-angle-right icon-right"></i>
          </a>
          <ul
            class="side-dropdown"
            :class="[$store.state.sidebar.active == 8 ? 'show' : '']"
          >
            <li>
              <router-link to="/laporan-receipt">
                <i
                  class="fa fa-files-o icon"
                  style="color: rgb(255, 170, 0)"
                ></i
                >Receipt
              </router-link>
            </li>
            <li>
              <router-link to="/laporan-transaksi">
                <i
                  class="fa fa-files-o icon"
                  style="color: rgb(255, 170, 0)"
                ></i
                >Transaksi
              </router-link>
            </li>
            <li>
              <router-link to="/laporan-barang">
                <i
                  class="fa fa-files-o icon"
                  style="color: rgb(255, 170, 0)"
                ></i
                >Barang Terjual
              </router-link>
            </li>
          </ul>
        </li>
        <li @click="$store.commit('sidebar/setActive', 9)">
          <router-link
            to="/logistik"
            :class="[$store.state.sidebar.active == 9 ? 'active' : '']"
          >
            <i class="fa fa-file-o icon" style="color: rgb(0, 145, 255)"></i
            >Logistik
          </router-link>
        </li> -->
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
