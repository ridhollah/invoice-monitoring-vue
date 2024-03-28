<template>
  <div
    class="modal fade"
    id="modalConfirm"
    tabindex="-1"
    aria-labelledby="modalConfirmLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalConfirmLabel">
            Confirm Surat Jalan #
            {{ $store.state.logistik.idConfirm.noshipping }}
          </h5>
          <button
            class="btn btn-secondary btn-sm"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="$store.commit('setidConfirm', {})"
          >
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Deskripsi</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              v-model="form.deskripsi"
            ></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            data-bs-dismiss="modal"
            @click="$store.commit('setidConfirm', {})"
          >
            Batal
          </button>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            data-bs-dismiss="modal"
            @click="$store.dispatch('logistik/confirmShipping')"
          >
            Confirm
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
        return this.$store.state.logistik.idConfirm;
      },
      set(value) {
        return this.$store.commit("logistik/setidConfirm", value);
      },
    },
  },
};
</script>
