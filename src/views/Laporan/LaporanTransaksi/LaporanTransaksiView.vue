<template>
  <div class="card">
    <div class="card-body">
      <h5 class="fw-bold text-uppercase">Laporan Receipt</h5>
      <div class="divider"></div>
      <div class="d-flex align-items-end justify-content-between">
        <div class="d-flex align-items-end">
          <div class="form-group me-1">
            <label for="exampleFormControlInput30">Status</label>
            <select
              style="font-size: 13px"
              class="form-select"
              aria-label="Default select example"
              v-model="search.status"
            >
              <option value="99">Belum Lunas</option>
              <option value="1">Lunas</option>
              <option value="0">Semua</option>
            </select>
          </div>
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
            @click="$store.dispatch('laporanTransaksi/laporanTransaksi')"
          >
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
          <button
            type="button"
            class="btn btn-secondary btn-sm me-1"
            @click="$store.dispatch('laporanTransaksi/resetLaporan')"
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
              <th style="width: 8%">Tanggal</th>
              <th style="width: 15%">No Transaksi</th>
              <th style="width: 12%">Total Transaksi</th>
              <th style="width: 12%">Total Bayar</th>
              <th style="width: 12%">Total Sisa</th>
              <th style="width: 15%">Customer</th>
              <th style="width: 10%">Surat Jalan</th>
              <th style="width: 10%">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(n, index) in datas" :key="index">
              <td class="text-center">{{ n.tgl | formatDt2 }}</td>
              <td class="text-center">{{ n.receipt }}</td>
              <td class="text-end">{{ n.ttlsales | Rupiah2 }}</td>
              <td class="text-end">{{ n.ttlbayar | Rupiah2 }}</td>
              <td class="text-end">{{ n.ttlsisa | Rupiah2 }}</td>
              <td>{{ n.name }}</td>
              <td class="text-center">{{ n.noshipping }}</td>
              <td class="text-center">{{ n.statusname }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-show="show">
        <div class="mt-2" ref="cetak">
          <div style="text-align: center">
            <h5 style="text-transform: uppercase; text-decoration: underline">
              Laporan Transaksi
            </h5>
            <p style="font-size: 12px; margin-top: 5px">
              Dari : {{ search.tglawal }} - Ke :
              {{ search.tglakhir }}
            </p>
          </div>

          <table class="table table-bordered" style="font-size: 12px">
            <thead>
              <tr class="text-center">
                <th style="width: 8%">Tanggal</th>
                <th style="width: 15%">No Transaksi</th>
                <th style="width: 12%">Total Transaksi</th>
                <th style="width: 12%">Total Bayar</th>
                <th style="width: 12%">Total Sisa</th>
                <th style="width: 15%">Customer</th>
                <th style="width: 10%">Surat Jalan</th>
                <th style="width: 10%">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(n, index) in datas" :key="index">
                <td class="text-center">{{ n.tgl | formatDt2 }}</td>
                <td class="text-center">{{ n.receipt }}</td>
                <td class="text-end">{{ n.ttlsales | Rupiah2 }}</td>
                <td class="text-end">{{ n.ttlbayar | Rupiah2 }}</td>
                <td class="text-end">{{ n.ttlsisa | Rupiah2 }}</td>
                <td>{{ n.name }}</td>
                <td class="text-center">{{ n.noshipping }}</td>
                <td class="text-center">{{ n.statusname }}</td>
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
  name: "LaporanTransaksiView",
  data() {
    return {
      show: false,
    };
  },
  computed: {
    datas() {
      return this.$store.state.laporanTransaksi.datas;
    },
    search: {
      get() {
        return this.$store.state.laporanTransaksi.search;
      },
      set(value) {
        return this.$store.commit("laporanTransaksi/setSearch", value);
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
          "Tanggal",
          "No Transaksi",
          "Total Transaksi",
          "Total Bayar",
          "Total Sisa",
          "Customer",
          "No Surat Jalan",
          "Status",
        ];
        const field = [
          "tgl",
          "receipt",
          "ttlsales",
          "ttlbayar",
          "ttlsisa",
          "name",
          "noshipping",
          "statusname",
        ];
        const data = this.formatJson(field, this.datas);
        excel.export_json_to_excel({
          header: header,
          data: data,
          sheetName: `LAPORAN TRANSAKSI RECEIPT`,
          filename: `LAPORAN TRANSAKSI RECEIPT ${this.search.tglawal} - ${this.search.tglakhir}`,
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
