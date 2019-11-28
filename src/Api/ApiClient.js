// https://play-rest-api-paw.herokuapp.com/
import Vue from 'vue'
//import { UserStore } from '../DataHolders/User'

class Api {
    constructor() {
        this.apiHost = 'http://localhost:8080'
    }

    getBoardsForUser(callBack) {
        const endpoint = this.apiHost + "/board";
        const authValue = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJpc3MiOiJRV0UiLCJleHAiOjE1NzUwMjcwMTJ9.6vj50ydO_GyZzI5yCWwLkcsAyjn2JsiXsUJviSKtQlU"
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
}

let ApiClient = new Api();

export { ApiClient }