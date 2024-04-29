<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h5 class="fw-500 text-uppercase">
          Pembayaran Ke {{ header.cicilan }}
        </h5>
        <div class="divider"></div>
        <div class="d-flex">
          <div class="pe-lg-2 col-lg-7">
            <div class="card">
              <div class="card-body">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex" style="font-size: 13px">
                      <div class="col-md-8 col-lg-8">
                        <div>
                          <label class="label font-monospace"
                            >No Transaksi</label
                          >
                          <p class="fw-bold">
                            {{ header.receipt ? header.receipt : "-" }}
                          </p>
                        </div>
                        <div>
                          <label class="label font-monospace">Outlet</label>
                          <p class="fw-bold text-uppercase">
                            {{ header.outlet_name ? header.outlet_name : "-" }}
                          </p>
                        </div>
                      </div>
                      <div class="col-md-4 col-lg-4">
                        <div>
                          <label class="label font-monospace"
                            >Tanggal Transaksi</label
                          >
                          <p class="fw-bold">
                            {{ header.tgl ? header.tgl : "-" | formatDt2 }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mt-2">
                  <div class="card-body">
                    <div class="d-flex" style="font-size: 14px">
                      <div class="col-md-8 col-lg-8">
                        <div>
                          <label class="label font-monospace"
                            >Nama Lengkap</label
                          >
                          <p class="fw-bold">
                            {{ member.name ? member.name : "-" }}
                          </p>
                        </div>
                        <div>
                          <label class="label font-monospace">Alamat</label>
                          <p class="fw-bold">
                            {{ member.address ? member.address : "-" }}
                          </p>
                        </div>
                      </div>
                      <div class="col-md-4 col-lg-4">
                        <div>
                          <label class="label font-monospace">Handphone</label>
                          <p class="fw-bold">
                            {{ member.nohp ? member.nohp : "-" }}
                          </p>
                        </div>
                        <div>
                          <label class="label font-monospace">Member</label>
                          <p class="fw-bold">
                            {{ member.memberno ? member.memberno : "-" }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-2">
                  <div
                    class="table-responsive"
                    style="height: 300px; font-size: 12px"
                  >
                    <table
                      class="table table-hover table-striped table-bordered"
                    >
                      <thead>
                        <tr class="text-center">
                          <th style="width: 50%" colspan="2">Nama Barang</th>
                          <th style="width: 5%">Pcs</th>
                          <th style="width: 15%">Harga</th>
                          <th style="width: 10%">Disc</th>
                          <th style="width: 15%">Penjualan</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(n, index) in details" :key="index">
                          <td class="text-end">{{ n.Internal }}</td>
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
                          <td class="text-end">{{ n.Quantity }}</td>
                          <td class="text-end">{{ n.UnitPrice | Rupiah }}</td>
                          <td class="text-end">{{ n.TtlDisc | Rupiah }}</td>
                          <td class="text-end">{{ n.NetSales | Rupiah }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ps-lg-2 col-lg-5">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <div class="form-group">
                    <label for="exampleFormControlInput30"
                      >Jumlah Transaksi</label
                    >
                    <input
                      style="font-size: 13px"
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput30"
                      :value="header.ttlsales | Rupiah"
                      disabled
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlInput30"
                      >Jumlah Telah Bayar</label
                    >
                    <input
                      style="font-size: 13px"
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput30"
                      :value="header.ttlbayar | Rupiah"
                      disabled
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput30"
                    >Jumlah sisa yang perlu dibayar</label
                  >
                  <input
                    style="font-size: 13px"
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput30"
                    :value="header.ttlsisa | Rupiah"
                    disabled
                  />
                </div>
                <div class="divider"></div>
                <p class="fw-bold" style="font-size: 13px">
                  Pilih metode pembayaran
                </p>
                <div class="mt-2 d-lg-flex justify-content-between">
                  <button
                    type="button"
                    class="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#tenderTypeCash"
                    :class="[
                      $store.state.installment.tenderType == '01'
                        ? 'btn-primary'
                        : 'btn-outline-primary',
                    ]"
                    @click="$store.commit('installment/setTenderType', '01')"
                  >
                    Cash
                  </button>
                  <button
                    type="button"
                    class="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#tenderTypeCredit"
                    style="cursor: pointer"
                    :class="[
                      $store.state.installment.tenderType == '02'
                        ? 'btn-primary'
                        : 'btn-outline-primary',
                    ]"
                    @click="$store.commit('installment/setTenderType', '02')"
                  >
                    Credit
                  </button>
                  <button
                    type="button"
                    class="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#tenderTypeDebit"
                    style="cursor: pointer"
                    :class="[
                      $store.state.installment.tenderType == '03'
                        ? 'btn-primary'
                        : 'btn-outline-primary',
                    ]"
                    @click="$store.commit('installment/setTenderType', '03')"
                  >
                    Debit
                  </button>
                  <button
                    type="button"
                    class="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#tenderTypeVoucher"
                    style="cursor: pointer"
                    :class="[
                      $store.state.installment.tenderType == '04'
                        ? 'btn-primary'
                        : 'btn-outline-primary',
                    ]"
                    @click="$store.commit('installment/setTenderType', '04')"
                  >
                    Voucher
                  </button>
                </div>
                <button
                  type="button"
                  class="btn btn-primary btn-sm mt-2"
                  style="width: 100%"
                  data-bs-toggle="modal"
                  data-bs-target="#tenderList"
                >
                  Daftar pembayaran
                </button>
                <div class="mt-2 card">
                  <div class="card-body">
                    <p>Jumlah Pembayaran</p>
                    <h5>
                      {{
                        header && header.ttlPembayaran
                          ? header.ttlPembayaran
                          : 0 | Rupiah
                      }}
                    </h5>
                  </div>
                </div>
                <div class="mt-2 card">
                  <div class="card-body">
                    <p>Jumlah Sisa</p>
                    <h5>
                      {{
                        header && header.ttlsisapembayaran
                          ? header.ttlsisapembayaran
                          : 0 | Rupiah
                      }}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mt-2">
              <div class="card-body">
                <button
                  @click="$store.dispatch('installment/saveTrxInstallment')"
                  type="button"
                  class="btn btn-primary btn-sm"
                  style="width: 100%"
                  :disabled="header.status == 1 || header.ttlPembayaran == 0"
                >
                  Simpan Transaksi
                </button>
                <button
                  @click="
                    $store.dispatch('installment/cancelTrx'), $router.go(-1)
                  "
                  type="button"
                  class="btn btn-secondary btn-sm mt-2"
                  style="width: 100%"
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TenderCashComponent />
    <TenderCreditComponent />
    <TenderDebitComponent />
    <TenderVoucherComponent />
    <TenderListComponent />
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      details: (state) => state.installment.details,
      header: (state) => state.installment.header,
      member: (state) => state.installment.member,
      type: (state) => state.installment.typePembayaran,
      tenderType: (state) => state.installment.tenderType,
      tenType: (state) => state.helper.tenType,
    }),
    transaksi: {
      get() {
        return this.$store.state.installment.transaksi;
      },
      set(value) {
        return this.$store.commit("installment/setTransaksi", value);
      },
    },
  },
  created() {
    // this.$store.dispatch("helper/showTenType");
    this.$store.dispatch(
      "installment/showTrxDetail",
      this.$route.params.Receipt
    );
  },
};
</script>
<style>
.card-tentype {
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
}

.active-tentype {
  background: rgb(34, 226, 17);
  color: #fff;
  font-weight: bold;
}

.active-tentype p {
  color: #fff;
}
</style>
