<template>
  <div class="card">
    <div class="card-body">
      <h5 class="fw-500 text-uppercase">Print Label Barcode</h5>
      <div class="divider"></div>
      <div class="d-flex align-items-end justify-content-between">
        <div class="d-flex align-items-end">
          <div class="form-group me-1">
            <label for="exampleFormControlInput30">Value</label>
            <input
              style="font-size: 13px"
              type="text"
              class="form-control"
              id="exampleFormControlInput30"
            />
          </div>
          <div class="form-group me-1">
            <label for="exampleFormControlInput30">Pilih Locator</label>
            <select
              style="font-size: 13px"
              class="form-select"
              aria-label="Default select example"
            >
              <option value="99">--- KONSENSI ---</option>
              <option value="1">7001 - D</option>
              <option value="1">7001 - G</option>
              <option value="1">7001 - S</option>
              <option value="1">7001 - R</option>
              <option value="1">7001 - PB</option>
              <option value="1">7001 - RPR</option>
              <option value="1">7001 - W</option>
            </select>
          </div>
        </div>
        <div class="text-end">
          <button type="button" class="btn btn-secondary btn-sm">
            <i class="fa fa-file-o icon" aria-hidden="true"></i>
            Print
          </button>
        </div>
      </div>
      <div class="table-responsive mt-2" style="height: 400px; font-size: 12px">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr class="text-center">
              <th style="width: 5%">No</th>
              <th style="width: 5%">Outlet</th>
              <th style="width: 10%">Value</th>
              <th style="width: 15%">Product</th>
              <th style="width: 12%">Price</th>
              <th style="width: 12%">Size</th>
              <th style="width: 5%">UOM Sales</th>
              <th style="width: 15%">Retail Price Version Valid From</th>
              <th style="width: 1%">Exp Date Promo</th>
              <th style="width: 5%">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(n, index) in datas" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ n.outlet }}</td>
              <td>{{ n.value }}</td>
              <td>{{ n.product }}</td>
              <td>{{ n.price | Rupiah2 }}</td>
              <td>{{ n.size }}</td>
              <td>{{ n.uom }}</td>
              <td>{{ n.retailprice | Rupiah2 }}</td>
              <td>{{ n.expdate | formatDt3 }}</td>
              <td class="text-center">
                <button
                  type="button"
                  class="btn btn-danger btn-sm"
                  @click="$store.dispatch('printLabelBarcode/remove', index)"
                >
                  <i class="fa fa-times" aria-hidden="true"></i>
                </button>
              </td>
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
      return this.$store.state.printLabelBarcode.datas;
    },
  },
  // methods: {
  //   remove(index) {
  //     console.log(index);
  //     this.$store.state.printLabelBarcode.datas.slice(index, 1);
  //   },
  // },
};
</script>
