<template>
  <div class="r-body">
    <div class="r-flex r-justify-content-between">
      <h5 class="r-underline">Faktur Sales Return</h5>
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
          No.Return :
          <span class="r-uppercase">{{ header.returnno }}</span>
        </p>
        <p style="margin-top: -18px">Tanggal : {{ header.tgl | formatDt2 }}</p>
      </div>
      <div class="r-header r-border-1">
        <p>
          No.Sales :
          <span class="r-uppercase">{{ header.receipt }}</span>
        </p>
        <p style="margin-top: -18px">
          Tanggal Sales : {{ header.tglsales | formatDt2 }}
        </p>
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
            <tr>
              <td>Sub Total</td>
              <td class="r-td2">
                {{ header && header.ttlsales ? header.ttlsales : 0 | Rupiah2 }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="r-footer r-flex r-justify-content-between mt-2">
      <div>
        <!-- <h5 class="r-underline r-uppercase r-12">pehatian :</h5> -->
        <!-- <ol>
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
        </ol> -->
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
      header: (state) => state.invoicePrint.invoice.header,
      member: (state) => state.invoicePrint.invoice.customer,
      details: (state) => state.invoicePrint.invoice.details,
    }),
  },
};
</script>
