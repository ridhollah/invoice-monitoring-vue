<template>
  <div class="card">
    <div class="card-body">
      <h5 class="fw-500 text-uppercase">Laporan Penjualan Sales</h5>
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
            @click="$store.dispatch('laporanSales/showLaporan')"
          >
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
          <button
            type="button"
            class="btn btn-secondary btn-sm me-1"
            @click="$store.dispatch('laporanSales/resetLaporan')"
          >
            <i class="fa fa-refresh" aria-hidden="true"></i>
          </button>
        </div>
        <div class="text-end">
          <button
            type="button"
            class="btn btn-secondary btn-sm me-1"
            @click="exportExcel"
          >
            <i class="fa fa-files-o icon" aria-hidden="true"></i>
            Simpan Excel
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
      <div class="table-responsive mt-2" style="height: 400px; font-size: 12px">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr class="text-center">
              <th style="width: 5%">Kode</th>
              <th style="width: 15%">Nama</th>
              <th style="width: 15%">Posisi</th>
              <th style="width: 45%" colspan="2">Barang</th>
              <th style="width: 5%">Quantity</th>
              <th style="width: 15%">Total Penjualan</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(n, index) in datas" :key="index">
              <td>{{ n.User }}</td>
              <td>{{ n.Name }}</td>
              <td>{{ n.Position }}</td>
              <td>{{ n.Internal }}</td>
              <td>{{ n.Descript }}</td>
              <td class="text-center">{{ n.sumqty }}</td>
              <td>{{ n.netsales | Rupiah }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-show="show">
        <div class="mt-2" ref="cetak">
          <div style="text-align: center">
            <h5 style="text-transform: uppercase; text-decoration: underline">
              Laporan Penjualan Sales
            </h5>
            <p style="font-size: 12px; margin-top: 5px">
              Dari : {{ search.tglawal }} - Ke :
              {{ search.tglakhir }}
            </p>
          </div>

          <table class="table table-bordered" style="font-size: 12px">
            <thead>
              <tr class="text-center">
                <th style="width: 5%">Kode</th>
                <th style="width: 15%">Nama</th>
                <th style="width: 15%">Posisi</th>
                <th style="width: 45%" colspan="2">Barang</th>
                <th style="width: 5%">Quantity</th>
                <th style="width: 15%">Total Penjualan</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(n, index) in datas" :key="index">
                <td>{{ n.User }}</td>
                <td>{{ n.Name }}</td>
                <td>{{ n.Position }}</td>
                <td>{{ n.Internal }}</td>
                <td>{{ n.Descript }}</td>
                <td class="text-center">{{ n.sumqty }}</td>
                <td>{{ n.netsales | Rupiah }}</td>
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
  computed: {
    datas() {
      return this.$store.state.laporanSales.datas;
    },
    search: {
      get() {
        return this.$store.state.laporanSales.search;
      },
      set(value) {
        return this.$store.commit("laporanSales/setSearch", value);
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
        const header = [
          "Kode Sales",
          "Nama Sales",
          "Posisi",
          "Internal",
          "Nama Barang",
          "Quantity",
          "Total Penjualan",
        ];
        const field = [
          "User",
          "Name",
          "Position",
          "Internal",
          "Descript",
          "sumqty",
          "netsales",
        ];
        const data = this.formatJson(field, this.datas);
        excel.export_json_to_excel({
          header: header,
          data: data,
          sheetName: `LAPORAN PENJUALAN SALES`,
          filename: `LAPORAN PENJUALAN SALES ${this.search.tglawal} - ${this.search.tglakhir}`,
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
  },
};
</script>
