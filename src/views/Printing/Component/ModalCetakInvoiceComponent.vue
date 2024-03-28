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
            @click="$store.commit('invoicePrint/reset')"
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
export default {
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
        // '<link rel="stylesheet" href="http://172.27.1.31:8080/css/bootstrap.css"/>',
        '<link rel="stylesheet" href="http://dp.suzuya.co.id//css/invoice.css"/>',
        '<link rel="stylesheet" href="http://dp.suzuya.co.id//css/bootstrap.css"/>'
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
  },
};
</script>
