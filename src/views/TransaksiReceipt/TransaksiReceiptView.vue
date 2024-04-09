<template>
  <div class="card">
    <div class="card-body">
      <h5 class="fw-500 text-uppercase">Data Transaksi Receipt</h5>
      <div class="divider"></div>
      <!-- <div class="d-lg-flex">
        <div class="col-lg-6 p-1">
          <div class="card">
            <div class="card-body">
              <p style="font-size: 12px; margin: 0 !important">
                Jumlah Transaksi
              </p>
              <h5>{{ $store.state.transaksiReceipt.ttltrx | Rupiah }}</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-6 p-1">
          <div class="card">
            <div class="card-body">
              <p style="font-size: 12px; margin: 0 !important">
                Total Transaksi
              </p>
              <h5>{{ $store.state.transaksiReceipt.ttlreceipt }}</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-4 p-1">
          <div class="card">
            <div class="card-body">
              <p style="font-size: 12px; margin: 0 !important">
                Jumlah barang terjual
              </p>
              <h5>125</h5>
            </div>
          </div>
        </div>
      </div> -->
      <div class="divider"></div>
      <div class="d-flex align-items-end">
        <div class="form-group me-1">
          <label for="exampleFormControlInput30">Pencarian</label>
          <input
            style="font-size: 13px"
            type="text"
            class="form-control"
            id="exampleFormControlInput30"
            placeholder="No Trx / Customer"
            v-model="search.search"
            @keydown.enter="$store.dispatch('transaksiReceipt/showReceipt')"
          />
        </div>
        <div class="form-group me-1">
          <label for="exampleFormControlInput30">Lihat</label>
          <select
            style="font-size: 13px"
            class="form-select"
            aria-label="Default select example"
            v-model="search.count"
            @change="$store.dispatch('transaksiReceipt/showReceipt')"
          >
            <option value="100">100</option>
            <option value="300">300</option>
            <option value="500">500</option>
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
            @change="$store.dispatch('transaksiReceipt/showReceipt')"
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
          @click="$store.dispatch('transaksiReceipt/showReceipt')"
        >
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          class="btn btn-secondary btn-sm me-1"
          @click="$store.dispatch('transaksiReceipt/resetSearchReceipt')"
        >
          <i class="fa fa-refresh" aria-hidden="true"></i>
        </button>
      </div>
      <div class="table-responsive mt-2" style="height: 400px; font-size: 12px">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr class="text-center">
              <th style="width: 8%">Tanggal</th>
              <th style="width: 12%">No Transaksi</th>
              <th style="width: 12%">Total Transaksi</th>
              <th style="width: 12%">Total Bayar</th>
              <th style="width: 12%">Total Sisa</th>
              <th style="width: 12%">Customer</th>
              <th style="width: 5%">Status Trx</th>
              <th style="width: 10%">No S.Jalan</th>
              <th style="width: 10%">Status S.Jalan</th>
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
                data-bs-target="#exampleModal"
                @click="
                  $store.dispatch('transaksiReceipt/showReceiptDetail', n)
                "
              >
                {{ n.receipt }}
              </td>
              <td class="text-end">{{ n.ttlsales | Rupiah2 }}</td>
              <td class="text-end">{{ n.ttlbayar | Rupiah2 }}</td>
              <td class="text-end">{{ n.ttlsisa | Rupiah2 }}</td>
              <td class="text-center">
                {{ n.customer }}
              </td>
              <td class="text-center">
                <span class="badge" :class="n.statuscolor">{{
                  n.statusname
                }}</span>
              </td>
              <td class="text-center">
                {{ n.noshipping }}
              </td>
              <td class="text-center">
                <span class="badge" :class="n.statusjcolor">{{
                  n.statusjname
                }}</span>
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
                    <li v-if="n && n.status != 1">
                      <a
                        class="btn btn-primary btn-sm dropdown-item"
                        @click="pelunasan(n)"
                        ><i class="fa fa-file-o me-2" aria-hidden="true"></i
                        >Bayar Cicilan</a
                      >
                    </li>
                    <li>
                      <a
                        class="btn btn-primary btn-sm dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#invoiceCetak"
                        @click="cetakInvoice(n)"
                        ><i class="fa fa-file-o me-2" aria-hidden="true"></i
                        >Cetak Invoice</a
                      >
                    </li>
                    <li v-if="n.statusj == 3">
                      <a
                        class="btn btn-success btn-sm dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#suratjalanCetak"
                        @click="cetakShipping(n)"
                        href=""
                        ><i class="fa fa-file-o me-2" aria-hidden="true"></i
                        >Cetak Surat Jalan</a
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
    <ModalEditCustomerComponent />
    <ModalEditSuratJalanComponent />
    <ReceiptDetailComponent />
    <ModalDescriptComponent />
    <ModalCetakInvoiceComponent />
    <ModalCetakSuratJalanComponent />
  </div>
</template>
<script>
export default {
  methods: {
    cetakInvoice(n) {
      let params = {
        Receipt: n.receipt,
      };
      this.$store.dispatch("invoicePrint/showPrintInvoice", params);
    },
    cetakShipping(n) {
      let params = {
        Receipt: n.receipt,
      };
      this.$store.dispatch("invoicePrint/createNoShipping", n);
      this.$store.dispatch("invoicePrint/showPrintShipping", params);
    },
    pelunasan(n) {
      this.$router.push({
        name: "cicilan-transaksi",
        params: {
          Receipt: n.receipt,
        },
      });
    },
  },
  computed: {
    datas() {
      return this.$store.state.transaksiReceipt.datas;
    },
    search: {
      get() {
        return this.$store.state.transaksiReceipt.search;
      },
      set(value) {
        return this.$store.commit("transaksiReceipt/setSearch", value);
      },
    },
  },
  created() {
    this.$store.dispatch("transaksiReceipt/resetSearchReceipt");
  },
};
</script>
