<template>
  <div class="card">
    <div class="card-body">
      <h5 class="fw-bold text-uppercase">Daftar User</h5>
      <div class="divider"></div>
      <div class="d-flex align-items-end">
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
              <!-- <th style="width: 10%">Aksi</th> -->
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
              <!-- <td>
                <div class="dropdown">
                  <button
                    class="btn btn-primary dropdown-toggle btn-sm"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style="font-size: 12px"
                  >
                    <i class="fa fa-align-left" aria-hidden="true"></i>
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="btn btn-primary btn-sm dropdown-item"
                        ><i class="fa fa-file-o me-2" aria-hidden="true"></i
                        >Edit</a
                      >
                    </li>
                    <li>
                      <a class="btn btn-primary btn-sm dropdown-item"
                        ><i class="fa fa-file-o me-2" aria-hidden="true"></i
                        >Hapus</a
                      >
                    </li>
                  </ul>
                </div>
              </td> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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
    this.$store.dispatch("daftarUser/showListUser");
  },
};
</script>
