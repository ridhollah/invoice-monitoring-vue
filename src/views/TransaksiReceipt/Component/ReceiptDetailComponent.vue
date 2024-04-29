<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog modal-lg" style="max-width: 80%">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Detail Transaksi #{{ header.receipt ? header.receipt : "-" }}
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
              <!-- <div class="d-lg-flex justify-content-between">
                <div></div>
                <button class="btn btn-primary btn-sm" style="font-size: 10px">
                  <i class="fa fa-pencil" aria-hidden="true"></i>
                </button>
              </div> -->
              <div class="d-lg-flex">
                <div class="col">
                  <div>
                    <label class="label font-monospace">No Transaksi</label>
                    <p class="fw-bold r-12">
                      {{ header.receipt ? header.receipt : "" }}
                    </p>
                  </div>
                  <div>
                    <label class="label font-monospace">Outlet</label>
                    <p class="fw-bold r-12">
                      {{ header.outlet_name ? header.outlet_name : "" }}
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div>
                    <label class="label font-monospace"
                      >Tanggal Transaksi</label
                    >
                    <p class="fw-bold r-12">
                      {{ header.tgl ? header.tgl : "" | formatDt2 }}
                    </p>
                  </div>
                  <div>
                    <label class="label font-monospace">Tanggal Lunas</label>
                    <p class="fw-bold r-12">
                      {{
                        header.datefinish ? header.datefinish : "" | formatDt2
                      }}
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div>
                    <label class="label font-monospace"
                      >Tanggal Jatuh Tempo</label
                    >
                    <p class="fw-bold r-12">
                      {{ header.datetempo ? header.datetempo : "" | formatDt2 }}
                    </p>
                  </div>
                  <div>
                    <label class="label font-monospace"
                      >Tanggal Kirim Barang</label
                    >
                    <p class="fw-bold r-12">
                      {{ header.datesend ? header.datesend : "" | formatDt2 }}
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div>
                    <label class="label font-monospace">Kasir</label>
                    <p class="fw-bold r-12">
                      {{ header.kasir ? header.kasir : "" }}
                    </p>
                  </div>
                  <div>
                    <label class="label font-monospace">Status</label>
                    <p
                      class="fw-bold r-12 text-center"
                      style="width: 40% !important; padding: 2px"
                      :class="[header.status == 0 ? 'false' : 'true']"
                    >
                      {{
                        header && header.status == 0 ? "Belum Lunas" : "Lunas"
                      }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-lg-flex mt-2">
            <div class="col-lg-6 pe-1">
              <div class="card">
                <div class="card-body">
                  <div class="d-lg-flex justify-content-between">
                    <h6>Data Customer</h6>
                    <button
                      class="btn btn-primary btn-sm"
                      style="font-size: 10px"
                      data-bs-target="#modalEditCustomer"
                      data-bs-toggle="modal"
                      data-bs-dismiss="modal"
                    >
                      <i class="fa fa-pencil" aria-hidden="true"></i>
                    </button>
                  </div>
                  <div class="d-lg-flex">
                    <div class="col">
                      <div>
                        <label class="label font-monospace">Nama</label>
                        <p class="fw-bold r-12">
                          {{ member.Name ? member.Name : "-" }}
                        </p>
                      </div>
                      <div>
                        <label class="label font-monospace">Alamat</label>
                        <p class="fw-bold r-12">
                          {{ member.Address ? member.Address : "-" }}
                        </p>
                      </div>
                    </div>
                    <div class="col">
                      <div>
                        <label class="label font-monospace">Handphone</label>
                        <p class="fw-bold r-12">
                          {{ member.HandPhone ? member.HandPhone : "-" }}
                        </p>
                      </div>
                      <div>
                        <label class="label font-monospace">No Member</label>
                        <p class="fw-bold r-12">
                          {{ member.Member_No ? member.Member_No : "-" }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 ps-1">
              <div class="card">
                <div class="card-body">
                  <div class="d-lg-flex justify-content-between">
                    <h6>Data Surat Jalan</h6>
                    <button
                      class="btn btn-primary btn-sm"
                      style="font-size: 10px"
                      data-bs-target="#modalEditSuratJalan"
                      data-bs-toggle="modal"
                      data-bs-dismiss="modal"
                    >
                      <i class="fa fa-pencil" aria-hidden="true"></i>
                    </button>
                  </div>
                  <div class="d-lg-flex">
                    <div class="col">
                      <div>
                        <label class="label font-monospace"
                          >No Surat Jalan</label
                        >
                        <p class="fw-bold r-12">
                          {{
                            shipping && shipping.noshipping != ""
                              ? shipping.noshipping
                              : "-"
                          }}
                        </p>
                      </div>
                      <div>
                        <label class="label font-monospace">Nama</label>
                        <p class="fw-bold r-12">
                          {{ shipping ? shipping.namalengkap : "-" }}
                        </p>
                      </div>
                    </div>
                    <div class="col">
                      <div>
                        <label class="label font-monospace">Alamat</label>
                        <p class="fw-bold r-12">
                          {{ shipping ? shipping.address : "-" }}
                        </p>
                      </div>
                      <div>
                        <label class="label font-monospace">Handphone</label>
                        <p class="fw-bold r-12">
                          {{ shipping ? shipping.nohp : "-" }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="d-lg-flex mt-2">
            <div class="col-lg-9">
              <div class="card">
                <div class="card-body">
                  <div
                    class="table-responsive"
                    style="height: 100% !important; font-size: 12px"
                  >
                    <table
                      class="table table-hover table-striped table-bordered"
                    >
                      <thead>
                        <tr class="text-center">
                          <th style="width: 35%" colspan="2">Nama Barang</th>
                          <th style="width: 5%">Pcs</th>
                          <th style="width: 12%">Harga</th>
                          <th style="width: 12%">Disc</th>
                          <th style="width: 12%">Penjualan</th>
                          <th style="width: 10%">Status</th>
                          <th style="width: 12%">Keterangan</th>
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
                          <td class="text-end">
                            <span class="badge" :class="n.color">{{
                              n.namestatus
                            }}</span>
                          </td>
                          <td class="text-end">{{ n.desc }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 ps-2">
              <div class="card">
                <div class="card-body">
                  <!-- <div class="d-lg-flex justify-content-between">
                    <label class="label font-monospace">Sub Total</label>
                    <p class="fw-bold r-12">{{ price.ttlsales | Rupiah }}</p>
                  </div> -->
                  <div
                    class="d-lg-flex justify-content-between mt-2"
                    v-if="price.ttldisc && price.ttldisc > 0"
                  >
                    <label class="label font-monospace">Jumlah Diskon</label>
                    <p class="fw-bold r-12">{{ price.ttldisc | Rupiah }}</p>
                  </div>
                  <div
                    class="d-lg-flex justify-content-between mt-2"
                    v-if="price.discamtfr && price.discamtfr > 0"
                  >
                    <label class="label font-monospace">Jumlah Diskon</label>
                    <p class="fw-bold r-12">{{ price.discamtfr | Rupiah }}</p>
                  </div>
                  <div
                    class="d-lg-flex justify-content-between mt-2"
                    v-if="price.ttlinstall > 0"
                  >
                    <label class="label font-monospace">Biaya Pemasangan</label>
                    <p class="fw-bold r-12">{{ price.ttlinstall | Rupiah }}</p>
                  </div>
                  <div
                    class="d-lg-flex justify-content-between mt-2"
                    v-if="price.ttldeliv > 0"
                  >
                    <label class="label font-monospace">Biaya Pengiriman</label>
                    <p class="fw-bold r-12">{{ price.ttldeliv | Rupiah }}</p>
                  </div>
                  <div
                    class="d-lg-flex justify-content-between mt-2"
                    v-if="price.ttldivan > 0"
                  >
                    <label class="label font-monospace"
                      >Biaya Divan Belah</label
                    >
                    <p class="fw-bold r-12">{{ price.ttldivan | Rupiah }}</p>
                  </div>
                  <div
                    class="d-lg-flex justify-content-between mt-2"
                    v-if="price.ttlother > 0"
                  >
                    <label class="label font-monospace">Biaya lain-lain</label>
                    <p class="fw-bold r-12">{{ price.ttlother | Rupiah }}</p>
                  </div>
                  <div class="d-lg-flex justify-content-between mt-2">
                    <label class="label font-monospace">Jumlah Transaksi</label>
                    <p class="fw-bold r-12">{{ price.ttlsales | Rupiah }}</p>
                  </div>
                  <div class="d-lg-flex justify-content-between mt-2">
                    <label class="label font-monospace">Jumlah Bayar</label>
                    <p class="fw-bold r-12">{{ price.ttlbayar | Rupiah }}</p>
                  </div>
                  <div
                    class="d-lg-flex justify-content-between mt-2"
                    v-if="price.ttlsisa != 0"
                  >
                    <label class="label font-monospace">Jumlah Sisa</label>
                    <p class="fw-bold r-12">{{ price.ttlsisa | Rupiah }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-2">
            <div class="card">
              <div class="card-body">
                <div
                  class="table-responsive"
                  style="height: 200px; font-size: 12px"
                >
                  <table class="table table-hover table-striped table-bordered">
                    <thead>
                      <tr class="text-center">
                        <th style="width: 10%">No Invoice</th>
                        <th style="width: 10%">Tanggal</th>
                        <th style="width: 10%">Tender Type</th>
                        <th style="width: 10%">No Kartu</th>
                        <th style="width: 10%">No Approval</th>
                        <th style="width: 10%">No Voucher</th>
                        <th style="width: 10%">Jumlah Bayar</th>
                        <th style="width: 10%">Kategori</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(n, index) in payment" :key="index">
                        <td>{{ n.invoiceno }}</td>
                        <td>{{ n.tgl | formatDt2 }}</td>
                        <td>{{ n.tendername }}</td>
                        <td>{{ n.nocard }}</td>
                        <td>{{ n.noapproval }}</td>
                        <td>{{ n.nodocument }}</td>
                        <td class="text-end">{{ n.ttlbayar | Rupiah2 }}</td>
                        <td>
                          {{
                            n.line == 0
                              ? n.tendername == "CICILAN YAFURNI"
                                ? "TOTAL CICILAN"
                                : "DP AWAL"
                              : "CICILAN TERBAYAR"
                          }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
      header: (state) => state.transaksiReceipt.details.header,
      member: (state) => state.transaksiReceipt.details.member,
      barang: (state) => state.transaksiReceipt.details.barang,
      payment: (state) => state.transaksiReceipt.details.payment,
      price: (state) => state.transaksiReceipt.details.price,
      shipping: (state) => state.transaksiReceipt.details.shipping,
    }),
  },
};
</script>
