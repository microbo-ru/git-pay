export const userService = {
    login,
    logout
}

function login( username ) {


}

function logout() {
    // just remove user's token from the localstorage
    localStorage.removeItem('user');
}