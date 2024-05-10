import Vue from "vue";
import Vuex from "vuex";

import alert from "./modules/alert";
import helper from "./modules/helper";
import sidebar from "./modules/sidebar";

// AUTHEMTICATION
import authentication from "../views/Authentication/modules/autentication";
import registrasiUser from "../views/Setup/RegistrasiUser/modules/RegistrasiUser";
import daftarUser from "../views/Setup/DaftarUser/modules/DaftarUser";
import roleUser from "../views/Setup/RoleUser/modules/RoleUser";

// BUAT INVOICE DAN TRX CICILAN
import invoice from "../views/Invoice/modules/invoice";
import invoiceReturn from "../views/InvoiceReturn/modules/invoiceReturn";
import installment from "../views/Installment/modules/installment";

// DOKUMEN
import transaksiReceipt from "../views/TransaksiReceipt/modules/TransaksiReceipt";
import transaksiReturn from "../views/TransaksiReturn/modules/TransaksiReturn";

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
import laporanSuratJalan from "../views/Laporan/LaporanSuratJalan/modules/laporanSuratJalan";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    alert,
    sidebar,
    helper,
    authentication,
    invoice,
    invoiceReturn,
    piutang,
    installment,
    transaksiReceipt,
    transaksiReturn,
    invoicePrint,
    logistik,
    registrasiUser,
    daftarUser,
    laporanBarang,
    laporanTransaksi,
    laporanPembayaran,
    laporanSales,
    laporanSuratJalan,
    roleUser,
  },
});
