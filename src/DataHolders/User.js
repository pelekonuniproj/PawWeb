
class User {
    constructor() {
        this.userName = ""
        this.userToken = ""
        this.hasAdminRights = true
        this.isLogged = false
        this.ownedBoardsIds = []
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

    logoutUser() {
        this.userName = ""
        this.userToken = ""
        this.isLogged = false
    }

    setOwnerBoardsID(array) {
        this.ownedBoardsIds = array
    }

    isOwningBoard(boardId) {
        var found = false
        this.ownedBoardsIds.forEach(element => {
            if (element == boardId) {
                found = true
            }
        });

        return found
    }
}

let UserStore = new User();

export { UserStore }