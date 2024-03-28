import axios from "axios";
import moment from "moment";

export default {
  namespaced: true,
  state: {
    search: {
      tglawal: moment().format("YYYY-MM-D"),
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
        tglawal: moment().format("YYYY-MM-D"),
      };
      dispatch("LaporanPembayaran");
    },
    LaporanPembayaran({ commit, state, dispatch }) {
      commit("alert/setLoading", true, { root: true });
      axios
        .post("report/cicilan", state.search)
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
