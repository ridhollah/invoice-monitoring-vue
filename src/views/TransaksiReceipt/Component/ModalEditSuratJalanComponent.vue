<template>
  <div
    class="modal fade"
    id="modalEditSuratJalan"
    tabindex="-1"
    aria-labelledby="modalEditSuratJalanLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalEditSuratJalanLabel">
            Ubah Alamat Pengiriman
          </h5>
          <button
            class="btn btn-secondary btn-sm"
            data-bs-dismiss="modal"
            data-bs-target="#exampleModal"
            data-bs-toggle="modal"
            aria-label="Close"
            @click="$store.commit('transaksiReceipt/resetUpdate')"
          >
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="exampleFormControlInput30">Tanggal Kirim </label>
            <input
              style="font-size: 13px"
              type="date"
              class="form-control"
              id="exampleFormControlInput30"
              v-model="form.datesend"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput30">Nama </label>
            <input
              style="font-size: 13px"
              type="text"
              class="form-control"
              id="exampleFormControlInput30"
              v-model="form.namalengkap"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput30">Alamat </label>
            <input
              style="font-size: 13px"
              type="text"
              class="form-control"
              id="exampleFormControlInput30"
              v-model="form.address"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput30">Handphone </label>
            <input
              style="font-size: 13px"
              type="text"
              class="form-control"
              id="exampleFormControlInput30"
              v-model="form.nohp"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            data-bs-dismiss="modal"
            data-bs-target="#exampleModal"
            data-bs-toggle="modal"
            @click="$store.commit('transaksiReceipt/resetUpdate')"
          >
            Tutup
          </button>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            data-bs-target="#exampleModal"
            data-bs-toggle="modal"
            data-bs-dismiss="modal"
            @click="$store.dispatch('transaksiReceipt/disUpdateShipping')"
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
    form: {
      get() {
        return this.$store.state.transaksiReceipt.updateShipping;
      },
      set(value) {
        return this.$store.commit("transaksiReceipt/setUpdateShipping", value);
      },
    },
  },
};
</script>
