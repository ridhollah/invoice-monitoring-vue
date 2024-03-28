import Vue from "vue";
import Vuex from "vuex";

import alert from "./modules/alert";
import helper from "./modules/helper";
import sidebar from "./modules/sidebar";

import authentication from "../views/Authentication/modules/autentication";
import registrasiUser from "../views/Setup/RegistrasiUser/modules/RegistrasiUser";
import daftarUser from "../views/Setup/DaftarUser/modules/DaftarUser";
import invoice from "../views/Invoice/modules/invoice";
import installment from "../views/Installment/modules/installment";
import piutang from "../views/Piutang/modules/piutang";
import invoicePrint from "../views/Printing/modules/invoicePrint";
import suratJalan from "../views/SuratJalan/modules/SuratJalan";
import transaksiReceipt from "../views/TransaksiReceipt/modules/TransaksiReceipt";
import transaksicicilandp from "../views/TransaksiCicilanDp/modules/TransaksiCicilanDp";

import logistik from "../views/Logistik/modules/Logistik";

// LAPORAN
import laporanTransaksi from "../views/Laporan/LaporanTransaksi/modules/laporanTransaksi";
import laporanPembayaran from "../views/Laporan/LaporanPembayaran/modules/laporanPembayaran";
import laporanBarang from "../views/Laporan/LaporanBarang/modules/laporanBarang";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    alert,
    authentication,
    invoice,
    sidebar,
    piutang,
    installment,
    helper,
    transaksiReceipt,
    invoicePrint,
    laporanTransaksi,
    suratJalan,
    transaksicicilandp,
    logistik,
    laporanPembayaran,
    laporanBarang,
    registrasiUser,
    daftarUser,
  },
});
