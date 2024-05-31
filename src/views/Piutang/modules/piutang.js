import axios from "axios";

export default {
  namespaced: true,
  state: {
    // ======== TAMBAH MEMBER PIUTANG =============
    search: {},
    members: [],
    searchDetailMember: {},
    detailMember: {},
    newTrxMember: [
      {
        tgl: "",
        receipt: "",
        noshipping: "",
        ttlsales: "0",
        ttlbayar: "0",
      },
    ],
    detailTrxDelete: {},
    // ======== DAFTAR MEMBER PIUTANG ================
    searchDatas: {
      count: 0,
    },
    datasPiutangMember: [],
    level: 0,
    detailTrxMember: {},
    detailTrxMemberByPayment: {},
  },
  mutations: {
    setLevel(state, value) {
      state.level = value;
    },
    reset(state) {
      state.search = {};
      state.member = [];
    },
    resetDatas(state) {
      state.searchDatas = {
        count: 0,
      };
      state.datasPiutangMember = [];
    },
    // ======== TAMBAH MEMBER PIUTANG =============
    addComponent(state) {
      var temp = new Object();
      temp.tgl = 0;
      temp.receipt = "";
      temp.noshipping = "";
      temp.ttlsales = 0;
      temp.ttlbayar = 0;
      state.newTrxMember.push(temp);
    },
    removeComponent(state) {
      if (state.newTrxMember.length < 2) {
        return;
      } else {
        state.newTrxMember.pop();
      }
    },
    setSearch(state, value) {
      state.search = value;
    },
    setMember(state, value) {
      state.members = value;
    },
    setSearchDetailMember(state, value) {
      state.searchDetailMember = value;
    },
    setDetailMember(state, value) {
      state.detailMember = value;
    },
    setResetNewTrx(state) {
      state.newTrxMember = [];
      var temp = new Object();
      temp.tgl = 0;
      temp.receipt = "";
      temp.noshipping = "";
      temp.ttlsales = 0;
      temp.ttlbayar = 0;
      state.newTrxMember.push(temp);
    },
    setDetailTrxDelete(state, value) {
      state.detailTrxDelete = value;
    },
    // ======== DAFTAR MEMBER PIUTANG ================
    setSearchDatas(state, value) {
      state.searchDatas = value;
    },
    setDatasPiutangMember(state, value) {
      state.datasPiutangMember = value;
    },
    // ========== DAFTAR TRX MEMBER PIUTANG =============
    setDetailTrxMember(state, value) {
      state.detailTrxMember = value;
    },
    setDetailTrxMemberByPayment(state, value) {
      state.detailTrxMemberByPayment = value;
    },
  },
  actions: {
    resetSearchDatasMember({ state, rootState, dispatch }) {
      state.searchDatas = {
        count: 100,
        outlet: rootState.authentication.user.outlet,
      };
      dispatch("showDatasPiutangMember");
    },
    // ======== TAMBAH MEMBER PIUTANG =============
    searchMember({ commit, state, dispatch }) {
      commit("alert/setLoading", true, { root: true });
      axios
        .post("piutang/piutang-search", state.search)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("setMember", res.data.data);
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
          commit("setMember", []);
        });
    },
    searchDetailMember({ commit, state, dispatch }) {
      commit("alert/setLoading", true, { root: true });
      axios
        .post("piutang/piutang-detail-member", state.searchDetailMember)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("setDetailMember", res.data.data);
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
          commit("setDetailMember", err.response.data.data);
        });
    },
    addTrx({ commit, state, rootState, dispatch }) {
      let temp = {
        member: state.detailMember.member,
        iduser: rootState.authentication.user.id,
        outlet: rootState.authentication.user.outlet,
        newTrx: state.newTrxMember,
      };
      axios
        .post("piutang/piutang-add-trx", temp)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertSuccess", res.data, { root: true });
          dispatch("alert/removeAlertSuccess", 1, { root: true });
          dispatch("searchDetailMember");
          commit("setResetNewTrx");
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
        });
    },
    deleteTrx({ commit, state, rootState, dispatch }) {
      let temp = {
        member: state.detailMember.member,
        iduser: rootState.authentication.user.id,
        trx: state.detailTrxDelete,
      };
      axios
        .post("piutang/piutang-delete-trx", temp)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertSuccess", res.data, { root: true });
          dispatch("alert/removeAlertSuccess", 1, { root: true });
          dispatch("searchDetailMember");
          commit("setDetailTrxDelete", {});
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
        });
    },
    // ======== DAFTAR MEMBER PIUTANG ================
    showDatasPiutangMember({ commit, state, dispatch }) {
      commit("alert/setLoading", true, { root: true });
      axios
        .post("piutang/piutang-datas", state.searchDatas)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("setDatasPiutangMember", res.data.data);
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
          commit("setDatasPiutangMember", err.response.data.data);
        });
    },
    // ======== DAFTAR TRX MEMBER PIUTANG ===============
    showDetailTrxMember({ commit, dispatch }, payload) {
      commit("alert/setLoading", true, { root: true });
      axios
        .post("piutang/piutang-show-detail-trx-member", payload)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("setDetailTrxMember", res.data.data);
          commit("setDetailTrxMemberByPayment", {});
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
          commit("setDetailTrxMember", err.response.data.data);
          commit("setDetailTrxMemberByPayment", {});
        });
    },
    showDetailTrxMemberByPayment({ commit, dispatch }, payload) {
      commit("alert/setLoading", true, { root: true });
      axios
        .post("piutang/piutang-show-detail-trx-member-byPayment", payload)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("setDetailTrxMemberByPayment", res.data.data);
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
          commit("setDetailTrxMemberByPayment", err.response.data.data);
        });
    },
  },
  getters: {
    filterOutlet(state) {
      const level = [1, 5];
      return level.includes(state.level);
    },
    countMembers(state) {
      return state.members.length > 0 ? state.members.length : 0;
    },
    // lengthInvoiceReturn(state) {},
  },
};
