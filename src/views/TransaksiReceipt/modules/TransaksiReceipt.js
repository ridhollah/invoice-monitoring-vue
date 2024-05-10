import axios from "axios";

export default {
  namespaced: true,
  state: {
    search: {
      count: 0,
      status: 99,
      outlet: "",
    },
    datas: [],
    ttltrx: 0,
    ttlreceipt: 0,
    details: {
      header: {},
      member: {},
      barang: [],
      payment: [],
      price: {},
      shipping: {},
    },
    alasan: "",
    updateShipping: {},
    updateCustomer: {},
    level: 0,
    testLevel: [1, 2],
  },
  mutations: {
    setLevel(state, value) {
      state.level = value;
    },
    setSearch(state, value) {
      state.search = value;
    },
    setDatas(state, value) {
      state.datas = value.data.data;
      state.ttltrx = value.data.ttltransaksi;
      state.ttlreceipt = value.data.ttlreceipt;
    },
    setDetails(state, value) {
      state.details.header = value.header;
      state.details.member = value.member;
      state.details.barang = value.details;
      state.details.payment = value.payment;
      state.details.price = value.price;
      state.details.shipping = value.shipping;
    },
    setUpdateShipping(state, value) {
      state.updateShipping = value;
    },
    setupdateCustomer(state, value) {
      state.updateCustomer = value;
    },
    resetUpdate(state) {
      state.updateCustomer = {};
      state.updateShipping = {};
    },
  },
  actions: {
    resetSearchReceipt({ state, dispatch, rootState }) {
      state.search = {
        count: 0,
        status: 99,
        outlet: rootState.authentication.user.outlet,
      };
      dispatch("showReceipt");
    },
    showReceipt({ commit, state, dispatch }) {
      commit("alert/setLoading", true, { root: true });
      axios
        .post("transaksi/transaksi-data-receipt", state.search)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("setDatas", res.data);
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
        });
    },
    showReceiptDetail({ commit }, payload) {
      payload = {
        receipt: payload,
      };
      commit("alert/setLoading", true, { root: true });
      axios
        .post("transaksi/transaksi-data-receipt-detail", payload)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("setDetails", res.data.data);
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("setDetails", err.response.data.data);
        });
    },
    disUpdateShipping({ commit, state, rootState, dispatch }) {
      let temp = {
        receipt: state.details.header.receipt,
        form: state.updateShipping,
        iduser: rootState.authentication.user.id,
      };
      commit("alert/setLoading", true, { root: true });
      axios
        .post("shipping/update", temp)
        .then(() => {
          commit("alert/setLoading", false, { root: true });
          dispatch("showReceiptDetail", state.details.header);
        })
        .catch(() => {
          commit("alert/setLoading", false, { root: true });
        });
    },
    disUpdateCustomer({ commit, state, rootState, dispatch }) {
      let temp = {
        receipt: state.details.header.receipt,
        form: state.updateCustomer,
        iduser: rootState.authentication.user.id,
      };
      commit("alert/setLoading", true, { root: true });
      axios
        .post("transaksiReceipt/update-customer", temp)
        .then(() => {
          commit("alert/setLoading", false, { root: true });
          dispatch("showReceiptDetail", state.details.header);
        })
        .catch(() => {
          commit("alert/setLoading", false, { root: true });
        });
    },
  },
  getters: {
    filterOutlet(state) {
      const level = [1, 2];
      return level.includes(state.level);
    },
    buttonBayarCicilan(state) {
      const level = [1, 2, 3, 4];
      return level.includes(state.level);
    },
    buttonPrintInvoice(state) {
      const level = [1, 2, 3, 4];
      return level.includes(state.level);
    },
    buttonPrintSuratJalan(state) {
      const level = [1, 2, 3, 4];
      return level.includes(state.level);
    },
    buttonEditCustomer(state) {
      const level = [1, 2, 3, 4];
      return level.includes(state.level);
    },
    buttonEditSuratJalan(state) {
      const level = [1, 2, 3, 4];
      return level.includes(state.level);
    },
  },
};
