import axios from "axios";

export default {
  namespaced: true,
  state: {
    search: {
      count: 100,
      // status: 99,
      outlet: "",
    },
    datas: [],
    details: {
      header: {},
      barang: [],
      payment: [],
    },
    level: 0,
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
    },
    setDetails(state, value) {
      state.details.header = value.header;
      state.details.barang = value.details;
      state.details.payment = value.payment;
    },
  },
  actions: {
    resetSearchReceipt({ state, dispatch, rootState }) {
      state.search = {
        count: 100,
        // status: 99,
        outlet: rootState.authentication.user.outlet,
      };
      dispatch("showReceipt");
    },
    showReceipt({ commit, state, dispatch }) {
      commit("alert/setLoading", true, { root: true });
      axios
        .post("return/transaksi-data-return", state.search)
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
        .post("return/transaksi-data-return-detail", payload)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("setDetails", res.data.data);
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("setDetails", err.response.data.data);
        });
    },
  },
  getters: {
    filterOutlet(state) {
      const level = [1, 5];
      return level.includes(state.level);
    },
  },
};
