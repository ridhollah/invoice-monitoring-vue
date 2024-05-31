<template>
  <div class="card">
    <div class="card-body">
      <div>
        <h5 class="fw-500 text-uppercase me-3">Logistik</h5>
      </div>
      <div class="divider"></div>
      <div class="d-flex align-items-end">
        <div
          class="form-group me-1"
          v-show="$store.getters['logistik/filterOutlet']"
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
          <label for="exampleFormControlInput30">Pencarian</label>
          <input
            style="font-size: 13px"
            type="text"
            class="form-control"
            id="exampleFormControlInput30"
            placeholder="No Transaksi"
            v-model="search.search"
          />
        </div>
        <div class="form-group me-1">
          <label for="exampleFormControlInput30">Lihat</label>
          <select
            style="font-size: 13px"
            class="form-select"
            aria-label="Default select example"
            v-model="search.count"
          >
            <option value="100">100</option>
            <option value="300">300</option>
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
            <option value="0">Semua</option>
            <option value="2">Menunggu QC</option>
            <option value="3">Siap dikirim</option>
            <option value="6">Selesai dikirim</option>
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
          @click="$store.dispatch('logistik/showTrx')"
        >
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          class="btn btn-secondary btn-sm me-1"
          @click="$store.dispatch('logistik/resetLogistik')"
        >
          <i class="fa fa-refresh" aria-hidden="true"></i>
        </button>
      </div>
      <div class="table-responsive mt-2" style="height: 400px; font-size: 12px">
        <table class="table table-hover table-bordered">
          <thead>
            <tr class="text-center">
              <th style="width: 15%">No Transaksi</th>
              <th style="width: 15%">No Surat Jalan</th>
              <th style="width: 12%">Tanggal Kirim</th>
              <th style="width: 12%">Status</th>
              <th style="width: 15%">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(n, index) in datas" :key="index">
              <td
                class="text-center"
                :class="[n.statusfix == 3 ? 'bg-blue' : '']"
              >
                {{ n.receipt }}
              </td>
              <td
                class="text-center"
                :class="[n.statusfix == 3 ? 'bg-blue' : '']"
              >
                {{ n.noshipping }}
              </td>
              <td
                class="text-center"
                :class="[n.statusfix == 3 ? 'bg-blue' : '']"
              >
                {{ n.datesend }}
              </td>
              <td
                class="text-center"
                :class="[n.statusfix == 3 ? 'bg-blue' : '']"
              >
                <span class="badge" :class="n.color">{{ n.namestatus }}</span>
              </td>
              <td
                class="text-center"
                :class="[n.statusfix == 3 ? 'bg-blue' : '']"
              >
                <button
                  class="btn btn-primary btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#logistik"
                  @click="$store.dispatch('logistik/detailTrx', n)"
                  style="font-size: 10px"
                  v-show="$store.getters['logistik/filterQc']"
                >
                  <i class="fa fa-cog" aria-hidden="true"></i>
                  qc
                </button>
                <button
                  class="btn btn-success btn-sm ms-1"
                  data-bs-toggle="modal"
                  data-bs-target="#suratjalanCetak"
                  @click="cetakShipping(n)"
                  style="font-size: 10px"
                  v-if="n.statusfix == 3"
                  v-show="$store.getters['logistik/filterSuratJalan']"
                >
                  <i class="fa fa-file-o me-1" aria-hidden="true"></i
                  ><span>Surat Jalan</span>
                </button>
                <button
                  class="btn btn-primary btn-sm ms-1"
                  data-bs-toggle="modal"
                  data-bs-target="#modalConfirm"
                  @click="$store.commit('logistik/setidConfirm', n)"
                  style="font-size: 10px"
                  v-if="n.statusfix == 3 && n.noshipping"
                  v-show="$store.getters['logistik/filterConfirm']"
                >
                  <i class="fa fa-file-o me-1" aria-hidden="true"></i
                  ><span>Confirm</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <DetailTrxLogistikComponent />
    <ModalCetakSuratJalanComponent />
    <ModalConfirmComponent />
  </div>
</template>
<script>
export default {
  methods: {
    cetakShipping(n) {
      let params = {
        Receipt: n.receipt,
      };
      this.$store.dispatch("invoicePrint/createNoShipping", n);
      this.$store.dispatch("invoicePrint/showPrintShipping", params);
    },
  },
  computed: {
    datas() {
      return this.$store.state.logistik.datas;
    },
    search: {
      get() {
        return this.$store.state.logistik.search;
      },
      set(value) {
        return this.$store.commit("logistik/setSearch", value);
      },
    },
  },
  created() {
    this.$store.dispatch("logistik/resetLogistik");
  },
};
</script>
<style>
@keyframes bg-blue {
  0% {
    background-color: #ffffff;
  }
  100% {
    background-color: #0077ff;
  }
}
@-webkit-keyframes bg-blue {
  0% {
    background-color: #ffffff;
  }
  100% {
    background-color: #0077ff;
  }
}
.bg-blue {
  -webkit-animation: bg-blue 1s linear infinite;
  -moz-animation: bg-blue 1s linear infinite;
  animation: bg-blue 1s linear infinite;
}
@keyframes bg-yellow {
  0% {
    background-color: #ffffff;
  }
  100% {
    background-color: #ffd900;
  }
}
@-webkit-keyframes bg-yellow {
  0% {
    background-color: #ffffff;
  }
  100% {
    background-color: #ffd900;
  }
}
.bg-yellow {
  -webkit-animation: bg-yellow 1s linear infinite;
  -moz-animation: bg-yellow 1s linear infinite;
  animation: bg-yellow 1s linear infinite;
}

@keyframes bg-green {
  0% {
    background-color: #ffffff;
  }
  100% {
    background-color: #16d301;
  }
}
@-webkit-keyframes bg-green {
  0% {
    background-color: #ffffff;
  }
  100% {
    background-color: #16d301;
  }
}
.bg-green {
  -webkit-animation: bg-green 1s linear infinite;
  -moz-animation: bg-green 1s linear infinite;
  animation: bg-green 1s linear infinite;
}
</style>
