import { userService } from "../services";
//import { router } from "../router";

const user = JSON.parse(localStorage.getItem('user'));

const state = user
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: null };

const actions = {
    login({ /*dispatch,*/ commit }, { username }) {
        console.log("login requested: " + username);
        commit('LOGIN_REQUEST', { username });

        userService.login(username);
        commit('LOGIN_SUCCESS', username);
        //router.push('/')

        /*
        userService.login(username)
            .then(
                username => {
                    commit('LOGIN_SUCCESS', username);
                    index.push('/');
                },
                error => {
                    commit('LOGIN_FAILURE', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
        */
    },
    logout({commit}) {
        userService.logout();
        commit('LOGOUT');
    }
};

const mutations = {
    LOGIN_REQUEST(state, username) {
        state.status = { loggingIn: true };
        state.user = username;
    },
    LOGIN_SUCCESS(state, username) {
        state.status = { loggedIn: true };
        state.user = username;
    },
    LOGIN_FAILURE(state) {
        state.status = {};
        state.user = null;
    },
    LOGOUT(state) {
        state.status = {};
        state.user = null;
    }
};

export const account = {
    namespaced: true,
    state,
    actions,
    mutations
};