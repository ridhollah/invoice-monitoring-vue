<template>
  <div class="card">
    <div class="card-body">
      <h5 class="fw-500 text-uppercase">Data Transaksi Return</h5>
      <div class="divider"></div>
      <div class="d-flex align-items-end">
        <div
          class="form-group me-1"
          v-show="$store.getters['transaksiReturn/filterOutlet']"
        >
          <label for="exampleFormControlInput30">Outlet</label>
          <input
            style="font-size: 13px"
            type="text"
            class="form-control"
            id="exampleFormControlInput30"
            placeholder="Kode Outlet"
            v-model="search.outlet"
            @keydown.enter="$store.dispatch('transaksiReturn/showReceipt')"
          />
        </div>
        <div class="form-group me-1">
          <label for="exampleFormControlInput30">Pencarian</label>
          <input
            style="font-size: 13px"
            type="text"
            class="form-control"
            id="exampleFormControlInput30"
            placeholder="No Return / Nama Cust"
            v-model="search.search"
            @keydown.enter="$store.dispatch('transaksiReturn/showReceipt')"
          />
        </div>
        <div class="form-group me-1">
          <label for="exampleFormControlInput30">Lihat</label>
          <select
            style="font-size: 13px"
            class="form-select"
            aria-label="Default select example"
            v-model="search.count"
            @change="$store.dispatch('transaksiReturn/showReceipt')"
          >
            <option value="100">100</option>
            <option value="300">300</option>
            <option value="500">500</option>
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
          @click="$store.dispatch('transaksiReturn/showReceipt')"
        >
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          class="btn btn-secondary btn-sm me-1"
          @click="$store.dispatch('transaksiReturn/resetSearchReceipt')"
        >
          <i class="fa fa-refresh" aria-hidden="true"></i>
        </button>
      </div>
      <div class="table-responsive mt-2" style="height: 400px; font-size: 12px">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr class="text-center">
              <th style="width: 8%">Tanggal</th>
              <th style="width: 10%">No Return</th>
              <th style="width: 10%">Total Return</th>
              <th style="width: 10%">No Transaksi</th>
              <th style="width: 20%">Customer</th>
              <th style="width: 5%">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(n, index) in datas" :key="index">
              <td class="text-center">{{ n.tgl | formatDt2 }}</td>
              <td
                class="text-center text-decoration-underline"
                style="cursor: pointer"
                data-bs-toggle="modal"
                data-bs-target="#modalReturnDetail"
                @click="$store.dispatch('transaksiReturn/showReceiptDetail', n)"
              >
                {{ n.returnno }}
              </td>
              <td class="text-end">{{ n.ttlsales | Rupiah2 }}</td>
              <td
                class="text-center text-decoration-underline"
                style="cursor: pointer"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="
                  $store.dispatch('transaksiReceipt/showReceiptDetail', n)
                "
              >
                {{ n.receipt }}
              </td>
              <td class="text-left">
                {{ n.customer }}
              </td>
              <td class="text-center">
                <div class="dropdown">
                  <button
                    class="btn btn-primary dropdown-toggle btn-sm"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style="font-size: 12px"
                  >
                    <i class="fa fa-align-left" aria-hidden="true"></i>
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a
                        class="btn btn-primary btn-sm dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#invoiceCetakReturn"
                        @click="cetakInvoice(n)"
                        ><i class="fa fa-file-o me-2" aria-hidden="true"></i
                        >Cetak Invoice</a
                      >
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <ReceiptDetailComponent />
    <ReturnDetailComponent />
    <ModalCetakInvoiceReturnComponent />
  </div>
</template>
<script>
export default {
  methods: {
    cetakInvoice(n) {
      let params = {
        Receipt: n.returnno,
      };
      this.$store.dispatch("invoicePrint/showPrintInvoiceReturn", params);
    },
  },
  computed: {
    datas() {
      return this.$store.state.transaksiReturn.datas;
    },
    search: {
      get() {
        return this.$store.state.transaksiReturn.search;
      },
      set(value) {
        return this.$store.commit("transaksiReturn/setSearch", value);
      },
    },
  },
  created() {
    this.$store.dispatch("transaksiReturn/resetSearchReceipt");
  },
};
</script>
