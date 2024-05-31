import axios from "axios";
export default {
  namespaced: true,
  state: {
    form: {},
    level: 0,
  },
  mutations: {
    setLevel(state, value) {
      state.level = value;
    },
    setForm(state, value) {
      state.form = value;
    },
  },
  actions: {
    resetRegis({ state, rootState }) {
      state.form.outlet = rootState.authentication.user.outlet;
    },
    regisSave({ commit, state, dispatch, rootState }) {
      commit("alert/setLoading", true, { root: true });
      let temp = {
        form: state.form,
        iduser: rootState.authentication.user.id,
      };
      axios
        .post("user/user-regis", temp)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertSuccess", res.data, { root: true });
          dispatch("alert/removeAlertSuccess", 1, { root: true });
          commit("setForm", {});
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
        });
    },
  },
  getters: {
    formOutlet(state) {
      const level = [2, 3, 4, 5, 6];
      return level.includes(state.level);
    },
  },
};
