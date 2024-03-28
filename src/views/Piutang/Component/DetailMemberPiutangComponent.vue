<template>
  <div
    class="modal fade"
    id="modalTambahPiutang"
    tabindex="-1"
    aria-labelledby="modalTambahPiutangLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered" style="max-width: 90%">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modalTambahPiutangLabel">
            Modal title
          </h1>
          <button
            class="btn btn-secondary btn-sm"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="card">
            <div class="card-body">
              <div class="card mb-2">
                <div class="card-body">
                  <div class="d-flex" style="font-size: 13px">
                    <div class="col-md-6 col-lg-4">
                      <div>
                        <label class="label font-monospace">Nama</label>
                        <p class="fw-bold">
                          {{ member && member.Name ? member.Name : "-" }}
                        </p>
                      </div>
                      <div>
                        <label class="label font-monospace">No Hp</label>
                        <p class="fw-bold">
                          {{
                            member && member.HandPhone ? member.HandPhone : "-"
                          }}
                        </p>
                      </div>
                      <div>
                        <label class="label font-monospace">No Member</label>
                        <p class="fw-bold">
                          {{
                            member && member.Member_No ? member.Member_No : "-"
                          }}
                        </p>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-8">
                      <div>
                        <label class="label font-monospace">Alamat</label>
                        <p class="fw-bold">
                          {{
                            member && member.Address
                              ? member.Address == "-"
                                ? ""
                                : member.Address + ","
                              : "-"
                          }}
                          {{ member && member.City ? member.City : "-" }}
                        </p>
                      </div>
                      <div>
                        <label class="label font-monospace">Saldo Credit</label>
                        <p class="fw-bold">
                          {{
                            member && member.Credit_Limit
                              ? member.Credit_Limit
                              : "0" | Rupiah
                          }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="btn btn-primary btn-sm"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                <i class="fa fa-plus me-2" aria-hidden="true"></i>Tambah
              </button>
              <div
                class="table-responsive mt-2"
                style="height: 200px; font-size: 12px"
              >
                <table class="table table-hover table-bordered table-striped">
                  <thead>
                    <tr>
                      <th style="width: 5%">Tgl</th>
                      <th style="width: 10%">No Transaksi</th>
                      <th style="width: 10%">No Surat jalan</th>
                      <th style="width: 10%">Jumlah Transaksi</th>
                      <th style="width: 10%">Jumlah bayar</th>
                      <th style="width: 10%">Sisa bayar</th>
                      <th style="width: 10%">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(n, index) in receiptMember" :key="index">
                      <td>{{ n.tgl | formatDt2 }}</td>
                      <td>{{ n.receipt }}</td>
                      <td>{{ n.noshipping }}</td>
                      <td class="text-end">{{ n.ttlsales | Rupiah }}</td>
                      <td class="text-end">{{ n.ttlbayar | Rupiah }}</td>
                      <td class="text-end">{{ n.ttlsisa | Rupiah }}</td>
                      <td>
                        <!-- <button
                          class="btn btn-primary btn-sm me-1"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                          @click="
                            $store.commit('piutang/setDetailTrxUpdate', n)
                          "
                        >
                          <i
                            class="fa fa-pencil-square-o"
                            aria-hidden="true"
                          ></i>
                        </button> -->
                        <button
                          class="btn btn-danger btn-sm"
                          data-bs-target="#exampleModalToggle4"
                          data-bs-toggle="modal"
                          @click="
                            $store.commit('piutang/setDetailTrxDelete', n)
                          "
                        >
                          <i class="fa fa-remove" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            data-bs-dismiss="modal"
          >
            Tutup
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
      member: (state) => state.piutang.detailMember.member,
      receiptMember: (state) => state.piutang.detailMember.receiptMember,
    }),
  },
};
</script>
