export default {
  namespaced: true,
  state: {
    alerts: [],
    loading: false,
  },
  mutations: {
    setAlertSuccess(state, value) {
      state.alerts = [];
      state.alerts.push(value);
    },
    setAlertError(state, value) {
      state.alerts.push(value);
    },
    setLoading(state, value) {
      state.loading = value;
    },
  },
  actions: {
    removeAlertSuccess({ state }) {
      if (state.alerts.length > 0) {
        setTimeout(() => {
          state.alerts.shift();
        }, 1500);
      }
    },
    removeAlertError({ state }) {
      if (state.alerts.length > 0) {
        setTimeout(() => {
          state.alerts.shift();
        }, 3000);
      }
    },
  },
  getters: {
    countAlerts(state) {
      return state.alerts ? state.alerts.length : 0;
    },
  },
};
