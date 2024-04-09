import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";

import LoginView from "../views/Authentication/LoginView.vue";
import DashboardView from "../views/Dashboard/DashboardView.vue";
import InvoiceView from "../views/Invoice/InvoiceView.vue";
import SaldoPiutangView from "../views/Piutang/MemberPiutangView.vue";
import DaftarMemberPiutangView from "../views/Piutang/MemberDaftarPiutangViews.vue";
import InstallmentView from "../views/Installment/InstallmentView.vue";
import InstallmentTrxView from "../views/Installment/InstallmentTrxView.vue";
import Preview from "../views/Printing/Preview.vue";
import DataTransaksiReceipt from "../views/TransaksiReceipt/TransaksiReceiptView.vue";
import LaporanTransaksiView from "@/views/Laporan/LaporanTransaksi/LaporanTransaksiView.vue";
import LaporanPembayaranView from "@/views/Laporan/LaporanPembayaran/LaporanPembayaranView.vue";
import LaporanBarangView from "@/views/Laporan/LaporanBarang/LaporanBarangView.vue";
import LaporanSalesView from "@/views/Laporan/LaporanSalesPerson/LaporanSalesView";
import LaporanKasirView from "@/views/Laporan/LaporanKasir/LaporanKasirView";
import Logistik from "@/views/Logistik/LogistikView.vue";
import RegistrasiUserView from "@/views/Setup/RegistrasiUser/RegistrasiUserView.vue";
import DaftarUser from "@/views/Setup/DaftarUser/DaftarUserView.vue";
import RoleUserView from "@/views/Setup/RoleUser/RoleUserView.vue";

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
      {
        path: "/invoice",
        name: "invoice",
        component: InvoiceView,
      },
      {
        path: "/preview/:Receipt",
        name: "preview",
        component: Preview,
      },
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
      {
        path: "/data-transaksi-receipt",
        name: "data-transaksi-receipt",
        component: DataTransaksiReceipt,
      },
      {
        path: "/laporan-receipt",
        name: "laporan-receipt",
        component: LaporanTransaksiView,
      },
      {
        path: "/laporan-transaksi",
        name: "laporan-transaksi",
        component: LaporanPembayaranView,
      },
      {
        path: "/laporan-barang",
        name: "laporan-barang",
        component: LaporanBarangView,
      },
      {
        path: "/laporan-sales",
        name: "laporan-sales",
        component: LaporanSalesView,
      },
      {
        path: "/laporan-kasir",
        name: "laporan-kasir",
        component: LaporanKasirView,
      },
      {
        path: "/logistik",
        name: "logistik",
        component: Logistik,
      },
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
        path: "/role-user",
        name: "role-user",
        component: RoleUserView,
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
      return next({ path: "/laporan-barang" });
    } else if (level == 6) {
      return next({ path: "/logistik" });
    } else {
      return next({ path: "/data-transaksi-receipt" });
    }
  }
  next();
});

export default router;
