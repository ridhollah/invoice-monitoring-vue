import axios from "axios";

export default {
  namespaced: true,
  state: {
    search: {},
    datas: [],
    level: 0,
    total: 0,
  },
  mutations: {
    setLevel(state, value) {
      state.level = value;
    },
    setSearch(state, value) {
      state.search = value;
    },
    setDatas(state, value) {
      state.datas = value;
    },
    setTotal(state, value) {
      state.total = value;
    },
  },
  actions: {
    resetLaporan({ state, rootState }) {
      state.search = {
        outlet: rootState.authentication.user.outlet,
      };
      state.datas = [];
    },
    showLaporanSalesByProduk({ commit, state, dispatch }) {
      commit("alert/setLoading", true, { root: true });
      axios
        .post("report/byProduk", state.search)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("setDatas", res.data.data);
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
        });
    },
    showLaporanSalesByPayment({ commit, state, dispatch }) {
      commit("alert/setLoading", true, { root: true });
      axios
        .post("report/byPayment", state.search)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("setDatas", res.data.data);
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
        });
    },
    showLaporanSalesByPerson({ commit, state, dispatch }) {
      commit("alert/setLoading", true, { root: true });
      axios
        .post("report/byPerson", state.search)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("setDatas", res.data.data);
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
        });
    },
    showLaporanSalesByMarchine({ commit, state, dispatch }) {
      commit("alert/setLoading", true, { root: true });
      axios
        .post("report/byMarchine", state.search)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("setDatas", res.data.data);
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
        });
    },
    showLaporanCashCount({ commit }, payload) {
      axios
        .post("report/cashcount", payload)
        .then((res) => {
          console.log(res.data);
          commit("setDatas", res.data.data.payment);
          commit("setTotal", res.data.data.total.ttlbayar);
        })
        .catch((err) => {
          commit("setDatas", err.response.data);
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
