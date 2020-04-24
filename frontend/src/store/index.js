import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    server_url: "http://localhost:5000",
    contracts: {},
    pulls: {},
    username: "",
    repos: [],
    avavtar_url: "",
    marked_repos: [],
  },
  getters: {
    repos: (state) => {
      let repo = [];
      for (let key of Object.keys(state.contracts)) {
        repo = repo.concat(state.contracts[key]["repos"]);
      }
      return repo;
    },
    pulls_by_author: (state) => (author) => {
      return state.pulls[author].items;
    },
    ready_to_show_pulls: (state) => {
      return state.username in state.pulls;
    },
    get_repos: (state) => {
      return state.repos;
    },
    get_marked_repos: (state) => {
      return state.marked_repos;
    },
    get_contracts: (state) => {
      return state.contracts;
    },
  },
  mutations: {
    UPDATE_CONTRACTS(state, contracts) {
      state.contracts = contracts;
    },
    UPDATE_PRS_BY_AUTHOR(state, payload) {
      let author = payload.author;
      let pulls = payload.pulls;

      Vue.set(state.pulls, author, pulls);
    },
    UPDATE_USERNAME(state, username) {
      state.username = username;
    },
    SET_REPOS(state, repos) {
      state.repos = repos;
      state.avatar_url = state.repos[0].owner.avatar_url;
    },
    SET_MARKED_REPOS(state, repos) {
      state.marked_repos = repos;
    },
  },
  actions: {
    async fetch_contracts({ state, commit }) {
      let res = await axios.get(`${state.server_url}/contracts`);
      let contracts;
      if ("data" in res) contracts = res["data"];
      else return;
      console.log(contracts);
      commit("UPDATE_CONTRACTS", contracts);
    },
    async fetch_prs_by_author({ state, commit }, author) {
      let res = await axios.post(`${state.server_url}/pulls`, { author });
      res = JSON.parse(res.data);
      commit("UPDATE_PRS_BY_AUTHOR", { author, pulls: res });
    },
    set_username({ commit, dispatch }, name) {
      dispatch("fetch_prs_by_author", name);
      commit("UPDATE_USERNAME", name);
    },
    async fetch_repos({ state, commit }) {
      if (!state.username) return;
      let repos = await axios.post(`${state.server_url}/repos`, {
        username: state.username,
      });

      commit("SET_REPOS", JSON.parse(repos.data));
    },
    async fetch_marked_repos({ state, commit }) {
      if (!state.username) return;
      let repos = await axios.post(`${state.server_url}/marked_repos`, {
        username: state.username,
      });
      repos.data = repos.data.map((json) => JSON.parse(json));
      commit("SET_MARKED_REPOS", repos.data);
    },
  },
  modules: {},
});
