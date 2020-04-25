import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    server_url: process.env.VUE_APP_SERVER_URL,
    contracts: {},
    pulls: {},
    username: "",
    repos: [],
    avatar_url: "",
    marked_repos: [],
    user_status: "user",
    marked_pulls: [],
    all_marked_pulls: [],
    selected_pull: {},
    users: {},
  },
  getters: {
    repos: (state) => {
      let repo = [];
      for (let key of Object.keys(state.contracts)) {
        repo = repo.concat(state.contracts[key]["repos"]);
      }
      return repo;
    },
    get_pulls_titles: (state) => {
      return state.pulls[state.username].items.map(({ title }) => title);
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
    get_marked_pulls: (state) => {
      return state.marked_pulls;
    },
    get_all_marked_pulls: (state) => {
      let res = [];

      for (let user of Object.values(state.users)) {
        if (user.status != "empl") continue;
        console.log(user);
        for (let pull of user["marked_pulls"]) res.push(pull);
      }
      return res;
    },
    get_contracts: (state) => {
      return state.contracts;
    },
    get_pulls_url_by_title: (state) => (req_title) => {
      return state.pulls[state.username].items.filter(
        ({ title }) => title == req_title
      )[0];
    },
    get_selected_pull: (state) => {
      console.log(state);
      return state.selected_pull;
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
    UPDATE_STATUS(state, status) {
      state.status = status;
    },
    SET_REPOS(state, repos) {
      state.repos = repos;

      state.avatar_url = state.repos[0].owner.avatar_url;
    },
    SET_MARKED_REPOS(state, repos) {
      state.marked_repos = repos;
    },
    SET_MARKED_PULLS(state, pulls) {
      state.marked_pulls = pulls;
    },
    SET_ALL_MARKED_PULLS(state, pulls) {
      state.all_marked_pulls = pulls;
    },
    SET_SELECTED_PULL(state, pull) {
      state.selected_pull = pull;
    },
    UPDATE_USERS(state, users) {
      state.users = users;
      console.log(users);
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
    async fetch_prs_by_author({ state, commit }, author) {
      let res = await axios.post(`${state.server_url}/pulls`, { author });
      res = JSON.parse(res.data);
      commit("UPDATE_PRS_BY_AUTHOR", { author, pulls: res });
    },
    async set_username({ state, commit, dispatch }, name) {
      commit("UPDATE_USERNAME", name);
      dispatch("fetch_prs_by_author", name);
      dispatch("fetch_repos");
      dispatch("fetch_marked_repos");
      dispatch("fetch_marked_pulls");
      let res = await axios.get(`${state.server_url}/users`);

      let users = res.data;
      let status = users[name]["status"];
      console.log(users, status);
      commit("UPDATE_STATUS", status);
    },
    async fetch_repos({ state, commit }) {
      if (!state.username) return;
      let repos = await axios.post(`${state.server_url}/repos`, {
        username: state.username,
      });
      console.log(repos);
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
    async fetch_marked_pulls({ state, commit }) {
      if (!state.username) return;
      let pulls = await axios.post(`${state.server_url}/get_marked_pulls`, {
        username: state.username,
      });
      for (let pull of pulls.data) {
        pull["extra"] = JSON.parse(pull["extra"]);
      }
      commit("SET_MARKED_PULLS", pulls.data);
    },
    async fetch_all_marked_pulls({ state, commit }) {
      let pulls = await axios.get(`${state.server_url}/get_marked_pulls`);
      for (let pull of pulls.data) {
        pull["extra"] = JSON.parse(pull["extra"]);
      }
      commit("SET_ALL_MARKED_PULLS", pulls.data);
    },
    set_selected_pull({ commit }, pull) {
      commit("SET_SELECTED_PULL", pull);
    },
    async fetch_users({ state, commit }) {
      let users = await axios.get(`${state.server_url}/users`);
      users = users.data;
      for (let user in users) {
        for (let pull of users[user]["marked_pulls"]) {
          pull["extra"] = JSON.parse(pull["extra"]);
        }
      }
      commit("UPDATE_USERS", users);
    },
  },
  modules: {},
});
