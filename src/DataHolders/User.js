
class User {
    constructor() {
        this.userName = 'pelekon'
    }

    getCurrentUser() {
        return this.userName;
    }
}

let UserStore = new User();

export { UserStore }