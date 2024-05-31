<template>
  <div class="card">
    <div class="card-body">
      <h5 class="fw-500 text-uppercase">Sales By Marchine</h5>
      <div class="divider"></div>
      <div class="d-flex align-items-end justify-content-between">
        <div class="d-flex align-items-end">
          <div
            class="form-group me-1"
            v-show="$store.getters['laporanSales/filterOutlet']"
          >
            <label for="exampleFormControlInput30">Outlet</label>
            <input
              style="font-size: 13px"
              type="text"
              class="form-control"
              id="exampleFormControlInput30"
              v-model="search.outlet"
            />
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
            @click="$store.dispatch('laporanSales/showLaporanSalesByMarchine')"
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
            <i class="fa fa-file-o icon" aria-hidden="true"></i>
            Excel
          </button>
          <button
            type="button"
            class="btn btn-secondary btn-sm me-1"
            @click="exportCsv"
          >
            <i class="fa fa-file-o icon" aria-hidden="true"></i>
            Csv
          </button>
          <button
            type="button"
            class="btn btn-secondary btn-sm me-1"
            @click="print"
          >
            <i class="fa fa-file-o icon" aria-hidden="true"></i>
            Pdf
          </button>
        </div>
      </div>
      <div class="table-responsive mt-2" style="height: 400px; font-size: 12px">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr class="text-center">
              <th style="width: 5%">Outlet</th>
              <th style="width: 10%">Tanggal</th>
              <th style="width: 25%" colspan="2">Nama Produk</th>
              <th style="width: 5%">Kat</th>
              <th style="width: 5%">SubKat</th>
              <th style="width: 5%">Class</th>
              <th style="width: 5%">SubClass</th>
              <th style="width: 10%">UnitPrice</th>
              <th style="width: 5%">Quantity</th>
              <th style="width: 10%">GrossSls</th>
              <th style="width: 10%">TtlDisc</th>
              <th style="width: 10%">NetSales</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(n, index) in datas" :key="index">
              <td class="text-center">{{ n.Outlet }}</td>
              <td class="text-center">{{ n.Date | formatDt2 }}</td>
              <td class="text-center">{{ n.Internal }}</td>
              <td class="text-start">{{ n.Descript }}</td>
              <td class="text-center">{{ n.Catagory }}</td>
              <td class="text-center">{{ n.SubCat }}</td>
              <td class="text-center">{{ n.Class }}</td>
              <td class="text-center">{{ n.SubClass }}</td>
              <td class="text-end">{{ n.UnitPrice | Rupiah2 }}</td>
              <td class="text-center">{{ n.Quantity }}</td>
              <td class="text-end">{{ n.GrossSls | Rupiah2 }}</td>
              <td class="text-end">{{ n.TtlDisc | Rupiah2 }}</td>
              <td class="text-end">{{ n.NetSales | Rupiah2 }}</td>
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
                <th style="width: 5%">Outlet</th>
                <th style="width: 10%">Tanggal</th>
                <th style="width: 25%" colspan="2">Nama Produk</th>
                <th style="width: 5%">Kat</th>
                <th style="width: 5%">SubKat</th>
                <th style="width: 5%">Class</th>
                <th style="width: 5%">SubClass</th>
                <th style="width: 10%">UnitPrice</th>
                <th style="width: 5%">Quantity</th>
                <th style="width: 10%">GrossSls</th>
                <th style="width: 10%">TtlDisc</th>
                <th style="width: 10%">NetSales</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(n, index) in datas" :key="index">
                <td class="text-center">{{ n.tgl | formatDt2 }}</td>
                <td class="text-center">{{ n.receipt }}</td>
                <td class="text-center">{{ n.internal }}</td>
                <td class="text-start">{{ n.descript }}</td>
                <td class="text-center">{{ n.quantity }}</td>
                <td class="text-end">{{ n.netsales | Rupiah2 }}</td>
                <td class="text-end">{{ n.netsales | Rupiah2 }}</td>
                <td class="text-end">{{ n.netsales | Rupiah2 }}</td>
                <td class="text-end">{{ n.netsales | Rupiah2 }}</td>
                <td class="text-end">{{ n.netsales | Rupiah2 }}</td>
                <td class="text-end">{{ n.netsales | Rupiah2 }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Export from "@/services/Export";
import Print from "@/services/Print";
export default {
  name: "LaporanSalesByMarchineView",
  data() {
    return {
      show: false,
    };
  },
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
      Print.printLaporan(this.$refs.cetak);
    },
    exportCsv() {
      Export.exportCsv(this.datas, "Laporan_Transaksi_By_Marchine.csv");
    },
    exportExcel() {
      Export.exportExcels(this.datas);
    },
  },
  created() {
    this.$store.dispatch("laporanSales/resetLaporan");
  },
};
</script>
