<template>
  <div class="card" style="font-size: 13px">
    <div class="card-body">
      <table class="table table-hover">
        <thead>
          <tr>
            <th style="width: 50%" colspan="2">Payment Return</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
            <td>Sub Total</td>
            <td>{{ header.TtlSales ? header.TtlSales : "" | Rupiah }}</td>
          </tr> -->
          <tr v-if="header.DiscAmtFr && header.DiscAmtFr > 0">
            <td>Diskon Khusus</td>
            <td>{{ header.DiscAmtFr ? header.DiscAmtFr : "" | Rupiah }}</td>
          </tr>
          <!-- <tr v-if="header.TtlDisc && header.TtlDisc > 0">
            <td>Diskon Khusus</td>
            <td>{{ header.TtlDisc ? header.TtlDisc : "" | Rupiah }}</td>
          </tr> -->
          <!-- <tr v-if="header.biayakirim && header.biayakirim > 0">
            <td>Biaya Pengiriman</td>
            <td>{{ header.biayakirim ? header.biayakirim : "" | Rupiah }}</td>
          </tr> -->
          <!-- <tr v-if="header.biayapasang && header.biayapasang > 0">
            <td>Biaya Pemasangan</td>
            <td>{{ header.biayapasang ? header.biayapasang : "" | Rupiah }}</td>
          </tr> -->
          <!-- <tr v-if="header.biayadivan && header.biayadivan > 0">
            <td>Biaya Divan Belah</td>
            <td>{{ header.biayadivan ? header.biayadivan : "" | Rupiah }}</td>
          </tr> -->
          <!-- <tr v-if="header.biayaother && header.biayaother > 0">
            <td>Biaya Lain - Lain</td>
            <td>{{ header.biayaother ? header.biayaother : "" | Rupiah }}</td>
          </tr> -->
          <tr>
            <td>Total Return</td>
            <td>
              {{ header.TtlSales ? header.TtlSales : "" | Rupiah }}
            </td>
          </tr>
          <!-- <tr v-if="header.ttlbayar && header.ttlbayar > 0">
            <td>Pembayaran</td>
            <td>{{ header.ttlbayar ? header.ttlbayar : "" | Rupiah }}</td>
          </tr> -->
          <!-- <tr v-if="header.ttlsisa && header.ttlsisa > 0">
            <td>Sisa Pembayaran</td>
            <td>{{ header.ttlsisa ? header.ttlsisa : "" | Rupiah }}</td>
          </tr> -->
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
      header: (state) => state.invoiceReturn.header,
    }),
  },
};
</script>
