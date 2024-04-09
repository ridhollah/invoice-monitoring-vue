<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h5 class="fw-500 text-uppercase">Pembayaran Cicilan</h5>
        <div class="divider"></div>
        <div class="d-flex align-items-end">
          <div class="form-group me-1">
            <label for="exampleFormControlInput50">Pencarian</label>
            <input
              style="font-size: 13px"
              type="text"
              class="form-control"
              id="exampleFormControlInput50"
              placeholder="No Transaksi"
              v-model="form.search"
              @keydown.enter="$store.dispatch('installment/searchTrx')"
            />
          </div>
          <button
            type="button"
            class="btn btn-primary btn-sm me-1"
            @click="$store.dispatch('installment/searchTrx')"
          >
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <div
          class="table-responsive mt-2"
          style="height: 350px; font-size: 12px"
        >
          <table class="table table-hover table-bordered table-striped">
            <thead>
              <tr>
                <th style="width: 10%">Tanggal</th>
                <th style="width: 25%">No Transaksi</th>
                <th style="width: 10%">Jumlah Transaksi</th>
                <th style="width: 10%">Jumlah Bayar</th>
                <th style="width: 10%">Sisa Bayar</th>
                <th style="width: 10%">Aksi</th>
              </tr>
            </thead>
            <tbody v-if="$store.getters['installment/countTrx'] > 0">
              <tr v-for="(n, index) in trx" :key="index">
                <td>{{ n.tgl | formatDt2 }}</td>
                <td>{{ n.receipt }}</td>
                <td>{{ n.ttlsales | Rupiah }}</td>
                <td>{{ n.ttlbayar | Rupiah }}</td>
                <td>{{ n.ttlsisa | Rupiah }}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-primary btn-sm"
                    @click="next(n)"
                  >
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody v-if="$store.getters['installment/countTrx'] < 1">
              <tr>
                <td colspan="6" class="text-center text-uppercase">
                  Tidak ada data
                </td>
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
  name: "InstallmentView",
  computed: {
    form: {
      get() {
        return this.$store.state.installment.form;
      },
      set(value) {
        return this.$store.commit("installment/setForm", value);
      },
    },
    trx() {
      return this.$store.state.installment.trx;
    },
  },
  methods: {
    next(n) {
      this.$router.push({
        name: "cicilan-transaksi",
        params: {
          Receipt: n.receipt,
        },
      });
    },
  },
  created() {
    this.$store.commit("installment/setForm", {});
    this.$store.commit("installment/setTrx", []);
  },
};
</script>
