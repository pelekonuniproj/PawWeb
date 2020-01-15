
class User {
    constructor() {
        this.userName = ""
        this.userToken = ""
        this.hasAdminRights = true
        this.isLogged = false
        this.ownedBoardsIds = []
        this.userId = 0
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

    setUserId(id) {
        this.userId = id
    }

    getUserId() {
        return this.userId
    }

    logoutUser() {
        this.userName = ""
        this.userToken = ""
        this.isLogged = false
        this.userId = 0
        this.ownedBoardsIds = []
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