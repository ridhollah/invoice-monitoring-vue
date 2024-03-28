import axios from "axios";

export default {
  namespaced: true,
  state: {
    header: {},
    member: {},
    details: [],
    payment: {},
    shipping: {},
  },
  mutations: {
    setHeader(state, value) {
      state.header = value;
    },
    setMember(state, value) {
      state.member = value;
    },
    setDetails(state, value) {
      state.details = value;
    },
    setPayment(state, value) {
      state.payment = value;
    },
    setShipping(state, value) {
      state.shipping = value;
    },
    reset(state) {
      state.header = {};
      state.member = {};
      state.details = [];
      state.payment = {};
      state.shipping = {};
    },
  },
  actions: {
    showPrintInvoice({ commit, rootState }, payload) {
      commit("reset");
      let temp = {
        Receipt: payload,
        iduser: rootState.authentication.user.id,
      };
      commit("alert/setLoading", true, { root: true });
      axios
        .post("print/show-print-invoice", temp)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("setHeader", res.data.data.header);
          commit("setMember", res.data.data.member);
          commit("setDetails", res.data.data.details);
          commit("setPayment", res.data.data.invoice);
        })
        .catch(() => {
          commit("alert/setLoading", false, { root: true });
        });
    },
    showPrintShipping({ commit, rootState }, payload) {
      let temp = {
        Receipt: payload,
        iduser: rootState.authentication.user.id,
      };
      commit("alert/setLoading", true, { root: true });
      axios
        .post("print/show-print-shipping", temp)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("setHeader", res.data.data.header);
          commit("setDetails", res.data.data.details);
          commit("setShipping", res.data.data.shipping);
        })
        .catch(() => {
          commit("alert/setLoading", false, { root: true });
        });
    },
    createNoShipping({ commit, dispatch }, payload) {
      commit("alert/setLoading", true, { root: true });
      let temp = {
        Receipt: payload.receipt,
      };
      if (payload.noshipping == "") {
        axios
          .post("shipping/create", temp)
          .then((res) => {
            commit("alert/setLoading", false, { root: true });
            commit("alert/setAlertSuccess", res.data, { root: true });
            dispatch("alert/removeAlertSuccess", 1, { root: true });
            dispatch("transaksiReceipt/showReceipt", null, { root: true });
            dispatch("logistik/showTrx", null, { root: true });
          })
          .catch((err) => {
            commit("alert/setLoading", false, { root: true });
            commit("alert/setAlertError", err.response.data, { root: true });
            dispatch("alert/removeAlertError", 0, { root: true });
          });
      } else {
        commit("alert/setLoading", false, { root: true });
      }
    },
    logPrint({ commit, state, rootState }) {
      let temp = {
        shipping: state.shipping,
        iduser: rootState.authentication.user.id,
      };
      commit("alert/setLoading", true, { root: true });
      axios
        .post("shipping/log-print", temp)
        .then(() => {
          commit("alert/setLoading", false, { root: true });
        })
        .catch(() => {
          commit("alert/setLoading", false, { root: true });
        });
    },
  },
};
