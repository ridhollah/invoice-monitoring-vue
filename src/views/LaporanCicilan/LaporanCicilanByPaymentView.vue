<template>
  <div class="card">
    <div class="card-body">
      <h5 class="fw-500 text-uppercase">Laporan Cicilan By Payment</h5>
      <div class="divider"></div>
      <div class="d-flex align-items-end justify-content-between">
        <div class="d-flex align-items-end">
          <div
            class="form-group me-1"
            v-show="$store.getters['laporanCicilan/filterOutlet']"
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
            <label for="exampleFormControlInput30">Pencarian</label>
            <input
              style="font-size: 13px"
              type="text"
              class="form-control"
              id="exampleFormControlInput30"
              placeholder="No / Nama Member"
              v-model="search.pencarian"
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
            @click="
              $store.dispatch('laporanCicilan/showLaporanCicilanByPayment')
            "
          >
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
          <button
            type="button"
            class="btn btn-secondary btn-sm me-1"
            @click="$store.dispatch('laporanCicilan/resetLaporan')"
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
      <div class="table-responsive mt-2" style="height: 400px">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr class="text-center">
              <th style="width: 5%">Outlet</th>
              <th style="width: 10%">Member</th>
              <th style="width: 20%">Nama</th>
              <th style="width: 10%">Receipt</th>
              <th style="width: 15%">Tgl Pembayaran Cicilan</th>
              <th style="width: 5%">Tender Type</th>
              <th style="width: 10%">Tender Name</th>
              <th style="width: 10%">Nominal</th>
              <th style="width: 10%">Kasir</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(n, index) in datas" :key="index">
              <td>{{ n.outlet }}</td>
              <td>{{ n.memberno }}</td>
              <td>{{ n.name }}</td>
              <td>{{ n.receipt }}</td>
              <td>{{ n.tgl | formatDt4 }}</td>
              <td>{{ n.tendertype }}</td>
              <td>{{ n.tendername }}</td>
              <td>{{ n.ttlbayar | Rupiah2 }}</td>
              <td>{{ n.namalengkap }}</td>
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
                <th style="width: 5%">Outlet</th>
                <th style="width: 10%">Member</th>
                <th style="width: 20%">Nama</th>
                <th style="width: 10%">Receipt</th>
                <th style="width: 15%">Tgl Pembayaran Cicilan</th>
                <th style="width: 5%">Tender Type</th>
                <th style="width: 10%">Tender Name</th>
                <th style="width: 10%">Nominal</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(n, index) in datas" :key="index">
                <td>{{ n.outlet }}</td>
                <td>{{ n.memberno }}</td>
                <td>{{ n.name }}</td>
                <td>{{ n.receipt }}</td>
                <td>{{ n.tgl | formatDt4 }}</td>
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
import Export from "@/services/Export";
import Print from "@/services/Print";
export default {
  name: "LaporanCicilanByPaymentView",
  data() {
    return {
      show: false,
    };
  },
  computed: {
    datas() {
      return this.$store.state.laporanCicilan.datas;
    },
    search: {
      get() {
        return this.$store.state.laporanCicilan.search;
      },
      set(value) {
        return this.$store.commit("laporanCicilan/setSearch", value);
      },
    },
  },
  methods: {
    print() {
      Print.printLaporan(this.$refs.cetak);
    },
    exportCsv() {
      Export.exportCsv(this.datas, "Laporan_Transaksi_Cicilan_By_Payment.csv");
    },
    exportExcel() {
      Export.exportExcels(this.datas);
    },
  },
  created() {
    this.$store.dispatch("laporanCicilan/resetLaporan");
  },
};
</script>
