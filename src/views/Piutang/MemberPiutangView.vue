<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h5 class="fw-500 text-uppercase">Tambah Hutang Member</h5>
        <div class="divider"></div>
        <div class="d-flex align-items-end">
          <div class="form-group me-1">
            <label for="exampleFormControlInput30">Pencarian</label>
            <input
              style="font-size: 13px"
              type="text"
              class="form-control"
              id="exampleFormControlInput30"
              placeholder="No Hp / Member / Nama"
              v-model="search.search"
              @keydown.enter="$store.dispatch('piutang/searchMember')"
            />
          </div>
          <button
            type="button"
            class="btn btn-primary btn-sm me-1"
            @click="$store.dispatch('piutang/searchMember')"
          >
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
          <!-- <button type="button" class="btn btn-secondary btn-sm me-1">
            <i class="fa fa-refresh" aria-hidden="true"></i>
          </button> -->
        </div>
        <div
          class="table-responsive mt-2"
          style="height: 350px; font-size: 12px"
        >
          <table class="table table-hover table-bordered table-striped">
            <thead>
              <tr>
                <th style="width: 5%">No</th>
                <th style="width: 25%">Nama Member</th>
                <th style="width: 10%">No Member</th>
                <th style="width: 10%">No Hp</th>
                <th style="width: 25%">Alamat</th>
                <th style="width: 10%">Aksi</th>
              </tr>
            </thead>
            <tbody v-if="$store.getters['piutang/countMembers'] >= 1">
              <tr v-for="(n, index) in members" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ n.Name }}</td>
                <td>{{ n.Member_No }}</td>
                <td>{{ n.HandPhone }}</td>
                <td>
                  {{ n.Address == "-" ? "" : n.Address + "," }}
                  {{ n.City }}
                </td>
                <td>
                  <button
                    @click="
                      $store.commit('piutang/setSearchDetailMember', n),
                        $store.dispatch('piutang/searchDetailMember')
                    "
                    type="button"
                    class="btn btn-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#modalTambahPiutang"
                  >
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody v-if="$store.getters['piutang/countMembers'] < 1">
              <tr>
                <td colspan="6" class="text-center text-uppercase">
                  Tidak ada data
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <DetailMemberPiutangComponent />
    <ModalTambahComponent />
    <ModalDeleteComponent />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      members: (state) => state.piutang.members,
    }),
    search: {
      get() {
        return this.$store.state.piutang.search;
      },
      set(value) {
        return this.$store.commit("setSearch", value);
      },
    },
  },
  created() {
    this.$store.commit("piutang/reset");
  },
};
</script>
