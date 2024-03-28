<template>
  <div class="card">
    <div class="card-body">
      <h5 class="fw-bold text-uppercase">Data Surat Jalan</h5>
      <div class="divider"></div>
      <div class="d-flex align-items-end">
        <div class="form-group me-1">
          <label for="exampleFormControlInput30">Pencarian</label>
          <input
            style="font-size: 13px"
            type="text"
            class="form-control"
            id="exampleFormControlInput30"
            placeholder="No Surat Jalan / Transaksi"
            v-model="search.search"
            @keydown.enter="$store.dispatch('suratJalan/showSuratJalan')"
          />
        </div>
        <div class="form-group me-1">
          <label for="exampleFormControlInput30">Lihat</label>
          <select
            style="font-size: 13px"
            class="form-select"
            aria-label="Default select example"
            v-model="search.count"
            @change="$store.dispatch('suratJalan/showSuratJalan')"
          >
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
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
            @keydown.enter="$store.dispatch('suratJalan/showSuratJalan')"
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
            @keydown.enter="$store.dispatch('suratJalan/showSuratJalan')"
          />
        </div>
        <button type="button" class="btn btn-primary btn-sm me-1">
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
        <!-- <button type="button" class="btn btn-primary btn-sm me-1">
          <i class="fa fa-align-left" aria-hidden="true"></i>
        </button> -->
        <button type="button" class="btn btn-secondary btn-sm me-1">
          <i class="fa fa-refresh" aria-hidden="true"></i>
        </button>
      </div>
      <div class="table-responsive mt-2" style="height: 400px; font-size: 12px">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr class="text-center">
              <th style="width: 15%">No Transaksi</th>
              <th style="width: 10%">No Surat Jalan</th>
              <th style="width: 15%">Nama</th>
              <th style="width: 25%">Alamat Tujuan</th>
              <th style="width: 10%">Handphone</th>
              <th style="width: 10%">Tanggal</th>
              <th style="width: 10%">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(n, index) in datas" :key="index">
              <td>{{ n.receipt }}</td>
              <td>{{ n.noshipping }}</td>
              <td>{{ n.namalengkap }}</td>
              <td>{{ n.address }}</td>
              <td>{{ n.nohp }}</td>
              <td>{{ n.tgl | formatDt2 }}</td>
              <td>
                <button
                  class="btn btn-primary btn-sm ms-1"
                  @click="cetakInvoice(n)"
                  style="font-size: 10px"
                >
                  <i class="fa fa-file-o me-1" aria-hidden="true"></i
                  ><span>Reprint</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    cetakInvoice(n) {
      this.$router.push({
        name: "preview",
        params: { Receipt: n.receipt },
      });
    },
  },
  computed: {
    datas() {
      return this.$store.state.suratJalan.datas;
    },
    search: {
      get() {
        return this.$store.state.suratJalan.search;
      },
      set(value) {
        return this.$store.commit("suratJalan/setSearch", value);
      },
    },
  },
  created() {
    this.$store.dispatch("suratJalan/showSuratJalan");
  },
};
</script>
