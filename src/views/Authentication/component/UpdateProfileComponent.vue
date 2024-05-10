<template>
  <div>
    <div
      class="modal fade"
      id="updateProfile"
      tabindex="-1"
      aria-labelledby="updateProfileLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="updateProfileLabel">Update Profile</h5>
            <button
              class="btn btn-secondary btn-sm"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="fa fa-times" aria-hidden="true"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="exampleFormControlInput50">Nama Lengkap</label>
              <input
                style="font-size: 13px"
                type="text"
                class="form-control"
                id="exampleFormControlInput50"
                v-model="datas.namalengkap"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput51">Username</label>
              <input
                style="font-size: 13px"
                type="text"
                class="form-control"
                id="exampleFormControlInput51"
                v-model="datas.username"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput52">Password</label>
              <input
                style="font-size: 13px"
                type="text"
                class="form-control"
                id="exampleFormControlInput52"
                v-model="datas.password"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput53">Kode Outlet</label>
              <input
                style="font-size: 13px"
                type="text"
                class="form-control"
                id="exampleFormControlInput53"
                v-model="datas.outlet"
              />
            </div>
            <div class="form-group">
              <label>Level</label>
              <select
                class="form-select"
                aria-label="Default select example"
                style="font-size: 13px"
                v-model="datas.level"
              >
                <option value="1">Super Administrator</option>
                <option value="2">Administrator</option>
                <option value="4">Kepala Kasir</option>
                <option value="3">Kasir</option>
                <option value="6">Logistik</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-sm"
              data-bs-dismiss="modal"
            >
              tutup
            </button>
            <button
              data-bs-dismiss="modal"
              type="button"
              class="btn btn-primary btn-sm"
              @click="$store.dispatch('authentication/updateProfile')"
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
    datas: {
      get() {
        return this.$store.state.daftarUser.detail;
      },
      set(value) {
        return this.$store.commit("daftarUser/setDetail", value);
      },
    },
  },
};
</script>
