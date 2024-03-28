import axios from "axios";

export default {
  namespaced: true,
  state: {
    search: {
      count: 10,
      status: 0,
    },
    datas: [],
  },
  mutations: {
    setSearch(state, value) {
      state.search = value;
    },
    setDatas(state, value) {
      state.datas = value;
    },
  },
  actions: {
    resetSearchCicilanDp({ state, dispatch }) {
      state.search = {
        count: 10,
        status: 0,
      };
      dispatch("showCicilanDp");
    },
    showCicilanDp({ commit, state, dispatch }) {
      commit("alert/setLoading", true, { root: true });
      axios
        .post("transaksi/transaksi-data-cicilan-dp", state.search)
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
  },
};
