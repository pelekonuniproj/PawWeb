
class User {
    constructor() {
        this.userName = 'qwe'
        this.userToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJpc3MiOiJRV0UiLCJleHAiOjE1NzQ3OTI4Nzd9.hk6Sx0A-ylEcKrTfHfhosUnpFB0G3mIhFgYE7ldpHlk"
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