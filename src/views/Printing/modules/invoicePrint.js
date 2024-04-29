import axios from "axios";

export default {
  namespaced: true,
  state: {
    invoice: {
      header: {},
      customer: {},
      details: [],
      payment: {},
    },
    shipping: {
      header: {},
      details: [],
    },
  },
  mutations: {
    resetPrintInvoice(state) {
      state.invoice.header = {};
      state.invoice.customer = {};
      state.invoice.details = [];
      state.invoice.payment = {};
    },
    resetPrintShipping(state) {
      state.shipping.header = {};
      state.shipping.details = [];
    },
    setInvoiceHeader(state, value) {
      state.invoice.header = value;
    },
    setInvoiceCustomer(state, value) {
      state.invoice.customer = value;
    },
    setInvoiceDetails(state, value) {
      state.invoice.details = value;
    },
    setInvoicePayment(state, value) {
      state.invoice.payment = value;
    },
    setShippingHeader(state, value) {
      state.shipping.header = value;
    },
    setShippingDetails(state, value) {
      state.shipping.details = value;
    },
  },
  actions: {
    showPrintInvoice({ commit }, payload) {
      commit("resetPrintInvoice");
      let temp = {
        Receipt: payload,
      };
      commit("alert/setLoading", true, { root: true });
      axios
        .post("print/show-print-invoice", temp)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("setInvoiceHeader", res.data.data.header);
          commit("setInvoiceCustomer", res.data.data.member);
          commit("setInvoiceDetails", res.data.data.details);
          commit("setInvoicePayment", res.data.data.invoice);
        })
        .catch(() => {
          commit("alert/setLoading", false, { root: true });
        });
    },
    showPrintShipping({ commit }, payload) {
      commit("resetPrintShipping");
      let temp = {
        Receipt: payload,
      };
      commit("alert/setLoading", true, { root: true });
      axios
        .post("print/show-print-shipping", temp)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("setShippingHeader", res.data.data.header);
          commit("setShippingDetails", res.data.data.details);
        })
        .catch(() => {
          commit("alert/setLoading", false, { root: true });
        });
    },
    createNoShipping({ commit, dispatch, rootState }, payload) {
      commit("alert/setLoading", true, { root: true });
      let temp = {
        Receipt: payload.receipt,
        outlet: rootState.authentication.user.outlet,
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
    createLogPrint({ commit, state, rootState }) {
      let temp = {
        shipping: state.shipping.header.noshipping,
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
