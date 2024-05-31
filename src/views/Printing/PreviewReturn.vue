<template>
  <div>
    <div class="card mb-2">
      <div class="card-body d-lg-flex justify-content-between">
        <div></div>
        <div>
          <button
            class="btn btn-secondary btn-sm"
            @click="$store.commit('invoicePrint/reset'), $router.back()"
          >
            Kembali
          </button>
          <button class="btn btn-primary btn-sm ms-1" @click="printInvoice">
            Cetak Invoice
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div>
          <CetakInvoiceReturnComponent />
        </div>
      </div>
    </div>
    <div v-show="show">
      <div ref="invoice">
        <CetakInvoiceReturnComponent />
      </div>
    </div>
  </div>
</template>
<script>
import Print from "@/services/Print";
export default {
  name: "PreviewReturnView",
  data() {
    return {
      show: false,
    };
  },
  computed: {
    header() {
      return this.$store.state.invoicePrint.invoice.header;
    },
  },
  created() {
    this.$store.dispatch("invoicePrint/showPrintInvoiceReturn", {
      Receipt: this.$route.params.Receipt,
    });
  },
  methods: {
    printInvoice() {
      Print.printInvoice(this.$refs.invoice);
    },
  },
};
</script>
