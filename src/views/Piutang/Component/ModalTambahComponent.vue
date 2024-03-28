<template>
  <div
    class="modal fade"
    id="exampleModalToggle2"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel2"
    tabindex="-1"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered" style="max-width: 90%">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalToggleLabel2">
            Tambahkan data Transaksi
          </h5>
          <button
            class="btn btn-secondary btn-sm"
            data-bs-dismiss="modal"
            aria-label="Close"
            data-bs-target="#modalTambahPiutang"
            data-bs-toggle="modal"
            @click="$store.commit('piutang/setResetNewTrx')"
          >
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="card">
            <div class="card-body">
              <div
                class="table-responsive mt-2"
                style="height: 350px; font-size: 12px"
              >
                <table class="table table-hover table-bordered table-striped">
                  <thead>
                    <tr>
                      <th style="width: 10%">Tgl Transaksi</th>
                      <th style="width: 10%">No Transaksi</th>
                      <th style="width: 10%">No Surat Jalan</th>
                      <th style="width: 10%">Jumlah Transaksi</th>
                      <th style="width: 10%">Jumlah bayar</th>
                      <th style="width: 10%">Sisa bayar</th>
                      <th style="width: 10%">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(n, index) in newTrx" :key="index">
                      <td>
                        <input
                          style="font-size: 13px"
                          type="date"
                          class="form-control"
                          id="exampleFormControlInput31"
                          v-model="n.tgl"
                        />
                      </td>
                      <td>
                        <input
                          style="font-size: 13px"
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput32"
                          v-model="n.receipt"
                        />
                      </td>
                      <td>
                        <input
                          style="font-size: 13px"
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput33"
                          v-model="n.noshipping"
                        />
                      </td>
                      <td>
                        <input
                          style="font-size: 13px"
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput34"
                          v-model="n.ttlsales"
                        />
                      </td>
                      <td>
                        <input
                          style="font-size: 13px"
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput35"
                          v-model="n.ttlbayar"
                        />
                      </td>
                      <td>
                        <input
                          style="font-size: 13px"
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput36"
                          :value="n.ttlsales - n.ttlbayar"
                        />
                      </td>
                      <td>
                        <button
                          class="btn btn-primary btn-sm me-2"
                          @click="$store.commit('piutang/addComponent')"
                        >
                          <i class="fa fa-plus" aria-hidden="true"></i>
                        </button>
                        <button
                          class="btn btn-danger btn-sm"
                          @click="$store.commit('piutang/removeComponent')"
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
            class="btn btn-secondary btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#modalTambahPiutang"
            data-bs-dismiss="modal"
            @click="$store.commit('piutang/setResetNewTrx')"
          >
            Batal
          </button>
          <button
            class="btn btn-primary btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#modalTambahPiutang"
            data-bs-dismiss="modal"
            @click="$store.dispatch('piutang/addTrx')"
          >
            Tambahkan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 1,
    };
  },
  computed: {
    newTrx() {
      return this.$store.state.piutang.newTrxMember;
    },
  },
  methods: {
    // value1(value) {
    //   var Input34 = document.getElementById("exampleFormControlInput34");
    //   var number_string = value.replace(/[^,\d]/g, "").toString(),
    //     split = number_string.split(","),
    //     sisa = split[0].length % 3,
    //     rupiah = split[0].substr(0, sisa),
    //     ribuan = split[0].substr(sisa).match(/\d{3}/gi);
    //   if (ribuan) {
    //     var separator = sisa ? "." : "";
    //     rupiah += separator + ribuan.join(".");
    //   }
    //   rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
    //   Input34.value = rupiah;
    // },
    // value2(value) {
    //   var Input35 = document.getElementById("exampleFormControlInput35");
    //   var number_string = value.replace(/[^,\d]/g, "").toString(),
    //     split = number_string.split(","),
    //     sisa = split[0].length % 3,
    //     rupiah = split[0].substr(0, sisa),
    //     ribuan = split[0].substr(sisa).match(/\d{3}/gi);
    //   if (ribuan) {
    //     var separator = sisa ? "." : "";
    //     rupiah += separator + ribuan.join(".");
    //   }
    //   rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
    //   Input35.value = rupiah;
    // },
  },
};
</script>
