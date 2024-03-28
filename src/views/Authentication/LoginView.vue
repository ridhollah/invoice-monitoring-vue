<template>
  <div id="login">
    <div
      class="row justify-content-center align-items-center"
      style="height: 90vh"
    >
      <div class="col-4">
        <div class="card">
          <div class="card-body">
            <div class="text-center">
              <img
                style="width: 50px; height: 50px"
                src="../../../public/suzuya.jpg"
                alt=""
                srcset=""
              />
              <h5 class="fw-semibold mt-2 text-uppercase font-monospace">
                Invoice Monitoring Apps
              </h5>
            </div>
            <div class="divider"></div>
            <form>
              <div>
                <label for="inputEmail4" class="form-label">Username</label>
                <input
                  v-model="formLogin.username"
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  @keydown.enter="$store.dispatch('authentication/Login')"
                />
              </div>
              <div>
                <label for="inputPassword4" class="form-label">Password</label>
                <input
                  v-model="formLogin.password"
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  @keydown.enter="$store.dispatch('authentication/Login')"
                />
              </div>

              <div class="col-12 mt-2">
                <button
                  type="button"
                  style="width: 100%"
                  class="btn btn-primary btn-sm"
                  @click="$store.dispatch('authentication/Login')"
                >
                  Masuk
                </button>
              </div>
              <div class="text-center mt-3">
                <p style="font-size: 13px" class="font-monospace">
                  Copyright@SuzuyaGroup | 2024
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    formLogin: {
      get() {
        return this.$store.state.authentication.formLogin;
      },
      set(value) {
        return this.$store.commit("setFormLogin", value);
      },
    },
  },
};
</script>
<style>
#login {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  height: 100vh;
  background-color: #ececec;
}
</style>
