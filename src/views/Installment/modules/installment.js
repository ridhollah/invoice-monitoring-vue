import axios from "axios";
import router from "../../../router";
// import router from "@/router";
export default {
  namespaced: true,
  state: {
    form: {},
    trx: [],
    header: {},
    member: {},
    details: [],
    // TRANSAKSI TENDER TYPE
    tenderType: "",
    transaksi: {},
  },
  mutations: {
    setForm(state, value) {
      state.form = value;
    },
    setTrx(state, value) {
      state.trx = value;
    },
    setHeader(state, value) {
      state.header = value;
    },
    setMember(state, value) {
      state.member = value;
    },
    setDetails(state, value) {
      state.details = value;
    },
    setTransaksi(state, value) {
      state.transaksi = value;
    },
    setTenderType(state, value) {
      state.tenderType = value;
    },
    setBankPrefix(state, value) {
      state.transaksi.namecard = value.bankname;
    },
    resetTender(state) {
      state.transaksi = {};
      state.tenderType = "";
    },
    resetCancel(state) {
      state.header = {};
      state.member = {};
      state.details = [];
      state.tenderType = "01";
      state.transaksi = {};
    },
  },
  actions: {
    searchTrx({ commit, state, dispatch }) {
      commit("resetTender");
      commit("alert/setLoading", true, { root: true });
      axios
        .post("installment/installment-trx-search", state.form)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          // commit("alert/setAlertSuccess", res.data, { root: true });
          // dispatch("alert/removeAlertSuccess", 1, { root: true });
          commit("setTrx", res.data.data);
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
        });
    },
    showTrxDetail({ commit, dispatch }, payload) {
      let temp = {
        receipt: payload,
      };
      commit("alert/setLoading", true, { root: true });
      axios
        .post("installment/installment-trx-detail", temp)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          // commit("alert/setAlertSuccess", res.data, { root: true });
          // dispatch("alert/removeAlertSuccess", 1, { root: true });
          commit("setHeader", res.data.data.header);
          commit("setMember", res.data.data.member);
          commit("setDetails", res.data.data.details);
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
        });
    },
    saveTenderCash({ commit, state, dispatch }, payload) {
      let temp = {
        receipt: router.currentRoute.params.Receipt,
        tenderType: payload,
        transaksi: state.transaksi,
      };
      commit("alert/setLoading", true, { root: true });
      axios
        .post("installment/installment-trx-save-cash", temp)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertSuccess", res.data, { root: true });
          dispatch("alert/removeAlertSuccess", 1, { root: true });
          commit("resetTender");
          dispatch("showTrxDetail", router.currentRoute.params.Receipt);
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
        });
    },
    saveTenderDebit({ commit, state, dispatch }, payload) {
      let temp = {
        receipt: router.currentRoute.params.Receipt,
        tenderType: payload,
        transaksi: state.transaksi,
      };
      commit("alert/setLoading", true, { root: true });
      axios
        .post("installment/installment-trx-save-debit", temp)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertSuccess", res.data, { root: true });
          dispatch("alert/removeAlertSuccess", 1, { root: true });
          commit("resetTender");
          dispatch("showTrxDetail", router.currentRoute.params.Receipt);
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
        });
    },
    saveTenderCredit({ commit, state, dispatch }, payload) {
      let temp = {
        receipt: router.currentRoute.params.Receipt,
        tenderType: payload,
        transaksi: state.transaksi,
      };
      commit("alert/setLoading", true, { root: true });
      axios
        .post("installment/installment-trx-save-credit", temp)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertSuccess", res.data, { root: true });
          dispatch("alert/removeAlertSuccess", 1, { root: true });
          commit("resetTender");
          dispatch("showTrxDetail", router.currentRoute.params.Receipt);
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
        });
    },
    saveTenderVoucher({ commit, state, dispatch }, payload) {
      let temp = {
        receipt: router.currentRoute.params.Receipt,
        tenderType: payload,
        transaksi: state.transaksi,
      };
      commit("alert/setLoading", true, { root: true });
      axios
        .post("installment/installment-trx-save-voucher", temp)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertSuccess", res.data, { root: true });
          dispatch("alert/removeAlertSuccess", 1, { root: true });
          commit("resetTender");
          dispatch("showTrxDetail", router.currentRoute.params.Receipt);
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
        });
    },
    showBankPrefix({ commit, state }) {
      let temp = {
        bankprefix: state.transaksi.nocard,
      };
      axios
        .post("service/bankprefix", temp)
        .then((res) => {
          commit("setBankPrefix", res.data.data.bankname);
        })
        .catch(() => {
          commit("setBankPrefix", "");
        });
    },
    saveTrxInstallment({ commit, state, dispatch, rootState }) {
      commit("alert/setLoading", true, { root: true });
      let temp = {
        header: state.header,
        iduser: rootState.authentication.user.id,
      };
      axios
        .post("installment/installment-trx-save", temp)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertSuccess", res.data, { root: true });
          dispatch("alert/removeAlertSuccess", 1, { root: true });
          commit("resetTender");
          dispatch("showTrxDetail", router.currentRoute.params.Receipt);
          router.push({
            name: "preview",
            params: { Receipt: router.currentRoute.params.Receipt },
          });
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
        });
    },
    cancelTrx({ commit, dispatch }) {
      let temp = {
        receipt: router.currentRoute.params.Receipt,
      };
      commit("alert/setLoading", true, { root: true });
      axios
        .post("installment/installment-trx-delete-payment", temp)
        .then(() => {
          commit("alert/setLoading", false, { root: true });
          commit("resetCancel");
          dispatch("showTrxDetail");
        })
        .catch(() => {
          commit("alert/setLoading", false, { root: true });
        });
    },
    deleteTender({ commit, dispatch }, payload) {
      let id = {
        id: payload.id,
      };
      let temp = {
        receipt: router.currentRoute.params.Receipt,
      };
      commit("alert/setLoading", true, { root: true });
      axios
        .post("installment/installment-trx-delete-tender", id)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertSuccess", res.data, { root: true });
          dispatch("alert/removeAlertSuccess", 1, { root: true });
          dispatch("showTrxDetail", temp);
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
        });
    },
  },
  getters: {
    countTrx(state) {
      return state.trx.length > 0 ? state.trx.length : 0;
    },
    ttlsisa(state) {
      return state.header.ttlsisa && state.transaksi.bayar
        ? state.header.ttlsisa - state.transaksi.bayar
        : 0;
    },
  },
};
