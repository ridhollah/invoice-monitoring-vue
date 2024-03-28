import axios from "axios";

export default {
  namespaced: true,
  state: {
    tenType: [],
    level: [],
  },
  mutations: {
    setTenType(state, value) {
      state.tenType = value;
    },
    setLevel(state, value) {
      state.level = value;
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
  },
};
