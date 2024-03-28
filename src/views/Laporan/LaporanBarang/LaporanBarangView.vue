<template>
  <div class="card">
    <div class="card-body">
      <h5 class="fw-bold text-uppercase">Laporan Barang Terjual</h5>
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
            @click="$store.dispatch('laporanBarang/Laporan')"
          >
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
          <button
            type="button"
            class="btn btn-secondary btn-sm me-1"
            @click="$store.dispatch('laporanBarang/resetLaporan')"
          >
            <i class="fa fa-refresh" aria-hidden="true"></i>
          </button>
        </div>
        <div class="text-end">
          <button
            type="button"
            class="btn btn-secondary btn-sm me-1"
            @click="print"
          >
            <i class="fa fa-refresh" aria-hidden="true"></i>
            Cetak
          </button>
        </div>
      </div>
      <div class="table-responsive mt-2" style="height: 400px; font-size: 12px">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr class="text-center">
              <th style="width: 10%">Tanggal Terjual</th>
              <th style="width: 50%" colspan="2">Nama</th>
              <th style="width: 5%">Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(n, index) in datas" :key="index">
              <td class="text-center">{{ n.Date }}</td>
              <td class="text-center">{{ n.Internal }}</td>
              <td>{{ n.Descript }}</td>
              <td class="text-center">{{ n.total_quantity }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-show="show">
        <div class="mt-2" ref="cetak">
          <div style="text-align: center">
            <h5 style="text-transform: uppercase; text-decoration: underline">
              Laporan Barang Terjual
            </h5>
            <p style="font-size: 12px; margin-top: 5px">
              Dari : {{ search.tglawal }} - Ke :
              {{ search.tglakhir }}
            </p>
          </div>
          <table class="table table-bordered" style="font-size: 12px">
            <thead>
              <tr class="text-center">
                <th style="width: 15%" colspan="2">Nama</th>
                <th style="width: 5%">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(n, index) in datas" :key="index">
                <td class="text-center">{{ n.Internal }}</td>
                <td>{{ n.Descript }}</td>
                <td class="text-center">{{ n.total_quantity }}</td>
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
  name: "LaporanBarangView",
  data() {
    return {
      show: false,
    };
  },
  computed: {
    datas() {
      return this.$store.state.laporanBarang.datas;
    },
    search: {
      get() {
        return this.$store.state.laporanBarang.search;
      },
      set(value) {
        return this.$store.commit("laporanBarang/setSearch", value);
      },
    },
  },
  created() {
    this.$store.dispatch("laporanBarang/Laporan");
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
        '<link rel="stylesheet" href="http://172.27.1.31:8080/css/bootstrap.css"/>'
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
