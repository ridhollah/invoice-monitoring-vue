<template>
  <div id="navbar" class="d-flex justify-content-end">
    <!-- <i class="fa fa-align-justify icon"></i> -->
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
        <!-- <li>
          <router-link to="/member-piutang">
            <i class="fa fa-user icon" style="color: rgb(255, 170, 0)"></i
            >Profile
          </router-link>
        </li> -->
        <li @click="$store.dispatch('authentication/Logout')">
          <router-link to="/login">
            <i class="fa fa-sign-out icon" style="color: rgb(255, 51, 0)"></i
            >Keluar
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style></style>
