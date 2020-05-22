import { userService } from "../services";
import { router } from "../router";

const user = JSON.parse(localStorage.getItem('user'));

const state = user
    ? { status: { loggedIn: true }, user: user }
    : { status: { }, user: null };

const actions = {
    login({ dispatch, commit }, { username }) {
        commit('LOGIN_REQUEST', { username });

        userService.login(username)
            .then(
                user => {
                    commit('LOGIN_SUCCESS', user);
                    router.push('/');
                },
                error => {
                    commit('LOGIN_FAILURE', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    },
    logout({commit}) {
        userService.logout();
        commit('LOGOUT');
    }
};

const mutations = {
    LOGIN_REQUEST(state, user) {
        state.status = { loggingIn: true };
        state.user = user;
    },
    LOGIN_SUCCESS(state, user) {
        state.status = { loggedIn: true };
        state.user = user;
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