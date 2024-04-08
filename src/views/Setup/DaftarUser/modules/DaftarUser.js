import axios from "axios";

export default {
  namespaced: true,
  state: {
    search: {
      search: "",
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
    resetSearch({ dispatch, state }) {
      state.search = {
        search: "",
      };
      dispatch("showListUser");
    },
    showListUser({ commit, state, dispatch }) {
      commit("alert/setLoading", true, { root: true });
      axios
        .post("user/user-list", state.search)
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
