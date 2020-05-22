import Vue from "vue";
import Vuex from "vuex";

import { alert } from "./alert.module";
import { account } from "./account.module";
import { common } from "./common.module";

Vue.use(Vuex);

export default new Vuex.Store({

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

        for (let pull of user["marked_pulls"]) res.push(pull);
      }
      return res.reverse();
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

    get_agreed: (state) => {
      return state.agreed;
    }
  },

  modules: {
    account,
    alert,
    common
  }

});
