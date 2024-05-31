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
import laporanSuratJalan from "../views/LaporanSuratJalan/laporanSuratJalan";
import laporanSales from "@/views/LaporanSales/LaporanSales";
import laporanReturn from "@/views/LaporanReturn/LaporanReturn";
import laporanCicilan from "@/views/LaporanCicilan/LaporanCicilan";

// SETUP
import printLabelBarcode from "../views/Setup/PrintLabelBarcode/PrintLabelBarcode";

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
    laporanSuratJalan,
    laporanSales,
    laporanReturn,
    laporanCicilan,
    printLabelBarcode,
  },
});
