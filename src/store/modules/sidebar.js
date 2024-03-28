export default {
  namespaced: true,
  state: {
    active: 0,
    profile: false,
  },
  mutations: {
    setActive(state, value) {
      if (state.active == value) {
        state.active = 0;
      } else {
        state.active = value;
      }
    },
    profile(state) {
      state.profile = !state.profile;
    },
  },
};
