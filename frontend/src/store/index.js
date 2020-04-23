import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    server_url: "http://localhost:5000/",
    contracts: {},
  },
  getters: {
    repos: (state) => {
      let repo = [];
      for (let key of Object.keys(state.contracts)) {
        repo = repo.concat(state.contracts[key]["repos"]);
      }
      return repo;
    },
  },
  mutations: {
    UPDATE_CONTRACTS(state, contracts) {
      state.contracts = contracts;
    },
  },
  actions: {
    async fetch_contracts({ state, commit }) {
      let res = await axios.get(`${state.server_url}/contracts`);
      let contracts;
      if ("data" in res) contracts = res["data"];
      else return;

      commit("UPDATE_CONTRACTS", contracts);
    },
  },
  modules: {},
});
