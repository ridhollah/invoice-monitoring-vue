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
          <!-- <button
            class="btn btn-primary btn-sm ms-1"
            @click="printSuratJalan"
            v-if="header.noshipping != ''"
          >
            Cetak Surat Jalan
          </button> -->
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
import { mapState } from "vuex";
export default {
  name: "PreviewReturnView",
  data() {
    return {
      show: false,
    };
  },
  computed: {
    ...mapState({
      header: (state) => state.invoicePrint.invoice.header,
    }),
  },
  created() {
    let params = {
      Receipt: this.$route.params.Receipt,
    };
    this.$store.dispatch("invoicePrint/showPrintInvoiceReturn", params);
  },
  methods: {
    printInvoice() {
      var contents = this.$refs.invoice;
      let frame1 = document.createElement("iframe");
      frame1.name = "frame1";
      frame1.style.position = "absolute";
      frame1.style.top = "-1000000px";
      document.body.appendChild(frame1);
      let frameDoc = frame1.contentWindow
        ? frame1.contentWindow
        : frame1.contentDocument.document
        ? frame1.contentDocument.document
        : frame1.contentDocument;
      frameDoc.document.open();
      frameDoc.document.write(
        '<html lang="en"><head><title>Print Image Maintenance</title>'
      );
      frameDoc.document.write(
        // '<link rel="stylesheet" href="http://172.27.1.31:8080/css/invoice.css"/>',
        // '<link rel="stylesheet" href="http://172.27.1.31:8080/css/bootstrap.css"/>'
        '<link rel="stylesheet" href="https://dp.suzuyagroup.com/css/invoice.css"/>',
        '<link rel="stylesheet" href="https://dp.suzuyagroup.com/css/bootstrap.css"/>'
      );
      frameDoc.document.write("</head><body>");
      frameDoc.document.write(contents.outerHTML);
      frameDoc.document.write("</body></html>");
      frameDoc.document.close();
      setTimeout(function () {
        window.frames["frame1"].focus();
        window.frames["frame1"].print();
        document.body.removeChild(frame1);
      }, 500);
      return false;
    },
    // printSuratJalan() {
    //   this.$store.dispatch("invoicePrint/createLogPrint");
    //   var contents = this.$refs.sjalan;
    //   let frame1 = document.createElement("iframe");
    //   frame1.name = "frame1";
    //   frame1.style.position = "absolute";
    //   frame1.style.top = "-1000000px";
    //   document.body.appendChild(frame1);
    //   let frameDoc = frame1.contentWindow
    //     ? frame1.contentWindow
    //     : frame1.contentDocument.document
    //     ? frame1.contentDocument.document
    //     : frame1.contentDocument;
    //   frameDoc.document.open();
    //   frameDoc.document.write(
    //     '<html lang="en"><head><title>Print Image Maintenance</title>'
    //   );
    //   frameDoc.document.write(
    //     // '<link rel="stylesheet" href="http://172.27.1.31:8080/css/invoice.css"/>',
    //     // '<link rel="stylesheet" href="http://172.27.1.31:8080/css/bootstrap.css"/>'
    //     '<link rel="stylesheet" href="https://dp.suzuyagroup.com/css/invoice.css"/>',
    //     '<link rel="stylesheet" href="https://dp.suzuyagroup.com/css/bootstrap.css"/>'
    //   );
    //   frameDoc.document.write("</head><body>");
    //   frameDoc.document.write(contents.outerHTML);
    //   frameDoc.document.write("</body></html>");
    //   frameDoc.document.close();
    //   setTimeout(function () {
    //     window.frames["frame1"].focus();
    //     window.frames["frame1"].print();
    //     document.body.removeChild(frame1);
    //   }, 500);
    //   return false;
    // },
  },
};
</script>
