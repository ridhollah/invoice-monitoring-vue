<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h5 class="fw-bold text-uppercase">Pembuatan Invoice Baru</h5>
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
                placeholder="No transaksi"
                v-model="form.nosales"
                @keydown.enter="$store.dispatch('invoice/searchNewTrx')"
              />
            </div>
            <button
              type="button"
              class="btn btn-primary btn-sm me-1"
              @click="$store.dispatch('invoice/searchNewTrx')"
            >
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              class="btn btn-secondary btn-sm me-1"
              @click="$store.commit('invoice/resetNewTrx')"
            >
              <i class="fa fa-refresh" aria-hidden="true"></i>
            </button>
            <!-- <button
              type="button"
              class="btn btn-primary btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              v-if="$store.getters['invoice/countTtlsisa'] == 1"
            >
              Surat Jalan
            </button> -->
            <button
              type="button"
              class="btn btn-primary btn-sm ms-1"
              data-bs-toggle="modal"
              data-bs-target="#customer"
            >
              Customer
            </button>
          </div>
          <div class="d-lg-flex align-items-end">
            <button
              class="btn btn-primary btn-sm"
              @click="$store.dispatch('invoice/saveNewTrx')"
            >
              Simpan & Cetak
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="card mt-2">
      <div class="card-body">
        <h6 class="fw-bold text-uppercase">Detail Transaksi</h6>
        <HeaderInvoiceComponent />
        <div class="d-flex mt-2">
          <div class="col-lg-8 pe-1">
            <TableTrxComponent />
          </div>
          <div class="col-lg-4 ps-1">
            <div>
              <PaymentComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="card mt-2">
      <div class="card-body text-end">
        <button
          class="btn btn-primary btn-sm"
          @click="$store.dispatch('invoice/saveNewTrx')"
        >
          Simpan
        </button>
      </div>
    </div> -->
    <ModalCustomerComponent />
    <ModalTambahJasaComponent />
  </div>
</template>
<script>
export default {
  name: "InvoiceView",
  computed: {
    form: {
      get() {
        return this.$store.state.invoice.form;
      },
      set(value) {
        return this.$store.commit("invoice/setForm", value);
      },
    },
  },
  created() {
    this.$store.commit("invoice/resetNewTrx");
  },
};
</script>
