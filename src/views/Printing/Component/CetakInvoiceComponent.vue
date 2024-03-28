<template>
  <div class="r-body">
    <div class="r-flex r-justify-content-between">
      <h5 class="r-underline">
        {{ header.ttlsisa == 0 ? "Faktur Penjualan" : "Bon Reserved" }}
      </h5>
      <p class="r-12">
        Print By {{ $store.state.authentication.user.namalengkap }}
      </p>
    </div>
    <div style="margin-top: -5px" class="r-flex r-justify-content-between r-12">
      <div class="r-header r-border-1">
        <p class="r-uppercase">{{ header.outlet }}</p>
        <p class="r-uppercase" style="margin-top: -18px">
          {{ header.outlet_name }}
        </p>
        <p style="margin-top: -18px">
          No.Faktur :
          <span class="r-uppercase">{{ header.receipt }}</span>
        </p>
        <p style="margin-top: -18px">Tanggal : {{ header.tgl | formatDt2 }}</p>
      </div>
      <div class="r-header r-border-1">
        <p>Kepada Yth,</p>
        <p class="r-uppercase" style="margin-top: -18px">
          {{ member.Name }}
        </p>
        <p class="r-uppercase" style="margin-top: -18px">
          {{ member.Address }}
        </p>
        <p style="margin-top: -18px">{{ member.HandPhone }}</p>
      </div>
    </div>
    <div class="r-m-10 r-barangs">
      <table>
        <thead>
          <tr class="head-barang">
            <th colspan="2">Nama Barang</th>
            <th>Pcs</th>
            <th>Harga</th>
            <th>Disc</th>
            <th>Jumlah Penjualan</th>
          </tr>
        </thead>
        <tbody>
          <tr class="body-barang" v-for="(n, index) in details" :key="index">
            <td>{{ n.Internal }}</td>
            <td>
              <p style="margin: 0 !important">{{ n.Descript }}</p>
              <p
                v-if="n.note"
                style="margin: 0 !important; border-top: 1px solid #8a8a8a"
              >
                {{ n.note }}
              </p>
            </td>
            <td>{{ n.Quantity | Rupiah2 }}</td>
            <td>{{ n.UnitPrice | Rupiah2 }}</td>
            <td>{{ n.TtlDisc | Rupiah2 }}</td>
            <td>{{ n.NetSales | Rupiah2 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="r-body-payment r-flex r-justify-content-between">
      <div>
        <!-- <p>Nomor Reserved : j049711</p> -->
        <!-- <p>Sales : 10 Rixi</p> -->
        <!-- <p>INHOUSE PROMO - Reprint</p> -->
      </div>
      <div>
        <table>
          <tbody>
            <!-- <tr>
              <td class="r-td1">Sub Total</td>
              <td class="r-td2">{{ header.ttlprice | Rupiah2 }}</td>
            </tr> -->
            <tr v-show="header.ttldisc && header.ttldisc > 0">
              <td>Nilai Diskon Khusus</td>
              <td class="r-td2">{{ header.ttldisc | Rupiah2 }}</td>
            </tr>
            <tr v-show="header.ttldeliv && header.ttldeliv > 0">
              <td>Biaya Pengiriman</td>
              <td class="r-td2">{{ header.ttldeliv | Rupiah2 }}</td>
            </tr>
            <tr v-show="header.ttlinstall && header.ttlinstall > 0">
              <td>Biaya Pemasangan</td>
              <td class="r-td2">{{ header.ttlinstall | Rupiah2 }}</td>
            </tr>
            <tr>
              <td>Total Transaksi</td>
              <td class="r-td2">{{ header.ttlsales | Rupiah2 }}</td>
            </tr>
            <tr v-show="payment.term1 && payment.term1 > 0">
              <td>Pembayaran I</td>
              <td class="r-td2">{{ payment.term1 | Rupiah2 }}</td>
            </tr>
            <tr v-show="payment.term2 && payment.term2 > 0">
              <td>Pembayaran II</td>
              <td class="r-td2">{{ payment.term2 | Rupiah2 }}</td>
            </tr>
            <tr v-show="payment.term3 && payment.term3 > 0">
              <td>Pembayaran III</td>
              <td class="r-td2">{{ payment.term3 | Rupiah2 }}</td>
            </tr>
            <tr v-show="payment.term4 && payment.term4 > 0">
              <td>Pembayaran IV</td>
              <td class="r-td2">{{ payment.term4 | Rupiah2 }}</td>
            </tr>
            <tr v-show="payment.term5 && payment.term5 > 0">
              <td>Pembayaran V</td>
              <td class="r-td2">{{ payment.term5 | Rupiah2 }}</td>
            </tr>
            <tr v-show="payment.ttlsisa && payment.ttlsisa > 0">
              <td>Sisa Pembayaran</td>
              <td class="r-td2">{{ payment.ttlsisa | Rupiah2 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="r-footer r-flex r-justify-content-between mt-2">
      <div>
        <h5 class="r-underline r-uppercase r-12">pehatian :</h5>
        <ol>
          <li>Barang yang sudah dibeli, tidak bisa ditukar / dikembalikan</li>
          <li>
            Barang yang sudah dibeli dan tidak diambil dalam jangka waktu 1
            bulan setelah pembelian, maka barang dianggap batal & DP atau
            pelunasan tidak akan dikembalikan
          </li>
          <li>
            Apabila barang diantar melalui via pengangkutan maka kerusakan tidak
            ditanggung oleh perusahaan (toko)
          </li>
        </ol>
      </div>
      <div class="r-12">
        <p>Disetujui oleh</p>
        <p>( ___________________ )</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      header: (state) => state.invoicePrint.header,
      payment: (state) => state.invoicePrint.payment,
      member: (state) => state.invoicePrint.member,
      details: (state) => state.invoicePrint.details,
    }),
  },
};
</script>
