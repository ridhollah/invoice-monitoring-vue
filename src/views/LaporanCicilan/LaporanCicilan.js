import axios from "axios";

export default {
  namespaced: true,
  state: {
    search: {},
    datas: [],
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
      state.datas = value.data;
    },
  },
  actions: {
    resetLaporan({ state, rootState }) {
      state.search = {
        outlet: rootState.authentication.user.outlet,
      };
      state.datas = [];
    },
    showLaporanCicilanByPayment({ commit, state, dispatch }) {
      commit("alert/setLoading", true, { root: true });
      axios
        .post("report/cicilanByPayment", state.search)
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
  },
  getters: {
    filterOutlet(state) {
      const level = [1, 5];
      return level.includes(state.level);
    },
  },
};
