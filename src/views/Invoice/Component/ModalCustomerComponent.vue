<template>
  <div
    class="modal fade"
    id="customer"
    tabindex="-1"
    aria-labelledby="customerLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="customerLabel"></h5>
        </div>
        <div class="modal-body">
          <div class="d-lg-flex">
            <div class="col-lg-6">
              <div class="card" style="height: 100% !important">
                <div class="card-body">
                  <h5>Customer</h5>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Nama</label>
                    <input
                      style="font-size: 13px"
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      v-model="customer.Name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">No Handphone</label>
                    <input
                      style="font-size: 13px"
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      v-model="customer.HandPhone"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Alamat (opt)</label>
                    <input
                      style="font-size: 13px"
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      v-model="customer.Address"
                    />
                  </div>
                  <div class="text-end mt-2">
                    <button
                      class="btn btn-primary btn-sm"
                      @click="$store.commit('invoice/setChekedMember')"
                      style="padding: 5px 15px 5px 15px"
                    >
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 ps-2">
              <div class="card">
                <div class="card-body">
                  <h5>Alamat Pengiriman</h5>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                      :checked="$store.state.invoice.checkedmember"
                      :disabled="$store.state.invoice.header.Member == ''"
                      @change="$store.commit('invoice/setChekedMember')"
                      style="font-size: 15px; border: 1px solid red"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Gunakan data customer
                    </label>
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlInput1"
                      >Tanggal Pengiriman</label
                    >
                    <input
                      style="font-size: 13px"
                      type="date"
                      class="form-control"
                      id="exampleFormControlInput1"
                      v-model="alamatJasa.datesend"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Nama</label>
                    <input
                      style="font-size: 13px"
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      v-model="alamatJasa.name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">No Handphone</label>
                    <input
                      style="font-size: 13px"
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      v-model="alamatJasa.nohp"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Alamat</label>
                    <input
                      style="font-size: 13px"
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      v-model="alamatJasa.address"
                    />
                  </div>
                  <div class="form-check mt-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                      style="font-size: 15px; border: 1px solid red"
                      :checked="$store.state.invoice.checkedProduk"
                      @change="$store.commit('invoice/setCheckedProduk')"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Barang diambil Customer sekarang
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card mt-2" v-show="$store.state.invoice.checkedProduk">
            <div class="card-body">
              <h5>Produk</h5>
              <div style="width: 60%; font-size: 12px; font-weight: 700">
                <p>
                  pilih barang yang akan di kirim atau yang akan di ambil
                  terlebih dahulu oleh customer apabila customer ingin membawa
                  barangnya sendiri
                </p>
              </div>
              <div
                class="table-responsive mt-2"
                style="height: 250px; font-size: 12px"
              >
                <table class="table table-hover table-striped table-bordered">
                  <thead>
                    <tr class="text-center">
                      <th style="width: 40%" colspan="2">Nama Barang</th>
                      <th style="width: 5%">Pcs</th>
                      <th style="width: 5%">Checked</th>
                      <th style="width: 20%">Keterangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(n, index) in details" :key="index">
                      <td class="text-end">{{ n.Internal }}</td>
                      <td>
                        {{ n.Descript }}
                      </td>
                      <td class="text-end">{{ n.Quantity }}</td>
                      <td class="text-center">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexCheckDefault"
                          :value="n"
                          v-model="checked"
                          style="
                            margin: 0;
                            font-size: 20px;
                            border: 1px solid red;
                          "
                        />
                      </td>
                      <td>
                        <input
                          style="font-size: 13px"
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          v-model="n.desc"
                        />
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
            @click="$store.commit('invoice/resetJasa')"
          >
            Batal
          </button>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            data-bs-dismiss="modal"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    details() {
      return this.$store.state.invoice.details;
    },
    checked: {
      get() {
        return this.$store.state.invoice.shippingProduk;
      },
      set(value) {
        return this.$store.commit("invoice/setShippingProduk", value);
      },
    },
    customer: {
      get() {
        return this.$store.state.invoice.member;
      },
      set(value) {
        return this.$store.commit("invoice/setMember", value);
      },
    },
    alamatJasa: {
      get() {
        return this.$store.state.invoice.alamatJasa;
      },
      set(value) {
        return this.$store.commit("invoice/setAlamatJasa", value);
      },
    },
  },
};
</script>
