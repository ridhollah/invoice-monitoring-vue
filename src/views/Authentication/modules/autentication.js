import axios from "axios";
import router from "../../../router";

export default {
  namespaced: true,
  state: {
    formLogin: {},
    isLoggedIn: false,
    user: {},
    menu: [],
  },
  mutations: {
    setFormLogin(state, value) {
      state.formLogin = value;
    },
    setIsLoggedIn(state, value) {
      state.isLoggedIn = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setMenu(state, value) {
      state.menu = value;
    },
  },
  actions: {
    setLevel({ commit, state }) {
      commit("transaksiReceipt/setLevel", state.user.level, { root: true });
      commit("transaksiReturn/setLevel", state.user.level, { root: true });
      commit("laporanSales/setLevel", state.user.level, { root: true });
      commit("laporanReturn/setLevel", state.user.level, { root: true });
      commit("laporanCicilan/setLevel", state.user.level, { root: true });
      commit("invoice/setLevel", state.user.level, { root: true });
      commit("invoiceReturn/setLevel", state.user.level, { root: true });
      commit("laporanSuratJalan/setLevel", state.user.level, { root: true });
      commit("logistik/setLevel", state.user.level, { root: true });
      commit("daftarUser/setLevel", state.user.level, { root: true });
      commit("registrasiUser/setLevel", state.user.level, { root: true });
      commit("piutang/setLevel", state.user.level, { root: true });
    },
    Login({ commit, state, dispatch }) {
      commit("alert/setLoading", true, { root: true });
      axios
        .post("user/user-login", state.formLogin)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("setUser", res.data.data);
          localStorage.setItem("token", res.data.data.token);
          commit("setIsLoggedIn", !state.isLoggedIn);
          commit("setFormLogin", {});
          router.go();
        })
        .catch((err) => {
          commit("setIsLoggedIn", state.isLoggedIn);
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
        });
    },
    async showUserByToken({ commit, state, dispatch }) {
      if (!localStorage.getItem("token")) {
        return;
      } else {
        const temp = new Object();
        temp.token = localStorage.getItem("token");
        await axios
          .post("user/user-bytoken", temp)
          .then((res) => {
            commit("setUser", res.data.data);
            commit("setMenu", res.data.data.menu);
            commit("setIsLoggedIn", !state.isLoggedIn);
            commit("alert/setAlertSuccess", res.data, { root: true });
            dispatch("alert/removeAlertSuccess", 1, { root: true });
            dispatch("setLevel");
          })
          .catch((err) => {
            console.log(err.response.data.code);
            commit("setIsLoggedIn", state.isLoggedIn);
            commit("alert/setAlertError", err.response.data, { root: true });
            dispatch("alert/removeAlertError", 0, { root: true });
          });
      }
    },
    Logout({ commit, state }) {
      commit("alert/setLoading", true, { root: true });
      axios
        .post("user/user-logout", state.user)
        .then(() => {
          commit("alert/setLoading", false, { root: true });
          commit("setIsLoggedIn", false);
          commit("setUser", {});
          localStorage.removeItem("token");
          router.push({ path: "/login" });
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          return err.response;
        });
    },
    updateProfile({ commit, dispatch, rootState, state }) {
      commit("alert/setLoading", true, { root: true });
      let temp = {
        detail: rootState.daftarUser.detail,
        iduser: rootState.authentication.user.id,
      };
      axios
        .post("user/user-profile-update", temp)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertSuccess", res.data, { root: true });
          dispatch("alert/removeAlertSuccess", 1, { root: true });
          dispatch("showUserByToken");
          commit("setIsLoggedIn", !state.isLoggedIn);
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("alert/setAlertError", err.response.data, { root: true });
          dispatch("alert/removeAlertError", 0, { root: true });
        });
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
  },
};
