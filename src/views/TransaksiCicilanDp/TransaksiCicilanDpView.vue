<template>
  <div class="card">
    <div class="card-body">
      <h5 class="fw-bold text-uppercase">Data Transaksi Dp & Cicilan</h5>
      <div class="divider"></div>
      <div class="d-flex align-items-end">
        <div class="form-group me-1">
          <label for="exampleFormControlInput30">Pencarian</label>
          <input
            style="font-size: 13px"
            type="text"
            class="form-control"
            id="exampleFormControlInput30"
            placeholder="No Trx / Invoice"
            v-model="search.search"
            @keydown.enter="$store.dispatch('transaksicicilandp/showCicilanDp')"
          />
        </div>
        <div class="form-group me-1">
          <label for="exampleFormControlInput30">Lihat</label>
          <select
            style="font-size: 13px"
            class="form-select"
            aria-label="Default select example"
            v-model="search.count"
            @change="$store.dispatch('transaksicicilandp/showCicilanDp')"
          >
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="0">Semua</option>
          </select>
        </div>
        <div class="form-group me-1">
          <label for="exampleFormControlInput30">Status</label>
          <select
            style="font-size: 13px"
            class="form-select"
            aria-label="Default select example"
            v-model="search.status"
          >
            <option value="7">Dp</option>
            <option value="8">Cicilan</option>
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
          @click="$store.dispatch('transaksicicilandp/showCicilanDp')"
        >
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          class="btn btn-secondary btn-sm me-1"
          @click="$store.dispatch('transaksicicilandp/resetSearchCicilanDp')"
        >
          <i class="fa fa-refresh" aria-hidden="true"></i>
        </button>
      </div>
      <div class="table-responsive mt-2" style="height: 400px; font-size: 12px">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr class="text-center">
              <th style="width: 10%">Tanggal</th>
              <th style="width: 15%">No Transaksi</th>
              <th style="width: 10%">No Invoice</th>
              <th style="width: 15%">Jumlah Bayar</th>
              <th style="width: 10%">Status</th>
              <th style="width: 5%">Pembayaran</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(n, index) in datas" :key="index">
              <td class="text-center">{{ n.tgl | formatDt2 }}</td>
              <td class="text-center">{{ n.receipt }}</td>
              <td class="text-center">{{ n.invoiceno }}</td>
              <td class="text-end">{{ n.total_payment | Rupiah2 }}</td>
              <td class="text-center">
                <span class="badge" :class="n.statuscolor">{{
                  n.namestatus
                }}</span>
              </td>
              <td class="text-center">{{ n.pembayaran }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    datas() {
      return this.$store.state.transaksicicilandp.datas;
    },
    search: {
      get() {
        return this.$store.state.transaksicicilandp.search;
      },
      set(value) {
        return this.$store.commit("transaksicicilandp/setSearch", value);
      },
    },
  },
  created() {
    this.$store.dispatch("transaksicicilandp/showCicilanDp");
  },
};
</script>
