import axios from "axios";

export default {
  namespaced: true,
  state: {
    search: {
      status: 2,
    },
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
    resetLaporan({ state, dispatch }) {
      state.search = {
        status: 2,
      };
      dispatch("laporan");
    },
    laporan({ commit, state, dispatch }) {
      commit("alert/setLoading", true, { root: true });
      axios
        .post("report/shipping", state.search)
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
