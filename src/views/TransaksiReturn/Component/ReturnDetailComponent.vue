<template>
  <div
    class="modal fade"
    id="modalReturnDetail"
    tabindex="-1"
    aria-labelledby="modalReturnDetailLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog modal-md" style="max-width: 80%">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalReturnDetailLabel">
            Detail Return #{{ header.returnno ? header.returnno : "-" }}
          </h5>
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
              <div class="d-lg-flex">
                <div class="col">
                  <div>
                    <label class="label font-monospace">No Return</label>
                    <p class="fw-bold r-12">
                      {{ header.returnno ? header.returnno : "-" }}
                    </p>
                  </div>
                  <div>
                    <label class="label font-monospace">Outlet</label>
                    <p class="fw-bold r-12">
                      {{ header.outlet ? header.outlet : "-" }} -
                      {{ header.outlet_name ? header.outlet_name : "-" }}
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div>
                    <label class="label font-monospace">Tanggal Return</label>
                    <p class="fw-bold r-12">
                      {{ header.tgl ? header.tgl : "-" | formatDt2 }}
                    </p>
                  </div>
                  <div>
                    <label class="label font-monospace">Jumlah Return</label>
                    <p class="fw-bold r-12">
                      {{ header.ttlsales ? header.ttlsales : "-" | Rupiah }}
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div>
                    <label class="label font-monospace">No Sales</label>
                    <p class="fw-bold r-12">
                      {{ header.receipt ? header.receipt : "-" }}
                    </p>
                  </div>
                  <div>
                    <label class="label font-monospace">Tanggal Sales</label>
                    <p class="fw-bold r-12">
                      {{
                        header.tglreceipt ? header.tglreceipt : "-" | formatDt2
                      }}
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div>
                    <label class="label font-monospace">Kasir</label>
                    <p class="fw-bold r-12">
                      {{ header.kasir ? header.kasir : "-" }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card mt-2">
            <div class="card-body">
              <div
                class="table-responsive"
                style="height: 100% !important; font-size: 12px"
              >
                <table class="table table-hover table-striped table-bordered">
                  <thead>
                    <tr class="text-center">
                      <th style="width: 30%" colspan="2">Nama Barang</th>
                      <th style="width: 5%">Pcs</th>
                      <th style="width: 10%">Harga</th>
                      <th style="width: 10%">Disc</th>
                      <th style="width: 10%">Penjualan</th>
                      <th style="width: 25%">Keterangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(n, index) in barang" :key="index">
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
                      <td class="text-end">{{ n.UnitPrice | Rupiah2 }}</td>
                      <td class="text-end">{{ n.TtlDisc | Rupiah2 }}</td>
                      <td class="text-end">{{ n.NetSales | Rupiah2 }}</td>
                      <td class="text-start">{{ n.remark }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="card mt-2">
            <div class="card-body">
              <div
                class="table-responsive"
                style="height: 100% !important; font-size: 12px"
              >
                <table class="table table-hover table-striped table-bordered">
                  <thead>
                    <tr class="text-center">
                      <th style="width: 8%">Tender Type</th>
                      <th style="width: 15%">Tender Name</th>
                      <th style="width: 10%">Nama Kartu</th>
                      <th style="width: 10%">No Kartu</th>
                      <th style="width: 10%">No Approval</th>
                      <th style="width: 10%">No Document</th>
                      <th style="width: 10%">Nominal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(n, index) in payment" :key="index">
                      <td class="text-center">{{ n.tendertype }}</td>
                      <td class="text-start">{{ n.tendername }}</td>
                      <td class="text-start">{{ n.namecard }}</td>
                      <td class="text-start">{{ n.nocard }}</td>
                      <td class="text-start">{{ n.noapproval }}</td>
                      <td class="text-start">{{ n.nodocument }}</td>
                      <td class="text-end">{{ n.ttlbayar | Rupiah2 }}</td>
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
            tutup
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
      header: (state) => state.transaksiReturn.details.header,
      barang: (state) => state.transaksiReturn.details.barang,
      payment: (state) => state.transaksiReturn.details.payment,
    }),
  },
};
</script>
