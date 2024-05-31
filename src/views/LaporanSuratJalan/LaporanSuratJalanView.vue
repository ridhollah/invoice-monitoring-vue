<template>
  <div class="card">
    <div class="card-body">
      <h5 class="fw-500 text-uppercase">Laporan Surat Jalan</h5>
      <div class="divider"></div>
      <div class="d-flex align-items-end justify-content-between">
        <div class="d-flex align-items-end">
          <div
            class="form-group me-1"
            v-show="$store.getters['laporanSuratJalan/filterOutlet']"
          >
            <label for="exampleFormControlInput1">Outlet</label>
            <input
              style="font-size: 13px"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Outlet"
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
          <div class="form-group me-1">
            <label for="exampleFormControlInput30">Status</label>
            <select
              style="font-size: 13px"
              class="form-select"
              aria-label="Default select example"
              v-model="search.status"
            >
              <option value="0">Semua</option>
              <option value="2">Menunggu QC</option>
              <option value="3">Siap dikirim</option>
              <option value="6">Selesai dikirim</option>
            </select>
          </div>
          <div class="form-group me-1">
            <label for="exampleFormControlInput30">By No Transaksi</label>
            <input
              style="font-size: 13px"
              type="text"
              class="form-control"
              id="exampleFormControlInput30"
              v-model="search.pencarian"
            />
          </div>

          <button
            type="button"
            class="btn btn-primary btn-sm me-1"
            @click="$store.dispatch('laporanSuratJalan/laporan')"
          >
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
          <button
            type="button"
            class="btn btn-secondary btn-sm me-1"
            @click="$store.dispatch('laporanSuratJalan/resetLaporan')"
          >
            <i class="fa fa-refresh" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="mt-2">
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
      <div class="table-responsive mt-2" style="height: 400px; font-size: 12px">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr class="text-center">
              <th style="width: 10%">No Transaksi</th>
              <th style="width: 12%">No Surat Jalan</th>
              <th style="width: 40%" colspan="2">Nama</th>
              <th style="width: 5%">Quantity</th>
              <th style="width: 10%">Nama Confirm</th>
              <th style="width: 10%">Tanggal Confirm</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(n, index) in datas" :key="index">
              <td class="text-center">{{ n.receipt }}</td>
              <td class="text-center">{{ n.noshipping }}</td>
              <td class="text-center">{{ n.internal }}</td>
              <td>{{ n.descript }}</td>
              <td class="text-center">{{ n.quantity }}</td>
              <td class="text-center">
                {{ n.namalengkap ? n.namalengkap : "-" }}
              </td>
              <td class="text-center">{{ n.tglconfirm | formatDt4 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-show="show">
        <div class="mt-2" ref="cetak">
          <div style="text-align: center">
            <h5 style="text-transform: uppercase; text-decoration: underline">
              Laporan Surat Jalan
            </h5>
            <p style="font-size: 12px; margin-top: 5px">
              Priode : {{ search.tglawal | formatDt2 }} -
              {{ search.tglakhir | formatDt2 }}
            </p>
          </div>
          <table class="table table-bordered" style="font-size: 12px">
            <thead>
              <tr class="text-center">
                <th style="width: 10%">No Transaksi</th>
                <th style="width: 12%">No Surat Jalan</th>
                <th style="width: 40%" colspan="2">Nama</th>
                <th style="width: 5%">Quantity</th>
                <th style="width: 10%">Nama Confirm</th>
                <th style="width: 10%">Tanggal Confirm</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(n, index) in datas" :key="index">
                <td class="text-center">{{ n.receipt }}</td>
                <td class="text-center">{{ n.noshipping }}</td>
                <td class="text-center">{{ n.internal }}</td>
                <td>{{ n.descript }}</td>
                <td class="text-center">{{ n.quantity }}</td>
                <td class="text-center">{{ n.namalengkap }}</td>
                <td class="text-center">{{ n.tglconfirm }}</td>
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
  name: "LaporanSuratJalanView",
  data() {
    return {
      show: false,
    };
  },
  computed: {
    datas() {
      return this.$store.state.laporanSuratJalan.datas;
    },
    search: {
      get() {
        return this.$store.state.laporanSuratJalan.search;
      },
      set(value) {
        return this.$store.commit("laporanSuratJalan/setSearch", value);
      },
    },
  },
  methods: {
    print() {
      Print.printLaporan(this.$refs.cetak);
    },
    exportCsv() {
      Export.exportCsv(this.datas, "Laporan_SuratJalan.csv");
    },
    exportExcel() {
      Export.exportExcels(this.datas);
    },
  },
  created() {
    this.$store.dispatch("laporanSuratJalan/resetLaporan");
  },
};
</script>
