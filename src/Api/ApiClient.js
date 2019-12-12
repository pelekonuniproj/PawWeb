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

    // getBoardsForTeam(teamId, callback) {
    //     var endpoint = this.apiHost + "/board/all/" + teamId;
    //     Vue.axios.get(endpoint).then(response => callback(response.data))
    // }

    getBoardDetails(ownerName, boardName, callback) {
        var endpoint = this.apiHost + "/board/" + ownerName + "/" + boardName
        Vue.axios.get(endpoint).then(response => callback(response.data[0]))
    }

    getTasksForBoardSection(sectionId, callBack) {
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

    createCard(listId, title, description, labelId, numberOnList, onSuccess, onFail) {
        var endpoint = this.apiHost + "/card"

        Vue.axios.post(endpoint, {
            'listId': listId,
            'title': title,
            'description' : description,
            'labelId' : labelId,
            'numberOnList' : numberOnList
        }).then(response => onSuccess(response.data)).catch(onFail())
    }
}

let ApiClient = new Api();

export { ApiClient }