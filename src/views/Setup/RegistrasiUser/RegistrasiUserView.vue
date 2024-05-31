<template>
  <div class="card">
    <div class="card-body">
      <h5 class="fw-500 text-uppercase">Registrasi User</h5>
      <div class="divider"></div>
      <div class="card" style="width: 50%">
        <div class="card-body">
          <div class="form-group">
            <label for="exampleFormControlInput1">Nama Lengkap</label>
            <input
              style="font-size: 13px"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="form.namalengkap"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Username</label>
            <input
              style="font-size: 13px"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="form.username"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Password</label>
            <input
              style="font-size: 13px"
              type="password"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="form.password"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Kode Outlet</label>
            <input
              style="font-size: 13px"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="form.outlet"
              :disabled="$store.getters['registrasiUser/formOutlet']"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Level</label>
            <select
              class="form-select"
              aria-label="Default select example"
              style="font-size: 13px"
              v-model="form.level"
            >
              <option :value="n.id" v-for="(n, index) in level" :key="index">
                {{ n.nama }}
              </option>
            </select>
          </div>
          <div class="mt-2 text-end">
            <button class="btn btn-secondary btn-sm me-2">Batal</button>
            <button
              class="btn btn-primary btn-sm"
              @click="$store.dispatch('registrasiUser/regisSave')"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    form: {
      get() {
        return this.$store.state.registrasiUser.form;
      },
      set(value) {
        return this.$store.commit("registrasiUser/setForm", value);
      },
    },
    level() {
      return this.$store.state.helper.level;
    },
  },
  created() {
    this.$store.dispatch("registrasiUser/resetRegis");
    this.$store.dispatch("helper/showUserLevel");
  },
};
</script>
