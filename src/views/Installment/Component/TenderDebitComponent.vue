<template>
  <div
    class="modal fade"
    id="tenderTypeDebit"
    tabindex="-1"
    aria-labelledby="tenderTypeDebitLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="tenderTypeDebitLabel">
            Pembayaran Debit
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="exampleFormControlInput30">No Kartu</label>
            <input
              style="font-size: 13px"
              type="text"
              class="form-control"
              id="exampleFormControlInput30"
              v-model="transaksi.nocard"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput30">Nama Kartu</label>
            <input
              style="font-size: 13px"
              type="text"
              class="form-control"
              id="exampleFormControlInput30"
              v-model="transaksi.namecard"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput30">No Batch</label>
            <input
              style="font-size: 13px"
              type="text"
              class="form-control"
              id="exampleFormControlInput30"
              v-model="transaksi.noapproval"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput30">Jumlah Bayar Cicilan</label>
            <input
              style="font-size: 13px"
              type="text"
              class="form-control"
              id="exampleFormControlInput30"
              v-model="transaksi.bayar"
            />
          </div>
          <div class="card mt-2">
            <div class="card-body">
              <h4>{{ transaksi.bayar ? transaksi.bayar : 0 | Rupiah }}</h4>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            data-bs-dismiss="modal"
            @click="$store.commit('installment/resetTender')"
          >
            Batal
          </button>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            data-bs-dismiss="modal"
            @click="$store.dispatch('installment/saveTenderDebit', '03')"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      tenType: (state) => state.helper.tenType,
    }),
    transaksi: {
      get() {
        return this.$store.state.installment.transaksi;
      },
      set(value) {
        return this.$store.commit("installment/setTransaksi", value);
      },
    },
  },
};
</script>
