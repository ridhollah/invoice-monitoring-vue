import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";

import LoginView from "../views/Authentication/LoginView.vue";
import DashboardView from "../views/Dashboard/DashboardView.vue";
import InvoiceView from "../views/Invoice/InvoiceView.vue";
import InvoiceReturnView from "../views/InvoiceReturn/InvoiceReturnView.vue";
import SaldoPiutangView from "../views/Piutang/MemberPiutangView.vue";
import DaftarMemberPiutangView from "../views/Piutang/MemberDaftarPiutangViews.vue";
import InstallmentView from "../views/Installment/InstallmentView.vue";
import InstallmentTrxView from "../views/Installment/InstallmentTrxView.vue";
import Preview from "../views/Printing/Preview.vue";
import DataTransaksiReceipt from "../views/TransaksiReceipt/TransaksiReceiptView.vue";
import Logistik from "@/views/Logistik/LogistikView.vue";
import RegistrasiUserView from "@/views/Setup/RegistrasiUser/RegistrasiUserView.vue";
import DaftarUser from "@/views/Setup/DaftarUser/DaftarUserView.vue";
import PreviewReturn from "@/views/Printing/PreviewReturn.vue";
import TransaksiReturnView from "@/views/TransaksiReturn/TransaksiReturnView.vue";
// LAPORAN =======================
import LaporanSalesByProdukView from "@/views/LaporanSales/LaporanSalesByProdukView.vue";
import LaporanSalesByPamentView from "@/views/LaporanSales/LaporanSalesByPamentView.vue";
import LaporanSalesByPersonView from "@/views/LaporanSales/LaporanSalesByPersonView.vue";
import LaporanSalesKasirView from "@/views/LaporanSales/LaporanSalesKasirView.vue";
import LaporanSuratJalanView from "@/views/LaporanSuratJalan/LaporanSuratJalanView.vue";
import LaporanSalesByMarchineView from "@/views/LaporanSales/LaporanSalesByMarchineView.vue";
import LaporanReturnByProdukView from "@/views/LaporanReturn/LaporanReturnByProdukView.vue";
import LaporanReturnByPaymentView from "@/views/LaporanReturn/LaporanReturnByPaymentView.vue";
import LaporanCicilanByPaymentView from "@/views/LaporanCicilan/LaporanCicilanByPaymentView.vue";
import LaporanSalesCashCountView from "@/views/LaporanSales/LaporanSalesCashCountView.vue";
import PrintLabelBarcodeView from "@/views/Setup/PrintLabelBarcode/PrintLabelBarcodeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      guest: true,
    },
  },

  {
    path: "",
    name: "index",
    component: () => import("../views/indexView.vue"),
    meta: {
      auth: true,
    },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: DashboardView,
      },
      // BUAT INVOICE ====================
      {
        path: "/invoice-sales",
        name: "invoice",
        component: InvoiceView,
      },
      {
        path: "/invoice-return",
        name: "invoiceReturn",
        component: InvoiceReturnView,
      },
      // PREVIEW PRINT =================
      {
        path: "/preview/:Receipt",
        name: "preview",
        component: Preview,
      },
      {
        path: "/preview-return/:Receipt",
        name: "preview-return",
        component: PreviewReturn,
      },
      // MEMBER PIUTANG =======================
      {
        path: "/member-piutang",
        name: "member-piutang",
        component: SaldoPiutangView,
      },
      {
        path: "/daftar-member-piutang",
        name: "daftar-member-piutang",
        component: DaftarMemberPiutangView,
      },
      // TRANSAKSI PEMBAYRAN CICILAN ===================
      {
        path: "/cicilan",
        name: "cicilan",
        component: InstallmentView,
      },
      {
        path: "/cicilan-transaksi/:Receipt",
        name: "cicilan-transaksi",
        component: InstallmentTrxView,
      },
      // DOKUMEN =========================
      {
        path: "/data-transaksi-receipt",
        name: "data-transaksi-receipt",
        component: DataTransaksiReceipt,
      },
      {
        path: "/data-transaksi-return",
        name: "data-transaksi-return",
        component: TransaksiReturnView,
      },
      // SETUP =====================
      {
        path: "/registrasi-user",
        name: "registrasi-user",
        component: RegistrasiUserView,
      },
      {
        path: "/daftar-user",
        name: "daftar-user",
        component: DaftarUser,
      },
      {
        path: "/print-label-barcode",
        name: "print-label-barcode",
        component: PrintLabelBarcodeView,
      },
      // LAPORAN SALES =================
      {
        path: "/laporan-sales-by-produk",
        name: "laporan-sales-by-produk",
        component: LaporanSalesByProdukView,
      },
      {
        path: "/laporan-sales-by-kasir",
        name: "laporan-sales-by-kasir",
        component: LaporanSalesKasirView,
      },
      {
        path: "/laporan-sales-by-payment",
        name: "laporan-sales-by-payment",
        component: LaporanSalesByPamentView,
      },
      {
        path: "/laporan-sales-by-person",
        name: "laporan-sales-by-person",
        component: LaporanSalesByPersonView,
      },
      {
        path: "/laporan-cash-count",
        name: "laporan-cash-count",
        component: LaporanSalesCashCountView,
      },
      {
        path: "/laporan-sales-by-marchine",
        name: "laporan-sales-by-marchine",
        component: LaporanSalesByMarchineView,
      },
      // LAPORAN SURAT JALAN ============
      {
        path: "/laporan-surat-jalan",
        name: "laporan-surat-jalan",
        component: LaporanSuratJalanView,
      },
      {
        path: "/logistik",
        name: "logistik",
        component: Logistik,
      },
      // LAPORAN RETURN =======================
      {
        path: "/laporan-return-by-produk",
        name: "laporan-return-by-produk",
        component: LaporanReturnByProdukView,
      },
      {
        path: "/laporan-return-by-payment",
        name: "laporan-return-by-payment",
        component: LaporanReturnByPaymentView,
      },
      // LAPORAN CICILAN ====================
      {
        path: "/laporan-cicilan-by-payment",
        name: "laporan-cicilan-by-payment",
        component: LaporanCicilanByPaymentView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.state.authentication.isLoggedIn;
  const level = store.state.authentication.user.level;
  const isGuest = to.matched.some((record) => record.meta.guest);
  const isAuth = to.matched.some((record) => record.meta.auth);

  if (isAuth && !isLoggedIn) {
    return next({ path: "/login" });
  } else if (isGuest && isLoggedIn) {
    if (level == 5) {
      return next({ path: "/laporan-sales-by-produk" });
    } else if (level == 6) {
      return next({ path: "/logistik" });
    } else {
      return next({ path: "/data-transaksi-receipt" });
    }
  }
  next();
});

export default router;
