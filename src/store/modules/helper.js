import axios from "axios";

export default {
  namespaced: true,
  state: {
    tenType: [],
    level: [],
    outlets: [],
    kasirs: [],
    laporanCashCount: [],
  },
  mutations: {
    setTenType(state, value) {
      state.tenType = value;
    },
    setLevel(state, value) {
      state.level = value;
    },
    setOutlets(state, value) {
      state.outlets = value;
    },
    setKasirs(state, value) {
      state.kasirs = value;
    },
    setLaporanCashCount(state, value) {
      state.laporanCashCount = value;
    },
  },
  actions: {
    showTenType({ commit }) {
      axios
        .get("service/tendertype")
        .then((res) => {
          commit("setTenType", res.data.data);
        })
        .catch((err) => {
          commit("setTenType", err.response.data.data);
        });
    },
    showOutlets({ commit }) {
      axios
        .get("outlets/show")
        .then((res) => {
          commit("setOutlets", res.data.data);
        })
        .catch((err) => {
          commit("setOutlets", err.response.data.data);
        });
    },
    showKasirByOutlet({ commit }, payload) {
      axios
        .post("kasir/show-by-outlet", payload)
        .then((res) => {
          commit("setKasirs", res.data.data);
        })
        .catch((err) => {
          commit("setKasirs", err.response.data.data);
        });
    },
    showUserLevel({ commit }) {
      axios
        .get("user/level")
        .then((res) => {
          commit("setLevel", res.data.data);
        })
        .catch((err) => {
          commit("setLevel", err.response.data.data);
        });
    },
  },
};
