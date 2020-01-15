// https://play-rest-api-paw.herokuapp.com/
import Vue from 'vue'
import { UserStore } from '../DataHolders/User'

class Api {
    constructor() {
        this.apiHost = 'http://localhost:8080'
    }

    getBoardsForUser(callBack) {
        const endpoint = this.apiHost + "/board";
        const authValue = "Bearer " + UserStore.getToken()
        const headers = {
            headers: {
                'Authorization': authValue,
                'Access-Control-Allow-Origin': '*',
                'useCredentails': true
            }
        }

        Vue.axios.get(endpoint, headers, {}).then(response => {
            callBack(response.data)
        })
    }

    getCommentsForCard(callBack, cardId) {
        const endpoint = this.apiHost + "/comment/card/" + cardId;
        const authValue = "Bearer " + UserStore.getToken()
        const headers = {
            headers: {
                'Authorization': authValue,
                'Access-Control-Allow-Origin': '*',
                'useCredentails': true
            }
        };

        Vue.axios.get(endpoint, headers).then(response => {
            callBack(response.data)
        })
    }

    addCommentForCard(cardId, comment, onSuccess, onFail) {
        var endpoint = this.apiHost + "/comment/" + cardId;
        const authValue = "Bearer " + UserStore.getToken();

        const headers = {
            headers: {
                'Authorization': authValue,
                'Access-Control-Allow-Origin': '*',
                'useCredentails': true
            }
        };

        Vue.axios.post(endpoint, {
            'card': cardId,
            'content' : comment,
        }, headers).then(response => onSuccess(response.data)).catch(onFail())
    }

    // getBoardsForTeam(teamId, callback) {
    //     var endpoint = this.apiHost + "/board/all/" + teamId;
    //     Vue.axios.get(endpoint).then(response => callback(response.data))
    // }

    getBoardDetails(ownerName, boardName, callback) {
        var endpoint = this.apiHost + "/board/" + ownerName + "/" + boardName
        Vue.axios.get(endpoint).then(response => callback(response.data[0]))
    }

    getCardsForBoardSection(sectionId, callBack) {
        var endpoint = this.apiHost + "/card/all/" + sectionId
        Vue.axios.get(endpoint).then(response => callBack(response.data))
    }

    loginUser(userName, userPass, onSuccess, onFail) {
        var endpoint = this.apiHost + "/login"
        
        Vue.axios.post(endpoint, {
            'login': userName,
            'password': userPass,
        }).then(response => onSuccess(response.data)).catch(onFail())
    }

    registerUser(userName, userPassword, onSuccess, onFail) {
        var endpoint = this.apiHost + "/user";
        Vue.axios.post(endpoint,{
            name: userName,
            surname: "empty",
            login: userName,
            password: userPassword,
            email: "empty@empty.com"
        }).then(response => onSuccess(response.data)).catch(onFail())
    }

    createCard(cardListId, cardTitle, cardDescription, cardLabelId, cardNumberOnList, onSuccess) {
        const endpoint = this.apiHost + "/card"
        const authValue = "Bearer " + UserStore.getToken()

        const headers = {
            headers: {
                'Authorization': authValue,
                'Access-Control-Allow-Origin': '*',
                'useCredentails': true
            }
        }

        Vue.axios.post(endpoint, {
            listId: cardListId,
            title: cardTitle,
            description : cardDescription,
            labelId : cardLabelId,
            numberOnList : cardNumberOnList
        }, headers).then(response => onSuccess(response))
    }

    createBoard(boardName, onSuccess) {
        const endpoint = this.apiHost + "/board";
        const authValue = "Bearer " + UserStore.getToken()

        const headers = {
            headers: {
                'Authorization': authValue,
                'Access-Control-Allow-Origin': '*',
                'useCredentails': true
            }
        }

        Vue.axios.post(endpoint, {
            name: boardName,
            team_id: null,
            background: "",
            isPublic: true
        }, headers).then(response => onSuccess(response))
    }

    updateBoardName(newName, boardId) {
        const endpoint = this.apiHost + "/board/" + boardId;
        const authValue = "Bearer " + UserStore.getToken()

        const headers = {
            headers: {
                'Authorization': authValue,
                'Access-Control-Allow-Origin': '*',
                'useCredentails': true
            }
        }

        Vue.axios.put(endpoint, {
            name: newName,
            background: "",
            isPublic: true
        }, headers)
    }
}

let ApiClient = new Api();

export { ApiClient }