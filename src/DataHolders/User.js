
class User {
    constructor() {
        this.userName = 'pelekon'
        this.hasAdminRights = true
    }

    getCurrentUser() {
        return this.userName;
    }

    isAdmin() {
        return this.hasAdminRights;
    }
}

let UserStore = new User();

export { UserStore }