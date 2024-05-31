<template>
  <div class="card">
    <div class="card-body">
      <h5 class="fw-500 text-uppercase">Daftar User</h5>
      <div class="divider"></div>
      <div class="d-flex align-items-end">
        <div
          class="form-group me-1"
          v-show="$store.getters['daftarUser/filterOutlet']"
        >
          <label for="exampleFormControlInput1">Outlet</label>
          <input
            style="font-size: 13px"
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Outlet"
            v-model="search.outlet"
          />
        </div>
        <div class="form-group me-1">
          <label for="exampleFormControlInput30">Pencarian</label>
          <input
            style="font-size: 13px"
            type="text"
            class="form-control"
            id="exampleFormControlInput30"
            placeholder="Nama"
            v-model="search.search"
          />
        </div>
        <button
          type="button"
          class="btn btn-primary btn-sm me-1"
          @click="$store.dispatch('daftarUser/showListUser')"
        >
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          class="btn btn-secondary btn-sm me-1"
          @click="$store.dispatch('daftarUser/resetSearch')"
        >
          <i class="fa fa-refresh" aria-hidden="true"></i>
        </button>
      </div>
      <div class="table-responsive mt-2" style="height: 450px; font-size: 12px">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr class="text-center">
              <th style="width: 5%">Outlet</th>
              <th style="width: 15%">Nama Lengkap</th>
              <th style="width: 20%">Level</th>
              <th style="width: 10%">Username</th>
              <th style="width: 10%">Password</th>
              <th style="width: 10%">Status Aktif</th>
              <!-- <th style="width: 10%">Status Login</th> -->
              <!-- <th style="width: 10%">Tanggal Login</th> -->
              <!-- <th style="width: 10%">Tanggal Logout</th> -->
              <!-- <th style="width: 10%">IP</th> -->
              <th style="width: 5%">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(n, index) in datas" :key="index">
              <td class="text-center">{{ n.outlet }}</td>
              <td>{{ n.namalengkap }}</td>
              <td>{{ n.namalevel }}</td>
              <td>{{ n.username }}</td>
              <td class="text-center">*******</td>
              <td class="text-center">{{ n.statusaktif }}</td>
              <!-- <td class="text-center">{{ n.statuslogin }}</td> -->
              <!-- <td>{{ n.lastlogin | formatDt4 }}</td> -->
              <!-- <td>{{ n.lastlogout | formatDt4 }}</td> -->
              <!-- <td>{{ n.ip }}</td> -->
              <td class="text-center">
                <button
                  class="btn btn-primary btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#daftarUserUpdateModal"
                  @click="$store.dispatch('daftarUser/showDetailUser', n)"
                  v-show="$store.getters['daftarUser/filterEdit']"
                >
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <DaftarUserUpdateComponent />
  </div>
</template>
<script>
export default {
  computed: {
    datas() {
      return this.$store.state.daftarUser.datas;
    },
    search: {
      get() {
        return this.$store.state.daftarUser.search;
      },
      set(value) {
        return this.$store.commit("daftarUser/setSearch", value);
      },
    },
  },
  created() {
    this.$store.dispatch("daftarUser/resetSearch");
  },
};
</script>
