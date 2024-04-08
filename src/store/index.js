import Vue from "vue";
import Vuex from "vuex";

import alert from "./modules/alert";
import helper from "./modules/helper";
import sidebar from "./modules/sidebar";

// AUTHEMTICATION
import authentication from "../views/Authentication/modules/autentication";
import registrasiUser from "../views/Setup/RegistrasiUser/modules/RegistrasiUser";
import daftarUser from "../views/Setup/DaftarUser/modules/DaftarUser";

// BUAT INVOICE DAN TRX CICILAN
import invoice from "../views/Invoice/modules/invoice";
import installment from "../views/Installment/modules/installment";

// DOKUMEN
import transaksiReceipt from "../views/TransaksiReceipt/modules/TransaksiReceipt";

// PIUTANG MEMBER
import piutang from "../views/Piutang/modules/piutang";
import invoicePrint from "../views/Printing/modules/invoicePrint";

// LOGISTIK
import logistik from "../views/Logistik/modules/Logistik";

// LAPORAN
import laporanTransaksi from "../views/Laporan/LaporanTransaksi/modules/laporanTransaksi";
import laporanPembayaran from "../views/Laporan/LaporanPembayaran/modules/laporanPembayaran";
import laporanBarang from "../views/Laporan/LaporanBarang/modules/laporanBarang";
import laporanSales from "../views/Laporan/LaporanSalesPerson/modules/laporanSales";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    alert,
    sidebar,
    helper,
    authentication,
    invoice,
    piutang,
    installment,
    transaksiReceipt,
    invoicePrint,
    logistik,
    registrasiUser,
    daftarUser,
    laporanBarang,
    laporanTransaksi,
    laporanPembayaran,
    laporanSales,
  },
});
