<template>
  <div class="r-body">
    <div class="r-flex r-justify-content-between">
      <h5 class="r-underline r-uppercase">Surat Jalan</h5>
      <p class="r-12">
        Kasir By {{ $store.state.authentication.user.namalengkap }}
      </p>
    </div>
    <div style="margin-top: -5px" class="r-flex r-justify-content-between r-12">
      <div class="r-header r-border-1">
        <p class="r-uppercase">{{ header.receipt }}</p>
        <p class="r-uppercase" style="margin-top: -18px">
          {{ header.outlet_name }}
        </p>
        <p style="margin-top: -18px">
          No.Surat :
          <span class="r-uppercase">{{ shipping.noshipping }}</span>
        </p>
        <div style="display: flex; justify-content: space-between">
          <p style="margin-top: -18px">
            Tanggal : {{ header.tgl | formatDt2 }}
          </p>
          <p style="margin-top: -18px"></p>
        </div>
      </div>
      <div class="r-header r-border-1">
        <p>Kepada Yth,</p>
        <p class="r-uppercase" style="margin-top: -18px">
          {{ shipping.namalengkap }}
        </p>
        <p class="r-uppercase" style="margin-top: -18px">
          {{ shipping.address }}
        </p>
        <p style="margin-top: -18px">{{ shipping.nohp }}</p>
      </div>
    </div>
    <div class="r-m-10 r-barangs">
      <table>
        <thead>
          <tr class="head-barang-sj">
            <th colspan="2">Nama Barang</th>
            <th>Pcs</th>
            <th>Jam Berangkat</th>
            <th>Jam Selesai</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr class="body-barang-sj" v-for="(n, index) in details" :key="index">
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
            <td></td>
            <td></td>
            <td
              style="
                text-align: start !important;
                text-transform: uppercase;
                font-size: 11px;
              "
            >
              {{ n.desc }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      class="r-12 fw-bold text-center mt-3"
      style="display: flex; justify-content: space-around"
    >
      <div style="width: 200px">
        <p>Disetujui oleh</p>
        <div class="mt-5" style="display: flex; justify-content: space-between">
          <p class="r-underline">Warehouse</p>
          <p class="r-underline">Duty Manager</p>
        </div>
      </div>
      <div>
        <p>Diterima</p>
        <p class="mt-5 r-underline">Customer</p>
      </div>
      <div>
        <p>Diantar</p>
        <p class="mt-5 r-underline">Supir</p>
      </div>
      <div>
        <p>Installer</p>
        <p class="mt-5">( _________________ )</p>
      </div>
      <div>
        <p>Verifikasi</p>
        <p class="mt-5">( _________________ )</p>
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
      <div class="r-12"></div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      header: (state) => state.invoicePrint.header,
      details: (state) => state.invoicePrint.details,
      shipping: (state) => state.invoicePrint.shipping,
    }),
  },
};
</script>
