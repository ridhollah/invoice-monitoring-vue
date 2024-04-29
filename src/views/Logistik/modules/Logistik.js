import axios from "axios";

export default {
  namespaced: true,
  state: {
    search: {
      count: 100,
      status: 0,
      outlet: "",
    },
    datas: [],
    detail: {},
    //
    qc: [],
    //
    idConfirm: {},
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
    setQc(state, value) {
      state.qc = value;
    },
    resetQc(state) {
      state.detail = {};
      state.qc = [];
    },
    setidConfirm(state, value) {
      state.idConfirm = value;
    },
  },
  actions: {
    resetLogistik({ dispatch, state, rootState }) {
      state.search = {
        count: 100,
        status: 0,
        outlet: rootState.authentication.user.outlet,
      };
      dispatch("showTrx");
    },
    showTrx({ commit, dispatch, state, rootState }) {
      commit("setDatas", []);
      commit("alert/setLoading", true, { root: true });
      (state.search.outlet = rootState.authentication.user.outlet),
        axios
          .post("logistik/show-list-trx", state.search)
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
    detailTrx({ commit, dispatch, rootState }, payload) {
      let temp = {
        header: payload,
        iduser: rootState.authentication.user.id,
        outlet: rootState.authentication.user.outlet,
      };
      commit("setDetail", {});
      commit("alert/setLoading", true, { root: true });
      axios
        .post("logistik/show-detail-trx", temp)
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
    saveQc({ commit, dispatch, rootState, state }) {
      let temp = {
        header: state.detail.header,
        produk: state.qc,
        iduser: rootState.authentication.user.id,
      };
      commit("alert/setLoading", true, { root: true });
      axios
        .post("logistik/save-qc", temp)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertSuccess", res.data, { root: true });
          dispatch("alert/removeAlertSuccess", 1, { root: true });
          dispatch("detailTrx", state.detail.header);
          dispatch("showTrx");
          commit("setQc", []);
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
        });
    },
    confirmShipping({ commit, state, dispatch, rootState }) {
      let temp = {
        form: state.idConfirm,
        iduser: rootState.authentication.user.id,
      };
      commit("alert/setLoading", true, { root: true });
      axios
        .post("shipping/confirm", temp)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertSuccess", res.data, { root: true });
          dispatch("alert/removeAlertSuccess", 1, { root: true });
          dispatch("showTrx");
          commit("setidConfirm", {});
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
        });
    },
  },
};
