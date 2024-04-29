import axios from "axios";

export default {
  namespaced: true,
  state: {
    search: {
      search: "",
    },
    datas: [],
    detail: {},
  },
  mutations: {
    setSearch(state, value) {
      state.search = value;
    },
    setDatas(state, value) {
      state.datas = value;
    },
    setDetail(state, value) {
      state.detail = value;
    },
  },
  actions: {
    resetSearch({ dispatch, state }) {
      state.search = {
        search: "",
      };
      dispatch("showListUser");
    },
    showListUser({ commit, state, dispatch, rootState }) {
      commit("alert/setLoading", true, { root: true });
      state.search.outlet = rootState.authentication.user.outlet;
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
    showDetailUser({ commit, dispatch }, payload) {
      commit("setDetail", {});
      commit("alert/setLoading", true, { root: true });
      axios
        .post("user/user-detail", payload)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("setDetail", res.data.data);
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
        });
    },
    updateDetailUser({ commit, dispatch, state, rootState }) {
      commit("alert/setLoading", true, { root: true });
      let temp = {
        detail: state.detail,
        iduser: rootState.authentication.user.id,
      };
      axios
        .post("user/user-detail-update", temp)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertSuccess", res.data, { root: true });
          dispatch("alert/removeAlertSuccess", 1, { root: true });
          commit("setDetail", res.data.data);
          dispatch("showListUser");
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
        });
    },
  },
};
