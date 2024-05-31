import axios from "axios";
export default {
  namespaced: true,
  state: {
    datas: [
      {
        outlet: "7001",
        value: "548879Q4D6",
        product: "MEJA BLACK KAKINYA ADA 2",
        price: "1550000",
        size: "1",
        uom: "unit",
        retailprice: "1250000",
        expdate: "20/05/2025",
      },
      {
        outlet: "7001",
        value: "548879Q4D7",
        product: "MEJA BLACK KAKINYA ADA 4",
        price: "1550000",
        size: "1",
        uom: "unit",
        retailprice: "1250000",
        expdate: "20/05/2025",
      },
      {
        outlet: "7001",
        value: "548879Q4D8",
        product: "MEJA BLACK KAKINYA ADA 4",
        price: "1550000",
        size: "1",
        uom: "unit",
        retailprice: "1250000",
        expdate: "20/05/2025",
      },
      {
        outlet: "7001",
        value: "548879Q4D9",
        product: "MEJA BLACK KAKINYA ADA 4",
        price: "1550000",
        size: "1",
        uom: "unit",
        retailprice: "1250000",
        expdate: "20/05/2025",
      },
      {
        outlet: "7001",
        value: "548879Q4D10",
        product: "MEJA BLACK KAKINYA ADA 4",
        price: "1550000",
        size: "1",
        uom: "unit",
        retailprice: "1250000",
        expdate: "20/05/2025",
      },
      {
        outlet: "7001",
        value: "548879Q411",
        product: "MEJA BLACK KAKINYA ADA 4",
        price: "1550000",
        size: "1",
        uom: "unit",
        retailprice: "1250000",
        expdate: "20/05/2025",
      },
      {
        outlet: "7001",
        value: "548879Q412",
        product: "MEJA BLACK KAKINYA ADA 4",
        price: "1550000",
        size: "1",
        uom: "unit",
        retailprice: "1250000",
        expdate: "20/05/2025",
      },
      {
        outlet: "7001",
        value: "548879Q413",
        product: "MEJA BLACK KAKINYA ADA 4",
        price: "1550000",
        size: "1",
        uom: "unit",
        retailprice: "1250000",
        expdate: "20/05/2025",
      },
    ],
    search: {},
  },
  mutations: {
    setSearch(state, value) {
      state.search = value;
    },
    setDatas(state, value) {
      state.datas = value;
    },
  },
  actions: {
    remove({ state }, payload) {
      state.datas.slice(payload, 1);
    },
    searchValue({ commit, state }) {
      axios
        .post("transaksi/transaksi-search-member", state.search)
        .then((res) => {
          commit("alert/setLoading", false, { root: true });
          commit("setDatas", res.data.data);
        })
        .catch((err) => {
          commit("alert/setLoading", false, { root: true });
          commit("setDatas", err.response.data.data);
        });
    },
  },
  getters: {},
};
