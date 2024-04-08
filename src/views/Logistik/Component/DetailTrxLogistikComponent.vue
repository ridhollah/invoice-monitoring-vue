<template>
  <div
    class="modal fade"
    id="logistik"
    tabindex="-1"
    aria-labelledby="logistikLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog" style="max-width: 60%">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="logistikLabel">Modal</h5>
          <button
            class="btn btn-secondary btn-sm"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="$store.commit('logistik/resetQc')"
          >
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="d-lg-flex justify-content-between">
            <div class="col-lg-6">
              <div>
                <label class="label font-monospace">No Transaksi</label>
                <p class="fw-bold r-12">
                  {{ header ? header.receipt : "" }}
                </p>
              </div>
              <div>
                <label class="label font-monospace">Tanggal Kirim</label>
                <p class="fw-bold r-12">
                  {{ header ? header.datesend : "" | formatDt2 }}
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div>
                <label class="label font-monospace">Status</label>
                <br />
                <span class="badge" :class="header ? header.color : ''">{{
                  header ? header.namestatus : ""
                }}</span>
              </div>
            </div>
          </div>

          <div
            class="table-responsive mt-2"
            style="height: 300px; font-size: 12px"
          >
            <table class="table table-hover table-striped table-bordered">
              <thead>
                <tr class="text-center">
                  <th style="width: 50%" colspan="2">Nama Barang</th>
                  <th style="width: 5%">Quantity</th>
                  <th style="width: 10%">Checked</th>
                  <th style="width: 35%">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(n, index) in produk" :key="index">
                  <td class="text-center">{{ n.Internal }}</td>
                  <td>
                    <p style="margin: 0 !important">{{ n.Descript }}</p>
                    <p
                      v-if="n.note"
                      style="
                        margin: 0 !important;
                        border-top: 1px solid #dee2e6;
                      "
                    >
                      {{ n.note }}
                    </p>
                  </td>
                  <td class="text-center">{{ n.Quantity }}</td>
                  <td class="text-center">
                    <span
                      class="badge"
                      :class="n.color"
                      v-if="n.statusqc != 2"
                      >{{ n.namestatus }}</span
                    >
                    <input
                      v-if="n.statusqc == 2"
                      class="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                      :value="n"
                      v-model="qc"
                      style="margin: 0; font-size: 20px; border: 1px solid red"
                    />
                  </td>

                  <td v-if="n.statusqc == 2">
                    <input
                      style="font-size: 13px"
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      v-model="n.desc"
                    />
                  </td>
                  <td v-else>{{ n.desc }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            data-bs-dismiss="modal"
            @click="$store.commit('logistik/resetQc')"
          >
            Batal
          </button>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            @click="$store.dispatch('logistik/saveQc')"
            v-if="header && header.statusfix == 2"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      header: (state) => state.logistik.detail.header,
      produk: (state) => state.logistik.detail.produk,
    }),
    qc: {
      get() {
        return this.$store.state.logistik.qc;
      },
      set(value) {
        return this.$store.commit("logistik/setQc", value);
      },
    },
  },
};
</script>
