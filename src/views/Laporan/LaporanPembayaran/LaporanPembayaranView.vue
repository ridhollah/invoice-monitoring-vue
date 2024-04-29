<template>
  <div class="card">
    <div class="card-body">
      <h5 class="fw-500 text-uppercase">Sales By Payment</h5>
      <div class="divider"></div>
      <div class="d-flex align-items-end justify-content-between">
        <div class="d-flex align-items-end">
          <div class="form-group me-1">
            <label for="exampleFormControlInput30">Tanggal awal</label>
            <input
              style="font-size: 13px"
              type="date"
              class="form-control"
              id="exampleFormControlInput30"
              v-model="search.tglawal"
            />
          </div>
          <div class="form-group me-1">
            <label for="exampleFormControlInput30">Tanggal akhir</label>
            <input
              style="font-size: 13px"
              type="date"
              class="form-control"
              id="exampleFormControlInput30"
              v-model="search.tglakhir"
            />
          </div>
          <button
            type="button"
            class="btn btn-primary btn-sm me-1"
            @click="$store.dispatch('laporanPembayaran/LaporanPembayaran')"
          >
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
          <button
            type="button"
            class="btn btn-secondary btn-sm me-1"
            @click="$store.dispatch('laporanPembayaran/resetLaporan')"
          >
            <i class="fa fa-refresh" aria-hidden="true"></i>
          </button>
        </div>
        <div class="text-end">
          <!-- <button type="button" class="btn btn-secondary btn-sm me-1">
            <i class="fa fa-refresh" aria-hidden="true"></i>
            PDF
          </button>
          <button type="button" class="btn btn-secondary btn-sm me-1">
            <i class="fa fa-refresh" aria-hidden="true"></i>
            SCV
          </button> -->
          <button
            type="button"
            class="btn btn-secondary btn-sm me-1"
            @click="exportExcel"
          >
            <i class="fa fa-files-o icon" aria-hidden="true"></i>
            Excel
          </button>
          <button
            type="button"
            class="btn btn-secondary btn-sm me-1"
            @click="exportCsv"
          >
            <i class="fa fa-files-o icon" aria-hidden="true"></i>
            Csv
          </button>
          <button
            type="button"
            class="btn btn-secondary btn-sm me-1"
            @click="print"
          >
            <i class="fa fa-file-o icon" aria-hidden="true"></i>
            Cetak
          </button>
        </div>
      </div>
      <div class="table-responsive mt-2" style="height: 400px">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr class="text-center">
              <th style="width: 10%">Outlet</th>
              <th style="width: 10%">Tender Type</th>
              <th style="width: 50%">Tender Name</th>
              <th style="width: 10%">Nominal</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(n, index) in datas" :key="index">
              <td>{{ n.outlet }}</td>
              <td>{{ n.tendertype }}</td>
              <td>{{ n.tendername }}</td>
              <td>{{ n.ttlbayar | Rupiah2 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-show="show">
        <div class="mt-2" ref="cetak">
          <div style="text-align: center">
            <h5 style="text-transform: uppercase; text-decoration: underline">
              Laporan Payment
            </h5>
            <p style="font-size: 12px; margin-top: 5px">
              Dari : {{ search.tglawal }} - Ke :
              {{ search.tglakhir }}
            </p>
          </div>
          <table class="table table-bordered" style="font-size: 12px">
            <thead>
              <tr class="text-center">
                <th style="width: 10%">Outlet</th>
                <th style="width: 10%">Tender Type</th>
                <th style="width: 50%">Tender Name</th>
                <th style="width: 10%">Nominal</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(n, index) in datas" :key="index">
                <td>{{ n.outlet }}</td>
                <td>{{ n.tendertype }}</td>
                <td>{{ n.tendername }}</td>
                <td>{{ n.ttlbayar | Rupiah2 }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LaporanPembayaranView",
  data() {
    return {
      show: false,
    };
  },
  computed: {
    datas() {
      return this.$store.state.laporanPembayaran.datas;
    },
    search: {
      get() {
        return this.$store.state.laporanPembayaran.search;
      },
      set(value) {
        return this.$store.commit("laporanPembayaran/setSearch", value);
      },
    },
  },
  methods: {
    print() {
      var contents = this.$refs.cetak;
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
        '<link rel="stylesheet" href="http://dp.suzuya.co.id/css/bootstrap.css"/>'
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
    exportExcel() {
      import("@/services/Export2Excel").then((excel) => {
        const header = ["outlet", "tendertype", "tendername", "ttlbayar"];
        const field = ["outlet", "tendertype", "tendername", "ttlbayar"];
        const data = this.formatJson(field, this.datas);

        const tglawal = this.search.tglawal ? this.search.tglawal : "";
        const tglakhir = this.search.tglakhir ? this.search.tglakhir : "";

        excel.export_json_to_excel({
          header: header,
          data: data,
          sheetName: `LAPORAN TRANSAKSI BY PAYMENT`,
          filename: `LAPORAN TRANSAKSI BY PAYMENT PRIODE : ${tglawal} - ${tglakhir}`,
          autoWidth: true,
          bookType: "xlsx",
        });
      });
    },
    formatJson(filterData, jsonData) {
      return jsonData.map((v) =>
        filterData.map((j) => {
          return v[j];
        })
      );
    },
    exportCsv() {
      const datas = this.datas;
      const csvContent = this.convertToSCV(datas);
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Laporan_Transaksi_By_Payment.csv");
      link.click();
    },
    convertToSCV(data) {
      const header = Object.keys(data[0]);
      const rows = data.map((obj) => header.map((h) => obj[h]));
      const headerRow = header.join(",");
      const csvRows = [headerRow, ...rows.map((row) => row.join(","))];
      return csvRows.join("\n");
    },
  },
};
</script>
