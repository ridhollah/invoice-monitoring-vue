<template>
  <div
    class="modal fade"
    id="modalTambahMember"
    tabindex="-1"
    aria-labelledby="modalTambahMemberLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            class="modal-title"
            id="modalTambahMemberLabel"
            style="font-size: 15px"
          >
            Tambahkan No Member #
            {{ $store.state.transaksiReceipt.searchMember.receipt }}
          </h5>
          <button
            class="btn btn-secondary btn-sm"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="close"
          >
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="exampleFormControlInput30">No Member / No Hp </label>
          </div>
          <div class="input-group">
            <input
              style="font-size: 12px"
              type="text"
              class="form-control"
              v-model="form.search"
            />
            <div class="input-group-append">
              <button
                @click="$store.dispatch('transaksiReceipt/showSearchMember')"
                type="button"
                class="btn btn-primary btn-sm"
                id="button-addon2"
              >
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div class="card mt-2">
            <div class="card-body">
              <div class="d-lg-flex">
                <label class="label font-monospace col-lg-3">Nama</label>
                <p class="fw-bold r-12">
                  : {{ datas && datas.Name ? datas.Name : "-" }}
                </p>
              </div>
              <div class="d-lg-flex">
                <label class="label font-monospace col-lg-3">Alamat</label>
                <p class="fw-bold r-12">
                  : {{ datas && datas.Address ? datas.Address : "-" }}
                </p>
              </div>
              <div class="d-lg-flex">
                <label class="label font-monospace col-lg-3">Handphone</label>
                <p class="fw-bold r-12">
                  : {{ datas && datas.HandPhone ? datas.HandPhone : "-" }}
                </p>
              </div>
              <div class="d-lg-flex">
                <label class="label font-monospace col-lg-3">No Member </label>
                <p class="fw-bold r-12">
                  : {{ datas && datas.Member_No ? datas.Member_No : "-" }}
                </p>
              </div>
              <div class="d-lg-flex">
                <label class="label font-monospace col-lg-3"
                  >Credit Limit</label
                >
                <p class="fw-bold r-12">
                  :
                  {{
                    datas && datas.Credit_Limit
                      ? datas.Credit_Limit
                      : "" | Rupiah
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary btn-sm"
            data-bs-dismiss="modal"
            @click="update"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    datas() {
      return this.$store.state.transaksiReceipt.member;
    },
    form: {
      get() {
        return this.$store.state.transaksiReceipt.searchMember;
      },
      set(value) {
        return this.$store.commit("transaksiReceipt/setSearchMember", value);
      },
    },
  },
  methods: {
    close() {
      this.$store.commit("transaksiReceipt/setSearchMember", {});
      this.$store.commit("transaksiReceipt/setMember", {});
    },
    update() {
      this.$store.dispatch("transaksiReceipt/saveMember");
      this.close();
    },
  },
};
</script>
