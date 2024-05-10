<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h5 class="fw-500 text-uppercase">Pembuatan Invoice Return</h5>
        <div class="divider"></div>
        <div class="d-flex justify-content-between">
          <div class="d-lg-flex align-items-end">
            <div class="form-group me-1">
              <label for="exampleFormControlInput1">Pencarian</label>
              <input
                style="font-size: 13px"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="No Sales Return"
                v-model="form.nosales"
                @keydown.enter="$store.dispatch('invoiceReturn/searchNewTrx')"
              />
            </div>
            <button
              type="button"
              class="btn btn-primary btn-sm me-1"
              @click="$store.dispatch('invoiceReturn/searchNewTrx')"
            >
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              class="btn btn-secondary btn-sm me-1"
              @click="$store.commit('invoiceReturn/resetNewTrx')"
            >
              <i class="fa fa-refresh" aria-hidden="true"></i>
            </button>
          </div>
          <div class="d-lg-flex align-items-end">
            <button
              class="btn btn-primary btn-sm"
              @click="$store.dispatch('invoiceReturn/saveNewTrx')"
            >
              Simpan & Cetak
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="card mt-2">
      <div class="card-body">
        <h6 class="fw-bold text-uppercase">Detail Sales Return</h6>
        <HeaderInvoiceReturnComponent />
        <div class="d-flex mt-2">
          <div class="col-lg-8 pe-1">
            <TableTrxInvoiceReturnComponent />
          </div>
          <div class="col-lg-4 ps-1">
            <div>
              <PaymentInvoiceReturnComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "InvoiceReturnView",
  computed: {
    form: {
      get() {
        return this.$store.state.invoiceReturn.form;
      },
      set(value) {
        return this.$store.commit("invoiceReturn/setForm", value);
      },
    },
  },
  created() {
    this.$store.commit("invoiceReturn/resetNewTrx");
  },
};
</script>
