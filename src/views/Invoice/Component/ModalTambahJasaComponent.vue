<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel"></h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="card">
            <div class="card-body">
              <h5>Alamat Pengiriman</h5>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                  @change="$store.commit('invoice/setChekedMember')"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Gunakan data member
                </label>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Nama</label>
                <input
                  style="font-size: 13px"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="alamatJasa.name"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Alamat</label>
                <input
                  style="font-size: 13px"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="alamatJasa.address"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">No Handphone</label>
                <input
                  style="font-size: 13px"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="alamatJasa.nohp"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Tanggal Kirim</label>
                <input
                  style="font-size: 13px"
                  type="date"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="alamatJasa.datesend"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            data-bs-dismiss="modal"
          >
            Batal
          </button>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            data-bs-dismiss="modal"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    alamatJasa: {
      get() {
        return this.$store.state.invoice.alamatJasa;
      },
      set(value) {
        return this.$store.commit("invoice/setAlamatJasa", value);
      },
    },
    biayaJasa: {
      get() {
        return this.$store.state.invoice.biayaJasa;
      },
      set(value) {
        return this.$store.commit("invoice/setBiayaJasa", value);
      },
    },
  },
};
</script>
