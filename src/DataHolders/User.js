
class User {
    constructor() {
        this.userName = ""
        this.userToken = ""
        this.hasAdminRights = true
        this.isLogged = false
    }

    getCurrentUser() {
        return this.userName;
    }

    isAdmin() {
        return this.hasAdminRights;
    }

    isLoggedIn() {
        return this.isLogged;
    }

    setToken(token) {
        this.userToken = token
        this.isLogged = true
    }

    getToken() {
        return this.userToken
    }

    setUserName(name) {
        this.userName = name
    }
}

let UserStore = new User();

export { UserStore }