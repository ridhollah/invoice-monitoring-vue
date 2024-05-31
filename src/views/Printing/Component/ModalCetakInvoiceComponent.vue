<template>
  <div
    class="modal fade"
    id="invoiceCetak"
    tabindex="-1"
    aria-labelledby="invoiceCetakLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="invoiceCetakLabel"></h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div ref="invoice">
            <CetakInvoiceComponent />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            data-bs-dismiss="modal"
            @click="$store.commit('invoicePrint/resetPrintInvoice')"
          >
            Batal
          </button>
          <button
            @click="printInvoice"
            type="button"
            class="btn btn-primary btn-sm"
          >
            Cetak
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Print from "@/services/Print";
export default {
  methods: {
    printInvoice() {
      Print.printInvoice(this.$refs.invoice);
    },
  },
};
</script>
