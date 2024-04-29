import axios from "axios";
export default {
  namespaced: true,
  state: {
    search: {},
    datas: [],
  },
  mutations: {
    setSearch(state, value) {
      state.search = value;
    },
    setDatas(state, value) {
      state.datas = value.data;
    },
  },
  actions: {
    resetLaporan({ state }) {
      state.search = {};
      state.datas = [];
    },
    showLaporan({ commit, state, dispatch, rootState }) {
      commit("alert/setLoading", true, { root: true });
      state.search.outlet = rootState.authentication.user.outlet;
      axios
        .post("report/sales", state.search)
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
};
