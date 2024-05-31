<template>
  <div class="card">
    <div class="card-body">
      <h5 class="fw-500 text-uppercase">Daftar Hutang Member</h5>
      <div class="divider"></div>
      <div class="d-flex align-items-end">
        <div
          class="form-group me-1"
          v-show="$store.getters['piutang/filterOutlet']"
        >
          <label for="exampleFormControlInput1">Outlet</label>
          <input
            style="font-size: 13px"
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Outlet"
            v-model="searchDatas.outlet"
          />
        </div>
        <div class="form-group me-1">
          <label for="exampleFormControlInput30">Pencarian</label>
          <input
            style="font-size: 13px"
            type="text"
            class="form-control"
            id="exampleFormControlInput30"
            placeholder="No Hp / Member / Nama"
            v-model="searchDatas.search"
          />
        </div>
        <div class="form-group me-1">
          <label for="exampleFormControlInput30">Lihat</label>
          <select
            style="font-size: 13px"
            class="form-select"
            v-model="searchDatas.count"
            aria-label="Default select example"
          >
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="0">Semua</option>
          </select>
        </div>
        <button
          type="button"
          class="btn btn-primary btn-sm me-1"
          @click="$store.dispatch('piutang/showDatasPiutangMember')"
        >
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          class="btn btn-secondary btn-sm me-1"
          @click="$store.dispatch('piutang/resetSearchDatasMember')"
        >
          <i class="fa fa-refresh" aria-hidden="true"></i>
        </button>
      </div>
      <div class="table-responsive mt-2" style="height: 400px; font-size: 12px">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr class="text-center">
              <th style="width: 10%">No Member</th>
              <th style="width: 10%">No Handphone</th>
              <th style="width: 40%">Nama</th>
              <th style="width: 20%">Total Hutang</th>
              <th style="width: 10%">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(n, index) in datasPiutang" :key="index">
              <td>{{ n.memberno }}</td>
              <td>{{ n.nohp }}</td>
              <td>{{ n.name }}</td>
              <td>{{ n.creditlimit | Rupiah2 }}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#modalListHutangMember"
                  @click="$store.dispatch('piutang/showDetailTrxMember', n)"
                >
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <ListHutangMemberComponent />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      datasPiutang: (state) => state.piutang.datasPiutangMember,
    }),
    searchDatas: {
      get() {
        return this.$store.state.piutang.searchDatas;
      },
      set(value) {
        return this.$store.commit("piutang/setSearchDatas", value);
      },
    },
  },

  created() {
    this.$store.dispatch("piutang/resetSearchDatasMember");
  },
};
</script>
