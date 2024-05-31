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
          <button
            class="btn btn-primary btn-sm ms-1"
            @click="printSuratJalan"
            v-if="header.noshipping != ''"
          >
            Cetak Surat Jalan
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div>
          <CetakInvoiceComponent />
        </div>
      </div>
    </div>
    <div class="card mt-2" v-if="header.noshipping != ''">
      <div class="card-body">
        <div>
          <CetakSuratJalanComponent />
        </div>
      </div>
    </div>
    <div v-show="show">
      <div ref="invoice">
        <CetakInvoiceComponent />
      </div>
    </div>
    <div v-show="show">
      <div ref="sjalan">
        <CetakSuratJalanComponent />
      </div>
    </div>
  </div>
</template>
<script>
import Print from "@/services/Print";
export default {
  name: "PreviewView",
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
    let params = {
      Receipt: this.$route.params.Receipt,
      invoice: this.$route.params.invoiceno,
    };
    this.$store.dispatch("invoicePrint/showPrintShipping", params);
    this.$store.dispatch("invoicePrint/showPrintInvoice", params);
  },
  methods: {
    printInvoice() {
      Print.printInvoice(this.$refs.invoice);
    },
    printSuratJalan() {
      this.$store.dispatch("invoicePrint/createLogPrint");
      Print.printSuratJalan(this.$refs.sjalan);
    },
  },
};
</script>
