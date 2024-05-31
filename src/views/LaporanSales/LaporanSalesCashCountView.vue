<template>
  <div class="card">
    <div class="card-body">
      <h5 class="fw-500 text-uppercase">
        Laporan Cash Count Pembayaran Cicilan
      </h5>
      <div class="divider"></div>
      <div class="d-lg-flex">
        <div class="card" style="width: 50%">
          <div class="card-body">
            <div class="form-group">
              <label for="exampleFormControlInput1">Outlet</label>
              <select
                class="form-select"
                aria-label="Default select example"
                style="font-size: 13px"
                v-model="form.outlet"
                @change="$store.dispatch('helper/showKasirByOutlet', form)"
              >
                <option value="0">Pilih outlet</option>
                <option
                  v-for="(n, index) in outlets"
                  :key="index"
                  :value="n.outlet"
                >
                  {{ n.outlet }} - {{ n.outlet_name }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Nama Kasir</label>
              <select
                class="form-select"
                aria-label="Default select example"
                style="font-size: 13px"
                v-model="form.namakasir"
              >
                <option value="0">Pilih outlet</option>
                <option v-for="(n, index) in kasirs" :key="index" :value="n.id">
                  {{ n.namalengkap }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Tanggal Pembayaran</label>
              <input
                style="font-size: 13px"
                type="date"
                class="form-control"
                id="exampleFormControlInput1"
                v-model="form.tgltrx"
              />
            </div>

            <button
              class="btn btn-secondary btn-sm mt-2"
              style="width: 100% !important"
              @click="
                $store.dispatch('laporanSales/showLaporanCashCount', form)
              "
            >
              Preview
            </button>
            <button
              class="btn btn-primary btn-sm mt-2"
              style="width: 100% !important"
              @click="print"
            >
              Cetak
            </button>
          </div>
        </div>
        <div class="card" style="width: 50%">
          <div class="card-body">
            <div ref="cetak" v-if="datas.length > 0">
              <div style="text-align: center">
                <h5 style="margin-left: 4px; font-size: 14px">CASH COUNT</h5>
                <h5
                  style="margin-left: 4px; font-size: 14px; margin-top: -10px"
                >
                  PEMBAYARAN CICILAN
                </h5>
              </div>
              <div>
                <div style="width: 100%; border: 1px dotted #000"></div>
                <div
                  style="
                    width: 100% !important;
                    margin-top: 10px;
                    margin-bottom: 10px;
                  "
                >
                  <table style="width: 100% !important; font-size: 14px">
                    <tbody>
                      <tr>
                        <td style="width: 35%">Outlet</td>
                        <td style="width: 5%">:</td>
                        <td style="width: 60%">
                          {{ datas[0] ? datas[0].outlet : "" }}
                        </td>
                      </tr>
                      <tr>
                        <td style="width: 35%">Tanggal</td>
                        <td style="width: 5%">:</td>
                        <td style="width: 60%">
                          {{ form.tgltrx | formatDt3 }}
                        </td>
                      </tr>
                      <tr>
                        <td style="width: 35%">Tanggal Cetak</td>
                        <td style="width: 5%">:</td>
                        <td style="width: 60%">{{ tglprint }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div style="width: 100%; border: 1px dotted #000"></div>
                <div
                  style="
                    width: 100% !important;
                    margin-top: 10px;
                    margin-bottom: 10px;
                  "
                >
                  <table style="width: 100% !important; font-size: 14px">
                    <tbody>
                      <tr>
                        <td style="width: 35%">Nama Kasir</td>
                        <td style="width: 5%">:</td>
                        <td style="width: 60%">
                          {{ datas[0] ? datas[0].namalengkap : "" }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div style="width: 100%; border: 1px dotted #000"></div>
                <div
                  style="
                    width: 100% !important;
                    margin-top: 10px;
                    margin-bottom: 10px;
                  "
                >
                  <table style="width: 100% !important; font-size: 14px">
                    <tbody>
                      <tr v-for="(n, index) in datas" :key="index">
                        <td style="width: 35%">{{ n.tendername }}</td>
                        <td style="width: 5%">:</td>
                        <td style="width: 60%">{{ n.ttlbayar | Rupiah }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div style="width: 100%; border: 1px dotted #000"></div>
                <div
                  style="
                    width: 100% !important;
                    margin-top: 10px;
                    margin-bottom: 10px;
                  "
                >
                  <table style="width: 100% !important; font-size: 14px">
                    <tbody>
                      <tr>
                        <td style="width: 35%">Total</td>
                        <td style="width: 5%">:</td>
                        <td style="width: 60%">{{ total | Rupiah }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div style="width: 100%; border: 1px dotted #000"></div>
                <div style="width: 100% !important; margin-top: 10px">
                  <table style="width: 100% !important; font-size: 14px">
                    <tbody>
                      <tr>
                        <td style="width: 50%; text-align: center">Kasir</td>
                        <td style="width: 50%; text-align: center">
                          Kepala Kasir
                        </td>
                      </tr>
                      <tr style="height: 80px !important">
                        <td style="width: 50%; text-align: center">
                          {{ datas[0] ? datas[0].namalengkap : "" }}
                        </td>
                        <td style="width: 50%; text-align: center">
                          ( __________ )
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div v-if="datas.length < 1">
              <p
                style="
                  font-size: 13px;
                  font-weight: bold;
                  text-transform: uppercase;
                "
              >
                Data tidak ada
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import moment from "moment";
import Print from "@/services/Print";
export default {
  data() {
    return {
      show: false,
      form: {},
      tglprint: moment().format("DD-MM-Y HH:mm:ss"),
    };
  },
  computed: {
    ...mapState({
      outlets: (state) => state.helper.outlets,
      kasirs: (state) => state.helper.kasirs,
      datas: (state) => state.laporanSales.datas,
      total: (state) => state.laporanSales.total,
    }),
  },
  methods: {
    print() {
      Print.printCashCount(this.$refs.cetak);
    },
  },
  created() {
    this.$store.dispatch("helper/showOutlets");
    this.$store.dispatch("laporanSales/resetLaporan");
  },
};
</script>
