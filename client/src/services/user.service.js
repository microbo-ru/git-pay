export const userService = {
    login,
    logout
}

function login( username ) {
    if (username) {
        localStorage.setItem('user', JSON.stringify(username));
        console.log("logged in:" + username);
    }
}

function logout() {
    // just remove user's token from the localstorage
    localStorage.removeItem('user');
}