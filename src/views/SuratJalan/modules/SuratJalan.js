export default {
  namespaced: true,
  state: {
    search: {
      count: 10,
    },
    datas: [],
  },
  mutations: {
    setSearch(state, value) {
      state.search = value;
    },
    setDatas(state, value) {
      state.datas = value;
    },
  },
  actions: {},
  getters: {},
};
