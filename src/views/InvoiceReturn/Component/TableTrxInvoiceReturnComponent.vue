<template>
  <div>
    <div class="table-responsive" style="height: 300px; font-size: 12px">
      <table class="table table-hover table-striped table-bordered table-sm">
        <thead>
          <tr class="text-center">
            <th style="width: 50%" colspan="2">Nama Barang</th>
            <th style="width: 5%">Pcs</th>
            <th style="width: 15%">Harga</th>
            <th style="width: 10%">Disc</th>
            <th style="width: 15%">Penjualan</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(n, index) in details" :key="index">
            <td class="text-end">{{ n.Internal }}</td>
            <td>
              {{ n.Descript }}
              <input
                style="font-size: 13px"
                type="text"
                class="form-control"
                id="exampleFormControlInput36"
                v-model="n.note"
              />
            </td>
            <td class="text-end">{{ n.Quantity }}</td>
            <td class="text-end">{{ n.UnitPrice | Rupiah }}</td>
            <td class="text-end">{{ n.TtlDisc | Rupiah }}</td>
            <td class="text-end">{{ n.NetSales | Rupiah }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      details: (state) => state.invoiceReturn.details,
    }),
  },
};
</script>
