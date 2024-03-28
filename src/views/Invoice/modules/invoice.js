import router from "@/router";
import axios from "axios";

export default {
  namespaced: true,
  state: {
    form: {},
    header: {},
    member: {},
    details: [],
    payment: {},
    checkedmember: false,
    alamatJasa: {
      name: "",
      address: "",
      nohp: "",
      datesend: "",
    },
    checkedProduk: false,
    shippingProduk: [],
  },
  mutations: {
    setForm(state, value) {
      state.form = value;
    },
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
    setChekedMember(state) {
      state.checkedmember = !state.checkedmember;
      if (state.checkedmember) {
        state.alamatJasa.name = state.member.Name;
        state.alamatJasa.address = state.member.Address;
        state.alamatJasa.nohp = state.member.HandPhone;
      } else {
        state.alamatJasa.name = "";
        state.alamatJasa.address = "";
        state.alamatJasa.nohp = "";
      }
    },
    setAlamatJasa(state, value) {
      state.alamatJasa.name = value.name;
      state.alamatJasa.address = value.address;
      state.alamatJasa.nohp = state.member.nohp;
    },
    changeJasa(state) {
      state.alamatJasa.name = state.member.Name;
      state.alamatJasa.address = state.member.Address;
      state.alamatJasa.nohp = state.member.HandPhone;
    },
    setCheckedProduk(state) {
      state.checkedProduk = !state.checkedProduk;
      if (state.checkedProduk == false) {
        state.shippingProduk = [];
      }
    },
    setShippingProduk(state, value) {
      state.shippingProduk = value;
    },
    // HELP
    resetNewTrx(state) {
      state.form = {};
      state.header = {};
      state.member = {};
      state.details = [];
      state.payment = {};
      state.alamatJasa.name = "";
      state.alamatJasa.address = "";
      state.alamatJasa.nohp = "";
      state.alamatJasa.datesend = "";
    },
    resetJasa(state) {
      state.alamatJasa.name = "";
      state.alamatJasa.address = "";
      state.alamatJasa.nohp = "";
      state.alamatJasa.datesend = "";
      state.checkedmember = false;
      state.checkedProduk = false;
      state.shippingProduk = [];
    },
  },
  actions: {
    searchNewTrx({ commit, state, dispatch }) {
      commit("alert/setLoading", true, { root: true });
      axios
        .post("trx/new-trx-search", state.form)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("setHeader", res.data.data.header);
          commit("setMember", res.data.data.member);
          commit("setDetails", res.data.data.details);
          commit("setPayment", res.data.data.payment);
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
        });
    },
    saveNewTrx({ commit, state, dispatch, rootState }) {
      let temp = {
        header: state.header,
        member: state.member,
        payment: state.payment,
        iduser: rootState.authentication.user.id,
        detail: state.details,
        alamatjasa: state.alamatJasa,
        stsproduk: state.checkedProduk,
        shippingProduk: state.shippingProduk,
      };
      commit("alert/setLoading", true, { root: true });
      axios
        .post("trx/new-trx-save", temp)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertSuccess", res.data, { root: true });
          dispatch("alert/removeAlertSuccess", 1, { root: true });

          router.push({
            name: "preview",
            params: { Receipt: state.header.Receipt },
          });

          commit("resetNewTrx");
          commit("resetJasa");
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
        });
    },
  },
  getters: {
    countDetailTrx(state) {
      return state.detailTrx ? state.detail.length : 0;
    },
    countTtlsisa(state) {
      return state.header.ttlsisa > 0
        ? 0
        : state.header.ttlsisa == null
        ? 1
        : 0;
    },
    statusMember(state) {
      return state.header.Member == ""
        ? 0
        : state.header.Member == null
        ? 0
        : 1;
    },
  },
};
