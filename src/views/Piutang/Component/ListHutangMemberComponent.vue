<template>
  <div
    class="modal fade"
    id="modalListHutangMember"
    tabindex="-1"
    aria-labelledby="modalListHutangMemberLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered" style="max-width: 90%">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modalListHutangMemberLabel">
            Member # {{ member && member.Member_No ? member.Member_No : "-" }}
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
                      {{ member && member.HandPhone ? member.HandPhone : "-" }}
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4">
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
                    <label class="label font-monospace">No Member</label>
                    <p class="fw-bold">
                      {{ member && member.Member_No ? member.Member_No : "-" }}
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4">
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
          <div class="d-lg-flex">
            <div class="col-lg-6 pe-1">
              <div class="card">
                <div class="card-body">
                  <h5 class="fw-500" style="font-size: 15px">
                    Daftar Transaksi
                  </h5>
                  <div
                    class="table-responsive mt-2"
                    style="height: 250px; font-size: 12px"
                  >
                    <table
                      class="table table-hover table-bordered table-striped"
                    >
                      <thead>
                        <tr>
                          <th style="width: 5%">Tgl</th>
                          <th style="width: 10%">No Transaksi</th>
                          <th style="width: 10%">Jumlah Transaksi</th>
                          <th style="width: 10%">Telah Dibayar</th>
                          <th style="width: 10%">Sisa Hutang</th>
                          <th style="width: 5%">Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(n, index) in trxMember" :key="index">
                          <td>{{ n.tgl | formatDt2 }}</td>
                          <td>{{ n.receipt }}</td>
                          <td class="text-end">{{ n.ttlsales | Rupiah2 }}</td>
                          <td class="text-end">{{ n.ttlbayar | Rupiah2 }}</td>
                          <td class="text-end">{{ n.ttlsisa | Rupiah2 }}</td>
                          <td class="text-center">
                            <button
                              type="button"
                              class="btn btn-primary btn-sm"
                              @click="
                                $store.dispatch(
                                  'piutang/showDetailTrxMemberByPayment',
                                  n
                                )
                              "
                            >
                              <i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="card mt-2">
                <div class="card-body">
                  <h5 class="fw-500" style="font-size: 15px">
                    Daftar Barang By Trx
                  </h5>
                  <div
                    class="table-responsive mt-2"
                    style="height: 250px; font-size: 12px"
                  >
                    <table
                      class="table table-hover table-bordered table-striped"
                    >
                      <thead>
                        <tr>
                          <th style="width: 20%" colspan="2">Nama Barang</th>
                          <th style="width: 5%">Qty</th>
                          <th style="width: 10%">Net Sales</th>
                          <th style="width: 10%">Status</th>
                          <th style="width: 10%">Qty Return</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(n, index) in trxMemberProduk" :key="index">
                          <td>{{ n.internal }}</td>
                          <td>
                            <p style="margin: 0 !important">{{ n.descript }}</p>
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
                          <td>{{ n.quantity }}</td>
                          <td class="text-end">{{ n.netsales | Rupiah2 }}</td>
                          <td class="text-center">
                            <span class="badge" :class="n.color">{{
                              n.namestatus
                            }}</span>
                          </td>
                          <td>{{ n.qtyreturn }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="fw-500" style="font-size: 15px">
                    Daftar Payment By Trx
                  </h5>
                  <div
                    class="table-responsive mt-2"
                    style="height: 250px; font-size: 12px"
                  >
                    <table
                      class="table table-hover table-bordered table-striped"
                    >
                      <thead>
                        <tr>
                          <th style="width: 5%">Tgl</th>
                          <th style="width: 10%">No Transaksi</th>
                          <th style="width: 10%">Tender Type</th>
                          <th style="width: 10%">Jumlah Bayar</th>
                          <th style="width: 10%">Keterangan</th>
                          <th style="width: 10%">Pembayaran Ke</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(n, index) in trxMemberByPayment"
                          :key="index"
                        >
                          <td>{{ n.tgl | formatDt2 }}</td>
                          <td>{{ n.receipt }}</td>
                          <td>{{ n.tendername }}</td>
                          <td class="text-end">{{ n.ttlbayar | Rupiah2 }}</td>
                          <td>{{ n.namestatus }}</td>
                          <td>{{ n.pembayaran }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div class="card mt-2">
                <div class="card-body">
                  <h5 class="fw-500" style="font-size: 15px">
                    Daftar Return By Payment
                  </h5>
                  <div
                    class="table-responsive mt-2"
                    style="height: 250px; font-size: 12px"
                  >
                    <table
                      class="table table-hover table-bordered table-striped"
                    >
                      <thead>
                        <tr>
                          <th style="width: 5%">Tgl</th>
                          <th style="width: 10%">No Return</th>
                          <th style="width: 10%">Tender Type</th>
                          <th style="width: 10%">Jumlah Return</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(n, index) in trxMemberReturnByPayment"
                          :key="index"
                        >
                          <td>{{ n.tgl | formatDt2 }}</td>
                          <td>{{ n.returnno }}</td>
                          <td>{{ n.tendername }}</td>
                          <td class="text-end">{{ n.ttlbayar | Rupiah2 }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
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
      member: (state) => state.piutang.detailTrxMember.member,
      trxMember: (state) => state.piutang.detailTrxMember.trxMember,
      trxMemberByPayment: (state) =>
        state.piutang.detailTrxMemberByPayment.payment,
      trxMemberReturnByPayment: (state) =>
        state.piutang.detailTrxMemberByPayment.return,
      trxMemberProduk: (state) => state.piutang.detailTrxMemberByPayment.produk,
    }),
  },
};
</script>
