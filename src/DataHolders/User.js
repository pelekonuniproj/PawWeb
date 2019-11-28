
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
}

let UserStore = new User();

export { UserStore }