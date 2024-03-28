<template>
  <div
    class="modal fade"
    id="tenderTypeVoucher"
    tabindex="-1"
    aria-labelledby="tenderTypeVoucherLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="tenderTypeVoucherLabel">
            Metode Voucher
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!-- <div>
            <label for="exampleFormControlInput30">Metode Pembayaran</label>
            <select
              class="form-select"
              aria-label="Default select example"
              style="font-size: 13px"
              v-model="transaksi.tentype"
            >
              <option selected value="0">Pilih tender type</option>
              <option
                v-for="(n, index) in tenType"
                :key="index"
                :value="n.TenderName"
              >
                {{ n.TenderName }}
              </option>
            </select>
          </div> -->
          <div class="form-group">
            <label for="exampleFormControlInput30">No Voucher</label>
            <input
              style="font-size: 13px"
              type="text"
              class="form-control"
              id="exampleFormControlInput30"
              v-model="transaksi.novoucher"
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
            @click="$store.dispatch('installment/saveTenderVoucher', '04')"
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
